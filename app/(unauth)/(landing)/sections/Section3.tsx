import { cn } from 'lib/utils';

// Components
import { MainHeading } from 'components/Heading';
import { Section } from 'components/Layout';

import Index3Frame1 from '../objects/components/Index3Frame1';
import Index3Frame2 from '../objects/components/Index3Frame2';
import Index3Payment from '../objects/components/Index3Payment';
import Index3Warranty from '../objects/components/Index3Warranty';

export default function Section3() {
	return (
		<Section className="p-0">
			<MainHeading
				index={3}
				containerClassName="lg:max-w-[50vw]"
				title="GERE DOCUMENTOS EM UM TOQUE"
			>
				<span className="flex lg:max-w-[80%]">
					Boletos, orçamentos e diversos outros documentos com a simplicidade de alguns
					botões.
				</span>
			</MainHeading>

			<div className="flex flex-col items-start justify-center lg:flex-row lg:justify-between w-full gap-x-20 relative">
				<div className="flex flex-col items-start justify-start gap-y-14 w-full">
					<CustomHeading
						title="PAGAMENTOS"
						description="Informe a seus clientes as condições e formas de pagamento aceitas por sua empresa."
					>
						<Index3Payment />
					</CustomHeading>

					<CustomHeading
						title="GARANTIAS"
						description="Deixe explícita a garantia e as condições fornecidas por sua empresa."
					>
						<Index3Warranty />
					</CustomHeading>
				</div>
				<div className="hidden xl:flex w-1/2 h-[45rem] relative">
					<Index3Frame1 />
					<Index3Frame2 className="lg:sticky lg:top-[calc(var(--header)+8rem)] lg:left-0" />
				</div>
			</div>
		</Section>
	);
}

function CustomHeading({
	title,
	description,
	children
}: {
	title: string;
	description: string;
	children: React.ReactNode;
}) {
	return (
		<div className={cn('flex flex-col items-start justify-start gap-y-6 w-full relative')}>
			<h3
				className={cn(
					'font-black text-4xl lg:text-6xl text-transparent absolute opacity-60 w-full tracking-widest -top-4 lg:-top-8 -left-6 uppercase'
				)}
				style={{
					WebkitTextStrokeWidth: '0.2px',
					WebkitTextStrokeColor: 'var(--neutral)'
				}}
			>
				{title}
			</h3>
			<p
				className={cn(
					'font-medium text-lg text-[var(--neutral)] w-full whitespace-pre-line max-w-[90%]'
				)}
			>
				{description}
			</p>
			{children}
		</div>
	);
}
