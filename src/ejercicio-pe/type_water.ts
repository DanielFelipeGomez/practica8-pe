import { Pokemon } from "./interface_pokemon";
import { PokemonType } from "./types";

/**
 * Class that provides a concrete implementation of a TwoDimensionalFigure object
 */
export class WaterType implements Pokemon {
  /**
     * class constructor that models a water type pokemon
     * @param name 
     * @param health 
     * @param damage 
     * @param pokemonType water, fire, rock , dark, ...
     */
    constructor(private readonly name: string, private health: number, private damage: number,
        private pokemonType: PokemonType) {
    }
  
    /**
     * method that returns the name of the pokemon
     * @returns name of the pokemon
     */
    getName() {
      return this.name;
    }

    /**
     * method that returns the damage of the pokemon
     * @returns name of the pokemon
     */
    getDamage() {
      return this.damage;
    }

    /**
     * method that returns the health of the pokemon
     * @returns name of the pokemon
     */
    getHealth() {
      return this.health;
    }

    /**
     * method that returns the type of the pokemon
     * @returns name of the pokemon
     */
    getType(): PokemonType {
        return this.pokemonType
    }

    /**
     * method that modify the health of the pokemon
     */
    setHealth(health: number) {
      this.health = health;
    }

    /**
     * method that modify the damage of the pokemon
     */
    setDamage(damage: number) {
      this.damage = damage;
    }
  

}