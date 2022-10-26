/* PROBLEM
Write a javascript function that takes an array of numbers and a target number.
 The function should find two different numbers in the array that, when added together, 
 give the target number. For example: answer([1,2,3], 4)should return [1,3]
*/

const array = [1, 2, 3, 4, 5];

const findTotal = (arr, total) => {
  let totalSum = total;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //console.log(i, "+", j, "=", i + j);
      if (i + j === totalSum) {
        console.log(i, j, totalSum);
      }
    }
  }
};

findTotal(array, 3);
