// ! --> example 1

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// function greet(name) {
//     return `Ласкаво просимо ${name}.`;
// }

// Викликаємо функцію greet
// і виводимо результат у консоль
// console.log(greet('Mango'));
// Ласкаво просимо Манго.

// Виводимо функцію greet
// у консоль, не викликаючи її
// console.log(greet);
/*
ƒ greet() {
     return `Ласкаво просимо ${name}.`;
}
*/

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// function makePizza() {
//     return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 2

// Callback-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
// }

// Функція вищого порядку
// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
// }

// registerGuest('Mango', greet);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName, callback);
// }

// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultra-cheese', deliverPizza));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 3

// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
// }

// Передаємо інлайн-функцію greet у якості callback
// registerGuest('Mango', function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
// });

// Передаємо інлайн-функцію notify у якості callback
// registerGuest('Poly', function notify(name) {
//     console.log(`Шановний ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName, callback);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza('Ultra-cheese', function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 4

function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

const pizzaPalace = {
  pizzas: ["Ultra-cheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`,
      );
    }
    return onSuccess(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 5

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //     totalPrice += orderedItems[i];
  // }

  // orderedItems.forEach(number => {
  //     totalPrice += number;
  // });

  orderedItems.forEach(function (number, index, array) {
    totalPrice += number;
  });

  // Change code above this line
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 6

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  // for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] > value) {
  //         filteredNumbers.push(numbers[i]);
  //     }
  // }

  // numbers.forEach(number => {
  //     if (number > value) {
  //         filteredNumbers.push(number);
  //     }
  // });

  numbers.forEach((number) =>
    number > value ? filteredNumbers.push(number) : 0,
  );

  // Change code above this line
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 7

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  // for (let i = 0; i < firstArray.length; i += 1) {
  //     if (secondArray.includes(firstArray[i])) {
  //         commonElements.push(firstArray[i]);
  //     }
  // }

  // firstArray.forEach(number => {
  //     if (secondArray.includes(number)) {
  //         commonElements.push(number);
  //     }
  // });

  firstArray.forEach((number) =>
    secondArray.includes(number) ? commonElements.push(number) : 0,
  );

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 8

// Change code below this line

// const calcTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// };

const calcTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

console.log(calcTotalPrice(5, 100));
console.log(calcTotalPrice(8, 60));
console.log(calcTotalPrice(3, 400));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 9

// Change code below this line
// const TotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

const calcsTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Change code above this line

console.log(calcsTotalPrice(5, 100));
console.log(calcsTotalPrice(8, 60));
console.log(calcsTotalPrice(3, 400));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 10

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// Change code below this line
const findTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => (totalPrice += item));

  return totalPrice;
};
// Change code above this line

console.log(findTotalPrice([12, 85, 37, 4]));
console.log(findTotalPrice([164, 48, 291]));
console.log(findTotalPrice([412, 371, 94, 63, 176]));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 11

// Change code below this line
const filteringArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) =>
    number > value ? filteredNumbers.push(number) : 0,
  );

  // Change code above this line
  return filteredNumbers;
};

console.log(filteringArray([1, 2, 3, 4, 5], 3));
console.log(filteringArray([1, 2, 3, 4, 5], 4));
console.log(filteringArray([1, 2, 3, 4, 5], 5));
console.log(filteringArray([12, 24, 8, 41, 76], 38));
console.log(filteringArray([12, 24, 8, 41, 76], 20));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 12

// Change code below this line
const getComElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) =>
    secondArray.includes(element) ? commonElements.push(element) : 0,
  );

  // Change code above this line
  return commonElements;
};

console.log(getComElements([1, 2, 3], [2, 4]));
console.log(getComElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getComElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getComElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getComElements([1, 2, 3], [10, 20, 30]));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 13

const changeEven = (numbers, value) => {
  const newNumbers = [];

  numbers.forEach((number) =>
    number % 2 === 0
      ? newNumbers.push(number + value)
      : newNumbers.push(number),
  );

  return newNumbers;
};

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 14

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 15

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map((book) => book.title);

console.table(titles);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 16

const someBooks = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = someBooks.flatMap((someBook) => someBook.genres);

console.log(genres);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 17

const numbersArr = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbersArr.filter((number) => (!(number % 2) ? number : 0));
const oddNumbers = numbersArr.filter((number) => (number % 2 ? number : 0));

console.log(evenNumbers);
console.log(oddNumbers);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 18

const booksLib = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = booksLib.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, booksLib) => booksLib.indexOf(genre) === index,
);

console.log(allGenres);
console.log(uniqueGenres);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 18

const booksObj = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter((booksObj) => booksObj.rating >= MIN_RATING);
const booksByAuthor = books.filter((booksObj) => booksObj.author === AUTHOR);

console.table(topRatedBooks);
console.table(booksByAuthor);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 19

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

// Change code below this line
const friendName = "Goldie Gentry";

// const getUsersFriend = (users, friendName) =>
//     users.filter(user => user.friends.includes(friendName));

const getUsersFriend = (users, friendName) =>
  users.filter(({ friends }) => friends.includes(friendName));
