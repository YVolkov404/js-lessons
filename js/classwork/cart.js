const cart = {
  items: [],
  getItems() {
    return this.items;
  },
    add(product) {
    this.items.push(product);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < this.items.length; i += 1) {
      const name = items[i];
      if (productName === name) {
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;
    for (const { price } of items) {
      total += price;
    }
    return total;
  },
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
console.table(cart.getItems("Peach"));

cart.clear();
console.table(cart.getItems());

cart.increaseQuantity("Apple");
console.table(cart.getItems());

cart.decreaseQuantiti("Kiwi");
cart.decreaseQuantiti("Peach");
console.table(cart.getItems());

console.log(cart.countTotalPrice());
