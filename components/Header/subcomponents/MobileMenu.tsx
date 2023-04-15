'use client';
import { useRef, useState } from 'react';
import clsx from 'clsx';

import { Logo, RightArrow } from 'components/Icons';
import { X } from 'lucide-react';
import ThemePicker from 'components/Footer/subcomponents/ThemePicker';
import LanguagePicker from 'components/Footer/subcomponents/LanguagePicker';
import FeedbackButton from 'components/Footer/subcomponents/FeedbackButton';
import Status from 'components/Footer/subcomponents/Status';

const CENTER = 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';

export default function MobileMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const debounce = useRef(false);

	function toggleMenu() {
		if (debounce.current === false) {
			debounce.current = true;
			setIsMenuOpen(!isMenuOpen);
			document.body.classList.toggle('overflow-hidden');
			document.body.classList.toggle('h-screen');
			document.getElementById('menuButton')?.classList.toggle('animate-pop');
			setTimeout(() => {
				document.getElementById('menuButton')?.classList.toggle('animate-pop');
				debounce.current = false;
			}, 500);
		}
	}

	return (
		<>
			<div
				className={clsx(
					'flex flex-col w-screen h-screen absolute top-0 left-0 z-40 transition bg-slate-50 dark:bg-dark-gray-600 pt-header px-wrapper items-center gap-y-16 justify-center lg:hidden',
					{
						'opacity-0 invisible': !isMenuOpen,
						'opacity-100 visible': isMenuOpen
					}
				)}
				style={{
					contentVisibility: isMenuOpen ? 'auto' : 'hidden'
				}}
			>
				<ul className="flex flex-col items-center justify-end gap-y-10">
					{/* <li key={'services_mobile'} className="font-semibold text-xl cursor-pointer">
						Serviços
					</li>
					<li key={'prices_mobile'} className="font-semibold text-xl cursor-pointer">
						Preços
					</li> */}
					<li key={'faq_mobile'} className="font-semibold text-xl cursor-pointer">
						FAQ
					</li>
					{/* <button className="flex items-center justify-center px-5 py-2 bg-primary rounded-3xl text-dark-gray-300 font-semibold text-base gap-x-3">
						Entrar
						<RightArrow />
					</button> */}
				</ul>
				<div className="flex flex-col items-center justify-center w-full gap-y-6 lg:hidden">
					<Status />
					<div className="flex flex-row items-center justify-between w-full">
						<ThemePicker />
						<LanguagePicker />
					</div>
					<FeedbackButton />
				</div>
			</div>
			<button onClick={toggleMenu} id="menuButton" className={`flex lg:hidden z-50 relative`}>
				<Logo
					width={20}
					height={20}
					className={clsx('rotate-90 transition-all absolute', CENTER, {
						'opacity-0 scale-0 rotate-90': isMenuOpen,
						'opacity-100 scale-100 rotate-90': !isMenuOpen
					})}
				/>
				<X
					width={20}
					height={20}
					color="var(--neutral)"
					className={clsx('transition-all absolute ', CENTER, {
						'opacity-0 scale-0': !isMenuOpen,
						'opacity-100 scale-100': isMenuOpen
					})}
				/>
			</button>
		</>
	);
}
