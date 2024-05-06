'use client';

export default function SkipLink() {
	return (
		<a
			id="skip-link"
			href="#main"
			type="button"
			className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded aria-disabled:opacity-10"
		>
			Skip To Main Content
		</a>
	);
}
