console.log("Hello world!");

// myArr = [1, 2, 3, 4, 5];
// console.log(myArr);

// for (let num of myArr) {
//   console.log(num);
//   num += 1;
//   console.log(num);
//   console.log("---")
// }

// for (let i = 0; i < 5; i++) {
//   console.log(myArr[i]);
// }

// console.log(myArr.length);

// myArrString = myArr.join(", ");
// console.log(myArrString);

// console.log(myArr.indexOf(3));

// myArr.push(6);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// const fruits = ["Apple", "Banana"];
// const newLength = fruits.push("Orange");
// console.log(fruits);
// console.log(newLength);

// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// const removeFromEnd = -4;
// const startFromStart = 1;

// const removedItemsFromStart = fruits.splice(startFromStart);
// console.log(fruits);
// console.log(removedItemsFromStart);

// --- Pointers like in Python ---
// let shoes = ["Nike", "Adidas", "Puma"];
// const shoesArr = shoes;
// console.log(shoesArr);
// shoes.push("Reebok");
// console.log(shoesArr);
// console.log(shoes);

// --- Objects in JavaScript ---
// let shoes2 = { Nike: "Air Max", Adidas: "Ultra Boost", Puma: "RS-X" };
// debugger;
// console.log(typeof shoes2);
// console.log(shoes2.Nike);
// console.dir(shoes2);

let myArr = [
  { id: "Apple", price: 0.5, emoji: "🍎" },
  { id: "Banana", price: 0.3, emoji: "🍌" },
  { id: "Cherry", price: 0.2, emoji: "🍒" },
  { id: "Apple", price: 0.5, emoji: "🍎" },
  { id: "Apple", price: 0.5, emoji: "🍎" },
  { id: "Banana", price: 0.3, emoji: "🍌" },
];

// CB Version
// let cartSummary = {};
// for (const fruit in myArr) {
//     if (cartSummary[myArr[fruit].name]) {
//         cartSummary[myArr[fruit].name].quantity += 1;
//         cartSummary[myArr[fruit].name].price += myArr[fruit].price;
//     } else {
//         cartSummary[myArr[fruit].name] = {
//             price: myArr[fruit].price,
//             emoji: myArr[fruit].emoji,
//             quantity: 1
//         };
//     }
// }

// Reduce Version
const cartSummary = myArr.reduce((acc, { id, price, emoji }) => {
  if (!acc[id]) {
    acc[id] = { price: 0, quantity: 0, emoji };
  }
  acc[id].price += price;
  acc[id].quantity += 1;
  return acc;
}, {});

console.log(cartSummary);
