console.log('--------------- Example 01 ---------------');

console.log([] === []); // not equal
console.log({} === {}); // not equal
console.log(function () {} === function () {}); // not equal

const fnA = function () {
  console.log('hello');
};

const fnB = fnA;
console.log(fnB === fnA);

console.log('--------------- Example 02 ---------------');

// const user = {
//   tag: 'mango',
//   showTag() {
//     console.log('showTag --> this', this);
//   },
// };

// user.showTag();

console.log('--------------- Example 03 ---------------');

const foo = function () {
  console.log('foo --> this', this);
};

foo(); // unsefined

console.log('--------------- Example 04 ---------------');

// const showTag = function () {
//   console.log('showTag --> this', this);
//   console.log('showTag --> this.tag', this.tag);
// }

// showTag(); // undefined

// const user = {
//   tag: 'mango',
// }

// user.showUserTag = showTag;

// console.log('user', user);

// user.showUserTag();

console.log('--------------- Example 05 ---------------');

// const user = {
//   tag: 'polly',
//   showTag(a, b) {
//     console.log('showTag --> this', this);
//     // console.log('showTag --> this.tag', this.tag);
//     return a + b;
//   },
// };

// user.showTag();

// const sum = user.showTag;

// console.log(sum(2, 3));

console.log('--------------- Example 06 ---------------');

const user = {
  tag: 'polly',
  showTag(a, b) {
    console.log('showTag --> this', this);
    // console.log('showTag --> this.tag', this.tag);
    return a + b;
  },
};

const invokeAction = function (action) {
  console.log(action);

  console.log(action(2, 3));
};

invokeAction(user.showTag);

console.log('--------------- Example 07 ---------------');

const fn = function () {
  console.log('fn --> this', this);
};

fn();

console.log('--------------- Example 07 ---------------');

const book = {
  title: 'React fo begginers',
  showThis() {
    console.log('showThis --> this', this);
  },
  showTitle() {
    // console.log('showTitle --> this', this.title);
  },
};

book.showThis();

const outerShowThis = book.showThis;
outerShowThis();

const outerShowTitle = book.showTitle;
outerShowTitle();

console.log('--------------- Example 08 ---------------');

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor --> this', this);
//     this.color = color;
//   };

//   return changeColor;
// };

// const updateColor = makeChangeColor();

// console.log(updateColor);

// const hat = {
//   color: 'blue',
//   updateColor: updateColor,
// };

// hat.updateColor('orange');
// console.log(hat.color);

console.log('--------------- Example 09 ---------------');

// ? example 1

const showThis = function (...args) {
  console.log(args);
  console.log('showThis --> this', this);
};

showThis();

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 10, 20, 30, [40, 50]);
showThis.apply(objA, [10, 20, 30]) // apply only for array

// ? example 2

const changeColor = function (color) {
  console.log('changeColor --> this', this);
  this.color = color;
};

const hat = {
  color: 'black',
};

changeColor.call(hat, 'orange');
console.log(hat.color);

// ? example 3

const changeHatColor = changeColor.bind(hat);

changeHatColor('red');
console.log(hat.color);

console.log('--------------- Example 10 ---------------');

const counter = {
  value: 0,
  increment(value) {
    console.log('increment --> this', this);
    this.value += value;
  },
  decrement(value) {
    console.log('decrement --> this', this);
    this.value -= value;
  }
}

// const updateCounter = function (value, operation) {
//   operation(value);
// }

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(10, counter.decrement.bind(counter));

// console.log(counter);

const valueElement = document.querySelector('.js-value');
const decrementButton = document.querySelector('.js-decrement');
const incrementButton = document.querySelector('.js-increment');

decrementButton.addEventListener('click', function (){
  counter.decrement(10);
  valueElement.textContent = counter.value;
})

incrementButton.addEventListener('click', function (){
  counter.increment(10);
  valueElement.textContent = counter.value;
})

