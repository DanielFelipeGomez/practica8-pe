
import 'mocha';
import {expect} from 'chai';
import {WaterTypeCreator} from "../../src/ejercicio-pe/water_type_creator";

describe("Pruebas de WaterTypeCreator", () => {
    let waterTypeCreator: WaterTypeCreator;
  
    beforeEach(() => {
        waterTypeCreator = new WaterTypeCreator('WaterPokemonDebil', 10000, 300, 'water');
    });
  
    it("waterTypeCreator es un objeto", () => {
      expect(waterTypeCreator).to.be.an('object');
    });

    it("waterTypeCreator tiene ", () => {
        expect(waterTypeCreator.logic()).to.be.equal("I am a WaterPokemonDebil, My health is 10000 and my damage is 300I'm type water");
    });

});