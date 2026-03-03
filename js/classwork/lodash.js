import pkg from "lodash";
const { isEmpty, get, union, range, sortBy, minBy } = pkg;

console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));

console.log("============== Example ==============");

const user = {
  name: "mango",
  location: {
    cord: [1, 2],
    city: "Lviv",
  },
};

console.log(get(user, "location.city"));

console.log(user.location.city);

if (user && user.location && user.location.city) {
  console.log(user.location.city);
}

console.log(user?.location?.city);

console.log("============== Example ==============");

console.log(union([1, 2, 3], [3, 4, 5]));

console.log("============== Example ==============");

console.log(range(1, 6, 2, 8, 4, 10));

console.log("============== Example ==============");

const cart = [
  { label: "Apples", price: 100 },
  { label: "Bananas", price: 120 },
  { label: "Lemons", price: 70 },
  { label: "kiwi", price: 110 },
];

console.table(sortBy(cart, ['price']));

console.log("============== Example ==============");

const players = [
  { id: "player-1", name: "mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "polly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "chelsy", timePlayed: 80, points: 48, online: true },
];

console.log(minBy(players, player => player.points));