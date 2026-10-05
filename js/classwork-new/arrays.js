console.log("--------------- Example 01 ---------------");

const clients = ["mango", "poly", "ajax", "kiwi"];

console.table(clients);

console.log(clients.length);
console.log(clients[2]);

clients[2] = "jhon";
console.table(clients);

const lastIndex = clients.length - 1;
console.log(clients[lastIndex]);

console.log("--------------- Example 02 ---------------");

// Присвоєння за посиланням і за значенням

// ! --> example 1

let a = 10;
let b = a;

console.log(a);
console.log(b);

a = 20;

console.log(a);
console.log(b);

console.log(a === b); // not the same

// ! --> example 2

const x = [1, 2, 3];
const y = x;

console.log(x);
console.log(y);

x[0] = 500;

console.log(x);
console.log(y);

console.log(x === y); // the same array
console.log([1, 2, 3] === [1, 2, 3]); // two different cells in memory

console.log("--------------- Example 03 ---------------");

const friends = ["mango", "poly", "ajax", "kiwi"];
const status = "pro";

// ! --> example 1 : змінює елементи массиву

// for (let i = 0; i < friends.length; i += 1) {
//     friends[i] += `-${status}`;
// }

// console.table(friends);

// ! --> example 2 : не змінює елементи массиву

for (let friend of friends) {
  console.log((friend += `-${status}`));
}

console.table(friends);

console.log("--------------- Example 04 ---------------");

const cart = [12, 43, 56, 27, 9, 83, 67];

let total = 0;

for (const el of cart) {
  total += el;
}

console.log(total);

console.log("--------------- Example 05 ---------------");

const numbers = [22, 63, 14, 76, 7, 49, 16, 45, 9, 56];

let totalOdd = 0;

for (let index = 0; index < numbers.length; index += 1) {
  const el = numbers[index];
  if (el % 2 == 0) {
    totalOdd += el;
  }
}

console.log("totalOdd:", totalOdd);

console.log("--------------- Example 06 ---------------");

// ! --> example 1

const logins = ["sdDle23klL", "ksD78lkkj12", "f7jhmJcvklK", "vkjklFccsw8d"];
const loginToFind = "f7jhmJcvklK";
let message = "";

for (let index = 0; index < logins.length; index += 1) {
  const login = logins[index];
  if (login === loginToFind) {
    message = "Access granted";
    break;
  }
  message = "Access denied";
}
console.log(message);

// ! --> example 2

for (let login of logins) {
  if (login === loginToFind) {
    message = "Access granted";
    break;
  }
  message = "Access denied";
}
console.log(message);

// ! --> example 3

for (let login of logins) {
  switch (login) {
    case "sdDle23klL":
      message = "Access denied";
      break;
    case "ksD78lkkj12":
      message = "Access denied";
      break;
    case "f7jhmJcvklK":
      message = "Access granted";
      break;
    case "vkjklFccsw8d":
      message = "Access denied";
      break;
    default:
      message = "User not found";
      break;
  }
  console.log(message);
}

// ! --> example 4

logins.includes(loginToFind)
  ? console.log("Access granted")
  : console.log("Access denied");

console.log("--------------- Example 07 ---------------");

// ! --> example 1

const minNumber = Math.min(...numbers);
console.log(minNumber);

// ! --> example 2

let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log(smallestNumber);

console.log("--------------- Example 08 ---------------");

// ! --> example 1

// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

// console.log(string);

// ! --> example 2

const string = friends.join(", ");
console.log(string);

console.log("--------------- Example 09 ---------------");

const newString = "JavaScript";
const letters = newString.split("");
let invertedString = "";

console.log(letters);

for (const letter of newString) {
  // if (letter === letter.toLocaleLowerCase()) {
  //   console.log(letter);
  //   invertedString += letter.toUpperCase();
  // } else {
  //   invertedString += letter.toLowerCase();
  // }
  invertedString +=
    letter === letter.toLocaleLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log(invertedString);

console.log("--------------- Example 10 ---------------");

const title = "Top 10 benefits of React framework";

const normalizedTitle = title.toLowerCase().split(" ").join("-"); // chaning
console.log(normalizedTitle);

console.log("--------------- Example 10 ---------------");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

let totalArr = 0;

const arr = arr1.concat(arr2);
console.table(arr);

// for (let i = 0; i < arr.length; i++) {
//   totalArr += arr[i]
// }

for (let el of arr) {
  totalArr += el;
}
console.log(totalArr);

console.log("--------------- Example 11 ---------------");

const cards = ["card1", "card2", "card3", "card4", "card5"];
console.table(cards);

const cardToRemove = "card3";
const index = cards.indexOf(cardToRemove);
console.log(index);

cards.splice(index, 1); // remove by index
console.table(cards);

const cardToInsert = "card6";
cards.splice(4, 0, cardToInsert); // add by index
console.table(cards);

const cardToUpdate = "newCard3";
cards.splice(2, 1, cardToUpdate); // update by index
console.table(cards);
