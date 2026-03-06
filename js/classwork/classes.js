
console.log("--------------- Example 01 ---------------");

// ? Геттер и Сеттер

const obj = {
  _a: 100,
  get a () {
    return this._a
  },
  set a (x) {
    this.a = x;
  }
}
console.log(obj);

console.log("--------------- Example 02 ---------------");

// ? Класс

class Car {
  static description = "Auto Description"  
  static logInfo(carObj) {
    console.log('carObj :>> ', carObj);
  }
  
  // ? Приватное свойство
  #private = 'private'

  // ? Публичное свойство
  public = 'public'
  
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.public = this.public;
  }
  get price () {
    return this._price;
  }
  set price (newPrice) {
    this._price = newPrice;
    console.log(this.#private);
  }
  get model () {
    return this._model;
  }
  set model (newModel) {
    this._model = newModel;
  }
}

console.dir(Car);
console.log(Car.description);

const carInstance = new Car({
  brand: "Audi",
  model: "Q3",
  price: 35000,
});
// console.log(Object.getPrototypeOf(carInstance) === Car.prototype);

Car.logInfo(carInstance);

carInstance.model = 'Q6';
console.log(carInstance.model);

carInstance.price = 50000;
console.log(carInstance.price);

Car.logInfo(carInstance);

console.log("--------------- Example 03 ---------------");

// ? Наследование

class Hero {
  constructor ({name = 'hero', xp = 0} = {}) {
    this.name = name;
    this.xp = xp;
  }
  gainXp (amount) {
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor ({weapon, ...rest} = {}) {
    super(rest);
    this.weapon = weapon;
  }
  attack () {
    console.log(`Attack using ${this.weapon}`);
  }
}

class Mage extends Hero {
  constructor ({spells, ...rest} = {}) {
    super(rest);
    this.spells = spells;
  }
  cast () {
    console.log(`Attack using ${this.spells}`);
  }
}

const mango = new Warrior({name: 'Mango', xp: 1000, weapon: 'sword'})

console.log(mango);
mango.gainXp(1000)
console.log(mango);

const polly = new Mage({name: 'Polly', xp: 2000, spells: ['fireball', 'lightning']});

console.log(polly);
polly.gainXp(500);
console.log(polly);

// console.log(Object.getPrototypeOf(mango) === Warrior.prototype);
// console.log(Warrior.prototype.__proto__);

// console.log('Hero.prototype :>> ', Hero.prototype);
// console.log('Warrior.prototype :>> ', Warrior.prototype);





