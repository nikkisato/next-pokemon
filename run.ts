import main from './script';
import getAllPaginationPokemon from './lib/getAllPaginationPokemon';

async function run() {
	try {
		const data = await getAllPaginationPokemon();
		console.log('data', data);
	} catch (error) {
		console.error('Something went Wrong');
	}
}

run();
