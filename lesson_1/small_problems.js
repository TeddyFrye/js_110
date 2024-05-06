// Searching 101
// const readlineSync = require(`readline-sync`);

// let firstNum = Number(readlineSync.question(`Enter the 1st number:\n`));
// let secondNum = Number(readlineSync.question(`Enter the 2nd number:\n`));
// let thirdNum = Number(readlineSync.question(`Enter the 3rd number:\n`));
// let fourthNum = Number(readlineSync.question(`Enter the 4h number:\n`));
// let fifthNum = Number(readlineSync.question(`Enter the 5th number:\n`));
// let lastNum = Number(readlineSync.question(`Enter the last number:\n`));

// let numArr = [firstNum, secondNum, thirdNum, fourthNum, fifthNum];

// if (numArr.includes(lastNum)) {
//   console.log(`The number ${lastNum} appears in ${numArr.join(`,`)}`);
// } else {
//   console.log(`The number ${lastNum} does not appear in ${numArr.join(`,`)}`);
// }

// Palindromic Strings (Part 1)
// function isPalindrome(str) {
//   let firstHalf = str.slice(0, str.length / 2);
//   let secondHalf = ``;
//   if (str.length % 2 === 0) {
//     secondHalf = str.slice(str.length / 2);
//   } else {
//     secondHalf = str.slice(str.length / 2 + 1);
//   }
//   reversedSecondHalf = secondHalf.split(``).reverse().join(``);
//   if (firstHalf === reversedSecondHalf) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isPalindrome("madam"); // true
// isPalindrome("maam"); // true 1234
// isPalindrome("Madam"); // false (case matters)
// isPalindrome("madam i'm adam"); // false (all characters matter)
// isPalindrome("356653"); // true

// Palindromic Strings (Part 2)
// function isRealPalindrome(str) {
//   let cleanStr = str.replace(/[^a-zA-Z1-9]/g, ``).toLowerCase();
//   console.log(cleanStr === cleanStr.split(``).reverse().join(``));
// }

// isRealPalindrome("madam"); // true
// isRealPalindrome("Madam"); // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam"); // true (only alphanumerics matter)
// isRealPalindrome("356653"); // true
// isRealPalindrome("356a653"); // true
// isRealPalindrome("123aba4321"); // false

// Palindromic Numbers
// function isPalindromicNumber(num) {
//   let strNum = String(num);
//   console.log(strNum === strNum.split(``).reverse().join(``));
// }

// isPalindromicNumber(34543); // true
// isPalindromicNumber(123210); // false
// isPalindromicNumber(22); // true
// isPalindromicNumber(5); // true

// Running Totals
// function runningTotal(arr) {
//   let acc = 0;
//   let newArray = arr.map((num) => {
//     acc += num;
//     return acc;
//   });
//   console.log(newArray);
// }

// runningTotal([2, 5, 13]); // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
// runningTotal([3]); // [3]
// runningTotal([]); // []

// Letter Counter (Part 1)
function wordSizes(str) {
  counterObj = {};
  let sentenceArr = str.split(` `);
  for (let i = 0; i < sentenceArr.length; i++) {
    let wordLength = sentenceArr[i].length.toString();
    if (wordLength === `0`) {
      continue;
    }
    if (counterObj[wordLength]) {
      counterObj[wordLength] += 1;
    } else {
      counterObj[wordLength] = 1;
    }
  }
  console.log(counterObj);
}

function removeNonLetters(str) {
  let result = ``;
}

wordSizes("Four score and the seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(""); // {}
