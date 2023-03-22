
import 'mocha';
import {expect} from 'chai';
import {RockTypeCreator} from "../../src/ejercicio-pe/rock_type_creator";

describe("Pruebas de rockTypeCreator", () => {
    let rockTypeCreator: RockTypeCreator;
  
    beforeEach(() => {
        rockTypeCreator = new RockTypeCreator('RocaPokemonDuro', 5000, 400, 'rock');
    });
  
    it("rockTypeCreator es un objeto", () => {
      expect(rockTypeCreator).to.be.an('object');
    });

    it("rockTypeCreator tiene ", () => {
        expect(rockTypeCreator.logic()).to.be.equal("I am a RocaPokemonDuro, My health is 5000 and my damage is 400I'm type rock");
    });

});