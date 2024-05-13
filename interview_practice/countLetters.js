const p = console.log;

/*
PROBLEM:
count number of instances of each letter in a string

Input: string
Output: object with keys of letters, and corresponding values as instance number

Rules: 
	-letters can only be a key once
	-only count lowercase
	-disregard capital, symbols, and spaces
EXAMPLES:
See test cases below 
DATA STRUCTURE
use regex to reduce string to only lowercase letters

ALGORITHM
make empty object
remove all non-lowercase & non-letters

*/
const regex = /[a-z]/g;

function onlyLowercaseLetters(str) {
  let letters = str.match(regex);
  return letters;
}

function countLetters(str) {
  let strArray = onlyLowercaseLetters(str);
  let lettersObj = {};
  for (let i = 0; i < strArray.length; i++) {
    let keyArr = Object.keys(lettersObj);
    if (keyArr.includes(strArray[i])) {
      lettersObj[strArray[i]] += 1;
    } else {
      lettersObj[strArray[i]] = 1;
    }
  }
  return lettersObj;
}

p(countLetters("woebegonK3N0B1e")); // {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};

const objeq = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

// let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
// p(objeq(countLetters('woebegone'), expected));

// expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
//             'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
// p(objeq(countLetters('lowercase/uppercase'), expected));

// expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
// p(objeq(countLetters('W. E. B. Du Bois'), expected));

// p(objeq(countLetters('x'), {'x': 1}));
// p(objeq(countLetters(''), {}));
// p(objeq(countLetters('!!!'), {}));
