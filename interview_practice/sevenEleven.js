/*
Input: integer
Output: integer (represents sum of all multiples of 7 or 11 less than given integer)
Rules:
  -input can be negative
  -0 is valid Input
  -non-inclusive

Essentially, count up to given integer, adding to a sum only those ints divisible evenly by 7 or 11.

ALGORITHM
initialize a sum
for loop up to given int, starting at 0
  if ii % 7 or ii % 11 === 0
    add ii to sum


1 remainder 7 is 6, so nothing
2-6 same
7 remainder 7 is 0, so 7 to sum
8 remainder 7 is 
*/
const p = console.log;

function sevenEleven(num) {
  let sum = 0;
  for (let ii = 0; ii < num; ii++) {
    if (ii % 7 === 0 || ii % 11 === 0) {
      sum += ii;
    }
  }
  return sum;
}

p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);
