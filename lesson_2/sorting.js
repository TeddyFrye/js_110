// let sorted = [2, 11, 9, 4, 107, 21, 1].sort();
// console.log(sorted);

// sorted = [undefined, 11, "z", "x", "y", undefined].sort();
// console.log(sorted);

// sorted = ["c", "a", "e", "b", "d"].sort();
// console.log(sorted);

// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
//   console.log(`a is ${a} and b is ${b}`);
//   return a - b;
// });

let words = ["go", "ahead", "and", "jump"];
words.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    return 0;
  }
});
console.log(words);
