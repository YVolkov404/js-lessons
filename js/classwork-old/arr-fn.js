console.log('rep-arrow-fn');
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * *++++++++++++++++++++++++++++++++++++++++++++++
 * ?------------ СТРІЛОЧНІ ФУНКЦІЇ ---------------
 * *++++++++++++++++++++++++++++++++++++++++++++++
 */

// *==============================================

// ! --> example 1

const add1 = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c;
};

const addArrow1 = (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;
};

const addArrow2 = (a, b, c) => a + b + c;

// ? :: використовуємо порожні лапки --> якщо немає параметрів
const addArrow3 = () => 5;

// ? :: не використовуємо лапки --> якщо маємо лише один параметр
const addArrow4 = a => a + 10;

console.log(add1(5, 10, 15));
console.log(addArrow1(5, 10, 15));
console.log(addArrow2(5, 10, 15));
console.log(addArrow3());
console.log(addArrow4(5));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2

const add2 = function (a, b, c) {
    console.log(arguments);
    return a + b + c;
};

const addArrow5 = (...args) => {
    console.log(args);
};

console.log(add2(5, 10, 15));
console.log(addArrow5(5, 10, 15));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 3

const fn = function () {
    return {
        a: 5,
    };
};

console.log(fn());

const arrowFn = () => ({ a: 5 });

console.log(arrowFn());

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 4

const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 5

const logMessage = message => {
    console.log(message);
};

console.log(logMessage('sayHi'));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 6

const greet = () => {
    console.log('Hello!');
};
console.log(greet);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 7

/**
 * todo :: явне (explicit) та неявне (implicit) повернення
 */

// explicit
const addNum1 = (a, b) => {
    return a + b;
};

// implicit
const addNum2 = (a, b) => a + b;

console.log(addNum1(2, 3));
console.log(addNum2(2, 3));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 8

/**
 * todo :: псевдо-масив arguments
 */

// при такому синтаксисі обов'язкові лапки
const addArr = (...args) => {
    console.log(args);
};

addArr(1, 2, 3, 4, 5, 6, 7);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 8

/**
 * todo :: контекст всередені стрілочної функції визначається місцем її оголошення а не виклику
 *    ! :: та посилається на контекст її батьківської функціі
 */

const showThis = () => {
    console.log('showThis', this);
};

showThis();

const user = { name: 'Mango' };
user.showContext = showThis;

user.showContext();

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 9

const usr = {
    fullName: 'Mango',
    showName() {
        console.log('this: ', this);
        console.log('this.fullName: ', this.fullName);

        const inner1 = function () {
            console.log('this is inner fn: ', this);
        };

        const inner2 = () => {
            console.log('this is inner fn: ', this);
        };

        inner1();
        inner2();
    },
};

usr.showName();

/**
 * todo :: стрілочні функції не можуть бути методами об'єкта
 *    ! :: контекст стрілки не можна змінити --> this: undefined
 */

const u5er = {
    fullName: 'Mango',
    showName: () => {
        console.log('this: ', this);
    },
};

u5er.showName();

const objA = {
    x: 5,
    showX() {
        console.log('objA.showThis: ', this);
        console.log(this.x);

        const objB = {
            y: 10,
            showThis() {
                console.log('objB.showThis: ', this);
            },
            // showThis: () => {
            //     console.log('objB.showThis: ', this);
            // },
        };

        objB.showThis();
    },
};

objA.showX();

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 10

/**
 * todo :: стрілочні функції не можуть бути використані в якості конструкторів
 *    ? :: вони не мають всередені метода [[Construct]]
 */

// const User = name => {
//     this.name = name;
// };

// console.log(new User('Mango'));
