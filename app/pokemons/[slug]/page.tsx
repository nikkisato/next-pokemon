import { notFound } from 'next/navigation';
import getPokemon from '../../../lib/getPokemon';

interface Params {
	params: { slug: string };
}

export default async function Page({ params }: Params) {
	const data = await getPokemon(params.slug);

	if (!data) {
		return notFound();
	}

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

