import { cn } from 'lib/utils';
import { ExternalLink } from 'lucide-react';

const STATUS = {
	OK: {
		color: '#0cc415',
		text: 'Serviço em Operação'
	},
	MINOR: {
		color: '#ff8c00',
		text: 'Serviço Parcialmente Degradado'
	},
	MAJOR: {
		color: '#ff8c00',
		text: 'Serviço Parcialmente Degradado'
	},
	CRITICAL: {
		color: '#ff0000',
		text: 'Serviço Fora do Ar'
	}
};

interface Incident {
	resolved: boolean;
	level: 'MINOR' | 'MAJOR' | 'CRITICAL';
}

interface Project {
	name: string;
	incidents: Incident[];
}

interface StatusProps {
	className?: string;
}

export default async function Status({ className }: StatusProps) {
	const projects = await fetch('https://theduardomaciel.vercel.app/api/status', {
		mode: 'no-cors'
	})
		.then((res) => res.json())
		.catch(() => null);

	if (!projects) return null;

	const officia = projects.find((project: Project) => project.name === 'officia');

	const status =
		officia.incidents && officia.incidents.length > 0
			? STATUS[officia.incidents[0].level as keyof typeof STATUS]
			: STATUS.OK;

	return (
		<a
			href={'https://theduardomaciel.vercel.app/status?utm_source=officia'}
			target="_blank"
			className={cn(
				'flex flex-row items-center justify-center gap-x-3 px-3 py-2 transition-colors w-full lg:w-fit hover:bg-gray-200 dark:hover:bg-dark-gray-200 rounded-md',
				className
			)}
			title="Verifique o status de nossos serviços"
		>
			<div
				className="w-2 h-2 rounded-full"
				style={{
					backgroundColor: status.color
				}}
			/>
			<p>{status.text}</p>
			<ExternalLink width={12} height={12} color={'var(--text-100)'} />
		</a>
	);
}
