'use client';

import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import ModeWrapper from '@/components/ModeWrapper/ModeWrapper';
import Header from '@/components/Header/Header';

export default function Home() {
	return (
		<ModeWrapper>
			<main className="container mx-auto h-full">
				<Header title="Homepage" />
				<DarkModeToggle />
			</main>
		</ModeWrapper>
	);
}
