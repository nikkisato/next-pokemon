// create a loop to get all pagination
import {
	Pokemon,
	PokemonType,
	PokemonAbility,
	PokemonStat,
	PokemonStats,
} from '@/util/pokemonType';

async function fetchPokemonData(url: string) {
	try {
		//switch axios with fetch
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching Pokemon data:', error);
		throw error;
	}
}

async function fetchPokemonInfo(url: any) {
	try {
		//switch axios with fetch
		const response = await fetch(url);
		const data = await response.json();

		const name = data?.name.replace('-', ' ');
		const pokemonInfo: Pokemon = {
			name: name,
			id: data.id,
			height: data.height,
			weight: data.weight,
			types: data.types.map((t: PokemonType) => t.type.name),
			abilities: data.abilities.map((a: PokemonAbility) => a.ability.name),
			base_experience: data.base_experience,
			// TODO: Fix this Stats
			stats: data.stats.reduce((stats: any, stat: PokemonStat) => {
				stats[stat.stat.name] = stat.base_stat;
				return stats;
			}, {}),
			image: data.sprites.other['official-artwork'].front_default,
		};
		return pokemonInfo;
	} catch (error) {
		console.error('Error fetching Pokemon info:', error);
	}
}

async function getAllPaginationPokemon() {
	let allPokemon: any[] = [];
	let url = 'https://pokeapi.co/api/v2/pokemon';
	let loopCount = 0;
	let pokemonData: any;

	while (url) {
		pokemonData = await fetchPokemonData(url);

		for (const pokemon of pokemonData.results) {
			const pokemonInfo = await fetchPokemonInfo(pokemon.url);
			allPokemon.push(pokemonInfo);
		}

		loopCount++;
		// this is the bail out condition
		// infinite loop
		if (loopCount > 67) {
			// TODO: it was giving me a warning since null is not identified as a string
			url = '';
		} else {
			url = pokemonData.next;
		}
	}

	return allPokemon;
}

export default getAllPaginationPokemon;
