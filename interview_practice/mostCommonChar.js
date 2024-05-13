// Problem 5
/*
Create a function that takes a string argument 
and returns the character that occurs most often in the string. 
If there are multiple characters with the same greatest frequency, 
return the one that appears first in the string. 
When counting characters, consider uppercase and 
lowercase versions to be the same.


PROBLEM:
Input: string of word or words
Output: a single character string

Rules:
	-string will be non-empty
	-only return 1 letter
	-disregard case, return lowercase
	-same frequency, pick the earliest one

EXAMPLES
See below

DATA STRUCTURE

ALGORITHM
create regex of letters
turn string into just letters
turn that string into array
initialize counter to 0
initialize commonLetter to ``

for loop iterate through arrays indexes
use filter for only elements that match index
if filter.length > counter, assign it to counter and assign element to commonLetter

out of loop, return commonletter
*/
const p = console.log;
const regex = /[a-zA-Z]/g;
function mostCommonChar(str) {
  letterArr = str.toLowerCase().match(regex);
  let counter = 0;
  let commonLetter = ``;
  for (let i = 0; i < letterArr.length; i++) {
    let letter = letterArr.filter((element) => element === letterArr[i]);
    if (letter.length > counter) {
      counter = letter.length;
      commonLetter = letter[0];
    }
  }
  return commonLetter;
}

// Test Cases
p(mostCommonChar("Hello World"));
let myStr = "Peter Piper picked a peck of pickled peppers.";
p(mostCommonChar(myStr));

p(mostCommonChar("Hello World") === "l");
p(mostCommonChar("Mississippi") === "i");
p(mostCommonChar("Happy birthday!") === "h");
p(mostCommonChar("aaaaaAAAA") === "a");

myStr = "Peter Piper picked a peck of pickled peppers.";
p(mostCommonChar(myStr) === "p");

myStr = "Peter Piper repicked a peck of repickled peppers. He did!";
p(mostCommonChar(myStr) === "e");
