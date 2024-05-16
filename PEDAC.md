###### P: Understand the Problem ######

- Establish the rules and define boundares of the problem
- Restate the problem in your own words
- Identify the problem requirements:
		- Explicit: Clearly stated in problem description
		- Implicit: extrapolated based on examples, test cases, etc.
- Identify inputs and outputs
- Ask questions/ identify unclear information
- Don't rush this part

# Example:
Imagine a sequence of consecutive even integers beginning with two.
The integers are grouped in rows, with the first row containing one integer,
the second row two integers, the third row three integers, and so on. 
Given an integer representing the number of a particular row, return an 
intger representing the sum of all integers in that row.

-Input: Integer representing the number of a particular row
-Output: Integer representing the sum of all integers in that row

- Explicit Requirements:
		- Sequence of integers
		- Sequence begins with 2
		- Integers are consecutive
		- Integers are even
		- Sequence is grouped into rows
		- Each row is incrementally larger than the last by 1
- Implicit Requirements
	- Each row number is equal to the amount of elements within it

- Sequence:
	- 2
	- 4, 6
	- 8, 10, 12
	- 14. 16, 18, 20

###### Examples and Test Cases ######
- Can be used to confirm or refute assumptions
- Answer questions and provide implicit requirements
- Test cases are written in codfe and can be run to test your solution
- Codify the rules and boundaries of the problem

	# Example
console.log(sumOfRow(1)) // 2
console.log(sumOfRow(2)) // 10
console.log(sumOfRow(4)) // 68


###### Data Structures
- Thinking in terms of data structures is an important part of the problem solving process
- Helps reason with data logically
- Helps interact with data at the implementation stage
- Data structures are closely linked to the algorithm used for your solution

  # Example
- Sequence of rows
- Order of rows is important
- Rows contain integers
- Order of integers is important

- Sequence of rows sounds like nested arrays
[
	[2].
	[4,6],
	[8,10,12],
	[14,16,18,20],
	...
]
- Find the index of the row/subarray, and sum its elements

###### Algorithms ######
- A logical sequence of steps for accomplishing a task or objective
- Closely related to data structures
- At first, keep your algo abstract and high level
- Break down steps and fill in details as needed
- Don't worry about efficiency at this stage

# Example
  1. Create an empty `rows` array to hold all of our rows
  2. Create a `row` subarray and add it to the overall array
  3. Repeat step 2 until all necessary rows have been created
			- Stop when rows length is equal to the input
  4. Sum the final row
  5. Return the sum

##PROBLEM: Step 2. Create a Row
- Rules: 
	- Row is an array
	- Array contains integers
	- Integers are consecutive even numbers
	- Integers in each row form part of a larger overall sequence
	- Rows are of different lengths

	Input: 
		- Length of the Row
		- The Starting Integer
	Output: The row itself

	-Examples:
		-Start: 2, length: 1 ==> [2]
		-Start: 4, length: 2 ==> [4, 6]
		-Start: 8, length: 3 ==> [8,10,12]
##Data Structure: Array
##Algorithm:
	1. create empty array row  to contain integers
	2. add the provided starting integer
	3. increment starting integer by 2 to get next int in sequence
	4. Repeat steps 2 & 3 until you reach the provided length
	5. return the row array

###### Code Solution ######
- Translating your solution algorithm into code
- Think about the solution algorithm in the content of the programming language
		-Features and constraints of the language
		-Characteristics of data structures
		-Built-in methods or functions
		-Syntax/general patterns
- Write implementation notes as
- Code with intent
