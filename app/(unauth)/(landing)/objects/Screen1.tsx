import Image from 'next/image';
import { cn } from 'lib/utils';

import { ElectricIcon, HydraulicIcon } from './components/Icons';

// Components
import IphoneTop from './components/IphoneTop';
import IphoneBottom from './components/IphoneBottom';
import Filter from './components/Filter';
import Menu from './components/Menu';

export default function Screen1({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'absolute h-[507.5px] w-[234.38px] rounded-[18.75px] bg-gray-100 dark:bg-dark-gray-300 shadow-[-2px_4px_50px_20px_rgba(15,_23,_42,_0.25)] box-border overflow-hidden flex flex-col items-start justify-start text-left text-[0.35rem] text-text-100 font-normal border-[2px] border-solid border-text-200 select-none',
				className
			)}
		>
			<IphoneTop />
			<div className="self-stretch h-[28.13rem] overflow-hidden shrink-0 flex flex-col py-[0rem] px-[0.98rem] box-border items-center justify-start gap-[0.98rem] z-[1]">
				<div className="rounded-t-[18.75px] rounded-b-none w-[12.7rem] flex flex-row items-center justify-start gap-[0.59rem]">
					<div className="flex-1 flex flex-row items-center justify-start relative gap-[0.59rem]">
						<Image
							className="relative w-[1.25rem] h-[1.25rem] object-cover z-[0]"
							alt="Profile placeholder picture"
							width={12.5}
							height={12.5}
							src="/landing/profile.png"
						/>
						<div className="flex-1 relative z-[1]">
							<p className="m-0">
								<span>
									<span>{`Boa tarde, `}</span>
								</span>
							</p>
							<p className="m-0">
								<span>
									<b>Fulano da Silva</b>
								</span>
								<span className="font-inter text-text-20border-text-200">.</span>
							</p>
						</div>
					</div>
					<div className="rounded-[18.75px] bg-gray-300 dark:bg-dark-gray-200 flex flex-row py-[0rem] px-1 items-start justify-start gap-[0.2rem] text-[0.47rem] font-normal pointer-events-none select-none">
						{/* Expand SVG */}
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_1970_4192)">
								<path
									d="M8.40156 4.15156L6.25 6.29844L4.09844 4.15156L3.4375 4.8125L6.25 7.625L9.0625 4.8125L8.40156 4.15156Z"
									fill="var(--text-100)"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1970_4192">
									<rect
										width="11.25"
										height="11.25"
										fill="white"
										transform="translate(0.625 0.125)"
									/>
								</clipPath>
							</defs>
						</svg>
						<div className="relative font-semibold flex items-center h-[0.7rem] shrink-0 pr-1">
							Expandir
						</div>
					</div>
				</div>
				<div className="shrink-0 flex flex-col items-start justify-start gap-[0.39rem] text-center text-[0.39rem] font-normal">
					<div className="w-[12.7rem] flex flex-row py-[0rem] px-[0.59rem] box-border items-start justify-between">
						<div className="relative font-semibold flex items-center justify-center w-[0.28rem] h-[0.27rem] shrink-0">
							D
						</div>
						<div className="relative font-semibold flex items-center justify-center w-[0.28rem] h-[0.27rem] shrink-0">
							S
						</div>
						<div className="relative font-semibold flex items-center justify-center w-[0.28rem] h-[0.27rem] shrink-0">
							T
						</div>
						<div className="relative font-semibold flex items-center justify-center w-[0.28rem] h-[0.27rem] shrink-0">
							Q
						</div>
						<div className="relative font-semibold flex items-center justify-center w-[0.28rem] h-[0.27rem] shrink-0">
							Q
						</div>
						<div className="relative font-semibold flex items-center justify-center w-[0.28rem] h-[0.27rem] shrink-0">
							S
						</div>
						<div className="relative font-semibold flex items-center justify-center w-[0.28rem] h-[0.27rem] shrink-0">
							S
						</div>
					</div>
					<div className="self-stretch flex flex-row items-center justify-between text-[0.63rem] text-[var(--neutral)]">
						<div className="rounded-[31.25px] bg-gray-300 dark:bg-dark-gray-200 w-[1.37rem] h-[1.37rem] overflow-hidden shrink-0 flex flex-col py-[0.2rem] px-[0.12rem] box-border items-center justify-center">
							<div className="relative font-semibold text-[var(--neutral)] dark:text-white">
								21
							</div>
						</div>
						<div className="rounded-[31.25px] bg-gray-300 dark:bg-dark-gray-200 w-[1.37rem] h-[1.37rem] overflow-hidden shrink-0 flex flex-col py-[0.2rem] px-[0.12rem] box-border items-center justify-center relative">
							<div className="relative font-semibold text-[var(--neutral)] dark:text-white">
								22
							</div>
							<div className="w-[1.5px] h-[1.5px] bg-yellow absolute left-1/2 -translate-x-1/2 rounded-[50%] bottom-[0.15rem]"></div>
						</div>
						<div className="rounded-[31.25px] bg-gray-300 dark:bg-dark-gray-200 w-[1.37rem] h-[1.37rem] overflow-hidden shrink-0 flex flex-col py-[0.2rem] px-[0.12rem] box-border items-center justify-center">
							<div className="relative font-semibold text-[var(--neutral)] dark:text-white">
								23
							</div>
						</div>
						<div className="rounded-[31.25px] bg-transparent w-[1.37rem] h-[1.37rem] overflow-hidden flex flex-col py-[0.2rem] px-[0.12rem] box-border items-center justify-center relative">
							<div className="relative font-semibold text-[var(--neutral)] dark:text-white">
								24
							</div>
							<div className="w-[0.12rem] h-[0.12rem] bg-yellow absolute left-1/2 -translate-x-1/2 rounded-full bottom-[0.15rem]"></div>
						</div>
						<div className="rounded-[31.25px] bg-gray-300 dark:bg-dark-gray-200 box-border w-[1.37rem] h-[1.37rem] overflow-hidden shrink-0 flex flex-col py-[0.2rem] px-[0.12rem] items-center justify-center border-[0.6px] border-solid border-[var(--neutral)]">
							<div className="relative font-semibold text-[var(--neutral)] dark:text-white">
								25
							</div>
						</div>
						<div className="rounded-[31.25px] bg-gray-300 dark:bg-dark-gray-200 w-[1.37rem] h-[1.37rem] overflow-hidden shrink-0 flex flex-col py-[0.2rem] px-[0.12rem] box-border items-center justify-center">
							<div className="relative font-semibold text-[var(--neutral)] dark:text-white">
								26
							</div>
						</div>
						<div className="rounded-[31.25px] bg-red w-[1.37rem] h-[1.37rem] overflow-hidden shrink-0 flex flex-col py-[0.2rem] px-[0.12rem] box-border items-center justify-center text-gray-300">
							<div className="relative font-semibold text-[var(--neutral)] invert">
								27
							</div>
						</div>
					</div>
				</div>
				<div className="w-[12.7rem] flex flex-row items-start justify-start gap-[0.39rem] text-[0.55rem] text-text-100 font-normal">
					<Filter />
					<div className="h-fit flex flex-row items-start justify-start gap-x-[0.39rem] text-text-100">
						<div className="rounded-[18.75px] bg-gray-300 dark:bg-dark-gray-200 flex flex-row h-[1.35rem] px-[0.59rem] items-center justify-center gap-x-[0.2rem] border-[0.6px] border-solid border-green">
							<HydraulicIcon className="w-3" />
							<div className="relative font-semibold">Hidráulico</div>
						</div>
						<div className="rounded-[18.75px] bg-gray-300 dark:bg-dark-gray-200  flex flex-row h-[1.35rem] py-[0.27rem] px-[0.59rem] items-center justify-center gap-[0.2rem] border-[0.6px] border-solid border-green">
							<ElectricIcon className="w-3" />
							<div className="relative font-semibold">Elétrico</div>
						</div>
					</div>
				</div>

				<Services />
			</div>
			<Menu />
			<IphoneBottom />
		</div>
	);
}

