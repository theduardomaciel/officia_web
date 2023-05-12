import Image from 'next/image';
import { cn } from 'lib/utils';

import { ElectricIcon, HydraulicIcon } from './components/Icons';

// Components
import Filter from './components/Filter';
import Menu from './components/Menu';
import IphoneBottom from './components/IphoneBottom';
import IphoneTop from './components/IphoneTop';

export default function Screen2({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'absolute h-[507.5px] w-[234.38px] rounded-[18.75px] bg-gray-100 dark:bg-dark-gray-300 shadow-[-2px_4px_50px_20px_rgba(15,_23,_42,_0.25)] box-border overflow-hidden flex flex-col items-start justify-start text-left text-[0.7rem] text-text-100 font-raleway border-[2px] border-solid border-text-100 select-none',
				className
			)}
		>
			<IphoneTop />
			<div className="self-stretch h-[28.13rem] overflow-hidden shrink-0 flex flex-col py-[0rem] px-[0.98rem] box-border items-center justify-start gap-[0.98rem] z-[1]">
				<div className="rounded-t-[18.75px] rounded-b-none w-[12.7rem] flex flex-row items-center justify-between">
					<Image
						className="relative w-[1.25rem] h-[1.25rem] object-cover"
						alt="Profile placeholder picture"
						width={12.5}
						height={12.5}
						src="/landing/profile.png"
					/>
					<b className="relative">Visão geral</b>
					<div className="relative w-[1.25rem] h-[1.25rem] bg-transparent"></div>
				</div>
				<div className="self-stretch rounded-[4.38px] bg-gray-300 dark:bg-dark-gray-200 overflow-hidden shrink-0 flex flex-row p-[0.39rem] items-center justify-start gap-[0.39rem] text-[0.39rem] font-inter">
					<SearchIcon />
					<div className="relative">Buscar por nome, cliente</div>
				</div>
				<div className="w-[12.7rem] flex flex-row items-start justify-start gap-[0.39rem] text-[0.55rem] text-text-100 font-source-sans-pro">
					<Filter />
					<div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.39rem] text-text-100">
						<div className="rounded-[18.75px] bg-gray-300 dark:bg-dark-gray-200 flex flex-row h-[1.35rem] px-[0.59rem] items-center justify-center gap-x-[0.2rem] border-[0.6px] border-solid border-green">
							<div className="relative font-semibold">Datas</div>
							<ExpandIcon />
						</div>
						<div className="rounded-[18.75px] bg-gray-300 dark:bg-dark-gray-200 flex flex-row h-[1.35rem] px-[0.59rem] items-center justify-center gap-x-[0.2rem] border-[0.6px] border-solid border-green">
							<div className="relative font-semibold">Categorias</div>
							<ExpandIcon />
						</div>
						<div className="relative font-semibold">Limpar</div>
					</div>
				</div>
				<div className="self-stretch flex flex-col items-center justify-center text-[0.2rem] text-gray-400 font-inter">
					<div className="self-stretch flex flex-row pt-[0rem] px-[0.98rem] pb-[0.59rem] items-start justify-center gap-[0.39rem]">
						<div className="relative rounded-[6.25px] bg-gray-300 dark:bg-dark-gray-200 w-[13.44rem] h-[7.03rem] overflow-hidden shrink-0" />
						<div className="rounded-[6.25px] [background:linear-gradient(107.77deg,_#E1E4E8,_#D1D5DB)] dark:[background:linear-gradient(107.77deg,_#1C1B1F,_#292929)] w-[12.7rem] h-[7.03rem] overflow-hidden shrink-0 flex flex-col py-[0.59rem] px-[1.17rem] box-border items-center justify-center relative gap-[0.39rem]">
							<div className="self-stretch flex flex-row items-start justify-start gap-[0.59rem] z-[0] text-center text-[0.31rem] text-[var(--neutral)]">
								<div className="self-stretch flex flex-col items-center justify-start gap-[0.2rem]">
									<div className="flex-1 relative rounded-tl-[3.13px] rounded-tr-none rounded-br-[3.13px] rounded-bl-none bg-yellow w-[1.25rem]" />
									<div className="relative font-medium">Seg.</div>
								</div>
								<div className="self-stretch flex flex-col items-center justify-start gap-[0.2rem]">
									<div className="self-stretch flex-1 flex flex-col items-start justify-start">
										<div className="relative rounded-tl-[3.13px] rounded-tr-none rounded-b-none bg-yellow w-[1.25rem] h-[2.19rem]" />
										<div className="flex-1 relative rounded-t-none rounded-br-[3.13px] rounded-bl-none bg-blue box-border w-[1.41rem] outline outline-[1px] outline-blue/40" />
									</div>
									<div className="relative font-medium">Ter.</div>
								</div>
								<div className="flex flex-col items-center justify-start gap-[0.2rem]">
									<div className="relative rounded-tl-[3.13px] rounded-tr-none rounded-br-[3.13px] rounded-bl-none bg-blue w-[1.25rem] h-[3.83rem]" />
									<div className="relative font-medium">Qua.</div>
								</div>
								<div className="self-stretch flex flex-col items-center justify-start gap-[0.2rem]">
									<div className="self-stretch flex-1 flex flex-col items-start justify-start">
										<div className="relative rounded-tl-[3.13px] rounded-tr-none rounded-b-none bg-yellow w-[1.25rem] h-[2.62rem]" />
										<div className="flex-1 relative rounded-t-none rounded-br-[3.13px] rounded-bl-none bg-blue w-[1.25rem]" />
									</div>
									<div className="relative font-medium">Qui.</div>
								</div>
								<div className="self-stretch flex flex-col items-center justify-start gap-[0.2rem]">
									<div className="self-stretch flex-1 flex flex-col items-start justify-start">
										<div className="relative rounded-tl-[3.13px] rounded-tr-none rounded-b-none bg-yellow w-[1.25rem] h-[2.19rem]" />
										<div className="flex-1 relative rounded-t-none rounded-br-[3.13px] rounded-bl-none bg-blue w-[1.25rem]" />
									</div>
									<div className="relative font-medium">Sex.</div>
								</div>
								<div className="self-stretch flex flex-col items-center justify-start gap-[0.2rem]">
									<div className="self-stretch flex-1 flex flex-col items-start justify-start">
										<div className="flex-1 relative rounded-tl-none rounded-tr-[3.13px] rounded-br-none rounded-bl-[3.13px] bg-gray-400 w-[1.25rem]" />
									</div>
									<div className="relative font-medium">Sáb.</div>
								</div>
							</div>
							<div className="flex flex-col items-center justify-start relative gap-[0.04rem] z-[1]">
								<div className="flex flex-row items-center justify-center z-[0]">
									<div className="flex flex-row items-start justify-start">
										<div className="relative rounded-t-[31.25px] rounded-br-none rounded-bl-[31.25px] bg-yellow w-[4.26rem] h-[0.43rem]" />
										<div className="relative rounded-tl-none rounded-tr-[31.25px] rounded-b-[31.25px] bg-blue box-border w-[3.75rem] h-[0.43rem] ml-[-0.39rem] outline outline-[1px] outline-blue/40" />
									</div>
								</div>
								<div className="flex flex-row items-center justify-center gap-x-10">
									<ElectricIcon className="w-[8.75px]" />
									<HydraulicIcon className="w-[8.75px]" />
								</div>
							</div>
							<div className="absolute flex items-center justify-center my-0 mx-[!important] top-[2.8rem] left-[1.41rem] w-[2.38rem] h-[0.9rem] z-[2]">
								<Popup />
								<div className="absolute top-1/2 -translate-y-1/2 left-[0.23rem] flex flex-col items-start justify-center">
									<div className="relative flex items-center w-[1.33rem] h-[0.2rem] shrink-0">
										30% - 24/01
									</div>
									<b className="relative text-[0.31rem] flex text-gray-300 dark:text-dark-gray-500 items-center w-[1.33rem] h-[0.35rem] shrink-0">
										R$25
									</b>
								</div>
							</div>
							<div className="absolute flex items-center justify-center my-0 mx-[!important] top-[4.85rem] left-[8.01rem] w-[2.38rem] h-[0.9rem] z-[3]">
								<Popup className="-scale-x-100" />
								<div className="absolute top-1/2 -translate-y-1/2 left-[1.25rem] flex flex-col items-end justify-center">
									<div className="relative -mb-[1px]">40%</div>
									<b className="relative text-[0.31rem] text-gray-300 dark:text-dark-gray-500 ">
										R$120
									</b>
								</div>
							</div>
						</div>
						<div className="relative rounded-[6.25px] bg-gray-300 dark:bg-dark-gray-200 w-[13.44rem] h-[7.03rem] overflow-hidden shrink-0" />
					</div>
					<div className="flex flex-row items-center justify-center gap-[0.39rem]">
						<div className="w-[5px] h-[5px] rounded-[50%] bg-gray-300 dark:bg-dark-gray-200" />
						<div className="w-[5px] h-[5px] rounded-[50%] bg-text-100" />
						<div className="w-[5px] h-[5px] rounded-[50%] bg-gray-300 dark:bg-dark-gray-200" />
					</div>
				</div>
				<div className="rounded-[6.25px] w-[12.7rem] h-[12.46rem] flex flex-col items-start justify-start gap-[0.78rem] text-[0.86rem] text-[var(--neutral)]">
					<div className="self-stretch flex flex-row items-end justify-between">
						<b className="relative">Janeiro</b>
						<div className="relative text-[0.39rem] font-semibold opacity-[0.34]">{`R$1240 no total `}</div>
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[0.59rem] text-[0.39rem] font-inter">
						<div className="self-stretch rounded-[3.13px] flex flex-col items-start justify-center gap-[0.2rem] font-raleway">
							<div className="self-stretch flex flex-row items-start justify-between">
								<div className="relative font-medium opacity-[0.8]">
									Terça, 24 jan 2023
								</div>
								<div className="relative font-semibold opacity-[0.8]">{`R$1100 ganhos `}</div>
							</div>
							<div className="self-stretch relative box-border h-[0.04rem] border-t-[0.6px] border-solid border-text-100" />
						</div>
						<ServiceItem />
						<ServiceItem price={825} />
						<div className="self-stretch relative box-border h-[0.04rem] opacity-[0.5] border-t-[0.6px] border-solid border-gray-400" />
					</div>
				</div>
			</div>
			<Menu />
			<IphoneBottom />
		</div>
	);
}

