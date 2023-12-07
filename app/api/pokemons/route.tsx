//I got this from the https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// the params was my idea to get the slug from the url
// export async function GET({ params }: { params: { slug: string } }) {
// 	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
// 	const data = await res.json();

// 	console.log('data', data);
// 	return Response.json({ data });
// }

export async function POST(request: Request) {
	console.log('HELLO');
	const res = await request.json();

	console.log('resBACKEND', res);

	const resFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${res}`);

	console.log('resFETCHBACKEND', resFetch);
	return Response.json({ resFetch });
}
