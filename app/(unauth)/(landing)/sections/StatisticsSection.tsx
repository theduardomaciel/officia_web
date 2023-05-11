// Components
import { Section } from 'components/Layout';
import { cn } from 'lib/utils';

export default function StatisticsSection() {
	return (
		<Section className="p-0">
			<h2 className="font-black text-4xl lg:text-5xl text-text-100 text-center w-full break-words lg:break-before-avoid-page">
				ACOMPANHE SEU NEGÓCIO EM UM SÓ LUGAR. <br />
				<span className="text-green">PROFISSIONALISMO</span> E{' '}
				<span className="text-green">AUTONOMIA</span> ANDARÃO DE MÃOS DADAS.
			</h2>
			<ul className="flex flex-col lg:grid grid-cols-3 w-full gap-6">
				<Card data={`NEGÓCIO\nREGISTRADOS`} value="..." />
				<Card className="hidden lg:flex" />
				<Card data={`SERVIÇOS\nADICIONADOS`} value="..." />
				<Card className="hidden lg:flex" />
				<Card data={`ORÇAMENTOS\nGERADOS`} value="..." />
				<Card className="hidden lg:flex" />
			</ul>
		</Section>
	);
}

interface CardProps {
	data?: string;
	value?: string;
	className?: string;
}

function Card({ data, value, className }: CardProps) {
	return data && value ? (
		<li className="flex flex-row items-center justify-between px-5 py-7 bg-slate-200 dark:bg-dark-gray-200 rounded-lg">
			<p className="font-semibold tracking-tight leading-tight text-base text-var(--neutral) whitespace-pre-line">
				{data}
			</p>
			<p className="font-black text-var(--neutral) text-4xl">{value}</p>
		</li>
	) : (
		<li
			className={cn(
				'flex flex-row items-center justify-between px-5 py-7 bg-gray-400 dark:bg-dark-gray-400 rounded-lg opacity-50',
				className
			)}
		/>
	);
}
