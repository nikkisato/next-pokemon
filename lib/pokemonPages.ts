import { notFound } from 'next/navigation';
import getAllPokemon from '../lib/getAllPokemon';

export default async function fetchPokemonPages(query: any) {
	// fetch pokemon pages
	// console.log('query', query);
	// const data = await getAllPokemon();
	// const pokemonWithImages = await Promise.all(
	// 	data.results.map(async (pokemon, index) => {
	// 		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`);
	// 		const result = await res.json();
	// 		const imageUrl = result.sprites.front_default;
	// 		return {
	// 			...pokemon,
	// 			imageUrl,
	// 		};
	// 	})
	// );
	// if (!data) {
	// 	return notFound();
	// }
}
