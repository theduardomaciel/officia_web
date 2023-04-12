import React from 'react';
import Image from 'next/image';

interface PageHeader {
    title: string;
    subtitle?: Array<string | React.ReactNode>;
    lastUpdate: string;
}

export function PageHeader({ title, subtitle, lastUpdate }: PageHeader) {
    return (
        <header className="flex flex-col justify-center items-start pt-header h-screen lg:h-[85vh] z-10 w-full bg-gray-400 relative">
            <div className="flex flex-col items-start justify-center gap-y-8 px-wrapper h-full lg:max-w-[70%]">
                <Image
                    className="pointer-events-none z-[6] object-cover absolute"
                    fill
                    src={`/images/pattern.png`}
                    alt="Pattern"
                    priority
                />
                <h1 className="font-title text-5xl lg:text-8xl text-center w-full lg:w-fit lg:text-left text-white z-10">
                    {title}
                </h1>
                {subtitle && (
                    <h2 className="font-semibold text-base text-center lg:text-left lg:text-lg text-white z-10">
                        {...subtitle}
                    </h2>
                )}
            </div>
            <div className="w-full flex flex-row items-center justify-center py-4 bg-gray-400 z-10">
                <p className="font-medium text-sm text-white">
                    Última alteração em: {lastUpdate}
                </p>
            </div>
        </header>
    );
}

export function HeaderTitle({ title }: { title: string }) {
    return <p className="font-semibold text-sm lg:flex hidden">{title}</p>;
}

export function HeaderButton({
    title,
    href
}: {
    title?: string;
    href: string;
}) {
    return (
        <a
            className="flex items-center justify-center px-4 py-2 bg-primary rounded-3xl text-gray-300 font-semibold text-sm gap-x-3 hover:bg-gray-50 transition-colors"
            href={`http://localhost:3000/files/${href}`}
            target="_blank"
        >
            {title || 'Baixar PDF'}
        </a>
    );
}
