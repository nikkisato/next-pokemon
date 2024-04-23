const fs = require('fs');
const axios = require('axios');

async function fetchPokemonData(url) {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error('Error fetching Pokemon data:', error);
	}
}

async function fetchPokemonInfo(url) {
	try {
		const response = await axios.get(url);
		const data = response.data;
		const name = data.name.replace('-', ' ');
		const pokemonInfo = {
			name: name,
			id: data.id,
			height: data.height,
			weight: data.weight,
			types: data.types.map((t) => t.type.name),
			abilities: data.abilities.map((a) => a.ability.name),
			base_experience: data.base_experience,
			stats: data.stats.reduce((stats, stat) => {
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

async function getAllPokemon() {
	let allPokemon = [];
	let url = 'https://pokeapi.co/api/v2/pokemon';

	while (url) {
		const pokemonData = await fetchPokemonData(url);
		for (const pokemon of pokemonData.results) {
			const pokemonInfo = await fetchPokemonInfo(pokemon.url);
			allPokemon.push(pokemonInfo);
			const progress = Math.round((allPokemon.length / 1302) * 100);
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			process.stdout.write(`Progress: ${progress}%`);
		}
		url = pokemonData.next;
	}

	return allPokemon;
}

async function generateJSONFile() {
	const allPokemon = await getAllPokemon();
	fs.writeFile('pokemon_data.json', JSON.stringify(allPokemon, null, 4), (err) => {
		if (err) {
			console.error('Error writing JSON file:', err);
			return;
		}
		console.log('\npokemon_data.json has been created successfully.');
	});
}

generateJSONFile();
