'use client';
import { useState } from 'react';

import { ChevronDown, FileQuestion } from 'lucide-react';
import clsx from 'clsx';

interface QuestionProps {
	question: Array<string | React.ReactNode>;
	answer: string;
}

export default function Question({ question, answer }: QuestionProps) {
	const [expanded, setExpanded] = useState(false);
	const toggleExpanded = () => setExpanded((current) => !current);

	return (
		<li
			className={clsx('transition hover:bg-gray-300 bg-gray-400 rounded-[15px]', {
				'bg-gray-300 border border-gray-100': expanded
			})}
			onClick={toggleExpanded}
		>
			{/* Header */}
			<div className="cursor-pointer transition flex flex-row px-5 items-center justify-between w-full h-16">
				<div className="flex flex-row items-center justify-start gap-x-6">
					<FileQuestion
						width={18}
						height={18}
						className="min-w-[24px] hidden lg:block"
						color={'var(--text-100)'}
					/>
					<p className="text-text-100 font-semibold text-base">{question}</p>
				</div>
				<ChevronDown
					width={18}
					height={18}
					color="var(--text-200)"
					className={clsx('min-w-[18px] transition-transform', {
						'transform rotate-180': expanded
					})}
				/>
			</div>
			{/* Content */}
			<div
				className={clsx(
					'px-5 pt-0 overflow-hidden transition-[max-height,opacity] max-h-0',
					{
						'max-h-80 opacity-100': expanded,
						'max-h-0 opacity-0': !expanded
					}
				)}
			>
				<p className={'text-text-200 text-left text-base w-full pb-5'}>{answer}</p>
			</div>
		</li>
	);
}
