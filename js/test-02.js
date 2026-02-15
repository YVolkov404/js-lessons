function slugify(title) {
    const slug = title.toLowerCase().split(' ').join('-');
    return slug
}

console.log(slugify("Arrays for begginers"));

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

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { 
    const fruit = fruits[i]; 
    console.log(fruit);
}

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

