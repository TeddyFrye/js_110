/* Create a function that takes an array of integers as an argument. The function should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the function should return null.

Input: array
Output: number (minimum sum of 5 consecutive numbers)

RULES:
  -if array is less than 5 in length, return null
  -negative numbers allowed
  -Must be consecutive

Essentially, find every possible 5 consecutive numbers, and find the minimum sum among them

Data Structure
  -grab every list of 5 consecutive numbers
  -find their sum 
  -return the smallest sum

ALGORITHM
main function minimumSum()
  initialize minimum sum var to Infinity
  iterate through array
    - get sum of next 5 numbers (helper function - findSum())
    -if sum is less than minimum sum variable, then reassign it to that variable
  
  if minimum sum is still infinfnity, return null
  otherwise, return minimum sum
  

helper function findSum()
  input: idx of num, array
  output: sum
  initialize sumArr
  iterate through array 5 times
    -add number starting at idx to sumArr
  return sum of sumArr (reduce method)
*/
const p = console.log;

function findSum(idx, array) {
  let sumArr = [];
  for (idx; sumArr.length < 5; idx++) {
    sumArr.push(array[idx]);
  }
  return sumArr.reduce((accum, val) => accum + val);
}

function minimumSum(array) {
  let smallestSum = Infinity;
  for (let idx = 0; idx < array.length - 4; idx++) {
    let sum = findSum(idx, array);
    if (sum < smallestSum) smallestSum = sum;
  }
  if (smallestSum === Infinity) smallestSum = null;
  return smallestSum;
}

p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// 2,3,4,5,-5 === 9
// 1,2,3,4,5, === 15
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// 1,2,3,4,5 === 15
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// 2,6,5,1,2 === 16
// 1, 2,9,3,5 === 20
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
//  -1, -5, -3, 0, -1 === -10
// -3,0,-1,2,-4 === -6
