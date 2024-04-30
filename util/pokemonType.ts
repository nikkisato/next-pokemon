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

export interface PokemonPagination {
	abilities: {
		ability: {
			name: string;
		};
		is_hidden: boolean;
		slot: number;
	}[];
	base_experience: number;
	forms: {
		name: string;
		url: string;
	}[];
	height: number;
	weight: number;
	id: number;
	image: string;
	name: string;
	types: {
		slot: number;
		type: {
			name: string;
		};
	}[];
	stats: PokemonStat[];
}

/*
abilities: [
    { ability: [Object], is_hidden: false, slot: 1 },
    { ability: [Object], is_hidden: true, slot: 3 }
  ],
  base_experience: 178,
  cries: {
    latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/15.ogg',
    legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/15.ogg'
  },
  forms: [
    {
      name: 'beedrill',
      url: 'https://pokeapi.co/api/v2/pokemon-form/15/'
    }
  ],
  game_indices: [
    { game_index: 114, version: [Object] },
    { game_index: 114, version: [Object] },
    { game_index: 114, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] },
    { game_index: 15, version: [Object] }
  ],
  height: 10,
  held_items: [ { item: [Object], version_details: [Array] } ],
  id: 15,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/15/encounters',
  moves: [
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] },
    { move: [Object], version_group_details: [Array] }
  ],
  name: 'beedrill',
  order: 19,
  past_abilities: [],
  past_types: [],
  species: {
    name: 'beedrill',
    url: 'https://pokeapi.co/api/v2/pokemon-species/15/'
  },
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png',
    back_female: null,
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/15.png',
    back_shiny_female: null,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    front_female: null,
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png',
    front_shiny_female: null,
    other: {
      dream_world: [Object],
      home: [Object],
      'official-artwork': [Object],
      showdown: [Object]
    },
    versions: {
      'generation-i': [Object],
      'generation-ii': [Object],
      'generation-iii': [Object],
      'generation-iv': [Object],
      'generation-v': [Object],
      'generation-vi': [Object],
      'generation-vii': [Object],
      'generation-viii': [Object]
    }
  },
  stats: [
    { base_stat: 65, effort: 0, stat: [Object] },
    { base_stat: 90, effort: 2, stat: [Object] },
    { base_stat: 40, effort: 0, stat: [Object] },
    { base_stat: 45, effort: 0, stat: [Object] },
    { base_stat: 80, effort: 1, stat: [Object] },
    { base_stat: 75, effort: 0, stat: [Object] }
  ],
  types: [ { slot: 1, type: [Object] }, { slot: 2, type: [Object] } ],
  weight: 295
}
*/

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

export type Stat = {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
};
export interface PokemonStats {
	stats: PokemonStat[];
}

export interface PokemonStat {
	base_stat: number;
	stat: {
		name: string;
	};
}
