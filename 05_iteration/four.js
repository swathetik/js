// for in loop --> this loop gives the keys of the object || array by default. (keys are by default numeric)
//  we'll always use FOR IN loop for the objects
const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "switch for apple",
};

for (const key in myObject) {
  // by doing this we can only get the keys of the object and to get the values also we have to do it in a different way
  //   console.log(key);
  // console.log(`${key} shortcut is for ${myObject[key]}`);
  // this is the same syntax as we used before to fetch the values from the object
}

/// for in loop on arrays

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  console.log(key);
  // by doin this you'll only get the keys of the elements of the array
  // in other way you'll only get the index of the arr not the values.
  console.log(programming[key]); //by doin this we'll get the values of the keys from the array
}

// you can't iterate MAPS using for in loops
