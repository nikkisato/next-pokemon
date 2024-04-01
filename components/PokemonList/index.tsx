import { notFound } from 'next/navigation';
import getAllPokemon from '../../lib/getAllPokemon';
import Image from 'next/image';
import searchPokemon from '@/lib/searchPokemon';
import Navigation from '../Navigation/Navigation';

export default async function PokemonList({
	query,
	currentPage,
}: {
	query: string;
	currentPage: number;
}) {
	console.log('query', query);

	// const invoices = await fetchFilteredInvoices(query, currentPage);

	const data = await searchPokemon(query);

	if (!data) {
		return notFound();
	}

	console.log('data', data);

	const pokemonWithImages = await Promise.all(
		//look at the data.results.map this needs to pass down from the getAllPokemon function
		data.map(async (pokemon: any, index: number) => {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`);
			const result = await res.json();

			const imageUrl = result.sprites.front_default;

			return {
				...pokemon,
				imageUrl,
			};
		}) || []
	);

	return (
		<div className="grid grid-cols-4 gap-4 p-0	">
			{pokemonWithImages.map((pokemon, index) => {
				console.log('pokemon', pokemon);
				return (
					<div
						key={index}
						className="items-center text-center rounded-3xl shadow-md"
					>
						<Image
							src={pokemon.imageUrl}
							alt={pokemon.name}
							width={200}
							height={200}
							className="w-full"
						/>
						<h2 className="py-2">{pokemon?.name?.toUpperCase()}</h2>
					</div>
				);
			})}
		</div>
	);
}
