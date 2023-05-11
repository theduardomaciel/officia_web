import Image from 'next/image';

export default function Index1Frame1() {
	return (
		<div className="absolute top-8 right-0 rounded-3xl bg-gray-300 dark:bg-dark-gray-400 shadow-[-2px_4px_50px_10px_rgba(161,_161,_170,_0.25)] dark:shadow-[-2px_4px_50px_10px_rgba(0,0,0,_0.25)] overflow-hidden flex flex-col py-[2.19rem] px-[1.56rem] items-center justify-start gap-[2.19rem] text-left text-[0.88rem] text-text-100 font-normal z-20 select-none">
			<div className="flex flex-col items-start justify-start gap-[0.94rem]">
				<div className="self-stretch rounded-md overflow-hidden flex flex-col py-[2.81rem] px-[3.75rem] items-center justify-start relative gap-[0.31rem] text-center text-black border-[1px] border-dashed border-green">
					<AddPhotoIcon />
					<div className="self-stretch relative font-medium z-[1] text-[var(--neutral)]">
						Adicionar logotipo da empresa
					</div>
					<Image
						className="pointer-events-none object-cover absolute my-0 mx-[!important] top-[calc(50%_-_73px)] left-[calc(50%_-_163.5px)] w-[34.54rem] h-[25.19rem] opacity-[0.15] z-[2]"
						fill
						src={`/landing/mini_pattern.png`}
						alt="Pattern"
						priority
					/>
				</div>
				<div className="w-[20.31rem] flex flex-col items-start justify-start gap-[0.63rem]">
					<div className="relative leading-[125%] font-semibold">Nome Fantasia</div>
					<div className="self-stretch rounded-lg bg-gray-200 dark:bg-dark-gray-200 flex flex-row p-[0.78rem] items-center justify-start text-[0.75rem] text-light-text-light-200">
						<div className="relative leading-[125%]">Renew Apps</div>
					</div>
				</div>
				<div className="w-[20.31rem] flex flex-col items-start justify-start gap-[0.63rem]">
					<div className="relative leading-[125%] font-semibold">CNPJ</div>
					<div className="self-stretch rounded-lg bg-gray-200 dark:bg-dark-gray-200 flex flex-row p-[0.78rem] items-center justify-start text-[0.75rem] text-light-text-light-200">
						<div className="relative leading-[125%]">XX.XXX.XXX/XXXX-XX</div>
					</div>
				</div>
				<div className="w-[20.31rem] flex flex-col items-start justify-start gap-[0.63rem]">
					<div className="relative leading-[125%] font-semibold">Razão Social</div>
					<div className="self-stretch rounded-lg bg-gray-200 dark:bg-dark-gray-200 flex flex-row p-[0.78rem] items-center justify-start text-[0.75rem] text-light-text-light-200">
						<div className="relative leading-[125%]">RENEW APPS LTDA.</div>
					</div>
				</div>
			</div>
			<div className="rounded-[10px] bg-gray-200 dark:bg-dark-gray-200 w-[20.31rem] flex flex-row py-[0.88rem] px-[4.25rem] box-border items-center justify-center text-[0.81rem] text-[var(--neutral)] font-roboto-serif">
				<div className="relative leading-[135%] font-semibold">Continuar</div>
			</div>
		</div>
	);
}

function AddPhotoIcon() {
	return (
		<svg
			width="33"
			height="32"
			viewBox="0 0 33 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_1957_1062"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="33"
				height="32"
			>
				<rect x="0.5" width="32" height="32" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1957_1062)">
				<path
					d="M7.16667 28C6.43333 28 5.80533 27.7391 5.28267 27.2173C4.76089 26.6947 4.5 26.0667 4.5 25.3333V6.66667C4.5 5.93333 4.76089 5.30533 5.28267 4.78267C5.80533 4.26089 6.43333 4 7.16667 4H17.8333C18.2111 4 18.528 4.12756 18.784 4.38267C19.0391 4.63867 19.1667 4.95556 19.1667 5.33333C19.1667 5.71111 19.0391 6.02756 18.784 6.28267C18.528 6.53867 18.2111 6.66667 17.8333 6.66667H7.16667V25.3333H25.8333V14.6667C25.8333 14.2889 25.9613 13.972 26.2173 13.716C26.4724 13.4609 26.7889 13.3333 27.1667 13.3333C27.5444 13.3333 27.8609 13.4609 28.116 13.716C28.372 13.972 28.5 14.2889 28.5 14.6667V25.3333C28.5 26.0667 28.2391 26.6947 27.7173 27.2173C27.1947 27.7391 26.5667 28 25.8333 28H7.16667ZM24.5 12C24.1222 12 23.8058 11.872 23.5507 11.616C23.2947 11.3609 23.1667 11.0444 23.1667 10.6667V9.33333H21.8333C21.4556 9.33333 21.1391 9.20578 20.884 8.95067C20.628 8.69467 20.5 8.37778 20.5 8C20.5 7.62222 20.628 7.30533 20.884 7.04933C21.1391 6.79422 21.4556 6.66667 21.8333 6.66667H23.1667V5.33333C23.1667 4.95556 23.2947 4.63867 23.5507 4.38267C23.8058 4.12756 24.1222 4 24.5 4C24.8778 4 25.1942 4.12756 25.4493 4.38267C25.7053 4.63867 25.8333 4.95556 25.8333 5.33333V6.66667H27.1667C27.5444 6.66667 27.8609 6.79422 28.116 7.04933C28.372 7.30533 28.5 7.62222 28.5 8C28.5 8.37778 28.372 8.69467 28.116 8.95067C27.8609 9.20578 27.5444 9.33333 27.1667 9.33333H25.8333V10.6667C25.8333 11.0444 25.7053 11.3609 25.4493 11.616C25.1942 11.872 24.8778 12 24.5 12ZM9.83333 22.6667H23.1667C23.4333 22.6667 23.6333 22.5444 23.7667 22.3C23.9 22.0556 23.8778 21.8222 23.7 21.6L20.0333 16.7C19.9 16.5222 19.7222 16.4333 19.5 16.4333C19.2778 16.4333 19.1 16.5222 18.9667 16.7L15.5 21.3333L13.0333 18.0333C12.9 17.8556 12.7222 17.7667 12.5 17.7667C12.2778 17.7667 12.1 17.8556 11.9667 18.0333L9.3 21.6C9.12222 21.8222 9.1 22.0556 9.23333 22.3C9.36667 22.5444 9.56667 22.6667 9.83333 22.6667Z"
					fill="var(--neutral)"
				/>
			</g>
		</svg>
	);
}
