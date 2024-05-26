/*
Write a function that takes a decimal number and returns
the smallest multiple of itself that is an integer.

Input: floating point decimal number
output: integer

rules:
  -input will always have decimals
  -output will not have decimals
  -output is a multiple of the input
  -output is smallest multiple of the input

findInt(3.14159265358979) === 130902626
findInt(7.66) === 1149
findInt(2.503343) === 65751493

data structure
value to store count;

algorithm:
start at input number
  add the value of the input number
  see if it's an integer (no decimals) helper fn
  if not, loop through again

checkDecimals(num)
input: number
output: boolean

create rounded up/rounded down version of number
if either of those arethe same as the num, return true

*/

const p = console.log;

function checkDecimals(num) {
  let lowerNum = Math.floor(num);
  let higherNum = Math.ceil(num);
  if (num === lowerNum || num === higherNum) {
    return false;
  } else {
    return true;
  }
}

function findInt(num) {
  let count = num;
  let isDecimal = true;
  // let timesByNum = 2;
  while (isDecimal) {
    count += num;
    isDecimal = checkDecimals(count);
  }
  return count;
}

p(findInt(7.66));

p(findInt(3.14159265358979)); // === 130902626
p(findInt(7.66)); // === 1149
p(findInt(2.503343)); // === 65751493

function findInt(num) {
  let original_num = num;
  while (true) {
    if (num === Math.floor(num)) {
      return num;
    } else {
      num = num + original_num;
    }
  }
}
