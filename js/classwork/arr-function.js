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

const onGetPositionSuccess = function(position) {
    console.log(position);
}

const onGetPositionError = function(error) {
    console.log(error);
}

window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError)