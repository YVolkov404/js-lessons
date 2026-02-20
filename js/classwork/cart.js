const cart = {
  items: [],
  getItems() {
    return this.items;
  },
    add(product) {
    const { items } = this;

    for (const item of items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    }
    
    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
     const {name} = items[i];  

      if (productName === name) {
        console.log(i);
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
    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantiti(productName) {},
};

console.log(cart);

console.log(cart.getItems());

cart.add({ name: "Mango", price: 50 });
cart.add({ name: "Kiwi", price: 30 });
cart.add({ name: "Kiwi", price: 30 });
cart.add({ name: "Apple", price: 20 });
cart.add({ name: "Strawberry", price: 60 });
cart.add({ name: "Strawberry", price: 60 });
cart.add({ name: "Strawberry", price: 60 });
cart.add({ name: "Peach", price: 40 });

console.table(cart.getItems());

cart.remove("Apple");
console.table(cart.getItems());

console.log(cart.countTotalPrice());

cart.clear();
console.log(cart.getItems());

// cart.increaseQuantity("Apple");
// console.table(cart.getItems());

// cart.decreaseQuantiti("Kiwi");
// cart.decreaseQuantiti("Peach");
// console.table(cart.getItems());

