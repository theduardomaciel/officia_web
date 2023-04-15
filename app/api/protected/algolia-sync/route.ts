import { NextResponse } from 'next/server';

import { algoliasearch } from 'algoliasearch';

/* Para des-logar: colocar 'http://logout:logout@' antes da URL */

export async function GET(request: Request) {
	const algoliaClient = algoliasearch(
		process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
		process.env.ALGOLIA_ADMIN_KEY as string
	);

	const articles = await getAllSerializedArticles();

	const requests: any = articles.map((article) => {
		return {
			action: 'addObject',
			body: article
		};
	});

	// sending the data to Algolia
	const { taskID } = await algoliaClient.batch({
		indexName: 'officia_help',
		batchWriteParams: {
			requests
		}
	});

	// Wait for indexing to be finished
	try {
		await algoliaClient.waitForTask({ indexName: 'officia_help', taskID });

		return NextResponse.json({
			success: `✅ Content successfully synchronized with Algolia search!`
		});
	} catch (error) {
		return NextResponse.json({
			error: `❌ Error while synchronizing content with Algolia search.`
		});
	}
}

import matter from 'gray-matter';

import fs from 'fs';
import path from 'path';

const rootDirectory = path.join(process.cwd(), 'content');

const getSerializedArticleBySlug = async (section: string, slug: string) => {
	const realSlug = slug.replace(/\.mdx$/, '');
	const filePath = path.join(rootDirectory, section, `${realSlug}.mdx`);

	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
	const { content, data } = matter(fileContent);

	// testar depois
	const parsedContent = content.replace(/(\r\n|\n|\r)/gm, '').replace(/<.*>/, '');

	const article = {
		title: data.title,
		slug: realSlug,
		publishedAt: new Date(data.publishedAt),
		updatedAt: new Date(data.updatedAt),
		section: section,
		content: parsedContent
	};

	return article;
};

const getSectionSerializedArticles = async (section: string) => {
	const files = fs.readdirSync(path.join(rootDirectory, section));

	let articles: any[] = [];

	for (const file of files) {
		const article = await getSerializedArticleBySlug(section, file);
		articles.push(article);
	}

	return articles;
};

const getAllSerializedArticles = async () => {
	const sections = fs.readdirSync(rootDirectory);

	let articles: any[] = [];

	for (const section of sections) {
		const sectionArticles = await getSectionSerializedArticles(section);
		articles = [...articles, ...sectionArticles];
	}

	return articles;
};
