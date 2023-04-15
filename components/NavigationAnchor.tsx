import { classed } from '@tw-classed/react';

const NavigationAnchor = classed.a(
	'flex items-center justify-center px-4 py-2 gap-x-3 rounded-3xl transition-colors font-semibold cursor-pointer',
	{
		variants: {
			size: {
				normal: 'text-sm'
			},
			color: {
				primary:
					'text-primary dark:text-dark-gray-300 bg-[var(--neutral)] hover:bg-text-200 dark:hover:bg-slate-200'
			}
		},
		defaultVariants: {
			size: 'normal',
			color: 'primary'
		}
	}
);

export default NavigationAnchor;
