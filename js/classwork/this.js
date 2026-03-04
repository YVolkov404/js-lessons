console.log("[] === [] :>> ", [] === []);
console.log("{} === {}} :>> ", {} === {});
console.log(
  "function() {} === function() {} :>> ",
  function () {} === function () {},
);

const fnA = function () {
    console.log('hello');
}

const fnB = fnA;
console.log('fnA === fnB :>> ', fnA === fnB);

console.log("============== Example ==============");

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('this :>> ', this);
//   }
// }

// user.showTag()

console.log("============== Example ==============");

const foo = function () {
  console.log('this :>> ', this); // undefined
}

foo();

console.log("============== Example ==============");

// const showTag = function () {
//   console.log('this :>> ', this);
// }

// showTag()

// const user = {
//   tag: 'Mango'
// }

// user.showUserTag = showTag;

// console.log(user);

// user.showUserTag();

console.log("============== Example ==============");

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('this :>> ', this);
//     console.log('this.tag :>> ', this.tag);
//   }
// }

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

console.log("============== Example ==============");

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('this :>> ', this);
//     console.log('this.tag :>> ', this.tag);
//   }
// }

// const invokeAction = function (action) {
//   console.log(action);
//   action();
// }

// invokeAction(user.showTag);

console.log("============== Example ==============");

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('this :>> ', color);
//   }
//   // changeColor();

//   const sweater = {
//     color: 'teal',
//   }

//   sweater.updateColor = changeColor;

//   return sweater.updateColor;
// }

// const swapColor = makeChangeColor();

// swapColor('blue')

console.log("============== Example ==============");

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('this :>> ', color);
  }

  return changeColor;
}

const updateColor = makeChangeColor();
updateColor("yellow");

const hat = {
  color: 'blue',
  updateColor,
};

hat.updateColor('orange')

console.log("============== Example ==============");

const counter = {
  value: 0,
  increment (value) {
    this.value += value;
  },
  decrement (value) {
    this.value -= value;
  }
}

const updateCounter = function (value, callback) {
  callback(value);
}

updateCounter(10, counter.increment);
updateCounter(5, counter.decrement)


