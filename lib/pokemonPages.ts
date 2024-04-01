export default async function fetchPokemonPages(currentPage: Number) {
	console.log('currentPage', currentPage);
	// fetch pokemon count
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
	const data = await res.json();

	// Get total number of Pokémon
	const numberOfPokemon = data.count;

	// Calculate total number of pages based on items per page (20)
	const itemsPerPage = 20;
	const totalPages = Math.ceil(numberOfPokemon / itemsPerPage);

	return totalPages;
}
