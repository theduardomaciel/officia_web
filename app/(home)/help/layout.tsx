// Components
import { ContactDisclaimer } from './subcomponents/Layout';

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
