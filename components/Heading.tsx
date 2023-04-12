import { cn } from 'lib/utils';

interface HeadingProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    parentClassName?: string;
}

export default function Heading({
    title,
    children,
    className,
    parentClassName
}: HeadingProps) {
    return (
        <div
            className={cn(
                'flex flex-col items-start justify-start gap-y-6 w-full',
                className
            )}
        >
            <div
                className={cn(
                    'relative flex items-start justify-start w-full',
                    className
                )}
            >
                <h2
                    className={cn(
                        'font-black text-4xl uppercase tracking-wider text-primary'
                    )}
                >
                    {title}
                </h2>
                <h2
                    className={cn(
                        'font-black text-4xl uppercase text-transparent absolute opacity-20 w-full tracking-widest top-2 left-6',
                        className
                    )}
                    style={{
                        WebkitTextStrokeWidth: '0.2px',
                        WebkitTextStrokeColor: 'var(--neutral)'
                    }}
                >
                    {title}
                </h2>
            </div>
            <p className="font-medium text-lg text-white w-full whitespace-pre-line">
                {children}
            </p>
        </div>
    );
}
