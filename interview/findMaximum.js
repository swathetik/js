function maximum(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let arr1 = [3, 45, 2, 3, 34, 10];
console.log(maximum(arr1));
