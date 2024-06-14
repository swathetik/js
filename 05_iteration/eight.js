// -------------------------- REDUCE ----------------------------------------- //

// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// <------------------------SYNTAX--------------------------------->

// const newNums = [1, 2, 3, 4, 5]
// const initialValue = 0; // here we have initialized the the value because the accumulator doesn't know what is gonna be the first value to be used and after the initial value it'll use the other values which are return by the function.

// const newTotal = newNums.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, initialValue);
// console.log(newTotal); // total is gonna be 15

/// Example

const myNums = [1, 2, 3, 4, 5];
// const myTotal = myNums.reduce(function (acc, currValue) {
//   console.log(`accumulator is ${acc} and the current value is ${currValue}`);
//   return acc + currValue;
// }, 0);

// console.log(myTotal);

// doing same using arrow function --- to make it more short

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal);

// let's do this same thing in the array of objects..

const shoppingCart = [
  {
    course: "js course",
    price: 2999,
  },
  {
    course: "cpp course",
    price: 1999,
  },
  {
    course: "mobile dev course",
    price: 5999,
  },
  {
    course: "data science course",
    price: 12999,
  },
];

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(total);
