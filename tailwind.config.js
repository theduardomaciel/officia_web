/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#FFFFFF',
				secondary: '#000000',
				green: '#6CBE45',
				red: '#CA4331',
				blue: '#3732f0',
				yellow: '#FFBB0D',
				purple: '#9747FF',
				text: {
					100: 'var(--text-100)',
					200: 'var(--text-200)'
				},
				'dark-gray': {
					100: '#666666',
					200: '#333333',
					300: '#292929',
					400: '#27272A',
					500: '#1E1F20',
					600: '#1C1B1F'
					/* 
                    100: 'var(--gray-100)',
                    200: 'var(--gray-200)',
                    300: 'var(--gray-300)',
                    400: 'var(--gray-400)',
                    500: 'var(--gray-500)',
                    600: 'var(--gray-600)'
                    */
				}
			},
			padding: {
				wrapper: 'var(--wrapper)',
				section: 'var(--section)',
				header: 'var(--header)',
				link: 'calc(var(--header) + 1rem)'
			},
			margin: {
				wrapper: 'var(--wrapper)',
				link: 'calc(var(--header) + 1rem)'
			},
			borderRadius: {
				default: 'var(--default-border)'
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				title: ['var(--font-title)']
			},
			keyframes: {
				pop: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' }
				}
			},
			animation: {
				pop: 'pop 0.5s cubic-bezier(0,.92,.59,1.15) both'
			},
			gap: {
				select: '0.625rem'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
