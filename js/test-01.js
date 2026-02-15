// let number;
// const value = prompt("Enter a number:", number)

// const message = 15 > value ? `15 is greater than ${value}` : `15 is not greater than ${value}`;

// console.log(message);

//===============================

// let message;
// let number;
// const value = prompt("Enter a number:", number);

// switch (true) {
//     case value > 15:
//         message = `15 is less than ${value}`;
//         break;
//     case value < 15:
//         message = `15 is greater than ${value}`;
//         break;
//     default:
//         message = `15 is equal to ${value}`;
// }

// console.log(message);

//===============================
           //0123456789012
// const str = "Hello, World!";

// for (let i = 0; i < str.length; i += 1) { 
//     console.log(str[i]);
// }

//===============================

function getShippingCost(country) {
  let message;
  switch(country) {
    case "China":
      message = `Shipping to ${country} will cost 100 credits`;
      break;
    case "Chile":
      message = `Shipping to ${country} will cost 250 credits`;
      break;
    case "Australia":
      message = `Shipping to ${country} will cost 170 credits`;
      break;
    case "Jamaica":
      message = `Shipping to ${country} will cost 120 credits`;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  return message;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));

//===============================

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}

getNameLength("Poly");
getNameLength("Harambe");
getNameLength("Billy");
getNameLength("Joe")

//===============================

const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length-1];

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

//===============================

function getSubstring(string, length) {
  const substring = string.slice(0, length);

  return substring;
}

console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 6));
getSubstring("Hello world", 8);
getSubstring("Hello world", 11)
getSubstring("Hello world", 0);

//===============================

