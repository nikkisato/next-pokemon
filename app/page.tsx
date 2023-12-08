'use client';

export default function Home() {
	if (typeof document !== 'undefined') {
		const formElement = document.getElementById('form') as HTMLFormElement;

		if (formElement) {
			formElement.addEventListener('submit', async (event) => {
				event.preventDefault();
				// const formData = new FormData(formElement);
				// const pokemonName = formData.get('pokemonName');

				const pokemonName = (document.getElementById('pokemonName') as HTMLInputElement).value;

				try {
					console.log('pokemonNameFRONT', pokemonName);
					//something goes wrong here
					const res = await fetch('/api/pokemons', {
						method: 'POST',
						body: JSON.stringify({ name: pokemonName }),

						headers: {
							'Content-Type': 'application/json',
						},
					});

					if (!res.ok) {
						throw new Error(`HTTP error! Status: ${res.status}`);
					}

					const responseData = await res.json();
					console.log('responseDataFRONt', responseData);

					if (responseData.name) {
						console.log('responseData.name', responseData.name);
						const redirectUrl = `http://localhost:3000/pokemons/${responseData.name}`;
						window.location.href = redirectUrl;
					} else {
						console.error('Invalid response data');
					}
				} catch {
					new Error('Pokemon Not Valid');
				}
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
