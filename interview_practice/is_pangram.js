/*
Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.

Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.

check if sentence includes regex of a-zA-Z

*/

const regex = /[a-z]/g;

function isPangram(str) {
  str = str.toLowerCase();
  let alphabet = ``;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(regex) && !alphabet.includes(str[i])) {
      alphabet = alphabet.concat(str[i]);
    }
  }
  p(alphabet);
  return alphabet.length === 26;
}

const p = console.log;
p(isPangram("The quick, brown fox jumps over the lazy dog!") === true);
p(isPangram("The slow, brown fox jumps over the lazy dog!") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = "Sixty zippers were quickly picked from the woven jute bag.";
p(isPangram(myStr) === true);
