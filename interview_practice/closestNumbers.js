// PROBLEM 4
/*
Create a function that takes an array of integers as an argument 
and returns an array of two numbers that are closest together in value. 
If there are multiple pairs that are equally close, 
return the pair that occurs first in the array.

PROBLEM:
Input: Array of integers
Output: The two integers closest in value

Rules:
	-No nested arrays
	-No empty arrays
	-Numbers are positive integers
	-Looking for smallest difference between two numbers

EXAMPLES
See test cases below

DATA STRUCTURES
[5, 25, 15, 11, 20]) ==> [15, 11]
sort array biggest to smallest
[25, 20, 15, 11, 5]
initialize a var to represent smallest diff at array index 0
initialize empty array to represent numbers with that smallest diff
iterate through array 
arr0 - arr1 = diff
if 5 is less than smallest diff, reassign smallest to new diff and 
reasssign closest numbers array to have those elements


*/
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function closestNumbers(arr) {
  arr.sort((a, b) => a - b); // Sort array in ascending order to preserve natural ordering
  let smallestDiff = Infinity;
  let closestNumbers = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    if (diff < smallestDiff) {
      smallestDiff = diff;
      closestNumbers = [arr[i], arr[i + 1]]; // Update to keep the pair in their original order
    }
  }

  return closestNumbers;
}

// Test cases
p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11])); // true
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27])); // true
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7])); // true

p(closestNumbers([5, 25, 15, 11, 20]));

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
