import { PokemonCreator } from "./abstract_pokemon_creator";
import { FireType } from "./fire_type";
import { Pokemon } from "./interface_pokemon";
import { PokemonType } from "./types";

/**
 * Concrete implementation of the class TwoDimensionalFigureCreator that
 * returns P objects through the factory method. It can be observed
 * how the concrete implementation of the factory method still returns
 * a TwoDimensionalFigure object, which is an abstract type
 */
export class FireTypeCreator extends PokemonCreator {
    /**
     * constructor that calls the constructor of the abstract parent class that generates the pokemons
     * @param name 
     * @param health 
     * @param damage 
     * @param pokemonType 
     */
    constructor(private readonly name: string, private health: number, private damage: number,
        private pokemonType: PokemonType) {
      super();
    }

    /**
     * factorial method of the class in charge of returning the instantance of the object
     * @returns 
     */
    public factoryMethod(): Pokemon {
      return new FireType(this.name, this.health, this.damage, this.pokemonType);
    }
  }