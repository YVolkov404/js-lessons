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
const Car = function ({ config }) {
  const { brand, model, price } = config;
  this.brand = brand;
  this.model = model;
  this.price = price;
};

const myCar1 = new Car({
  brand: "Audi",
  model: "Q3",
  price: 35000,
}); // екземпляр класса ... создает пустой об'ект
console.log(myCar1);

const myCar2 = new Car({
  brand: "BMW",
  model: "600",
  price: 75000,
});
console.log(myCar2);

const myCar3 = new Car({});
console.log(myCar3);
