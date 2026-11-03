import products from '../../default/data/products.js';
import transactionsHistory from '../../default/data/transactions.js';

console.log(products);

console.log('--------------- Example 01 ---------------');

console.log(window);
console.log(document);

const navLinkEls = document.querySelectorAll('.site-nav-linkEl');
console.log(navLinkEls);

console.log('--------------- Example 02 ---------------');

const magicBtn = document.querySelector('.magic-btn');
const imgEl = document.querySelector('.hero-img');
console.log(imgEl);
console.log(imgEl.src);
imgEl.width = 325;

magicBtn.addEventListener('click', () => {
  imgEl.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQIMmATyNUPKvPRnqqMvSLc_dG0tWW5p5qXAzq-WFAw&s=10';
  imgEl.alt = 'This is new cat';
});

const heroTitleEl = document.querySelector('.hero-title');
console.log(heroTitleEl);
console.log(heroTitleEl.textContent);

heroTitleEl.textContent = 'Craft pets';
console.log(heroTitleEl.textContent);

console.log('--------------- Example 03 ---------------');

console.log(imgEl.getAttribute('alt'));
console.log(imgEl.removeAttribute('src'));
console.log(
  imgEl.setAttribute(
    'src',
    'https://static.scientificamerican.com/sciam/cache/file/F766A67E-A8AA-4C90-A929C9AC67075D4B_source.jpg?w=600'
  )
);
console.log(imgEl.hasAttribute('alt'));

console.log('--------------- Example 04 ---------------');

const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.log(actions[0].dataset.action);
console.log(actions[2].getAttribute('data-action'));

console.log('--------------- Example 05 ---------------');

magicBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('.js-input');
  console.log(inputEl.value);
  inputEl.value = 'cats input';
});

console.log('--------------- Example 06 ---------------');

const navEl = document.querySelector('.site-nav');
console.log(navEl);
console.dir(navEl.classList);
navEl.classList.add('nav-menu');
navEl.classList.remove('site-nav');
navEl.classList.replace('nav-menu', 'nav');
console.log(navEl.classList.contains('nav-menu'));

magicBtn.addEventListener('click', () => {
  navEl.classList.toggle('qwerty');
});

console.log('--------------- Example 07 ---------------');

const currentPageUrl = './portfolio';

const linkEl = document.querySelector(
  `.site-nav-link[href='${currentPageUrl}']`
);
console.log(linkEl);

linkEl.classList.add('nav-link-current');

console.log('--------------- Example 08 ---------------');

console.log(navEl);

// const firstNavItemEl = document.querySelector('.site-nav-item');
const firstNavItemEl = navEl.firstElementChild;
console.log(firstNavItemEl);

console.log(navEl.children);
console.log(navEl.children[2]);
console.log(navEl.lastElementChild);

const firstButton = document.querySelector(`[data-action='add']`);
console.log(firstButton);

console.log(firstButton.nextSibling);

console.log('--------------- Example 09 ---------------');

const title = document.createElement('h2');
title.classList.add('table-title');
title.textContent = 'Common';

const span = document.createElement('span');
span.textContent = ' transactions';
console.log(span);

title.appendChild(span);
console.log(title);

const wrap = document.querySelector('.wrap');
console.log(wrap);

wrap.appendChild(title);

console.log('--------------- Example 10 ---------------');

const imageEl1 = document.createElement('img');
imageEl1.src =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUlGOvUTEVrjlgh1PtcME2qds0A7wZaOJZe7ohhG5yQ&s=10';
imageEl1.alt = 'dog';
imageEl1.width = 325;
console.log(imageEl1);

const imageEl2 = document.createElement('img');
imageEl2.src =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Ym6lDIdW1jx1ilPMtz0JI-XDn71cad0db-KU38EiCg&s=10';
imageEl2.alt = 'dog';
imageEl2.width = 325;
console.log(imageEl2);

const hero = document.querySelector('.hero');
console.log(hero);

hero.append(imageEl1, imageEl2);

console.log('--------------- Example 11 ---------------');

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav-item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav-link');
navLinkEl.textContent = 'Favorites';
navLinkEl.href = './favorites';

console.log(navItemEl);
console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl.children);

const navMenu = document.querySelector('.nav');

navMenu.appendChild(navItemEl);
console.log(navEl.children);

// navMenu.insertBefore(navItemEl, null) // insert like last element
// navMenu.insertBefore(navItemEl, navMenu.firstElementChild) // insert like first element
// navMenu.insertBefore(navItemEl, navMenu.lastElementChild) // insert like last element
// navMenu.insertBefore(navItemEl, navMenu.children[1]) // insert like second element

console.log('--------------- Example 12 ---------------');

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F5185' },
];

const colorPickerContainerElement = document.querySelector('.js-color-picker');

//? old school
// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i++) {
//   const option = colorPickerOptions[i];

//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.background = option.color;

//   elements.push(buttonEl)
// }

// console.log(elements);

// colorPickerContainerElement.append(...elements);

// ? new school
// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.background = option.color;

//   return buttonEl;
// });

// colorButtoncolorPickerContainerElement.append(...elements);

console.log('--------------- Example 13 ---------------');

const makeColorPickerOptions = options => {
  return options.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.textContent = option.label;
    buttonEl.style.background = option.color;

    return buttonEl;
  });
};

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerElement.append(...elements);

console.log('--------------- Example 14 ---------------');

console.log(products);

const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.classList.add('product-name');
  nameEl.textContent = name;

  const descrEl = document.createElement('p');
  descrEl.classList.add('product-descr');
  descrEl.textContent = description;

  const priceEl = document.createElement('p');
  priceEl.classList.add('product-price');
  priceEl.textContent = `price: ${price} $`;

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

console.log(makeProductCard(products[1]));

const productElements = products.map(makeProductCard);

console.log(productElements);

productsContainerEl.append(...productElements);

console.log('--------------- Example 15 ---------------');

const titleEl = document.querySelector('.table-title');

console.log(titleEl.textContent);
console.log(titleEl.innerHTML);

titleEl.insertAdjacentHTML('beforeend', '<span> data</span>');

console.log('--------------- Example 16 ---------------');

const transactionTableRowMarkup = transaction => {
  const { id, amount, date, bussines, type, name, account } = transaction;

  return `
    <tr>
      <th>${id}</th>
      <th>${amount}</th>
      <th>${date}</th>
      <th>${bussines}</th>
      <th>${type}</th>
      <th>${name}</th>
      <th>${account}</th>
    </tr>
  `;
};

console.log(transactionsHistory);
console.log(transactionTableRowMarkup(transactionsHistory[0]));

const tableEl = document.querySelector('.js-transaction-table')
const makeTransactionTableRows = transactionsHistory
  .map(transactionTableRowMarkup)
  .join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);
