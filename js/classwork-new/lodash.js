import _ from "https://cdn.jsdelivr.net/npm/lodash-es/+esm";

console.dir(_);

console.log("--------------- Example 01 ---------------");

// ! isEmpty()

console.log(_.isEmpty({}));
console.log(_.isEmpty({ a: 1, b: 2 }));

console.log("--------------- Example 02 ---------------");

// ! get()

const user = {
  name: "mango",
  location: {
    coords: [66, 33],
    city: "Lviv",
  },
};
console.log(_.get(user, "location.city", "default value"));

// * OR

console.log(user?.location?.city);

console.log("--------------- Example 03 ---------------");

// ! union()

const uniqElementsOfArray = _.union([23, 44, 1, 13], [13, 44, 22]);
console.log(uniqElementsOfArray);

console.log("--------------- Example 04 ---------------");

// ! range()

console.log(_.range(4));
console.log(_.range(0, 30, 3)); // create array from 0 to 30 with step 3

console.log("--------------- Example 05 ---------------");

// ! sortBy()

const users = [
  { user: "fred", age: 48 },
  { user: "mango", age: 36 },
  { user: "polly", age: 30 },
  { user: "barney", age: 34 },
];

console.log(_.sortBy(users, (user) => user.user));
console.log(_.sortBy(users, ["user", "age"]));

console.log("--------------- Example 06 ---------------");

// ! sum() & sumBy()

console.log(_.sum([1, 2, 3, 4, 5]));

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
console.log(_.sumBy(objects, (object) => object.n));
console.log(_.sumBy(objects, "n"));

console.log("--------------- Example 07 ---------------");

// ! uniq() & uniqBy()

console.log(_.uniq([2, 1, 34, 2, 34, 1]));

console.log(_.uniqBy([2.1, 1.3, 32.5, 2.9, 1.3], Math.round));

console.log(_.uniqBy([{ x: 1 }, { x: 2 }, {x: 1, c: 2}, { x: 1, b: 2 }, {x: 2, b: 2}, {x: 1, b: 3}], 'c'));

console.log("--------------- Example 08 ---------------");

// ! sortedUniq() & sortedUniqBy()

console.log(_.sortedUniq([2, 2, 46, 46, 2]));

console.log(_.sortedUniqBy([1.1, 1.2, 1.3, 2.3, 2.4, 5.6, 6.7, 6.1], Math.round));

console.log("--------------- Example 09 ---------------");

// ! min() & max()

console.log(_.min([23, 36, 73, 11]));

console.log(_.max([23, 36, 73, 11]));

console.log("--------------- Example 10 ---------------");

// ! minBy() & maxBy()

console.log(_.minBy(objects, object => object.n));

console.log(_.maxBy(objects, object => object.n));

console.log("--------------- Example 11 ---------------");

// ! random()

console.log(_.random(0, 10));

console.log("--------------- Example 12 ---------------");

// ! camelCase(), capitalize(), kebabCase(), lowerCase() & upperCase()

console.log(_.camelCase('--Foo Bar__'));

console.log(_.capitalize('fooBAR'));

console.log(_.kebabCase('__-fooBar_'));

console.log(_.lowerCase('-_F-OobAr--'));

console.log(_.upperCase('-_F-OobAr--'));



