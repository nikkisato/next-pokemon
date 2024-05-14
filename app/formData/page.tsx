'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import PokemonOutput from '@/components/PokemonOutput/PokemonOutput';
import Header from '@/components/Header/Header';
import Form from '@/components/Form/Form';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import ModeWrapper from '@/components/ModeWrapper/ModeWrapper';

export default function formDataPage() {
	return (
		<ModeWrapper>
			<main
				id="main"
				className="container mx-auto"
			>
				<Header title="FORMDATA" />
				<DarkModeToggle />
				<ErrorMessage />
				<PokemonOutput />
				<Form />
			</main>
		</ModeWrapper>
	);
}
