interface Props {
	title: string;
}

export default function Header({ title }: Props) {
	return (
		<div className="header h-full flex justify-evenly items-center">
			<a
				className="link"
				href="/"
			>
				FormData
			</a>
			<h1>{title}</h1>
			<a
				className="link"
				href="/json"
			>
				JSON
			</a>
		</div>
	);
}
