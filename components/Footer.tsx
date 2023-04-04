import { PlayStoreEN } from 'components/Icons';

export default function Footer() {
    return (
        <footer className="w-screen flex flex-col items-center justify-center gap-y-10 px-wrapper bg-gray-400 pt-12 pb-6">
            <div className="flex flex-row items-start justify-between w-full">
                <a href="/" className="font-title text-2xl">
                    officia
                </a>
                <div className="flex flex-row items-start justify-end gap-x-20">
                    <ul className="flex flex-col items-start justify-start gap-y-5">
                        <li className="uppercase font-title text-sm mb-1">
                            Mais
                        </li>
                        <li className="mr-12 font-regular text-sm cursor-pointer text-text-100">
                            Política de Privacidade
                        </li>
                        <li className="mr-12 font-regular text-sm cursor-pointer text-text-100">
                            Termos de Uso
                        </li>
                        <li className="mr-12 font-regular text-sm cursor-pointer text-text-100">
                            Termos de Compra
                        </li>
                    </ul>
                    <ul className="flex flex-col items-start justify-start gap-y-5">
                        <li className="uppercase font-title text-sm mb-1">
                            Baixar
                        </li>
                        <PlayStoreEN />
                    </ul>
                </div>
            </div>
            <p className="text-xs bg-gradient-to-b text-transparent bg-clip-text from-white to-80%">
                @ 2023 | made with ❤️ by @theduardomaciel
            </p>
        </footer>
    );
}
