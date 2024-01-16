import { usePokemonContext } from '@/context/pokemonContext';

export default function ErrorMessage() {
	const { pokemon, errorMessage, setPokemonData, setError } = usePokemonContext();

	return <>{errorMessage && <p>{errorMessage}</p>}</>;
}
