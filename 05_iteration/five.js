// for each loop

const coding = ["js", "java", "cpp", "ruby", "python"];

// in for each function we have passes a function which will go to every element in the error and do the asked task
// coding.forEach(function (val) {
//   console.log(val); // done by normal function
// });

// another way to write the for each loop is

// coding.forEach((val) => {
//   console.log(val); // done by arrow function
// });

// if you have declared the function somewhere in the code and want to give it to the foreach loop you just have to give the reference to the loop here
// syntax---->

function printMe(val) {
  console.log(val);
}

// coding.forEach(printMe); // here we have given the reference of the above declared function

//  in for each loop it doesn't only have the access to the element but to the index and the complete array too.
//  example

coding.forEach((val, index, arr) => {
  //   console.log(val, index, arr);
});

//  declaring objects in array

const myCoding = [
  {
    language: "javascript",
    filename: "js",
  },
  {
    language: "python",
    filename: "py",
  },
  {
    language: "c++",
    filename: "cpp",
  },
];

myCoding.forEach((item) => {
  // item is what which iterates thru the array and brings out the required value.
  console.log(item.filename);
  // here exaclty like this we can access the values or keys from the objects inside the arrays.
});
