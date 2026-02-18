console.log('rep-arr-methods');
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ?----------------- ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВІВ -------------------------
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
// *======================================================================

/**
 * todo :: Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 *    ? :: поелементно перебирає оригінальний масив
 *    ? :: нічого не повертає
 *    ? :: заміняє класичний for, якщо не треба переривати цикл
 */

const numbers = [5, 46, 34, 21, 83, 21, 9];
numbers.forEach(function (number, index, array) {
    console.table('params --> ', number, index, array);
});

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

numbers.forEach(
    function (number, index, array) {
        console.table('params --> ', number, index, array);
        console.log(this);
    },
    { a: 5, b: 7, c: 1 },
);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: Array.prototype.map()
 *    ? :: поелементно перебирає оригінальний масив
 *    ? :: не змінює оригінальний масив
 *    ? :: повертає новий масив такої ж довжини
 */

// ! --> example 1

const doubledNums = numbers.map(function (number) {
    return number * 2;
});

console.log('numbers: ', numbers);
console.log('doubledNums', doubledNums);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2

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

// ? отримуємо масив імен всіх гравців
const playerNames = players.map(player => {
    return player.name;
});

// const playerNames = players.map(player => player.name);

console.log('playerNames: ', playerNames);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ? отримуємо масив з id всіх гравців
// const playerId = players.map(player => {
//     return player.id;
// });

const playerId = players.map(player => player.id);

console.log('playerId: ', playerId);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ? збільшуємо кількість поінтів кожного гравця на 10%
const updatePlayers = players.map(player => {
    return {
        ...player,
        points: player.points * 1.1,
    };
});

console.table(updatePlayers);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ? збільшуємо кількість годин кожного гравця за id
const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player => {
    // if (playerIdToUpdate === player.id) {
    //     return {
    //         ...player,
    //         timePlayed: player.timePlayed + 100,
    //     };
    // }
    // return player;

    // запис за допомогою тернарного оператора
    return playerIdToUpdate === player.id
        ? {
              ...player,
              timePlayed: player.timePlayed + 100,
          }
        : player;
});

console.table(updatedPlayers);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: Array.prototype.filter()
 *    ? :: поелементно перебирає оригінальний масив
 *    ? :: повертає новий масив з елементами або пустий
 *    ? :: додає у повертаємий масив елементи що задовільняють умові callback-функції
 *    ! --> додає елемент у повертаємий масив якщо callback повертає true
 *    ! --> не додає елемент у повертаємий масив якщо callback повертає false
 */

// ! --> example 1

const numbersArr = [5, 8, 33, 29, 67, 1, 91];
const filteredNumbers = numbersArr.filter(number => number > 15);

console.log('filteredNumbers: ', filteredNumbers);
console.log('numbersArr: ', numbersArr);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2

// ? отримуємо масив онлайн гравців
const onlinePlayers = players.filter(player => player.online);
console.table(onlinePlayers);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 3

// ? отримуємо масив офлайн гравців
const offlinePlayers = players.filter(player => !player.online);
console.table(offlinePlayers);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 4

// ? отримуємо масив гравців зі загальним часом гри більше 250
const hardcorePlayers = players.filter(player => player.timePlayed > 250);
console.table(hardcorePlayers);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: Array.prototype.find()
 *    ? :: поелементно перебирає оригінальний масив
 *    ? :: повертає перший елемент що задовільняє умові або undefined
 */

// ! --> example 1

const findNum = numbersArr.find(number => number > 10);

console.log('findNum: ', findNum);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2

// ? шукаємо гравця по id
const playerFindById = 'player-4';
const playerWithId = players.find(player => player.id === playerFindById);
// const playerWithId = players.find(({ id }) => id === playerFindById);

console.log(playerWithId);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 3

// ? шукаємо гравця по id
const findPlayerById = (allPlayer, playerId) => {
    return allPlayer.find(player => player.id === playerId);
};

// const findPlayerById = (allPlayer, playerId) =>
//     allPlayer.find(({ id }) => id === playerId);

console.log(findPlayerById(players, 'player-5'));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 4

// ? шукаємо гравця за ім'ям
const playerFindByName = 'Poly';
const playerWithName = players.find(player => player.name === playerFindByName);
// const playerWithName = players.find(({ name }) => name === playerFindByName);

