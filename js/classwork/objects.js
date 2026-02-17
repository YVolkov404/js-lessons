// ? example
const name = "Playlist";
const propKey = "location";

const playlist = {
  name,
  rating: 5,
  tracks: ["track01", "track02", "track03"],
  [propKey]: {},
};

// ? usecase
playlist[propKey] = ["ukraine", "usa", "sweden"];
playlist.isPublic = true;
// ? usecase
const prop = "tracks";
console.log(playlist[prop]);
// ? usecase
console.log(playlist.tracks[1]);
console.log(playlist);

// ? usecase :: using destructrurig
const {
  author = 'user',
  rating,
  tracks,
  trackCount: numberOfTracks =0,
  [propKey]: {},
} = playlist;

console.log(playlist);

// console.log(trackCount);
console.log(numberOfTracks);

tracks.push('tarck04');
console.log(tracks);

console.log(rating);

// ? example
const inputKey = "color";
const inputName = "tomato";

const colorPickedData = {
  [inputKey]: inputName,
};

colorPickedData.name = "Picker";
colorPickedData.data = [1, 2, 3];
console.log(colorPickedData.data[2]);
console.log(colorPickedData);

// ? example
// function is the Object
const foo = function () {
  console.log("helllo");
};

foo.hello = "greetings";

console.dir(foo);
console.dir(foo.hello);

// ? example :: methods of the Object
const myPlaylist = {
  name: "playlist",
  rating: 5,
  tracks: ["track01", "track02", "track03"],
  trackCount: 3,
  getName(value) {
    console.log(value);
  },
  changeName(newName) {
    this.name = newName;
  },
  addTracks(track) {
    this.tracks.push(track);
    this.trackCount = this.tracks.length; // dynamic upd trackCount property
  },
  addPropName(prop) {
    this.country = prop;
  },
  getTrackCount() {
    // return upd trackCount property
    return this.tracks.length;
  },
};

myPlaylist.getName(10);
myPlaylist.changeName("my-playlist");
myPlaylist.addPropName("Ukraine");
// show how upd trackCount property
console.log(myPlaylist.getTrackCount());
myPlaylist.addTracks("track04");
console.log(myPlaylist.getTrackCount());
myPlaylist.addTracks("track05");
console.log(myPlaylist.getTrackCount());

console.log(myPlaylist);

// ? example
let totalFeedBack = 0;

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
// ? usecase :: receiving array of object keys
const keys = Object.keys(feedback);

console.log(keys);

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);

  totalFeedBack += feedback[key];
}

console.log(totalFeedBack);
// ? usecase :: receiving array of object props
const values = Object.values(feedback);

console.log(values);

for (const value of values) {
  console.log(value);

  totalFeedBack += value;
}

console.log(totalFeedBack);
// ? usecase :: receiving 2 array - keys and props
const object = {
  a: "some string",
  b: 42,
};

console.log(Object.entries(object));

for (const [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
}

// ? example
const friends = [
  { name: "Mango", isOnline: false },
  { name: "Polly", isOnline: true },
  { name: "Kiwi", isOnline: true },
  { name: "Ajax", isOnline: false },
];

console.log(friends);

for (const friend of friends) {
  console.log(friend);
  console.log(friend.name);
  console.log(friend.isOnline);
  console.log((friend.newProp = "prop"));
}

// ? example
const findFriendByName = function (friends, name) {
  for (const friend of friends) {
    console.log(friend);
    //   console.log(friend.name);

    if (name === friend.name) {
      return name;
    }
  }
  return `${name} not found`;
};

console.log(findFriendByName(friends, "Polly"));
console.log(findFriendByName(friends, "Foma"));

// ? example
const getAllFriendsNames = function (friends) {
  let arrOfNames = [];

  for (const friend of friends) {
    arrOfNames.push(friend.name);
  }
  return arrOfNames;
};

console.log(getAllFriendsNames(friends));
console.log(getAllFriendsNames(friends));

// ? example
const getOnlineFriends = function (friends) {
  let isOnlineArr = [];

  for (const friend of friends) {
    if (!friend.isOnline) {
      isOnlineArr.push(friend.name);
    }
  }
  return isOnlineArr;
};

console.log(getOnlineFriends(friends));
console.log(getOnlineFriends(friends));

// ? example
const getFriendsByOnlineStatus = function (friends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of friends) {
    if (friend.isOnline) {
      friendsByStatus.online.push(friend.name);
      continue;
    }
    friendsByStatus.offline.push(friend.name);
  }

  return friendsByStatus;
};

console.log(getFriendsByOnlineStatus(friends));

// ? exanmple
const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    product.quantity = 1;
  },
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantiti(productName) {},
};

console.log(cart);

console.table(cart.getItems());

cart.add({ name: "Mango", price: 50 });
cart.add({ name: "Kiwi", price: 30 });
cart.add({ name: "Apple", price: 20 });
cart.add({ name: "Strawberry", price: 60 });
cart.add({ name: "Peach", price: 40 });

console.table(cart.getItems());

cart.remove();
console.table(cart.getItems());

cart.clear();
console.table(cart.getItems());

cart.increaseQuantity("Apple");
console.table(cart.getItems());

cart.decreaseQuantiti("Kiwi");
cart.decreaseQuantiti("Peach");
console.table(cart.getItems());

console.log(cart.countTotalPrice());

// ? example :: using SPREAD
// const arr = [1, 2, 3]

// const numbers = [0, 9, ...arr, 4, 5];
// console.log(numbers);

console.log(..."Hello World");

//? example
const temps = [23, 32, 45, 35, 21, 19, 67];

console.log(Math.max(...temps));
console.log(Math.min(...temps));

//? example
const arr1 = [1, 34, 23, 5];
const arr2 = [3, 45, 22];
const arr3 = [78, 0];

const arr = [...arr2, ...arr1, ...arr3];

console.log(arr);

// ? example :: using Object.assing() and SPREAD
const a = { x: 1, y: 2 };
const b = { x: 3, z: 4 };
const g = {};

const c = Object.assign(g, a, b);

console.log(c);

const d = { ...a, name: "Mango", ...b };

console.log(d);

//? example :: using destructuring array
const rgb = [232, 123, 97];

const [red, blue, green] = rgb;

console.log(red, blue, green);

// ? example
const authors = {
  kiwi: 5,
  polly: 9,
  mango: 3,
  ajax: 1
}
// ? usecase
const ratings = Object.values(authors);

console.log(ratings);

console.log(Math.min(...ratings));

// ? usecase
const entries = Object.entries(authors);

for (const [name, rating] of entries) {

  console.log(name, rating);
}

console.log("hello world");
