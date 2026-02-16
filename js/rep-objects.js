// ? example
const name = "Playlist";
const propKey = "location";

const playlist = {
  name,
  rating: 5,
  tracks: ["track01", "track02", "track03"],
  trackCount: 3,
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
