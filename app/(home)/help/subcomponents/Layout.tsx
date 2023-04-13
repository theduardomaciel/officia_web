import Image from 'next/image';

interface PageHeader {
	title: string;
}

import { HelpCircle } from 'lucide-react';
import { cn } from 'lib/utils';

// Components
import HelpSearchBar from 'components/SearchHelp';
import { Logo } from 'components/Icons';

export function PageHeader({ title }: PageHeader) {
	return (
		<header className="relative z-10 flex h-screen w-full flex-col items-center justify-center bg-gray-400 pt-header lg:h-[85vh]">
			<div className="flex h-full flex-col items-center justify-center gap-y-8 px-wrapper">
				<Image
					className="pointer-events-none absolute z-[6] object-cover"
					fill
					src={`/images/pattern.png`}
					alt="Pattern"
					priority
				/>
				<Logo width={75} height={60} className="z-10" />
				<h1 className="z-10 w-full text-center font-title text-4xl text-white lg:w-fit lg:text-5xl">
					{title}
				</h1>
				<HelpSearchBar placeholder="Descreva o problema ou dúvida" />
			</div>
		</header>
	);
}

export function GoToContactButton({ className }: { className?: string }) {
	return (
		<a
			className={cn(
				'flex items-center justify-center gap-x-3 rounded-3xl bg-primary px-4 py-2 text-sm font-semibold text-gray-300 transition-colors hover:bg-gray-50',
				className
			)}
			href={`/contact`}
		>
			Fale Conosco
		</a>
	);
}

export function ContactDisclaimer() {
	return (
		<div className="flex items-center px-wrapper pb-section">
			<div className="flex w-full flex-col items-center justify-between gap-y-6 rounded-[15px] bg-gray-400 p-6 lg:flex-row lg:px-12 lg:py-6">
				<div className="flex flex-row items-center justify-start gap-x-6">
					<HelpCircle
						width={24}
						height={24}
						className="min-w-[24px]"
						color={'var(--text-100)'}
					/>
					<p className="text-base font-medium text-text-100">
						Ainda ficou com dúvida em algum assunto?
					</p>
				</div>
				<GoToContactButton className="w-full px-6 lg:w-fit" />
			</div>
		</div>
	);
}

/* import { classed } from '@tw-classed/react';

export const Button = classed.button('px-4 py-2', {
    variants: {
        size: {
            normal: 'text-sm',
            large: 'text-base'
        },
        color: {
            primary: 'bg-primary text-gray-300',
            secondary: 'bg-gray-300 text-gray-700'
        }
    }
}); */
