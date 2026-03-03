console.log("============== Example ==============");

// ? forEach

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (number, index, array) {
  console.log(number);
  // array[index]
  array[4] = 20;
});

console.log(numbers);

console.log("============== Example ==============");

// ? map

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

const students = [
  { name: "mango", score: 83 },
  { name: "polly", score: 59 },
  { name: "ajaks", score: 37 },
  { name: "kiwi", score: 94 },
];

// const studentsName = students.map(name => {
//     return name.score;
// })

//? OR

const studentsName = students.map((name) => name.score);

console.log(studentsName);

console.log("============== Example ==============");

// ? map

const players = [
  { id: "player-1", name: "mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "polly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "chelsy", timePlayed: 80, points: 48, online: true },
];

const playerNames = players.map((player) => player.name);
console.log("playerNames :>> ", playerNames);

const playerIds = players.map((player) => player.id);
console.log("playerIds :>> ", playerIds);

const res = players.map(({ name, online }) => {
  (name, online);
});
console.log("res :>> ", res);

const updatedPlayers = players.map((player) => {
  return {
    ...player,
    points: Math.round(player.points * 1.1),
  };
});

console.log("updatedPlayers :>> ", updatedPlayers);

console.log("============== Example ==============");

console.table(players);

const playerIDToUpdate = "player-4";

// const updatedPlayersById = players.map((player) => {
//   console.log(player.id);
//   if (playerIDToUpdate === player.id) {
//     console.log('playerIDToUpdate :>> ', playerIDToUpdate);
//     return playerIDToUpdate;
//   }
// });

// const updatedPlayersById = players.map((player) => {
//   if (playerIDToUpdate === player.id) {
//     console.log('playerIDToUpdate :>> ', playerIDToUpdate);
//     return "оновлений об'єкт";
//   }
//   return "старий об'єкт";
// });

// console.table(updatedPlayersById);

// const updatedPlayersById = players.map((player) => {
//   if (playerIDToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//       online: player.online = true,
//     };
//   }
//   return player;
// });

// ? OR

const updatedPlayersById = players.map((player) => {
  return playerIDToUpdate === player.id
    ? {
        ...player,
        timePlayed: player.timePlayed + 100,
        online: (player.online = true),
      }
    : player;
});

console.table(updatedPlayersById);

console.log("============== Example ==============");

// ? filter

console.table(players);

const filteredNumbers = numbers.filter((number) => {
  // console.log('number :>> ', number);

  return number > 5;
});

console.log(filteredNumbers);

console.log("============== Example ==============");

const onlinePlayers = players.filter((player) => player.online);
console.log(onlinePlayers);

const offlinePlayers = players.filter((player) => !player.online);
console.log(offlinePlayers);

console.log("============== Example ==============");

const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
console.log(hardcorePlayers);

console.log("============== Example ==============");

// ? find

console.table(players);

const number = numbers.find((number) => number >= 5);
console.log("number :>> ", number);

const playerIdToFind = "player-2";

const playerWithId = players.find((player) => player.id === playerIdToFind);
console.log("playerWithId :>> ", playerWithId);

const playerNameToFind = "polly";

const playerWithName = players.find((player) => player.name === "polly");
console.log("playerWithName :>> ", playerWithName);

console.log("============== Example ==============");

// ? every

console.table(players);

const isAllOnline = players.every((player) => player.online);
console.log("isAllOnline :>> ", isAllOnline);

console.log("============== Example ==============");

// ? some

console.table(players);

const isAnyOnline = players.some((player) => player.online);
console.log("isAnyOnline :>> ", isAnyOnline);

const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
console.log("anyHardcorePlayers :>> ", anyHardcorePlayers);

console.log("============== Example ==============");

// ? reduce

const total = numbers.reduce((acc, number) => {
  console.log("number :>> ", number);
  console.log("acc :>> ", acc);
  return acc + number;
}, 0);

// ? accumulator = 0 => 1 => return 0 + 1
// ? accumulator = 1 => 2 => return 1 + 2
// ? accumulator = 3 => 3 => return 3 + 3
// ? accumulator = 6 => 4 => return 6 + 4
// ? accumulator = 10 => 20 => return 10 + 20
// ? accumulator = 30 => 6 => return 30 + 6
// ? accumulator = 36 => 7 => return 36 + 7
// ? accumulator = 43 => 8 => return 43 + 8
// ? accumulator = 51 => 9 => return 51 + 9
// ? accumulator = 60 => 10 => return 60 + 10

console.log(total);

const salary = {
  mango: 100,
  polly: 50,
  ajax: 150,
};

console.log("============== Example ==============");

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
);

console.log(totalSalary);

console.log("============== Example ==============");

console.table(players);


