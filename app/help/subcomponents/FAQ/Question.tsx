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
            className={clsx(
                'flex flex-col items-center justify-start w-full bg-gray-400 rounded-2xl p-6 lg:px-12 lg:py-6 cursor-pointer hover:bg-gray-300 transition',
                {
                    'bg-gray-300 border border-gray-100': expanded
                }
            )}
            onClick={toggleExpanded}
        >
            <div className="flex flex-row items-center justify-between w-full h-fit gap-x-4">
                <div className="flex flex-row items-center justify-start gap-x-6">
                    <FileQuestion
                        width={24}
                        height={24}
                        className="min-w-[24px] hidden lg:block"
                        color={'var(--text-100)'}
                    />
                    <p className="text-text-100 font-semibold text-lg">
                        {question}
                    </p>
                </div>
                <ChevronDown
                    width={18}
                    height={18}
                    color="var(--text-200)"
                    className="min-w-[18px]"
                />
            </div>
            <div
                className={clsx(
                    'w-full flex items-end justify-center overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out pt-0',
                    {
                        'max-h-80 opacity-100': expanded,
                        'max-h-0 opacity-0': !expanded
                    }
                )}
            >
                <p className={'text-text-200 text-left text-base w-full'}>
                    {answer}
                </p>
            </div>
        </li>
    );
}
