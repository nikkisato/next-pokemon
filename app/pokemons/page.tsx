/* eslint-disable @next/next/no-img-element */
import { Suspense } from 'react';
import PokemonList from '@/components/PokemonList';
import SearchInput from '@/components/SearchInput';
import fetchPokemonPages from '../../lib/pokemonPages';
import Pagination from '@/components/Pagination';
import Navigation from '@/components/Navigation/Navigation';
import getAllPokemon from '@/lib/getAllPokemon';

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

	// console.log('currentPage', currentPage);

	//https://www.algolia.com/pricing/
	//https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript

	// getting the total pages
	const res = await getAllPokemon();
	const count = res.count;

	const itemsPerPage = 20;
	const totalPages = Math.ceil(count / itemsPerPage);

	//the src is in the public folder
	const LoadingFallback = () => (
		<div className="flex justify-center animate-pulse">
			<img
				className="w-72 h-72 "
				src="/pokeball.jpeg"
				alt="Loading Pokémon"
			/>
		</div>
	);
	return (
		<main
			id="main"
			className="container mx-auto"
		>
			<Navigation
				className="text-center py-5"
				title="Pokemon List"
			/>
			<SearchInput placeholder="Search Pokemon" />

			<div className="container mx-auto">
				<Suspense
					fallback={<LoadingFallback />}
					key={query + currentPage}
				>
					<PokemonList
						query={query}
						currentPage={currentPage}
					/>
				</Suspense>

				<div className="mt-5 flex w-full justify-center">
					<Pagination
						totalPages={totalPages}
						currentPage={currentPage}
					/>
				</div>
			</div>
		</main>
	);
}
