/* 
Create a function that takes two string arguments and returns the number of times that the second string occurs in the first string. Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

PROBLEM
Input: 2 string arguments
Output: number of times the 2nd string appears in first

Rules:
  -no empty 2nd string
  -no overlap

ALGORITHM
initialize counter
split string into array at (`given string`)
return that array's length
*/

function countSubstrings(givenStr, query) {
  return givenStr.split(query).length - 1;
}

const p = console.log;
p(countSubstrings("babab", "bab") === 1);
p(countSubstrings("babab", "ba") === 2);
p(countSubstrings("babab", "b") === 3);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("", "x") === 0);
p(countSubstrings("bbbaabbbbaab", "baab") === 2);
p(countSubstrings("bbbaabbbbaab", "bbaab") === 2);
p(countSubstrings("bbbaabbbbaabb", "bbbaabb") === 1);
