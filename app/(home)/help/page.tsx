import React from 'react';
import Link from 'next/link';

// Components
import Header, { HeaderTitle } from 'components/Header';
import { GoToContactButton, PageHeader } from './subcomponents/Layout';
import FaqQuestions from './subcomponents/FAQ';

export default function PurchaseTerms() {
	return (
		<>
			<Header>
				<HeaderTitle title="Central de Ajuda" />
				<GoToContactButton />
			</Header>
			<main className="flex flex-col justify-start items-center min-h-screen z-10 relative">
				<PageHeader title="Como podemos ajudar?" />
				<section className="flex flex-col items-start w-full justify-center px-wrapper py-section gap-y-20">
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
				</section>
			</main>
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
	<li className="flex flex-col items-start py-9 gap-y-9 bg-gray-400 border border-gray-100 rounded-[10px] max-w-sm">
		<h6 className="font-bold text-2xl px-9 text-white">
			{title.map((text, index) => (
				<React.Fragment key={index.toString()}>{text}</React.Fragment>
			))}
		</h6>
		<div className="w-full h-0 border border-b-gray-100" />
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
			<button className="flex items-center justify-center text-center px-6 py-2 text-sm text-white bg-gray-200 hover:bg-gray-100 transition-colors rounded-3xl">
				Ver todos os artigos
			</button>
		</Link>
	</li>
);
