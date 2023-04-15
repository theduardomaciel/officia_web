'use client';
import { useState } from 'react';
import Image from 'next/image';

import { cn } from 'lib/utils';
import { ChevronRight, Search } from 'lucide-react';

//import { algoliasearch } from 'algoliasearch';
import { liteClient } from 'algoliasearch/lite';
import {
	Highlight,
	Hits,
	InstantSearch,
	SearchBox,
	Snippet,
	useInstantSearch
} from 'react-instantsearch-hooks-web';
import Link from 'next/link';

// appId - apiKey
const searchClient = liteClient(
	process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
	process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY as string
);

interface HelpSearchBarProps {
	placeholder: string;
	className?: string;
}

const transformItems = (items: Array<any>) => {
	return [...items, { watermark: true }].map((item: any) => ({
		...item
	}));
};

export default function HelpSearchBar({ placeholder, className }: HelpSearchBarProps) {
	const [search, setSearch] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<InstantSearch searchClient={searchClient} indexName="officia_help">
			<div className="flex flex-col items-center justify-center w-full relative">
				<SearchBox
					classNames={{
						root: cn('z-10 w-full relative', className),
						input: cn(
							'z-10 flex w-full flex-row items-center rounded-md border border-gray-400 dark:border-dark-gray-100 bg-gray-200 dark:bg-dark-gray-200 py-4 pl-16 pr-6 text-sm font-normal text-[var(--neutral)] placeholder:text-text-200 dark:placeholder:text-text-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--neutral)] appearance-none',
							className
						),
						submit: 'cursor-default absolute left-6 top-1/2 z-20 -translate-y-1/2',
						submitIcon: 'w-4 h-4',
						reset: 'hidden',
						resetIcon: 'cursor-pointer',
						loadingIcon: 'hidden'
					}}
					submitIconComponent={() => (
						<Search width={16} height={16} color={'var(--text-200)'} />
					)}
					loadingIconComponent={() => null}
					resetIconComponent={() => null}
					placeholder={placeholder ?? 'Pesquisar'}
				/>
				<NoResultsBoundary fallback={<NoResults />}>
					<EmptyQueryBoundary fallback={null}>
						<Hits
							classNames={{
								root: 'absolute top-16 left-0 flex flex-col z-10 gap-y-2 w-full bg-gray-200 dark:bg-dark-gray-200 rounded-md p-4'
							}}
							hitComponent={Hit}
							transformItems={transformItems}
						/>
					</EmptyQueryBoundary>
				</NoResultsBoundary>
			</div>
		</InstantSearch>
	);
}

function Hit({ hit }: any) {
	return hit.watermark ? (
		<div className="flex flex-row w-full items-end justify-end gap-x-2 pt-2">
			<p className="text-text-200 text-xs pointer-events-none select-none">Search by</p>
			<Image
				src="/icons/algolia.svg"
				className="select-none pointer-events-none"
				alt="Algolia"
				width={60}
				height={12}
			/>
		</div>
	) : (
		<Link
			className="flex flex-col items-start justify-start gap-y-6 w-full"
			href={`/help/${hit.section}/${hit.slug}`}
		>
			<article className="flex flex-row w-full justify-between items-center px-5 py-4 rounded-lg cursor-pointer bg-transparent hover:bg-gray-300 dark:hover:bg-dark-gray-300 transition-colors gap-x-2">
				<div className="flex flex-col items-start justify-start gap-y-1 text-left">
					<p className="capitalize text-xs text-[var(--neutral)]">{hit.section}</p>
					<div>
						<h3 className="font-bold text-left text-[var(--neutral)] text-lg">
							<Highlight
								attribute="title"
								hit={hit as any}
								classNames={{
									highlighted: 'bg-green'
								}}
							/>
						</h3>
					</div>
					<p className="font-normal text-left text-text-100 text-sm">
						<Snippet
							attribute="content"
							hit={hit}
							classNames={{
								highlighted: 'bg-green'
							}}
						/>
					</p>
				</div>
				<ChevronRight width={18} height={18} color="var(--text-200)" />
			</article>
		</Link>
	);
}

interface BoundaryProps {
	children: React.ReactNode;
	fallback: React.ReactNode;
}

function EmptyQueryBoundary({ children, fallback }: BoundaryProps) {
	const { indexUiState } = useInstantSearch();

	if (!indexUiState.query) {
		return <>{fallback}</>;
	}

	return <>{children}</>;
}

function NoResultsBoundary({ children, fallback }: BoundaryProps) {
	const { results } = useInstantSearch();

	// The `__isArtificial` flag makes sure not to display the No Results message
	// when no hits have been returned yet.
	if (!results.__isArtificial && results.nbHits === 0) {
		return (
			<>
				{fallback}
				<div hidden>{children}</div>
			</>
		);
	}

	return <>{children}</>;
}

function NoResults() {
	const { indexUiState } = useInstantSearch();

	return (
		<div className="absolute top-16 left-0 flex flex-col z-10 gap-y-2 w-full bg-gray-200 dark:bg-dark-gray-200 rounded-md p-4 h-fit">
			<p className="text-[var(--neutral)] text-center flex-1  overflow-hidden text-ellipsis">
				Nenhum resultado encontrado para <q>{indexUiState.query}</q>.
			</p>
		</div>
	);
}

/* <div className="relative flex w-full">
			<input
				type="text"
				placeholder={placeholder ?? 'Pesquisar'}
				onChange={onChange}
				className={cn(
					'z-10 flex w-full flex-row items-center rounded-md border border-dark-gray-100 bg-dark-gray-200 py-4 pl-16 pr-6 text-sm font-normal text-[var(--neutral)] placeholder:text-text-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--neutral)]',
					className
				)}
			/>
			<Search
				width={16}
				height={16}
				color={'var(--text-100)'}
				className="absolute left-6 top-1/2 z-20 -translate-y-1/2"
			/>
		</div> */
