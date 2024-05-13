/*
Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.
If you are given an array with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.

Essentially, iterate through array and check sum of leftside
and see if it's equal to sum of rightside

ALGORITHM
initialize leftside to 0
iterate through array
initialize rightside to array slice starting at i.
reduce rightside to sum
if rightside sum = leftside, return i
else, increment leftside by i and move on

*/
const p = console.log;

function equalSumIndex(array) {
  let leftSideSum = 0;
  let i = 0;
  for (i; i < array.length; i++) {
    let rightSide = array.slice(i + 1);
    let rightSideSum = rightSide.reduce((acc, val) => acc + val, 0);
    if (rightSideSum === leftSideSum) {
      return i;
    } else {
      leftSideSum += array[i];
    }
  }
  return i;
}

p(equalSumIndex([1, 2, 4, 4, 2, 3, 2])); // 3
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25])); // 0

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
