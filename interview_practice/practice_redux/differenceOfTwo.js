function print(str) {
  console.log(str);
}

function displayTemplate() {
  let output = [];
  let sectionBreak = "\n";
  let doubleLine = "===================================";
  output.push(sectionBreak);
  output.push("PEDAC");
  output.push(doubleLine);
  output.push("- Solves two-layer problem");
  output.push("- Reduces mental load");

  output.push(sectionBreak);
  output.push("P - [Understanding the] Problem");
  output.push(doubleLine);
  output.push("- Explore the requirements");
  output.push("- Ask questions, clarify technical terms");
  output.push("- Summarise problem");

  output.push(sectionBreak);
  output.push("E - Examples / Test Cases");
  output.push(doubleLine);
  output.push("- Note explicit and implicit rules");
  output.push("- Note edge cases, gotchas");
  output.push("- Ensure you are solving the right problem");

  output.push(sectionBreak);
  output.push("D - Data");
  output.push(doubleLine);
  output.push("- Inputs and outputs");
  output.push("- Data structures: Arrays, Objects or even Strings");

  output.push(sectionBreak);
  output.push("A - Algorithm");
  output.push(doubleLine);
  output.push("- Summarise high level strategy");
  output.push("- Write step-by-step instructions");
  output.push("- Look for potential sub-processes");
  output.push("- Language agnostic, keep options open");
  output.push("- Run test cases through algorithm");
  output.push("- Algorithm that looks like code - stop and think");

  output.push(sectionBreak);
  output.push("C - Code");
  output.push(doubleLine);
  output.push("- Translate algorithm into code");
  output.push("- Test frequently (every 2-3 lines)");
  output.push("- Hack and slash - stop and think");

  output.push(sectionBreak);

  output.forEach(print);
}

// displayTemplate();

/*
Difference of Two
The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

P
Given an array of numbers, write a function that outputs an array of any pairs of the numbers that have a difference of two.

Explicit
- return the pairs
- pairs need to be sorting in ascending order
- pairs need to have a difference of two
- no duplicate numbers in the input array
- the return needs to be sorted in ascending order, regardless of the order of the numbers in the input array

E
Implicit
- numbers from the input array can appear in two different pairs
- the subarrays are in ascending order, e.g. the first element is less than the second element in every pair
- the pairs in the output array are ordered in ascending order according to the first element
- the pairs in the output array are ordered in ascending order according to the last element
- pairs are nested arrays

D
- input: array of integers
- output: array of pairs of integers, also stored in arrays
- intermediate: create an empty array to store pairs (all pairs, or just pairs with a difference of 2)

A
- Adrienne
  - Sort input array in ascending order, iterate through input array and identify pairs with a difference of 2 and store them.

- Khumari
  - Given a set of numbers, find a pair of numbers that have a difference of two and return an array that contains pairs of all those numbers.

- Clare
  - Find all possible pairs of integers from the input array. Filter for those with a difference of 2, and then sort pairs and resulting array in ascending order.

- Pablo
  - Sort input array in ascending order. Find all possible pairs of integers from the input array. Filter for those with a difference of 2.

Algorithm:
Main Fn:
	sort array in ascending order
	create an empty array to hold the pair arrays that have a difference of 2
	iterate through array
		-for each number in array, find all pairs (helper fn: findAllPairs())
		-iterate through resulting nested array of all pairs and filter out 
			any that don't have a difference of 2
		-add remaining pairs to total array

	helper fn: findAllPairs()
	input: index number, array
	output: nested array

	create an empty array to store pairs
	create a variable for starting number
	iterate through array starting at given index
		-add an array of starting number, and number at the iterated index
	return nested array of pairs
*/
const p = console.log;

function differenceOfTwo(array) {
  array = array.sort((a, b) => a - b);
  let finalPairsArr = [];
  for (const idx in array) {
    let allPairsArr = findAllPairs(idx, array);
    finalPairsArr.push(allPairsArr);
  }
  return finalPairsArr;
}

function findAllPairs(idx, array) {
  let allPairsArr = [];
  let startNum = array[idx];
  for (let jdx = idx + 1; jdx < array.length; jdx++) {
    allPairsArr.push([startNum, array[jdx]]);
  }
  return allPairsArr;
}

// Test cases
console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
// console.log(differenceOfTwo([4, 1, 2, 3]));
// // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([1, 23, 3, 4, 7]));
// //  [[1, 3]]
// console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// // [[1, 3], [3, 5], [4, 6]]
// console.log(differenceOfTwo([2, 4]));
// // [[2, 4]]
// console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// // []
