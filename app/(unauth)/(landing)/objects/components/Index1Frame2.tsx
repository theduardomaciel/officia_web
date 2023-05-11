export default function Index1Frame2() {
	return (
		<div className="absolute top-0 right-[10rem] rounded-3xl bg-gray-300 dark:bg-dark-gray-400 overflow-hidden flex flex-col py-[2.19rem] px-[1.56rem] items-center justify-start gap-[2.19rem] text-left text-[0.88rem] text-text-100 font-inter w-[375px] select-none">
			<div className="flex flex-col items-start justify-start gap-[0.94rem]">
				<div className="w-[20.31rem] flex flex-col items-start justify-start gap-[0.63rem]">
					<div className="flex flex-row items-center justify-start gap-[0.63rem]">
						<PhoneIcon />
						<div className="relative leading-[125%] font-semibold">Telefone</div>
					</div>
					<div className="self-stretch rounded-lg bg-gray-200 dark:bg-dark-gray-200 flex flex-row p-[0.78rem] items-center justify-start text-[0.75rem] text-text-200">
						<div className="relative leading-[125%]">+55 (56) 98232-6538</div>
					</div>
				</div>
				<div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[0.75rem]">
					<div className="flex flex-col items-start justify-start gap-[0.31rem] text-[0.88rem]">
						<div className="flex flex-row items-center justify-start gap-[0.63rem]">
							<AddressIcon />
							<div className="relative leading-[125%] font-semibold">Endereço</div>
						</div>
						{/* <div className="relative text-[0.75rem] leading-[125%] text-text-200 whitespace-pre-wrap inline-block w-[20.31rem]">
							<p className="m-0">
								Por razões legais, o endereço da sede física de sua empresa deve ser
								informado em documentos.
							</p>
							<p className="m-0">
								Caso não haja um escritório próprio para seu negócio, insira o
								endereço de sua residência.
							</p>
						</div> */}
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
						<div className="relative leading-[125%] font-medium">CEP</div>
						<div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem] text-text-200">
							<div className="self-stretch flex-1 rounded-lg bg-gray-200 dark:bg-dark-gray-200 flex flex-row p-[0.78rem] items-center justify-start">
								<div className="flex-1 relative leading-[125%]">6781-001</div>
							</div>
							<div className="rounded-lg bg-gray-200 dark:bg-dark-gray-200 w-[3.13rem] flex flex-row p-[0.78rem] box-border items-center justify-center">
								<CloseIcon />
							</div>
						</div>
					</div>
					<div className="self-stretch hidden flex-col items-start justify-start gap-[0.63rem]">
						<div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
							<div className="flex-1 relative leading-[125%] font-medium">
								Logradouro
							</div>
						</div>
						<div className="self-stretch rounded-lg bg-gray-100 flex flex-row p-[0.78rem] items-center justify-start text-text-200 border-[1px] border-solid border-text-200">
							<div className="flex-1 relative leading-[125%]">
								Rua Djalma Ulrich, 110
							</div>
						</div>
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
						<div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
							<div className="flex-1 relative leading-[125%] font-medium">
								Endereço
							</div>
							<InfoIcon />
						</div>
						<div className="self-stretch rounded-lg bg-gray-200 dark:bg-dark-gray-200 overflow-hidden flex flex-row p-[0.78rem] items-center justify-between text-text-200">
							<div className="relative leading-[125%]">
								Loteamento Raio Solar, Rua 12, Quadra 25, no. 17 - São Paulo, Brasil
							</div>
							<div className="relative w-[1.13rem] h-[1.13rem]" />
						</div>
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
						<div className="self-stretch flex flex-row items-center justify-between">
							<div className="relative leading-[125%] font-medium">Complemento</div>
						</div>
						<div className="self-stretch rounded-lg bg-gray-200 dark:bg-dark-gray-200 flex flex-row p-[0.78rem] items-center justify-between text-text-200">
							<div className="relative leading-[125%]">15</div>
							<div className="relative w-[1.13rem] h-[1.13rem]" />
						</div>
					</div>
					<div className="self-stretch hidden flex-col items-start justify-start gap-[0.63rem]">
						<div className="self-stretch flex flex-row items-center justify-start">
							<div className="flex-1 relative leading-[125%] font-medium">Bairro</div>
						</div>
						<div className="self-stretch rounded-lg bg-gray-100 flex flex-row p-[0.78rem] items-center justify-start text-text-200 border-[1px] border-solid border-text-200">
							<div className="flex-1 relative leading-[125%]">Copacabana</div>
						</div>
					</div>
					<div className="self-stretch hidden flex-col items-start justify-start gap-[0.63rem]">
						<div className="self-stretch flex flex-row items-center justify-start">
							<div className="flex-1 relative leading-[125%] font-medium">Cidade</div>
						</div>
						<div className="self-stretch rounded-lg bg-gray-100 flex flex-row p-[0.78rem] items-center justify-start text-text-200 border-[1px] border-solid border-text-200">
							<div className="flex-1 relative leading-[125%]">Rio de Janeiro</div>
						</div>
					</div>
					<div className="self-stretch hidden flex-col items-start justify-start gap-[0.63rem]">
						<div className="self-stretch flex flex-row items-center justify-start">
							<div className="flex-1 relative leading-[125%] font-medium">Estado</div>
						</div>
						<div className="self-stretch rounded-lg bg-gray-100 flex flex-row p-[0.78rem] items-center justify-start text-text-200 border-[1px] border-solid border-text-200">
							<div className="flex-1 relative leading-[125%]">
								Rio de Janeiro (RJ)
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="rounded-[10px] bg-gray-200 dark:bg-dark-gray-200 w-[20.31rem] flex flex-row py-[0.88rem] px-[4.25rem] box-border items-center justify-center text-[0.81rem] text-tailwind-white font-roboto-serif">
				<div className="relative leading-[135%] font-semibold">Continuar</div>
			</div>
		</div>
	);
}

function PhoneIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_1991_4187"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="18"
				height="18"
			>
				<rect width="18" height="18" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1991_4187)">
				<path
					d="M14.9625 15.75C13.35 15.75 11.7782 15.3905 10.2473 14.6715C8.71575 13.953 7.3595 13.003 6.1785 11.8215C4.997 10.6405 4.047 9.28425 3.3285 7.75275C2.6095 6.22175 2.25 4.65 2.25 3.0375C2.25 2.8125 2.325 2.625 2.475 2.475C2.625 2.325 2.8125 2.25 3.0375 2.25H6.075C6.25 2.25 6.40625 2.30625 6.54375 2.41875C6.68125 2.53125 6.7625 2.675 6.7875 2.85L7.275 5.475C7.3 5.65 7.297 5.80925 7.266 5.95275C7.2345 6.09675 7.1625 6.225 7.05 6.3375L5.23125 8.175C5.75625 9.075 6.41575 9.91875 7.20975 10.7062C8.00325 11.4937 8.875 12.175 9.825 12.75L11.5875 10.9875C11.7 10.875 11.847 10.7905 12.0285 10.734C12.2095 10.678 12.3875 10.6625 12.5625 10.6875L15.15 11.2125C15.325 11.25 15.4688 11.3342 15.5812 11.4653C15.6937 11.5967 15.75 11.75 15.75 11.925V14.9625C15.75 15.1875 15.675 15.375 15.525 15.525C15.375 15.675 15.1875 15.75 14.9625 15.75ZM4.51875 6.75L5.75625 5.5125L5.4375 3.75H3.76875C3.83125 4.2625 3.91875 4.76875 4.03125 5.26875C4.14375 5.76875 4.30625 6.2625 4.51875 6.75ZM14.25 14.2125V12.5625L12.4875 12.2062L11.2313 13.4625C11.7188 13.675 12.2157 13.8438 12.7222 13.9688C13.2282 14.0938 13.7375 14.175 14.25 14.2125Z"
					fill="var(--text-100)"
				/>
			</g>
		</svg>
	);
}

function AddressIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_1991_4196"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="18"
				height="18"
			>
				<rect width="18" height="18" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1991_4196)">
				<path
					d="M9 9C9.4125 9 9.76575 8.853 10.0598 8.559C10.3533 8.2655 10.5 7.9125 10.5 7.5C10.5 7.0875 10.3533 6.73425 10.0598 6.44025C9.76575 6.14675 9.4125 6 9 6C8.5875 6 8.2345 6.14675 7.941 6.44025C7.647 6.73425 7.5 7.0875 7.5 7.5C7.5 7.9125 7.647 8.2655 7.941 8.559C8.2345 8.853 8.5875 9 9 9ZM9 14.5125C10.525 13.1125 11.6562 11.8405 12.3937 10.6965C13.1312 9.553 13.5 8.5375 13.5 7.65C13.5 6.2875 13.0655 5.17175 12.1965 4.30275C11.328 3.43425 10.2625 3 9 3C7.7375 3 6.67175 3.43425 5.80275 4.30275C4.93425 5.17175 4.5 6.2875 4.5 7.65C4.5 8.5375 4.86875 9.553 5.60625 10.6965C6.34375 11.8405 7.475 13.1125 9 14.5125ZM9 16.2188C8.9 16.2188 8.8 16.2 8.7 16.1625C8.6 16.125 8.5125 16.075 8.4375 16.0125C6.6125 14.4 5.25 12.9032 4.35 11.5222C3.45 10.1407 3 8.85 3 7.65C3 5.775 3.60325 4.28125 4.80975 3.16875C6.01575 2.05625 7.4125 1.5 9 1.5C10.5875 1.5 11.9842 2.05625 13.1902 3.16875C14.3967 4.28125 15 5.775 15 7.65C15 8.85 14.55 10.1407 13.65 11.5222C12.75 12.9032 11.3875 14.4 9.5625 16.0125C9.4875 16.075 9.4 16.125 9.3 16.1625C9.2 16.2 9.1 16.2188 9 16.2188Z"
					fill="var(--text-100)"
				/>
			</g>
		</svg>
	);
}

