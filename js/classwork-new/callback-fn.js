console.log("--------------- Example 01 ---------------");

const fnA = function (message, callback) {
  console.log(message);
  console.log(callback);
  callback(100);
};

const fnB = function (number) {
  console.log("fnB", number);
};

fnA("this", fnB);

console.log("--------------- Example 02 ---------------");

const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

doMath(2, 3, add);
doMath(5, 2, function (x, y) {
  // inline function like argument
  return x - y;
});

console.log("--------------- Example 03 ---------------");

// const buttonRef = document.querySelector(".js-button");

// const handleButtonClick = function () {
//   console.log(Date.now());
// };

// buttonRef.addEventListener("click", handleButtonClick);
// console.log(buttonRef);

// ! the same
// buttonRef.addEventListener('click', function () {
//     console.log(Date.now());
// });

// function addEventListener (eventType, callback) {
//     if (eventType === 'click') {
//         callback();
//     }
// }

console.log("--------------- Example 04 ---------------");

// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError,
// );

console.log("--------------- Example 05 ---------------");

// const callback = function () {
//   console.log("challenge after 3 miliseconds");
// };

// console.log("before timeout");
// setTimeout(callback, 3000);
// console.log("after timeout");

console.log("--------------- Example 06 ---------------");

// const onRequestSuccess = function (response) {
//   console.log(response);
// };

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then(onRequestSuccess);

console.log("--------------- Example 07 ---------------");

const filter = function (array, callback) {
  const filteredArray = [];
  for (let el of array) {
    const passed = callback(el);
    if (passed) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};

// ? example 1
const callback_01 = function (value) {
  return value > 5;
};
const filteredNumbers_01 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], callback_01);
console.log(filteredNumbers_01);

// ? example 2
const callback_02 = function (value) {
  return value <= 5;
};
const filteredNumbers_02 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], callback_02);
console.log(filteredNumbers_02);

// ? example 3
const fruits = [
  { name: "apple", quantity: 200, isFresh: true },
  { name: "kiwi", quantity: 100, isFresh: false },
  { name: "peach", quantity: 400, isFresh: true },
];

const getFruitsByQuantity = function (fruit) {
  return fruit.quantity > 100;
};
const filteredFruits = filter(fruits, getFruitsByQuantity);
console.log(filteredFruits);

console.log("--------------- Example 08 ---------------");

const fnC = function (parameter) {
  const message = "innerVar";

  const innerFunction = function () {
    console.log(message);
    console.log(parameter);
  };

  return innerFunction;
};

const fnD = fnC(666);

fnD();

console.log(fnD);

console.log("--------------- Example 09 ---------------");

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} prepares ${dish}`);
// };

// makeDish("mango", "tea");
// makeDish("mango", "cake");

// makeDish("polly", "tea");
// makeDish("polly", "cake");

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} prepares ${dish}`);
  };
  return makeDish;
};

const mango = makeSheff("mango");
const polly = makeSheff("polly");

mango("tea");
polly("cake");

console.log("--------------- Example 10 ---------------");

const floatingPoint = 3.1453234521;
// const withDecimals = Number(floatingPoint.toFixed(2));

const rounder = function (places) {
  return function (num) {
    return Number(num.toFixed(places));
  };
};

const round = rounder(3);
console.log(round(floatingPoint));

console.log("--------------- Example 11 ---------------");

const salaryManagerfactory = function (employeeName, baseSalary) {
  let salary = baseSalary;

  return {
    raise(amount) {
      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `current salary ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerfactory("mango", 1000);

salaryManager.raise(666);
// salaryManager.lower(333);
console.log(salaryManager.current());

console.log("--------------- Example 12 ---------------");

const myLibFactory = function () {
  let value = 0;

  const add = function (num) {
    value += num;
  };

  return {
    add,
    getValue() {
      return value;
    },
  };
};

const myLib = myLibFactory();

myLib.add(66);
console.log(myLib.getValue());

console.log("--------------- Example 13 ---------------");

// const addNumbers = function (a, b, c) {
//   return a + b + c;
// };

// const addNumbers = (a, b, c) => {
//   return a + b + c;
// };

const addNumbers = (a, b, c) => a + b + c;
console.log(addNumbers(3, 6, 9));

const objectReturn = () => ({ a: 3, b: 6});
console.log(objectReturn()); 