console.log(playerWithName);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: Array.prototype.every()
 *    ? :: поелементно перебирає оригінальний масив
 *    ? :: повертає true якщо всі елементи задовільняють умові
 *    ? :: повертає false якщо хоча б один елемент не задовільняє умові
 */

const isAllOnline = players.every(player => player.online);

console.log('isAllOnline: ', isAllOnline);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: Array.prototype.some()
 *    ? :: поелементно перебирає оригінальний масив
 *    ? :: повертає true якщо хоча б один елемент задовільняє умові
 *    ? :: повертає false якщо жоден елемент не задовільняє умові
 */

const isAnyOnline = players.some(player => player.online);

console.log('isAnyOnline: ', isAnyOnline);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: Array.prototype.reduce()
 *    ? :: поелементно перебирає оригінальний масив
 *    ? :: повертає все що завгодно
 *    ? :: не змінює оригінальний масив
 */

// ! --> example 1

// ? рахуємо суму елементів масиву
const numsArr = [56, 32, 9, 67, 10, 22, 3];
const total = numsArr.reduce((acc, number) => acc + number, 0);

console.log('total: ', total);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2

// ? рахуємо загальну зарплатню
const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
    (total, value) => total + value,
    0,
);
console.log('totalSalary: ', totalSalary);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 3

// ? рахуємо загальну кількість годин
const totalTimePlayed = players.reduce(
    // (totalTime, player) => totalTime + player.timePlayed,
    // 0,
    (totalTime, { timePlayed }) => totalTime + timePlayed,
    0,
);

console.log('totalTimePlayed: ', totalTimePlayed);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 4

// ? рахуємо загальну вартість товарів у кошику
const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
    // (total, item) => total + item.price * item.quantity,
    // 0,
    (total, { price, quantity }) => total + price * quantity,
    0,
);

console.log('totalAmount: ', totalAmount);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 4

// ? збираємо всі теги з твітов
const tweets = [
    { id: '000', likes: 5, tags: ['js', 'node'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'node'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'node', 'react'] },
];

const allTags1 = tweets.reduce((tags, tweet) => {
    tags.push(...tweet.tags);
    return tags;
}, []);

console.log(allTags1);

// const allTags2 = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// console.log(allTags2);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 5

// ? рахуємо статистику тегів
const tagsStats1 = allTags1.reduce((acc, tag) => {
    if (acc[tag]) {
        acc[tag] += 1;

        return acc;
    }

    acc[tag] = 1;

    return acc;
}, {});

console.log(tagsStats1);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

const tagsStats2 = allTags1.reduce((acc, tag) => {
    if (acc[tag]) {
        return {
            ...acc,
            [tag]: acc[tag] + 1,
        };
    }

    return {
        ...acc,
        [tag]: 1,
    };
}, {});

console.log(tagsStats2);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

