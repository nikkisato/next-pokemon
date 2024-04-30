// typescript Check
export interface Pokemon {
	name: string;
	id: number;
	height: number;
	weight: number;
	types: string[];
	abilities: string[];
	base_experience: number;
	stats: Record<string, number>;
	image: string;
}

// Needed a type check for Pokemon Type and Pokemon Ability
export interface PokemonType {
	type: {
		name: string;
	};
}

export interface PokemonAbility {
	ability: {
		name: string;
	};
}

export interface PokemonStats {
	//Chris Need help
	// Pokemon Stats comes in an Array of objects
	// https://stackoverflow.com/questions/25469244/how-can-i-define-an-interface-for-an-array-of-objects
	// indenexer?
	stats: [
		{
			stat: {
				stat: {
					name: string;
				};
			};
		}
	];
}
// attempted to split it up
// interface PokemonStatsMain {
// 	stats: Array<Type>;
// }
// interface Type {
// 	stat: {
// 		name: string;
// 	};
// }

export interface PokemonStat {
	base_stat: number;
	stat: {
		name: string;
	};
}
// "stats": [
//     {
//       "base_stat": 48,
//       "effort": 1,
//       "stat": {
//         "name": "hp",
//         "url": "https://pokeapi.co/api/v2/stat/1/"
//       }
//     },
// ]

// export { Pokemon, PokemonType, PokemonAbility, PokemonStats, PokemonStat };
