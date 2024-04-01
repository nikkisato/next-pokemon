import { Suspense } from 'react';
import PokemonList from '@/components/PokemonList';
import SearchInput from '@/components/SearchInput';
import fetchPokemonPages from '../../lib/pokemonPages';
import Pagination from '@/components/Pagination';
import Navigation from '@/components/Navigation/Navigation';

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

	// const totalPages = await fetchPokemonPages(query);

	return (
		<main className="container mx-auto">
			<Navigation
				className="text-center py-5"
				title="Pokemon List"
			/>
			<SearchInput placeholder="Search Pokemon" />

			<div className="container mx-auto">
				<Suspense
					fallback="Loading"
					key={query + currentPage}
				>
					<PokemonList
						query={query}
						currentPage={currentPage}
					/>
				</Suspense>

				<div className="mt-5 flex w-full justify-center">
					{/* <Pagination totalPages={totalPages} /> */}
				</div>
			</div>
		</main>
	);
}
