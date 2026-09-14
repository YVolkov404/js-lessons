console.log("--------------- Example 01 ---------------");

/**
 * Змінні та їх типи : const, let;
 * Методи typeof, console.log();
 */

const name = "John";

let age;
age = 30;

console.log(name);
console.log(age);

const isOpen = true;
console.log(isOpen);

const type = typeof isOpen;
console.log(type);

console.log("--------------- Example 02 ---------------");

/**
 * Методи window.prompt(), window.confirm()
 */

// const shouldRenew = window.confirm("Do you want to renew your subscription?");
// console.log(shouldRenew);

// let quantity = window.prompt("Please enter the quantity of products you want to order:");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity)

console.log("--------------- Example 03 ---------------");

/**
 * Парсінг чисел за допомогою Number.parseInt(), Number.parseFloat()
 */

let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
console.log("Element width:", elementWidth);

let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
console.log("Element height:", elementHeight);

console.log("--------------- Example 04 ---------------");

/**
 * Метод числа toFixed(digits) - округлення чисел;
 */

let salary = 1300.16472;
salary = Number(salary.toFixed(2));
console.log("Salary:", salary);

console.log("--------------- Example 05 ---------------");

/**
 * Перетворення до числа за допомогою Number(value);
 * Значення NaN (Not a Number) - результат перетворення нечислового значення до числа;
 * Метод Number.isNaN(value) - перевірка чи є значення NaN;
 */

let quantity1 = "30";
quantity1 = Number(quantity1);
console.log("Quantity1:", quantity1);

let value = true;
value = Number(value);
console.log("Value:", value);

let quantity2 = "30px";
quantity2 = Number(quantity2);
console.log("Quantity2:", quantity2);

let quantity3 = 50;
quantity3 = Number.isNaN(quantity3);
console.log("Quantity3:", quantity3);

console.log("--------------- Example 06 ---------------");

/**
 * Object Math - властивості та методи для роботи з числами;
 */

console.log(Math.PI);

const base = 2;
const power = 5;
const result = Math.pow(base, power);
console.log(result);

console.log(Math.sqrt(16));

console.log(Math.random());

console.log(Math.round(4.2341));

console.log("--------------- Example 07 ---------------");

// let baseNumber;
// let powerNumber;

// baseNumber = window.prompt("Please enter the base number:");
// baseNumber = Number(baseNumber);

// powerNumber = window.prompt("Please enter the power number:");
// powerNumber = Number(powerNumber);

// const resultNumber = Math.pow(baseNumber, powerNumber);
// console.log(`Result of ${baseNumber} raised to the power of ${powerNumber} is:`, resultNumber);

console.log("--------------- Example 08 ---------------");

/**
 * Генерація випадкового числа в діапазоні від min до max включно;
 * Math.floor() - округлення до меншого цілого числа;
 * Math.ceil() - округлення до більшого цілого числа;
 */

const max = 10;
const min = 1;

const randomNumber = Math.random() * (max - min) + min;
console.log("Random number:", randomNumber);

const randomInteger = Math.floor(randomNumber);
console.log("Random integer:", randomInteger);

const randomIntegerCeil = Math.ceil(randomNumber);
console.log("Random integer (ceil):", randomIntegerCeil);

console.log("--------------- Example 09 ---------------");

const colors = ["red", "green", "blue", "yellow", "orange"];

console.log(colors.length);

const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
console.log("Random color:", randomColor);

document.body.style.backgroundColor = randomColor;

console.log("--------------- Example 10 ---------------");

/**
 * Довжина рядка - властивість length;
 * Метод рядка toLowerCase() - перетворення рядка до нижнього регістру;
 * Метод рядка toUpperCase() - перетворення рядка до верхнього регістру;
 * Метод рядка includes(substring) - перевірка наявності підрядка в рядку;
 * Метод рядка indexOf(substring) - пошук індексу підрядка в рядку;
 * Метод рядка slice(startIndex, endIndex) - вирізання підрядка з рядка;
 * Метод рядка replace(oldSubstring, newSubstring) - заміна підрядка в рядку;
 */

const message = "Hello, WELCOME to the world of JavaScript!";
console.log("Message length:", message.length);

const lowerCaseMessage = message.toLowerCase();
console.log("Lowercase message:", lowerCaseMessage);

const upperCaseMessage = message.toUpperCase();
console.log("Uppercase message:", upperCaseMessage);

const hasWelcome = message.toLowerCase().includes("welcome");
console.log("Does the message include 'welcome'?", hasWelcome);

const indexOfWorld = message.indexOf("world");
console.log("Index of 'world':", indexOfWorld);

const slicedMessage = message.slice(7, 14);
console.log("Sliced message:", slicedMessage);

const replacedMessage = message.replace("JavaScript", "JS");
console.log("Replaced message:", replacedMessage);

console.log("--------------- Example 11 ---------------");

/**
 * Конкатенація рядків - об'єднання рядків за допомогою оператора + або методу concat();
 * Шаблонні рядки (template strings) - використання зворотних лапок `` та інтерполяції ${expression};
 */

const firstName = "John";
const lastName = "Doe";

const fullName = firstName + " " + lastName;
console.log("Full name (concatenation):", fullName);

const fullNameTemplate = `${firstName} ${lastName}`;
console.log("Full name (template string):", fullNameTemplate);

console.log("--------------- Example 12 ---------------");

/**
 * 0, false, null, underfined, NaN, '' - значення, які при перетворенні до булевого типу стають false;
 */

console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));

console.log(typeof (NaN === false));
console.log(typeof (undefined === false));

console.log("--------------- Example 13 ---------------");

/**
 * Логічне "І" (&&) - зупиняє виконання на першому false, повертає останнє значення, якщо всі true;
 * Логічне "АБО" (||) - зупиняє виконання на першому true, повертає останнє значення, якщо всі false;
 * Логічне "НЕ" (!) - перетворює true на false і навпаки;
 */

console.log(
  true && true && false && true,
); /* повертає перше false або останній операнд */
console.log(
  true || false || false || true,
); /* повертає перше true або останній операнд */
console.log(!true); /* повертає false */
console.log(!false); /* повертає true */

console.log("--------------- Example 14 ---------------");

const x = 13;
const y = 41;
// let number = prompt("Please enter a number:");
let number = Math.round(Math.random() * 99);

if (number >= 13 && number <= 41) {
  console.log(number);
  console.log("Number is in the range from 13 to 41");
} else {
  console.log(number);
  console.log("Number is out of the range from 13 to 41");
}

console.log("--------------- Example 15 ---------------");

// let subscriptionType = prompt(
//   "Please enter your subscription type (free, pro, vip):",
// );

// if (subscriptionType === "vip" || subscriptionType === "pro") {
//   console.log("You have a subscription");
// } else {
//   console.log("You can access basic features.");
// }

