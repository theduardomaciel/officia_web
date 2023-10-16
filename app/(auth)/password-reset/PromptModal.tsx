import Image from 'next/image';
import React from 'react';

interface PromptModalProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	children: React.ReactNode;
}

export default function PromptModal({ icon, title, description, children }: PromptModalProps) {
	return (
		<div className="flex flex-col items-center justify-start w-full lg:w-[50vw] xl:w-[37.5vw] px-9 py-11 lg:p-11 gap-8 bg-gray-300 dark:bg-dark-gray-400 rounded-3xl relative z-10 overflow-y-scroll border border-gray-200 dark:border-dark-gray-200">
			<Image
				src={`/images/mini_pattern_dark.png`}
				alt="Pattern"
				width={500}
				height={446.5}
				className="absolute top-0 left-0 object-cover rounded-3xl w-full min-h-[50%] pointer-events-none select-none -z-10"
			/>
			<div className="flex w-full items-center justify-center">{icon}</div>
			<div className="flex flex-col items-start justify-start gap-y-2 w-full">
				<h1 className="font-title text-3xl leading-tight text-[var(--neutral)] text-left w-full">
					{title}
				</h1>
				<p className="text-text-100 font-normal text-base text-left w-full whitespace-pre-line leading-6">
					{description}
				</p>
			</div>
			{children}
		</div>
	);
}
