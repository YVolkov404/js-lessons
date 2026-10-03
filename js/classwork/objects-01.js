console.log("--------------- Example 01 ---------------");

// ! literal of object

const playlist = {
  name: "my playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackCount: 3,
};

console.log(playlist);

const fn = function (object) {
  // object = {a: 1, b: 2}
  console.log(object);
};

fn({ a: 1, b: 2 });

const rtfm = function () {
  return { a: 1, b: 2 };
};

console.log(rtfm());

console.log("--------------- Example 02 ---------------");

console.log(playlist.tracks);

const propertyName = "tracks";
// undefined
console.log(propertyName.propertyName);
console.log(playlist[propertyName]);

// they are the same
console.log(playlist.rating);
console.log(playlist["rating"]);

console.log("--------------- Example 03 ---------------");

const username = "mango";
const email = "mango@mail.com";

// short description of properties
const signUpData = {
  username,
  email,
};

console.log(signUpData);

console.log("--------------- Example 04 ---------------");

const inputName = "color";
const inputValue = "tomato";

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData);

console.log("--------------- Example 05 ---------------");

// adding properties
playlist.country = "USA";
console.log(playlist);

// changing properties
playlist.rating = 10;
console.log(playlist);

console.log("--------------- Example 06 ---------------");

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a); // the same object
console.log({ a: 1 } === { a: 1 }); // two different objects

a.c = 100;
b.c = 150;

console.log(a);
console.log(b);

console.log("--------------- Example 07 ---------------");

// array is object
const arr = [1, 2, 3, 4, 5];

arr.hello = "greetings";
console.log(arr);

// function is object
const fnA = function () {
  console.log("hello");
};

fn.hello = "greetings";
console.log(fnA);

console.log("--------------- Example 08 ---------------");

const myPlaylist = {
  name: "my playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  changeName(newName) {
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

myPlaylist.changeName("playlist");

myPlaylist.addTrack("track-4");
console.log(myPlaylist.getTrackCount());

myPlaylist.updateRating(7);

console.log(myPlaylist);

console.log("--------------- Example 09 ---------------");

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedBack = 0;

// Object.keys
const keys = Object.keys(feedback);
console.log(keys);

for (let key of keys) {
  console.log(key);
  console.log(feedback[key]);

  totalFeedBack += feedback[key];
}
console.log(totalFeedBack);

// Object.values
const values = Object.values(feedback);
console.log(values);

for (let value of values) {
  console.log(value);

  totalFeedBack += value;
}
console.log(totalFeedBack);

console.log("--------------- Example 10 ---------------");

const friends = [
  { name: "Mango", isOnline: false },
  { name: "Polly", isOnline: true },
  { name: "Kiwi", isOnline: true },
  { name: "Ajax", isOnline: false },
];

console.table(friends);

// for (let friend of friends) {
//   console.log(friend.isOnline);
//   friend.newProp = 666;
// }

// console.table(friends);

const findFriendByName = function (allFriends, name) {
  for (let friend of allFriends) {
    if (friend.name === name) {
      return `${name} is found`;
    }
  }
  return `${name} is not found`;
};
console.log(findFriendByName(friends, "Kiwi"));
console.log(findFriendByName(friends, "Jango"));

console.log("--------------- Example 11 ---------------");

const getOnlineFriends = function (allFriends) {
  let friendIsOnline = [];
  for (let friend of allFriends) {
    if (friend.isOnline) {
      friendIsOnline.push(friend);
    }
  }
  return friendIsOnline;
};
console.log(getOnlineFriends(friends));

console.log("--------------- Example 12 ---------------");

const getAllNames = function (allFriends) {
  let friendNames = [];
  for (let friend of allFriends) {
    friendNames.push(friend.name);
  }
  return friendNames;
};
console.log(getAllNames(friends));

console.log("--------------- Example 13 ---------------");

const getOfflineFriends = function (allFriends) {
  let friendIsOffline = [];
  for (let friend of allFriends) {
    if (!friend.isOnline) {
      friendIsOffline.push(friend);
    }
  }
  return friendIsOffline;
};
console.log(getOfflineFriends(friends));

console.log("--------------- Example 14 ---------------");

const getFriendsByOnlineStatus = function (allFriends) {
  let friendsByOnlineStatus = { online: [], offline: [] };
  for (let friend of allFriends) {
    // if (friend.isOnline) {
    //   friendsByOnlineStatus.online.push(friend);
    // } else {
    //   friendsByOnlineStatus.offline.push(friend);
    // }
    const key = friend.isOnline ? 'online' : 'offline';
    friendsByOnlineStatus[key].push(friend);
  }
  return friendsByOnlineStatus;
};
console.log(getFriendsByOnlineStatus(friends));

