// /*Write a function, snakecase, that transforms
// each word in a sentence to alternate between
// lower (even index value) and upper (odd index value)
// cases when the word before or after it  begins with "s".
// */

// // Iterate through a string
// // find words before or after a word that starts with 's'
// // alternating the chars to lower and to uppercase
// // Uses the index value to determine case
// //

// // Split sentence into words
// // iterate through the words to find those that have a word that starts with s on either side
// // iterate through that individual word to transform letters
// // check if even or odd index to decide upper or lowercase
// // replace original word
// // turn words array back into string

// // function snakecase(str) {
// //   let words = str.split(` `);
// //   for (let i = 0; i < words.length; i++) {
// //     if (
// //       (i > 0 && words[i - 1][0].toLowerCase() === "s") ||
// //       (i < words.length - 1 && words[i + 1][0].toLowerCase() === "s") ||
// //       words[i][0].toLowerCase() === "s"
// //     ) {
// //       let transformedWord = ``;
// //       for (let letter = 0; letter < words[i].length; letter++) {
// //         if (letter % 2 === 0) {
// //           transformedWord += words[i][letter].toLowerCase();
// //         } else {
// //           transformedWord += words[i][letter].toUpperCase();
// //         }
// //       }
// //       words[i] = transformedWord;
// //     }
// //   }
// //   return words.join(" ");
// // }

// // // Test cases
// // console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
// // console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
// // console.log(snakecase("apples are sweet")); // "apples aRe sweet"
// // console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
// // console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
// // console.log(snakecase("A quick brown fox")); // "A quick brown fox"

// // const isEmpty = (value) => Object.keys(value).length === 0;

// // // test cases
// // let arr = [];
// // arr["foo"] = "bar";
// // console.log(arr);
// // arr[-1] = "boo";
// // console.log(arr);
// // console.log(`the length is ${arr.length}`);
// // console.log(`the keys are ${Object.keys(arr)}`);

// // console.log(isEmpty(arr)); // should print true, the keys should be empty

// /* Imagine a sequence of consecutive even integers beginning with two.
// The integers are grouped in rows, with the first row containing one integer,
// the second row two integers, the third row three integers, and so on.
// Given an integer representing the number of a particular row, return an
// intger representing the sum of all integers in that row.
// */

// // 1. Create an empty `rows` array to hold all of our rows
// // 2. Create a `row` subarray and add it to the overall array
// // 3. Repeat step 2 until all necessary rows have been created
// // 		- Stop when rows length is equal to the input
// // 4. Sum the final row
// // 5. Return the sum

// // Calculating the starting integer:
// // Rule: first int of row == last integer of preceding row + 2
// // rows[i-1][row.length-1]+2

// function sumOfRow(rowNumber) {
//   const rows = [];
//   let startInteger = 2;

//   for (let rowLength = 1; rowLength <= rowNumber; rowLength += 1) {
//     let row = createRow(startInteger, rowLength);
//     rows.push(row);

//     startInteger = row[row.length - 1] + 2;
//   }

//   let finalRow = rows[rows.length - 1];
//   return finalRow.reduce((acc, currentVal) => (acc += currentVal), 0);
// }

// function createRow(startInteger, rowLength) {
//   const row = [];
//   let currentInteger = startInteger;
//   // start the loop, ending if >= rowLength
//   while (row.length < rowLength) {
//     row.push(currentInteger); // add startInt to row
//     currentInteger += 2; // increment startInt by 2
//   }
//   return row;
// }

// console.log(sumOfRow(1)); // 2
// console.log(sumOfRow(2)); // 10
// console.log(sumOfRow(4)); // 68

// // console.log(createRow(2, 1)); // 2
// // console.log(createRow(4, 2)); // [4, 6]
// // console.log(createRow(8, 3)); // [8, 10, 12]

// Create a function that takes a positive integer number
// and returns the next bigger number formed by the same
// digits

//12 => 21
//513 => 531
// 2017 => 2071
// If no bigger numbers, return -1

/* PROBLEM 
Input: integer
Output: different integer with same chars

Rules:
	-No numbers not in input can be in output
	-all numbers in input included in output
	-output must be higher than input

EXAMPLES 
listed below as test cases

DATA STRUCTURES
-Turn number into a string?
-Add to original number until it includes only str of number?


ALGORITHM
-create a var representing string of numbers
-continue adding to original number until it includes string
-iterate from num1, and then num1 +1
-compare digits, if true, return num2
-iterate until num2 has more digits than num1
*/

// function toArray(num) {
//   return (num = String(num).split(``));
// }

// function compareDigits(num1, num2) {
//   let array1 = toArray(num1).sort();
//   let array2 = toArray(num2).sort();

//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function nextBiggerNum(num) {
//   let digits = toArray(num).length;
//   let num2 = num;

//   while (toArray(num2).length <= digits) {
//     num2 += 1;
//     console.log(num2);
//     if (compareDigits(num, num2)) {
//       return num2;
//     }
//   }
//   return -1;
// }

// // console.log(nextBiggerNum(9));
// // console.log(nextBiggerNum(12));
// // console.log(nextBiggerNum(2017));
// // console.log(nextBiggerNum(1432));
// // console.log(nextBiggerNum(111));
// // console.log(nextBiggerNum(123456789));
// console.log(nextBiggerNum(9) === -1);
// console.log(nextBiggerNum(12) === 21);
// console.log(nextBiggerNum(2017) === 2071);
// // console.log(nextBiggerNum(1432) === 2134);
// // console.log(nextBiggerNum(111) === -1);
// // console.log(nextBiggerNum(123456789) === 123456798);

/* Write a function that returns true if a portion of
str1 characters can be rearranged to match str2, otherwise return false
PROBLEM
Input: str1 and str2
Output: true if sr2 can be found scrambld in str1,
false if not

Rules: 
	- str2 does not have to be whole in str1
	- case and special characters do not matter
	- str1, if true, will be >= str2's length

EXAMPLES
(`scadery`,`sacred` ==> true)
(`cedewaraaossoqqtyt`, `codewars` ==> true)

DATA STRUCTURES
split strings into array and use .find method

ALGORITHM
[s,c,a,d,e,r,y], [s,a,c,r,e,d]


*/

// function scramble(scrambled, query) {
//   let scrambledArr = scrambled.split(``);
//   let queryArr = query.split(``);

//   if (scrambledArr.length < queryArr.length) {
//     return false;
//   }
//   for (let i = 0; i < queryArr.length; i++) {
//     if (scrambledArr.indexOf(queryArr[i]) === -1) {
//       return false;
//     }

//     return true;
//   }
// }

// console.log(scramble(`qcedewaraaossoqqtyt`, `codewars`)); // true
// console.log(scramble(`maclkatas`, `steak`)); // true
// console.log(scramble(`matak`, `steak`) === false);
// console.log(scramble(`blah`, `blessing`) === false);
// console.log(scramble(`scriptjava`, `javascript`));
// console.log(scramble(`scriptingjava`, `javascript`) === true);
