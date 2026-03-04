console.log("--------------- Example 01 ---------------");
// ? прототипное наследование

const objC = {
  x: 1,
};

const objB = Object.create(objC);
objB.y = 2;

const objA = Object.create(objB);
objA.z = 3;

console.log(objA.z);
console.log(objA.y);
console.log(objA.x);

console.log(objA.hasOwnProperty("z"));
console.log(objA.hasOwnProperty("y"));
console.log(objA.hasOwnProperty("x"));

console.log("--------------- Example 02 ---------------");
// ? класс

const Car = function ({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};
console.log(Car.prototype);

const myCar1 = new Car({
  brand: "Audi",
  model: "Q3",
  price: 35000,
}); // екземпляр класса ... создает пустой об'ект
console.log(myCar1);

const myCar2 = new Car({
  brand: "BMW",
  model: "X6",
  price: 75000,
});
console.log(myCar2);

const myCar3 = new Car({ price: 45000 });
console.log(myCar3);

myCar3.changePrice(95000); // находим в прототипе
console.log(myCar3);

console.log("--------------- Example 03 ---------------");
// ? класс

const User = function ({ name, email, password }) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
}

const mango = new User({
  email: "mango@mail.ua",
  password: "12345",
});
console.log(mango);

mango.changeEmail('newmango@email.ua')
console.log(mango);

console.log("--------------- Example 03 ---------------");
// ? статические свойство и метод

User.message = "Hello User" // отсутствует в екземпляре и в прототипе

User.logInfo = function (name) {
  console.log(name);
}

User.logInfo('Mango');
console.dir(User);
