/*
Input: string
Output: number (representing length of longest vowel substr)

Rules:
  -no spaces
  -no symbols, no uppercase

If it's a vowel, add to counter. if it's a consonant stop the counter. find highest value of counter

ALGORITHM
initialize counter
iterate through chars of word

*/

function longestVowelSubstring(string) {
  let result = 0;
  let counter = 0;
  for (let idx in string) {
    let char = string[idx];
    if (`aeiou`.includes(char)) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter > result) {
      result = counter;
    }
  }
  return result;
}
/* l counter = 0, result remains
a counter =1, result changes to 1
u counter = 2, result changes to 2
n counter = 0, result remains 2
chsch same effect
o counter goes to 1, result remains 2
o counter goes to 2, result remains 2
u counter goes to 3, result changes to 3
*/

const p = console.log;
p(longestVowelSubstring("many"));
p(longestVowelSubstring("cwm") === 0);
p(longestVowelSubstring("launchschooulstudents") === 3);
p(longestVowelSubstring("eau") === 3);
p(longestVowelSubstring("beauteous") === 3);
p(longestVowelSubstring("sequoia") === 4);
p(longestVowelSubstring("miaoued") === 5);
