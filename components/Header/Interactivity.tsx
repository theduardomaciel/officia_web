'use client';

import { useEffect } from 'react';

export interface HeaderInteractivityProps {
    children?: React.ReactNode;
    scrollDistance?: number;
    putTogether?: boolean;
}

export const HeaderInteractive = ({ children }: HeaderInteractivityProps) => {
    return (
        <div
            id="headerInteractive"
            className="opacity-0 data-[interactive]:opacity-100 transition"
        >
            {children}
        </div>
    );
};

export default function HeaderInteractivity({
    children,
    putTogether,
    scrollDistance
}: HeaderInteractivityProps) {
    /* const HEADER = [``, 'before:opacity-100'];
    const REMOVE_HEADER = ['before:opacity-0'];
    .split(' ')
        .map((c) => c.trim())
        .filter((c) => c.length > 0); */

    const handleScroll = (): void => {
        const header = document.getElementById('header') as HTMLElement;
        const headerInteractive = document.getElementById(
            'headerInteractive'
        ) as HTMLElement;
        if (!header) return;

        if (window.scrollY === 0) {
            header.removeAttribute('data-scroll');

            if (headerInteractive)
                headerInteractive.removeAttribute('data-interactive');
        } else {
            header.setAttribute('data-scroll', 'true');

            if (headerInteractive) {
                if (
                    (scrollDistance && window.scrollY > scrollDistance) ||
                    !scrollDistance
                ) {
                    headerInteractive.setAttribute('data-interactive', 'true');
                } else {
                    headerInteractive.removeAttribute('data-interactive');
                }
            }
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return putTogether ? (
        <HeaderInteractive>{children}</HeaderInteractive>
    ) : (
        <></>
    );
}
