export default function Index3Warranty() {
	return (
		<div className="relative w-full lg:w-[20.31rem] lg:ml-12 rounded-2xl bg-gray-300 dark:bg-dark-gray-400 flex flex-col p-[1.56rem] items-start justify-start text-sm text-text-100 font-inter">
			<div className="w-full flex flex-col items-start justify-start gap-[0.63rem]">
				<div className="flex flex-row items-center justify-start gap-[0.63rem] text-[0.88rem]">
					<WarrantyIcon />
					<div className="relative leading-[125%] font-semibold">Garantia</div>
				</div>
				<div className="self-stretch rounded-lg bg-gray-200 dark:bg-dark-gray-200 flex flex-row p-[0.78rem] items-center justify-start text-[var(--neutral)]">
					<div className="flex-1 relative leading-[125%]">90 dias</div>
				</div>
				<div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
					<div className="relative leading-[125%] font-medium">Condições da Garantia</div>
					<div className="self-stretch rounded-lg bg-gray-200 dark:bg-dark-gray-200 flex flex-row p-[0.78rem] items-start justify-start text-[var(--neutral)]">
						<div className="flex-1 relative leading-[125%]">
							<span>{`Os serviços realizados `}</span>
							<b>não dão garantia</b>
							<span>
								{' '}
								de que não haverão outras entradas de ar nas tubulações que
								alimentam o Apartamento 03, pois as existentes estão mal
								dimensionadas.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function WarrantyIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_1330_2644"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="18"
				height="18"
			>
				<rect width="18" height="18" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1330_2644)">
				<path
					d="M8.2125 9.5248L7.18125 8.4748C7.03125 8.3248 6.85325 8.2498 6.64725 8.2498C6.44075 8.2498 6.2625 8.3248 6.1125 8.4748C5.9625 8.6248 5.8845 8.8028 5.8785 9.0088C5.872 9.2153 5.94375 9.39356 6.09375 9.54356L7.6875 11.1373C7.8375 11.2873 8.0125 11.3623 8.2125 11.3623C8.4125 11.3623 8.5875 11.2873 8.7375 11.1373L11.925 7.94981C12.075 7.79981 12.15 7.62155 12.15 7.41505C12.15 7.20905 12.075 7.03105 11.925 6.88105C11.775 6.73105 11.597 6.65605 11.391 6.65605C11.1845 6.65605 11.0063 6.73105 10.8563 6.88105L8.2125 9.5248ZM9 16.4436H8.8125C8.75 16.4436 8.69375 16.4311 8.64375 16.4061C7.00625 15.8936 5.65625 14.8778 4.59375 13.3588C3.53125 11.8403 3 10.1623 3 8.32481V4.78105C3 4.46855 3.09075 4.1873 3.27225 3.9373C3.45325 3.6873 3.6875 3.50605 3.975 3.39355L8.475 1.70605C8.65 1.64355 8.825 1.6123 9 1.6123C9.175 1.6123 9.35 1.64355 9.525 1.70605L14.025 3.39355C14.3125 3.50605 14.547 3.6873 14.7285 3.9373C14.9095 4.1873 15 4.46855 15 4.78105V8.32481C15 10.1623 14.4688 11.8403 13.4062 13.3588C12.3438 14.8778 10.9938 15.8936 9.35625 16.4061C9.29375 16.4311 9.175 16.4436 9 16.4436ZM9 14.9248C10.3 14.5123 11.375 13.6873 12.225 12.4498C13.075 11.2123 13.5 9.83731 13.5 8.32481V4.78105L9 3.09355L4.5 4.78105V8.32481C4.5 9.83731 4.925 11.2123 5.775 12.4498C6.625 13.6873 7.7 14.5123 9 14.9248Z"
					fill="var(--neutral)"
				/>
			</g>
		</svg>
	);
}
