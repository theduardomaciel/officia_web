import Image from 'next/image';
import Link from 'next/link';

// Components
import Header from 'components/Header';
import HelpSearchBar from 'app/(unauth)/help/subcomponents/HelpSearchBar';

// Utils
import { ArticleMeta, getArticleBySlug, getSectionArticlesMeta } from 'lib/mdx';
import { convertDate } from 'lib/date';
import { ChevronRight } from 'lucide-react';
import { Container, PageHeader, Section } from 'components/Layout';

interface PageProps {
	params: {
		section: string;
		slug: string;
	};
}

export async function generateMetadata({ params }: PageProps) {
	const { meta } = await getArticleBySlug(params.section, params.slug);
	return { title: meta.title };
}

export default async function HelpSection({ params }: PageProps) {
	const { section, slug } = params;

	const sectionArticles = await getSectionArticlesMeta(section);

	const article = await getArticleBySlug(section, slug);

	const publishedAtString = `Publicado ${convertDate(new Date(article.meta.publishedAt))}`;
	const lastUpdatedAtString = article.meta.updatedAt
		? `Última atualização ${convertDate(new Date(article.meta.updatedAt))}`
		: null;

	return (
		<>
			<Header>
				<HelpSearchBar
					placeholder="Pesquisar por ajuda"
					className="border-none py-2 min-w-[22.5vw] max-w-[25vw] hidden lg:flex"
				/>
			</Header>
			<Container>
				<PageHeader className="!h-fit min-h-[50vh] pb-6 lg:pb-0">
					<div className="flex flex-1 flex-col w-full items-start justify-center gap-y-6 px-wrapper">
						<Image
							className="pointer-events-none absolute z-[6] object-cover flex dark:hidden"
							fill
							src={`/images/pattern.png`}
							alt="Pattern"
							priority
						/>
						<Image
							className="pointer-events-none absolute z-[6] object-cover hidden dark:flex"
							fill
							src={`/images/pattern_dark.png`}
							alt="Pattern"
							priority
						/>
						<div className="z-10 flex flex-row items-center justify-start gap-x-2.5 text-[var(--neutral)]">
							<a
								className="text-sm font-semibold transition-colors hover:text-green hover:underline"
								href="/help"
							>
								Central de Ajuda
							</a>
							<ChevronRight width={12} height={12} color="var(--neutral)" />
							<Link
								className="text-sm font-semibold transition-colors hover:text-green hover:underline"
								href={`/help/${section}`}
							>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</Link>
						</div>
						<h1 className="z-10 w-full text-left font-title text-4xl text-[var(--neutral)] lg:w-fit lg:text-5xl">
							{article.meta.title}
						</h1>
						<p className="z-10 text-base font-normal text-text-100">
							{lastUpdatedAtString ?? publishedAtString}
						</p>
					</div>
				</PageHeader>
				<Section className="gap-y-16">
					<div className="relative flex w-full flex-row items-start justify-between gap-x-12 lg:gap-x-32">
						<article className="container prose max-w-none lg:prose-pre:max-w-[60vw] py-4 dark:prose-invert">
							{article.content}
						</article>
						<aside className="sticky right-0 top-0 hidden w-2/6 flex-col items-end justify-start gap-y-6 lg:flex pt-link -mt-link">
							<h3>Artigos nessa seção</h3>
							{sectionArticles
								.filter((articleMeta) => articleMeta.slug !== article.meta.slug)
								.map((articleMeta) => (
									<ArticleLink
										key={articleMeta.slug}
										meta={articleMeta}
										href={`/help/${section}/${articleMeta.slug}`}
									/>
								))}
						</aside>
					</div>
				</Section>
			</Container>
		</>
	);
}

const ArticleLink = ({ meta, href }: { meta: ArticleMeta; href: string }) => (
	<Link
		href={href}
		className="flex w-full flex-col rounded-[5px] bg-gray-300 dark:bg-dark-gray-400 p-3 transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-dark-gray-200"
	>
		<p className="text-left text-sm font-normal text-[var(--neutral)]">{meta.title}</p>
	</Link>
);
