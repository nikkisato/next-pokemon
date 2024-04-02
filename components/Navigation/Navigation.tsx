interface Props {
	title: string;
	className?: string;
}

export default function Navigation({ title, className }: Props) {
	return (
		<>
			<h1 className={className}>{title}</h1>
			<nav className="flex">
				<ul>
					<li>
						<a
							className="link"
							href="/"
						>
							FormData
						</a>
					</li>
					<li>
						<a
							className="link"
							href="/json"
						>
							JSON
						</a>
					</li>

					<li>
						<a
							className="link"
							href="/contactServer"
						>
							Contact Server
						</a>
					</li>
					<li>
						<a
							className="link"
							href="/contactApi"
						>
							Contact Api
						</a>
					</li>
					<li>
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
