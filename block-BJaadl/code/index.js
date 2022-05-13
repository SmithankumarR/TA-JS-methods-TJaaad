let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let findLongestWord = 
[ ...words].sort((a,b) => a.length - b.length).pop();
console.log(findLongestWord);
// - Convert the above array "words" into an array of length of word instead of word.
let strLength = words.map((string) => string.length);

// - Create a new array that only contains word with atleast one vowel.
let onlyVowel = words.filter((word)=> {
if (
  word.includes("a") || 
  word.includes("e") ||
  word.includes("i") ||
  word.includes("o") ||
  word.includes("u") 
  ) {
    return word;
  } else {
    return false;
  }
});
console.log(onlyVowel);
// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'));
// - Create a new array that contians words not starting with vowel.
let notOnlyVowel = words.filter((word)=> {
  if (
    word.includes("a") || 
    word.includes("e") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u") 
    ) {
      return false;
    } else {
      return word;
    }
  });
  console.log(notOnlyVowel);
// - Create a new array that contianse words not ending with vowel
let numbers  = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = numbers.reduce((acc,cv) => {
  acc = acc + cv;
  return acc;
},0)
console.log(sumArray);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedby3 = numbers.filter((num) => num % 3 === 0);
console.log(multipliedby3);

// - Create a new array that contains only even numbers
let onlyEven = numbers.filter((num) => num % 2 === 0);
console.log(onlyEven, 'even');
// - Create  a new array that contains only odd numbers.
let onlyOdd = numbers.filter((num) => num % 2 !== 0);
console.log(onlyOdd, "odd") ;
// - Create a new array that should have true for even number and false for odd numbers.
let decider = numbers.map((num) => {
  if(num % 2 === 0){
    return num,"true";
  } else if( num % 2 !== 0) {
    return num,"false";
  } else {
    console.log("no values");
  }
} );
console.log(decider);
// - Sort the above number in assending order.
let sortedNum = [...numbers].sort((a,b) => a-b);
console.log(sortedNum);
// - Does sort mutate the original array?
//yes
// - Find the sum of the numbers in the array.
let sumOfNum = numbers.reduce((acc,cv) => {
  acc = acc + cv;
  return acc;
},0)
console.log(sumOfNum);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageNumbers = numbers.map((avg) => {

  return (sumOfNum / avg.length)
});
console.log(averageNumbers);
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
