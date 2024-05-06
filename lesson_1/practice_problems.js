// const arr1 = [
//   { id: 1, name: "Alice", class: `user` },
//   { id: 2, name: "Bob", class: `user` },
//   { id: 3, name: "Carol", class: `user` },
// ];

// arr1.length = 6;

// function booleanArray() {
//   return new Array(10).fill(false);
// }

// console.log(
//   [1, 2, 3].every((num) => {
//     return (num = num * 2);
//   })
// );
// console.log(booleanArray());

// Task: Write a function that takes two arrays of numbers.
// The function should filter out all odd numbers from both arrays,
// then merge the results and remove duplicates.

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = [6, 7, 8, 9, 10];

// function removeOdd(array1, array2) {
//   let newArr = [...array1, ...array2];
//   let filteredArr = newArr.filter((element, index) => element % 2 === 0);
//   let uniqueArr = [];
//   filteredArr.forEach((element) => {
//     if (!uniqueArr.includes(element)) {
//       uniqueArr.push(element);
//     }
//   });
//   return uniqueArr;
// }

// console.log(removeOdd(arr1, arr2));

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237,
// };

// let munstersArr = Object.values(ages);
// let munstersAgeTotal = munstersArr.reduce(
//   (acc, currentVal) => acc + currentVal
// );

// console.log(munstersAgeTotal);

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237,
// };

// let agesArr = Object.values(ages);
// let minimumAge = agesArr.reduce((acc, currentVal) => {
//   if (acc > currentVal) acc = currentVal;
//   return acc;
// });
// console.log(minimumAge);

let statement = "The Flintstones Rock";
let statementArr = statement.split("").filter((char) => char !== " ");
let flintstonesObj = {};
statementArr.forEach((letter) => {
  flintstonesObj[letter] = flintstonesObj[letter] || 0;
  flintstonesObj[letter] += 1;
});

console.log(flintstonesObj);
