import Link from 'next/link';
import HeaderInteractivity, {
	HeaderInteractiveChildren,
	HeaderInteractivityProps
} from './subcomponents/Interactive';

interface Props {
	children?: React.ReactNode;
	interactivityProps?: HeaderInteractivityProps;
}

export default function Header({ children, interactivityProps }: Props) {
	return (
		<header
			id="header"
			className="w-screen h-[var(--header)] flex items-center justify-between px-wrapper fixed top-0 z-40 transition-colors 
            before:absolute before:w-screen before:h-[var(--header)] before:top-0 before:left-0 before:bg-transparent dark:before:bg-dark-gray-500 before:-z-10 before:brightness-50 before:transition before:border-b border-b-gray-400 dark:before:border-b-dark-gray-100 before:opacity-0 data-[scroll]:backdrop-blur-lg data-[scroll]:before:opacity-50"
		>
			<a href="/" className="font-title text-2xl z-50 text-[var(--neutral)]">
				officia
			</a>
			{!interactivityProps?.putTogether && (
				<HeaderInteractiveChildren>
					{interactivityProps?.children}
				</HeaderInteractiveChildren>
			)}
			<div className="flex flex-row items-center justify-end gap-x-16">
				<HeaderInteractivity {...interactivityProps} />
				{children}
			</div>
		</header>
	);
}

export function HeaderTitle({ title, href }: { title: string; href?: string }) {
	return href ? (
		<Link
			href={href}
			className="font-semibold text-sm lg:flex hidden cursor-pointer text-text-100"
		>
			{title}
		</Link>
	) : (
		<p className="font-semibold text-sm lg:flex hidden">{title}</p>
	);
}

import { classed } from '@tw-classed/react';

export const Item = classed.li(
	'font-semibold cursor-pointer text-text-100 hover:text-[var(--neutral)] transition-colors',
	{
		variants: {
			size: {
				normal: 'text-sm',
				large: 'text-xl'
			}
		},
		defaultVariants: {
			size: 'normal'
		}
	}
);
