'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUpIcon } from 'lucide-react';

import { cn } from 'lib/utils';

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

interface SelectTriggerProps
	extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
	icon?: React.ReactNode;
}

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	SelectTriggerProps
>(({ className, children, icon, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={cn(
			'flex h-10 items-center justify-between rounded-md border border-slate-300 bg-transparent px-4 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-100 dark:text-text-100 dark:focus:bg-gray-200 dark:focus:ring-offset-gray-400 gap-x-select hover:bg-gray-200 transition-colors',
			className
		)}
		{...props}
	>
		{icon && icon}
		{children}
		<ChevronDown className="h-4 w-4" />
	</SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={cn(
				'animate-in fade-in-80 relative z-50 overflow-hidden rounded-md border border-slate-100 bg-white text-slate-700 shadow-md dark:border-gray-100 dark:bg-gray-400 dark:text-text-100',
				className
			)}
			{...props}
		>
			<SelectPrimitive.Viewport /* className="p-1" */>{children}</SelectPrimitive.Viewport>
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={cn(
			'py-2.5 px-4 text-[13px] font-medium text-slate-900 dark:text-text-200',
			className
		)}
		{...props}
	/>
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const scrollClasses = cn(
	'flex items-center justify-center h-[25px] bg-gray-300 text-text-200 cursor-default'
);

const SelectScrollUp = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.SelectScrollUpButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton ref={ref} className={scrollClasses} {...props}>
		<ChevronUpIcon size={14} />
	</SelectPrimitive.ScrollUpButton>
));
SelectScrollUp.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDown = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.SelectScrollDownButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton ref={ref} className={scrollClasses} {...props}>
		<ChevronDown size={14} />
	</SelectPrimitive.ScrollDownButton>
));
SelectScrollDown.displayName = SelectPrimitive.ScrollDownButton.displayName;

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
	icon?: React.ReactNode;
}

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
	({ className, children, icon, ...props }, ref) => (
		<SelectPrimitive.Item
			ref={ref}
			className={cn(
				'relative flex cursor-default select-none items-center py-2.5 px-4 gap-x-select text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-200',
				className
			)}
			{...props}
		>
			{icon && icon}
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
			<span className="absolute right-4 flex h-3.5 w-3.5 items-center justify-center">
				<SelectPrimitive.ItemIndicator>
					<Check className="h-4 w-4" />
				</SelectPrimitive.ItemIndicator>
			</span>
		</SelectPrimitive.Item>
	)
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cn('-mx-1 my-1 h-px bg-slate-100 dark:bg-gray-100 opacity-50', className)}
		{...props}
	/>
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

interface SelectWithLabelProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
	label: string;
	options: { label: string; value: string }[];
}

const SelectWithLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	SelectWithLabelProps
>(({ children, label, options, ...rest }, ref) => (
	<div className="flex flex-col w-full gap-y-3.5">
		<label className="text-white text-base text-left">{label}</label>
		<Select {...rest}>
			<SelectTrigger className="w-full py-3 h-fit bg-gray-300 hover:bg-gray-200">
				<SelectValue placeholder="-" />
			</SelectTrigger>
			<SelectContent
				className="w-[var(--radix-select-trigger-width)]"
				position="popper"
				sideOffset={5}
			>
				{options.map((option) => (
					<SelectItem key={option.value} value={option.value}>
						{option.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	</div>
));
SelectWithLabel.displayName = 'SelectWithLabel';

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	SelectScrollUp,
	SelectScrollDown,
	SelectWithLabel
};
