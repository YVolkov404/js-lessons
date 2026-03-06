console.log("============== Example 01 ==============");

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

console.log("============== Example 02 ==============");

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

console.log("============== Example 03 ==============");

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
// });

console.log("============== Example 04 ==============");

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      const error = `There is no pizza with a name ${pizzaName} in the assortment.`;
      return onError(error);
    }
    return onSuccess(pizzaName);
  },
};

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

console.log("============== Example 05 ==============");

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   return totalPrice;
// }

// ? OR

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

console.log("============== Example 06 ==============");

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   return filteredNumbers;
// }

// ? OR

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

console.log("============== Example 07 ==============");

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
// }

// ? OR

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach((el) => {
//     if (secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   });

//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

console.log("============== Example 08 ==============");

// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

// ? OR

// const calculateTotalPrice = ((quantity, pricePerItem) => quantity * pricePerItem)

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

console.log("============== Example 09 ==============");

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// ? OR

// const calculateTotalPrice = ((quantity, pricePerItem) => quantity * pricePerItem)

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

console.log("============== Example 10 ==============");

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// ? OR

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

console.log("============== Example 11 ==============");

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// ? OR

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};

console.log(filterArray([12, 24, 8, 41, 76], 20));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 3));

console.log("============== Example 12 ==============");

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }

// ? OR

const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
};

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

console.log("============== Example 13 ==============");

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

// ? OR

function changeEven(numbers, value) {
  const array = [];

  numbers.forEach((number) =>
    number % 2 === 0 ? array.push(number + value) : array.push(number),
  );

  return array;
}

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

console.log("============== Example 14 ==============");

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths);

console.log("============== Example 15 ==============");

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

const titles = books.map((title) => title.title);

console.log(titles);

console.log("============== Example 16 ==============");

const booksShelf = [
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

const genres = booksShelf.flatMap((genre) => genre.genres);

console.log(genres);

console.log("============== Example 17 ==============");

const getUserNames = (users) => users.map((user) => user.name);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
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
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
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
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
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
    skills: ["adipisicing", "irure", "velit"],
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
    skills: ["ex", "culpa", "nostrud"],
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
    skills: ["non", "amet", "ipsum"],
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
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

console.log(getUserNames(users));

console.log("============== Example 18 ==============");

console.log(users);

const getUserEmails = (users) => users.map((user) => user.email);

console.log(getUserEmails(users));

console.log("============== Example 19 ==============");

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => !(number % 2));
const oddNumbers = numbers.filter((number) => number % 2);

console.log(evenNumbers);
console.log(oddNumbers);

console.log("============== Example 20 ==============");

const allBooks = [
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

const allGenres = allBooks.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (book, index, array) => array.indexOf(book) === index,
);

console.log(uniqueGenres);
console.log(allGenres);

console.log("============== Example 21 ==============");

const myBooks = [
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

const topRatedBooks = myBooks.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = myBooks.filter((book) => book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);

console.log("============== Example 22 ==============");

console.log(users);

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue"));
console.log(getUsersWithEyeColor(users, "green"));
console.log(getUsersWithEyeColor(users, "brown"));

console.log("============== Example 23 ==============");

console.log(users);

const getUsersWithAge = (users, minAge, maxAge) =>
  users.filter((user) => user.age >= minAge && user.age <= maxAge);

console.log(getUsersWithAge(users, 27, 38));

console.log("============== Example 24 ==============");

console.log(users);

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => {
    if (user.friends.includes(friendName)) {
      return user.friends;
    }
  });
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
console.log(getUsersWithFriend(users, "Adrian Cross"));

console.log("============== Example 25 ==============");

const getFriends = (users) =>
  users
    .flatMap((user) => user.friends)
    .filter((friend, index, friends) => friends.indexOf(friend) === index);

console.log(getFriends(users));

console.log("============== Example 26 ==============");

const getActiveUsers = (users) => users.filter((user) => user.isActive);

console.log(getActiveUsers(users));

console.log("============== Example 27 ==============");

const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

console.log(getActiveUsers(users));

console.log("============== Example 28 ==============");

console.log(myBooks);

const BOOK_TITLE = "The Dream of a Ridiculous Man";
const BOOK_AUTHOR = "Robert Sheckley";

const bookWithTitle = myBooks.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = myBooks.find((book) => book.author === BOOK_AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor);