interface ServiceItemProps {
	price?: number;
}

function ServiceItem({ price }: ServiceItemProps) {
	return (
		<div className="self-stretch flex flex-col items-start justify-start gap-[0.39rem]">
			<div className="self-stretch flex flex-row items-center justify-start gap-[0.39rem] text-center text-[1.25rem]">
				<div className="self-stretch w-[1.95rem] flex flex-row items-center justify-center relative gap-[0.39rem]">
					<div className="flex-1 absolute my-0 mx-[!important] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black opacity-[0.2] z-[0]">
						R$
					</div>
					<div className="flex-1 relative text-[0.7rem] font-black z-[1]">
						{price ?? 1100}
					</div>
				</div>
				<div className="relative box-border w-[0.02rem] h-[1.03rem] opacity-[0.6] border-r-[0.3px] border-dashed border-text-100" />
				<div className="flex-1 flex flex-col items-start justify-start gap-[0.1rem] text-left text-[0.55rem] font-raleway">
					<div className="relative font-semibold">Serviço n. 010-2023</div>
					<div className="self-stretch relative text-[0.39rem] text-gray-400 font-inter">
						<span>{`5 subserviços para `}</span>
						<span className="font-semibold text-[var(--neutral)]">
							Wellington Ferreira
						</span>
					</div>
				</div>
			</div>
			<div className="self-stretch rounded-[3.13px] bg-gray-300 dark:bg-dark-gray-200 flex flex-row py-[0.2rem] px-[0.39rem] items-start justify-start gap-[0.39rem]">
				<div className="flex-1 flex flex-col items-start justify-start gap-[0.2rem]">
					<b className="self-stretch relative leading-[125%]">
						Aplicação de silicone em box de banheiro
					</b>
					<div className="flex flex-row items-center justify-start text-[0.31rem]">
						<div className="flex flex-row items-center justify-start gap-[0.2rem]">
							<HydraulicIcon className="w-[0.4rem]" />
							<div className="relative font-semibold">Hidráulico</div>
							<div className="relative leading-[125%]">x4</div>
						</div>
					</div>
				</div>
				<div className="self-stretch flex flex-col items-center justify-center text-[0.31rem]">
					<div className="rounded-[15.63px] bg-green flex flex-row py-[0.12rem] px-[0.39rem] items-start justify-start">
						<b className="relative leading-[125%] text-white">R$ 200</b>
					</div>
				</div>
			</div>
			<div className="self-stretch rounded-[3.13px] bg-gray-300 dark:bg-dark-gray-200 flex flex-row py-[0.2rem] px-[0.39rem] items-start justify-start gap-[0.39rem]">
				<div className="flex-1 flex flex-col items-start justify-start gap-[0.2rem]">
					<b className="self-stretch relative leading-[125%]">
						Instalação de chuveiro elétrico
					</b>
					<div className="flex flex-row items-center justify-start text-[0.31rem]">
						<div className="flex flex-row items-center justify-start gap-[0.2rem]">
							<ElectricIcon className="w-[0.4rem]" />
							<div className="relative font-semibold">Elétrico</div>
						</div>
					</div>
				</div>
				<div className="self-stretch flex flex-col items-center justify-center text-[0.31rem]">
					<div className="rounded-[15.63px] bg-green flex flex-row py-[0.12rem] px-[0.39rem] items-start justify-start">
						<b className="relative leading-[125%] text-white">R$ 300</b>
					</div>
				</div>
			</div>
		</div>
	);
}

