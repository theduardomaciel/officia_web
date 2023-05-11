// Components
import Heading, { MainHeading } from 'components/Heading';
import { Section } from 'components/Layout';
import { cn } from 'lib/utils';
import React from 'react';
import Index1Frame1 from '../objects/components/Index1Frame1';
import Index1Frame2 from '../objects/components/Index1Frame2';

export default function Section1() {
	return (
		<Section className="p-0">
			<div className="flex flex-row items-start justify-between gap-x-5 w-full">
				<MainHeading
					index={1}
					title="GERENCIE SEU NEGÓCIO"
					containerClassName="lg:max-w-[50%]"
				>
					<span>
						Registre seu negócio e <span className="italic">automatize</span> todos os
						processos que atrasam a comunicação entre sua empresa e seus clientes.
					</span>
				</MainHeading>
				<div className="h-[27.5rem] w-3/4 hidden xl:flex relative">
					<Index1Frame1 />
					<Index1Frame2 />
				</div>
			</div>

			<Heading
				title={
					<>
						ABANDONANDO O <span className="font-title">TRADICIONALISMO</span>
					</>
				}
				containerClassName="lg:max-w-[35vw]"
				className="text-2xl lg:text-4xl"
			/>

			<Scheme
				backgroundLabel={'ABANDONANDO O TRADICIONALISMO'}
				flowLabel={<>Gerenciamento Manual do Negócio</>}
			/>

			<div className="flex flex-col items-center justify-start lg:flex-row-reverse gap-y-20 lg:gap-x-24 w-full">
				<Heading
					title={'E ABRAÇANDO A AUTOMAÇÃO'}
					containerClassName="lg:w-[65vw]"
					className="text-2xl lg:text-4xl"
					position="right"
				>
					Todos os processos repetitivos e burocráticos automatizados e personalizados
					pensando em como seu negócio funciona.
				</Heading>

				<Scheme
					flowLabel={
						<>
							<span className="font-title font-normal px-2">officia</span>
						</>
					}
					className="flex lg:hidden"
				/>

				<Scheme
					flowLabel={
						<>
							<span className="font-title font-normal px-2">officia</span>
						</>
					}
					className="hidden lg:flex"
					triangleFlow
				/>
			</div>
		</Section>
	);
}

interface SchemeProps {
	className?: string;
	backgroundLabel?: string;
	flowLabel: React.ReactNode;
	triangleFlow?: boolean;
}

function Scheme({ className, backgroundLabel, flowLabel, triangleFlow }: SchemeProps) {
	return (
		<div className={cn('flex flex-col items-center justify-center w-full gap-y-16', className)}>
			{triangleFlow && (
				<div className="flex flex-row items-end justify-end gap-x-5">
					<Arrow className="lg:-rotate-45" gradient />

					<div className="flex flex-row items-center justify-center p-6 bg-gray-300 dark:bg-dark-gray-400 dark:border-text-200 rounded-md font-semibold text-xl text-center mt-12 mb-12">
						{flowLabel}
					</div>

					<Arrow className="lg:rotate-45" gradient />
				</div>
			)}
			<div
				className={cn(
					'flex flex-col lg:flex-row items-center justify-between self-center w-full gap-y-9 relative lg:max-w-[75vw]',
					className
				)}
			>
				{backgroundLabel && (
					<>
						<TextBackground
							count={4}
							title={backgroundLabel}
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex"
						/>
						<TextBackground
							count={10}
							title={backgroundLabel}
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex lg:hidden"
						/>
					</>
				)}

				<div className="flex flex-row items-center justify-center px-6 py-12 bg-gray-300 dark:bg-dark-gray-400 border-2 border-dashed dark:border-text-200 rounded-md font-semibold text-2xl">
					Seu Negócio
				</div>

				{!triangleFlow && (
					<>
						<Arrow className="lg:-rotate-90" />

						<div className="flex flex-row items-center justify-center p-6 bg-gray-300 dark:bg-dark-gray-400 dark:border-text-200 rounded-md font-semibold text-xl text-center">
							{flowLabel}
						</div>

						<Arrow className="lg:-rotate-90" />
					</>
				)}

				<div className="flex flex-col items-center justify-center px-12 py-12 bg-gray-300 dark:bg-dark-gray-400 border-2 border-solid dark:border-text-200 rounded-[2rem] font-semibold text-2xl text-center">
					<svg
						width="37"
						height="36"
						viewBox="0 0 37 36"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<mask
							id="mask0_1461_11356"
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="37"
							height="36"
						>
							<rect x="0.5" width="36" height="36" fill="#D9D9D9" />
						</mask>
						<g mask="url(#mask0_1461_11356)">
							<path
								d="M18.5 18C16.85 18 15.4375 17.4125 14.2625 16.2375C13.0875 15.0625 12.5 13.65 12.5 12C12.5 10.35 13.0875 8.9375 14.2625 7.7625C15.4375 6.5875 16.85 6 18.5 6C20.15 6 21.5625 6.5875 22.7375 7.7625C23.9125 8.9375 24.5 10.35 24.5 12C24.5 13.65 23.9125 15.0625 22.7375 16.2375C21.5625 17.4125 20.15 18 18.5 18ZM9.5 30C8.675 30 7.96875 29.7063 7.38125 29.1188C6.79375 28.5312 6.5 27.825 6.5 27V25.8C6.5 24.95 6.71875 24.1687 7.15625 23.4562C7.59375 22.7437 8.175 22.2 8.9 21.825C10.45 21.05 12.025 20.4688 13.625 20.0812C15.225 19.6937 16.85 19.5 18.5 19.5C20.15 19.5 21.775 19.6937 23.375 20.0812C24.975 20.4688 26.55 21.05 28.1 21.825C28.825 22.2 29.4062 22.7437 29.8438 23.4562C30.2812 24.1687 30.5 24.95 30.5 25.8V27C30.5 27.825 30.2063 28.5312 29.6188 29.1188C29.0312 29.7063 28.325 30 27.5 30H9.5Z"
								fill="var(--neutral)"
							/>
						</g>
					</svg>
					Cliente
				</div>
			</div>
		</div>
	);
}

