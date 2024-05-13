// Write a function robustSearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider the that last two letters of the query term may have been reversed. -- Jason

function robustSearch(array, query) {
  query = query.toLowerCase();
  return array.filter((element) => {
    element = element.toLowerCase();
    return (
      element.includes(query) ||
      element.includes(partialStr(query)) ||
      element.includes(shortStr(query)) ||
      element.includes(mixedEndStr(query))
    );
  });
}

function partialStr(str) {
  str = str.split(``);

  return str;
}

function shortStr(str) {
  let shortEnd = str.length - 2;
  str = str.slice(0, shortEnd);

  return str;
}

function mixedEndStr(str) {
  let shortEnd = str.length - 2;
  shortEnd = str.slice(shortEnd);
  let shortEndSwap = shortEnd.split(``).reverse().join(``);

  return shortEndSwap;
}

// Test Cases
console.log(
  robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")
); // ["develop", "develpo", "devel"]
console.log(robustSearch(["apple", "banana", "cherry"], "naan")); // ["banana"]
console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []
