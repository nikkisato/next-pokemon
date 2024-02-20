'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			aria-disabled={pending}
			disabled={pending}
			className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded aria-disabled:opacity-10"
		>
			Send Message
		</button>
	);
}
