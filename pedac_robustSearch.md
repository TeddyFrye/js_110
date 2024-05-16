###### Problem ######
Write a function robustSearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider the that last two letters of the query term may have been reversed. 

Input: An array of words and a query term
Output: That same array but only words that match the query term

Rules:
	-ignore case sensitivity when searching
	-consider partial matches
	-accouont for last two letters of query term being reversed

Questions:
	-Partial matches means missing last few letters?

Simplify Problem:
	Match query term to each word in array, accounting for human error

###### Examples ######
// Test Cases
console.log(robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")); //["develop", "develpo", "devel"]

console.log(robustSearch(["apple", "banana", "cherry"], "naan")); // ["banana"]

console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []


From these test cases, it should be searching for 
	anything missing the jus the last 2 letters 
	anything that contains a majority of the letters
	if the last 2 letters are mixed up

##### Data Structures ######
Use .includes? Use regex?
Use the .filter function?

###### Algorithm ######
Create variations of given string
	-shortStr missing last 2 letters
	-mixedStr has last 2 letters switched
	-partialStr is an array of just the letters
Iterate through search array looking for a match to each, filtering out those that dont match.
Return that array