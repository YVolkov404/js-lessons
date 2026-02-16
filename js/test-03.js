// ? Example 01

const logins = ["slkdfhjksdfdiouue", "isdoiejkrlnvsd", "slcxvionjernfmsddl", "aslfdjoivcmniooie"];
const loginToFind = "slcxvionjernfmsddl";
let message = "";

message = logins.includes(loginToFind) 
    ? `Login ${loginToFind} found`
    : `Login ${loginToFind} not found`

console.log(message);   

// ? Example 02

const numbers = [54, 34, 12, 67, 145, 29, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log(smallestNumber);

// ? Example 03

const friends = ["Polly", "Mango", "Kiwi", "Ajax"];
let string =  "";

// for (const friend of friends) {
//     string += friend + ",";
// }

// ? OR

string = friends.join(", ");

console.log(string);

// ? Example 04

const str = "JavaScript";
const letters = str.split("");
let invertedString = "";
    
for (const letter of letters) {
    const isEqual = letter === letter.toLowerCase() 
    invertedString += isEqual
        ? letter.toUpperCase()
        : letter.toLowerCase()
}

console.log(invertedString);

// ? Example 05

const title = "Top 10 benefits of React framework";

const word = title.toLowerCase().split(" ").join("-");

console.log(word);

// ? Example 06

const arr1 = [14, 4, 56, 71, 8, 93];
const arr2 = [32, 47, 12];
let total = 0;

const concatArr = arr1.concat(arr2);

for (const el of concatArr) {
    total += el;
}
console.log(total);

// ? Example 07

const cards = ["Card01", "Card02", "Card03", "Card04", "Card05"];

const cardToRemove = "Card03";
const index = cards.indexOf(cardToRemove);

cards.splice(index, 2);
console.table(cards);

//---------------------------

const cardToInsert = "Card06"

cards.splice(3, 0, cardToInsert);
console.table(cards);

//---------------------------

const cardToUpdate = "Card04"

cards.splice(2, 1, cardToUpdate);
console.table(cards);

// ? Example 08

const add = function (a, b) {
    console.log(`add ${a} and ${b}`);

    return a + b;
}

let result = add(5, 7);

result = add(56, 23);

console.log(result);



