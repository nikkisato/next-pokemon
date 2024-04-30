import { type NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const query = searchParams.get('pokemon');
		const queryString = query?.toString().toLowerCase();

		try {
			const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${queryString}`);
			// Check if pokemon is okay when fetching data
			if (!pokemonResponse.ok) {
				throw new Error(`HTTP error! Status: ${pokemonResponse.status}`);
			}
			const pokemonData = await pokemonResponse.json();

			return Response.json({ pokemonData });
		} catch (error) {
			throw error;
		}
	} catch (error) {
		console.error('Error:', error);
		return new NextResponse('Something went wrong', { status: 500 });
	}
}
