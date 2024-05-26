/*
Given an array of nested objects, write a function that
returns an object containing all the argument's objects' values' data types as
property keys, and the total number of values with those data types
as the cooresponding property values. Assume all nested objects
have only one property. Disregard Symbol and BigInt datatypes. 

input: array of nested objects
output: an object literal

rules:
  -input array's objs will only have one property
  -output object is key of value types, value of instance count
  -keys are not present in output, only the types and the amount they appear

data structure:
empty count object to store instance amounts
array of the object's keys

algorithm:
create empty countObject {}
iterate through array
  -check value of the object
  -if the value is in count object, increment its value
    -if not, add it to count object with a value of 1
*/
const p = console.log;

function aggregateDataTypes(array) {
  let countObj = {};
  array.forEach((element) => {
    let valueArr = Object.values(element);
    let type = typeof valueArr[0];
    if (countObj[type]) countObj[type]++;
    else {
      countObj[type] = 1;
    }
  });
  return countObj;
}

// Examples

p(aggregateDataTypes([{ dog: "dog" }, { num: 5 }, { arr: [1, 2, 3] }]));

// Returns {string: 1, number: 1, object: 1}

p(
  aggregateDataTypes([
    { words: console.log("words") },
    { numbers: 5 * "a" },
    { arr: () => a + b },
  ])
);

// Returns {undefined: 1, number: 1, object: 1}
