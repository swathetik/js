const score = 100;
// console.log(score); //this is number and a primitive data type here.
// console.log(typeof score);

const balance = new Number(100);
// console.log(balance);
// console.log(typeof balance); //this gives a number as an object.
//using methods that are applied on number object.
// console.log(balance.toString()); //this turns the number into the string.

// console.log(balance.toFixed(2)); //this adds the decimal value in the number as the value provided.

const newBalance = 23.8966;
// console.log(newBalance.toPrecision(4)); //this also rounds off the number.
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// @param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.

const rs = 100000000;
// console.log(rs.toLocaleString("en-IN")); //this adds the comma to the number so that it'll be easy to read. en-IN puts the indian Standard of reading the numbers

// **********************************************MATHS**********************************************//

// this comes by-default with js
// console.log(Math); // Math itself has alot of the properties and functions those come with it.

// console.log(Math.abs(-4)); //this only converts the -ve value to the +ve.
// console.log(Math.round(12.8966)); //this rounds off the value into int.
// console.log(Math.floor(4.2)); //this chooses the lower value of the integer and rounds off it to the lower value.
// console.log(Math.ceil(4.2)); //this chooses the upper value of the integer.
// console.log(Math.min(4, 3, 5, 2, 1, 12, 3)); //this gives the minimum value from the array.
// console.log(Math.max(4, 3, 5, 2, 1, 12, 3)); //this gives the maximum value from the array.

// where will i use it?

// console.log(Math.random()); //this always gives the random value but if we are asked to give the values form a to b thn we have to do it in a different way
// console.log(Math.random() * 10 + 1); //by by doin this random value will never come 0. which helps the limit.
// console.log(Math.floor(Math.random() * 10) + 1); //this gives the integer value and not the decimal value randomly.

// understanding the concept of min and max and understanding the formula of calculationg the values in between.
// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min); // this is the formula to calc the minn and max values.
