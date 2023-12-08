export async function POST(request: Request) {
	try {
		const requestBody = await request.json();
		const pokemonName = requestBody.name;
		const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
		const pokemonData = await pokemonResponse.json();

		return new Response(JSON.stringify(pokemonData), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		return new Response('Internal Server Error', { status: 500 });
	}
}
