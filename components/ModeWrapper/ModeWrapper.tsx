import { useModeContext } from '@/context/darkModeContext';

interface Props {
	children: React.ReactNode;
}

export default function Body({ children }: Props) {
	const { mode, setMode } = useModeContext();

	return <div className={mode}>{children}</div>;
}
