console.log("============== Example 01 ==============");

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);

console.log("============== Example 02 ==============");

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// console.log(apartment);

console.log("============== Example 03 ==============");

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

console.log("============== Example 04 ==============");

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

console.log("============== Example 05 ==============");

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

console.log("============== Example 06 ==============");

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

console.log("============== Example 07 ==============");

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

console.log("============== Example 08 ==============");

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

console.log(product);

console.log("============== Example 09 ==============");

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

console.log(credentials);

console.log("============== Example 10 ==============");

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

console.log("============== Example 11 ==============");

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(advert);
// console.log(apartment);

console.log("============== Example 12 ==============");

function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += object.key = 1;
    }
  }

  return propCount;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

console.log("============== Example 13 ==============");

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];

// const keys = Object.keys(apartment);

// for (const item of keys) {
//   values.push(apartment[item])
// }

// console.log(values);

console.log("============== Example 14 ==============");

function countProps(object) {
  let propCount = 0;

  for (const key of Object.keys(object)) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

console.log("============== Example 15 ==============");

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys);
console.log(values);

console.log("============== Example 16 ==============");

function countTotalSalary(salaries) {
  let totalSalary = 0;

  let values = Object.values(salaries);

  console.log(values);

  for (const item of values) {
    totalSalary += item;
  }

  return totalSalary;
}

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

console.log("============== Example 17 ==============");

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const item of colors) {
//   hexColors.push(item.hex);
//   rgbColors.push(item.rgb);
// }

// console.table(hexColors);
// console.table(rgbColors);

console.log("============== Example 18 ==============");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const item of products) {
//     if (productName === item.name) {
//       return item.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Engine"));

console.log("============== Example 19 ==============");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let array = [];

//   for (const element of products) {
//     let keys = Object.keys(element);

//     if (keys.includes(propName)) {
//       array.push(element[propName]);
//     }
//   }

//   return array;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

console.log("============== Example 20 ==============");

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice = 0;

  for (const item of products) {
    if (productName === item.name) {
      totalPrice += item.price * item.quantity;
    }
  }

  return totalPrice;
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));

console.log("============== Example 21 ==============");

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ? OR using destructuring

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

console.log("============== Example 22 ==============");

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

console.log("============== Example 23 ==============");

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);

console.log("============== Example 24 ==============");

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// ? OR using destructuring

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

console.log("============== Example 25 ==============");

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

console.log("============== Example 26 ==============");

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  }),
);

console.log(
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  }),
);

console.log("============== Example 27 ==============");

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

console.log("============== Example 28 ==============");

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores, ...secondGroupScores);

console.log(allScores);
console.log(bestScore);
console.log(worstScore);

console.log("============== Example 29 ==============");

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

console.log("============== Example 30 ==============");

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

    const newData = {
      completed,
      category,
      priority,
      ...data,
    };
    return newData;
}

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

console.log("============== Example 31 ==============");

function add(...args) {
  let total = 0;

  for (const item of args) {
    total += item;
  }

  return total;
}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(74, 11, 62, 46, 12, 36));

console.log("============== Example 32 ==============");

function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (firstNumber < arg) {
      total += arg;
    }
  }

  return total;
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// console.log("============== Example 33 ==============");
// console.log("============== Example 34 ==============");
// console.log("============== Example 35 ==============");
// console.log("============== Example 36 ==============");
// console.log("============== Example 37 ==============");
// console.log("============== Example 38 ==============");
// console.log("============== Example 39 ==============");
// console.log("============== Example 40 ==============");
// console.log("============== Example 41 ==============");
