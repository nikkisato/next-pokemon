'use client';

import Form from '../components/Form/Form';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import ModeWrapper from '@/components/ModeWrapper/ModeWrapper';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import PokemonOutput from '@/components/PokemonOutput/PokemonOutput';

export default function Home() {
	// add two more pages
	// take care of data
	// create a new api endpoint that accepts json data
	// Form action on the server?
	// set up form action on formData api endpoint https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms
	// mocking the formData and then submitting the form

	// json form two way binding On change

	//implement Json Form on a new page
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
