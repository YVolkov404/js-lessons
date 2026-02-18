console.log("rep-obj-01");

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// names of keys are unique
const playlist = {
  name: "My loving playlist",
  rating: 12,
  trackList: ["track-1", "track-2", "track-3"],
  trackCount: 3,
  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.trackList.push(track);
    this.trackCount = this.trackList.length;
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.trackList.length;
  },
};

console.log(playlist);
console.log(playlist.name);
console.log(playlist.trackList);
console.log(playlist.trackCount);

// they are the same
console.log(playlist.rating);
console.log(playlist["rating"]);

const propertyName = "trackList";
console.log(playlist[propertyName]);
// undefined
console.log(playlist.propertyName);

// adding property
playlist.rating = 4.7;

// changing property value
playlist.trackCount = 5;

console.log(playlist);

// methods : this

// changing property value
playlist.changeName("My playlist");
playlist.updateRating(5);
//adding property value
playlist.addTrack("track-4");

console.log(playlist);
console.log(playlist.getTrackCount());

//================================

const fn = function (myObject) {
  //myObject = { a: 1, b: 2 }
  console.log(myObject);
};

fn({ a: 1, b: 2 });

//================================

const newFn = function () {
  return { a: 5 };
};

console.log(newFn);

//================================

const username = "Mango";
const email = "mango@mail.com";

const signUpData = {
  username,
  email,
  // strings are the same
  // username: username,
  // email: email,
};

console.log(signUpData);

//===============================

const inputName = "color";
const inputValue = "tomato";

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData);

//================================

// comparing arrays : they are NOT equal
console.log([] === []); // false

const a = { x: 1, y: 2 };
const b = a;

// comparing by link : they are equal
console.log(b === a); // true

a.z = 3;

console.log(a);
console.log(b);

// case : objects are NOT equal
console.log({ a: 1 } === { a: 1 }); // false

//=======================================

const k = [1, 2, 3];

k.hello = "world";

console.log(k);

//=======================================

const func = function () {
  console.log("hello");
};

func.hello = "world";

console.log(func.hello);

//=======================================

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

// for...in
for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}

// hasOwnProperty()
for (const key in book) {
  // Якщо це власна властивість - виконуємо тіло if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Якщо це невласна властивість - нічого не робимо
}

// Object.keys()
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

// Object.values()
const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// Object.entries()
const entries = Object.entries(book);
console.log(entries); // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

//=======================================

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4

//======================================

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

const someKeys = Object.keys(feedback);

console.log(someKeys);

for (const key of someKeys) {
  console.log(key);
  console.log(feedback[key]);

  totalFeedback += feedback[key];
}

console.log(`totalFeedback: `, totalFeedback);

const someValues = Object.values(feedback);

console.log(someValues);

for (const value of someValues) {
  totalFeedback += value;
}

console.log(`totalFeedback: `, totalFeedback);

//==========================================

// робота з колекцією (масив об'єктів)
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

// friends[1].newProp = 555;

console.table(friends);

for (const friend of friends) {
  console.log(friend);
  // console.log(friend.online);
  // console.log(friend.name);

  // friend.newProp = 555;
}

console.table(friends);

//============================================

const findFriendByName = function (allFriends, name) {
  for (const friend of allFriends) {
    console.log(friend);
    // console.log(friend.name === name);

    if (friend.name === name) {
      return "Bingo!";
    }
  }
  return "Lose!";
};

console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Melton"));

//================================================

const getAllFriendsName = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
};

console.log(getAllFriendsName(friends));

//================================================

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends));

//================================================

const getOfflineFriends = function (allFriends) {
  const offlineFiends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFiends.push(friend);
    }
  }

  return offlineFiends;
};

console.log(getOfflineFriends(friends));

//===============================================

const getFriendsByOnlineStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByOnlineStatus(friends));

//=============================================

const x = {
  a: 2,
  b: 34,
  c: 8,
  d: 14,
};

console.log(Object.keys(x).length);
