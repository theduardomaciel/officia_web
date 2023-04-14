import Link from 'next/link';

// Components
import Header, { HeaderTitle } from 'components/Header';
import { GoToContactButton, PageHeader } from '../subcomponents/Layout';

// Utils
import { ArticleMeta, getSectionArticlesMeta } from 'lib/mdx';
import { convertDate } from 'lib/date';

export default async function HelpSection({ params }: { params: { section: string } }) {
	const { section } = params;
	const sectionTitle = section.charAt(0).toUpperCase() + section.slice(1);

	const articles = await getSectionArticlesMeta(section);

	return (
		<>
			<Header>
				<HeaderTitle title="Central de Ajuda" href="/help" />
				<GoToContactButton />
			</Header>
			<main className="relative z-10 flex min-h-screen flex-col items-center justify-start">
				<PageHeader title={sectionTitle} />
				<section className="flex w-full flex-col items-start justify-center gap-y-20 px-wrapper py-section">
					<ul className="flex w-full flex-row flex-wrap items-start justify-between gap-y-14">
						{articles.map((article) => (
							<ArticleLink
								key={article.slug}
								meta={article}
								href={`/help/${section}/${article.slug}`}
							/>
						))}
					</ul>
				</section>
			</main>
		</>
	);
}

const ArticleLink = ({ meta, href }: { meta: ArticleMeta; href: string }) => {
	const date = new Date();

	const publishedAtString = `Publicado ${convertDate(new Date(meta.publishedAt))}`;
	const lastUpdatedAtString = meta.updatedAt
		? `Última atualização ${convertDate(new Date(meta.updatedAt))}`
		: null;

	return (
		<Link
			href={href}
			className="flex w-full flex-col items-center justify-start gap-x-9 rounded-[10px] bg-gray-400 p-9 transition-colors duration-300 ease-in-out hover:bg-gray-300 lg:flex-row"
		>
			<h6 className="text-left text-lg font-semibold text-white">{meta.title}</h6>
			<p className="text-left text-sm font-normal text-text-100">
				{lastUpdatedAtString ?? publishedAtString}
			</p>
		</Link>
	);
};
