/**
 * Clase encargada de emular el comportamiennto de un conjunto de números
 * primos. Es iterable y sigue el patron Singleton
 */
export class PrimeNumberInstance implements Iterable<number> {
  /**
   * Propiedad privada encargada de alamacenar los numeros primos
   */
  private primesNumbers: number[] = [];

  /**
   * Propiedad privada y estática que almacena la única instancia de la clase
   */
  private static primeNumberInstance: PrimeNumberInstance;

  /**
   * Contructor de la clase, es privado para impedir su acceso fuera de la 
   * clase, se encarga de hallar los n primeros primos y los añade a su lista
   * de números primos
   * @param numPrimes 
   */
  private constructor(numPrimes: number) {
    for (let i = 2; this.primesNumbers.length < numPrimes; ++i) {
      if (this.isPrime(i) === true) {
        this.primesNumbers.push(i);
      }
    }
  }

  /**
   * Método statico que permite la llamada a la creación de la única instancia 
   * de la clase, en caso de ya existir se retorna.
   * @param numPrimes 
   * @returns 
   */
  public static getPrimeNumberInstance(numPrimes: number): PrimeNumberInstance {
    if (!PrimeNumberInstance.primeNumberInstance) {
      PrimeNumberInstance.primeNumberInstance = new PrimeNumberInstance(numPrimes);
    }
    return PrimeNumberInstance.primeNumberInstance;
  }

  /**
   * Método que recibe un número y verifica si es primo o no
   * @param num 
   * @returns 
   */
  public isPrime(num: number) {
    for (let i = 2; i < num; ++i) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  /**
   * Método encargado de retornar la lista de elementos primos
   * @returns 
   */
  getItems() {
    return PrimeNumberInstance.primeNumberInstance.primesNumbers;
  }

  /**
   * Método encargado de retornar un elemento determinado según el indice dado
   * @param index 
   * @returns 
   */
  getItem(index: number) {
    if (index >= PrimeNumberInstance.primeNumberInstance.getNumberOfItems()) {
      return undefined;
    }
    return PrimeNumberInstance.primeNumberInstance.primesNumbers[index];
  }

  /**
   * método encargado de retornar los primeros n numeros primos alamacenados, 
   * segun un n dado por parametro
   * @param num 
   * @returns 
   */
  getFirstItems(num: number) {
    if (num < 0) {
      return undefined
    }
    let itemsReturn: number[] = [];
    if (PrimeNumberInstance.primeNumberInstance.getNumberOfItems() >= num) {
      for (let i = 0; i < num; ++i) {
        itemsReturn.push(PrimeNumberInstance.primeNumberInstance.primesNumbers[i]);
      }
    }
    return itemsReturn;
  }

  /**
   * Método encargado de dar un rango de números primos alamacenados
   * segun un m limite inferior y m limite superior 
   * @param num 
   * @param num2 
   * @returns 
   */
  getRangeItems(num: number, num2: number) {
    if (num < 0 || num2 < 0 || num > num2) {
      return undefined
    }
    let itemsReturn: number[] = [];
    if (PrimeNumberInstance.primeNumberInstance.getNumberOfItems() >= num2) {
      for (let i = num-1; i < num2; ++i) {
        itemsReturn.push(PrimeNumberInstance.primeNumberInstance.primesNumbers[i]);
      }
    }
    return itemsReturn;
  }

  /**
   * Método encargado de añadir un número si es primo
   * @param item 
   * @returns 
   */
  addItem(item: number) {
    if (this.isPrime(item)) {
      PrimeNumberInstance.primeNumberInstance.primesNumbers.push(item);
      return true;
    }
    return false;
  }

  /**
   * Método encargado de retornar el número de elementos almacenados
   * @returns 
   */
  getNumberOfItems() {
    return PrimeNumberInstance.primeNumberInstance.primesNumbers.length;
  }

  /**
   * Método encargado satisfacer el método requerido por la interfaz Iterator
   * @returns
   */
  [Symbol.iterator](): Iterator<number> {
    return PrimeNumberInstance.primeNumberInstance.primesNumbers.values();
  }
  
}
