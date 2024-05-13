/*
- `String.prototype` methods: `charAt`, `charCodeAt`, `concat`, `includes`, `split`, `trim`
- `Array.prototype` methods: `concat`, `every`, `fill`, `filter`, `find`, `findIndex`, `forEach`, `includes`, `indexOf`, `join`, `map`, `pop`, `push`, `reverse`, `shift`, `slice`, `some`, `sort`, `splice`, `unshift`
- `Object` methods : `keys`, `values`, `entries`, `assign`, `freeze`
- arrays, sparse arrays, empty arrays, arrays as objects
- iterations, `break`, `continue`, `for...in`
- filtering and transformation
- nested data structures and nested iteration
- shallow and deep copy
    - spread syntax - [… arr], {…obj}
    - Object.assign
    - Array.from()
- first-class functions
- higher-order functions
- method chaining
////////////////////////////////////////////////////////////////////////////////////


Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.
Examples

pyramidArrays(1) ➞ [[1]]

pyramidArrays(3) ➞ [[1], [2, 2], [3, 3, 3]]

pyramidArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

Notes

n will be a positive integer.

Problem:
Given an integer (n). We want to return an array with n nested arrays and each nested array has 1 + current index elements in it, with the elements all set to 1 + current index.

Rules:
Explicit:
  Array increment in size starting from 1
  - the elements in the nested array will start at 1 element of 1. And then the number of elements increases by 1 for each iteration, and the element increases by 1

Data Structures:
 input: interger (n) for number of nested arrays
 intermedite: count (number for fills and subarray length), 
 output: a array of subarrays, containing incrementing counts of an incrementing number from 1

Algorithm:
  - set count to 1;
  - set result array as empty array;
    - while count - 1 is less than the integer n
      add a nested array with count elements filled with count
      increment count by 1
  - return the result
*/

console.log(pyramidArrays(1)); // [[1]]

console.log(pyramidArrays(3)); // [[1], [2, 2], [3, 3, 3]]

console.log(pyramidArrays(5)); // [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

// function pyramidArrays(n) {
//   let count = 1;
//   let result = [];

//   while ((count - 1) < n) {
//     result.push(new Array(count).fill(count));
//     count += 1;
//   }

//   return result;
// }
