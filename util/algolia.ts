// IMPORTANT PATH: util/algolia.js
require('dotenv').config({ path: './.env' });
import algoliasearch from 'algoliasearch';
import getAllPokemon from '@/lib/getAllPokemon';

async function initAlgolia() {
	// Retrieve Algolia App ID and Admin API Key from environment variables
	const { ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY } = process.env;

	if (!ALGOLIA_APP_ID || !ALGOLIA_ADMIN_API_KEY) {
		console.error('Algolia App ID or Admin API Key is missing in the environment variables.');
		process.exit(1);
	}

	// TODO: also create Type for Pokemon in transformPokemon

	// If I finish build the search
	// algolia create a new index
	// try and get the pokemon data but NOT Saving to a JSON
	// https://www.algolia.com/doc/api-reference/api-methods/partial-update-objects/
	// Connect and authenticate with your Algolia app
	const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);

	// This creates a new Index in the algolia
	const index = client.initIndex('pokemon1');

	// This is the record that we are going to add to the index that we created above
	// const record = { objectID: 1, name: 'test_record' };

	const data = await getAllPokemon();
	// Extra the map into a separate function

	const records = transformPokemon(data);
	//typescripts Check

	// saving to algolia
	// index.saveObjects(array objects)
	// index.saveObjects(array objects, {
	//     autoGenerateObjectIDIfNotExist: boolean
	//     // Any other requestOptions
	//   })

	// index a new index
	await index.saveObjects(records);
	// unsure what saveObjects returns

	// Create a cron job to fetch and update
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
	name: string;
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
function transformPokemon(data: any[]): Pokemon[] {
	const records = data.map((pokemon) => {
		//single pokemon
		return {
			name: pokemon.name,
			id: pokemon.id,
			height: pokemon.height,
			weight: pokemon.weight,
			types: pokemon.types.map((t: PokemonType) => t.type.name),
			abilities: pokemon.abilities.map((a: PokemonAbility) => a.ability.name),
			base_experience: pokemon.base_experience,
			stats: pokemon.stats.reduce((stats, stat: PokemonStat) => {
				stats[stat.stat.name] = stat.base_stat;
				return stats;
			}),
			image: pokemon.sprites.other['official-artwork'].front_default,
		};
	});
	return records;
}
