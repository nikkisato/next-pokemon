'use client';

//TODO Extracting the form into a component

import Form from '../components/Form/Form';
import PokemonClient from '@/components/PokemonClient';
import { usePokemonContext } from '@/context/pokemonContext';

export default function Home() {
	const { pokemon, errorMessage, setPokemonData, setError } = usePokemonContext();

	return (
		<main className="container mx-auto">
			{errorMessage && <p>{errorMessage}</p>}
			{pokemon && (
				<div className="pokemonContainer">
					<PokemonClient name={pokemon} />
				</div>
			)}
			<Form />
		</main>
	);
}
