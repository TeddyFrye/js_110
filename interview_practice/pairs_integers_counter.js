/* Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.

PROBLEM:
Input: array of integers
Output: Amount of identical pairs in array

Rules:
  -Only integers are of concern
  -count only pairs, and each pair once. Three 1s is One pair, 
    six 1s is Three pairs
  -If array is empty or 1 valuel, return 0

Data Structure
Iterate through array
iterate through array with each element

ALGORITHM
create an object to count pairs
foreach num, either add it to the object or increment it

create a total counter
for each element in the pair object, add them (
	round down and divided by 2 to only count pairs)
*/

function pairs(givenArr) {
  let countObj = {};
  givenArr.forEach((num) => {
    countObj[num] = (countObj[num] || 0) + 1;
  });
  let totalPairs = 0;
  for (let num in countObj) {
    totalPairs += Math.floor(countObj[num] / 2);
  }
  return totalPairs;
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);
