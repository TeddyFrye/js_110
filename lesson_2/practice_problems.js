// Practice Problem 1
// let arr = ["10", "11", "9", "7", "8"];
// arr.map((element) => Number(element));
// console.log(arr.sort((a, b) => a - b));

// Practice Problem 2
// let books = [
//   {
//     title: "One Hundred Years of Solitude",
//     author: "Gabriel Garcia Marquez",
//     published: "1967",
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     published: "1925",
//   },
//   { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
//   { title: "Ulysses", author: "James Joyce", published: "1922" },
//   { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
// ];

// console.log(books.sort((a, b) => Number(a.published) - Number(b.published)));

// Practice Problem 3
// let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
// console.log(arr1[2][1][3]);
// let arr2 = [
//   { first: ["a", "b", "c"], second: ["d", "e", "f"] },
//   { third: ["g", "h", "i"] },
// ];
// console.log(arr2[1][`third`][0]);
// let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
// console.log(arr3[2][`third`][0][0]);
// let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
// console.log(obj1.b[1]);
// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
// console.log(Object.keys(obj2.third)[0]);

// Practice Problem 4
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);
// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2);
// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;
// console.log(obj1);
// let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;
// console.log(obj2);

// Practice problem 5
// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };

// let munstersArr = Object.values(munsters);
// munstersArr = munstersArr.filter((element) => element.gender === `male`);
// let sum = 0;
// for (let munster in munstersArr) {
//   sum += munstersArr[munster].age;
// }
// console.log(sum);

// Practice Problem 6
// let munsters = {
//   herman: { age: 32, gender: "male" },
//   lily: { age: 30, gender: "female" },
//   grandpa: { age: 402, gender: "male" },
//   eddie: { age: 10, gender: "male" },
//   marilyn: { age: 23, gender: "female" },
// };
// for (let munster in munsters) {
//   console.log(
//     `${munster} is a ${munsters[munster].age}-year-old ${munsters[munster].gender}`
//   );
// }

// Practice Problem 7
// let a = 2;
// let b = [5, 8];
// let arr = [a, b];
// console.log((arr[0] += 2)); // a -> 2, += 2 -> 4
// console.log((arr[1][0] -= a)); // [5,8] -> 5 -> -+ 2 -> 3

// Practice Problem 8
// let obj = {
//   first: ["the", "quick"],
//   second: ["brown", "fox"],
//   third: ["jumped"],
//   fourth: ["over", "the", "lazy", "dog"],
// };

// const regex = /[aeiou]/g;
// Object.values(obj).forEach((value) => {
//   console.log(value.join(``).match(regex).join(`\n`));
// });

// Practice Problem 9
// let arr = [
//   ["b", "c", "a"],
//   [2, 11, -3],
//   ["blue", "black", "green"],
// ];
// // order each part by ascending order
// let newArr = [];
// newArr[0] = arr[0].sort();
// newArr[1] = arr[1].sort((a, b) => a - b);
// newArr[2] = arr[2].sort();
// console.log(newArr);

// Practice Problem 10
// let arr = [
//   ["b", "c", "a"],
//   [2, 11, -3],
//   ["blue", "black", "green"],
// ];

// let newArr = arr.map((subArr) => {
//   return subArr.slice().sort((a, b) => {
//     if (a < b) {
//       return 1;
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// });
// console.log(newArr);

// Practice Problem 11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// arr.map((obj) => {
//   let incrementedObj = {};
//   for (let key in obj) {
//     incrementedObj[key] = obj[key] + 1;
//   }
//   console.log(incrementedObj);
// });

// Practice Problem 12
// const arr = [
//   ["b", "c", "a"],
//   ["blue", "black", "green"],
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// const newArr = JSON.parse(JSON.stringify(arr));
// console.log(newArr);

// function evenValues(array) {
//   let evens = [];

//   array.forEach((value) => {
//     if (value % 2 === 0) {
//       evens.push(value);
//     }
//     array.shift();
//   });

//   return evens;
// }

// console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));
