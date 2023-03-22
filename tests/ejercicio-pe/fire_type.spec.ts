
import 'mocha';
import {expect} from 'chai';
import {FireType} from "../../src/ejercicio-pe/fire_type";

describe("Pruebas de fireType", () => {
    let fireType: FireType;
  
    beforeEach(() => {
        fireType = new FireType('FirePokemonMalo', 10000, 300, 'water');
    });
  
    it("fireType es un objeto", () => {
      expect(fireType).to.be.an('object');
    });

    it("fireType tiene nombre", () => {
        expect(fireType.getName()).to.be.equal('FirePokemonMalo')
    });

    it("fireType tiene salud", () => {
        expect(fireType.getHealth()).to.be.equal(10000)
    });

    it("fireType tiene daño", () => {
        expect(fireType.getDamage()).to.be.equal(300)
    });

    it("fireType puede modificar su daño", () => {
        fireType.setDamage(5000)
        expect(fireType.getDamage()).to.be.equal(5000)
    });

    it("fireType puede modificar su vida", () => {
        fireType.setHealth(10)
        expect(fireType.getHealth()).to.be.equal(10)
    });
});