// Write a function, negate, that converts all “yes” words to "no" and "no" words to "yes" in a sentence. The comparison for "yes" and "no" should be case insensitive."yes" and "no" should be negated even if ending with ., ?, ,, or !. -- Sergio

// Test cases
console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"
