import HeaderInteractivity, {
    HeaderInteractive,
    HeaderInteractivityProps
} from './Interactivity';

interface Props {
    children?: React.ReactNode;
    interactivityProps?: HeaderInteractivityProps;
}

export default function Header({ children, interactivityProps }: Props) {
    return (
        <header
            id="header"
            className="w-screen h-[var(--header)] flex items-center justify-between px-wrapper fixed top-0 z-40 transition-colors 
            before:absolute before:w-screen before:h-[var(--header)] before:top-0 before:left-0 before:bg-gray-500 before:-z-10 before:brightness-50 before:transition before:border before:border-b-gray-100 before:opacity-0 data-[scroll]:backdrop-blur-lg data-[scroll]:before:opacity-50"
        >
            <a href="/" className="font-title text-2xl z-50 text-white">
                officia
            </a>
            {!interactivityProps?.putTogether && (
                <HeaderInteractive>
                    {interactivityProps?.children}
                </HeaderInteractive>
            )}
            <div className="flex flex-row items-center justify-end gap-x-16">
                <HeaderInteractivity {...interactivityProps} />
                {children}
            </div>
        </header>
    );
}
