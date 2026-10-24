console.log('--------------- Example 01 ---------------');

const objC = {
  z: 6,
};
console.log(objC);

console.log(objC.hasOwnProperty('z'));

const objB = Object.create(objC);
objB.y = 3;

console.log(objB);
console.log(objB.hasOwnProperty('y'));

console.log(objB.z);

const objA = Object.create(objB);
objA.x = 1;

console.log(objA);
console.log(objA.hasOwnProperty('x'));

console.log(objA.z);

objA.z = 99;
console.log(objA.z);

console.log(objA.hasOwnProperty('z'));
console.log(objA.hasOwnProperty('y'));

console.log('--------------- Example 02 ---------------');

const dummyObj = Object.create({ message: 'this prototype message' });
dummyObj.message = 'this own message';

console.log(dummyObj);
console.log(dummyObj.message);

console.log('--------------- Example 03 ---------------');

const objZ = Object.create({ z: 6 });
objZ.y = 3;

console.log(objZ);
console.log(objZ.x);
console.log(objZ.z);

console.log(objZ.hasOwnProperty('y'));
console.log(objZ.hasOwnProperty('z'));

console.log('--------------- Example 04 ---------------');

const Car = function ({ brand, model, price } = {}) {
  // const {brand, model, price} = config;
  this.brand = brand;
  this.model = model;
  this.price = price;
};
console.log(Car.prototype);

Car.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi --> this', this);
  console.log('Hello');
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};
console.log(Car.prototype);

const myCar1 = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
console.log(myCar1);

myCar1.sayHi();
myCar1.changePrice(40000);

console.log(myCar1);

const myCar2 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
console.log(myCar2);

const myCar3 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
console.log(myCar3);

console.log('--------------- Example 05 ---------------');

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};
console.log(User.prototype);

const mango = new User({
  email: 'sir.mango@outlook.com',
  password: 'ghJ78f_sHN1',
});
console.log(mango);

console.log(mango.email);

mango.changeEmail('mango@email.com');
console.log(mango);

console.log('--------------- Example 06 ---------------');

const objD = {
  x: 5,
};
console.log(objD.__proto__ === Object.prototype);

console.log('--------------- Example 07 ---------------');

// ? example 1

User.message = 'static property';
console.log(User.message);

User.loginfo = function (obj) {
  console.log(obj);
  console.log('email:', obj.email);
  console.log('password:', obj.password);
};

User.loginfo(mango);
console.log(User.loginfo);
console.log(User.hasOwnProperty('loginfo'));

mango.loginfo = { name: 'jhon dow' };
console.log(mango.hasOwnProperty('loginfo'));
console.log(mango);

// ? example 2

console.log(Math.round(5.72));
console.log(Math.PI);

console.log('--------------- Example 08 ---------------');

const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this.rootSelector = rootSelector;
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);
  this._bindEvents();
  this._updateValue();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};

  refs.container = document.querySelector(rootSelector);
  refs.incrementButton = refs.container.querySelector('[data-increment]');
  refs.decrementButton = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');

  return refs;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

CounterPlugin.prototype._updateValue = function () {
  this._refs.value.textContent = this._value;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementButton.addEventListener('click', () => {
    this.increment();
    this.updateValue();
  });
  this._refs.decrementButton.addEventListener('click', () => {
    this.decrement();
    this.updateValue();
  });
};

new CounterPlugin({ rootSelector: '#counter-01', step: 10, initialValue: 100 });

new CounterPlugin({ rootSelector: '#counter-02', step: 20 });
