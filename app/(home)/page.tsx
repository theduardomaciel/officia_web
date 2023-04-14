import Image from 'next/image';

import { Logo, PlayStoreEN } from 'components/Icons';

import Header from 'components/Header';
import MobileMenu from 'components/Header/subcomponents/MobileMenu';
import FaqQuestions from './help/subcomponents/FAQ';

export default function Home() {
	return (
		<>
			<Header>
				<ul className="flex-row items-center justify-end gap-x-16 lg:flex hidden">
					{/* <li
						key={'services'}
						className="font-semibold text-sm cursor-pointer hover:text-white transition-colors"
					>
						Serviços
					</li>
					<li
						key={'prices'}
						className="font-semibold text-sm cursor-pointer hover:text-white transition-colors"
					>
						Preços
					</li> */}
					<a href={`/#faq`} key={'faq'}>
						<li className="font-semibold text-sm cursor-pointer hover:text-white transition-colors">
							FAQ
						</li>
					</a>
					{/* <button className="flex items-center justify-center px-4 py-2 bg-primary rounded-3xl text-gray-300 font-semibold text-sm gap-x-3">
                    Entrar
                    <RightArrowIcon />
                </button> */}
				</ul>
				<MobileMenu />
			</Header>
			<main className="flex flex-col justify-start items-center min-h-screen w-full pt-header z-10 relative pb-section">
				<section className="flex w-full lg:h-screen flex-col-reverse lg:flex-row items-center justify-between mt-24 lg:-mt-[2rem] gap-x-24 relative px-wrapper overflow-x-hidden">
					<div className="flex relative h-[507.5px] w-full lg:w-fit lg:flex-1 my-24 lg:my-0">
						<Image
							src={`/images/screenshot_1.png`}
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-text-100 rounded-[18.75px] shadow-2xl"
							width={234.38}
							height={507.5}
							priority
							quality={100}
							alt="Mobile app screenshot 1"
						/>
						<Image
							src={`/images/screenshot_2.png`}
							className="absolute top-[46%] left-[40%] -translate-x-1/2 -translate-y-1/2 -z-10 border-2 border-text-100 rounded-[18.75px] shadow-2xl"
							width={234.38}
							height={507.5}
							priority
							quality={100}
							alt="Mobile app screenshot 2"
						/>
					</div>

					<div className="flex flex-1 flex-col items-center justify-center gap-y-20">
						<Logo className="w-[101px] h-[80px]" />
						<div className="flex flex-col items-center justify-center">
							<h1 className="font-title text-5xl leading-[95%] text-white">
								Simplicidade.
							</h1>
							<p className="text-center mt-4 text-white max-w-[65%]">
								Estamos aqui para unir tudo que o seu negócio precisa em um só
								lugar.
							</p>
						</div>
						<PlayStoreEN />
					</div>

					<p
						className="font-black text-[10rem] lg:text-[15rem] tracking-[0.125em] text-primary opacity-10 leading-none
                absolute top-[30%] lg:top-[20%] -left-[15%] lg:-left-[5%] -z-20"
					>
						AUTO <br />
						NOMIA
					</p>
				</section>

				<section className="flex flex-col w-full px-wrapper">
					<FaqQuestions />
				</section>

				{/* <section>
                <h2>
                    ACOMPANHE SEU NEGÓCIO EM UM SÓ LUGAR.{' '}
                    <span>PROFISSIONALISMO</span> E <span>AUTONOMIA</span>{' '}
                    ANDARÃO DE MÃOS DADAS.
                </h2>
                <ul></ul>
            </section> */}
			</main>
		</>
	);
}

interface CardProps {
	description: string;
	data: string;
}

function Card({ data, description }: CardProps) {
	return (
		<li>
			<p>{data}</p>
			<p>{description}</p>
		</li>
	);
}
