import { Inter, Abril_Fatface } from 'next/font/google';

import './globals.css';
import { Providers } from './providers';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin-ext'],
	display: 'swap'
});

const title = Abril_Fatface({
	variable: '--font-title',
	subsets: ['latin-ext'],
	weight: '400',
	display: 'swap'
});

export const metadata = {
	title: 'officia',
	description:
		'officia é uma ferramenta para ajudar os trabalhadores autônomos a gerenciar seus negócios próprios. '
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} ${title.variable}`} suppressHydrationWarning>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
