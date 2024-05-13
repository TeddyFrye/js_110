/*
Create a function that takes an array of integers as an argument and returns the integer that appears an odd number of times. There will always be exactly one such integer in the input array.

Rules:
  - one integer appeears an odd number of times

Input: array of integers
Output: the integer that appears an odd number of times

DATA STRUCTURE
even numbers have remainder 0 when divided by 2
counting instances => object keys with value of instances
iterate through object and check value's remainder by 2

ALGORITHM
initialize empty object
iterate through array 
  if object[num] doesnt exist, add it with value 1
  if it does, add 1
iterate through object keys
  turn object into nested array with .entries
*/
const p = console.log;

function objectOfArray(array) {
  let instanceObj = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (instanceObj[num]) {
      instanceObj[num]++;
    } else {
      instanceObj[num] = 1;
    }
  }
  return instanceObj;
}

function oddFellow(array) {
  let instanceArr = Object.entries(objectOfArray(array));
  let result = 0;
  instanceArr.filter((subArr) => {
    if (subArr[1] % 2 !== 0) result = Number(subArr[0]);
  });
  return result;
}

p(oddFellow([7, 99, 7, 51, 99]));
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
s;
