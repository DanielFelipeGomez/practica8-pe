
import 'mocha';
import {expect} from 'chai';
import {RockType} from "../../src/ejercicio-pe/type_rock";

describe("Pruebas de RockType", () => {
    let rockType: RockType;
  
    beforeEach(() => {
        rockType = new RockType('RockPokemonMalo', 10000, 300, 'water');
    });
  
    it("RockType es un objeto", () => {
      expect(rockType).to.be.an('object');
    });

    it("RockType tiene nombre", () => {
        expect(rockType.getName()).to.be.equal('RockPokemonMalo')
    });

    it("RockType tiene salud", () => {
        expect(rockType.getHealth()).to.be.equal(10000)
    });

    it("RockType tiene daño", () => {
        expect(rockType.getDamage()).to.be.equal(300)
    });

    it("RockType puede modificar su daño", () => {
        rockType.setDamage(5000)
        expect(rockType.getDamage()).to.be.equal(5000)
    });

    it("RockType puede modificar su vida", () => {
        rockType.setHealth(10)
        expect(rockType.getHealth()).to.be.equal(10)
    });
});