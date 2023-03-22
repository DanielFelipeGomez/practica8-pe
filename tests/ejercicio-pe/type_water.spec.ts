
import 'mocha';
import {expect} from 'chai';
import {WaterType} from "../../src/ejercicio-pe/type_water";

describe("Pruebas de WaterType", () => {
    let waterType: WaterType;
  
    beforeEach(() => {
        waterType = new WaterType('FirePokemonMalo', 10000, 300, 'water');
    });
  
    it("WaterType es un objeto", () => {
      expect(waterType).to.be.an('object');
    });

    it("WaterType tiene nombre", () => {
        expect(waterType.getName()).to.be.equal('FirePokemonMalo')
    });

    it("WaterType tiene salud", () => {
        expect(waterType.getHealth()).to.be.equal(10000)
    });

    it("WaterType tiene daño", () => {
        expect(waterType.getDamage()).to.be.equal(300)
    });

    it("WaterType puede modificar su daño", () => {
        waterType.setDamage(5000)
        expect(waterType.getDamage()).to.be.equal(5000)
    });

    it("WaterType puede modificar su vida", () => {
        waterType.setHealth(10)
        expect(waterType.getHealth()).to.be.equal(10)
    });
});