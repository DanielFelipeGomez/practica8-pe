import { Pokemon } from "./interface_pokemon";

/**
 * This class declares an abstract factory method (or a default factory
 * method) that returns a TwoDimensionalFigure object. Subclasses may
 * provide a particular implementation of this method.
 */
export abstract class PokemonCreator {
    public abstract factoryMethod(): Pokemon;
    /**
     * Logic that relies on TwoDimensionalFigure objects returned by
     * the factory method. Subclasses can change this logic indirectly
     * by overriding the factory method and returning a different
     * TwoDimensionalFigure object.
     */
    public logic(): string {
      const pokemon = this.factoryMethod();
      return `I am a ${pokemon.getName()}, ` +
             `My health is ${pokemon.getHealth()} and ` +
             `my damage is ${pokemon.getDamage()}` + 
             `I'm type ${pokemon.getType()}`;
    }
  }