console.log("============== Example 29 ==============");

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));

console.log("============== Example 30 ==============");

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

console.log("============== Example 31 ==============");

const isEveryUserActive = (users) =>
  users.every((user) => user.isActive === true);

console.log(isEveryUserActive(users));

console.log("============== Example 32 ==============");

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

console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);

const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);

console.log("============== Example 33 ==============");

const isAnyUserActive = (users) => users.some((user) => user.isActive);
console.log(isAnyUserActive(users));

console.log("============== Example 34 ==============");

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players);

const totalPlayTime = playtimes.reduce((acc, playtime) => {
  return acc + playtime;
});

const averagePlayTime = totalPlayTime / playtimes.length;

console.log(averagePlayTime);

console.log("============== Example 35 ==============");


const playersArr = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = playersArr.reduce(
  (acc, { playtime, gamesPlayed }) => {
    return acc + playtime / gamesPlayed;
  },
  0,
);

console.log(totalAveragePlaytimePerGame);

console.log("============== Example 36 ==============");

const calculateTotalBalance = (users) => {
  return users
    .map((user) => user.balance)
    .reduce((acc, balance) => {
      return acc + balance;
    });
};

console.log(calculateTotalBalance(users));

console.log("============== Example 37 ==============");

const getTotalFriendCount = (users) => {
  return users
    .flatMap((user) => user.friends.length)
    .reduce((acc, friend) => {
      return (acc += friend);
    });
};

console.log(getTotalFriendCount(users));

console.log("============== Example 38 ==============");

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
console.log(ascendingReleaseDates);

const alphabeticalAuthors = [...authors].sort((a, b) => {
  return a.localeCompare(b);
});
console.log(alphabeticalAuthors);

console.log("============== Example 39 ==============");

const ascendingReleaseDatesNew = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

console.log(ascendingReleaseDatesNew);
console.log(descendingReleaseDates);

console.log("============== Example 40 ==============");

const authorsArr = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authorsArr].sort((a, b) =>
  a.localeCompare(b),
);
console.log(authorsInAlphabetOrder);

const authorsInReversedOrder = [...authorsArr].sort((a, b) =>
  b.localeCompare(a),
);
console.log(authorsInReversedOrder);

console.log("============== Example 41 ==============");

const sortedByAuthorName = books
  .map((author) => author.author)
  .filter((author, index, array) => array.indexOf(author) === index)
  .sort((a, b) => a.localeCompare(b));
console.log(sortedByAuthorName);

const sortedByReversedAuthorName = books
  .map((author) => author.author)
  .filter((author, index, array) => array.indexOf(author) === index)
  .sort((a, b) => b.localeCompare(a));
console.log(sortedByReversedAuthorName);

const sortedByAscendingRating = books
  .map((rating) => rating.rating)
  .sort((a, b) => a - b);
console.log(sortedByAscendingRating);

const sortedByDescentingRating = books
  .map((rating) => rating.rating)
  .sort((a, b) => b - a);
console.log(sortedByDescentingRating);

console.log("============== Example 42 ==============");

const sortByAscendingBalance = (users) => {
  return [...users].sort((a, b) => a.balance - b.balance);
};
console.log(sortByAscendingBalance(users));

console.log("============== Example 43 ==============");

const sortByDescendingFriendCount = (users) => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};

console.log(sortByDescendingFriendCount(users));

console.log("============== Example 44 ==============");

const sortByName = (users) =>
  [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortByName(users));

console.log("============== Example 45 ==============");

const MIN_BOOK_RATING = 8;

const names = books
  .filter((user) => user.rating > MIN_BOOK_RATING)
  .map((user) => user.author)
  .sort((a, b) => a.localeCompare(b));
console.log(names);

console.log("============== Example 46 ==============");

const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendCount(users));

console.log("============== Example 47 ==============");

const getSortedFriends = (users) => {
  return users
    .flatMap(user => user.friends)
    .filter((friends, index, array) => array.indexOf(friends) === index)
    .sort((a, b) => a.localeCompare(b))
};

console.log(getSortedFriends(users));

console.log("============== Example 48 ==============");

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .map((user) => user.balance)
    .reduce((acc, balance) => acc + balance, 0);

console.log(getTotalBalanceByGender(users, "male"));
console.log(getTotalBalanceByGender(users, "female"));
