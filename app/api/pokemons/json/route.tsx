import { type NextRequest } from 'next/server';

export function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get('pokemon');
	// query is "hello" for /api/search?query=hello

	console.log('query', query);

	Response.json({ query });
}