const tagsStats3 = allTags1.reduce(
    (acc, tag) => ({
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {},
);

console.log(tagsStats3);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: Array.prototype.sort(callback(currentEl, nextEl){})
 *    ? :: сортує та змінює оригінальний масив
 *    ? :: повертає змінений масив, тобто посилання на відсортований оригінальний масив
 *    ? :: по замовчуванню -->
 *    ! --> сортирує за зростанням елементів
 *    ! --> приводить елементи до строки та сортирує по [Unicode](https://symbl.cc/en/alt-codes/)
 */

const numbersArray = [1, 9, 5, 7, 4];
numbersArray.sort();
console.log('numbersArray: ', numbersArray);

const lettersArray = ['b', 'B', 'a', 'A'];
lettersArray.sort();
console.log('lettersArray: ', lettersArray);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: compareFunction - функція порівняння (callback)
 *    ? :: сортує елементи масиву згідно зі значенням що повертає функція
 *    ! --> якщо compareFunction(А, В) < 0 тоді А буде стояти перед В
 *    ! --> якщо compareFunction(А, В) > 0 тоді В буде стояти перед А
 *    ! --> якщо compareFunction(А, В) = 0 тоді функція залишить А й В не змінними
 *    ! --> друг до друга але відсортує їх по відношенню до всієї решти елементів
 */

const valuesArray = [56, 23, -5, 87, 13, -8, -3];

valuesArray.sort((curEl, nextEl) => {
    // return curEl - nextEl; // сортує за зростанням
    return nextEl - curEl; // сортує за спаданням
});

console.log('valuesArray: ', valuesArray);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: як створити копію масиву за для того щоб не сортувати оригінальний масив
 * ! --> Array.prototype.slice()
 * ! --> Spread
 */

// ! --> example 1 :: за замовчуванням
const copy1 = [...valuesArray];
copy1.sort();

console.log('copy1: ', copy1);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2 :: за зростанням
const copy2 = [...valuesArray].sort((a, b) => a - b);

console.log('copy2: ', copy2);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 3 :: за спаданням
const copy3 = [...valuesArray].sort((a, b) => b - a);

console.log('copy3: ', copy3);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 4 :: reverse()
const copy4 = [...valuesArray].sort((a, b) => b - a).reverse();

console.log('copy4: ', copy4);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: користувальницьке сортування складних типів
 */

// ! --> example 1
const sortByWorstPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
);

console.table(sortByWorstPlayers);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2
const sortByBestPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
);

console.table(sortByBestPlayers);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 3
const sortPlayersByName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    } else {
        return -1;
    }
});

// const sortPlayersByName = [...players].sort((a, b) => {
//     a.name[0] > b.name[0] ? 1 : -1;
// });

console.table(sortPlayersByName);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: Array.prototype.flat(depth)
 *    ? :: розгладжує масив до вказаної глибини
 *    ? :: за замовчуванням глибина дорівнює одиниці [1]
 */

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];

console.log('matrix: ', array);
console.log('array: ', array.flat(3));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: Array.prototype.flatMap(callback)
 *    ? :: map() + flat()
 */

const allTweets = [
    { id: '000', likes: 5, tags: ['js', 'node'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'node'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'node', 'react'] },
];

const allTags3 = allTweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

console.log(allTags3);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 1 ;; map() + flat()
const allTags4 = allTweets.map(tweet => tweet.tags).flat();

console.log(allTags4);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2 :: flatMap()
const allTags5 = allTweets.flatMap(tweet => tweet.tags);

console.log(allTags5);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: chaining - ланцюжки викликів
 */

// ! --> example 1

const numbersAr = [1, 5, 6, 2, 8, 4, 9, 0];

// ? --> first call
const firstCall = numbersAr.filter(num => num > 2);
console.log('firstCall: ', firstCall);

// ? --> second call
const secondCall = firstCall.map(num => num * 3);
console.log('secondCall: ', secondCall);

// ? --> third call
const thirdCall = secondCall.sort((a, b) => a - b);
console.log('thirdCall: ', thirdCall);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ? --> sorted by chaining
const sortedByChaining = numbersAr
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);

console.log('sortedByChaining: ', sortedByChaining);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2

const pokerPlayers = [
    { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
    { id: 'id-2', tag: 'Poly', isOnline: false, rank: 75 },
    { id: 'id-3', tag: 'Kiwi', isOnline: true, rank: 150 },
    { id: 'id-4', tag: 'Ajax', isOnline: true, rank: 400 },
    { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 600 },
];

const onlineAndSorted = pokerPlayers
    .filter(player => player.isOnline)
    .sort((playerA, playerB) => playerA.rank - playerB.rank);

console.table(onlineAndSorted);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 3

const myTweets = [
    { id: '000', likes: 5, tags: ['js', 'node'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'node'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'node', 'react'] },
];

const tagStats = myTweets
    .flatMap(tweet => tweet.tags)
    .reduce(
        (acc, tag) => ({
            ...acc,
            [tag]: acc[tag] ? acc[tag] + 1 : 1,
        }),
        {},
    );

console.log(tagStats);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: chaining в методах об'єктів як у jquery
 */

const element = {
    class: '',
    hovered: false,
    changeClass(cls) {
        this.class = cls;

        return this;
    },
    toggleHovered() {
        this.hovered = !this.hovered;

        return this;
    },
};

element.toggleHovered().changeClass('open');

console.log(element);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');
