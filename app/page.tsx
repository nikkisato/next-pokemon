'use client';

export default function Home() {
	// if (typeof document !== 'undefined') {
	// 	// Step 1: User Inputs a Pokemon Name
	// 	const formElement = document.getElementById('form') as HTMLFormElement;

	// 	if (formElement) {
	// 		// Step 2: Add an eventlistener to "listen" for a submit from the form

	// 		formElement.addEventListener('submit', async (event) => {
	// 			event.preventDefault();
	// 			// Step 3: Capture the user input value from a form and assign it to a variable variable
	// 			const pokemonName = (
	// 				document.getElementById('pokemonName') as HTMLInputElement
	// 			).value.toLowerCase();

	// 			try {
	// 				// Step 5: Send a fetch POST Call to the backend api point /api/pokemons which will then trigger a fetch to the pokemon api
	// 				// go to the route.tsx to continue the lesson
	// 				const res = await fetch('/api/pokemons', {
	// 					method: 'POST',
	// 					body: JSON.stringify({ name: pokemonName }),

	// 					headers: {
	// 						'Content-Type': 'application/json',
	// 					},
	// 				});

	// 				// Step 11: we are now back from the backend, api and if the res is NOT okay, then we shall throw an error and the http status
	// 				if (!res.ok) {
	// 					throw new Error(`HTTP error! Status: ${res.status}`);
	// 				}

	// 				// Step 12: We are also in an async function, and we are awaiting the response from the backend to be OK or status 200
	// 				const responseData = await res.json();

	// 				// Step 13: a checker to make sure we have a name within the response Object
	// 				if (responseData.name) {
	// 					// Step 14: if the object has a name, then we shall redirect the user to the pokemon page
	// 					const redirectUrl = `/pokemons/${responseData.name}`;
	// 					window.location.href = redirectUrl;
	// 				} else {
	// 					console.error('Invalid response data');
	// 				}
	// 			} catch {
	// 				new Error('Pokemon Not Valid');
	// 			}
	// 		});
	// 	}
	// }

	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const pokemonName = formData.get('pokemonName');
		formData.append('pokemonName', pokemonName);

		try {
			console.log('pokemonNameFrontend', pokemonName);
			const res = await fetch('/api/pokemons', {
				method: 'POST',
				body: formData,
				// headers: {
				// 	'Content-Type': 'application/json',
				// },
			});

			// Step 11: we are now back from the backend, api and if the res is NOT okay, then we shall throw an error and the http status
			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			// Step 12: We are also in an async function, and we are awaiting the response from the backend to be OK or status 200
			const responseData = await res.json();

			// Step 13: a checker to make sure we have a name within the response Object
			if (responseData.pokemonData.name) {
				// Step 14: if the object has a name, then we shall redirect the user to the pokemon page
				const redirectUrl = `/pokemons/${responseData.pokemonData.name}`;
				window.location.href = redirectUrl;
			} else {
				console.error('Invalid response data');
			}
		} catch {
			new Error('Pokemon Not Valid');
		}
	};

	return (
		<main className="container mx-auto">
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

			<ul id="pokemonList">
				<span>For Chris here are pokemons</span>
				<li>Pikachu</li>
				<li>Charmander</li>
				<li>Squirtle</li>
				<li>eevee</li>
				<li>snorlax</li>
				<li>Mewtwo</li>
				<li>Mew</li>
			</ul>
		</main>
	);
}

// December Lesson Context Light and Dark Mode
