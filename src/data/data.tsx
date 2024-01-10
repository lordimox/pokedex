export type Ability = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

export type Move = {
    name: string;
    url: string;
}

export type Sprites = {
    front_default: string;
}

export type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export type PokeType = {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export type Pokemon = {
    abilities: Ability[];
    base_experience: number;
    height: number;
    id: number;
    moves: Move[];
    name: string;
    order: number;
    sprites: Sprites;
    stats: Stat[];
    types: PokeType[];
    weight: number;
    url: string;
}