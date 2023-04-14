import React from 'react';
import Link from 'next/link';

// Components
import Header, { HeaderTitle } from 'components/Header';
import { HeaderButton, PageHeader } from '../LayoutComponents';

const anchorClass = 'hover:text-text-200 transition-colors';

export default function TermsOfUse() {
	return (
		<>
			<Header
				interactivityProps={{
					scrollDistance: 500,
					putTogether: true,
					children: <HeaderTitle title="Termos de Uso" />
				}}
			>
				<HeaderButton href="privacy-policy.pdf" />
			</Header>
			<main className="flex flex-col justify-start items-center min-h-screen z-10 relative">
				<PageHeader title="Termos de Uso" lastUpdate="9 de abril de 2022" />
				<section className="flex flex-col items-start justify-center px-wrapper py-section gap-y-14">
					<p className="font-medium text-base text-white">
						Estes Termos de Serviço (&apos;Termos&apos;) regem seu acesso e uso de
						nossos serviços, incluindo nosso site, SMS, APIs, notificações por e-mail,
						aplicativos, botões, widgets, anúncios, serviços comerciais, e nossos outros
						serviços cobertos (https://officia.vercel.app/affiliated) que estão
						vinculados a estes Termos (coletivamente, os &apos;Serviços&apos;), e
						quaisquer informações, textos, links, gráficos, fotos, áudios, vídeos ou
						outros materiais ou disposição de materiais enviados, baixados ou exibidos
						nos Serviços (coletivamente denominados como &apos;Conteúdo&apos;). Ao
						utilizar os Serviços, você concorda em estar sujeito a estes Termos.
					</p>
					<div className="w-full h-0 border-b border-b-gray-200 border-dashed" />
					<div className="flex flex-col lg:flex-row items-start justify-center lg:justify-between w-full gap-12">
						<ol
							type="1"
							className="flex flex-col items-start justify-start gap-y-6 list-inside list-decimal text-white lg:sticky lg:top-[calc(var(--header)+1rem)] lg:left-0 whitespace-nowrap"
						>
							<li>
								<a className={anchorClass} href={'/terms#application-use'}>
									Uso do Aplicativo
								</a>
							</li>
							<li>
								<a className={anchorClass} href={'/terms#user-account'}>
									Conta do Usuário
								</a>
							</li>
							<li>
								<a className={anchorClass} href={'/terms#premium-subscription'}>
									Assinatura Premium
								</a>
							</li>
							<li>
								<a className={anchorClass} href={'/terms#intellectual-property'}>
									Propriedade Intelectual
								</a>
							</li>
							<li>
								<a className={anchorClass} href={'/terms#limitation-of-liability'}>
									Limitação de Responsabilidade
								</a>
							</li>
							<li>
								<a
									className={anchorClass}
									href={'/terms#modification-of-the-terms-of-use'}
								>
									Modificação dos Termos de Uso
								</a>
							</li>
							<li>
								<a className={anchorClass} href={'/terms#rescission'}>
									Rescisão
								</a>
							</li>
							<li>
								<a className={anchorClass} href={'/terms#applicable-law'}>
									Lei Aplicável
								</a>
							</li>
							<li>
								<a className={anchorClass} href={'/terms#privacy'}>
									Privacidade
								</a>
							</li>
							<li>
								<a className={anchorClass} href={'/terms#indemnity'}>
									Indenização
								</a>
							</li>
							<li>
								<a className={anchorClass} href={'/terms#general-provisions'}>
									Disposições Gerais
								</a>
							</li>
						</ol>
						<article>
							Termos de Uso do App &apos;Officia&apos;
							<br /> <br />
							O aplicativo &apos;Officia&apos; (&apos;nós&apos;, &apos;nosso&apos; ou
							&apos;aplicativo&apos;) foi criado para ajudar empreendedores autônomos
							a organizarem seu trabalho, finanças e gerenciarem documentos. Ao usar o
							aplicativo, você concorda com estes Termos de Uso (&apos;Termos&apos;).
							Por favor, leia cuidadosamente antes de usar o aplicativo.
							<br /> <br />
							<ArticleHeader id="application-use">
								Uso do Aplicativo
							</ArticleHeader>{' '}
							<br />
							Você só pode usar o aplicativo de acordo com estes Termos e todas as
							leis e regulamentações aplicáveis. Ao usar o aplicativo, você concorda
							em não usar o aplicativo de qualquer forma que possa danificar,
							desativar, sobrecarregar ou prejudicar o aplicativo ou interferir no uso
							e aproveitamento do aplicativo por parte de outros usuários.
							<br /> <br />
							<ArticleSubHeader>
								Quem pode utilizar os Serviços?
							</ArticleSubHeader>{' '}
							<br />
							Você pode utilizar os Serviços somente se concordar em celebrar um
							contrato vinculante com o officia e não for uma pessoa impedida de
							receber serviços sob as leis da jurisdição aplicável. Em qualquer
							hipótese, você deve ter no mínimo 18 anos de idade, para utilizar os
							Serviços. Se estiver aceitando estes Termos e utilizando os Serviços em
							nome de uma empresa, organização, governo ou outra entidade legal, você
							declara e garante que está autorizado a realizar tal ação e que tem
							poderes para vincular referida entidade a estes Termos, hipótese em que
							as palavras &apos;você&apos; e &apos;seu&apos; conforme utilizadas
							nestes Termos farão referência a tal entidade.
							<br /> <br />
							<ArticleHeader id="user-account">Conta do Usuário</ArticleHeader> <br />
							Para usar o aplicativo, você precisa se cadastrar e criar uma conta de
							usuário. Você concorda em fornecer informações precisas, completas e
							atualizadas ao criar sua conta e manter as informações de contato
							atualizadas. Você é responsável por todas as atividades que ocorrerem na
							sua conta, incluindo o uso indevido da conta por terceiros.
							<br /> <br />
							<ArticleHeader id="premium-subscription">
								Assinatura Premium
							</ArticleHeader>{' '}
							<br />
							Nós oferecemos uma assinatura premium dentro do aplicativo, que pode ser
							adquirida por meio do aplicativo e é renovada automaticamente. Você
							concorda em pagar todas as taxas associadas à assinatura premium. Nós
							nos reservamos o direito de alterar os preços ou termos da assinatura
							premium a qualquer momento, mediante notificação prévia.
							<br /> <br />
							<ArticleHeader id="intellectual-property">
								Propriedade Intelectual
							</ArticleHeader>{' '}
							<br />O aplicativo e todo o seu conteúdo, incluindo, mas não se
							limitando a, texto, gráficos, imagens, logos, ícones de botão, software
							e áudio são de propriedade exclusiva do aplicativo ou de seus
							licenciadores e estão protegidos pelas leis de direitos autorais, marcas
							registradas e outras leis de propriedade intelectual. <br /> <br />
							<ArticleHeader id="limitation-of-liability">
								Limitação de Responsabilidade
							</ArticleHeader>{' '}
							<br />
							O aplicativo é fornecido &apos;como está&apos; e não fazemos garantias,
							expressas ou implícitas, sobre o uso ou os resultados do uso do
							aplicativo, em termos de sua correção, precisão, confiabilidade ou
							outros aspectos. Em nenhum caso seremos responsáveis por quaisquer danos
							diretos, indiretos, incidentais, especiais, punitivos ou consequenciais
							decorrentes do uso ou incapacidade de uso do aplicativo. <br /> <br />
							<ArticleHeader id="modification-of-the-terms-of-use">
								Modificação dos Termos de Uso{' '}
							</ArticleHeader>{' '}
							<br />
							Podemos atualizar estes Termos de Uso de tempos em tempos. A versão mais
							recente estará sempre disponível dentro do aplicativo. Ao continuar a
							usar o aplicativo após a publicação de qualquer atualização dos Termos
							de Uso, você concorda em cumprir os termos atualizados.
							<br /> <br />
							<ArticleHeader id="rescission">Rescisão</ArticleHeader> <br />
							Podemos rescindir ou suspender sua conta e o acesso ao aplicativo a
							qualquer momento, sem aviso prévio, se você violar estes Termos de Uso
							ou as leis e regulamentações aplicáveis. Você pode cancelar sua conta a
							qualquer momento, basta entrar em contato conosco. <br /> <br />
							<ArticleHeader id="applicable-law">Lei Aplicável</ArticleHeader> <br />
							Estes Termos de Uso serão regidos e interpretados de acordo com as leis
							do país em que o aplicativo foi desenvolvido. <br /> <br />
							<ArticleHeader id="privacy">Privacidade</ArticleHeader> <br />
							Nós levamos sua privacidade a sério e coletamos, usamos e compartilhamos
							suas informações apenas de acordo com nossa Política de Privacidade. Ao
							usar o aplicativo, você concorda com nossa coleta, uso e
							compartilhamento de suas informações pessoais de acordo com nossa{' '}
							<Link href={`/privacy`} className="text-green hover:underline">
								Política de Privacidade (https://officia.vercel.app/privacy)
							</Link>
							. Você entende que, ao utilizar os Serviços, concorda com a coleta e uso
							(conforme estabelecido na Política de Privacidade) dessas informações,
							incluindo a transferência dessas informações para o Brasil e/ou outros
							países para fins de armazenamento, processamento e uso pelo officia e
							suas afiliadas. <br /> <br />
							<ArticleHeader id="indemnity">Indenização</ArticleHeader> <br />
							Você concorda em indenizar, defender e isentar o aplicativo e seus
							diretores, funcionários, agentes e licenciadores de qualquer reclamação,
							responsabilidade, custo ou despesa, incluindo honorários advocatícios
							razoáveis, decorrentes de qualquer violação destes Termos de Uso ou do
							uso do aplicativo. <br /> <br />
							<ArticleHeader id="general-provisions">
								Disposições Gerais
							</ArticleHeader>{' '}
							Estes Termos de Uso constituem o acordo completo entre você e o
							aplicativo em relação ao uso do aplicativo. Se qualquer disposição
							destes Termos de Uso for considerada inválida ou inexequível, as
							disposições restantes permanecerão em pleno vigor e efeito. Qualquer
							falha nossa em fazer valer qualquer direito ou disposição destes Termos
							de Uso não será considerada uma renúncia a esses direitos. Se você tiver
							alguma dúvida sobre estes Termos de Uso ou nossa Política de
							Privacidade, entre em contato conosco através do e-mail oficial do
							aplicativo.]
							<br /> <br />
							Em vigor desde: 9 de abril de 2023.
						</article>
					</div>
				</section>
			</main>
		</>
	);
}

const ArticleHeader = ({ children, id }: { children: React.ReactNode; id?: string }) => (
	<li className="list-inside list-decimal text-lg">
		<span id={id} className="font-bold text-xl pt-link mt-link">
			{children}
		</span>
	</li>
);

const ArticleSubHeader = ({ children }: { children: React.ReactNode }) => (
	<span className="font-bold text-base">{children}</span>
);
