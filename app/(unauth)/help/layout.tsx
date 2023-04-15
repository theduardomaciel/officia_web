import { HelpCircle } from 'lucide-react';

// Components
import NavigationAnchor from 'components/NavigationAnchor';

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<div className="flex items-center px-wrapper pb-section">
				<div className="flex w-full flex-col items-center justify-between gap-y-6 rounded-[15px] bg-gray-300 dark:bg-dark-gray-400 p-6 lg:flex-row lg:px-12 lg:py-6">
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
					<NavigationAnchor href="/contact" className="w-full px-6 lg:w-fit">
						Fale Conosco
					</NavigationAnchor>
				</div>
			</div>
		</>
	);
}
