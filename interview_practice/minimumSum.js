/*Problem 2
Create a function that takes an array of integers as an argument. 
The function should return the minimum sum 
of 5 consecutive numbers in the array. 
If the array contains fewer than 5 elements, the function should return null.

Input: array of numbers
Output: smallest possible sum of 5 numbers

Rules:
	-negative numbers allowed, no digits

TEST CASES
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
ALGORITHM
initialize sumArray to empty
for each over array
while array.length is greater than 5,
find 5 smallest numbers in array
		separate function
push them to sumArray
reduce sumArray to sum


	Find 5 smallest in array
		-initialize array of smallest
		-initialize counter at 0
		iterate through array to examine each num

*/
const p = console.log;

p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
