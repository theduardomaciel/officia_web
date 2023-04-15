import BackToHomeButton from 'components/BackToHomeButton';

export default function FeedbackSuccessPage({ params }: { params: { ticketId: string } }) {
	return (
		<>
			<div className="flex flex-col items-center justify-center py-section px-wrapper gap-y-12">
				<h1 className="font-bold text-3xl leading-[135%] text-[var(--neutral)] text-center lg:max-w-[65%]">
					Muito obrigado por contribuir com seu feedback!
				</h1>
				<p>
					Contribuições como a sua fazem do <span className="font-title">officia</span> um
					serviço melhor para você e outros empreendedores autônomos. <br /> <br />
					Caso sua mensagem seja bem interessante, entraremos em contato para obter mais
					informações sobre seu feedback!
				</p>
				<BackToHomeButton />
			</div>
		</>
	);
}
