// IMPORTANT PATH: util/algolia.js
require('dotenv').config({ path: './.env' });
import algoliasearch from 'algoliasearch';
import getAllPaginationPokemon from '../lib/getAllPaginationPokemon';

async function initAlgolia() {
	// Retrieve Algolia App ID and Admin API Key from environment variables
	const { ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY } = process.env;

	if (!ALGOLIA_APP_ID || !ALGOLIA_ADMIN_API_KEY) {
		console.error('Algolia App ID or Admin API Key is missing in the environment variables.');
		process.exit(1);
	}

	// TODO: also create Type for Pokemon in transformPokemon
	// TODO: got stuck on Stats

	// If I finish build the search
	// algolia create a new index
	// try and get the pokemon data but NOT Saving to a JSON
	// https://www.algolia.com/doc/api-reference/api-methods/partial-update-objects/
	// Connect and authenticate with your Algolia app

	const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);

	// This creates a new Index in the algolia
	const index = client.initIndex('pokemonDatabase');

	// This is the record that we are going to add to the index that we created above
	// const record = { objectID: 1, name: 'test_record' };

	const data = await getAllPaginationPokemon();
	// Extra the map into a separate function

	// const records = await transformPokemon(data);

	// saving to algolia
	await index.saveObjects(data, {
		autoGenerateObjectIDIfNotExist: true,
	});

	//TODO: Create a cron job to fetch and update
}

initAlgolia()
	.then(() => {
		console.log('DONE');
	})
	.catch((error) => {
		console.error(error.message);
	});

// typescript Check
interface Pokemon {
	name2: string;
	id: number;
	height: number;
	weight: number;
	types: string[];
	abilities: string[];
	base_experience: number;
	stats: Record<string, number>;
	image: string;
}

// Needed a type check for Pokemon Type and Pokemon Ability
interface PokemonType {
	type: {
		name: string;
	};
}

interface PokemonAbility {
	ability: {
		name: string;
	};
}

interface PokemonStats {
	//Chris Need help
	// Pokemon Stats comes in an Array of objects
	// https://stackoverflow.com/questions/25469244/how-can-i-define-an-interface-for-an-array-of-objects
	// indenexer?
	stats: [
		{
			stat: {
				stat: {
					name: string;
				};
			};
		}
	];
}
// attempted to split it up
// interface PokemonStatsMain {
// 	stats: Array<Type>;
// }
// interface Type {
// 	stat: {
// 		name: string;
// 	};
// }

interface PokemonStat {
	base_stat: number;
	stat: {
		name: string;
	};
}
// "stats": [
//     {
//       "base_stat": 48,
//       "effort": 1,
//       "stat": {
//         "name": "hp",
//         "url": "https://pokeapi.co/api/v2/stat/1/"
//       }
//     },
// ]

// Pokemon[] returns an array of pokemons
// function transformPokemon(data: any[]): Pokemon[] {
// 	const records = data.map((pokemon) => {

// 		return {
// 			name2: pokemon?.name,
// 			id: pokemon.id,
// 			height: pokemon.height,
// 			weight: pokemon.weight,
// 			types: pokemon.types.map((t: PokemonType) => t.type?.name),
// 			abilities: pokemon.abilities.map((a: PokemonAbility) => a.ability?.name),
// 			base_experience: pokemon.base_experience,
// 			stats: stats,
// 			image: pokemon.sprites.other['official-artwork'].front_default,
// 		};
// 	});
// 	return records;
// }
