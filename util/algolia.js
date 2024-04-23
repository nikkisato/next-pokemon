// IMPORTANT PATH: util/algolia.js
require('dotenv').config({ path: './.env' });
const algoliasearch = require('algoliasearch');

// Retrieve Algolia App ID and Admin API Key from environment variables
const { ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY } = process.env;

if (!ALGOLIA_APP_ID || !ALGOLIA_ADMIN_API_KEY) {
	console.error('Algolia App ID or Admin API Key is missing in the environment variables.');
	process.exit(1);
}

// Connect and authenticate with your Algolia app
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);

// This creates a new Index in the algolia
const index = client.initIndex('pokemon');

console.log('index', index);

// This is the record that we are going to add to the index that we created above
// const record = { objectID: 1, name: 'test_record' };

// const record = { objectID: pokemonID, name: pokemonName };

// index
// 	.saveObject(record)
// 	.then(() => {
// 		// Search the index and print the results
// 		index.search(pokemonName).then(({ hits }) => console.log(hits[0]));
// 	})
// 	.catch((error) => {
// 		console.error('Error saving record:', error);
// 	});
