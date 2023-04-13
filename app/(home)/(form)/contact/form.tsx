'use client';
import { useState } from 'react';

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
import { SelectWithLabel } from 'components/ui/Select';

const PROBLEMS_BASED_ON_QUESTION_TYPE = {
	general: [
		{ value: 'business', label: 'Gerenciamento de negócio' },
		{ value: 'documents', label: 'Geração de documentos' },
		{ value: 'clients', label: 'Adição e gerenciamento de clientes' },
		{ value: 'products', label: 'Adição e gerenciamento de produtos' },
		{ value: 'invoices', label: 'Adição e gerenciamento de faturas' },
		{ value: 'payments', label: 'Adição e gerenciamento de pagamentos' },
		{ value: 'reports', label: 'Relatórios' },
		{ value: 'others', label: 'Outros' }
	],
	subscription: [
		{ value: 'payment', label: 'Pagamento Recorrente' },
		{ value: 'cancel', label: 'Cancelar Assinatura' },
		{ value: 'change', label: 'Alterar Assinatura' }
	],
	account: [
		{ value: 'login', label: 'Login' },
		{ value: 'password', label: 'Esqueci minha senha' },
		{ value: 'change', label: 'Alterar dados da conta' }
	]
};

export default function ContactForm() {
	const [questionType, setQuestionType] = useState('general');

	return (
		<Form className="flex flex-col items-center justify-start w-full gap-y-9">
			<SelectWithLabel
				label="Com o que podemos lhe ajudar?"
				defaultValue="general"
				options={[
					{ value: 'general', label: 'Ajuda e Suporte' },
					{ value: 'subscription', label: 'Assinatura' },
					{ value: 'account', label: 'Minha Conta' }
				]}
				onValueChange={(value) => setQuestionType(value)}
				required
			/>
			<FormField className="grid mb-[10px]" name="email">
				<div className="flex items-baseline justify-between">
					<FormLabel className="text-[15px] font-medium leading-[35px] text-white">
						Seu endereço de e-mail
					</FormLabel>
					<FormMessage match="valueMissing">Por favor, insira seu e-mail</FormMessage>
					<FormMessage match="typeMismatch">
						Por favor, forneça um e-mail válido
					</FormMessage>
				</div>
				<FormControl asChild>
					<FormInput type="email" placeholder="Seu e-mail" required />
				</FormControl>
			</FormField>
			<SelectWithLabel
				label="Com o que sua pergunta mais se identifica?"
				options={
					PROBLEMS_BASED_ON_QUESTION_TYPE[
						questionType as keyof typeof PROBLEMS_BASED_ON_QUESTION_TYPE
					]
				}
				required
			/>
			<FormField className="grid mb-[10px]" name="email">
				<div className="flex items-baseline justify-between">
					<FormLabel className="text-[15px] font-medium leading-[35px] text-white">
						Assunto
					</FormLabel>
				</div>
				<FormControl asChild>
					<FormInput type="text" placeholder="[insira o assunto aqui]" />
				</FormControl>
			</FormField>
			<FormField className="grid mb-[10px]" name="email">
				<div className="flex items-baseline justify-between">
					<FormLabel className="text-[15px] font-medium leading-[35px] text-white">
						Descrição
					</FormLabel>
					<FormMessage match="valueMissing">
						Por favor, descreva como podemos lhe ajudar
					</FormMessage>
				</div>
				<FormControl asChild>
					<FormTextarea
						placeholder="[descreva como podemos lhe ajudar aqui]"
						maxLength={500}
						required
					/>
				</FormControl>
			</FormField>
			<FormSubmit />
		</Form>
	);
}
