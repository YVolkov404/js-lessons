console.log("--------------- Example 1 ---------------");

// * const name = function () {} === function name() {}

const add = function (a, b) {
  console.log("the function is executed");
  return a + b;
};

const result = add(7, 13);
console.log(result);

console.log("--------------- Example 2 ---------------");

const fn = function () {
  console.log("object");
  return;
};

console.log(fn(/* empty */)); // ! undefined

console.log("--------------- Example 3 ---------------");

const cart = [23, 47, 13, 3, 56, 9, 84, 62, 14, 66];

// let total = 0;
// for (let value of cart) {
//   total += value;
// }
// console.log(total);

const calcTotalPrice = function (items) {
  let total = 0;
  for (const value of items) {
    total += value;
  }
  return total;
};

console.log(calcTotalPrice(cart));

console.log("--------------- Example 4 ---------------");

const logins = ["sdDHle23klL", "ksD78lkkj12", "f7jhmJcvklK", "vkjklFccsw8"];

// ! --> example 1

// const findLogin = function (logins, login) {
//   for (let value of logins) {
//     if (login === value) {
//       return "access granted";
//     }
//   }

//   return "access denied";
// };

// ! --> example 2

const findLogin = function (logins, login) {
  return logins.includes(login) ? "access granted" : "access denied";
};

console.log(findLogin(logins, "SddHre23klL"));
console.log(findLogin(logins, "ksD78lHHj3f"));
console.log(findLogin(logins, "f7jhmJcvklK"));
console.log(findLogin(logins, "GDsklFccsw8"));

console.log("--------------- Example 5 ---------------");

const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];
  for (let number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
};

console.log(findSmallestNumber([12, 3, 56, 23, 74, 10]));

console.log("--------------- Example 6 ---------------");

const invertedString = function (string) {
  let invertedString = "";
  for (let letter of string) {
    invertedString +=
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
  }
  return invertedString;
};

console.log(invertedString("FamOUse"));

console.log("--------------- Example 7 ---------------");

const normalizedTitle = function (title) {
  return title.toLowerCase().split(" ").join("-");
};

console.log(normalizedTitle("Top 10 benefits of React framework"));

console.log("--------------- Example 8 ---------------");

const fnB = function () {
  console.log(arguments); // return pseudo-array

  for (let arg of arguments) {
    console.log(arg);
  }
};

console.log(fnB(1, 2, 3));
console.log(fnB(1, 2, 3, 4, 5));

console.log("--------------- Example 9 ---------------");

const fnC = function () {
  return Array.from(arguments); // return array
};

console.log(fnC(1, 2, 3));
console.log(fnC(1, 2, 3, 4, 5));

console.log("--------------- Example 10 ---------------");

const fnD = function (...args) {
  return args; // return array
};

console.log(fnD(1, 2, 3));
console.log(fnD(1, 2, 3, 4, 5));

console.log("--------------- Example 11 ---------------");

const fnF = function (a, b, ...args) {
  console.log(`${a}, ${b}`, args);
};

console.log(fnF("mango", 1, 2, 3));
console.log(fnF("polly", "ajax", 1, 2, 3, 4, 5));

console.log("--------------- Example 12 ---------------");

const calcNumbers = function (...args) {
  let total = 0;
  for (let number of args) {
    total += number;
  }
  return total;
};

console.log(calcNumbers(23, 41, 67, 5, 96));

console.log("--------------- Example 13 ---------------");

const filterNumbers = function (array, ...args) {
  let newArray = [];
  for (let element of args) {
    if (array.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

console.log(filterNumbers([12, 42, 64, 3, 56, 87], 64, 12, 23));
