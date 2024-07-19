// using map function

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNum.map((num) => { // we use map because it automatically return the functions
//   return num + 10;
// });

// const newNums = myNum.map((nums) => nums + 10);
// console.log(newNums);

// doing the same using foreach

// const newNums = [];
// myNum.forEach((nums) => {
//   if (myNum) {
//     newNums.push(nums + 10);
//   }
// });
// console.log(newNums);

// ------------------ chaining ------------------
// chaining means that we can add methods on top of other methods.
// in this the value or the array formed during the 1st method is directly passed on to the next method.

const newNum = myNum
  .map((num) => num * 10) // the array formed using this method is directly passed on to the next menthod.
  .map((num) => num + 1) // the method will act on the previously formed array and pass it on to the next method
  .filter((num) => num >= 40); // here it'll filter according to the given condition and return it in the new array.

// console.log(newNum);

function a() {
  var x = 7;
  function b() {
    console.log(x);
  }
  return b;
}
var y = a();
console.log(y);
y();
