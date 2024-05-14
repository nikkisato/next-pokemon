'use client';

import FormJson from '@/components/FormJson/FormJson';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import ModeWrapper from '@/components/ModeWrapper/ModeWrapper';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import PokemonOutput from '@/components/PokemonOutput/PokemonOutput';
import Header from '@/components/Header/Header';
export default function Home() {
	// Form action on the server?
	// set up form action on formData api endpoint https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms
	// mocking the formData and then submitting the form

	// json form two way binding On change

	//implement Json Form on a new page
	return (
		<ModeWrapper>
			<main
				id="main"
				className="container mx-auto"
			>
				<Header title="JSON" />
				<DarkModeToggle />
				<ErrorMessage />
				<PokemonOutput />
				<FormJson />
			</main>
		</ModeWrapper>
	);
}
