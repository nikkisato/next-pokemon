import Navigation from '../Navigation/Navigation';
interface Props {
	title: string;
}

export default function Header({ title }: Props) {
	return (
		<div className="header h-full flex justify-evenly items-center">
			<Navigation title={title} />
		</div>
	);
}
