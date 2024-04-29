import main from './script';
import getAllPaginationPokemon from './lib/getAllPaginationPokemon';

function run() {
	try {
		const data = getAllPaginationPokemon();
		console.log('data', data);
	} catch (error) {
		console.error('Something went Wrong');
	}
}

run();
