export async function POST(request: Request) {
	const res = await request.json();
	console.log('RES', res);

	await new Promise((resolve, reject) => {
		setTimeout(resolve, 3000);
	});

	return Response.json({ res });
}
