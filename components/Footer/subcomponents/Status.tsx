import { cn } from 'lib/utils';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface StatusProps {
    className?: string;
}

export default function Status({ className }: StatusProps) {
    return (
        <Link
            href={'/status'}
            className={cn(
                'flex flex-row items-center justify-center gap-x-3 px-3 py-2 transition-colors hover:bg-gray-200 rounded-md',
                className
            )}
        >
            <div className="w-2 h-2 bg-yellow rounded-full" />
            <p>Serviço Parcialmente Degradado</p>
            <ExternalLink width={12} height={12} color={'var(--text-100)'} />
        </Link>
    );
}
