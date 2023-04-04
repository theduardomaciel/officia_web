export default function Header() {
    return (
        <header className="w-screen h-20 flex items-center justify-between px-wrapper">
            <a href="/" className="font-title text-2xl">
                officia
            </a>
            <ul className="flex flex-row items-center justify-end">
                <li className="mr-16 font-semibold text-sm cursor-pointer">
                    Serviços
                </li>
                <li className="mr-16 font-semibold text-sm cursor-pointer">
                    Preços
                </li>
                <li className="mr-16 font-semibold text-sm cursor-pointer">
                    FAQ
                </li>
                {/* <button className="flex items-center justify-center px-4 py-2 bg-primary rounded-3xl text-gray-300 font-semibold text-sm gap-x-3">
                    Entrar
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_1370_1984" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
                            <rect width="12" height="12" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_1370_1984)">
                            <path d="M3.57501 10.55C3.45001 10.425 3.38751 10.2771 3.38751 10.1063C3.38751 9.93543 3.45001 9.78752 3.57501 9.66252L7.23751 6.00002L3.56251 2.32502C3.44585 2.20835 3.38751 2.06252 3.38751 1.88752C3.38751 1.71252 3.45001 1.56252 3.57501 1.43752C3.70001 1.31252 3.84793 1.25002 4.01876 1.25002C4.1896 1.25002 4.33751 1.31252 4.46251 1.43752L8.66251 5.65002C8.71251 5.70002 8.74793 5.75418 8.76876 5.81252C8.7896 5.87085 8.80001 5.93335 8.80001 6.00002C8.80001 6.06668 8.7896 6.12918 8.76876 6.18752C8.74793 6.24585 8.71251 6.30002 8.66251 6.35002L4.45001 10.5625C4.33335 10.6792 4.1896 10.7375 4.01876 10.7375C3.84793 10.7375 3.70001 10.675 3.57501 10.55Z" fill="#292929"/>
                        </g>
                    </svg>
                </button> */}
            </ul>
        </header>
    );
}
