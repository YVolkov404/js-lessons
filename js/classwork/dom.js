import products from "../../default/data/products.js";
import transactionsHistory from "../../default/data/transactions.js";

console.log("----------------- Example-01 -----------------");

const magicBtn = document.querySelector(".js-magic-btn");
console.dir(magicBtn);

const navEl = document.querySelector(".site-nav");
console.dir(navEl);

const navItems = navEl.querySelectorAll(".site-nav-item");
console.dir(navItems);

console.log("----------------- Example-02 -----------------");

const imageEl = document.querySelector(".hero-img");
console.log(imageEl);

magicBtn.addEventListener("click", () => {
  console.log(imageEl);
  imageEl.src =
    "https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=465&dpr=1&s=none&crop=none";
  imageEl.alt = "new cat";
});

const heroTitle = document.querySelector(".hero-title");
console.log(heroTitle);
console.log((heroTitle.textContent = "My Cats"));

console.log(imageEl.getAttribute("src"));

// console.log(imageEl.src);

console.log(imageEl.hasAttribute("src"));

console.log("----------------- Example-03 -----------------");

const actions = document.querySelectorAll(".js-actions button");
console.log(actions[2].dataset.action);
console.log(actions);

magicBtn.addEventListener("click", () => {
  const inputEl = document.querySelector(".js-input");
  console.log((inputEl.value = "qwertyuiop"));
});

console.log("----------------- Example-04 -----------------");

// console.log(navEl.classList.add("qweqwe"));
// console.log(navEl.classList.remove("qweqwe"));

magicBtn.addEventListener("click", () => {
  console.log(navEl.classList.toggle("qweqwe"));
  console.log(navEl.classList.replace("qweqwe", "ewqewq"));
  console.log(navEl.classList.contains("qweqwe"));
});

console.log("----------------- Example-05 -----------------");

const currentPageUrl = "./portfolio";

const linkEl = document.querySelector(
  `.site-nav-link[href="${currentPageUrl}"]`,
);

console.log(linkEl);

linkEl.classList.add(".nav-link-current");

console.log("----------------- Example-06 -----------------");

console.dir(navEl);

// const firstNavItem = navEl.querySelector(".site-nav-item");
const firstNavEl = navEl.firstElementChild;
console.log(navEl.children[1]);
console.log(navEl.lastElementChild);

console.log("----------------- Example-07 -----------------");

const titleEl = document.createElement("p");
titleEl.classList.add("page-title");
titleEl.textContent = "More Cats";
console.log(titleEl);

console.log(document.body.appendChild(titleEl));

const imgEl = document.createElement("img");
imgEl.src =
  "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg";
imgEl.alt = "cat";

// imgEl.setAttribute("width", 300)
imgEl.width = 300;
console.log(imgEl);

console.log(document.body.appendChild(imgEl));

console.log("----------------- Example-08 -----------------");

const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav-item");
console.log(navItemEl);

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav-link");
navLinkEl.textContent = "Home";
navLinkEl.href = "./home";
console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);
console.dir(navEl);

// navEl.appendChild(navItemEl);

navEl.insertBefore(navItemEl, navEl.firstElementChild);
// navEl.insertBefore(navItemEl, navEl.children[0])
console.log(navEl);

console.log("----------------- Example-09 -----------------");

const heroEl = document.querySelector(".hero");
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imgEl);

heroEl.append(titleEl, imgEl);

console.log(heroEl);

console.log("----------------- Example-10 -----------------");

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D88" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F5185" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];

//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   elements.push(buttonEl);
// }

const elements = colorPickerOptions.map((option) => {
  const buttonEl = document.createElement("button");
  buttonEl.type = "button";
  buttonEl.classList.add("color-picker-option");
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;

  return buttonEl;
});

console.log(elements);

colorPickerContainerEl.append(...elements);

console.log("----------------- Example-11 -----------------");

const makeColorPickerOptions = (options) => {
  return options.map((option) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("color-picker-option");
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    return buttonEl;
  });
};

const el = makeColorPickerOptions(colorPickerOptions);
console.log(el);
colorPickerContainerEl.append(...el);

console.log("----------------- Example-12 -----------------");

const product = {
  name: "Servoprivods",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  price: 2000,
  available: true,
  onSale: true,
};

console.log(products);

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const productTitleEl = document.createElement("h2");
  productTitleEl.textContent = name;
  productTitleEl.classList.add("product-name");

  const productDescr = document.createElement("p");
  productDescr.textContent = description;
  productDescr.classList.add("product-descr");

  const productPrice = document.createElement("p");
  productPrice.textContent = price;
  productPrice.classList.add("product-price");

  productEl.append(productTitleEl, productDescr, productPrice);

  return productEl;
};

console.log(makeProductCard(products));

const elmnts = products.map(makeProductCard);
console.log(elmnts);

const productsContainerEl = document.querySelector(".js-products");

productsContainerEl.append(...elmnts);

console.log("----------------- Example-13 -----------------");

const titleElement = document.querySelector(".title-el");
console.log(titleElement.textContent);
// console.log(titleElement.innerHTML += `<a href=""> Link</a>`);
// titleElement.innerHTML = ``;

console.log("----------------- Example-14 -----------------");

titleElement.insertAdjacentHTML("beforeend", `<a href=""> Link</a>`);

console.log("----------------- Example-15 -----------------");

console.log(transactionsHistory);

{
  /* <tr>
  <td>ID транзакции</td>
  <td>Сумма</td>
  <td>Дата</td>
  <td>Кто</td>
  <td>Тип транзации</td>
  <td>Имя счёта</td>
  <td>Номер счёта</td>
</tr> */
}

const makeTransactionTableRawMarkUp = ({
  id,
  amount,
  date,
  business,
  type,
  name,
  account,
}) => {
  return `<tr>
  <td>${id}</td>
  <td>${amount}</td>
  <td>${date}</td>
  <td>${business}</td>
  <td>Т${type}</td>
  <td>И${name}</td>
  <td>${account}</td>
</tr> `;
};

// console.log(makeTransactionTableRawMarkUp(transactionsHistory[0]));

const tableEl = document.querySelector(".js-transaction-table");

const makeTransactionTableRaws = transactionsHistory
  .map(makeTransactionTableRawMarkUp)
  .join("");

console.log(makeTransactionTableRaws);

tableEl.insertAdjacentHTML("beforeend", makeTransactionTableRaws);
