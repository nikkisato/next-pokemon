'use client';

export default function Home() {
	if (typeof document !== 'undefined') {
		const formElement = document.getElementById('form') as HTMLFormElement;

		if (formElement) {
			formElement.addEventListener('submit', async (event) => {
				event.preventDefault();
				const formData = new FormData(formElement);
				const pokemonName = formData.get('pokemonName');
				console.log('pokemonNameFRONT', pokemonName);
				const res = await fetch('/api/pokemons', {
					method: 'POST',
					body: JSON.stringify(pokemonName),
				});
				console.log('resFront', res);
				const data = await res.json();
				console.log('dataFront', data);
			});
		}
	}

	return (
		<main className="container mx-auto">
			<form
				id="form"
				className="max-w-sm container mx-auto h-screen w-screen flex flex-col justify-center"
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
							placeholder="Pikachu"
							name="pokemonName"
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
		</main>
	);
}

// December Lesson Context Light and Dark Mode
