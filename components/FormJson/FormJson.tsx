'use client';
import React, { useRef, useState } from 'react';
import { usePokemonContext } from '@/context/pokemonContext';

export default function FormJson() {
	const { setPokemonData, setError } = usePokemonContext();
	const formEl = useRef<HTMLFormElement>(null);

	const [pokemonName, setPokemonName] = useState<string>('');

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		//controlled input
		//right now i have uncontrolled input

		const value = event.target.value;
		setPokemonName(value);
	};

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	
		try {
			const res = await fetch(`/api/pokemons/json?pokemon=${pokemonName}`);

			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			const responseData = await res.json();

			if (responseData.pokemonData) {
				setPokemonData(responseData.pokemonData);

				if (formEl.current !== null) {
					formEl.current.reset();
				}
			} else {
				console.error('Invalid response data');
			}
		} catch (error) {
			const err = error as Error;
			setError(err.message);
		}
	};
	return (
		<form
			id="form"
			ref={formEl}
			className="max-w-sm container mx-auto h-screen w-screen flex flex-col justify-center"
			onSubmit={onSubmit}
		>
			<div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label
						className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
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
						onChange={onChangeHandler}
						value={pokemonName}
					/>
				</div>
			</div>

			<div className="md:flex md:items-center">
				<div className="md:w-1/3"></div>
				<div className="md:w-2/3">
					<button
						type="submit"
						className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
					>
						CATCH YOUR POKEMON
					</button>
				</div>
			</div>
		</form>
	);
}
