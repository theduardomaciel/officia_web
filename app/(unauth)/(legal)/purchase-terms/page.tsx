import React from 'react';

// Components
import Header, { HeaderTitle } from 'components/Header';
import { Container, Section } from 'components/Layout';
import NavigationAnchor from 'components/NavigationAnchor';
import LegalPageHeader from '../LegalPageHeader';

export default function PurchaseTerms() {
	return (
		<>
			<Header
				interactivityProps={{
					scrollDistance: 500,
					putTogether: true,
					children: <HeaderTitle title="Termos de Compra" />
				}}
			>
				<NavigationAnchor href={`/files/privacy-policy.pdf`}>Baixar PDF</NavigationAnchor>
			</Header>
			<Container>
				<LegalPageHeader title="Termos de Compra" lastUpdate="9 de abril de 2022" />
				<Section className="gap-y-14">
					<p className="font-medium text-base">
						Termos de Compra <br /> <br />
						Ao adquirir a assinatura premium do aplicativo &apos;officia&apos;, você
						concorda com os seguintes termos: <br /> <br />
						<ArticleHeader>Cobrança e Renovação Automática</ArticleHeader> <br />
						A assinatura premium é renovada automaticamente, a menos que você cancele a
						renovação antes do final do período de assinatura atual. O valor da
						renovação será cobrado no cartão de crédito associado à sua conta do
						aplicativo no mesmo valor da assinatura atual. <br /> <br />
						<ArticleHeader>Cancelamento</ArticleHeader> <br />
						Você pode cancelar a renovação automática a qualquer momento antes do final
						do período de assinatura atual, indo às configurações do aplicativo ou
						entrando em contato com o suporte ao cliente. O cancelamento terá efeito no
						final do período de assinatura atual. <br /> <br />{' '}
						<ArticleHeader>Reembolsos</ArticleHeader> <br />
						Não há reembolso para períodos de assinatura já iniciados. Se você cancelar
						a assinatura antes do final do período de assinatura atual, você ainda terá
						acesso à versão premium do aplicativo até o final do período de assinatura.{' '}
						<br /> <br />
						<ArticleHeader>Alterações de Preço </ArticleHeader> <br />
						Nós nos reservamos o direito de alterar os preços da assinatura premium a
						qualquer momento. Você será notificado com antecedência sobre qualquer
						alteração de preço. <br /> <br />
						<ArticleHeader>Disposições Gerais</ArticleHeader> <br />
						Estes Termos de Compra constituem o acordo completo entre você e o
						aplicativo em relação à assinatura premium. Se qualquer disposição destes
						Termos de Compra for considerada inválida ou inexequível, as disposições
						restantes permanecerão em pleno vigor e efeito. Qualquer falha nossa em
						fazer valer qualquer direito ou disposição destes Termos de Compra não será
						considerada uma renúncia a esses direitos. Se você tiver alguma dúvida sobre
						estes Termos de Compra ou nossa Política de Privacidade, entre em contato
						conosco através do e-mail oficial do aplicativo.
						<br /> <br />
						Data de vigência: 9 de abril de 2023.
					</p>
				</Section>
			</Container>
		</>
	);
}

const ArticleHeader = ({ children, id }: { children: React.ReactNode; id?: string }) => (
	<li className="list-inside list-decimal text-base text-[var(--neutral)]">
		<span id={id} className="font-bold text-base pt-link -mt-link">
			{children}
		</span>
	</li>
);
