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

const updatedPlayersById = players.map((player) => {
  if (playerIDToUpdate === player.id) {
    return {
      ...player,
      timePlayed: player.timePlayed + 100,
      online: player.online = true,
    };
  }
  return player;    
});

console.table(updatedPlayersById);




