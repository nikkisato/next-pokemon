export async function GET(request: Request) {
	try {
		console.log('HELLO FROM THE BACKEND');
		console.log('GET request received:', request.url);

		// Step 6: we are in a async function , and also a try block, waiting for the request from the input form from the front end
		const requestBody = await request.json();
		// Step 7: we got the request, in JSON format, and now we just need to extract (or parse) the name from the object
		const pokemonName = requestBody.name;
		// Step 8: we now have the name in a variable, we shall pass it in a fetch call to the pokemon api
		const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
		// Step 9: since we are still in the async function we can use the await method and await the response from the pokemon api
		const pokemonData = await pokemonResponse.json();

		// Step 10: had a bit of troubles here, i had to return a Response() with JSON stringify method to get the data to the front end
		// Would like more clarity on this one
		return new Response(JSON.stringify(pokemonData), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		// Not a step but a catch all for errors
		console.error(error);
		return new Response('Internal Server Error', { status: 500 });
	}
}
