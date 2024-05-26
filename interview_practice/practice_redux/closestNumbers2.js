/*
Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.

input: array of numbers
output: array of 2 numbers

rules:
  -closest in value also means smallest difference

examples:
  -return first in the array, if multiple have same value
  -no duplicates

data structure:
number to store smallest difference
array to store the pair of closest numbers

algorithm:
initialize count var to infinity
initialize pair array to empty to store closest pair
iterate thru input array of numbers
  -pass each number and the array over to helper fn
  -receive closest pair
    -find difference between closest pair
    -if it's less than count var, reassign count and pair arr

helper fn: closest Pair(number, array)
iterate over array
initialize count var to infinity
initialize pair arr to empty
if number minus iterated number is less than count var, reassign count and pair arr
  -use math.abs to get positive version of result
return pair arr
*/
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function closestPair(number, array) {
  let minimumDiff = Infinity;
  let pairArr = [];
  for (let otherNum of array) {
    if (number !== otherNum) {
      let difference = Math.abs(number - otherNum);
      if (difference < minimumDiff) {
        minimumDiff = difference;
        pairArr = [number, otherNum];
      }
    }
  }
  return pairArr;
}
function closestNumbers(array) {
  let minimumDiff = Infinity;
  let closestPairArr = [];
  for (let number of array) {
    let pairArr = closestPair(number, array);
    let pairDiff = Math.abs(pairArr[0] - pairArr[1]);
    if (pairDiff < minimumDiff) {
      minimumDiff = pairDiff;
      closestPairArr = pairArr;
    }
  }
  return closestPairArr;
}

p(closestNumbers([5, 25, 15, 11, 20])); // [15, 11]
p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
