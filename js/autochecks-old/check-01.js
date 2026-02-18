// const productName = "Droid";
// console.log(productName);
// 'Droid'

// const pricePerItem = 2000;
// console.log(pricePerItem);
// 2000

//------------------------------

// let productName = "Droid";
// let pricePerItem = 2000;

// pricePerItem = 3500;
// productName = "Repair droid"

//------------------------------

// const topSpeed = 160;
// const distance = 617.54;

// const login = "mango935"

// const isOnline = true;
// const isAdmin = false;

//------------------------------

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

//------------------------------

// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`

//------------------------------

// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// console.log(message);

//------------------------------

// function sayHi() {
//     console.log('Hello, this is my first function!');
// }
// sayHi();

//------------------------------

// function add(a, b, c) {
//     return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//------------------------------

// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits;
//   return message;
// };

// const message = makeMessage('Radar', 6150);
// console.log(message);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

//------------------------------

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// };

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

//------------------------------

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   return message;
// }

// const message = makeOrderMessage(2, 100, 50);
// console.log(message);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

//------------------------------

// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }

// const userAge = isAdult(20);
// console.log(userAge);
// isAdult(14);
// isAdult(8);
// isAdult(37)

//------------------------------

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = SAVED_PASSWORD === password;
//   return isMatch;
// }

// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

//------------------------------

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// //------------------------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//         if(ordered > available) {
//             message = "Not enough goods in stock!"
//         } else {
//             message = "Order is processed, our manager will contact you."
//         }
//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// //------------------------------

// // let a = 5;
// // let b = 10;
// // let c = 15;
// // let d = 20;

// // a += 2;
// // b -= 4;
// // c *= 3;
// // d /= 10;

// //------------------------------

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

//   const totalPrice = pricePerDroid * orderedQuantity;

//     if  (customerCredits < totalPrice) {
//         message = 'Insufficient funds!';
//     } else {
//       const droidsLeft = customerCredits - totalPrice
//             message = `You ordered ${orderedQuantity} droids, you have ${droidsLeft} credits left`;
//     }

//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// //------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword(null);
// checkPassword("jqueryismyjam");

//------------------------------

// function checkStorage(available, ordered) {
//   let message;

//     if (ordered === 0) {
//       message = "There are no products in the order!"
//     } else if (available < ordered) {
//       message = "Your order is too large, there are not enough items in stock!"
//     } else {
//       message = "The order is accepted, our manager will contact you"
//     }
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

//------------------------------

// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

//------------------------------

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

//------------------------------

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

//------------------------------

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else {
//         discount = BASE_DISCOUNT;
//     }

//   return discount;
// }

// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(20000);

//------------------------------

// function checkStorage(available, ordered) {
//   let message;

//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//     return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

//------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//       message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";

//   return message;
// }

// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux");

//------------------------------

// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }

//   return price;
// }

// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");

//------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//     switch (password) {
//       case null:
//         message = "Canceled by user!";
//         break;
//       case ADMIN_PASSWORD:
//         message = "Welcome!";
//         break;
//       default:
//         message = "Access denied, wrong password!"
//     }

//   return message;
// }

// checkPassword(null);
// checkPassword("mangohackzor");
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
// checkPassword("mangohackzor");

//------------------------------
