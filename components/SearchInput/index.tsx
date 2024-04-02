'use client';

import { useDebouncedCallback } from 'use-debounce';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term) => {
		console.log(`Searching... ${term}`);

		const params = new URLSearchParams(searchParams);
		params.set('page', '1');

		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 600);

	return (
		<div className="mx-auto py-4 flex justify-center">
			<label
				className="flex items-center sr-only"
				htmlFor="searchPokemon"
			>
				Search Pokemon:
			</label>
			<input
				type="text"
				id="searchPokemon"
				name="searchPokemon"
				placeholder={placeholder}
				className="border-black border-2 rounded-md p-2 mx-2 w-1/4"
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get('query')?.toString()}
			/>
		</div>
	);
}
