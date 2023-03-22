
import 'mocha';
import {expect} from 'chai';
import {FireTypeCreator} from "../../src/ejercicio-pe/fire_type_creator";

describe("Pruebas de FireTypeCreator", () => {
    let fireTypeCreator: FireTypeCreator;
  
    beforeEach(() => {
        fireTypeCreator = new FireTypeCreator('FuegoPokemonSuper', 10000, 300, 'fire');
    });
  
    it("FireTypeCreator es un objeto", () => {
      expect(fireTypeCreator).to.be.an('object');
    });

    it("FireTypeCreator tiene ", () => {
        expect(fireTypeCreator.logic()).to.be.equal("I am a FuegoPokemonSuper, My health is 10000 and my damage is 300I'm type fire");
    });

});