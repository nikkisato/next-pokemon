'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import PokemonClient from '@/components/PokemonClient';

// uncontrolled and controlled
// controlled save input value in state
//save error to state and display the error message
// second method is to save input value to state and then use that state to send to backend

// onSubmitHandler
export default function Home() {
	const [pokemon, setPokemon] = useState<null | { name: string }>(null);
	const [errorMessage, setErrorMessage] = useState('');

	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const pokemonName = formData.get('pokemonName');

		try {
			console.log('pokemonNameFrontend', pokemonName);
			const res = await fetch('/api/pokemons', {
				method: 'POST',
				body: formData,
			});

			// Step 11: we are now back from the backend, api and if the res is NOT okay, then we shall throw an error and the http status
			if (!res.ok) {
				console.log('Somethings WRONG');
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			// Step 12: We are also in an async function, and we are awaiting the response from the backend to be OK or status 200
			const responseData = await res.json();

			// Step 13: a checker to make sure we have a name within the response Object
			if (responseData.pokemonData) {
				setPokemon(responseData.pokemonData);
				// redirect(`http://localhost:3000/pokemons/${responseData.pokemonData.name}`);

				const resetForm = document.getElementById('form');
				if (resetForm !== null || resetForm !== undefined) {
					resetForm.onreset();
				}
			} else {
				console.error('Invalid response data');
			}
		} catch (error) {
			const err = error as Error;
			setErrorMessage(err.message);
		}
	};

	return (
		<main className="container mx-auto">
			{errorMessage && <p>{errorMessage}</p>}
			{pokemon && (
				<div className="pokemonContainer">
					<PokemonClient name={pokemon} />
				</div>
			)}
			<form
				id="form"
				className="max-w-sm container mx-auto h-screen w-screen flex flex-col justify-center"
				onSubmit={onSubmit}
			>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							Pokemon Name
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="pokemonName"
							type="text"
							placeholder="Pokemon"
							name="pokemonName"
							required
						/>
					</div>
				</div>

				<div className="md:flex md:items-center">
					<div className="md:w-1/3"></div>
					<div className="md:w-2/3">
						<button
							type="submit"
							className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
						>
							CATCH YOUR POKEMON
						</button>
					</div>
				</div>
			</form>
			{/* <ul id="pokemonList">
				<span>For Chris here are pokemons</span>
				<li>Pikachu</li>
				<li>Charmander</li>
				<li>Squirtle</li>
				<li>eevee</li>
				<li>snorlax</li>
				<li>Mewtwo</li>
				<li>Mew</li>
			</ul> */}
		</main>
	);
}
