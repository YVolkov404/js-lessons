console.log("-------------- example -------------------");

const books = {
    books: ['The Last Kingdom'],
    author: 'Bernard Cornwell',
    genres: ['hidtorical prose', 'adventure'],
    isPublic: true,
    rating: 8.38,
    getBooks(){
        return this.books
    },
    addBooks(bookName){
        this.books.push(bookName)
    },
    removeBook(bookName) {
        const bookIndex = this.books.indexOf(bookName);
        this.books.splice(bookIndex, 1)
    }
}

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
    legs: 4
}

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

const averageRating = (totalRating/booksCollection.length).toFixed(1);

console.log(averageRating);

console.log("-------------- example -------------------");

