import getPokemon from '../lib/getPokemon';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Home() {
	const data = await getPokemon('pikachu');

	if (!data) {
		return notFound();
	}

	return (
		<main>
			<Image
				src={data.sprites.front_default}
				alt={data.name}
				width={200}
				height={200}
			/>
			<h1>{data.name}</h1>
		</main>
	);
}

//HOW TO handle errors in app router HOMEWORK
// https://nextjs.org/docs/advanced-features/custom-error-page

//https://nextjs.org/docs/app/building-your-application/routing
