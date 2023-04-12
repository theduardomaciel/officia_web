import React from 'react';
import Link from 'next/link';

// Components
import Header from 'components/Header';
import { HeaderTitle } from 'app/(legal)/LayoutComponents';
import { GoToContactButton, PageHeader } from './LayoutComponents';
import Subtitle from 'components/Heading';
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
                                <span className="font-title font-normal">
                                    officia
                                </span>
                            ]}
                            links={[
                                {
                                    title: 'Sobre o agendamento de serviços',
                                    href: '/help'
                                },
                                {
                                    title: 'Como inserir sub-serviços e produtos em serviços',
                                    href: '/help'
                                },
                                {
                                    title: 'Como inserir subserviços e produtos em serviços',
                                    href: '/help'
                                },
                                {
                                    title: 'Como inserir imagens em produtos',
                                    href: '/help'
                                }
                            ]}
                            sectionHref="/help/business"
                        />
                        <SectionPreview
                            key={'subscription'}
                            title={['Planos e assinaturas premium']}
                            links={[
                                {
                                    title: 'Sobre os diferentes planos de assinatura',
                                    href: '/help'
                                },
                                {
                                    title: 'Como determinamos os preços de nossos serviços',
                                    href: '/help'
                                },
                                {
                                    title: 'Como desativar o pagamento recorrente',
                                    href: '/help'
                                }
                            ]}
                            sectionHref="/help/subscription"
                        />
                        <SectionPreview
                            key={'open-source'}
                            title={[
                                'Nossa relação com a iniciativa open-source'
                            ]}
                            links={[
                                {
                                    title: 'Sobre licenças e o repositório no GitHub',
                                    href: '/help'
                                },
                                {
                                    title: 'Como contribuir para o projeto',
                                    href: '/help'
                                },
                                {
                                    title: 'Aprendizado em programação com officia',
                                    href: '/help'
                                },
                                {
                                    title: 'Regras e condições',
                                    href: '/help'
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
                <React.Fragment key={index.toString()}>
                    {text}
                    {index !== title.length - 1 && <br />}
                </React.Fragment>
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
