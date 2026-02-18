// example 1

const apartment = {
  description: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 2

// const keys = [];
// const values = [];
// const advert = {
//     service: 'apt',
// };

// const apartment = Object.create(advert);
// apartment.description = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }

// console.log(keys);
// console.log(values);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 3

// function countProps(object) {
//     let propCount = 0;

//     Object.values(object);
//     for (const value in object) {
//         if (object.hasOwnProperty(value)) {
//             propCount += object[value] = 1;
//         }
//     }
//     return propCount;
// }

// console.log(
//     countProps({
//         mail: 'poly@mail.com',
//         isOnline: true,
//         score: 500,
//     }),
// );

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 4

const values = [];

const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}

console.log(values);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 5

function countProps(object) {
  let propCount = Object.keys(object).length;

  return propCount;
}

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 6

function countTotalSalary(salaries) {
  let totalSalary = 0;

  for (const value of Object.values(salaries)) {
    totalSalary += value;
  }

  return totalSalary;
}

console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 7

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const item of colors) {
  hexColors.push(item.hex);
  rgbColors.push(item.rgb);
}

console.log(hexColors);
console.log(rgbColors);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

//example 8

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// console.table(products);

// function getProductPrice(productName) {
//     // console.log(products.name);
//     for (const name of products) {
//         // const items = Object.values(name);
//         if (Object.values(name).includes(productName)) {
//             return name.price;
//         }
//     }
//     return null;
// }

// console.log(getProductPrice('Radar'));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

//example 9

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const propArr = [];

//     for (const key of products) {
//         if (Object.keys(key).includes(propName)) {
//             propArr.push(key[propName]);
//         }
//     }

//     return propArr;
// }

// console.log(getAllPropValues('price'));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 10

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let total = 0;
//     for (const key of products) {
//         if (key.name === productName) {
//             total = key.price * key.quantity;
//         }
//     }
//     return total;
// }

// console.log(calculateTotalPrice('Grip'));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 11

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

//const { yesterday, today, tomorrow } = highTemperatures;

//const meanTemperature = (yesterday + today + tomorrow) / 3;

//console.log(meanTemperature);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 12

// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 13

// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

//const temperature = (highYesterday + highToday + highTomorrow) / 3;

//console.log(temperature);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 14

const someColors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexSomeColors = [];
const rgbSomeColors = [];

//const { hex, rgb } = someColors;

for (const { hex, rgb } of someColors) {
  hexSomeColors.push({ hex, rgb }.hex);
  rgbSomeColors.push({ hex, rgb }.rgb);
}

console.log(hexSomeColors);
console.log(rgbSomeColors);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 15

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

console.log(forecast);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 16

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

const forecastTo = {
  today: { low: 15, high: 19 },
  tomorrow: { low: 10, high: 16 },
};

console.log(calculateMeanTemperature(forecastTo));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 16

const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 17

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(bestScore);
console.log(worstScore);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 18

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };

console.log(finalSettings);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 18

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

  const {
    category: newCategory = "General",
    priority: newPriority = "Normal",
    text: newText,
  } = data;

  data = {
    category,
    priority,
    completed,
    newProps(changeCategory, changePriority) {
      this.category = changeCategory;
      this.priority = changePriority;
    },
    addText(addText) {
      if (this.text === undefined) {
        delete this.text;
      }
      this.text = addText;
    },
  };

  data.newProps(newCategory, newPriority);
  data.addText(newText);

  return data;
}

// 2 var

// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';

//     const newData = {
//         completed,
//         category,
//         priority,
//         ...data,
//     };
//     return newData;
// }

console.log(makeTask({}));
console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  }),
);
console.log(makeTask({ category: "Finance", text: "Take interest" }));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
console.log(makeTask({ text: "Buy bread" }));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 19

function add(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
}

console.log(add(23, 45, 67, 31, 84));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 20

function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstNumber) {
      total += arg;
    }
  }

  return total;
}

console.log(addOverNum(55, 45, 67, 31, 84));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 21

function findMatches(numbers, ...args) {
  const matches = [];
  for (const arg of args) {
    if (numbers.includes(arg)) {
      matches.push(arg);
    }
  }
  return matches;
}

console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 22

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    this.books.splice(this.books.indexOf(oldName), 1, newName);
  },
};

bookShelf.updateBook("The last kingdom", "Dune");
bookShelf.updateBook("Haze", "Dungeon chronicles");

console.log(bookShelf);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 23

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//         return this.potions.push(potionName);
//     },
//     removePotion(potionName) {
//         return this.potions.splice(this.potions.indexOf(potionName), 1);
//     },
//     updatePotionName(oldName, newName) {
//         return this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     },
// };

// atTheOldToad.addPotion('Invisibility');
// atTheOldToad.addPotion('Power potion');

// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Speed potion');

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Poison');

// console.log(atTheOldToad);
console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// example 23

const atTheOldsToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const { name } of this.potions) {
      if (name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const name = this.potions[i].name;
      if (name === potionName) {
        this.potions.splice(i, 1);
        return;
      }
    }
    return console.log(`Potion ${potionName} is not in inventory`);
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (oldName === potion.name) {
        const potionIndex = this.potions.indexOf(potion);
        return this.potions.splice(potionIndex, 1, {
          name: newName,
          price: potion.price,
        });
      }
    }
    return console.log(`Potion ${oldName} is not in inventory`);
  },
};

console.table(atTheOldsToad.getPotions());

console.log(atTheOldsToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldsToad.addPotion({ name: "Power potion", price: 270 }));

console.log(atTheOldsToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log(atTheOldsToad.addPotion({ name: "Stone skin", price: 240 }));

console.log(atTheOldsToad.removePotion("Stone skin"));
console.log(atTheOldsToad.removePotion("Power potion"));

console.log(atTheOldsToad.updatePotionName("Power potion", "Polymorth"));
console.log(atTheOldsToad.updatePotionName("Stone skin", "Polymorth"));

console.table(atTheOldsToad.getPotions());
console.log("++++++++++++++++++++++++++++++++++++++++++++++");
