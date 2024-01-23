'use client';

import Image from 'next/image';

interface Props {
	name: any;
}

export default function Pokemon({ name }: Props) {
	console.log('pokemonClient', name);
	return (
		<div className="pokemonCard">
			<Image
				src={name?.sprites.front_default}
				alt={name?.name}
				width={200}
				height={200}
			/>

			<h1>{name.name}</h1>
		</div>
	);
}
