const p = console.log;
// MEDIUM 1
/*
Rotation
Write a function that rotates an array by 
moving the first element to the end of the array. 
Do not modify the original array.

PROBLEM
Create a new array with the first element at the end
Array can have subarrays, which don't have to be rotated

RULES
	-Don't modifiy original array
	-only modify outer array
	-empty arrays return empty
	-if not array, return undefind

DATA STRUCTURE
-shift() and pop() modify original array
-map() creates a copy

ALORITHM
if input not array, return undefined
if input is empty array, return empty array

initialize new array, assign to:
iterate over original array's index
reassign element to value of element at index[-1]
return array
*/

// function rotateArray(arr) {
//   let rotatedArr = [];

//   if (typeof arr !== `object`) {
//     return undefined;
//   }
//   if (arr.length === 0) {
//     return rotatedArr;
//   }
//   let lastElement = arr.length - 1;
//   rotatedArr[lastElement] = arr[0];

//   for (let i = 0; i < arr.length - 1; i++) {
//     rotatedArr[i] = arr[i + 1];
//   }
//   return rotatedArr;
// }

// let array = [1, 2, 3, 4, 5];
// p(rotateArray(array)); // [2, 3, 4, 5, 1]
// p(array); // [1, 2, 3, 4, 5]
// p(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
// p(rotateArray(["a"])); // ["a"]
// p(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
// p(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
// p(rotateArray([])); // []

// // return `undefined` if the argument is not an array
// p(rotateArray()); // undefined
// p(rotateArray(1)); // undefined

// // the input array is not mutated

// p(rotateArray(array)); // [2, 3, 4, 1]
// p(array); // [1, 2, 3, 4]

// ROTATION PART 2
/*
Input: Two numbers, the original num and the last `count` digits to rotate
Output: One rotated number

Rules:
	-Rotate the last count digits of the original numer
	-leave other digits in same order

DATA STRUCTURE
count means how many digits from right to left are rotated
slice off the count amount


ALGORITHM
slice off string.length - count
append string[string.length]
join
*/

function rotateRightmostDigits(num, count) {
  let strNum = String(num);
  let firstHalf = strNum.slice(0, strNum.length - count);
  let backHalf = strNum.slice(strNum.length - count);
  let rotatedLetter = backHalf.slice(0, 1);
  let result = firstHalf + backHalf.slice(1) + rotatedLetter;
  return result;
}

// rotateRightmostDigits(735291, 1); // 735291
// rotateRightmostDigits(735291, 2); // 735219
// rotateRightmostDigits(735291, 3); // 735912
// rotateRightmostDigits(735291, 4); // 732915
// rotateRightmostDigits(735291, 5); // 752913
// rotateRightmostDigits(735291, 6); // 352917

// ROTATION (PART 3)
/* PROBLEM
Shift every numer one to the left, with the first num going to the end.
123456 ==> 234561
Shift every number except for the first
234561 ==> 245613
Shift every number except for the first 2
245613 ==> 246135
Shift every number except for the first 3
246135 ==> 246351 
Shift every number except for the first 4
246351 ==> 246315

ALGORITHM
count of rotation increments by 1 until it reaches the length - 2



*/

function maxRotation(num) {
  let strNum = String(num);
  for (let i = strNum.length; i > 0; i--) {
    num = Number(rotateRightmostDigits(num, i));
  }
  p(num);
  return num;
}

maxRotation(123456); // 246315
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845
