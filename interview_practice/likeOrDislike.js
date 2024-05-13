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


YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

There are two other interesting rules to be noted about the interface:

    Pressing a button, which is already active, will undo your press.
    If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.

Create a function that takes an array of button inputs and returns the final state.
Examples

PEDAC

Understanding the Problem:


Rules:
  Like and Dislike, they'll overwrite eachother;
  two of the same input, in a row will cancel itself out

Examples:


Data Structures:
  Input: array of strings
  Intermediate:
  Output: string (status)

Algorithm:
 1. if one element array return element, else compare the last values.
 
IF array length === 1, return the element
ELSE IF array length === 0, return Nothing
ELSE IF last element === second to last element, return Nothing
ELSE return last element

*/

function likeOrDislike(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 0) {
    return "Nothing";
  } else if (arr[arr.length - 1] === arr[arr.length - 2]) {
    return "Nothing";
  } else return arr[arr.length - 1];
}

console.log(likeOrDislike([])); // 'Nothing'

console.log(likeOrDislike(["Dislike"])); // "Dislike"

console.log(likeOrDislike(["Like", "Like"])); // "Nothing"

console.log(likeOrDislike(["Dislike", "Like"])); // "Like"

console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // "Nothing"

console.log(likeOrDislike(["Like", "Dislike", "Like"])); // "Like"
