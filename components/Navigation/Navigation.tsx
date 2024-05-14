import SkipLink from '../SkipLink';

interface Props {
	title: string;
	className?: string;
}

export default function Navigation({ title, className }: Props) {
	return (
		<>
			<h1 className={className}>{title}</h1>
			<SkipLink />
			<nav className="flex justify-evenly">
				<ul
					id="navigation"
					className="flex justify-evenly mx-2"
				>
					<li className="mx-2">
						<a
							className="link"
							href="/formData"
						>
							FormData
						</a>
					</li>
					<li className="mx-2">
						<a
							className="link"
							href="/json"
						>
							JSON
						</a>
					</li>

					<li className="mx-2">
						<a
							className="link"
							href="/contactServer"
						>
							Contact Server
						</a>
					</li>
					<li className="mx-2">
						<a
							className="link"
							href="/contactApi"
						>
							Contact Api
						</a>
					</li>
					<li className="mx-2">
						<a
							className="link"
							href="/pokemons"
						>
							Pokemons List
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
