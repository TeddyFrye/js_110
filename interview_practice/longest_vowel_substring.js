// Problem 8
// Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. The function should return the length of the longest vowel substring. The vowels of interest are "a", "e", "i", "o", and "u".
/*
Problem
Input: string
Output: positive integer representing longest vowel substring

Rules
  -no empty strings
  -no uppercase letters or symbols or spaces

Data Structure

ALGORITHM
create a counter
create an array to store vowel substrings
iterate through string
if vowel, add to counter and add to substring
if not, reset counter and add to substring

*/

function longestVowelSubstring(str) {
  let longest = []; // holds only longest vowel substr
  let counter = 0; // counts each substr
  for (let char of str) {
    // analyze each letter
    if (`aeiou`.includes(char)) {
      // if it's a vowel
      counter += 1; // increment the counter
      if (counter > longest.length) {
        //if the counter is now longer than the current longest substr
        longest.push(char); // add it to the longest
      }
    } else if (!`aeiou`.includes(char)) {
      counter = 0;
    }
  }
  p(longest);
  return longest.length;
}

// Examples
const p = console.log;
p("cwm");
p(longestVowelSubstring("cwm") === 0);
p("many");
p(longestVowelSubstring("many") === 1);
p("launchschoolstudents");
p(longestVowelSubstring("launchschoolstudents") === 2);
p("eau");
p(longestVowelSubstring("eau") === 3);
p("beauteous");
p(longestVowelSubstring("beauteous") === 3);
p("sequoia");
p(longestVowelSubstring("sequoia") === 4);
p("miaoued");
p(longestVowelSubstring("miaoued") === 5);
// // The above tests should each print true.
