'use client';

import * as React from 'react';
import * as FormPrimitive from '@radix-ui/react-form';

import { cn } from 'lib/utils';

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
		className={cn('text-white text-base text-left', className)}
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

const FormInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
	({ className, ...rest }, ref) => (
		<input
			className={cn(
				'z-10 flex w-full flex-row items-center rounded-md border border-gray-100 bg-gray-300 py-3 px-4 text-sm font-normal text-white placeholder:text-text-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--neutral)]',
				className
			)}
			ref={ref}
			{...rest}
		/>
	)
);
FormInput.displayName = 'FormInput';

const FormTextarea = React.forwardRef<
	HTMLTextAreaElement,
	React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...rest }, ref) => (
	<textarea
		className={cn(
			'z-10 flex w-full flex-row items-center rounded-md border border-gray-100 bg-gray-300 py-3 px-4 text-sm font-normal text-white placeholder:text-text-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--neutral)] min-h-[120px] h-fit resize-none',
			className
		)}
		ref={ref}
		{...rest}
	/>
));
FormTextarea.displayName = 'FormTextarea';

const FormMessage = React.forwardRef<
	React.ElementRef<typeof FormPrimitive.Message>,
	React.ComponentPropsWithoutRef<typeof FormPrimitive.Message>
>(({ children, className, ...props }, ref) => (
	<FormPrimitive.Message ref={ref} className="text-sm text-text-200 opacity-[0.8]" {...props}>
		{children}
	</FormPrimitive.Message>
));
FormMessage.displayName = FormPrimitive.Message.displayName;

const FormSubmit = React.forwardRef<
	React.ElementRef<typeof FormPrimitive.Submit>,
	React.ComponentPropsWithoutRef<typeof FormPrimitive.Submit>
>(({ children, className, ...props }, ref) => (
	<FormPrimitive.Submit ref={ref} asChild {...props}>
		<button
			className={cn(
				'flex flex-row items-center justify-center w-full px-5 py-2.5 text-gray-300 font-semibold text-sm rounded-[10px] bg-white hover:bg-slate-200 transition-colors',
				className
			)}
		>
			{children ?? 'Enviar'}
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
