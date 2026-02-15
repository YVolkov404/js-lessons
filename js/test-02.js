function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }
  return "You are a minor";
}

//===============================

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  } 
  return "Access denied, wrong password!";
}

//===============================

function checkStorage(available, ordered) {
    if (ordered === 0) {
        return 'Your order is empty!';
    }
    if (ordered > available) {
        return 'Your order is too large, not enough goods in stock!';
    }
        return 'The order is accepted, our manager will contact you'; 
}

//===============================

const fruits = ['apple', 'peach', 'pear', 'banana'];

const lastElementIndex = fruits.length - 1;

const lastElement = fruits[lastElementIndex];

console.log(lastElement);

//===============================

function getExtremeElements(array) {
    array.splice(1, console.log(array.length-2));
    return array;
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//==============================

function splitMessage(message, delimiter) {
  let words;
     words =  message.split(delimiter);
  return words;
}

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));

//==============================

function calculateEngravingPrice(message, pricePerWord) {
    return message.split(" ").length * pricePerWord
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("Web-development is creative work", 40));

//==============================

function makeStringFromArray(array, delimiter) {
  let string;

  string = array.join(delimiter);

  return string;
}

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

//==============================

function slugify(title) {
    const slug = title.toLowerCase().split(' ').join('-');
    return slug
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));

//===============================

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//===============================

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);

console.log(allClients);

//===============================

function makeArray(firstArray, secondArray, maxLength) {
    const allArray = firstArray.concat(secondArray);
    if (allArray.length >= maxLength) {
        return allArray.slice(0, maxLength);
    } else {
        return allArray;
    }
}
  
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

//===============================

function calculateTotal(number) {
    let total = 0;

    for (let i = 0; i <= number; i += 1) {
        total += i;
    }

    return total;
}

console.log(calculateTotal(7));
console.log(calculateTotal(28));
console.log(calculateTotal(171));

//===============================

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }

//===============================

function calculateTotalPrice(order) {
  let total = 0;
    for (const el of order) {
        total += el
    }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([164, 48, 291]));

//===============================

function findLongestWord(string) {
    const array = string.split(' ');
    let longestWord = array[0];   
    
    for (const el of array) {
        if (el.length > longestWord.length) {
            longestWord = el;     
        }
    }

    return longestWord
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"))

//==============================

function createArrayOfNumbers(min, max) {
  const numbers = [];
    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }
  return numbers;
}


console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));

//==============================

function filterArray(numbers, value) {
    let newArray = [];
    for(let el of numbers) {
      if (el > value) {
          newArray.push(el);
        }
    }
    return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));

