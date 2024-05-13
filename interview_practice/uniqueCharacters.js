/*
Create a function that takes a string as an argument and returns an array of all unique characters in the string, sorted in alphabetical order.

Input: string
output: array of letters from string

algorithm
split array at each letter
sort
return
*/
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function uniqueCharacters(string) {
  let strArr = string.split("").sort();
  let strObj = {};
  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i];
    if (strObj[char]) {
      strObj[char] += 1;
    } else {
      strObj[char] = 1;
    }
  }
  return Object.keys(strObj);
}

p(uniqueCharacters("hello"));

p(eq(uniqueCharacters("hello"), ["e", "h", "l", "o"]));
p(eq(uniqueCharacters("mississippi"), ["i", "m", "p", "s"]));
p(eq(uniqueCharacters("123321"), ["1", "2", "3"]));
p(eq(uniqueCharacters("abracadabra"), ["a", "b", "c", "d", "r"]));
