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
	let pokemonWithImages = [];

	console.log('currentPage', currentPage);

	if (!query) {
		// If there's no query, fetch all Pokémon
		const allPokemonData = await getAllPokemon();
		const pageSize = 20; // Number of items per page
		const offset = (currentPage - 1) * pageSize; // Calculate the offset based on the current page

		pokemonWithImages = await Promise.all(
			allPokemonData.slice(offset, offset + pageSize).map(async (pokemon: any, index: number) => {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
				const result = await res.json();

				const imageUrl = result.sprites.front_default;

				return {
					...pokemon,
					imageUrl,
				};
			})
		);
	} else {
		// If there's a query, search for Pokémon
		const data = await searchPokemon(query);

		if (!data) {
			return notFound();
		}

		pokemonWithImages = await Promise.all(
			data.map(async (pokemon: any, index: number) => {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
				const result = await res.json();

				const imageUrl = result.sprites.front_default;

				return {
					...pokemon,
					imageUrl,
				};
			})
		);
	}

	return (
		<div className="grid grid-cols-4 gap-4 p-0 ">
			{pokemonWithImages.map((pokemon, index) => {
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
