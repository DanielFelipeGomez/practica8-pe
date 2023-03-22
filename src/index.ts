import { PokemonCreator } from "./ejercicio-pe/abstract_pokemon_creator";
import { FireTypeCreator } from "./ejercicio-pe/fire_type_creator";
import { WaterTypeCreator } from "./ejercicio-pe/water_type_creator";


/**
 * Client code that works with an instance of a concrete creator through its
 * common superclass TwoDimensionalFigureCreator.
 */
function clientCode(pokemonCreator: PokemonCreator) {
  console.log(pokemonCreator.logic());
}

clientCode(new FireTypeCreator('FuegoPokemonSuper', 10000, 300, 'fire'));
clientCode(new WaterTypeCreator('AguaPokemonDebil', 5000, 400, 'water'));
