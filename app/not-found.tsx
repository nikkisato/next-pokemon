//https://github.com/vercel/next.js/issues/49281

import { notFound } from 'next/navigation';

export default function NotFound() {
	return notFound();
}
