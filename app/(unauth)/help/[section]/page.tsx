import Link from 'next/link';

import { Logo } from 'components/Icons';

// Components
import { Container, PageHeader, Section } from 'components/Layout';
import Header, { HeaderTitle } from 'components/Header';
import NavigationAnchor from 'components/NavigationAnchor';
import HelpSearchBar from 'app/(unauth)/help/subcomponents/HelpSearchBar';

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
				<NavigationAnchor href="/contact">Fale Conosco</NavigationAnchor>
			</Header>
			<Container>
				<PageHeader>
					<div className="flex flex-col items-center justify-center gap-y-8 px-wrapper">
						<Logo width={75} height={60} className="z-10" />
						<h1 className="z-10 w-full text-center font-title text-4xl text-[var(--neutral)] lg:w-fit lg:text-5xl">
							{sectionTitle}
						</h1>
						<HelpSearchBar
							placeholder="Descreva o problema ou dúvida"
							className="min-w-[35vw]"
						/>
					</div>
				</PageHeader>
				<Section>
					<ul className="flex w-full flex-row flex-wrap items-start justify-between gap-y-14">
						{articles.map((article) => (
							<ArticleLink
								key={article.slug}
								meta={article}
								href={`/help/${section}/${article.slug}`}
							/>
						))}
					</ul>
				</Section>
			</Container>
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
			className="flex w-full flex-col items-center justify-start gap-x-9 rounded-[10px] bg-gray-300 dark:bg-dark-gray-400 p-9 transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-dark-gray-300 lg:flex-row"
		>
			<h6 className="text-left text-lg font-semibold text-[var(--neutral)]">{meta.title}</h6>
			<p className="text-left text-sm font-normal text-text-100">
				{lastUpdatedAtString ?? publishedAtString}
			</p>
		</Link>
	);
};
