// Components
import { CornerDownLeft } from 'lucide-react';
import ContactForm from './form';
import Link from 'next/link';

export default function ContactPage() {
	return (
		<>
			<div className="flex flex-col items-start justify-start w-full lg:w-[70vw] py-section px-wrapper lg:px-20 gap-y-12">
				<div className="flex flex-col items-start justify-start gap-y-2 lg:gap-y-4">
					<Link href={`/help`}>
						<div className="flex flex-row items-center justify-start gap-x-4 hover:underline cursor-pointer">
							<CornerDownLeft
								width={16}
								height={16}
								color="var(--neutral)"
								className="w-3 h-3 lg:6 lg:w6"
							/>
							<p className="text-[var(--neutral)] font-semibold text-xs lg:text-sm">
								Voltar para a Central de Ajuda
							</p>
						</div>
					</Link>
					<h1 className="w-full text-start font-title text-4xl text-[var(--neutral)] lg:w-fit lg:text-5xl">
						Fale Conosco
					</h1>
				</div>
				<ContactForm />
			</div>
		</>
	);
}