interface TextBackgroundProps {
	title: string;
	count: number;
	className?: string;
}

function TextBackground({ title, count, className }: TextBackgroundProps) {
	return (
		<ul
			className={cn(
				'flex flex-col w-screen items-center justify-center gap-y-5 -z-10 overflow-hidden',
				className
			)}
		>
			{Array(count)
				.fill(0)
				.map((_, index) => (
					<TextLine key={index} index={index} title={title} />
				))}
		</ul>
	);
}

function TextLine({ title, index }: { title: string; index: number }) {
	return (
		<ul
			className="flex flex-row items-center justify-center gap-x-3"
			style={{
				paddingLeft: index % 2 === 0 ? '0' : '5rem'
			}}
		>
			{Array(10)
				.fill(0)
				.map((_, index) => (
					<li
						key={index}
						className="font-black text-4xl whitespace-nowrap text-transparent opacity-80 dark:opacity-20"
						style={{
							WebkitTextStrokeWidth: '0.2px',
							WebkitTextStrokeColor: 'var(--neutral)'
						}}
					>
						{title}
					</li>
				))}
		</ul>
	);
}

function Arrow({ className, gradient }: { className?: string; gradient?: boolean }) {
	return gradient ? (
		<svg
			width="132"
			height="23"
			viewBox="0 0 132 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				opacity="0.65"
				d="M2.26959 10.25C1.44117 10.25 0.769592 10.9216 0.769592 11.75C0.769592 12.5784 1.44117 13.25 2.26959 13.25V10.25ZM130.791 12.8107C131.377 12.2249 131.377 11.2751 130.791 10.6893L121.245 1.1434C120.659 0.557612 119.71 0.557612 119.124 1.1434C118.538 1.72918 118.538 2.67893 119.124 3.26472L127.609 11.75L119.124 20.2353C118.538 20.8211 118.538 21.7708 119.124 22.3566C119.71 22.9424 120.659 22.9424 121.245 22.3566L130.791 12.8107ZM2.26959 13.25L129.73 13.25V10.25L2.26959 10.25V13.25Z"
				fill="url(#paint0_linear_1326_5929)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_1326_5929"
					x1="130.877"
					y1="13.3411"
					x2="-2.05902"
					y2="12.6339"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#C4C4C4" />
					<stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
				</linearGradient>
			</defs>
		</svg>
	) : (
		<svg width="23" height="68" viewBox="0 0 23 68" fill="none" className={className}>
			<path
				d="M13 2C13 1.17157 12.3284 0.5 11.5 0.5C10.6716 0.5 10 1.17157 10 2L13 2ZM10.4393 67.0607C11.0251 67.6464 11.9749 67.6464 12.5607 67.0607L22.1066 57.5147C22.6924 56.9289 22.6924 55.9792 22.1066 55.3934C21.5208 54.8076 20.5711 54.8076 19.9853 55.3934L11.5 63.8787L3.01472 55.3934C2.42893 54.8076 1.47918 54.8076 0.893396 55.3934C0.307609 55.9792 0.307609 56.9289 0.893396 57.5147L10.4393 67.0607ZM10 2L10 66L13 66L13 2L10 2Z"
				fill={'var(--text-100)'}
			/>
		</svg>
	);
}
