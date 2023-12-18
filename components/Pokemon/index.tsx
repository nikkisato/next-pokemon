// https://nextjs.org/docs/app/building-your-application/rendering/server-components
'use server';

import { notFound } from 'next/navigation';
import getPokemon from '../../lib/getPokemon';
import Image from 'next/image';

interface Props {
	slug: string;
}
//create a client Component that accepts props

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