function CloseIcon() {
	return (
		<svg
			width="18"
			height="19"
			viewBox="0 0 18 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_1991_4210"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="18"
				height="19"
			>
				<rect y="0.5" width="18" height="18" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1991_4210)">
				<path
					d="M9.0001 10.55L5.3251 14.225C5.1876 14.3625 5.0126 14.4312 4.8001 14.4312C4.5876 14.4312 4.4126 14.3625 4.2751 14.225C4.1376 14.0875 4.06885 13.9125 4.06885 13.7C4.06885 13.4875 4.1376 13.3125 4.2751 13.175L7.9501 9.49998L4.2751 5.82498C4.1376 5.68748 4.06885 5.51248 4.06885 5.29998C4.06885 5.08748 4.1376 4.91248 4.2751 4.77498C4.4126 4.63748 4.5876 4.56873 4.8001 4.56873C5.0126 4.56873 5.1876 4.63748 5.3251 4.77498L9.0001 8.44998L12.6751 4.77498C12.8126 4.63748 12.9876 4.56873 13.2001 4.56873C13.4126 4.56873 13.5876 4.63748 13.7251 4.77498C13.8626 4.91248 13.9313 5.08748 13.9313 5.29998C13.9313 5.51248 13.8626 5.68748 13.7251 5.82498L10.0501 9.49998L13.7251 13.175C13.8626 13.3125 13.9313 13.4875 13.9313 13.7C13.9313 13.9125 13.8626 14.0875 13.7251 14.225C13.5876 14.3625 13.4126 14.4312 13.2001 14.4312C12.9876 14.4312 12.8126 14.3625 12.6751 14.225L9.0001 10.55Z"
					fill="var(--text-100)"
				/>
			</g>
		</svg>
	);
}

function InfoIcon() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_1991_4217"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="16"
				height="16"
			>
				<rect width="16" height="16" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1991_4217)">
				<path
					d="M7.99992 11.3334C8.18881 11.3334 8.34725 11.2694 8.47525 11.1414C8.60281 11.0138 8.66658 10.8556 8.66658 10.6667V7.98337C8.66658 7.79449 8.60281 7.63893 8.47525 7.51671C8.34725 7.39448 8.18881 7.33337 7.99992 7.33337C7.81103 7.33337 7.65281 7.39715 7.52525 7.52471C7.39725 7.65271 7.33325 7.81115 7.33325 8.00004V10.6834C7.33325 10.8723 7.39725 11.0278 7.52525 11.15C7.65281 11.2723 7.81103 11.3334 7.99992 11.3334ZM7.99992 6.00004C8.18881 6.00004 8.34725 5.93604 8.47525 5.80804C8.60281 5.68048 8.66658 5.52226 8.66658 5.33337C8.66658 5.14448 8.60281 4.98604 8.47525 4.85804C8.34725 4.73048 8.18881 4.66671 7.99992 4.66671C7.81103 4.66671 7.65281 4.73048 7.52525 4.85804C7.39725 4.98604 7.33325 5.14448 7.33325 5.33337C7.33325 5.52226 7.39725 5.68048 7.52525 5.80804C7.65281 5.93604 7.81103 6.00004 7.99992 6.00004ZM7.99992 14.6667C7.0777 14.6667 6.21103 14.4916 5.39992 14.1414C4.58881 13.7916 3.88325 13.3167 3.28325 12.7167C2.68325 12.1167 2.20836 11.4112 1.85859 10.6C1.50836 9.78893 1.33325 8.92226 1.33325 8.00004C1.33325 7.07782 1.50836 6.21115 1.85859 5.40004C2.20836 4.58893 2.68325 3.88337 3.28325 3.28337C3.88325 2.68337 4.58881 2.20826 5.39992 1.85804C6.21103 1.50826 7.0777 1.33337 7.99992 1.33337C8.92214 1.33337 9.78881 1.50826 10.5999 1.85804C11.411 2.20826 12.1166 2.68337 12.7166 3.28337C13.3166 3.88337 13.7915 4.58893 14.1413 5.40004C14.4915 6.21115 14.6666 7.07782 14.6666 8.00004C14.6666 8.92226 14.4915 9.78893 14.1413 10.6C13.7915 11.4112 13.3166 12.1167 12.7166 12.7167C12.1166 13.3167 11.411 13.7916 10.5999 14.1414C9.78881 14.4916 8.92214 14.6667 7.99992 14.6667ZM7.99992 13.3334C9.4777 13.3334 10.7361 12.814 11.7753 11.7754C12.8139 10.7363 13.3333 9.47782 13.3333 8.00004C13.3333 6.52226 12.8139 5.26382 11.7753 4.22471C10.7361 3.18604 9.4777 2.66671 7.99992 2.66671C6.52214 2.66671 5.26392 3.18604 4.22525 4.22471C3.18614 5.26382 2.66659 6.52226 2.66659 8.00004C2.66659 9.47782 3.18614 10.7363 4.22525 11.7754C5.26392 12.814 6.52214 13.3334 7.99992 13.3334Z"
					fill="var(--text-100)"
				/>
			</g>
		</svg>
	);
}
