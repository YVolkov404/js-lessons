console.log("--------------- Example 01 ---------------");

// ! method forEach

const numbers = [34, 21, 6, 87, 99, 48, 31];

numbers.forEach(
  function (number, index, array) {
    console.log(number);
    // array[index] = 66;
    console.log(this);
  },
  { a: 3, b: 6 },
);

console.log(numbers);

console.log("--------------- Example 02 ---------------");

// ! method map

// ? example 1
const doubleNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(numbers);
console.log(doubleNumbers);

const players = [
  { id: "player-1", name: "mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "polly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "chelsy", timePlayed: 80, points: 48, online: true },
];

// ? example 2
const playersNames = players.map((player) => player.name);
console.table(players);
console.log(playersNames);

const playersIds = players.map((player) => player.id);
console.log(playersIds);

// ? example 3
const object = players.map(({ name, online }) => ({
  name,
  online,
}));
console.table(object);

// ? example 4
const updatedPlayers = players.map((player) => ({
  ...player,
  points: (player.points * 1.1).toFixed(1),
}));
console.table(updatedPlayers);

// ? example 5
const playerIdToUpdate = "player-3";

// const updatePlayer = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// });

const updatePlayer = players.map((player) =>
  playerIdToUpdate === player.id
    ? {
        ...player,
        timePlayed: player.timePlayed + 100,
      }
    : player,
);
console.table(updatePlayer);

console.log("--------------- Example 03 ---------------");

// ! method filter

// ? example 1
const filteredNumbers = numbers.filter((number) => number > 34 || number < 21);
console.log(filteredNumbers);

// ? example 2
const onlinePlayers = players.filter((player) => player.online);
console.table(onlinePlayers);

// ? example 3
const offlinePlayers = players.filter((player) => !player.online);
console.table(offlinePlayers);

// ? example 4
const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 250);
console.table(hardcorePlayers);

console.log("--------------- Example 04 ---------------");

// ! method find

// ? example 1
const findNumbers = numbers.find((number) => number < 99);
console.log(findNumbers);

// ? example 2
const playerIdToFind = "player-3";

const findPlayerById = players.find(({ id }) => playerIdToFind === id);
console.log(findPlayerById);

// ? example 3
const playerNameToFind = "polly";

const nameToFind = players.find(({ name }) => playerNameToFind === name);
console.log(nameToFind);

// ? example 4
const playerById = (players, playerId) =>
  players.find(({ id }) => id === playerId);
console.log(playerById(players, "player-4"));
console.log(playerById(players, "player-2"));

console.log("--------------- Example 05 ---------------");

// ! method every && some

// ? example 1 :: every
const isAllOnline = players.every((player) => player.online);
console.table(isAllOnline);

// ? example 1 :: some
const isAnyOnline = players.some((player) => player.online);
console.table(isAnyOnline);

console.log("--------------- Example 05 ---------------");

// ! method reduce

// ? example 1
const total = numbers.reduce((acc, number) => acc + number, 666); // 666 - accumulator : initial value
console.log(total);

// ? example 2
const salary = {
  mango: 100,
  polly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary);

const totalReduce = totalSalary.reduce((total, value) => total + value); // default accumulator value = 0
console.log(totalReduce);

// ? example 3
const totalTimePlayed = players.reduce(
  (totalTimePlayed, { timePlayed }) => totalTimePlayed + timePlayed,
  0,
);
console.log(totalTimePlayed);

// ? example 4
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalCartAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0,
);
console.log(totalCartAmount);

// ? example 5
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
console.log(allTags);

// ? example 6
const tagsStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {},
);
console.log(tagsStats);
