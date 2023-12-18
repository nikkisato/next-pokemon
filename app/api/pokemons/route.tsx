import { redirect } from 'next/navigation';

export async function POST(request: Request) {
	try {
		// Step 6: we are in a async function , and also a try block, waiting for the request from the input form from the front end
		// const requestBody = await request.json();
		const requestBody = await request.formData();

		// Step 7: we got the request, in JSON format, and now we just need to extract (or parse) the name from the object
		// const pokemonName = requestBody.name;
		const pokemonName = requestBody.get('pokemonName');

		const pokemonNameString = pokemonName?.toString().toLowerCase();
		console.log('pokemonNameBackend', pokemonNameString);

		// Step 8: we now have the name in a variable, we shall pass it in a fetch call to the pokemon api
		const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameString}`);

		// Step 9: since we are still in the async function we can use the await method and await the response from the pokemon api
		const pokemonData = await pokemonResponse.json();

		console.log('pokemonDataBackend', pokemonData);

		// Step 10: had a bit of troubles here, i had to return a Response() with JSON stringify method to get the data to the front end
		// Would like more clarity on this one
		// return Response.json({ pokemonData });

		// ⨯ Error: No response is returned from route handler '/Users/nikkisato/github-code/next-pokemon/app/api/pokemons/route.tsx'. Ensure you return a `Response` or a `NextResponse` in all branches of your handler.

		redirect(`http://localhost:3000/pokemons/${pokemonData.name}`);
	} catch (error) {
		// Not a step but a catch all for errors
		console.error(error);
	}
}

// try to redirect to the /pokemons/
