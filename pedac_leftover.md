###### Problem ######
Input: Number of building blocks
Output: How many cubes are leftover after building the tallest building possible

Rules:
- Blocks are cubes, so they are even length, width, and height
- A building is made up of layers
- Top layer is a single block
- Upper Layer Block must be supported by four Lower Layer Blocks
- Lower Layer Block can support more than one Upper Layer Block
- No gaps between blocks

Questions:
-What makes a layer invalid?
-What makes a block supported?

Building Structure Example:
					---				1 block (1x1)
				---	---			4 blocks (2x2)
			--- --- ---		9 blocks (3x3)
		--- --- --- --- 16blocks (4x4)	

Implicit Rules: 
Layer number * Layer number = number of blocks in layer

###### Examples and Test Cases ###### 
Provided Test Cases:
		console.log(calculateLeftoverBlocks(0) === 0); //true
		console.log(calculateLeftoverBlocks(1) === 0); //true
		console.log(calculateLeftoverBlocks(2) === 1); //true
		console.log(calculateLeftoverBlocks(4) === 3); //true
		console.log(calculateLeftoverBlocks(5) === 0); //true
		console.log(calculateLeftoverBlocks(6) === 1); //true
		console.log(calculateLeftoverBlocks(14) === 0); //true

These show that there can be cases where there are no leftover blocks.
That means each layer should follow the same rule of even distribution.

If the first test case after 1 with no leftover is 5, then that is the smallest
real building that can be made, as 6 has 1 leftover. 

###### Data Structures ######
Building can be a nested array, with iterative incrementing for each subarray.
How do we access the remainder?
[
	[1],
	[2,3,4,5],
	[6,7,8,9,10,11,12,13,14]
]
Of note that each subarray's number of blocks is it's length * length.

Array 1 counts to 1
Array 2 counts to 4
Array 3 counts to 9


###### Algorithm ######
1. Create a count of the blocks remaining equal to the input
2. Create a count of current layer that starts at 0
3. Subtract 1 from the blocks remaining to account for first layer
4. Add 1 to current layer to move to the next one
5. Check if remaining blocks is greater than or equal to 
	 blocks required(layer number squared).
		-If it is, subtract blocks required from blocks remaining
			-Increment current layer by 1
			-Go back to step 3
		-If not, return the blocks remaining.

