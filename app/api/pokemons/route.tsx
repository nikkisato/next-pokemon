export async function POST(request: Request) {
	try {
		const requestBody = await request.json();
		const pokemonName = requestBody.name;

		const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

		if (!pokemonResponse.ok) {
			// Handle the 404 error
			if (pokemonResponse.status === 404) {
				return new Response('Pokemon Not Found', { status: 404 });
			}

			throw new Error(`Failed to fetch Pokémon data. Status: ${pokemonResponse.status}`);
		}

		const pokemonData = await pokemonResponse.json();
		console.log('Pokemon Data:', pokemonData);

		return new Response(JSON.stringify(pokemonData), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.log('Internal Server Error');
		return new Response('Internal Server Error', { status: 500 });
	}
}
