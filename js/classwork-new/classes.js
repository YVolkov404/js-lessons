console.log('--------------- Example 01 ---------------');

const Car = function ({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.description = 'car description';

Car.logInfo = function (carObj) {
  console.log('Car logInfo --> carObj', carObj);
};

console.log(Car);

const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
console.log(newCar);

console.log('--------------- Example 02 ---------------');

class Car1 {
  static description = 'car description'; // static property

  static logInfo(carObj) {
    console.log('Car logInfo --> carObj', carObj);
  }

  #privateProperty = 'privateProperty'; // private property :: not use via instance

  publicProperty = 'publicProperty'; // public property :: use via instance

  constructor({ brand, model, price }) {
    console.log('autoinit constuctor');
    this.brand = brand;
    this._model = model;
    this.price = price;
  }
  changePrice = newPrice => {
    // constructor - public method location
    this.price = newPrice;
    console.log((this.#privateProperty = 'newPrivateProperty'));
  };

  get model() {
    return this._model;
  }

  // getModel () {
  //   return this.model;
  // }

  set model(newModel) {
    this._model = newModel;
  }

  // setModel (newModel) {
  //   this._model = newModel;
  // }
}
console.dir(Car1);
console.log(Car1.description);

const carInstance = new Car1({ brand: 'Audi', model: 'Q3', price: 35000 });
console.log(carInstance);

Car1.logInfo(carInstance);

carInstance.changePrice(40000);
console.log(carInstance);
console.log(carInstance.constructor);
console.log(carInstance.model);
console.log(carInstance.publicProperty);

// console.log(carInstance.getModel());

// carInstance.setModel('A6');
// console.log(carInstance.getModel());

console.log(carInstance.model);

carInstance.model = 'A6';
console.log(carInstance.model);

console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);

console.log('--------------- Example 03 ---------------');

const obj = {
  _a: 'x',
  get a() {
    return this._a;
  },
  set a(x) {
    this._a = x;
  },
};

console.log(obj);
console.log(obj.a);

obj.a = 'value';
console.log(obj);
console.log(obj.a);

console.log('--------------- Example 04 ---------------');

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    console.log(`${this.name} receives ${amount} experience`);
    this.xp += amount;
  }
}
console.log(Hero);

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} attack using ${this.weapon}`);
  }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'sword' });
console.log(mango);

mango.attack();
mango.gainXp(1000);
console.log(mango);

class Berserk extends Warrior {
  constructor({warcry, ...restProps}={}) {
    super(restProps);
    this.warcry = warcry;
  }
  babyRage() {
    console.log(`${this.name} using warcry ${this.warcry}`);
  }
}

const ajax = new Berserk({name: 'ajax', xp: 1500, weapon: 'ax', warcry: 'wooaha'});
console.log(ajax);

ajax.babyRage();
ajax.attack();
ajax.gainXp(1500);
console.log(ajax);

class Mage extends Hero {
  constructor({spells, ...restProps} = {}) {
    super(restProps);
    this.spells = spells;
  }
  cast() {
    console.log(`${this.name} attack using ${this.spells}`);
  }
}

const polly = new Mage({ name: 'polly', xp: 2000, spells: ['fireball'] });
console.log(polly);

polly.cast();
polly.gainXp(500);
console.log(polly);

// console.log(mango.__proto__ === Warrior.prototype);
// console.log(mango.__proto__);
console.log('Warrior.prototype', Warrior.prototype);
console.log('Hero.prototype', Hero.prototype);
// console.log(Warrior.prototype.__proto__ === Hero.prototype);
