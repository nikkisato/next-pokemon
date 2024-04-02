async function searchPokemon(name: string) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`);

	if (!res.ok) {
		console.log('res.status Search Pokemon', res.status);
		return [];
	}

	const data = await res.json();

	return [data];
}

export default searchPokemon;
