import { cn } from 'lib/utils';
import { Sticker } from 'lucide-react';
import Link from 'next/link';

interface Props {
    className?: string;
}

export default function FeedbackButton({ className }: Props) {
    return (
        <Link
            className={cn(
                'flex flex-row items-center justify-center px-4 py-2.5 gap-x-2.5 bg-transparent text-text-100 font-medium text-sm border border-gray-100 rounded-md hover:bg-gray-200 transition-colors w-full',
                className
            )}
            href={`/feedback`}
        >
            <Sticker width={16} height={16} />
            Compartilhar feedback
        </Link>
    );
}
