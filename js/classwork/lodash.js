const _ = require("lodash");

console.log(_.isEmpty({}));
console.log(_.isEmpty({ a: 1 }));

console.log("============== Example ==============");

const user = {
  name: "mango",
  location: {
    cord: [1, 2],
    city: "Lviv",
  },
};

console.log(_.get(user, "location.city"));

console.log(user.location.city);

if (user && user.location && user.location.city) {
  console.log(user.location.city);
}

console.log(user?.location?.city);

console.log("============== Example ==============");

console.log(_.union([1, 2, 3], [3, 4, 5]));

console.log("============== Example ==============");

console.log(_.range(1, 6, 2, 8, 4, 10));

console.log("============== Example ==============");

const cart = [
  { label: "Apples", price: 100 },
  { label: "Bananas", price: 120 },
  { label: "Lemons", price: 70 },
  { label: "kiwi", price: 110 },
];

console.table(_.sortBy(cart, ['price']));

console.log("============== Example ==============");
