/*
Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Input: array of integers
Output: integer (represents minimum value appended to arr)

Output Integer must:
  -find the sum of the array
  -find the next prime number after sum
  -find difference between these two

Rules:
  -The array will always contain at least 2 integers.
  -All values in the array must be positive (> 0).
  -There may be multiple occurrences of the various numbers in the array.

Essentially, reduce the array to a sum. find the prime number after. 
subtract sum from prime number. 

Prime Numbers:
  -only divisible by 1 and themselves.
  -iterate up and make sure it's not divisible by anything between 1 and itself

ALGORITHM
Main function
  -reduce array to sum
  -find next prime number (helper fn)
  -subtract prime number from sum
  -return the difference

Helper function
  input: integer representing number before lowest possible Output
  output: integer representing prime number
  iterate num starting from 0
  if num % by every number from 2-num, it's prime



*/
const p = console.log;

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrime(sum) {
  let prime = sum;
  while (true) {
    prime++;
    if (isPrime(prime)) {
      return prime;
    }
  }
}

function nearestPrimeSum(arr) {
  let sum = arr.reduce((acc, val) => acc + val);
  let nearestPrime = findPrime(sum);
  let result = nearestPrime - sum;
  p(sum, nearestPrime);
  return result;
}

p(nearestPrimeSum([5, 2])); // 4

p(nearestPrimeSum([1, 2, 3]) === 1); // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4); // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2); // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
