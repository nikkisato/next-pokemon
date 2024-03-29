'use client';

import Form from '@/components/Form/Form';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import ModeWrapper from '@/components/ModeWrapper/ModeWrapper';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import PokemonOutput from '@/components/PokemonOutput/PokemonOutput';
import Header from '@/components/Header/Header';

export default function Home() {
	return (
		<ModeWrapper>
			<main className="container mx-auto">
				<Header title="FORMDATA" />
				<DarkModeToggle />
				<ErrorMessage />
				<PokemonOutput />
				<Form />
			</main>
		</ModeWrapper>
	);
}
