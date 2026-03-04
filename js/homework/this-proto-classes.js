console.log("============== Example ==============");

const petya = {
  username: "Petya",
  showName() {
    console.log(this.username);
  },
};

petya.showName();

console.log("============== Example ==============");

const bookShelf = {
  authors: ["Bernard Cornuel", "Robert Shekly"],
  getAuthors() {
    return this.authors;
  },
  addAuthorth(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors());
bookShelf.addAuthorth("lee Tanit");
console.log(bookShelf.getAuthors());

console.log("============== Example ==============");

function showThis() {
  console.log("this :>> ", this);
}

showThis();

const user = {
  name: "Mango",
};

user.showContext = showThis;

console.log(user);

user.showContext();

console.log("============== Example ==============");

const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      console.log("this :>> ", this);
    };
    foo();
    console.log("this :>> ", this);
  },
};

console.log(showThis());

console.log("============== Example ==============");

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};
const poly = {
  username: "Полі",
};

greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

