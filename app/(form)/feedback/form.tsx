'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios';

import clsx from 'clsx';

import {
	Form,
	FormControl,
	FormField,
	FormInput,
	FormLabel,
	FormMessage,
	FormSubmit,
	FormTextarea
} from 'components/ui/Form';

export default function FeedbackForm() {
	const [status, setStatus] = useState<'loading' | 'error' | undefined>(undefined);
	const router = useRouter();

	async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		// prevent default form submission
		event.preventDefault();

		setStatus('loading');
		const data = Object.fromEntries(new FormData(event.currentTarget));

		// Submit form data and catch errors in the response
		try {
			const response = await axios.post('/api/feedback', data);
			if (response.status === 200) {
				router.replace(`/feedback/${response.data.ticketId}`);
			} else {
				setStatus('error');
			}
		} catch (error) {
			console.error(error);
			setStatus('error');
		}
	}

	return (
		<Form
			className="flex flex-col items-center justify-start w-full gap-y-9"
			onSubmit={onSubmit}
		>
			<div className="flex flex-col items-start justify-start gap-y-4">
				<h6 className="font-semibold text-white text-base text-left">
					Muito obrigado por se interessar em entrar em contato!
				</h6>
				<p className="font-normal text-white text-left text-base leading-5">
					Digite seu feedback abaixo sobre como podemos melhorar nossos serviços e
					produtos! <br /> <br /> Não precisa se acanhar, pode falar sobre tudo que lhe
					incomoda na plataforma para que possamos melhorar ainda mais!
				</p>
			</div>
			<FormField className="grid mb-[10px]" name="email">
				<div className="flex items-baseline justify-between">
					<FormLabel className="text-[15px] font-medium leading-[35px] text-white">
						Seu endereço de e-mail
					</FormLabel>
					<FormMessage match="valueMissing">
						Por favor, insira seu e-mail para que possamos entrar em contato
					</FormMessage>
					<FormMessage match="typeMismatch">
						Por favor, forneça um e-mail válido
					</FormMessage>
				</div>
				<FormControl asChild>
					<FormInput
						type="email"
						placeholder="[insira seu e-mail aqui]"
						maxLength={100}
						required
					/>
				</FormControl>
				<p className="text-left text-text-100 text-sm pt-2">
					Pedimos seu e-mail somente para tirar dúvidas sobre o que for enviado e assim
					ter mais detalhes sobre o feedback fornecido.
				</p>
			</FormField>
			<FormField className="grid mb-[10px]" name="message">
				<FormControl asChild>
					<FormTextarea
						placeholder="[descreva como podemos lhe ajudar aqui]"
						maxLength={500}
						className="min-h-[150px]"
						required
					/>
				</FormControl>
				<FormMessage className="pt-6" match="valueMissing">
					Por favor, insira algo no campo de feedback para que possamos melhorar nossos
					serviços
				</FormMessage>
			</FormField>
			<FormSubmit
				className={clsx('relative', {
					'cursor-not-allowed': status === 'loading'
				})}
				disabled={status === 'loading'}
			>
				Enviar
				{status === 'error' && (
					<p className="text-red font-normal text-center absolute top-12 w-full left-1/2 -translate-x-1/2">
						Ocorreu um erro ao enviar seu feedback. Por favor, tente novamente mais
						tarde.
					</p>
				)}
			</FormSubmit>
		</Form>
	);
}
