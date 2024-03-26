async function searchPokemon(name: string) {
	console.log('name', name);

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);

	if (!res.ok) {
		console.log('res.status', res.status);
		return [];
	}

	const data = await res.json();
	return [data];
}

export default searchPokemon;
