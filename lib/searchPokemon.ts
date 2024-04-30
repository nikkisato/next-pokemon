require('dotenv').config({ path: './.env' });
import algoliasearch from 'algoliasearch';

async function searchPokemon(name: string) {
	// Retrieve Algolia App ID and Admin API Key from environment variables
	const { ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY } = process.env;

	if (!ALGOLIA_APP_ID || !ALGOLIA_ADMIN_API_KEY) {
		console.error('Algolia App ID or Admin API Key is missing in the environment variables.');
		process.exit(1);
	}

	const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);

	// This creates a new Index in the algolia
	const index = client.initIndex('pokemonDatabase');

	const queryName = name.toLowerCase();

	const res = await index.search(queryName);

	// if (!res.ok) {
	// 	console.log('res.status Search Pokemon', res.status);
	// 	return [];
	// }

	// const data = await res.json();

	// return [data];

	return res;
}

export default searchPokemon;
