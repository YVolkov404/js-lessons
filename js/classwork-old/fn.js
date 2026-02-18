//-------------------------------------

// const add = function (a, b) {
//     const result = a + b;
//     return result;
// };
// console.log(add(5, 10));

//-------------------------------------

// stack overflow example
/* const fnA = function () {
    console.log('fnA working on');
    fnB();
};

const fnB = function () {
    console.log('fnB working on');
    fnC();
};

const fnC = function () {
    console.log('fnC working on');
    console.log(value);
};

fnA(); */

//--------------------------------------

const cart = [50, 34, 321, 27, 49, 4, 12];
let total = 0;

for (const value of cart) {
    total += value;
}

console.log(total);

// function var
const calculateTotalPrice = function (items) {
    let total = 0;

    for (const item of items) {
        total += item;
    }

    return total;
};

const result = calculateTotalPrice([50, 34, 321, 27, 49, 4, 12]);

console.log(`Total : ${result}`);

//-----------------------------------------

// function not returns
const logItems = function (items) {
    for (const item of items) {
        console.log(item);
    }
};

logItems(['Mango', 'Kiwi', 'Orange', 'Banana', 'Cocoanut']);

//-----------------------------------------

const logins = ['salkjdfhn', 'qwejoinvxc', 'opxckljnmz', 'tfgzkjnmbc'];

/*
const findLogin = function (allLogins, loginToFind) {
    for (const login of allLogins) {
        if (login === loginToFind) {
            return `Login ${loginToFind} is find`;
        }
    }

    return `Login ${loginToFind} is not find`;
};
*/

const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind)
        ? `Login ${loginToFind} is find`
        : `Login ${loginToFind} is not find`;
};

console.log(findLogin(logins, 'salffasfhn'));
console.log(findLogin(logins, 'qwejoinvxc'));
console.log(findLogin(logins, 'opxkljzddc'));
console.log(findLogin(logins, 'tfgzkjnmbc'));

//-----------------------------------------

const numbers = [51, 18, 22, 89, 20, 63, 44];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log(smallestNumber);

// function var
const findSmallestNumber = function (numbers) {
    let smallestNumber = numbers[0];

    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }

    return smallestNumber;
};

console.log(findSmallestNumber([51, 18, 22, 89, 20, 63, 44]));

//--------------------------------------

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
    const isEqual = letter === letter.toLowerCase();

    invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}

console.log(invertedString);

// function var
const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase();

        invertedString += isInLowerCase
            ? letter.toUpperCase()
            : letter.toLowerCase();
    }

    return invertedString;
};

console.log(changeCase('TYpesCripT'));
console.log(changeCase('AjaX'));
console.log(changeCase('PyTHon'));

//-----------------------------------------

const title = 'Top benefits of React framework';

const slug = title.toLowerCase().split(' ').join('-');

console.log(slug);

const slugify = function (string) {
    const normalizedTitle = string.toLowerCase();
    const words = normalizedTitle.split(' ');
    return words.join('-');
};

console.log(slugify('Azure Static Web Apps are awesome'));

//------------------------------------------

const fn1 = function () {
    const args = Array.from(arguments);
    console.log(args);
};

// the same but more modern
const fn2 = function (...args) {
    console.log(args);
};

const fn3 = function (a, b, c, ...args) {
    console.log(`${a}, ${b}, ${c}`);
    console.log(args);
};

fn1(1, 2, 3);
fn2(1, 2, 3, 4, 5);
fn3('hello', 'aloha', 'word', 1, 2, 3, 4, 5);

//-------------------------------------------

const add = function (...args) {
    let total = 0;

    for (const arg of args) {
        total += arg;
    }

    return total;
};

console.log(add(1, 2, 3, 4, 5));

//------------------------------------------

const filterNumbers = function (array, ...args) {
    console.log('Array: ', array);
    console.log('Args: ', args);

    const uniqueElements = [];

    for (const element of array) {
        if (args.includes(element)) {
            uniqueElements.push(element);
            console.log(`${element} is the same`);
        }
    }

    return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 6, 7, 3, 5, 1));
