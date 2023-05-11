import Image from 'next/image';
import { cn } from 'lib/utils';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export function Container({ children, className }: ContainerProps) {
	return (
		<main
			className={cn(
				'flex flex-col justify-center items-start w-screen lg:min-h-screen z-10 relative',
				className
			)}
		>
			{children}
		</main>
	);
}

export function Section({ children, className }: ContainerProps) {
	return (
		<section
			className={cn(
				'flex flex-col justify-center items-start w-full px-wrapper py-section gap-y-20',
				className
			)}
		>
			{children}
		</section>
	);
}

interface PageHeader {
	children?: React.ReactNode;
	className?: string;
}

export function PageHeader({ children, className }: PageHeader) {
	return (
		<header
			className={cn(
				'relative z-10 flex h-screen lg:h-[85vh] w-full flex-col items-center justify-center bg-gray-300 dark:bg-dark-gray-400 pt-header',
				className
			)}
		>
			<Image
				className="pointer-events-none absolute z-[6] object-cover flex dark:hidden opacity-50"
				fill
				src={`/images/pattern.png`}
				alt="Pattern"
				priority
			/>
			<Image
				className="pointer-events-none absolute z-[6] object-cover hidden dark:flex"
				fill
				src={`/images/pattern_dark.png`}
				alt="Dark pattern"
				priority
			/>
			{children}
		</header>
	);
}
