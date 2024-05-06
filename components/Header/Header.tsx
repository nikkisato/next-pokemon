import Navigation from '../Navigation/Navigation';
interface Props {
	title: string;
}

export default function Header({ title }: Props) {
	return (
		<div className="header h-full flex flex-col align-center text-center">
			<Navigation title={title} />
		</div>
	);
}