export function Services({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'self-stretch flex-1 rounded-[6.25px] flex flex-col items-start justify-start gap-[0.78rem] text-[0.7rem] text-[var(--neutral)] font-raleway select-none',
				className
			)}
		>
			<div className="self-stretch flex flex-row items-end justify-between">
				<b className="relative text-[var(--neutral)]">Esta semana</b>
				<div className="relative text-[0.39rem] font-semibold opacity-[0.34] text-[var(--neutral)]">
					2 serviços no total
				</div>
			</div>
			<div className="self-stretch flex flex-col items-start justify-start gap-[0.39rem] text-[0.55rem]">
				<div className="self-stretch flex flex-row items-center justify-start gap-[0.39rem]">
					<div className="w-[1.37rem] h-[1.37rem] flex flex-row items-center justify-center">
						<div className="w-[1.37rem] h-[1.37rem] flex flex-row items-center justify-center">
							<HydraulicIcon className="w-[18px] h-[18px]" />
						</div>
					</div>
					<div className="relative box-border w-[0.02rem] h-[1.03rem] opacity-[0.6] border-r-[0.3px] border-dashed border-text-100" />
					<div className="flex-1 flex flex-col items-start justify-start gap-[0.1rem]">
						<div className="relative font-semibold text-[var(--neutral)]">
							Serviço n. 010-2023
						</div>
						<div className="self-stretch relative text-[0.39rem] text-gray-400 font-inter">
							<span>{`5 subserviços para `}</span>
							<span className="font-semibold text-[var(--neutral)]">
								Wellington Ferreira
							</span>
						</div>
					</div>
					<div className="self-stretch flex flex-row items-center justify-center relative gap-[0.39rem] text-center font-inter">
						<CalendarIcon />
						<div className="relative font-black z-[1]">Hoje</div>
					</div>
				</div>
				<div className="self-stretch flex flex-row items-center justify-start gap-[0.39rem]">
					<div className="w-[1.37rem] h-[1.37rem] flex flex-row items-center justify-center">
						<MultiIcon />
					</div>
					<div className="relative box-border w-[0.02rem] h-[1.03rem] opacity-[0.6] border-r-[0.3px] border-dashed border-text-100" />
					<div className="flex-1 flex flex-col items-start justify-start gap-[0.1rem]">
						<div className="relative font-semibold">Serviço n. 012-2023</div>
						<div className="self-stretch relative text-[0.39rem] text-gray-400 font-inter">
							<span>{`2 subserviços para `}</span>
							<span className="font-semibold text-[var(--neutral)]">Rita Brass</span>
						</div>
					</div>
					<div className="self-stretch flex flex-row items-center justify-center relative gap-[0.39rem] text-center font-inter">
						<CalendarIcon />
						<div className="relative font-black z-[1]">Terça</div>
					</div>
				</div>
			</div>
			<div className="self-stretch flex flex-row items-end justify-between">
				<b className="relative">Este mês</b>
				<div className="relative text-[0.39rem] font-semibold opacity-[0.34]">
					1 serviço no total
				</div>
			</div>
			<div className="self-stretch flex flex-col items-start justify-start text-[0.55rem]">
				<div className="self-stretch flex flex-row items-center justify-start gap-[0.39rem]">
					<div className="w-[1.37rem] h-[1.37rem] flex flex-row items-center justify-center relative">
						<MultiIcon />
					</div>
					<div className="relative box-border w-[0.02rem] h-[1.03rem] opacity-[0.6] border-r-[0.3px] border-dashed border-text-100" />
					<div className="flex-1 flex flex-col items-start justify-start gap-[0.1rem]">
						<div className="relative font-semibold">Serviço n. 015-2023</div>
						<div className="self-stretch relative text-[0.39rem] text-gray-400 font-inter">
							<span>{`2 subserviços para `}</span>
							<span className="font-semibold text-[var(--neutral)]">Bruno Souza</span>
						</div>
					</div>
					<div className="self-stretch flex flex-row items-center justify-center relative gap-[0.39rem] text-center font-inter">
						<CalendarIcon />
						<div className="relative font-black z-[1]">19/02</div>
					</div>
				</div>
			</div>
			<div className="self-stretch flex flex-row items-end justify-between">
				<b className="relative">Próximos</b>
				<div className="relative text-[0.39rem] font-semibold opacity-[0.34]">
					1 serviço no total
				</div>
			</div>
			<div className="self-stretch flex flex-col items-start justify-start text-[0.55rem]">
				<div className="self-stretch flex flex-row items-center justify-start gap-[0.39rem]">
					<div className="w-[1.37rem] h-[1.37rem] flex flex-row items-center justify-center">
						<MultiIcon />
					</div>
					<div className="relative box-border w-[0.02rem] h-[1.03rem] opacity-[0.6] border-r-[0.3px] border-dashed border-text-100" />
					<div className="flex-1 flex flex-col items-start justify-start gap-[0.1rem]">
						<div className="relative font-semibold">Serviço n. 024-2023</div>
						<div className="self-stretch relative text-[0.39rem] text-gray-400 font-inter">
							<span>{`2 subserviços para `}</span>
							<span className="font-semibold text-[var(--neutral)]">
								Renato Brandão
							</span>
						</div>
					</div>
					<div className="self-stretch flex flex-row items-center justify-center relative gap-[0.39rem] text-center font-inter">
						<CalendarIcon />
						<div className="relative font-black z-[1]">31/04</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function MultiIcon({ className }: { className?: string }) {
	return (
		<svg
			width="23"
			height="23"
			viewBox="0 0 23 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_1970_4333"
				maskUnits="userSpaceOnUse"
				x="4"
				y="3"
				width="16"
				height="16"
			>
				<rect x="4.0625" y="3.9375" width="15" height="15" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1970_4333)">
				<path
					d="M10.2344 9.01563L8.67188 7.45312L10.6719 5.45312C10.7969 5.32812 10.9375 5.23437 11.0938 5.17187C11.25 5.10937 11.4063 5.07812 11.5625 5.07812C11.7188 5.07812 11.875 5.10937 12.0313 5.17187C12.1875 5.23437 12.3281 5.32812 12.4531 5.45312L14.4531 7.45312L12.8906 9.01563L11.5625 7.6875L10.2344 9.01563ZM7.57812 14.3281L5.57812 12.3281C5.45312 12.2031 5.35937 12.0625 5.29687 11.9063C5.23437 11.75 5.20312 11.5938 5.20312 11.4375C5.20312 11.2813 5.23437 11.125 5.29687 10.9688C5.35937 10.8125 5.45312 10.6719 5.57812 10.5469L7.57812 8.54688L9.14063 10.1094L7.8125 11.4375L9.14063 12.7656L7.57812 14.3281ZM15.5469 14.3281L13.9844 12.7656L15.3125 11.4375L13.9844 10.1094L15.5469 8.54688L17.5469 10.5469C17.6719 10.6719 17.7656 10.8125 17.8281 10.9688C17.8906 11.125 17.9219 11.2813 17.9219 11.4375C17.9219 11.5938 17.8906 11.75 17.8281 11.9063C17.7656 12.0625 17.6719 12.2031 17.5469 12.3281L15.5469 14.3281ZM11.5625 17.7969C11.4063 17.7969 11.25 17.7656 11.0938 17.7031C10.9375 17.6406 10.7969 17.5469 10.6719 17.4219L8.67188 15.4219L10.2344 13.8594L11.5625 15.1875L12.8906 13.8594L14.4531 15.4219L12.4531 17.4219C12.3281 17.5469 12.1875 17.6406 12.0313 17.7031C11.875 17.7656 11.7188 17.7969 11.5625 17.7969ZM12.4531 11.4375C12.4531 11.6771 12.3646 11.8854 12.1875 12.0625C12.0104 12.2396 11.8021 12.3281 11.5625 12.3281C11.3229 12.3281 11.1146 12.2396 10.9375 12.0625C10.7604 11.8854 10.6719 11.6771 10.6719 11.4375C10.6719 11.1979 10.7604 10.9896 10.9375 10.8125C11.1146 10.6354 11.3229 10.5469 11.5625 10.5469C11.8021 10.5469 12.0104 10.6354 12.1875 10.8125C12.3646 10.9896 12.4531 11.1979 12.4531 11.4375Z"
					fill="var(--text-100)"
				/>
			</g>
		</svg>
	);
}

