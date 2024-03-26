import { Suspense } from 'react';
import PokemonList from '@/components/PokemonList';

export default async function Page() {
	return (
		<main className="container mx-auto">
			<h1 className="text-center py-5">Pokemon List</h1>

			<div className="mx-auto py-4 flex justify-center">
				<label htmlFor="searchPokemon">Search Pokemon:</label>
				<input
					type="text"
					id="searchPokemon"
					name="searchPokemon"
					placeholder="Search Pokemon"
					className="border-black border-2	"
				/>
			</div>

			<div className="container mx-auto">
				<Suspense fallback="Loading">
					<PokemonList />
				</Suspense>
			</div>
		</main>
	);
}
