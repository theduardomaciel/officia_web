// Components

import { FormSubmit } from 'components/ui/Form';

export default function RedeemPage() {
	return (
		<>
			<div className="flex flex-col items-start justify-start w-full lg:w-[70vw] py-section px-wrapper lg:px-20 gap-y-12">
				<h1 className="w-full text-start font-title text-4xl text-white lg:w-fit lg:text-5xl">
					Resgatar Código
				</h1>
				<input
					className={
						'z-10 flex w-full flex-row items-center rounded-md border border-gray-100 bg-gray-300 py-3 px-4 text-sm font-normal text-white placeholder:text-text-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--neutral)]'
					}
					placeholder="[indisponível no momento]"
				/>
				<FormSubmit className="opacity-40 cursor-not-allowed">Resgatar</FormSubmit>
			</div>
		</>
	);
}
