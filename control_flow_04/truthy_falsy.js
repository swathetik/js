// ++++++++++++++++++++++++++++++++++++++ truthy values ++++++++++++++++++++++++++++++++++++++++++++
//     if (true)
//     if ({})
//     if ([])
//     if (42)
//     if ("0")
//     if ("false")
//     if (new Date())
//     if (-42)
//     if (12n)
//     if (3.14)
//     if (-3.14)
//     if (Infinity)
//     if (-Infinity)

//  all these values will execute the code in the condition.

// mostly asked question
// if (-1) {
//   console.log("-1"); //this will execute because we know that -1 is also an truthy value
// } else {
//   console.log("hello");
// }

// ++++++++++++++++++++++++++++++++++++++ falsy values ++++++++++++++++++++++++++++++++++++++=

// if (false) {
//     // Not reachable
//   }

//   if (null) {
//     // Not reachable
//   }

//   if (undefined) {
//     // Not reachable
//   }

//   if (0) {
//     // Not reachable
//   }

//   if (-0) {
//     // Not reachable
//   }

//   if (0n) {
//     // Not reachable
//   }

//   if (NaN) {
//     // Not reachable
//   }

//   if ("") {
//     // Not reachable
//   }

// +++++++++++++++++++++++++++++++++ NULLISH COALESCING OPERATOR (??):
//  we have to watch this operator on only these two keywords : null & defined++++++++++++++++
// this operator only works with nullish values which are  null and undefined. for other falsy values it will give the falsy values.
// let val1 = 5 ?? 10;
// let val1 = null ?? 10;
// let val1 = undefined ?? 10;
// let val1 = null ?? 10 ?? 20; // here the (??) operator will opt for the 1st value which it'll get. in this case it is 10.
// console.log(val1);

// +++++++++++ terniary operator ++++++++++++++++++++++++++++
// this operator only returns the 1st half of the colon if the statement is true otherwise the other half will be printed.
// syntax   ---------->  condition ? exprIfTrue : exprIfFalse
//  for example
// function getFee(isMember) {
//   return isMember ? "$2.00" : "$10.00";
// }
// console.log(getFee(true)); // here $2 will be printed because the statement is truthy
// console.log(getFee(false)); // here $10 will be printed because the statement is falsy
// console.log(getFee(null)); // here $10 will be printed because the statement is falsy

// another example for the same operator

// const iceTeaPrice = 80;
// iceTeaPrice <= 80 ? console.log("buy one") : console.log("don't buy");
