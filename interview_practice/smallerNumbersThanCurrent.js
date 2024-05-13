/* 
PROBLEM:
Create a function that takes an array of numbers 
as an argument. For each number, determine 
how many numbers in the array are smaller than it, 
and place the answer in an array. 
Return the resulting array.

Input: array of numbers
Output: an array of how many numbers in the array are smaller

Rules:
	-arrays will be the same length
	-arrays will have numbers only in them
	-duplicate smaller numbers only counted once
	-arrays will not be empty
	-0 is a valid result


EXAMPLES:
test casese below

DATA STRUCTURE
use forEach method as it applies a fn to each element
result can be pushed to separate array

ALGORITHM
initialize result-array to empty array
use foreach to iterate through indexes array1
	use for loop to iterate through indexes of array1
	initialize counter
	initialize array of duplicates
	check if the element is greater than the indexes of arr1 and if it's not already in duplicates
		if so, add to counter
		push the value at original array's index to duplicates
	push counter to result-array
	return result-array
*/
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function smallerNumbersThanCurrent(arr1) {
  let result = [];
  arr1.forEach((element) => {
    let counter = 0;
    let duplicates = [];
    for (let i = 0; i < arr1.length; i++) {
      if (element > arr1[i] && duplicates.indexOf(arr1[i]) === -1) {
        counter++;
        duplicates.push(arr1[i]);
      }
    }
    p(duplicates);
    result.push(counter);
  });
  return result;
}

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));
