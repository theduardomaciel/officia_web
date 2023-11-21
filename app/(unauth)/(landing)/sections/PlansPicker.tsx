'use client';

import { useState } from 'react';
import { DiscountTag, PlanPreview } from './PlansSection';
import { cn } from 'lib/utils';

export default function PlansPicker() {
	const [currentPlan, setCurrentPlan] = useState<'monthly' | 'yearly'>('monthly');

	return (
		<>
			<button
				className="flex flex-row items-center justify-center w-full lg:w-fit self-center bg-gray-300 dark:bg-dark-gray-500 border border-gray-400 dark:border-dark-gray-200 rounded-2xl py-4 z-10 cursor-pointer sticky top-[calc(var(--header)+1rem)] left-0 shadow-2xl"
				onClick={() =>
					setCurrentPlan((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'))
				}
			>
				{/* Seletor */}
				<div
					className={cn(
						'h-full rounded-2xl w-1/2 bg-gray-200 z-20 absolute top-0 left-0 dark:bg-dark-gray-400 pointer-events-none cursor-default transition-transform duration-300 ease-in-out',
						{
							'translate-x-full': currentPlan === 'yearly'
						}
					)}
				/>
				{/* Monthly */}
				<div
					className={cn(
						'flex flex-row items-center justify-center h-full w-1/2 z-30 px-3 lg:px-24 transition-opacity duration-300 ease-in-out',
						{
							'opacity-50': currentPlan === 'yearly'
						}
					)}
				>
					<p className={cn('font-medium text-sm lg:text-base text-[var(--neutral)]')}>
						Mensalmente
					</p>
				</div>
				{/* Yearly */}
				<div
					className={cn(
						'flex flex-row items-center justify-center h-full w-1/2 gap-x-2 lg:gap-x-4 px-3 z-30 lg:px-24 transition-opacity duration-300 ease-in-out',
						{
							'opacity-50': currentPlan === 'monthly'
						}
					)}
				>
					<p className="font-medium text-sm text-[var(--neutral)] lg:text-base">
						Anualmente
					</p>
					<DiscountTag discount={28} textClassName={'hidden sm:flex'} />
				</div>
			</button>
			<div className="flex flex-col items-center lg:items-start w-full justify-center gap-y-9 lg:justify-between lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gri">
				<PlanPreview
					title="Plano Básico"
					description={
						<>
							Ideal para freelancers que estão começando agora e querem testar o{' '}
							<span className="font-title">officia</span>.
						</>
					}
					features={[
						'Anúncios',
						'Agendamento de serviços, com inserção de materias e seleção de cliente',
						'Geração de documentos com marca d’água de serviços agendados'
					]}
					addendum="De graça. Pra sempre."
					button={{
						text: 'criar uma conta',
						href: '/register'
					}}
					price={0}
				/>
				<PlanPreview
					title="Plano Plus"
					titleChildren={
						<DiscountTag
							discount={28}
							textClassName="flex sm:hidden"
							className={cn('flex opacity-100 transition', {
								'opacity-0': currentPlan === 'monthly'
							})}
						/>
					}
					description={
						<>
							Tudo que um negócio independente em crescimento precisa para crescer
							aproveitando toda a capacidade do{' '}
							<span className="font-title">officia</span>.
						</>
					}
					features={[
						'Todas as funcionalidades do Plano Básico',
						'Remoção total de anúncios',
						'Sincronização entre 2 dispositivos simultâneos',
						'Upload de imagens em orçamentos',
						'Pesquisa avançada em serviços, clientes, materiais e qualquer outro tipo de elemento',
						'Gráficos detalhados e resumos financeiros',
						'Categorização de serviços e produtos por padrões personalizados',
						'Catálogo de serviços e produtos que podem ser adicionados novamente a qualquer momento'
					]}
					addendum={
						currentPlan === 'yearly' ? (
							<>
								<span className="line-through">R$ 56 / mês</span>
							</>
						) : undefined
					}
					button={{
						text: 'assinar',
						href: '/register'
					}}
					price={currentPlan === 'yearly' ? 40 : 56}
				/>
				<PlanPreview
					title="Insider"
					description={
						<>
							Em breve disponível para interessados em apoiar o desenvolvimento do{' '}
							<span className="font-title">officia</span> de perto.
						</>
					}
					features={'Tenha acesso a funções exclusivas e suporte em tempo real.'}
					button={{
						text: 'em breve',
						disabled: true
					}}
				/>
			</div>
		</>
	);
}
