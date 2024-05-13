/*
Create a function that takes an array of strings as an argument and returns the length of the shortest string. If the array is empty, return 0.

Input: array of strings
output: number representing length of shortest string

rule: 
 - empty array returns 0

algorithm
 if given array's length is 0, return 0
 use map to alter array to just their lengths
 sort mapped array by shortest
 return mapped array[0]
*/
const p = console.log;

function shortestStringLength(array) {
  if (array.length === 0) return 0;
  let lengthArr = array
    .map((string) => {
      return string.length;
    })
    .sort();
  return lengthArr[0];
}
p(shortestStringLength(["apple", "banana", "cherry"]));
p(shortestStringLength(["apple", "banana", "cherry"]) === 5);
p(shortestStringLength(["a", "ab", "abc"]) === 1);
p(shortestStringLength([]) === 0);
p(shortestStringLength(["long", "short", "tiny"]) === 4);
