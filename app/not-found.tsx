import { Logo } from 'components/Icons';

export const metadata = {
	title: 'Página não encontrada',
	description: 'A página que você requisitou não foi encontrada.',
	robots: 'noindex, nofollow',
	canonical: 'https://www.officia.vercel.app/not-found',
	openGraph: {
		title: 'Página não encontrada',
		description: 'A página que você requisitou não foi encontrada.',
		url: 'https://www.officia.vercel.app/not-found',
		type: 'website'
	}
};

export default function NotFound() {
	return (
		<main className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full min-h-screen lg:pl-48 pr-56 gap-x-36">
			<div className="flex flex-col w-full lg:flex-[0.5] lg:h-full items-center justify-center">
				<Logo width={100} height={100} />
			</div>
			<div className="flex flex-col items-center justify-center lg:items-start lg:flex-[0.425] gap-y-12">
				<h1 className="font-title text-7xl lg:text-[110px] text-white lg:text-left">
					404...
				</h1>
				<h2 className="text-center lg:text-left text-white text-2xl font-bold">
					Deu ruim! <br className="lg:hidden" /> Repito: deu ruim!
				</h2>
				<p className="text-center lg:text-left text-white text-lg font-medium">
					Acho que você chegou em algum lugar que não existe, pois a página que você
					requisitou não foi encontrada.
				</p>
				<button className="font-semibold text-base flex flex-row items-center justify-center w-full px-5 py-4 bg-white rounded-xl text-gray-300 hover:bg-slate-200 transition-colors">
					<a href="/">Voltar para a página inicial</a>
				</button>
			</div>
		</main>
	);
}