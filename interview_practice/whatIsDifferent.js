/*
Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.
Input: array of numbers
Output: number from array that is different

Rules:
  -The array will always contain at least 3 numbers, and there will always be exactly one number that is different.

ALGORITHM
helper fn:
    -input array, output object. array will always have only 1 different number, rest are the same
create empty object
iterate through array
if object has key
  increment value
else (object does not have key)
  add key to object with value of 1

main fn
take object from helper function
turn it into nested array of entries
if array0, position 1 > 1, return array0
if array1, position 1 > 1, return array1

*/
const p = console.log;

function createObject(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }
  return obj;
}

function whatIsDifferent(array) {
  let objArr = Object.entries(createObject(array));
  let result = 0;
  if (objArr[0][1] > 1) {
    result = objArr[1][0];
  }
  if (objArr[1][1] > 1) {
    result = objArr[0][0];
  }
  return Number(result);
}

p(whatIsDifferent([7, 7, 7, 7.7, 7]));

p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
