export async function POST(request: Request) {
	const res = await request.json();
	console.log('resBackend', res);

	return await fetch(`https://pokeapi.co/api/v2/pokemon/${res}`);
}
