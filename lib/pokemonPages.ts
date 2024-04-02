//Screaming snake case
const POKEMON_LIMIT = 20;

export default async function fetchPokemonPages(currentPage: number = 1) {
	console.log('currentPage', currentPage);
	const offsetNumber = (currentPage - 1) * POKEMON_LIMIT;
	// fetch pokemon count
	const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon/?offset=${offsetNumber}&limit=${POKEMON_LIMIT}`
	);

	const data = await res.json();

	// Get total number of Pokémon
	const numberOfPokemon = data.count;

	// Calculate total number of pages based on items per page (20)
	const itemsPerPage = POKEMON_LIMIT;
	const totalPages = Math.ceil(numberOfPokemon / itemsPerPage);

	return { totalPages, data };
}
