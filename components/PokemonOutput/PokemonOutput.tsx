import { usePokemonContext } from '@/context/pokemonContext';
import PokemonClient from '@/components/PokemonClient';

export default function PokemonOutput() {
	const { pokemon, errorMessage, setPokemonData, setError } = usePokemonContext();

	console.log('pokemon', pokemon);

	return (
		<>
			{pokemon && (
				<div className="pokemonContainer">
					<PokemonClient name={pokemon} />
				</div>
			)}
		</>
	);
}
