'use client';

export default function Home() {
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('submitted');
		const inputElement = document.querySelector('#pokemonName');

		if (inputElement) {
			const inputValue = inputElement.value;

			// This passes to the backend
			//https://medium.com/@louisklein71/sending-data-between-the-frontend-and-backend-with-encodeuricomponent-dc74024ca9d0#:~:text=%E2%80%9CencodeURIComponent%E2%80%9D%20is%20a%20built%2D,send%20from%20frontend%20to%20backend.&text=using%20Flask%20API%20as%20an,posted%20to%20a%20user%20database.
			const encodedInput = encodeURIComponent(inputValue);
			console.log(encodedInput);

			try {
				const url = `/api/catchPokemon=${encodedInput}`;
				fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ pokemonName: inputValue }),
				})
					.then((response) => response.json())
					.then((data) => console.log(data));
			} catch {
				console.error('Something went wrong fetching');
			}
		}
	};

	const handleChange = (event) => {
		event.preventDefault();
		console.log(event.target.value);
	};

	return (
		<main className="container mx-auto">
			<form
				className="max-w-sm container mx-auto h-screen w-screen flex flex-col justify-center"
				onSubmit={handleSubmit}
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
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="md:flex md:items-center">
					<div className="md:w-1/3"></div>
					<div className="md:w-2/3">
						<button
							className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
							type="submit"
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
