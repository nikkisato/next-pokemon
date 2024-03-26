import { notFound } from 'next/navigation';
import getAllPokemon from '../../lib/getAllPokemon';
import Image from 'next/image';

export default async function PokemonList({
	query,
	currentPage,
}: {
	query: string;
	currentPage: number;
}) {
	// const invoices = await fetchFilteredInvoices(query, currentPage);

	const data = await getAllPokemon();

	const pokemonWithImages = await Promise.all(
		data.results.map(async (pokemon, index) => {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`);
			const result = await res.json();

			const imageUrl = result.sprites.front_default;

			return {
				...pokemon,
				imageUrl,
			};
		})
	);

	if (!data) {
		return notFound();
	}

	return (
		<div className="grid grid-cols-4 gap-4 p-0	">
			{pokemonWithImages.map((pokemon, index) => (
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
					<h2 className="py-2">{pokemon.name.toUpperCase()}</h2>
				</div>
			))}
		</div>
	);
}
