'use client';

import * as React from 'react';
import * as FormPrimitive from '@radix-ui/react-form';

import { cn } from 'lib/utils';

// Components
import { Spinner } from 'components/Icons';

const Form = FormPrimitive.Root;

const FormField = React.forwardRef<
	React.ElementRef<typeof FormPrimitive.Field>,
	React.ComponentPropsWithoutRef<typeof FormPrimitive.Field>
>(({ className, children, ...props }, ref) => (
	<FormPrimitive.Field ref={ref} className={cn('w-full grid mb-3.5', className)} {...props}>
		{children}
	</FormPrimitive.Field>
));
FormField.displayName = FormPrimitive.Field.displayName;

const FormLabel = React.forwardRef<
	React.ElementRef<typeof FormPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof FormPrimitive.Label>
>(({ className, ...props }, ref) => (
	<FormPrimitive.Label
		ref={ref}
		className={cn('text-[var(--neutral)] text-base text-left', className)}
		{...props}
	/>
));
FormLabel.displayName = FormPrimitive.Label.displayName;

const FormControl = React.forwardRef<
	React.ElementRef<typeof FormPrimitive.Control>,
	React.ComponentPropsWithoutRef<typeof FormPrimitive.Control>
>(({ children, ...props }, ref) => (
	<FormPrimitive.Control asChild ref={ref} {...props}>
		{children}
	</FormPrimitive.Control>
));
FormControl.displayName = FormPrimitive.Control.displayName;

export const inputClass =
	'z-10 flex w-full flex-row items-center rounded-md border border-gray-400 dark:border-dark-gray-100 bg-gray-300 dark:bg-dark-gray-300 py-3 px-4 text-sm font-normal text-[var(--neutral)] placeholder:text-text-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--neutral)] disabled:cursor-not-allowed';

const FormInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
	({ className, ...rest }, ref) => (
		<input className={cn(inputClass, className)} ref={ref} {...rest} />
	)
);
FormInput.displayName = 'FormInput';

const FormTextarea = React.forwardRef<
	HTMLTextAreaElement,
	React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...rest }, ref) => (
	<textarea
		className={cn(inputClass, 'min-h-[120px] h-fit resize-none', className)}
		ref={ref}
		{...rest}
	/>
));
FormTextarea.displayName = 'FormTextarea';

const FormMessage = React.forwardRef<
	React.ElementRef<typeof FormPrimitive.Message>,
	React.ComponentPropsWithoutRef<typeof FormPrimitive.Message>
>(({ children, className, ...props }, ref) => (
	<FormPrimitive.Message
		ref={ref}
		className={cn('text-sm text-red opacity-90', className)}
		{...props}
	>
		{children}
	</FormPrimitive.Message>
));
FormMessage.displayName = FormPrimitive.Message.displayName;

interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof FormPrimitive.Submit> {
	isLoading?: boolean;
}

const FormSubmit = React.forwardRef<
	React.ElementRef<typeof FormPrimitive.Submit>,
	SelectTriggerProps
>(({ children, className, isLoading, disabled, ...props }, ref) => (
	<FormPrimitive.Submit ref={ref} asChild>
		<button
			className={cn(
				'flex flex-row items-center justify-center w-full px-5 py-2.5 bg-text-100 dark:bg-slate-50 text-slate-50 dark:text-dark-gray-300 font-semibold text-sm rounded-[10px] transition-colors enabled:hover:bg-text-200 dark:enabled:hover:bg-slate-300 disabled:cursor-not-allowed',
				className
			)}
			disabled={isLoading || disabled}
			{...props}
		>
			{isLoading ? <Spinner width={18} height={18} /> : children ?? 'Enviar'}
		</button>
	</FormPrimitive.Submit>
));
FormSubmit.displayName = FormPrimitive.Submit.displayName;

export {
	Form,
	FormField,
	FormLabel,
	FormControl,
	FormInput,
	FormTextarea,
	FormMessage,
	FormSubmit
};
