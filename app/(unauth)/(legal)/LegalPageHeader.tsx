import React from 'react';
import { PageHeader } from 'components/Layout';

interface PageHeader {
	title: string;
	subtitle?: Array<string | React.ReactNode>;
	lastUpdate: string;
}

export default function LegalPageHeader({ title, subtitle, lastUpdate }: PageHeader) {
	return (
		<PageHeader className="lg:h-[85vh] items-start justify-center">
			<div className="flex flex-col items-start justify-center gap-y-8 px-wrapper h-full lg:max-w-[70%]">
				<h1 className="font-title text-5xl lg:text-8xl text-center w-full lg:w-fit lg:text-left text-[var(--neutral)] z-10">
					{title}
				</h1>
				{subtitle && (
					<h2 className="font-semibold text-base text-center lg:text-left lg:text-lg text-[var(--neutral)] z-10">
						{subtitle.map((item, index) => (
							<React.Fragment key={index}>{item}</React.Fragment>
						))}
					</h2>
				)}
			</div>
			<div className="w-full flex flex-row items-center justify-center py-4 bg-gray-200 dark:bg-dark-gray-400 z-10">
				<p className="font-medium text-sm text-[var(--neutral)]">
					Última alteração em: {lastUpdate}
				</p>
			</div>
		</PageHeader>
	);
}
