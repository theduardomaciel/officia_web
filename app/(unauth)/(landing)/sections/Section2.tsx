// Components
import Heading, { MainHeading } from 'components/Heading';
import { Section } from 'components/Layout';
import { Services } from '../objects/Screen1';

export default function Section2() {
	return (
		<Section className="p-0">
			<div className="flex flex-col xl:flex-row-reverse items-center justify-between bg-gray-300 dark:bg-dark-gray-400 rounded-default gap-y-12 p-6 lg:p-12 w-full lg:gap-x-20 h-fit">
				<MainHeading
					index={2}
					title="AGENDE DE MANEIRA INTELIGENTE"
					className="text-4xl"
					indexClassName="text-4xl"
					position="right"
					preset="light"
					containerClassName="items-end"
					descriptionClassName={'max-w-[85%]'}
				>
					Separe pedidos de maneira categórica e especializada, evitando confusão ou dor
					de cabeça nas horas de preparação para a realização do serviço.
				</MainHeading>
				<div className="bg-gray-200 dark:bg-dark-gray-200 p-6 rounded-lg-2 w-full xl:w-fit xl:min-w-[275px] xl:scale-150 xl:my-[5%] xl:mx-[5%]">
					<Services />
				</div>
			</div>
		</Section>
	);
}
