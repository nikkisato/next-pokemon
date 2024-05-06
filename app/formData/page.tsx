import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import PokemonOutput from '@/components/PokemonOutput/PokemonOutput';
import Header from '@/components/Header/Header';
import Form from '@/components/Form/Form';

export default function formDataPage() {
	return (
		<main className="container mx-auto">
			<Header title="FORMDATA" />
			<ErrorMessage />
			<PokemonOutput />
			<Form />
		</main>
	);
}