function ExpandIcon() {
	return (
		<svg
			width="12"
			height="13"
			viewBox="0 0 12 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_1970_3967"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="12"
				height="13"
			>
				<rect x="0.0742188" y="0.875" width="11.25" height="11.25" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1970_3967)">
				<path
					d="M5.69926 7.88281C5.63676 7.88281 5.57817 7.87297 5.52348 7.85328C5.46879 7.8339 5.41801 7.80078 5.37113 7.7539L3.20317 5.58594C3.11723 5.5 3.07629 5.3925 3.08035 5.26344C3.0841 5.13469 3.12895 5.02734 3.21488 4.9414C3.30082 4.85547 3.4102 4.8125 3.54301 4.8125C3.67582 4.8125 3.7852 4.85547 3.87113 4.9414L5.69926 6.76953L7.5391 4.92969C7.62504 4.84375 7.73254 4.80265 7.8616 4.8064C7.99035 4.81047 8.0977 4.85547 8.18363 4.9414C8.26957 5.02734 8.31254 5.13672 8.31254 5.26953C8.31254 5.40234 8.26957 5.51172 8.18363 5.59765L6.02738 7.7539C5.98051 7.80078 5.92973 7.8339 5.87504 7.85328C5.82035 7.87297 5.76176 7.88281 5.69926 7.88281Z"
					fill="var(--text-100)"
				/>
			</g>
		</svg>
	);
}

