// Components

import { FormSubmit, inputClass } from 'components/ui/Form';

export default function RedeemPage() {
	return (
		<>
			<div className="flex flex-col items-start justify-start w-full lg:w-[70vw] py-section px-wrapper lg:px-20 gap-y-12">
				<h1 className="w-full text-start font-title text-4xl text-[var(--neutral)] lg:w-fit lg:text-5xl">
					Resgatar Código
				</h1>
				<input disabled className={inputClass} placeholder="[indisponível no momento]" />
				<FormSubmit disabled>Resgatar</FormSubmit>
			</div>
		</>
	);
}
