import { Suspense } from 'react';
import PokemonList from '@/components/PokemonList';
import SearchInput from '@/components/SearchInput';
import fetchPokemonPages from '../../lib/pokemonPages';
import Pagination from '@/components/Pagination';

export default async function Page({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: string;
	};
}) {
	const query = searchParams?.query || '';
	const currentPage = Number(searchParams?.page) || 1;

	const totalPages = await fetchPokemonPages(query);

	console.log('totalPages', totalPages);

	return (
		<main className="container mx-auto">
			<h1 className="text-center py-5">Pokemon List</h1>
			<SearchInput placeholder="Search Pokemon" />

			<div className="container mx-auto">
				<Suspense
					fallback="Loading"
					key={query + currentPage}
				>
					<PokemonList
						query={query}
						currentPage={currentPage}
						// data={totalPages}
					/>
				</Suspense>

				<div className="mt-5 flex w-full justify-center">
					{/* <Pagination totalPages={totalPages} /> */}
				</div>
			</div>
		</main>
	);
}
