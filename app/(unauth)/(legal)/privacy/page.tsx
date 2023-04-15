import React from 'react';

// Components
import Header, { HeaderTitle } from 'components/Header';
import { Container, Section } from 'components/Layout';
import NavigationAnchor from 'components/NavigationAnchor';
import LegalPageHeader from '../LegalPageHeader';

export default function PrivacyPolicy() {
	return (
		<>
			<Header
				interactivityProps={{
					scrollDistance: 500,
					putTogether: true,
					children: <HeaderTitle title="Política de Privacidade" />
				}}
			>
				<NavigationAnchor href={`/files/privacy-policy.pdf`}>Baixar PDF</NavigationAnchor>
			</Header>
			<Container>
				<LegalPageHeader
					title="Política de Privacidade"
					subtitle={[
						'Formulamos nossa Política de Privacidade da maneira mais simples possível, a fim de capacitá-lo a tomar decisões informadas quando você usar o ',
						<span className="font-title font-normal">officia</span>,
						', assegurando que você compreenda e tenha controle sobre as informações que coletamos, como são usadas e quando são compartilhadas.'
					]}
					lastUpdate="9 de abril de 2022"
				/>
				<Section className="gap-y-14">
					<div className="flex flex-col items-start justify-start gap-y-4">
						<h2 className="leading-[125%] font-title text-4xl max-w-[65%] text-[var(--neutral)]">
							Antes de continuar, pedimos que preste atenção ao seguinte:
						</h2>
						<p className="font-medium text-base text-[var(--neutral)]">
							É realmente difícil contentar a todos com uma Política de Privacidade. A
							maioria das pessoas que usam serviços querem algo curto e fácil de
							compreender. Embora desejemos poder encaixar tudo o que você precisa
							saber em um único parágrafo, precisamos cumprir nossas obrigações
							legais, descrevendo-as todas com muitos detalhes. <br /> <br />{' '}
							Portanto, caso você não se interesse em ler nossa Política de
							Privacidade por completo, pelo menos saiba que:
						</p>
					</div>
					<div className="flex flex-col items-center justify-center w-full gap-y-9 lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-16">
						<Topic
							title={[
								'O',
								<span className="font-title font-normal"> officia</span>,
								' é um serviço em desenvolvimento, que poderá apresentar mutações'
							]}
							link={{
								href: '/privacy',
								text: 'Saiba o que muda com o desenvolvimento'
							}}
						/>
						<Topic
							title={[
								'Coletamos alguns dados sobre você e os utilizamos para tornar o officia melhor'
							]}
							link={{
								href: '/privacy',
								text: 'Saiba o que coletamos e por que'
							}}
						/>
						<Topic
							title={[
								'Os serviços das empresas afiliadas podem ter suas próprias políticas'
							]}
							link={{
								href: '/privacy',
								text: 'Saiba mais sobre empresas afiliadas'
							}}
						/>
					</div>
					<div className="w-full h-0 border-b border-b-dark-gray-200 border-dashed" />
					<article>
						Agradecemos por usar o aplicativo &apos;Officia&apos; (&apos;nós&apos;,
						&apos;nosso&apos; ou &apos;aplicativo&apos;), que foi criado para ajudar
						empreendedores autônomos a organizarem seu trabalho, finanças e gerenciarem
						documentos. A sua privacidade é importante para nós e nos preocupamos com a
						forma como as suas informações pessoais são coletadas, usadas e
						compartilhadas. Esta Política de Privacidade descreve nossas práticas de
						privacidade em relação ao uso do aplicativo. <br /> <br />
						<ArticleHeader>Coleta de Informações</ArticleHeader> <br />
						Nós coletamos informações quando você usa nosso aplicativo, incluindo quando
						se registra para uma conta, usa nossos serviços, compra nossa assinatura
						premium, participa de pesquisas ou entra em contato conosco. As informações
						que coletamos podem incluir seu nome, endereço de e-mail, número de
						telefone, informações de faturamento, informações de localização,
						informações sobre o dispositivo e informações sobre o uso do aplicativo.{' '}
						<br /> <br />
						<ArticleHeader>Uso de Informações</ArticleHeader> <br />
						As informações coletadas podem ser utilizadas para personalizar sua
						experiência no aplicativo, para fornecer serviços e suporte ao cliente, para
						processar pagamentos e para fornecer atualizações e melhorias no aplicativo.
						Além disso, podemos usar suas informações para fins de marketing e
						publicidade, como enviar-lhe ofertas promocionais por e-mail ou notificações
						push. Se você não deseja receber essas comunicações, você pode optar por
						sair a qualquer momento. <br /> <br />
						<ArticleHeader>Compartilhamento de Informações</ArticleHeader> <br />
						Nós não vendemos, alugamos ou compartilhamos informações pessoais com
						terceiros, exceto quando necessário para fornecer serviços ou quando exigido
						por lei. Podemos compartilhar informações com prestadores de serviços
						terceirizados, como processadores de pagamento ou empresas de marketing, que
						nos ajudam a operar o aplicativo. Além disso, podemos compartilhar
						informações anônimas e agregadas com parceiros comerciais ou de publicidade.{' '}
						<br /> <br />
						<ArticleHeader>Assinatura Premium</ArticleHeader> <br />
						Nós oferecemos uma assinatura premium dentro do aplicativo, que é renovada
						automaticamente. Se você optar por adquirir a assinatura premium, nós
						coletaremos informações de pagamento, como seu nome, endereço de faturamento
						e informações do cartão de crédito ou débito. Todas as informações são
						coletadas e armazenadas de acordo com os padrões de segurança da indústria.{' '}
						<br /> <br />
						<ArticleHeader>Segurança</ArticleHeader> <br />
						Nós levamos a segurança dos seus dados pessoais muito a sério. Implementamos
						medidas de segurança adequadas para proteger suas informações pessoais
						contra acesso, alteração, divulgação ou destruição não autorizados. <br />{' '}
						<br />
						<ArticleHeader>Alterações na Política de Privacidade</ArticleHeader> <br />
						Podemos atualizar esta Política de Privacidade de tempos em tempos. A versão
						mais recente estará sempre disponível dentro do aplicativo. Encorajamos você
						a revisar esta Política de Privacidade periodicamente para estar ciente de
						quaisquer alterações que possam afetar você. <br /> <br />{' '}
						<ArticleHeader>Contato</ArticleHeader> <br />
						Se você tiver alguma dúvida ou preocupação sobre nossa Política de
						Privacidade ou nossas práticas de privacidade, por favor entre em contato
						conosco através do e-mail [
						<a
							href="mailto:app.officia@gmail.com"
							className="hover:text-[var(--neutral)] underline"
						>
							app.officia@gmail.com
						</a>
						].
					</article>
				</Section>
			</Container>
		</>
	);
}

const ArticleHeader = ({ children }: { children: React.ReactNode }) => (
	<span className="font-bold text-lg text-[var(--neutral)]">{children}</span>
);

interface TopicProps {
	title: Array<string | React.ReactNode>;
	link?: {
		href: string;
		text: string;
	};
}

const Topic = ({ title, link }: TopicProps) => (
	<div className="flex flex-col items-start justify-start gap-y-6">
		<h2 className="font-extrabold text-2xl text-[var(--neutral)]">{...title}</h2>
		{link && (
			<a href={link.href} className="font-regular text-sm text-green hover:underline">
				{link.text}
			</a>
		)}
	</div>
);
