// example 1

function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

console.log(checkAge(16));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 2

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}

console.log(checkPassword("jqueryismyjam"));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 3

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";
}

console.log(checkStorage(10, 11));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 4

const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length - 1;

const lastElement = fruits[lastElementIndex];

console.log(lastElement);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 5

function getExtremeElements(array) {
  array.splice(1, array.length - 2);
  return console.log(array);
}

getExtremeElements([1, 2, 3, 4, 5, 6]);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// METHODS
console.log("================= METHODS ====================");

const nameArr1 = "Array is big";
const nameArr2 = ["Array", "is", "big"];

// split()
console.log("----------------- split() -------------------");

console.log(nameArr1.split(""));
console.log(nameArr1.split(" "));
console.log(nameArr1.split("", 8));
console.log(nameArr1.split(" ", 2));

// join()
console.log("----------------- join() -------------------");

console.log(nameArr2.join(""));
console.log(nameArr2.join(" "));
console.log(nameArr2.join("-"));

// indexOf()
console.log("---------------- indexOf() -----------------");

console.log(nameArr2.indexOf("big"));

// includes()
console.log("--------------- includes() -----------------");

console.log(nameArr2.includes("Array"));
console.log(nameArr2.includes("Arr"));

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";

const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit`);
}

// push() and pop()
console.log("------------ push() and pop() --------------");

nameArr2.push("but", "not", "so", "much");
console.log(nameArr2);

nameArr2.pop();
console.log(nameArr2);

// slice()
console.log("---------------- slice() -------------------");

// повертає частину масиву від і до, але не включно
console.log(redFruits.slice(1, 3));
// повертає частину масиву від і до кінця, включно з останнім елементом
console.log(redFruits.slice(1));
// повертає останні 2 елемента масиву
console.log(redFruits.slice(-2));

// splice()
console.log("---------------- splice() ------------------");

// remove elements
const scores1 = [1, 2, 3, 4, 5, 6, 7];

const deletedScores = scores1.splice(1, 5);

console.log(scores1);
console.log(deletedScores);

// add elements without remove
const scores2 = [1, 2, 3, 4, 5, 6, 7];

scores2.splice(3, 0, 3.5);

console.log(scores2);

// add elements with remove
const scores3 = [1, 4, 5, 6, 5, 6, 7];

scores3.splice(1, 3, 2, 3, 4);

console.log(scores3);

// concat()
console.log("---------------- concat() ------------------");

const concat1 = [1, 2, 3, 4, 5];
const concat2 = [6, 7, 8, 9, 10];

const concat = concat1.concat(concat2);

console.log(concat);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 6

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 7

// function makeStringFromArray(array, delimiter) {
//     let string;

//     string = array.join(delimiter);

//     return string;
// }

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 8

function slugify(title) {
  const slug = title.toLowerCase().split(" ");
  return slug.join("-");
}

console.log(slugify("Arrays for beginners"));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

//example 9

function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }
  return newArray;
}

console.log(makeArray([1, 2, 3], [4, 5, 6, 7], 5));
console.log(makeArray([1, 2, 3], [4, 5, 6, 7], 9));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 10

function calculateTotal(number) {
  let total = 0;

  for (let i = 0; i <= number; i += 1) {
    total += i;
  }

  return total;
}

console.log(calculateTotal(10));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 11

function calculateTotalPrice(order) {
  let total = 0;

  for (const items of order) {
    total += items;
  }

  return total;
}

console.log(calculateTotalPrice([45, 34, 12, 8, 57]));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 12 : Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку

function findLongestWord(string) {
  const array = string.split(" ");

  let longestWord = array[0];

  for (const word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 13 : Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  return numbers;
}

console.log(createArrayOfNumbers(4, 16));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 14 : Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

function filteredArray(numbers, value) {
  let newArray = [];

  for (const item of numbers) {
    if (item > value) {
      newArray.push(item);
    }
  }

  return newArray;
}

console.log(filteredArray([12, 24, 8, 41, 76], 38));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 15

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  if (fruits.includes(fruit)) {
    return true;
  }
  return false;
}

console.log(checkFruit("pear"));
console.log(checkFruit("banana"));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 16

function getCommonElements(array1, array2) {
  let newArray = [];
  for (const item of array1) {
    if (array2.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}

console.log(getCommonElements([2, 45, 23, 54, 7], [45, 24, 15, 7, 51, 2]));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 17

function calculatePrice(order) {
  let total = 0;

  // for (let i = 0; i < order.length; i += 1) {
  //     total += order[i];
  // }

  for (const item of order) {
    total += item;
  }

  return total;
}

console.log(calculatePrice([412, 371, 94, 63, 176]));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 18

function filterArray(numbers, value) {
  const filteredNumbers = [];

  // for (let i = 0; i < numbers.length; i += 1) {
  //     const number = numbers[i];

  //     if (number > value) {
  //         filteredNumbers.push(number);
  //     }
  // }

  for (const item of numbers) {
    if (item > value) {
      filteredNumbers.push(item);
    }
  }

  return filteredNumbers;
}

console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 19

function getEvenNumbers(start, end) {
  let newArray = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }

  return newArray;
}

console.log(getEvenNumbers(6, 12));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 20 : Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

console.log(number);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 21

// function findNumber(start, end, divisor) {
//     let number;

//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }
// }

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 22 : Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку

function includes(array, value) {
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes([1, 2, 3, 4, 5], 3));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");
