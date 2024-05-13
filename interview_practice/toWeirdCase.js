/* Problem 3
Create a function that takes a string argument 
and returns a copy of the string with 
every second character in every third word converted to uppercase. 
Other characters should remain the same.

Input: Sentence string
Output: Same sentence string with weird capitalization

Rules:
 -only every third word is altered
 -every other character is capitalized
 -starts at index[1], position 2

EXAMPLES
See test cases below

DATA STRUCTURES
split sentence into array by spaces
iterate through sentence array, starting at 2 and adding 3
iterate through word
if the word's index of a letter's remainder when divided by 2 is not 0, then
capitalize that letter
return word
join sentence
*/
const p = console.log;

function toWeirdCase(sentenceStr) {
  let sentenceArr = sentenceStr.split(` `); // array of words
  for (let i = 2; i < sentenceArr.length; i += 3) {
    let wordArr = sentenceArr[i].split(``); // array of letters
    for (let j = 0; j < wordArr.length; j++) {
      // going thru letters
      if (j % 2 !== 0) {
        // if index is odd
        wordArr[j] = wordArr[j].toUpperCase(); // change the letter
      }
      sentenceArr[i] = wordArr.join(``);
    }
  }
  p(sentenceArr.join(` `));
}

// Test Cases
let original = "Lorem Ipsum is simply dummy text of the printing world";
let expected = "Lorem Ipsum iS simply dummy tExT of the pRiNtInG world";
p(toWeirdCase(original) === expected);

// original = "It is a long established fact that a reader will be distracted";
// expected = "It is a long established fAcT that a rEaDeR will be dIsTrAcTeD";
// p(toWeirdCase(original) === expected);

// p(toWeirdCase("aaA bB c") === "aaA bB c");

// original =
//   "Mary Poppins' favorite word is " + "supercalifragilisticexpialidocious";
// expected =
//   "Mary Poppins' fAvOrItE word is " + "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
// p(toWeirdCase(original) === expected);
