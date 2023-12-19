'use server';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		// Step 6: we are in a async function , and also a try block, waiting for the request from the input form from the front end
		// const requestBody = await request.json();
		const requestBody = await request.formData();

		// Step 7: we got the request, in JSON format, and now we just need to extract (or parse) the name from the object
		// const pokemonName = requestBody.name;
		const pokemonName = requestBody.get('pokemonName');

		const pokemonNameString = pokemonName?.toString().toLowerCase();

		// Step 8: we now have the name in a variable, we shall pass it in a fetch call to the pokemon api
		const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameString}`);

		// Step 9: since we are still in the async function we can use the await method and await the response from the pokemon api
		const pokemonData = await pokemonResponse.json();
		console.log('pokemonDataBACKEND', pokemonData);

		return Response.json({ pokemonData });

		// return redirect(`http://localhost:3000/pokemons/${pokemonData.name}`);
	} catch (error) {
		// Not a step but a catch all for errors
		console.error('Error:', error);
		return new NextResponse('Something went wrong', { status: 500 });
	}
}
