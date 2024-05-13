const p = console.log;
// EASY 4
// Letter Swap

/*
PROBLEM:
Input: String of words
Output: Same string with first and last letters of
				each word swapped

Rules:
	-every words contains at least one letter
	-every string has at least 1 word
	-only words and spaces

EXAMPLES BELOW

DATA STRUCTURE
break sentence into wordArr
break word into letterArr
iterate through every word
shift letterArr[0] as "first letter"
pop letterArr as "last letter"
unshift last letter
push first letter
*/
// const p = console.log;
// function swap(sentenceStr) {
//   let wordArr = sentenceStr.split(` `);
//   let swappedWordArr = wordArr.map((word) => {
//     let letterArr = word.split(``);
//     let firstLetter = letterArr.shift();

//     let lastLetter = letterArr.pop();

//     letterArr.unshift(lastLetter);
//     letterArr.push(firstLetter);
//     return (word = letterArr.join(``));
//   });

//   return swappedWordArr.join(` `);
// }

// p(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
// p(swap("Abcde")); // "ebcdA"
// p(swap("a")); // "a"

// CONVERT A STRING TO A NUMBER
/*
PROBLEM
Manually convert a string of numbers into the number version

Input: String of numbers
Output: Those numbers as type number

Rules:
	-Do not use Number(), String(), or parseInt()
	-String will always be a positive integer

EXAMPLES:
See test cases below

DATA STRUCTURE
	-Implicit coersion occurs with certain operators, but usually to string
	-regex of numbers? greater than?
	-split characters into individual chars
	-see if char[i]


*/
// const p = console.log;

// function stringToInteger(str) {
//   let num = str.split(``).reduce((total, char) => total + char - 0);
//   return num;
// }

// p(stringToInteger("4321") === 4321);
// p(stringToInteger("570") === 570);

// CONVERT A NUMBER TO A STRING

/* 
PROBLEM
Convert a number to a string version without built in methods

DATA STRUCTURE
create array of strNums to access

*/
// const CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// function integerToString(num) {
//   let strNum = ``;
//   do {
//     let remainder = num % 10;
//     num = Math.floor(num / 10);
//     strNum = CHARS[remainder] + strNum;
//   } while (num > 0);
//   return strNum;
// }

// p(integerToString(4321)); // "4321"
// p(integerToString(0)); // "0"
// p(integerToString(5000)); // "5000"
// p(integerToString(1234567890)); // "1234567890"