// Change code above this line

console.table(getUsersFriend(users, friendName));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 20

// Change code below this line
const getFriends = (users) =>
  users
    .flatMap((user) => user.friends)
    .filter((friend, index, friends) => friends.indexOf(friend) === index);
// Change code above this line

console.log(getFriends(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 21

// Change code below this line
const getActiveUsers = (users) => users.filter((user) => user.isActive);
// Change code above this line

console.table(getActiveUsers(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 22

// Change code below this line
const getInactiveUsers = (users) => users.filter((user) => !user.isActive);
// Change code above this line

console.table(getInactiveUsers(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 23

const booksArr = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const BOOK_AUTHOR = "Robert Sheckley";
// Change code below this line

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === BOOK_AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 23

// Change code below this line
const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);
// Change code above this line

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 24

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 25

// Change code below this line
const isEveryUserActive = (users) => users.every((user) => user.isActive);
// Change code above this line

console.log(isEveryUserActive(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 26

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);

const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 27

// Change code below this line
const isAnyUserActive = (users) => users.some((user) => user.isActive);
// Change code above this line

console.log(isAnyUserActive(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 28

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

// # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
// # присвоює їй значення параметра initialValue або першого елемента
// # масиву, що перебирається, якщо initialValue не задане.
// previousValue = 0

// # Потім callback-функція викликається для кожного елемента масиву. Поточне значення
// # параметра previousValue - це те, що повернула callback-функція на минулій ітерації.
// Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 32

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((acc, value) => acc + value, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(averagePlayTime);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 29

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

console.log(averageScore);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

const playersArr = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = playersArr.reduce(
  (total, playersArr) => total + playersArr.playtime / playersArr.gamesPlayed,
  0,
);

console.log(totalAveragePlaytimePerGame);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 30

// Change code below this line
const calculateTotalBalance = (users) =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// Change code above this line

console.log(calculateTotalBalance(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 31

// Change code below this line
const getTotalFriendCount = (users) =>
  users.reduce((totalFriends, user) => totalFriends + user.friends.length, 0);
// Change code above this line

console.log(getTotalFriendCount(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 32

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

console.log(ascendingReleaseDates);

const alphabeticalAuthors = [...authors].sort();

console.log(alphabeticalAuthors);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 33

const releaseDatesArr = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDatesArr = [...releaseDates].sort((a, b) => a - b);

console.log(ascendingReleaseDatesArr);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

console.log(descendingReleaseDates);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 34

const authorsList = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authorsList].sort((a, b) =>
  a.localeCompare(b),
);

console.log(authorsInAlphabetOrder);

const authorsInReversedOrder = [...authorsList].sort((a, b) =>
  b.localeCompare(a),
);

console.log(authorsInReversedOrder);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 35

const studentsSource = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = studentsSource.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
);

console.table(inAscendingScoreOrder);

const inDescendingScoreOrder = studentsSource.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
);

console.table(inDescendingScoreOrder);

const inAlphabeticalOrder = studentsSource.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name),
);

console.table(inAlphabeticalOrder);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

const booksSource = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...booksSource].sort((a, b) =>
  a.author.localeCompare(b.author),
);

console.table(sortedByAuthorName);

const sortedByReversedAuthorName = [...booksSource].sort((a, b) =>
  b.author.localeCompare(a.author),
);

console.table(sortedByReversedAuthorName);

const sortedByAscendingRating = [...booksSource].sort(
  (a, b) => a.rating - b.rating,
);

console.table(sortedByAscendingRating);

const sortedByDescendingRating = [...booksSource].sort(
  (a, b) => b.rating - a.rating,
);

console.table(sortedByReversedAuthorName);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 36

// Change code below this line
const sortByAscendingBalance = (users) =>
  [...users].sort((userA, userB) => userA.balance - userB.balance);
// Change code above this line
console.table(sortByAscendingBalance(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 37

// Change code below this line
const sortByDescendingFriendCount = (users) => {
  users.sort((userA, userB) => userB.friends.length - userA.friends.length);
  return [...users];
};
// Change code above this line
console.table(sortByDescendingFriendCount(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 38

// Change code below this line
const sortByName = (users) =>
  [...users].sort((userA, userB) => userA.name.localeCompare(userB.name));
// Change code above this line

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 39

const booksArray = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = booksArray
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

console.table(names);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 40

// Change code below this line
const getNamesSortedByFriendCount = (users) =>
  [...users]
    .filter((name) => name.friends.length)
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((name) => name.name);
// Change code above this line

console.table(getNamesSortedByFriendCount(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 41

// Change code below this line
const getSortedFriends = (users) =>
  [...users]
    .flatMap((user) => user.friends)
    .filter((friend, index, friends) => friends.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));

// Change code above this line

console.log(getSortedFriends(users));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// ! --> example 42

// Change code below this line
const getTotalBalanceByGender = (users, gender) =>
  [...users]
    .filter((user) => user.gender === gender)
    .map((user) => user.balance)
    .reduce((acc, number) => acc + number, 0);
// .find(genderID => genderID === gender);
// Change code above this line

console.table(getTotalBalanceByGender(users, "female"));
