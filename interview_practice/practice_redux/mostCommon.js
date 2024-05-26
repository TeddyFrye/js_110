/* Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.
Input: string
output: single character string

rules:
  -no empty strings
  -symbols and spaces included, no nummbers
  -case-insensitive
  -find the character that appears the most often in string

data structure: 

algorithm:

initialize maxchar to empty string
initialize maxcount to 0

create an object of all instances (helper fn)

iterate through string to check the key/value against the max count
reassign the maxchar and maxcount when it is

helper fn: counterObject(string)
input: string
output: object literal

initialize counter obj to empty
iterate through string, adding to object literal when a letter occurs
*/
const p = console.log;

function mostCommonChar(string) {
  let maxChar = ``;
  let maxCount = 0;
  let countObj = counterObject(string.toLowerCase());
  for (const letter of string.toLowerCase()) {
    if (countObj[letter] > maxCount) {
      maxCount = countObj[letter];
      maxChar = letter;
    }
  }
  return maxChar;
}

function counterObject(string) {
  let countObj = {};
  for (const letter of string) {
    if (countObj[letter]) countObj[letter] += 1;
    else {
      countObj[letter] = 1;
    }
  }
  return countObj;
}

p(mostCommonChar("Happy birthday!") === "h");
