export default async function Home() {
	// I'm making a fetch call here since i'm using async in the function i have to await for the fetch response
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

	// the res.ok is to make sure that the status is anything other then 200 then it will throw an error
	if (!res.ok) {
		throw new Error('Something went wrong');
	}
	const data = await res.json();
	console.log(data, 'DATA');
	return (
		<main>
			{data.results.map((pokemon) => (
				<p key={pokemon.name}>{pokemon.name}</p>
			))}
		</main>
	);
}

//How do I break this into smaller components HOMEWORK
// fetch pokemon and display on screen no user action
// fetch here https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
