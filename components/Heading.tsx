import clsx from 'clsx';
import { cn } from 'lib/utils';
import React from 'react';

interface HeadingProps {
	title?: string | React.ReactNode;
	children?: React.ReactNode;
	className?: string;
	containerClassName?: string;
	position?: 'left' | 'right';
	descriptionClassName?: string;
}

export default function Heading({
	title,
	children,
	containerClassName,
	className,
	position = 'left',
	descriptionClassName
}: HeadingProps) {
	return (
		<div
			className={cn(
				'flex flex-col items-start justify-start gap-y-6 w-full',
				containerClassName
			)}
		>
			<div className={cn('relative flex items-start justify-start w-full', className)}>
				<h2
					className={cn(
						'font-black text-4xl uppercase tracking-wider text-[var(--neutral)] w-full',
						className,
						{
							'text-end items-end justify-end': position === 'right'
						}
					)}
				>
					{title}
				</h2>
				<h2
					className={cn(
						'font-black text-4xl uppercase text-transparent absolute opacity-60 dark:opacity-20 w-full tracking-widest top-2 left-6',
						className,
						{
							'text-end items-end justify-end': position === 'right'
						}
					)}
					style={{
						WebkitTextStrokeWidth: '0.2px',
						WebkitTextStrokeColor: 'var(--neutral)'
					}}
				>
					{title}
				</h2>
			</div>
			{children && (
				<p
					className={cn(
						'font-medium text-lg text-[var(--neutral)] w-full whitespace-pre-line',
						{
							'text-end items-end justify-end': position === 'right'
						},
						descriptionClassName
					)}
				>
					{children}
				</p>
			)}
		</div>
	);
}

interface MainHeadingProps {
	index: number;
	title?: string;
	containerClassName?: string;
	children?: React.ReactNode;
	className?: string;
	indexClassName?: string;
	descriptionClassName?: string;
	preset?: 'default' | 'light';
	position?: 'left' | 'right';
}

export function MainHeading({
	index,
	indexClassName,
	containerClassName,
	descriptionClassName,
	title,
	preset,
	children,
	className,
	position = 'left'
}: MainHeadingProps) {
	return (
		<div
			className={cn(
				'flex flex-col items-start justify-start gap-y-6 w-full',
				containerClassName
			)}
		>
			<div
				className={cn('relative flex flex-col items-start justify-start w-full', className)}
			>
				<h3
					className={cn(
						'pl-12 font-title text-6xl lg:text-6xl text-black dark:text-white pb-4 lg:pb-0 w-full',
						indexClassName,
						{
							'pl-0 pr-12 text-end items-end justify-end': position === 'right'
						}
					)}
					style={
						preset === 'light'
							? {
									WebkitTextStrokeWidth: '0.4px',
									WebkitTextStrokeColor: 'var(--neutral)',
									color: 'transparent'
							  }
							: {}
					}
				>
					{index < 10 ? `0${index}` : index}
				</h3>
				<h2
					className={cn(
						'font-title text-left text-6xl lg:text-7xl text-black dark:text-white w-full break-words',
						className,
						{
							'text-end items-end justify-end': position === 'right'
						}
					)}
				>
					{title}
				</h2>
			</div>
			{children && (
				<p
					className={cn(
						'font-semibold text-lg lg:text-xl text-[var(--neutral)] w-full whitespace-pre-line',
						{
							'text-end items-end justify-end': position === 'right'
						},
						descriptionClassName
					)}
				>
					{children}
				</p>
			)}
		</div>
	);
}
