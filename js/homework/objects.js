console.log("-------------- example -------------------");

const books = {
  books: ["The Last Kingdom"],
  author: "Bernard Cornwell",
  genres: ["hidtorical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
  getBooks() {
    return this.books;
  },
  addBooks(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(books);

books.getBooks();
books.addBooks(["The First Kingdom", "The Myst", "Dream Guardian"]);
books.removeBook("The Last Kingdom");
console.log(books.getBooks());

console.log("-------------- example -------------------");

for (const key in books) {
  if (!Object.hasOwn(books, key)) continue;

  const element = books[key];
  console.log(element);
}

const animal = {
  legs: 4,
};

console.log("-------------- example -------------------");

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog);
console.log(dog.name);
console.log(dog.legs);

const object = {};
object.foo = 42;

console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("legs"));

console.log("-------------- example -------------------");

const keys = Object.keys(books);

for (const item of keys) {
  console.log(item);
}

console.log("-------------- example -------------------");

const values = Object.values(books);

for (const item of values) {
  console.log(item);
}

console.log("-------------- example -------------------");

const entries = Object.entries(books);

console.log(entries);

for (const item of entries) {
  console.log(item);
}

console.log("-------------- example -------------------");

const booksCollection = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];

const bookNames = [];
let totalRating = 0;

for (const item of booksCollection) {
  console.log(item.title);
  console.log(item.author);
  console.log(item.rating);

  bookNames.push(item.author);
  totalRating += item.rating;
}

console.log(bookNames);
console.log(totalRating);

const averageRating = (totalRating / booksCollection.length).toFixed(1);

console.log(averageRating);

console.log("-------------- example -------------------");

const temps = [22, 43, 14, 56, 34, 78, 61, 21];

// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log(Math.min(...temps));

console.log("-------------- example -------------------");

const spread1 = [...temps];

console.log(spread1);

console.log("-------------- example -------------------");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const spread2 = [...arr1, ...arr2];
const spread3 = [...arr2, ...arr1];

console.log(spread2);
console.log(spread3);

console.log("-------------- example -------------------");

// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

console.log("-------------- example -------------------");

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

console.log("-------------- example -------------------");

const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const { title: firstTitle, coverImage: firstCoverImage } = firstBook;

console.log(firstBook);
console.log(firstTitle, firstCoverImage);

console.log("-------------- example -------------------");

const booksShelf = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
];

for (const item of booksShelf) {
  console.log(item.title);
  console.log(item.author);
  console.log(item.rating);
}

console.log("-------------- example -------------------");

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views = userViews, likes },
} = user;

console.log(user);
console.log(name, views, tag, views, likes);

console.log("-------------- example -------------------");

const rgb = [200, 255, 100];

// const [red, green, blue, alfa = 0.3] = rgb;

const [red, ...colors] = rgb;

console.log(rgb);

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alfa ${alfa}`);
console.log(`Red: ${red}, Colors ${colors}`);

console.log("-------------- example -------------------");

function doStuffWithBook(title, author) {
  console.log(title, author);
}

// ? OR

function doStuffWithBook(book) {
  console.log(book.books, book.author);
}

// ? OR  деструктурізація в сигнатурі (підписі) функції

doStuffWithBook({
  books: ["The Last Kingdom"],
  author: "Bernard Cornwell",
  genres: ["hidtorical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
})

// ? OR
function doStuffWithBook(books) {
  const { author, genres, isPublic, rating } = books;
  console.log(author, genres, isPublic, rating);
}