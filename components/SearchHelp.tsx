'use client';
import { useState } from 'react';

import { cn } from 'lib/utils';
import { Search } from 'lucide-react';

import { liteClient } from 'algoliasearch/lite';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';

// appId - apiKey
const searchClient = liteClient(
	process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
	process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY as string
);

interface HelpSearchBarProps {
	placeholder: string;
	className?: string;
}

export default function HelpSearchBar({ placeholder, className }: HelpSearchBarProps) {
	const [search, setSearch] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<div className="relative flex w-full">
			<input
				type="text"
				placeholder={placeholder ?? 'Pesquisar'}
				className={cn(
					'z-10 flex w-full flex-row items-center rounded-md border border-gray-100 bg-gray-200 py-4 pl-16 pr-6 text-sm font-normal text-white placeholder:text-text-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--neutral)]',
					className
				)}
			/>
			<Search
				width={16}
				height={16}
				color={'var(--text-100)'}
				className="absolute left-6 top-1/2 z-20 -translate-y-1/2"
			/>
		</div>
	);
}
