import 'mocha';
import {expect} from 'chai';
import { PrimeNumberInstance } from "../../src/ejercicio-pe/prime_number_instance";



// import {productTable} from "../src/ejercicio-3";

describe("Pruebas de PrimeNumberInstance", () => {
  const primeNumberInstance = PrimeNumberInstance.getPrimeNumberInstance(8);


  it("Se debe poder crear una instancia de numeros primos a partir de getPrimeNum", () => {
    expect(primeNumberInstance.getItems()).to.be.an('array');
  });

  it("primeNumberInstance, se puede devolver un elemento", () => {
    expect(primeNumberInstance.getItem(0)).to.be.equal(2);
    expect(primeNumberInstance.getItem(2)).to.be.equal(5);

  });

  it("primeNumberInstance, se puede devolver todos los elementos", () => {
    expect(primeNumberInstance.getItems()).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19]);
  });

  it("primeNumberInstance, se puede añadir un numero primo", () => {
    expect(primeNumberInstance.addItem(67)).to.be.equal(true);
    expect(primeNumberInstance.addItem(9)).to.be.equal(false);
    expect(primeNumberInstance.getItems()).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19, 67]);
  });

  it("primeNumberInstance, se puede saber el numero de primos que tenemos", () => {
    expect(primeNumberInstance.getNumberOfItems()).to.be.equal(9);
  });

  it("primeNumberInstance, se puede sn pasar los primeros n primos, dado n", () => {
    expect(primeNumberInstance.getFirstItems(4)).to.be.eql([2, 3, 5, 7]);
  });

  it("primeNumberInstance, se puede pasar un rango (n,m) de numeros primos, dado n y m", () => {
    expect(primeNumberInstance.getRangeItems(4, 6)).to.be.eql([7, 11, 13]);
  });

  it("primeNumberInstance, es iterable", () => {  
    for (const item of primeNumberInstance) {
      expect(primeNumberInstance.isPrime(item)).to.be.equal(true);
    } 
  });

  it("primeNumberInstance, es iterable, ejemplo creacion de un array a aprtir de iteraciones", () => {  
    let arrayPrimos: number[] = []
    for (const item of primeNumberInstance) {
      arrayPrimos.push(item);
    }
    expect(arrayPrimos).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19, 67]);
  });
});