/*
PROBLEM
You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Input: array of strings, integer of how many can be combined
Output: longest possible concat of strings by given int

Rules:
  -empty array allowed
  -0 combinations allowed
  -no duplicates in output
  -concatenated strings must be consecutive in original array

*/

function longestConsec(array, num) {
  if (array.length === 0 || num <= 0 || num > array.length) {
    return "";
  }
  let longestStr = "";
  for (let i = 0; i < array.length; i++) {
    let currentStr = array.slice(i, i + num).join(``);
    if (currentStr.length > longestStr.length) {
      longestStr = currentStr;
    }
  }

  return longestStr;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);

// Test Cases
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) ===
    "abigailtheta"
); // true
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  ) === "oocccffuucccjjjkkkjyyyeehh"
); // true
console.log(longestConsec([], 3) === ""); // true
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2
  ) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
); // true
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2) ===
    "wlwsasphmxxowiaxujylentrklctozmymu"
); // true
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) ===
    "ixoyx3452zzzzzzzzzzzz"
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""
); // true