function SearchIcon() {
	return (
		<svg
			width="11"
			height="11"
			viewBox="0 0 11 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_1970_3942"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="11"
				height="11"
			>
				<rect x="0.875" y="0.625" width="10" height="10" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1970_3942)">
				<path
					d="M8.75 9.08333L6.41667 6.75C6.20833 6.91667 5.96875 7.04861 5.69792 7.14583C5.42708 7.24306 5.13889 7.29167 4.83333 7.29167C4.07639 7.29167 3.43576 7.02951 2.91146 6.50521C2.38715 5.9809 2.125 5.34028 2.125 4.58333C2.125 3.82639 2.38715 3.18576 2.91146 2.66146C3.43576 2.13715 4.07639 1.875 4.83333 1.875C5.59028 1.875 6.2309 2.13715 6.75521 2.66146C7.27951 3.18576 7.54167 3.82639 7.54167 4.58333C7.54167 4.88889 7.49306 5.17708 7.39583 5.44792C7.29861 5.71875 7.16667 5.95833 7 6.16667L9.34375 8.51042C9.42014 8.58681 9.45833 8.68056 9.45833 8.79167C9.45833 8.90278 9.41667 9 9.33333 9.08333C9.25694 9.15972 9.15972 9.19792 9.04167 9.19792C8.92361 9.19792 8.82639 9.15972 8.75 9.08333ZM4.83333 6.45833C5.35417 6.45833 5.79687 6.27604 6.16146 5.91146C6.52604 5.54687 6.70833 5.10417 6.70833 4.58333C6.70833 4.0625 6.52604 3.61979 6.16146 3.25521C5.79687 2.89062 5.35417 2.70833 4.83333 2.70833C4.3125 2.70833 3.86979 2.89062 3.50521 3.25521C3.14062 3.61979 2.95833 4.0625 2.95833 4.58333C2.95833 5.10417 3.14062 5.54687 3.50521 5.91146C3.86979 6.27604 4.3125 6.45833 4.83333 6.45833Z"
					fill="var(--text-100)"
				/>
			</g>
		</svg>
	);
}

function Popup({ className }: { className?: string }) {
	return (
		<svg
			width="39"
			height="16"
			viewBox="0 0 39 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M2.35992 0.875C1.12561 0.875 0.125 1.88805 0.125 3.13771V12.9428C0.125 14.1924 1.12561 15.2055 2.35992 15.2055H33.4684C33.1118 14.6662 32.9038 14.0176 32.9038 13.3199C32.9038 11.4454 34.4048 9.92582 36.2562 9.92582C36.9454 9.92582 37.586 10.1364 38.1187 10.4974V3.13771C38.1187 1.88805 37.1181 0.875 35.8837 0.875H2.35992Z"
				fill="var(--neutral)"
			/>
			<path
				d="M38.875 13.4237C38.875 14.7775 37.791 15.875 36.4538 15.875C35.1167 15.875 34.0327 14.7775 34.0327 13.4237C34.0327 12.0699 35.1167 10.9725 36.4538 10.9725C37.791 10.9725 38.875 12.0699 38.875 13.4237Z"
				fill="var(--neutral)"
			/>
		</svg>
	);
}
