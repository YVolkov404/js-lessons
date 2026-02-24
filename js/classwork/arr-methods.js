console.log("============== Example ==============");

// ? forEach

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (number, index, array) {
    console.log(number);
    // array[index]
    array[4] = 20;
});

console.log(numbers);

// ? map

const doubledNumbers = numbers.map(number => {
   return number * 2
})

console.log(doubledNumbers);

const students = [
  { name: "mango", score: 83 },
  { name: "polly", score: 59 },
  { name: "ajaks", score: 37 },
  { name: "kiwi", score: 94 },
];

const studentsName = students.map(name => {
    return name.name;
})

console.log(studentsName);