import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { JSXElementConstructor, ReactElement } from 'react';

import { serialize } from 'next-mdx-remote/serialize';

import { ArticleAbstract } from 'components/mdx-elements/ArticleAbstract';
import { Heading } from 'components/mdx-elements/Heading';
import { Subheading } from 'components/mdx-elements/Subheading';

const mdxComponents = {
	ArticleAbstract,
	Heading,
	Subheading
};

const rootDirectory = path.join(process.cwd(), 'content');

export interface ArticleMeta {
	title: string;
	slug: string;
	publishedAt: string;
	updatedAt: string;
}

interface Article {
	meta: ArticleMeta;
	content: ReactElement<any, string | JSXElementConstructor<any>>;
}

export const getArticleBySlug = async (section: string, slug: string) => {
	const realSlug = slug.replace(/\.mdx$/, '');
	const filePath = path.join(rootDirectory, section, `${realSlug}.mdx`);

	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

	const { frontmatter, content } = await compileMDX({
		source: fileContent,
		options: { parseFrontmatter: true },
		components: mdxComponents
	});

	const article = {
		meta: { ...frontmatter, slug: realSlug } as ArticleMeta,
		content
	};

	return article;
};

export const getSectionArticlesMeta = async (section: string) => {
	const files = fs.readdirSync(path.join(rootDirectory, section));

	let articles: ArticleMeta[] = [];

	for (const file of files) {
		const { meta } = await getArticleBySlug(section, file);
		articles.push(meta);
	}

	return articles;
};

export const getSectionArticles = async (section: string) => {
	const files = fs.readdirSync(path.join(rootDirectory, section));

	let articles: Article[] = [];

	for (const file of files) {
		const article = await getArticleBySlug(section, file);
		articles.push(article);
	}

	return articles;
};

export const getAllArticlesMeta = async () => {
	const sections = fs.readdirSync(rootDirectory);

	let articlesMeta: ArticleMeta[] = [];

	for (const section of sections) {
		const sectionArticles = await getSectionArticlesMeta(section);
		articlesMeta = [...articlesMeta, ...sectionArticles];
	}

	return articlesMeta;
};

/* SERIALIZED ================================================== */

/* export const getSerializedArticleBySlug = async (section: string, slug: string) => {
	const realSlug = slug.replace(/\.mdx$/, '');
	const filePath = path.join(rootDirectory, section, `${realSlug}.mdx`);

	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

	const { frontmatter, compiledSource } = await serialize(fileContent, {
		parseFrontmatter: true
	});

	const article = {
		meta: { ...frontmatter, slug: realSlug } as ArticleMeta,
		compiledSource
	};

	return article;
};

export const getSectionSerializedArticles = async (section: string) => {
	const files = fs.readdirSync(path.join(rootDirectory, section));

	let articles: any[] = [];

	for (const file of files) {
		const article = await getSerializedArticleBySlug(section, file);
		articles.push(article);
	}

	return articles;
}; */