function CalendarIcon({ className }: { className?: string }) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			className={
				'absolute my-0 mx-[!important] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 z-[0]'
			}
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.2">
				<mask
					id="mask0_1970_4324"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16"
				>
					<rect x="0.375" y="0.0625" width="15" height="15" fill="white" />
				</mask>
				<g mask="url(#mask0_1970_4324)">
					<path
						d="M3.5 13.8125C3.15625 13.8125 2.86187 13.6902 2.61687 13.4456C2.37229 13.2006 2.25 12.9063 2.25 12.5625V3.8125C2.25 3.46875 2.37229 3.17458 2.61687 2.93C2.86187 2.685 3.15625 2.5625 3.5 2.5625H4.125V1.92187C4.125 1.74479 4.18479 1.59896 4.30438 1.48438C4.42438 1.36979 4.57292 1.3125 4.75 1.3125C4.92708 1.3125 5.07562 1.37229 5.19562 1.49187C5.31521 1.61187 5.375 1.76042 5.375 1.9375V2.5625H10.375V1.92187C10.375 1.74479 10.435 1.59896 10.555 1.48438C10.6746 1.36979 10.8229 1.3125 11 1.3125C11.1771 1.3125 11.3254 1.37229 11.445 1.49187C11.565 1.61187 11.625 1.76042 11.625 1.9375V2.5625H12.25C12.5938 2.5625 12.8881 2.685 13.1331 2.93C13.3777 3.17458 13.5 3.46875 13.5 3.8125V12.5625C13.5 12.9063 13.3777 13.2006 13.1331 13.4456C12.8881 13.6902 12.5938 13.8125 12.25 13.8125H3.5ZM3.5 12.5625H12.25V6.3125H3.5V12.5625ZM3.5 5.0625H12.25V3.8125H3.5V5.0625Z"
						fill="var(--neutral)"
					/>
				</g>
			</g>
		</svg>
	);
}

