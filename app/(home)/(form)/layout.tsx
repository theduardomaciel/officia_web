import Image from 'next/image';

import { Logo } from 'components/Icons';

// Components
import Header from 'components/Header';

export default function FormLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className="flex flex-col lg:flex-row items-center justify-between min-h-screen z-10 relative">
				<header className="relative z-10 flex w-full lg:w-[30vw] flex-col items-center justify-center h-[50vh] lg:h-auto bg-gray-400 lg:top-0 lg:left-0 lg:self-stretch">
					<div className="flex h-full flex-col items-center justify-center gap-y-8 px-wrapper">
						<Image
							className="pointer-events-none absolute z-[6] object-cover"
							fill
							src={`/images/pattern.png`}
							alt="Pattern"
							priority
						/>
						<div className="flex flex-col items-center justify-center h-1/2 gap-y-12 top-1/4 left-1/2 lg:sticky z-10">
							<Logo width={75} height={60} className="z-10" />
						</div>
					</div>
				</header>
				{children}
			</main>
		</>
	);
}
