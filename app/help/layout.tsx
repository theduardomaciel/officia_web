// Components
import { ContactDisclaimer } from './LayoutComponents';

export default function ArticlesLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <ContactDisclaimer />
        </>
    );
}
