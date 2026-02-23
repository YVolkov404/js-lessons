console.log("============== Example ==============");

// ? Callback function
const fn = function (message, callback) {
    callback(message); // виклик callback функції
}

const foo = function (string) {
    console.log(string);
}

fn("Hello world!", foo)

console.log("============== Example ==============");

const doMath = function (a, b, callback) {
    return callback(a, b);
}

const add = function (x, y) {
    return x + y;
}

const sub = function (x, y) {
    return x - y;
}

console.log(doMath(12, 4, add));
console.log(doMath(12, 4, sub));
// ? OR
console.log(doMath(12, 4, function (x, y) {
    return x + y;
}));
console.log(doMath(12, 4, function (x, y) {
    return x - y;
}));


console.log("============== Example ==============");

// const buttonRef = document.querySelector('.js-button');

// const handleButtonClick = function () {
//     console.log('Click! ' + Date.now());
// }

// buttonRef.addEventListener('click', handleButtonClick);
// // ? OR
// buttonRef.addEventListener('click', function () {
//     console.log('Click! ' + Date.now());
// });


console.log("============== Example ==============");

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Ваше текущее местоположение:");
//   console.log(`Широта: ${crd.latitude}`);
//   console.log(`Долгота: ${crd.longitude}`);
//   console.log(`Плюс-минус ${crd.accuracy} метров.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

console.log("============== Example ==============");

// const onGetPositionSuccess = function(position) {
//     console.log(position);
// }

// const onGetPositionError = function(error) {
//     console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError)

console.log("============== Example ==============");

// const callback = function () {
//     console.log('callback after 3 seconds a timeout occurs' );
// }

// console.log('in the code before timeout');

// setTimeout(callback, 3000);

// console.log('in the code after timeout');

console.log("============== Example ==============");

// const onRequestSuccess = function(response) {
//     console.log(response);
// }

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess); 

console.log("============== Example ==============");

const filter = function (array, callback) {
    const filteredArray = [];

    for (const el of array) {
        const passed = callback(el)

        if (passed) {
            filteredArray.push(el)
        }
    }

    return filteredArray;
}

// ? usecase
const callback_01 = function (value) {
    return value >= 3;
}
console.log(filter([1, 2, 3, 4, 5], callback_01));

const callback_02 = function (value) {
    return value <= 3;
}
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], callback_02));

// ? usecase
const fruits = [
    {name: 'apple', quantity: 200, isFresh: true},
    {name: 'kiwi', quantity: 100, isFresh: false},
    {name: 'peach', quantity: 400, isFresh: true}
]

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 180;
}

console.table(filter(fruits, getFruitsWithQuantity));

console.log("============== Example ==============");

const fnA = function (parameter) {

    const innerVariable = 'Inner Variable';
    
    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Function');
    }

    return innerFunction;
}

const fnB = fnA(555)

fnB()

console.log(fnB);

console.log("============== Example ==============");

// const coockDish = function (cheefName, dish) {
//     console.log(`${cheefName} coocking ${dish}`);
// }

// coockDish('mango', 'omlet');
// coockDish('mango', 'soup');
// coockDish('mango', 'kebab');

// coockDish('polly', 'tea');
// coockDish('polly', 'coffee');
// coockDish('polly', 'cake');

const makeCheef = function (cheefName) {
    const coockDish = function (dish) {
    console.log(`${cheefName} coocking ${dish}`);
    }
    return coockDish;
}

const mango = makeCheef('mango');

mango('soup');
mango('omlet');

const polly = makeCheef('polly');

polly('tea');
polly('cake');


