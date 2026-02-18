console.log("rep-obj-02");

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// ------------------ SPREAD ------------------------//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const numbers1 = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

console.log(numbers1);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const numbers2 = [0, ...[1, 2, 3], 4, 5];

console.log(numbers2);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const temps = [14, 43, 42, 67, 54, 23, 88];

console.log(Math.max(23, 43, 16, 67, 77));
console.log(Math.min(...temps));

Math.max(14, 43, 42, 67, 54, 23, 88);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const a = [1, 2, 3]; // масив примітивних значень

// передача за значенням : створюється копія масиву
const b = [...a];

a[1] = 999; // зміниться другий елемент лише масиву a[1, 999, 3]

console.log("a:", a);
console.log("b:", b);
console.log(a === b); // false

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//++++++++++++++++++++++++++++++++++++++++++++++++++++

const x = [{ a: 1 }, { b: 2 }, { c: 3 }]; // масив складних значень - об'єктів

// передача за посиланням : створюється посилання на об'єкт
const y = [...x];

console.log("x:", x);
console.log("y:", y);

console.log(x[0] === y[0]); // true
x[0].a = 999; // за посиланням обидва масиви будуть мати одне й те саме значення

console.log(x === y); // false

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const lastWeekTemps = [34, 27, 25];
const currentTemps = [36, 31, 28];
const nextWeekTemps = [22, 26, 30];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log("allTemps:", allTemps);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const d = { x: 1, y: 2 };
const f = { x: 0, z: 3 };

// const g = Object.assign({ x: 4 }, d, f);

// сучасний синтаксис
const g = {
  ...d,
  ...f,
};

console.log(g);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// ---------------- DESTRUCTURING -------------------//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const playlist = {
  name: "My loving playlist",
  rating: 12,
  trackList: ["track-1", "track-2", "track-3"],
};

const {
  name,
  rating,
  trackList,
  trackCount: numberOfTracks = 3,
  author = "John Dou",
} = playlist;

console.log(numberOfTracks);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const profile = {
  userName: "Jamie",
  tag: "blogger",
  location: "Jamaica",
  site: "https://twitter.com",
  stats: {
    followers: 9999,
    views: 6666,
    likes: 3333,
  },
};

// звичайна деструктуризація
// const { userName, tag, location, site } = profile;
// const { followers, views, likes } = profile.stats;

// глибока деструктуризація
const {
  //userName,
  //tag,
  //location,
  site,
  stats: { followers, views, likes },
} = profile;

//console.log(userName, tag, location, site, followers, views, likes);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// деструктуризація масиву
const rgb = [255, 46, 103];

const [red, green, blue] = rgb;

// const [red, , blue] = rgb; // пропуск властивості

console.log(red, green, blue);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

const authors = {
  kiwi: 3,
  mango: 9,
  poly: 0,
  ajax: 7,
};

// using values
const ratings = Object.values(authors);

console.log(Math.max(...ratings));

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// using keys
const keys = Object.keys(authors);

for (const key of keys) {
  console.log(key);
  console.log(authors[key]);
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++");

// using entries
const entries = Object.entries(authors);

for (const entry of entries) {
  // console.log(entry);
  // const name = entry[0];
  // const rating = entry[1];
  const [name, rating] = entry;
  console.log(name, rating);
}

console.log("++++++++++++++++ the same ++++++++++++++++++++");

for (const [name, rating] of entries) {
  console.log(name, rating);
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------- REST ------------------------//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const { userName, tag, location, ...restProps } = profile;

/* const restProps = {
    site: profile.site,
    stats: profile.stats
}; */

console.log(userName, tag, location);
console.log(restProps);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// Патерн "Об'єкт налаштувань" : деструктуризація параметру (об'єкта) в сигнатурі функції

const showProfileInfo1 = function ({
  userName,
  tag,
  location,
  site,
  stats: { followers, views, likes },
}) {
  console.log(userName, tag, location, site, followers, views, likes);
};

showProfileInfo1(profile);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const showProfileInfo2 = function ({ userName, tag, location, ...restProps }) {
  console.log(restProps);
};

showProfileInfo2(profile);

/*
const fn = function (params) {

}

fn({
    age: 10,
    friends: 5,
    isOnline: true,
    hobbies: [],
    games: {},
    rating: 6
})

*/

// user case : how adding info-card to html

const userProfile = {
  userName: "Bandera",
  tag: "blogger",
  location: "Ukraine",
  site: "https://twitter.com",
  stats: {
    followers: 9999,
    views: 6666,
    likes: 3333,
  },
};

const makeProfileMarkup = function (profile) {
  const {
    userName,
    avatar = "https://shorturl.at/hpqrt",
    name = "uglyCat",
    tag,
    location,
    stats: { followers, views, likes },
  } = profile;

  return `<div>
                <img src="${avatar}" alt="user avatar">
                <p>${userName}</p>
                <p>${name}<span>@${tag}</span></p>
                <p>Location: ${location}</p>
                <ul>
                    <li>Followers: ${followers}</li>
                    <li>Views: ${views}</li>
                    <li>Likes: ${likes}</li>
                </ul>
            </div>`;
};

const markup = makeProfileMarkup(userProfile);

console.log(makeProfileMarkup(userProfile));

document.body.insertAdjacentHTML("afterbegin", markup);

console.log("++++++++++++++++++++++++++++++++++++++++++++++");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++//
//----------------- CREATING CART ---------------------//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++//
console.log("--------------- Creating Cart ----------------");

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (productName === name) {
        console.log("We find this product: ", productName);
        console.log("it has next index: ", i);

        // remove product by index
        items.splice(i, 1);
        console.log("Remove it!");
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: "🍅", price: 50 });
cart.add({ name: "🍅", price: 50 });
cart.add({ name: "🍋", price: 90 });
cart.add({ name: "🥔", price: 30 });
cart.add({ name: "🥔", price: 30 });
cart.add({ name: "🍌", price: 65 });
cart.add({ name: "🍌", price: 65 });
cart.add({ name: "🍌", price: 65 });

console.table(cart.getItems());

cart.remove("🥔");

console.table(cart.getItems());

console.log("Total price: ", cart.countTotalPrice());
