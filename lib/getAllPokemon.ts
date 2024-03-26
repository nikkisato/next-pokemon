async function getAllPokemon() {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);

	console.log('res', res);

	if (!res.ok) {
		// throw new Error('Something went wrong');
		console.log('Something went wrong');
		return null;
	}
	return res.json();
}

export default getAllPokemon;

// type Pokemon = {
// 	name: string;
// 	sprites: {
// 		front_default: string;
// 	};
// };
