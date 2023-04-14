import { cn } from 'lib/utils';
import { ExternalLink } from 'lucide-react';

interface StatusProps {
	className?: string;
}

export default function Status({ className }: StatusProps) {
	return (
		<a
			href={'https://twitter.com/appofficia'}
			target="_blank"
			className={cn(
				'flex flex-row items-center justify-center gap-x-3 px-3 py-2 transition-colors w-full lg:w-fit hover:bg-gray-200 rounded-md',
				className
			)}
		>
			<div className="w-2 h-2 bg-yellow rounded-full" />
			<p>Serviço em Manutenção</p>
			<ExternalLink width={12} height={12} color={'var(--text-100)'} />
		</a>
	);
}
