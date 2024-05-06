// Example 1
[
  [1, 2],
  [3, 4],
].forEach((arr) => console.log(arr[0]));
// 1
// 3
// => undefined

// Example 2
[
  [1, 2],
  [3, 4],
].map((arr) => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]

// Example 3
[
  [1, 2],
  [3, 4],
].map((arr) => {
  console.log(arr[0]);
  return arr[0];
});

// Example 4
let myArr = [
  [18, 7],
  [3, 12],
].forEach((arr) => {
  return arr.map((num) => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

// Example 5
[
  [1, 2],
  [3, 4],
].map((arr) => {
  return arr.map((num) => num * 2);
});

// Example 6
[
  { a: "ant", b: "elephant" },
  { c: "cat", d: "dog" },
].filter((object) => {
  return Object.keys(object).every((key) => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]

// Example 7
[
  [8, 13, 27],
  ["apple", "banana", "cantaloupe"],
].map((arr) => {
  return arr.filter((item) => {
    if (typeof item === "number") {
      // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]

// Example 8
[
  [[1], [2], [3], [4]],
  [["a"], ["b"], ["c"]],
].map((element1) => {
  return element1.forEach((element2) => {
    return element2.filter((element3) => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]

// Example 9
[
  [
    [1, 2],
    [3, 4],
  ],
  [5, 6],
].map((arr) => {
  return arr.map((elem) => {
    if (typeof elem === "number") {
      // it's a number
      return elem + 1;
    } else {
      // it's an array
      return elem.map((number) => number + 1);
    }
  });
});
