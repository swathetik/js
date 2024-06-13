// FOR LOOP

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
    // this will be printed before the element 5 because the statement is true and thn it enters the condition
  }
  //   console.log(element);
}

// making table from 1 to 10

for (let i = 1; i <= 10; i++) {
  //   console.log(`the table of ${i} is `);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value: ${j} and inner loop: ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// ?????????????????????????? LOOPS ON ARRAYS ?????????????????????????????

// basic way to loop in an array

let myArray = ["flash", "superman", "batman", "superwoman"];
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //   console.log(element);
}

////////////// key words in loops ////////////////////////

// break and continue;

//break

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`detected 5`);
    break; //by using this the code will not run further and stop at the point when it meets the desired value.
  }
  console.log(`value of i is ${i}`);
}

// continue

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log(`detected 5`);
    continue; // this will skip the condition and will not print that value but also does not exit the loop like break keyword
  }
  console.log(`value of i is ${i}`);
}
