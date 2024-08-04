function reverseArray(arr) {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return reverseArray;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseArray(arr1));
