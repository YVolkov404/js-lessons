console.log("============== Example 01 ==============");

const getTotalBalanceByGender = (users, gender) => {
  return users.reduce((acc, { balance }) => {
    if (gender === "male") {
      return acc + balance;
    }
  }, 0);
};

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "femail"));

console.log("============== Example 02 ==============");
console.log("============== Example 03 ==============");
console.log("============== Example 04 ==============");
console.log("============== Example 05 ==============");
console.log("============== Example 06 ==============");
console.log("============== Example 07 ==============");
console.log("============== Example 08 ==============");
console.log("============== Example 09 ==============");
console.log("============== Example 10 ==============");
// console.log("============== Example 11 ==============");
// console.log("============== Example 12 ==============");
// console.log("============== Example 13 ==============");
// console.log("============== Example 14 ==============");
// console.log("============== Example 15 ==============");
// console.log("============== Example 16 ==============");
// console.log("============== Example 17 ==============");
// console.log("============== Example 18 ==============");
// console.log("============== Example 19 ==============");
// console.log("============== Example 20 ==============");
// console.log("============== Example 21 ==============");
// console.log("============== Example 22 ==============");
// console.log("============== Example 23 ==============");
// console.log("============== Example 24 ==============");
// console.log("============== Example 25 ==============");
// console.log("============== Example 26 ==============");
// console.log("============== Example 27 ==============");
// console.log("============== Example 28 ==============");
// console.log("============== Example 29 ==============");
// console.log("============== Example 30 ==============");
// console.log("============== Example 31 ==============");
// console.log("============== Example 32 ==============");
// console.log("============== Example 33 ==============");
// console.log("============== Example 34 ==============");
// console.log("============== Example 35 ==============");
// console.log("============== Example 36 ==============");
// console.log("============== Example 37 ==============");
// console.log("============== Example 38 ==============");
// console.log("============== Example 39 ==============");
// console.log("============== Example 40 ==============");
// console.log("============== Example 41 ==============");
// console.log("============== Example 42 ==============");
// console.log("============== Example 43 ==============");
// console.log("============== Example 44 ==============");
// console.log("============== Example 45 ==============");
// console.log("============== Example 46 ==============");
// console.log("============== Example 47 ==============");
// console.log("============== Example 48 ==============");
