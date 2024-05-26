// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
/*
Input: an array of strings, and a number
output: a string

rules:
  -array contains strings of var length
  -looking to concat consecutive strings
  -find the first longest combination of strings
  -amount of combination is determined by the given number

Essentially, go through array of strings, combining the amount specfied by the given number, and return the longest one that appears first

Examples:
  -retain the order of the original array
  -negative numbers and 0 are valid inputs
  -number can be longer than the length of the array, in which case you return an empty string

Data Structure:
empty string to store the current longest combo

Algorithm:
create empty string: currentString = '' of longest combo
if given number is 0 or less than 0, return that empty string
if given number is greater than given array's length, return that empty string
iterate through array of strings
  create combo of words (helper fn)
  if concatenated string is greater than current string, reassign current string.
return current string.


helper function findCombination(idx, array, number)
  -input: number, array, number
  -output: string

  iterate through array of strings
    -start at idx, continue until equal to number
    -concatenate elements
  return concatenated string
*/
const p = console.log;

function findCombination(idx, arrayOfStrings, integer) {
  let comboString = "";
  for (let jdx = idx; jdx < idx + integer; jdx++) {
    if (jdx < arrayOfStrings.length) {
      comboString += arrayOfStrings[jdx];
    }
  }
  return comboString;
}

function longestConsec(arrayOfStrings, integer) {
  let currentStr = "";
  if (integer <= 0 || integer > arrayOfStrings.length) {
    return currentStr;
  }
  for (let idx = 0; idx <= arrayOfStrings.length - integer; idx++) {
    let comboString = findCombination(idx, arrayOfStrings, integer);
    if (comboString.length > currentStr.length) {
      currentStr = comboString;
    }
  }
  return currentStr;
}

p(
  longestConsec(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  )
); // === "abigailtheta")
p(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
); // === "oocccffuucccjjjkkkjyyyeehh");

// // Test Cases
// // console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) === "abigailtheta")
// // console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// // console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
// // console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
//  console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
