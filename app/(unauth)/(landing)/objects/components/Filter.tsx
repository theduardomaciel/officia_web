import { FunctionComponent } from 'react';

const Filter: FunctionComponent = () => {
	return (
		<div className="rounded-[18.75px] bg-gray-300 dark:bg-dark-gray-200 h-[1.35rem] flex flex-row py-[0rem] px-[0.59rem] box-border items-center justify-start gap-[0.2rem] text-left text-[0.63rem] text-black font-source-sans-pro">
			<svg
				width="15"
				height="13"
				viewBox="0 0 15 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_1970_4225)">
					<path
						d="M2.4902 3.17187C3.67379 4.52083 5.85934 7.02083 5.85934 7.02083V10.1458C5.85934 10.4323 6.12301 10.6667 6.44528 10.6667H7.61715C7.93942 10.6667 8.20309 10.4323 8.20309 10.1458V7.02083C8.20309 7.02083 10.3828 4.52083 11.5664 3.17187C11.8652 2.82812 11.5898 2.33333 11.1035 2.33333H2.95309C2.46676 2.33333 2.19137 2.82812 2.4902 3.17187Z"
						fill="var(--text-100)"
					/>
				</g>
				<defs>
					<clipPath id="clip0_1970_4225">
						<rect
							width="14.0625"
							height="12.5"
							fill="white"
							transform="translate(0 0.25)"
						/>
					</clipPath>
				</defs>
			</svg>

			<div className="relative font-semibold flex items-center w-[1.92rem] h-[1.17rem] shrink-0 text-text-100">
				Filtros
			</div>
		</div>
	);
};

export default Filter;