// Subscription Ad
/* 
<div className="self-stretch rounded-[3.13px] [background:linear-gradient(180deg,_#6cbe45,_rgba(44,_119,_8,_0.25))] overflow-hidden shrink-0 hidden flex-row py-[0.39rem] px-[0.59rem] items-start justify-end relative gap-[0.2rem] text-[0.31rem] text-white">
<div className="flex flex-col items-start justify-start gap-[0.2rem] z-[0]">
    <div className="self-stretch flex flex-col items-start justify-start relative">
        <div className="relative z-[0]">Plano Pro Mensal</div>
        <div className="self-stretch relative text-[0.63rem] font-abril-fatface z-[1]">
            Oferta por tempo limitado!
        </div>
        <div className="my-0 mx-[!important] absolute top-[-0.39rem] left-[4.41rem] rounded-tl-none rounded-tr-[3.13px] rounded-br-none rounded-bl-[3.13px] bg-bg-200 flex flex-row py-[0.1rem] px-[0.39rem] items-center justify-end gap-[0.2rem] z-[2] text-[0.23rem]">
            <img
                className="relative w-[0.23rem] h-[0.23rem]"
                alt=""
                src="/timer.svg"
            />
            <div className="relative font-medium">4d 5h 36m</div>
        </div>
    </div>
    <div className="rounded-[1.88px] bg-green overflow-hidden flex flex-col py-[0.2rem] px-[0.39rem] items-start justify-start">
        <div className="relative">
            <span>
                <span className="text-[0.31rem]">{`assinar por `}</span>
                <span className="text-[0.23rem] [text-decoration:line-through]">
                    R$ 34,99/mês
                </span>
                <span>{` `}</span>
            </span>
            <span>
                <span className="font-medium">R$ 24,99/mês</span>
            </span>
        </div>
    </div>
</div>
<img
    className="absolute my-0 mx-[!important] top-[0.24rem] left-[-1.72rem] w-[6.54rem] h-[4.54rem] opacity-[0.8] z-[1]"
    alt=""
    src="/logo1.svg"
/>
<img
    className="absolute my-0 mx-[!important] top-[0.86rem] left-[1.45rem] w-[2.19rem] h-[2.19rem] z-[2]"
    alt=""
    src="/acute.svg"
/>
</div>
*/
