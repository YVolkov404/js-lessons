console.log('rep-callback-fn');
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ?----------- ФУНКЦІЯ ЗВОРОТНЬОГО ВИКЛИКУ :: CALLBACK-ФУНКЦІЯ ----------
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 * !___ функція може приймати інші функції як параметри
 * -----------------------------------------------------------------------
 * !___ функція що передається іншій функції як аргумент називається -->
 * ?        >>> функція зворотнього виклику [callback-функція]
 * -----------------------------------------------------------------------
 * !___ функція що приймає іншу функцію як параметр -->
 * !___ >>> або повертає функцію як результат своєї роботи називається -->
 * ?        >>> функція вищого порядку [higher order function]
 *
 * *======================================================================
 */

// *======================================================================

// ! --> example 1

const fnA = function (message, callback) {
    console.log(message);

    console.log(callback);

    callback();
};

const fnB = function () {
    console.log('justLog');
};

fnA('sayHello', fnB);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: функція doMath(a, b, callback)
 */

// ! --> example 2

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
};

const add = function (x, y) {
    return x + y;
};

const sub = function (x, y) {
    return x - y;
};

doMath(2, 3, add);
doMath(10, 7, sub);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> літерали функції : лаконічна форма запису попередніх прикладів

doMath(2, 3, function (x, y) {
    return x + y;
});

doMath(10, 7, function (x, y) {
    return x - y;
});

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: відкладений виклик >>> реєстрація подій
 *    ? :: const buttonRef = document.querySelector >>> ['.js-button']
 */

// ! --> example 2

const buttonRef = document.querySelector('.js-button');

const handleButtonClick = function () {
    console.log('unixTime : ' + Date.now());
};

buttonRef.addEventListener('click', handleButtonClick);

console.dir(buttonRef);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: відкладений виклик : геолокація
 *    ? :: windows.navigator.geolocation.getCurrentPosition()
 */

// ! --> example 3

const onGetPositionSuccess = function (position) {
    console.log('onGetPositionSuccess');
    console.log(position);
};

const onGetPositionError = function (error) {
    console.log('onGetPositionError');
    console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: відкладений виклик : інтервали
 *    ? :: у коді перед затримкою
 *    ? :: у коді одразу після затримки
 *    ? :: у коді через 3 секунди в після затримки
 */

// ! --> example 4

const callback = function () {
    console.log('over 3 sec after timeout'); // у коді через 3 секунди в після затримки
};

console.log('before timeout'); // у коді перед затримкою

setTimeout(callback, 2000);

console.log('after timeout'); // у коді одразу після затримки

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: відкладений виклик : http-запит
 */

// ! --> example 5

const onRequestSuccess = function (response) {
    console.log(
        'виклик функції onRequestSuccess після схвальної відповіді від backend',
    );
    console.log(response);
};

fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(onRequestSuccess);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: фільтр
 */

// ! --> example 6

const filterArray = function (array, checkNumber) {
    const filteredArray = [];
    for (const number of array) {
        // console.log(number);
        // console.log(checkNumber(number));
        const numberPassed = checkNumber(number);
        if (numberPassed) {
            filteredArray.push(number);
        }
    }
    return filteredArray;
};

const callbackArray = function (value) {
    return value >= 3;
};

const methodFilter1 = filterArray([1, 2, 3, 4, 5, 6, 7], callbackArray);
console.log(methodFilter1);

const methodFilter2 = filterArray([1, 2, 3, 4, 5, 6, 7], function (value) {
    return value <= 6;
});
console.log(methodFilter2);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 7

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapples', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsQuantity = function (fruit) {
    return fruit.quantity >= 120;
};

const getFilterFruits = filterArray(fruits, getFruitsQuantity);
console.log(getFilterFruits);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ?------------------- ФУНКЦІЯ ЗВОРОТНЬОГО ВИКЛИКУ :: ЗАМИКАННЯ -------------------------------
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 * !___ функція може повертати іншу функцію котра в момент виклику буде мати доступ -->
 * !___ >>> до всіх локальних змінних області видимості той функції що її повернула
 * ?        >>> це називається замиканням
 *
 * *============================================================================================
 */

// *============================================================================================

// ! --> example 8

const foo = function () {
    const innerVariable = 'значення внутрішньої змінної функції foo';

    const innerFunction = function () {
        console.log(innerVariable);
    };
    return innerFunction;
};

const outerFunction = foo();

outerFunction();

console.log(outerFunction);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 8

const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} cook ${dish}`);
    };
    return makeDish;
};

const mainDish = makeSheff('Polly');

console.dir(mainDish);

mainDish('Pizza');
mainDish('Chicken');
mainDish('Fish');

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 9

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint); // 3
const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

console.log(someInt);
console.log(withDecimals);

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 1));
// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));

function rounder(places) {
    return function (num) {
        return Number(num.toFixed(places));
    };
}

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.4567));
console.log(rounder3(3.4567));

// rounder2(floatingPoint); // 3.46
// rounder3(floatingPoint); // 3.457

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 10

/**
 * todo :: приватні данні та функції - прихована реалізація, інтерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    // const changeBy = function (amount) {
    //     salary += amount;
    // };

    return {
        raise(amount) {
            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Current salary : ${employeeName} --> ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());
console.dir(salaryManager.current);

// ! --> example 11

const myLibFactory = function () {
    let value = 0;

    const add = function (num) {
        value += num;
    };

    return {
        add,
        getValue() {
            return value;
        },
    };
};

const mylib = myLibFactory();

console.dir(mylib.getValue);

console.log(mylib);
console.log(mylib.getValue());

mylib.add(10);
console.log(mylib.getValue());

console.log('++++++++++++++++++++++++++++++++++++++++++++++');
