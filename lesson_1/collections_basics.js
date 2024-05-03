/* Object methods
Key Assignment
Value Assignment

*/

/* String Methods
str.slice()
str.concat(``)
str.includes(``)
str.split()
str.trim()
str.trimStart/End()
str.toUpperCase()/toLowerCase
str.charAt(#)
	-> returns an empty string if indices are empty
str.charCodeAt(#)
str.endsWith(``)/.startsWith(``)
str.repeat(``)

*/

/* Array For Loops
let mixed = ["hello", 10, undefined];

for (let counter = 0; counter < mixed.length; counter += 1) {
  console.log(typeof mixed[counter]);
}

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1,
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length) {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet] + 1;
  console.log(`I have ${currentPetNumber} ${currentPet}.`);
  counter += 1;
}
*/

// Selection & Transformation
// let produce = {
//   apple: "Fruit",
//   carrot: "Vegetable",
//   pear: "Fruit",
//   broccoli: "Vegetable",
// };

// function selectFruit(obj) {
// 	let produceKeys = Object.keys(produceList);

// }

// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

const obj = { a: "able", b: "baker", c: "charley" };
let result = Object.entries(obj).map((value) => value.toUpperCase());
// => [ 'ABLE', 'BAKER', 'CHARLEY' ]

console.log(result); // ['GREEN', 'BLUE', 'RED']
