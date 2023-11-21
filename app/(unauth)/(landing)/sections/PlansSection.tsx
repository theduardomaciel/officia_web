import React from 'react';
import { cn } from 'lib/utils';

// Components
import { Section } from 'components/Layout';
import Heading from 'components/Heading';
import PlansPicker from './PlansPicker';

export default function PlansSection() {
	return (
		<Section className="p-0 gap-y-16 relative">
			<Heading title="CONFIRA E COMPARE">
				Queremos que o <span className="font-title">officia</span> seja acessível a todos:
				de pequenos a grandes empreendedores. <br />
				Por isso, garantimos que nosso relacionamento seja transparente. Este é o nosso
				compromisso com você.
			</Heading>
			<PlansPicker />
		</Section>
	);
}

interface DiscountTagProps {
	discount?: number;
	textClassName?: string;
	className?: string;
}

export function DiscountTag({ discount, className, textClassName }: DiscountTagProps) {
	return (
		<div
			className={cn(
				'flex flex-row items-center justify-center gap-x-1 px-1.5 py-1 bg-green rounded-md',
				className
			)}
		>
			{discount && (
				<p className={cn('text-[10px] lg:text-xs text-white', textClassName)}>
					-{discount}%
				</p>
			)}
			<svg
				viewBox="0 0 12 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-3 h-3 sm:w-4 sm:h-4"
			>
				<mask
					id="mask0_1944_1263"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="12"
					height="13"
				>
					<rect y="0.5" width="12" height="12" fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_1944_1263)">
					<path
						d="M7.12525 11.2C6.93358 11.3917 6.69608 11.4875 6.41274 11.4875C6.12941 11.4875 5.89191 11.3917 5.70024 11.2L1.30024 6.8C1.20858 6.70833 1.13566 6.6 1.08149 6.475C1.02733 6.35 1.00024 6.21667 1.00024 6.075V2.5C1.00024 2.225 1.09816 1.98958 1.29399 1.79375C1.48983 1.59792 1.72524 1.5 2.00024 1.5H5.57524C5.71691 1.5 5.85024 1.52708 5.97524 1.58125C6.10024 1.63542 6.20858 1.70833 6.30024 1.8L10.7002 6.2125C10.8919 6.40417 10.9877 6.63958 10.9877 6.91875C10.9877 7.19792 10.8919 7.43333 10.7002 7.625L7.12525 11.2ZM3.25024 4.5C3.45858 4.5 3.63566 4.42708 3.78149 4.28125C3.92733 4.13542 4.00024 3.95833 4.00024 3.75C4.00024 3.54167 3.92733 3.36458 3.78149 3.21875C3.63566 3.07292 3.45858 3 3.25024 3C3.04191 3 2.86483 3.07292 2.71899 3.21875C2.57316 3.36458 2.50024 3.54167 2.50024 3.75C2.50024 3.95833 2.57316 4.13542 2.71899 4.28125C2.86483 4.42708 3.04191 4.5 3.25024 4.5Z"
						fill="white"
					/>
				</g>
			</svg>
		</div>
	);
}

interface PlanPreviewProps {
	title: string;
	titleChildren?: React.ReactNode;
	description: string | React.ReactNode;
	addendum?: string | React.ReactNode;
	price?: number;
	features: string | string[];
	button: {
		text: string;
		href?: string;
		disabled?: boolean;
	};
}

export function PlanPreview({
	title,
	titleChildren,
	description,
	addendum,
	price,
	features,
	button
}: PlanPreviewProps) {
	return (
		<div className="flex flex-col items-start p-6 gap-6 bg-gray-200 dark:bg-dark-gray-400 rounded-2xl w-full max-w-lg">
			<div className="flex items-center justify-center rounded-md p-4 bg-gray-300 dark:bg-dark-gray-500">
				<svg
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_1944_4855"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="28"
						height="28"
					>
						<rect width="28" height="28" fill="#D9D9D9" />
					</mask>
					<g mask="url(#mask0_1944_4855)">
						<path
							d="M14 26.833L10.5 23.333H5.83333C5.19167 23.333 4.64236 23.1045 4.18542 22.6476C3.72847 22.1906 3.5 21.6413 3.5 20.9997V4.66634C3.5 4.02467 3.72847 3.47537 4.18542 3.01842C4.64236 2.56148 5.19167 2.33301 5.83333 2.33301H22.1667C22.8083 2.33301 23.3576 2.56148 23.8146 3.01842C24.2715 3.47537 24.5 4.02467 24.5 4.66634V20.9997C24.5 21.6413 24.2715 22.1906 23.8146 22.6476C23.3576 23.1045 22.8083 23.333 22.1667 23.333H17.5L14 26.833ZM5.83333 20.9997H11.4333L14 23.5663L16.5667 20.9997H22.1667V4.66634H5.83333V20.9997ZM15.8083 14.6413L19.8333 12.833L15.8083 11.0247L14 6.99967L12.1917 11.0247L8.16667 12.833L12.1917 14.6413L14 18.6663L15.8083 14.6413Z"
							fill="var(--text-100)"
						/>
					</g>
				</svg>
			</div>
			<div className="flex flex-row items-center justify-between w-full">
				<h6 className="text-left font-title text-3xl text-black dark:text-white">
					{title}
				</h6>
				{titleChildren}
			</div>
			{typeof features === 'string' ? (
				<p className="font-normal text-base">{features}</p>
			) : (
				<ul className="flex flex-col items-start justify-start gap-y-1 list-disc list-inside">
					{features.map((feature, index) => (
						<li key={index} className="font-normal text-base">
							{feature}
						</li>
					))}
				</ul>
			)}
			<p className="w-full text-center font-normal text-sm text-text-100 -mb-4">{addendum}</p>
			{price !== undefined && (
				<p className="w-full text-center text-text-100 font-black text-2xl">
					R$ <span className="text-4xl">{price}</span>{' '}
					<span className="font-bold text-lg text-text-200">/ mês</span>
				</p>
			)}
			<a
				href={button.href ?? undefined}
				className={cn(
					'w-full flex items-center justify-center p-3 bg-green rounded-default font-bold text-white dark:text-white hover:brightness-110 transition',
					{
						'cursor-not-allowed bg-gray-400 dark:bg-text-100': button.disabled
					}
				)}
			>
				{button.text}
			</a>
			<p className="font-normal text-center text-sm text-black dark:text-white">
				{description}
			</p>
		</div>
	);
}
