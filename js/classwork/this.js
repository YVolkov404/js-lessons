console.log("[] === [] :>> ", [] === []);
console.log("{} === {}} :>> ", {} === {});
console.log(
  "function() {} === function() {} :>> ",
  function () {} === function () {},
);

const fnA = function () {
  console.log("hello");
};

const fnB = fnA;
console.log("fnA === fnB :>> ", fnA === fnB);

console.log("--------------- Example 01 ---------------");

const user1 = {
  tag: "Mango",
  showTag() {
    console.log("this :>> ", this);
  },
};

user1.showTag();

console.log("--------------- Example 02 ---------------");

const foo = function () {
  console.log("this :>> ", this); // undefined
};

foo();

console.log("--------------- Example 03 ---------------");

const showTag = function () {
  console.log("this :>> ", this);
};

showTag();

const user2 = {
  tag: "Mango",
};

user2.showUserTag = showTag;
console.log(user2);

user2.showUserTag();

console.log("--------------- Example 04 ---------------");

const user3 = {
  tag: "Mango",
  showTag() {
    console.log("this :>> ", this);
    // console.log('this.tag :>> ', this.tag);
  },
};

user3.showTag();

const outerShowTag = user3.showTag;

outerShowTag();

console.log("--------------- Example 05 ---------------");

const user4 = {
  tag: "Mango",
  showTag() {
    console.log("this :>> ", this);
    // console.log("this.tag :>> ", this.tag);
  },
};

const invokeAction = function (action) {
  console.log(action);
  action();
};

invokeAction(user4.showTag);

console.log("--------------- Example 06 ---------------");

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log("this :>> ", color);
  };
  // changeColor();

  const sweater = {
    color: "teal",
  };

  sweater.updateColor = changeColor;

  return sweater.updateColor;
};

const swapColor = makeChangeColor();

swapColor("blue");

console.log("--------------- Example 07 ---------------");

const changeColor = function (color) {
  console.log("this :>> ", color);
  this.color = color;
};

const hat = {
  color: "blue",
};

const changeHatColor = changeColor.bind(hat);

changeHatColor("green");
console.log(hat);

console.log("--------------- Example 08 ---------------");

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

// const updateCounter = function (value, callback) {
//   callback(value);
// }

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter))

// the following DOM code should only run in a browser
if (typeof document !== "undefined") {
  const decrementButton = document.querySelector(".js-decrement");
  const incrementButton = document.querySelector(".js-increment");
  const value = document.querySelector(".js-value");

  // guard in case the elements are missing
  if (decrementButton && incrementButton) {
    decrementButton.addEventListener("click", function () {
      counter.decrement();
      if (value) value.textContent = counter.value;
    });

    incrementButton.addEventListener("click", function () {
      counter.increment();
      if (value) value.textContent = counter.value;
    });
  }
}
