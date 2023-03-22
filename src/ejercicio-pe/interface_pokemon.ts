import { PokemonType } from "./types";

/**
 * Interface that declares all the common functionality that concrete
 * Pokemon objects have to implement
 */
export interface Pokemon {
    getName(): string;
    getHealth(): number;
    getDamage(): number;
    getType(): PokemonType;
}