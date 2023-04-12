import Image from 'next/image';
import Link from 'next/link';

interface PageHeader {
    title: string;
}

import { Logo } from 'components/Icons';
import { HelpCircle, Search } from 'lucide-react';
import { cn } from 'lib/utils';

export function PageHeader({ title }: PageHeader) {
    return (
        <header className="flex flex-col justify-center items-center pt-header h-screen lg:h-[85vh] z-10 w-full bg-gray-400 relative">
            <div className="flex flex-col items-center justify-center gap-y-8 px-wrapper h-full">
                <Image
                    className="pointer-events-none z-[6] object-cover absolute"
                    fill
                    src={`/images/pattern.png`}
                    alt="Pattern"
                    priority
                />
                <Logo width={75} height={60} className="z-10" />
                <h1 className="font-title text-4xl lg:text-5xl text-center w-full lg:w-fit text-white z-10">
                    {title}
                </h1>
                <SearchBar placeholder="Descreva o problema ou dúvida" />
            </div>
        </header>
    );
}

interface SearchBarProps {
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ placeholder, onChange }: SearchBarProps) {
    return (
        <div className="flex relative w-full">
            <input
                type="text"
                placeholder={placeholder ?? 'Pesquisar'}
                onChange={onChange}
                className="flex w-full flex-row items-center py-4 bg-gray-200 font-normal text-sm rounded-md text-text-100 placeholder:text-text-100 pl-16 pr-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent z-10"
            />
            <Search
                width={16}
                height={16}
                color={'var(--text-100)'}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20"
            />
        </div>
    );
}

export function GoToContactButton({ className }: { className?: string }) {
    return (
        <Link
            className={cn(
                'flex items-center justify-center px-4 py-2 bg-primary rounded-3xl text-gray-300 font-semibold text-sm gap-x-3 hover:bg-gray-50 transition-colors',
                className
            )}
            href={`/help/contact`}
        >
            Fale Conosco
        </Link>
    );
}

export function ContactDisclaimer() {
    return (
        <div className="flex items-center px-wrapper pb-section">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-gray-400 rounded-[15px] p-6 lg:px-12 lg:py-6 gap-y-6">
                <div className="flex flex-row items-center justify-start gap-x-6">
                    <HelpCircle
                        width={24}
                        height={24}
                        className="min-w-[24px]"
                        color={'var(--text-100)'}
                    />
                    <p className="font-medium text-base text-text-100">
                        Ainda ficou com dúvida em algum assunto?
                    </p>
                </div>
                <GoToContactButton className="w-full lg:w-fit px-6" />
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
