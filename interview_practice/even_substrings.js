/*
Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

PROBLEM
Input: string of digits
Output: number of even-numbered digits that can be formed

Rules:
  -duplicate substrings are both counted

DATA STRUCTURE
initialize counter to 0
for each char in string
initialize substr to ""
if char % 2, counter++
substr.push(char)
if Number(substr) % 2, counter ++

*/

function evenSubstrings(strNum) {
  let count = 0;

  for (let start = 0; start < strNum.length; start++) {
    for (let end = start + 1; end <= strNum.length; end++) {
      let substring = strNum.slice(start, end);
      if (isEven(substring[substring.length - 1])) {
        count++;
      }
    }
  }
  return count;
}

function isEven(char) {
  const digit = parseInt(char, 10);
  return digit % 2 === 0;
}

const p = console.log;
p(evenSubstrings("1432") === 6);
p(evenSubstrings("3145926") === 16);
p(evenSubstrings("2718281") === 16);
p(evenSubstrings("13579") === 0);
p(evenSubstrings("143232") === 12);
