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


This challenge concerns square matrices (same number of rows and columns) as the below example illustrates:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

The entries in the diagonal line from the top left to the bottom right form the main diagonal of the matrix. In this case, 1,5,9 form the main diagonal.

Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.

For example, for the matrix above you should return:

[
  [1, 0, 0],
  [4, 5, 0],
  [7, 8, 9]
]

Problem description
identify the main diagonal, replace elements above the diagonal with 0s.

Rules:
  - 1 number on first row (rest 0s)
  - Last nested array unchanged
  - No zeroes exist in input matrix beforehand
E
D
  Input: Nested array
  Intermediate: idxCount (for to start setting 0s)
  Output: Nesteted array with 0 values
A

1. iterate through array
2. iterate through subarrays, checking if subarray element's index > the index of that subarray
3. if so, transform it to `0`
4. return subarray
*/

function lowerTriang(arr) {
  let newArr = [];
  for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
    newArr.push([]);
    for (let subIndex = 0; subIndex < arr[arrIndex].length; subIndex++) {
      if (subIndex > arrIndex) {
        newArr[arrIndex][subIndex] = 0;
      } else {
        newArr[arrIndex][subIndex] = arr[arrIndex][subIndex];
      }
    }
  }

  return newArr;
}

console.log(
  lowerTriang([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]

console.log(
  lowerTriang([
    [5, 7],
    [7, 9],
  ])
);
// [
//   [5, 0],
//   [7, 9]
// ]

console.log(
  lowerTriang([
    [1, 8, 8, 1],
    [2, 7, 7, 2],
    [3, 6, 6, 3],
    [4, 5, 5, 4],
  ])
);
// [
//   [1, 0, 0, 0],
//   [2, 7, 0, 0],
//   [3, 6, 6, 0],
//   [4, 5, 5, 4]
// ]
