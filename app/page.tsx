import getPokemon from '../lib/getPokemon';

export default async function Home() {
	const data = await getPokemon('pikachu');

	return (
		<main>
			<img
				src={data.sprites.front_default}
				alt={data.name}
			/>
			<h1>{data.name}</h1>
		</main>
	);
}

//HOW TO handle errors in app router HOMEWORK
// https://nextjs.org/docs/advanced-features/custom-error-page

// use Image next HOMEWORK
