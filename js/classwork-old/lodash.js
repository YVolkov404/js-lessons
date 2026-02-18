console.log('rep-lodash');
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ?-------- JAVASCRIPT LIBRARY : LODASH ---------------
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
// *====================================================

// console.dir(_);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: isEmpty()
 */

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: get()
 *    ? :: user && user.location && object.location.city
 *    ? ::
 */

// ! --> example 1
const user1 = {
    name: 'Mango',
    location: {
        coords: [128.43, 223.09],
        city: 'Kyiv',
    },
};


console.log(_.get(user1, 'location.city'));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2
const user2 = {
    name: 'Mango',
    location: {
        coords: [128.43, 223.09],
        city: 'Lviv',
    },
};

// if (user2 && user2.location && user2.location.city) {
//     console.log(user2.location.city);
// }

// ! --^ the same
console.log(user2?.location?.city);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: union()
 */

// ! --> output only unique elements
console.log(_.union([1, 2, 3], [3, 4, 5]));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: range()
 */

console.log(_.range(1, 6));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> output with step [2]
console.log(_.range(10, 60, 5));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: sortBy()
 */

// ! --> example 1
console.log(_.sortBy([23, 45, 63, 12, 8, 51]));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2
const users = [
    { user: 'fred', age: 48 },
    { user: 'mark', age: 36 },
    { user: 'victor', age: 40 },
    { user: 'lui', age: 34 },
];

console.table(_.sortBy(users, ['user']));
console.table(_.sortBy(users, ['age']));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: sum() and sumBy()
 */

// ! --> example 1
console.log(_.sum([1, 2, 3, 4, 5]));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 1
const players = [
    {
        id: 'player-1',
        name: 'Mango',
        timePlayed: 310,
        points: 54,
        online: false,
    },
    {
        id: 'player-3',
        name: 'Kiwi',
        timePlayed: 230,
        points: 48,
        online: true,
    },
    {
        id: 'player-2',
        name: 'Poly',
        timePlayed: 470,
        points: 92,
        online: true,
    },
    {
        id: 'player-4',
        name: 'Ajax',
        timePlayed: 150,
        points: 71,
        online: false,
    },
    {
        id: 'player-5',
        name: 'Chelsy',
        timePlayed: 80,
        points: 48,
        online: true,
    },
];

console.log(_.sumBy(players, player => player.timePlayed));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: uniq() and uniqBy()
 * todo :: sortedUniq() and sortedUniqBy()
 */

console.log(_.uniqBy([1, 2, 3, 4, 2, 1, 6]));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: random()
 */

console.log(_.random(100));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: min() and max()
 * todo :: minBy() and maxBy()
 */

console.log(_.minBy(players, player => player.points));
console.log(_.maxBy(players, player => player.points));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */

console.log(_.camelCase('my camel case'));
console.log(_.capitalize('capitalize'));
console.log(_.kebabCase('my kebab case'));
console.log(_.lowerCase('MY LOWER CASE'));
console.log(_.upperCase('my upper case'));
