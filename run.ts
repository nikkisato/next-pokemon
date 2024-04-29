import main from './script';
import getAllPaginationPokemon from './lib/getAllPaginationPokemon';

function run() {
	const data = getAllPaginationPokemon();
	console.log('data', data);
	// console.log('Hello World!');
}

run();
