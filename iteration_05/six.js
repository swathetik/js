// const coding = ["js", "java", "cpp", "ruby", "python"];
// const values = coding.forEach((item) => {
//   console.log(item); // forEach loop doesn't return anything. it only gives the undefined.
// });
// console.log(values); // this will give the undefined even with the return statement included in the code.

// now we'll learn how to return
// <-----------------------------FILTER---------------------------->

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter has a callback function in which every value is accessed
//  it has the condition and whatever elements satisfy that condition it'll return that and rest will be skipped.

// const newNums = myNums.filter((num) => num > 4); // this is implicit return where we don't have to use the return keyword
//  another way to write the filter function

// const newNums = myNums.filter((nums) => {
// this is explicit return where we have to use the return keyword.
//   return nums > 4; //------> here we have to write return otherwise it'll return the empty array.
// });

// doing the same using forEach loop

// const newNums = [];
// myNums.forEach((nums) => {
//   if (nums > 4) {
//     newNums.push(nums); // this will give the same but here we'll have to apply the logic and it's a bit hard to code and to understand.
//   }
// });

// console.log(newNums);

const books = [
  { title: "book1", genre: "history", publish: 1901, edition: 2000 },
  { title: "book2", genre: "science", publish: 1952, edition: 2013 },
  { title: "book3", genre: "fiction", publish: 1987, edition: 2023 },
  { title: "book4", genre: "history", publish: 1921, edition: 2000 },
  { title: "book5", genre: "science", publish: 1939, edition: 2015 },
  { title: "book6", genre: "maths", publish: 1917, edition: 2024 },
  { title: "book7", genre: "fiction", publish: 1947, edition: 2017 },
  { title: "book8", genre: "maths", publish: 1982, edition: 2007 },
  { title: "book9", genre: "english", publish: 2003, edition: 2025 },
];

let userBooks = books.filter((bk) => {
  return bk.publish < 1950 && bk.genre === "history";
});

// console.log(userBooks);
