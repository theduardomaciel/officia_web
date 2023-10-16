import clsx from 'clsx';

// Components
import {
	Form,
	FormControl,
	FormField,
	FormFieldHeader,
	FormInput,
	FormMessage,
	FormSubmit
} from 'components/ui/Form';
import PromptModal from './PromptModal';

export default function PasswordResetPage() {
	const status: any = '';

	return (
		<PromptModal
			title="Esqueceu sua senha?"
			icon={<Icon />}
			description={`Não se preocupe, vamos te ajudar a recuperar sua conta.\nInsira o endereço de e-mail vinculado à sua conta e nós iremos enviar instruções para ajudá-lo a redefinir sua senha.`}
		>
			<Form className="flex flex-col items-center justify-start w-full gap-y-9">
				<FormField className="grid mb-[10px]" name="email">
					<FormFieldHeader icon={<EmailIcon />} label="Seu endereço de e-mail">
						<FormMessage match="valueMissing">Por favor, insira seu e-mail</FormMessage>
						<FormMessage match="typeMismatch">
							Por favor, forneça um e-mail válido
						</FormMessage>
					</FormFieldHeader>
					<FormControl asChild>
						<FormInput type="email" placeholder="Seu e-mail" required />
					</FormControl>
				</FormField>
				<FormSubmit
					className={clsx('relative py-4', {
						'cursor-not-allowed': status === 'loading'
					})}
					isLoading={status === 'loading'}
				>
					Enviar instruções
					{status === 'error' && (
						<p className="text-red font-normal text-center absolute top-12 w-full left-1/2 -translate-x-1/2">
							Ocorreu um erro ao enviar as instruções para seu e-mail. Por favor,
							tente novamente mais tarde.
						</p>
					)}
				</FormSubmit>
			</Form>
		</PromptModal>
	);
}

function EmailIcon() {
	return (
		<svg
			width="19"
			height="19"
			viewBox="0 0 19 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_2005_7289"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="19"
				height="19"
			>
				<rect x="0.5" y="0.848633" width="18" height="18" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_2005_7289)">
				<path
					d="M3.5 15.8486C3.0875 15.8486 2.73438 15.7018 2.44063 15.408C2.14688 15.1143 2 14.7611 2 14.3486V5.34863C2 4.93613 2.14688 4.58301 2.44063 4.28926C2.73438 3.99551 3.0875 3.84863 3.5 3.84863H15.5C15.9125 3.84863 16.2656 3.99551 16.5594 4.28926C16.8531 4.58301 17 4.93613 17 5.34863V14.3486C17 14.7611 16.8531 15.1143 16.5594 15.408C16.2656 15.7018 15.9125 15.8486 15.5 15.8486H3.5ZM15.5 6.84863L9.89375 10.3549C9.83125 10.3924 9.76562 10.4205 9.69687 10.4393C9.62812 10.458 9.5625 10.4674 9.5 10.4674C9.4375 10.4674 9.37188 10.458 9.30313 10.4393C9.23438 10.4205 9.16875 10.3924 9.10625 10.3549L3.5 6.84863V14.3486H15.5V6.84863ZM9.5 9.09863L15.5 5.34863H3.5L9.5 9.09863ZM3.5 7.03613V5.92988V5.94863V5.93926V7.03613Z"
					fill="var(--neutral)"
				/>
			</g>
		</svg>
	);
}

function Icon() {
	return (
		<svg
			width="135"
			height="134"
			viewBox="0 0 115 114"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_2005_7319"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="115"
				height="114"
			>
				<rect
					x="15.4496"
					y="0.151367"
					width="100"
					height="100"
					transform="rotate(8.50996 15.4496 0.151367)"
					fill="#D9D9D9"
				/>
			</mask>
			<g mask="url(#mask0_2005_7319)">
				<path
					d="M56.0716 94.7038C50.9893 93.9433 46.3753 92.2868 42.2296 89.7341C38.0808 87.1837 34.5704 84.0084 31.6983 80.2082L38.4491 75.2148C40.6787 78.1464 43.4001 80.6068 46.6134 82.5958C49.8262 84.5877 53.39 85.8764 57.3048 86.4622C65.2717 87.6543 72.4923 85.8558 78.9667 81.0667C85.4412 76.2776 89.2744 69.8996 90.4665 61.9328C91.6585 53.9659 89.86 46.7453 85.071 40.2709C80.2819 33.7964 73.9039 29.9632 65.937 28.7711C57.9702 27.579 50.7495 29.3775 44.2751 34.1666C37.8007 38.9557 33.9674 45.3337 32.7754 53.3005L32.6675 54.0217L41.3132 47.6265L46.3221 54.2743L26.1882 69.1671L11.2954 49.0333L18.0307 44.1428L24.4105 52.8915L24.5338 52.0674C25.3045 46.9164 27.0059 42.2375 29.638 38.0306C32.2669 33.8262 35.4968 30.3071 39.3278 27.4733C43.1556 24.6419 47.466 22.5835 52.259 21.2981C57.0488 20.015 62.0192 19.7588 67.1702 20.5295C72.3212 21.3003 77.0003 23.0003 81.2075 25.6296C85.4116 28.2613 88.9307 31.4912 91.7649 35.3194C94.5959 39.15 96.6543 43.4604 97.9401 48.2506C99.2228 53.0432 99.4788 58.015 98.7081 63.166C97.1666 73.4679 92.2506 81.6851 83.9602 87.8175C75.6698 93.9498 66.3736 96.2453 56.0716 94.7038ZM50.913 72.8667C49.7454 72.692 48.8266 72.15 48.1566 71.2409C47.4833 70.334 47.2341 69.2968 47.4088 68.1293L49.2585 55.7669C49.4332 54.5993 49.9754 53.6792 50.885 53.0063C51.7914 52.3359 52.8284 52.088 53.9959 52.2627L54.6125 48.1419C54.9516 45.8755 56.0497 44.0554 57.9068 42.6818C59.7607 41.3105 61.8208 40.7944 64.0873 41.1335C66.3537 41.4726 68.174 42.5693 69.548 44.4236C70.9189 46.2803 71.4348 48.3418 71.0957 50.6083L70.4791 54.729C71.6466 54.9037 72.567 55.4445 73.2403 56.3513C73.9103 57.2605 74.158 58.2989 73.9833 59.4664L72.1335 71.8288C71.9588 72.9964 71.4183 73.9154 70.5119 74.5858C69.6023 75.2587 68.5637 75.5077 67.3961 75.333L50.913 72.8667ZM58.1167 52.8793L66.3583 54.1125L66.9749 49.9917C67.1496 48.8241 66.9019 47.7857 66.2318 46.8766C65.5586 45.9697 64.6382 45.429 63.4707 45.2543C62.3031 45.0796 61.2661 45.3275 60.3597 45.9979C59.4501 46.6707 58.908 47.5909 58.7333 48.7585L58.1167 52.8793Z"
					fill="url(#paint0_linear_2005_7319)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_2005_7319"
					x1="60.4739"
					y1="19.5276"
					x2="60"
					y2="90"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="var(--neutral)" stop-opacity="0.65" />
					<stop offset="0.699865" stop-color="var(--neutral)" stop-opacity="0.05" />
					<stop offset="1" stop-color="var(--neutral)" stop-opacity="0.02" />
				</linearGradient>
			</defs>
		</svg>
	);
}
