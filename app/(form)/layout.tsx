import Image from 'next/image';
import { Logo } from 'components/Icons';

export default function FormLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<main className="flex flex-col lg:flex-row items-center justify-start lg:justify-between min-h-screen z-10 relative">
				<header className="relative z-10 flex w-full flex-col items-center justify-center h-[50vh] bg-gray-300 dark:bg-dark-gray-400 lg:h-screen lg:w-[30vw] lg:sticky lg:top-0 lg:left-0 lg:self-stretch">
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
					<div className="flex h-full flex-col items-center justify-center gap-y-8 px-wrapper">
						<div className="flex flex-col items-center justify-center h-1/2 gap-y-12 top-1/4 left-1/2 z-10">
							<a href="/">
								<Logo width={75} height={60} className="z-10 cursor-pointer" />
							</a>
						</div>
					</div>
				</header>
				{children}
			</main>
		</>
	);
}
