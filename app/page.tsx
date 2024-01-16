'use client';

import Form from '../components/Form/Form';
import PokemonClient from '@/components/PokemonClient';
import { usePokemonContext } from '@/context/pokemonContext';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import ModeWrapper from '@/components/ModeWrapper/ModeWrapper';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import PokemonOutput from '@/components/PokemonOutput/PokemonOutput';

export default function Home() {
	const { pokemon, errorMessage, setPokemonData, setError } = usePokemonContext();

	// Extra Error Handling into components
	// use Dark mode https://tailwindcss.com/docs/dark-mode
	// Extra Body into a React Component that takes children
	// Dark Mode and Light Mode, set on the body for light mode and dark mode

	return (
		<ModeWrapper>
			<main className="container mx-auto">
				<DarkModeToggle />
				<ErrorMessage />
				<PokemonOutput />
				<Form />
			</main>
		</ModeWrapper>
	);
}
