/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFFFFF",
                secondary: "#000000",
                green: '#6CBE45',
                red: '#CA4331',
                blue: '#3732f0',
                yellow: '#FFBB0D',
                purple: '#9747FF',
                text: {
                    100: '#C4C4C4',
                    200: '#A1A1AA',
                },
                gray: {
                    100: '#666666',
                    200: '#333333',
                    300: '#292929',
                    400: '#27272A',
                    500: '#1E1F20',
                    600: "#1C1B1F"
                },
            },
            padding: {
                wrapper: '10rem',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                title: ['var(--font-title)'],
            },
        },
    },
    plugins: [],
}

