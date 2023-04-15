import { cn } from 'lib/utils';
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

export function Logo({ className, ...rest }: IconProps) {
	return (
		<svg
			width="101"
			height="80"
			viewBox="0 0 101 80"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('fill-[var(--neutral)]', className)}
			{...rest}
		>
			<path d="M0.500002 79.8246L0.5 25.8649C0.499999 11.5801 12.0926 6.24409e-07 26.3929 0L26.3929 79.8246H0.500002Z" />
			<path d="M37.5536 79.8246L37.5536 25.8649C37.5536 11.5801 49.1462 6.24409e-07 63.4464 0L63.4464 79.8246H37.5536Z" />
			<path d="M74.6071 79.8246V34.3379C74.6071 27.1955 80.4035 21.4055 87.5536 21.4055C94.7037 21.4055 100.5 27.1955 100.5 34.3379V79.8246H74.6071Z" />
		</svg>
	);
}

export function Spinner({ className, ...rest }: IconProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('animate-spin', className)}
			{...rest}
		>
			<path
				d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
				opacity=".25"
			/>
			<path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" />
		</svg>
	);
}

export function DownloadIcon({ className, ...rest }: IconProps) {
	return (
		<div
			className={cn(
				'flex items-center justify-center cursor-not-allowed text-left lg:max-w-[150px]',
				className
			)}
		>
			<p className="text-text-100 font-medium text-center text-sm pointer-events-none select-none">
				Disponível em breve para Android e iOS
			</p>
		</div>
	);
}

export function GithubIcon({ className, ...rest }: IconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...rest}>
			<g clipPath="url(#a)">
				<path
					fill="var(--text-100)"
					d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 20 10c0-5.525-4.475-10-10-10Z"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0h20v20H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function TwitterIcon({ className, ...rest }: IconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...rest}>
			<g clipPath="url(#a)">
				<path
					fill="var(--text-100)"
					d="M6.283 18.75c7.546 0 11.676-6.254 11.676-11.668 0-.176 0-.352-.008-.527A8.357 8.357 0 0 0 20 4.426c-.75.331-1.546.55-2.36.648a4.126 4.126 0 0 0 1.808-2.271 8.167 8.167 0 0 1-2.61.992 4.107 4.107 0 0 0-6.993 3.743 11.657 11.657 0 0 1-8.46-4.286A4.111 4.111 0 0 0 2.658 8.73 4.153 4.153 0 0 1 .8 8.218v.056a4.11 4.11 0 0 0 3.29 4.022 4.009 4.009 0 0 1-1.08.144c-.265 0-.521-.024-.77-.072a4.103 4.103 0 0 0 3.834 2.847 8.235 8.235 0 0 1-5.098 1.76A7.9 7.9 0 0 1 0 16.919a11.681 11.681 0 0 0 6.283 1.831Z"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0h20v20H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function ThemeIcon({ className, ...rest }: IconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={14} height={15} fill="none">
			<circle cx={7} cy={7.5} r={6.5} stroke={'var(--text-100)'} />
			<path fill={'var(--text-100)'} d="M7 14.5a7 7 0 1 1 0-14v14Z" />
		</svg>
	);
}

export function RightArrow(props: IconProps) {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<mask
				id="mask0_1370_1984"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="12"
				height="12"
			>
				<rect width="12" height="12" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_1370_1984)">
				<path
					d="M3.57501 10.55C3.45001 10.425 3.38751 10.2771 3.38751 10.1063C3.38751 9.93543 3.45001 9.78752 3.57501 9.66252L7.23751 6.00002L3.56251 2.32502C3.44585 2.20835 3.38751 2.06252 3.38751 1.88752C3.38751 1.71252 3.45001 1.56252 3.57501 1.43752C3.70001 1.31252 3.84793 1.25002 4.01876 1.25002C4.1896 1.25002 4.33751 1.31252 4.46251 1.43752L8.66251 5.65002C8.71251 5.70002 8.74793 5.75418 8.76876 5.81252C8.7896 5.87085 8.80001 5.93335 8.80001 6.00002C8.80001 6.06668 8.7896 6.12918 8.76876 6.18752C8.74793 6.24585 8.71251 6.30002 8.66251 6.35002L4.45001 10.5625C4.33335 10.6792 4.1896 10.7375 4.01876 10.7375C3.84793 10.7375 3.70001 10.675 3.57501 10.55Z"
					fill="#292929"
				/>
			</g>
		</svg>
	);
}
