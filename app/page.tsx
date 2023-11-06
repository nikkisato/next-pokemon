async function getData() {
	// I'm making a fetch call here since i'm using async in the function i have to await for the fetch response
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

	// Just pikachu and image
	// const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

	// the res.ok is to make sure that the status is anything other then 200 then it will throw an error
	if (!res.ok) {
		throw new Error('Something went wrong');
	}
	return res.json();
}

export default async function Home() {
	const data = await getData();

	return (
		<main>
			{data.results.map((pokemon) => (
				<p key={pokemon.name}>{pokemon.name}</p>
			))}
			{/* // Pikachu image with name
			<img
				src={data.sprites.front_default}
				alt={data.name}
			/>
			<h1>{data.name}</h1> */}
		</main>
	);
}

//How do I break this into smaller components HOMEWORK
// fetch pokemon and display on screen no user action
// fetch here https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
