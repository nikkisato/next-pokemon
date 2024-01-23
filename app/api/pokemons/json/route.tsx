import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const query = searchParams.get('pokemon');
		const queryString = query?.toString().toLowerCase();
		const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${queryString}`);

		const pokemonData = await pokemonResponse.json();

		return Response.json({ pokemonData });
	} catch (error) {
		console.error('Error:', error);
		return new NextResponse('Something went wrong', { status: 500 });
	}
}
