// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*

NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ")
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ")

// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
strings.includes('is')
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf('is')
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every( (num) => num % 3 == 0)
// -  Sort Array from smallest to largest
let sortednumber = [...numbers].sort((a,b) => a - b)
// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
// let largest = (a,b) => {
//   for(let i=numbers.length-1; i<= numbers.length; i--) {
//     if(a > b)  return a;
//   }
// }
// let large = numbers.filter(largest,6);
// console.log(large);
// - Find longest string in strings

// - Find all the even numbers
let evenNumbers = numbers.filter((num)=> num % 2 === 0);
// - Find all the odd numbers
let oddNumbers = numbers.filter((num)=> num % 2 !== 0);

// - Place a new word at the start of the array use (unshift)
strings.unshift("These")
// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881
numbers.
numbers.replace(12,1221);
// - Replace words in strings array with the length of the word
let word = strings.map((str) => str.length);
// - Find the sum of the length of words using above question


let sum = strings.reduce((acc,word) => {
  return acc + word;
},0)




// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
  



// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
