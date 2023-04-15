import BackToHomeButton from 'components/BackToHomeButton';

export default function ContactSuccessPage({ params }: { params: { ticketId: string } }) {
	return (
		<>
			<div className="flex flex-col items-center justify-center py-section px-wrapper gap-y-12">
				<h1 className="font-bold text-3xl leading-[135%] text-[var(--neutral)] text-center">
					Sua mensagem de contato foi enviada com sucesso!
				</h1>
				<p>
					Um ticket de suporte foi criado para este chamado e será enviado para seu e-mail
					quando sua mensagem for respondida. <br /> <br />
					Você pode acompanhar o status do chamado por meio o ID do ticket abaixo:
				</p>
				<div className="box-border flex items-center justify-center py-4 px-12 border border-dashed border-green rounded-[5px]">
					<p className="font-normal text-base text-center text-green">
						#{params.ticketId}
					</p>
				</div>
				<BackToHomeButton />
			</div>
		</>
	);
}
