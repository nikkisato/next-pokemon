//I got this from the https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// the params was my idea to get the slug from the url
// export async function GET({ params }: { params: { slug: string } }) {
// 	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
// 	const data = await res.json();

// 	console.log('data', data);
// 	return Response.json({ data });
// }

// Form Data
export async function POST(request: Request) {
	const formData = await request.formData();
	console.log('formData', formData);
	const pokemonName = formData.get('pokemonName');
	console.log('pokemonName', pokemonName);

	return Response.json({ pokemonName });
}
