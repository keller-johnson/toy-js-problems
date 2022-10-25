const testInput = [1, 2, 4, "591", 392, "391", 2, 5, 10, 2, 1, 1, 1, 20, 20];
const testInputTwo = [1, "2", "3", 2];

const numberSorter = (numberArray) => {
  // sort all numbers in ascending order
  const orderedArray = numberArray.sort((a, b) => a - b);
  // group copies into sub arrays
  let nestedArray = [];
  let subArray = [orderedArray[0]];
  for (let i = 1; i < orderedArray.length; i++) {
    if (orderedArray[i] === subArray[0]) {
      subArray.push(orderedArray[i]);
    } else if (subArray.length > 1) {
      nestedArray.push(subArray);
      subArray = [orderedArray[i]];
    } else {
      nestedArray = nestedArray.concat(subArray);
      subArray = [orderedArray[i]];
    }
  }
  if (subArray.length > 1) {
    nestedArray.push(subArray);
  } else {
    nestedArray = nestedArray.concat(subArray);
  }
  // return the sorted array
  return nestedArray;
};

//declaring the function
const numberSorterTwo = (numberArray) => {
  const stringArray = numberArray
    .filter((item) => typeof item === "string")
    .sort((a, b) => Number(a) - Number(b));
  //sorting the input
  const orderedArray = numberArray
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);
  //declaring final array
  let finalArray = [];
  //iterating through the sorted input
  orderedArray.forEach((currentNumber) => {
    const lastIndex = finalArray.length - 1;
    //if the final array has any entries in it
    if (finalArray.length > 0) {
      //if the last entry in the final array is an array and its first entry of the sub array matches the current number
      if (
        Array.isArray(finalArray[lastIndex]) &&
        finalArray[lastIndex][0] === currentNumber
      ) {
        finalArray[lastIndex].push(currentNumber);
      } else if (finalArray[lastIndex] === currentNumber) {
        const newSubArray = [finalArray[lastIndex], currentNumber];
        finalArray[lastIndex] = newSubArray;
      } else if (finalArray[lastIndex] !== currentNumber) {
        finalArray.push(currentNumber);
      }
    } else {
      finalArray.push(currentNumber);
    }
  });
  return [finalArray, stringArray];
};

console.log(numberSorterTwo(testInputTwo));
