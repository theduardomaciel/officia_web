// Components
import ContactForm from './form';

export default function ContactPage() {
	return (
		<>
			<div className="flex flex-col items-start justify-start w-full lg:w-[70vw] py-section px-wrapper lg:px-20 gap-y-12">
				<h1 className="w-full text-start font-title text-4xl text-white lg:w-fit lg:text-5xl">
					Fale Conosco
				</h1>
				<ContactForm />
			</div>
		</>
	);
}
