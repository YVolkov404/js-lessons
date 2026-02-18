console.log('rep-classes');
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * *+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ?----------------- ОСНОВИ ООП : КЛАС + ЕКЗЕМПЛЯР + ІНТЕРФЕЙС ---------------------
 * *+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

/**
 * *+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ?--------------------------- ФУНКЦІЯ КОНСТРУКТОР ---------------------------------
 * *+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *
 * !___ якщо функція викликається через new --> створюється пустий об'єкт
 * ----------------------------------------------------------------------------------
 * !___ функція викликається в контексті створеного об'єкта, тобто -->
 * ?        >>> в this записується посилання на цей об'єкт
 * ----------------------------------------------------------------------------------
 * !___ у властивість this.__proto__ записується посилання на об'єкт класу, тобто -->
 * ?        >>> клас є прототипом майбутнього об'єкта [екземпляра]
 * !___ >>> посилання на об'єкт повертається в місто виклику екземпляра класу
 *
 * *=================================================================================
 */

// *=================================================================================

const Car = function ({ brand, model, price, id } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.id = id;
};

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};

const myCar1 = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
const myCar3 = new Car();

console.log(myCar1);
console.log(myCar2);
console.log(myCar3);

myCar2.changePrice(60000);

/**
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ?------------------------------ ПРОТОТИПНЕ НАСЛІДУВАННЯ -------------------------------------
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} get ${amount} xp`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super(restProps);
        this.weapon = weapon;
    }
}

class Berserk extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);
        this.cry = warcry;
    }
}

const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'sword' });

const ajax = new Berserk({
    name: 'Ajax',
    xp: 1700,
    weapon: 'axe',
    warcry: 'Wa-aa-aah',
});

console.log(mango);
console.log(ajax);

mango.gainXp(1000);
ajax.gainXp(1800);

console.log(mango);
console.log(ajax);

class Mage extends Hero {
    constructor({ spells, ...restProps } = {}) {
        super(restProps);
        this.spells = spells;
    }
}

const poly = new Mage({
    name: 'Poly',
    xp: 1500,
    spells: ['fireball', 'storm', 'iceWind'],
});

console.log(poly);

poly.gainXp(1500);

console.log(poly);

console.log(Warrior.prototype);
console.log(Mage.prototype);
console.log(Hero.prototype);
