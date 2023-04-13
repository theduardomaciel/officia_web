// Components
import Heading from 'components/Heading';
import Question from './Question';

export default function FaqQuestions() {
	return (
		<div
			id="faq"
			className="flex flex-col items-end justify-end w-full gap-y-16 pt-link -mt-link"
		>
			<Heading title="PERGUNTAS FREQUENTES" className="text-end items-end justify-end">
				Buscamos ser um exemplo em transparência para que nosso contato com você se mantenha
				o mais leal possível. <br /> Por isso, nos comprometemos em manter todas as dúvidas
				sanadas :)
			</Heading>
			<ul className="flex flex-col items-center justify-center w-full gap-y-6">
				<Question
					key={1}
					question={[
						`Por que o Plano Básico possui anúncios e marca d'água em documentos?`
					]}
					answer="O Plano Básico do officia é gratuito e permite aos usuários acessar algumas funcionalidades do serviço sem pagar nada. No entanto, para manter o serviço funcionando e gerar receita, o Plano Básico inclui anúncios e marca d’água em documentos. Esses elementos ajudam a promover o serviço e incentivar os usuários a atualizar para planos pagos que oferecem mais benefícios e recursos."
				/>
				<Question
					key={2}
					question={[`Por que o período de testes do plano Plus só dura 7 dias?`]}
					answer="O período de testes do plano Plus é de 7 dias para que você possa conhecer todas as funcionalidades do serviço e decidir se vale a pena continuar assinando. Caso você não queira continuar assinando a versão paga do serviço, basta cancelar a assinatura antes do período de testes terminar."
				/>
				<Question
					key={3}
					question={[`Como faço para cancelar minha assinatura?`]}
					answer="Para cancelar sua assinatura, basta acessar a página de configurações da sua conta e clicar no botão “Cancelar assinatura”. Você também pode cancelar sua assinatura diretamente no seu aplicativo de pagamento. Se você tiver alguma dúvida sobre o cancelamento da sua assinatura, visite a Central de Ajuda ou entre em contato conosco."
				/>
			</ul>
		</div>
	);
}
