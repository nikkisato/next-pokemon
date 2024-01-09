import { useModeContext } from '@/context/darkModeContext';

export default function DarkModeToggle() {
	const { mode, setMode } = useModeContext();
	//style later

	return (
		<>
			<div>
				<button
					onClick={() => {
						setMode('light');
					}}
					disabled={mode === 'light'}
				>
					Light Mode
				</button>
				<button
					onClick={() => {
						setMode('dark');
					}}
					disabled={mode === 'dark'}
				>
					Dark mode
				</button>
			</div>
		</>
	);
}
