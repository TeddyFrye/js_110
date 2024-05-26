const p = console.log;
/*
Create a function that takes an array of numbers as an argument. For each number, determine how many numbers in the array are smaller than it, and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a number occurs multiple times in the array, it should only be counted once.

Input: array of numbers
Output: array of count of nums lower than corresponding number

Rules:
  -duplicate "less than" numbers are only counted once
  -no empty array inputs
  -arrays will only have whole positive integers

Essentially, count the amount of unique values that are less than each given value.

Lessons from Examples:
  -can have 0 numbers fewer
  -output array retains index number of original array
  -less than only, no equal to
  -single value array will result in single 0 value array

DATA STRUCTURE  
count unique duplicates with object
fill new array with new values?
map() method on array?

ALGORITHM
initialize an empty count array
iterate over the number array
  initialize an empty count object
  count the amount of unique values less than given element
 
 
 HELPER function
 INPUT: number, original array
 OUTPUT: count of unique vals less than input number
  iterate over array
   -add to a count object as key if less than given element
    -increment count object's key value if already present
    create a count out of the length of the amount of keys
    add the value of that key count to a count array
    
    TEST CODE
    let obj = {};
    let count = Object.keys(obj).length
    let array = []
    array.push(count)
    p(array)


*/

function countSmallerNums(number, array) {
  let countObj = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] < number) {
      if (countObj[array[i]]) {
        countObj[array[i]] += 1;
      } else {
        countObj[array[i]] = 1;
      }
    }
  }
  let count = Object.keys(countObj).length;
  return count;
}

function smallerNumbersThanCurrent(numArr) {
  let countArr = [];
  numArr.forEach((element) => {
    element = countSmallerNums(element, numArr);
    countArr.push(element);
  });
  return countArr;
}

const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));
