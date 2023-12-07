// https://nextjs.org/docs/app/building-your-application/rendering/server-components
'use server';

import { notFound } from 'next/navigation';
import getPokemon from '../../lib/getPokemon';
import Image from 'next/image';

interface Props {
	slug: string;
}

export default async function Pokemon({ slug }: Props) {
	const data = await getPokemon(slug);

	if (!data) {
		return notFound();
	}
	return (
		<div>
			<Image
				src={data.sprites.front_default}
				alt={data.name}
				width={200}
				height={200}
			/>

			<h1>{data.name}</h1>
		</div>
	);
}

// create a form to add a pokemon to the list
// send data to back end api route
// in the api route that will make request to pokeapi
// send data back to front end
// use json
// fetch api
//https://nextjs.org/docs/app/building-your-application/routing/route-handlers
