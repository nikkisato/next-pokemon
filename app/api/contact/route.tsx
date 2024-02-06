export async function POST(request: Request) {
	const res = await request.json();
	console.log('RES', res);
	return Response.json({ res });
}
