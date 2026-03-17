console.log("-------------- Example 01 --------------");

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order("Smoked"));
console.log(pizzaPalace.order("Four meats"));
console.log(pizzaPalace.order("Big Mike"));
console.log(pizzaPalace.order("Viennese"));

console.log("-------------- Example 02 --------------");

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount());
customer.addOrder(5000, "Steak");
console.log(customer.getBalance());
console.log(customer.getOrders());

console.log("-------------- Example 03 --------------");

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
};

console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

console.log("-------------- Example 04 --------------");

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);

child.name = "Jason";
child.age = 27;

console.log(child);
console.log(child.hasOwnProperty("surname"));
console.log(child.surname);
console.log(child.hasOwnProperty("age"));
console.log(child.age);

console.log("-------------- Example 05 --------------");

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parents = Object.create(ancestor);
parents.name = "Stacey";
parents.surname = "Moore";
parents.age = 54;

const childs = Object.create(parents);
childs.name = "Jason";
childs.age = 27;

console.log(ancestor.surname);
console.log(ancestor.isPrototypeOf("parents"));
console.log(ancestor.hasOwnProperty("surname"));
console.log(ancestor.hasOwnProperty("heritage"));

console.log(parent.surname);
console.log(parent.isPrototypeOf("child"));
console.log(parent.hasOwnProperty("surname"));
console.log(parent.hasOwnProperty("heritage"));

console.log("-------------- Example 05-09, 12, 15, 16 --------------");

class Car {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }

  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }
  get brand() {
    return this.#brand;
  }
  set brand(newBrand) {
    this.#brand = newBrand;
  }
  get model() {
    return this.#model;
  }
  set model(newModel) {
    this.#model = newModel;
  }
  get price() {
    return this.#price;
  }
  set price(newPrice) {
    if (newPrice > Car.MAX_PRICE) {
      return;
    }
    this.#price = newPrice;
  }
}

const audi = new Car({ price: 35000 });
const bmw = new Car({ price: 64000 });
console.log(audi.price);
console.log(bmw.price);

audi.price = 49000;
console.log(audi.price);

audi.price = 51000;
console.log(audi.price);

console.log(Car.checkPrice(18000));
console.log(Car.checkPrice(64000));

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));

console.log("-------------- Example 10, 13 --------------");

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

console.log("-------------- Example 11, 14 --------------");

class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = this.#value.concat(str);
  }
  padStart(str) {
    this.#value = str.concat(this.#value);
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

console.log("-------------- Example 18, 19, 20 --------------");

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  accessLevel;
  blacklistedEmails;

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.some(element => element === email);
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails);
console.log(mango.isBlacklisted("mango@mail.com"));
console.log(mango.isBlacklisted("poly@mail.com"));
