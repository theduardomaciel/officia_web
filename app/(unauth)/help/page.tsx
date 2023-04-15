import React from 'react';
import Link from 'next/link';

import { Logo } from 'components/Icons';

// Components
import Header, { HeaderTitle } from 'components/Header';
import { Container, PageHeader, Section } from 'components/Layout';
import NavigationAnchor from 'components/NavigationAnchor';
import FaqQuestions from './subcomponents/FAQ';
import HelpSearchBar from 'app/(unauth)/help/subcomponents/HelpSearchBar';

import { PreconnectSearchbox } from './subcomponents/preconnect-searchbox';

export default function HelpCenter() {
	return (
		<>
			<PreconnectSearchbox />
			<Header>
				<HeaderTitle title="Central de Ajuda" />
				<NavigationAnchor href="/contact">Fale Conosco</NavigationAnchor>
			</Header>
			<Container>
				<PageHeader>
					<div className="flex flex-col items-center justify-center gap-y-8 px-wrapper">
						<Logo width={75} height={60} className="z-10" />
						<h1 className="z-10 w-full text-center font-title text-4xl text-[var(--neutral)] lg:w-fit lg:text-5xl">
							Como podemos ajudar?
						</h1>
						<HelpSearchBar
							placeholder="Descreva o problema ou dúvida"
							className="min-w-[35vw]"
						/>
					</div>
				</PageHeader>
				<Section>
					<ul className="flex flex-row flex-wrap w-full items-start justify-between gap-y-14">
						<SectionPreview
							key={'business'}
							title={[
								'Como gerenciar seu negócio com o ',
								<span className="font-title font-normal">officia</span>
							]}
							links={[
								{
									title: 'Sobre o agendamento de serviços',
									href: '/help/business/about-scheduling-services'
								},
								{
									title: 'Como inserir sub-serviços e produtos em serviços',
									href: '/help/business/how-to-insert-sub-services-and-products-into-services'
								},
								{
									title: 'Como inserir imagens em produtos',
									href: '/help/business/how-to-insert-images-into-products'
								}
							]}
							sectionHref="/help/business"
						/>
						<SectionPreview
							key={'subscription'}
							title={['Planos e assinaturas premium']}
							links={[
								{
									title: 'Sobre os planos de assinatura',
									href: '/help/subscription/about-the-subscription-plans'
								},
								{
									title: 'Como determinamos os preços de nossos serviços',
									href: '/help/subscription/how-our-services-prices-are-determined.mdx'
								},
								{
									title: 'Como desativar o pagamento recorrente',
									href: '/help/subscription/how-to-turn-off-recurring-payment'
								}
							]}
							sectionHref="/help/subscription"
						/>
						<SectionPreview
							key={'open-source'}
							title={['Nossa relação com o código livre']}
							links={[
								{
									title: 'Sobre licenças e repositórios no GitHub',
									href: '/help/software/about-licenses-and-repositories-on-github'
								},
								{
									title: 'Como contribuir com relatórios de bugs',
									href: '/help/software/how-to-contribute-to-the-project'
								},
								{
									title: 'Aprendizado em programação com o officia',
									href: '/help/software/learning-programming-with-officia'
								}
							]}
							sectionHref="/help/open-source"
						/>
					</ul>
					<FaqQuestions />
				</Section>
			</Container>
		</>
	);
}

interface SectionPreviewProps {
	title: Array<string | React.ReactNode>;
	links: {
		href: string;
		title: string;
	}[];
	sectionHref: string;
}

const SectionPreview = ({ title, links, sectionHref }: SectionPreviewProps) => (
	<li className="flex flex-col items-start py-9 gap-y-9 bg-gray-200 dark:bg-dark-gray-400 border border-gray-400 dark:border-dark-gray-100 rounded-[10px] max-w-sm">
		<h6 className="font-bold text-2xl px-9 text-[var(--neutral)]">
			{title.map((text, index) => (
				<React.Fragment key={index.toString()}>{text}</React.Fragment>
			))}
		</h6>
		<div className="w-full h-0 border border-b-dark-gray-100" />
		<ul className="flex flex-col items-start px-9 gap-y-6">
			{links.map(({ href, title }, index) => (
				<li key={index.toString()}>
					<Link
						href={href}
						className="font-medium text-lg leading-[135%] text-text-100 hover:text-green underline text-start transition-colors"
					>
						{title}
					</Link>
				</li>
			))}
		</ul>
		<Link href={sectionHref} className="ml-9">
			<button className="flex items-center justify-center text-center px-6 py-2 text-sm text-[var(--neutral)] bg-gray-300 hover:bg-gray-100 dark:bg-dark-gray-200 dark:hover:bg-dark-gray-100 transition-colors rounded-3xl">
				Ver todos os artigos
			</button>
		</Link>
	</li>
);
