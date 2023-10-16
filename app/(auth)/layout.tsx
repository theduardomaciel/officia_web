import { Logo } from 'components/Icons';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen p-9 bg-[radial-gradient(50%_50%_at_50%_50%,_#E5E7EB_0%,_#D1D5DB_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,_#302F33_0%,_#151311_100%)]">
			<header className="flex items-center justify-center mb-9">
				<p className="font-title text-3xl text-[var(--neutral)]">officia</p>
			</header>
			{children}
		</main>
	);
}
