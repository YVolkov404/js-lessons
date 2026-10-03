console.log("--------------- Example 01 ---------------");

// const numbers = [1, 2, 3].concat([4, 5, 6]);
// console.log(numbers);

// operation spread
const numbers = [
  1000,
  ...[1, 2, 3],
  2000,
  ...[4, 5, 6],
  3000,
  ...[7, 8, 9],
  4000,
];
console.log(numbers);

console.log("--------------- Example 02 ---------------");

const temps = [12, 45, 32, 7, 75, 2];
console.log(Math.max(...temps));

console.log("--------------- Example 03 ---------------");

const lastWeekTemps = [133, 45, 2, 93];
const currentTemps = [34, 65, 7, 81];
const nextWeekTemps = [25, 41, 1, 0, 74];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);

console.log("--------------- Example 04 ---------------");

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

const c = {
  ...a,
  name: "mango",
  ...b,
};
console.log(c);

const defaultSettings = {
  theme: "light",
  showNotification: false,
  hideSidebar: true,
};

const userSettings = {
  showNotification: true,
  hideSidebar: false,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
console.log(finalSettings);

console.log("--------------- Example 05 ---------------");

const playlist = {
  name: "my playlist",
  rating: 5,
  tracks: ["track-01", "track-02", "track-03"],
  trackCount: 3,
};

const {
  name,
  rating,
  tracks,
  trackCount: numberOfTracks = 0, // new prop name with default value
  author = "user",
} = playlist;

console.log(name);
console.log(rating);
console.log(tracks);
console.log(numberOfTracks);
console.log(author);

console.log("--------------- Example 06 ---------------");

const profile = {
  title: "Jacques Gluke",
  tag: "jgluke",
  location: "Ukraine",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// const title = profile.title;
// const tag = profile.tag;
// const location = profile.location;

const {
  title,
  tag,
  location,
  stats: { followers: myFollowers = 555, views, likes },
} = profile;
console.log(title, tag, location, myFollowers, views, likes);

console.log("--------------- Example 07 ---------------");

// ? example 1
const rgb = [232, 123, 97];

const [red, green , blue] = rgb;
console.log(red, green, blue);

// ? example 2
const authors = {
  kiwi: 5,
  polly: 9,
  mango: 3,
  ajax: 1,
};

// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));

const ratings = Object.keys(authors);

for(let key of ratings) {
  console.log(key);
  console.log(authors[key]);
}
