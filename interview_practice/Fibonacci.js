// MEDIUM 1
/*
Fibonacci Numbers(Recursion)
The Fibonacci series is a sequence of numbers in which 
each number is the sum of the previous two numbers. 
Write a recursive function that computes the nth Fibonacci number, 
where nth is an argument passed to the function.

PROBLEM:
Return sum of all numbers leading up to given number
Input: Integer
Output: Sum Integer

Rules:
	-only non-negative integers

EXAMPLES
see test cases below

DATA STRUCTURE
Recursive function is a fn that calls itself
function sum(num) {
  if ( num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}

ALGORITHM
create empty array/counter
for loop up to given num
add each index to empty array/counter
reduce array/ 
*/
const p = console.log;

function fibonacci(fibNum) {
  let fibonacci = [1, 1, 2];
  fibonacci.length = fibNum;
  for (let i = 3; i < fibonacci.length; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci[fibNum - 1];
}

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3

fibonacci(5); // [1, 1, 2, 3, 5]
fibonacci(12); // 144
fibonacci(20); // 6765

/* Memoization & Recuursion:
let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}
*/
