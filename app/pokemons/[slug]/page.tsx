import Pokemon from '../../../components/Pokemon';
import { Suspense } from 'react';
interface Params {
	params: { slug: string };
}
// Suspense can add loading spinner? within the fallback props
export default async function Page({ params }: Params) {
	return (
		<main id="main">
			<h1>My Pokemon</h1>
			<Suspense fallback="Loading">
				<Pokemon slug={params.slug} />
			</Suspense>
		</main>
	);
}

//https://nextjs.org/docs/app/building-your-application/routing/route-handlers
