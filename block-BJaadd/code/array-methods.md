Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   -parameter : separater (optional) ("" , ) are the values.
   -return : a string all the elements joined, if arr length is 0 then empty strng is returned
   -example:

```js
const elements = ["Fire", "Air", "Water", "jungle"];
console.log(elements.join());
console.log(elements.join(`*`));

const hero = [`iron man`, "thor", "hulk", "captain", "spydy"];
console.log(hero.join());
console.log(hero.join(`..`));

const move = [`man`, "hammer", "gun", "captain", "brain"];
console.log(move.join(`77`, `&`));
console.log(move.join(`..`));
```

join method which is use to join all the elements in the specified array ,with the given sepater also
--it doesn't mutates

3. `flat`
   -parameter : depth (numbered data type ) used to specify how depth a nested array goes
   -return : it returns a new array with all subarray eleets concatenate to it.
   -example:

```js
const arr = [2,4,6,[8,10],[12]];
console.log(arr.flat());
const arr = [2,[[24,63]],[[8,10,12]];
console.log(arr.flat());
const arr = [12,4,[26,[8,10],[12]]];
console.log(arr.flat());
```

flat method used to concate all the sub array elemts in the single array.
--it doesn't mutates

4. `push`
   -parameter : elements(numbered data type)
   -return: adds new element in the array at end position returns as new length property.
   -example:

```js
const arr = [1, 2];
console.log(arr.push(4, 6, 8));
let march = [31, 30, 20, 10];
console.log(march.push(5));
let apples = [2, 5, 8, 4];
console.log(apples.push(6));
```

push method used to add elemts at the end of the array and returns the new length property
--it does mutates

5. `indexOf`
   -parameter : search element locate in the array , index value where to start
   -return : The first index of the element in the array; -1 if not found.
   -example:

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
let arr = [0, 7, 9, 6];
arr.indexOf(9, 2); // 2
arr.indexOf(2, -1); // -1
let vast = ["red", "blue", "purple"];
vast.indexof("blue");
```

indexof method used to find the current index of the searched element or if element not present then it returns -1
--it doesn't mutates

6. `lastIndexOf`
   -parameter : search element locate in the array , index value where to start
   -return : The last index of the element in the array; -1 if not found.
   -example:

```js
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"));
let rrr = [900, 400, 600, 500, 400];
console.log(rrr.lastIndexOf(400));
let hat = [1, 5, 7, 3];
hat.lastIndexOf(8);
```

these used to find the last indexof the element in that array if not present then it returns the-1
--it doesn't mutates

7. `includes`
   --parameter : search element , from index the value for search
   -return : a boolean value of true if element found or returns false
   --example:

```js
let arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
let vase = [3, 7, 9, 11];
vase.includes(9);
vase.includes(13, 4);
let car = [5, 8, 3, 9];
car.includes(3, 3); //false
car.includes(9); //true
```

here it searches for the given elements in the array if it present in that then return true if not then false 8. `reverse`:
-returns : the reversed array
-example:

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]
items.reverse();
console.log(items); // [3, 2, 1]
let car = [5, 8, 3, 9];
console.log(car.reverse());
```

here it reverse the all array elements from last to first
-- it doesn't mutates

9. `every`
   --parameter : array,element,callbackFn
   --return :true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
   --elemst :

```js
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
let age = (num) => num >= 18;
let isAdult = [30, 20, 35, 18, 29];
console.log(isAdult.every(age));
```

these checks the conditions with given array elements if pass the returns true or not false
--it doesn't mutates

10. `shift`
    -return : These removes first element from the array if the array is empty it returns undefined
    -example:

```js
let array1 = [4, 7, 8, 9];
console.log(array1.shift());
let arr = [2, 4, 6, 8, 10];
console.log(arr.shift());
let vat = ["ram", "sham", "bham"];
console.log(vat.shift());
```

shift method is used to remove the first element from the array if element not present then returns undefined.
these methods mutates the array 11. `splice`
-parameters :start:The index at which to start changing the array.,
deleteCount:An integer indicating the number of elements in the array to remove from start.,
item1,item2 :The elements to add to the array, beginning from start.
-return: An array containing the deleted elements.
-example:

```js
let myFish = ["angel", "clown", "drum", "sturgeon"];
let removed = myFish.splice(2, 1, "trumpet");
let myfishCollection = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myfishCollection.splice(2, 0, "drum", "guitar");
let myFish = ["angel", "clown", "trumpet", "sturgeon"];
let removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
```

splice method is used to remove the elements of array at specified location and we can also add new elements into it
it mutates the array 12. `find`
-parameter: : callback function -- functio to execute on each value in the array
element : The current element in the array
index: the index of the current element in the array.
aray: the array that find was called on
--return : the first element in the array that satisfies the provided testing function
-- example:

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result);
const number = [
  { even: "two", num: 2 },
  { odd: "five", num: 5 },
  { whole: "zero", num: 0 },
];
const result = number.find(({ whole }) => whole === "zero");
```

these method used to find the required element in the array through call back function returns the first element which satisfy the condition
it doesnt mutates
13`unshift`:
--parameter: element N -- the element to add to the front of the arr
--return: the new length property of the object when these method called
--example:

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
arr = [4, 5, 6]; // resetting the array
arr.unshift(1);
arr.unshift(2);
arr.unshift(3);
arr.unshift(-2, -1); // length is 10
```

these method is used to add new elements from the starting of the array and returns the length of the array
these mutates the array
14`findIndex`:
-parameter: : callback function -- functio to execute on each value in the array
element : The current element in the array
index: the index of the current element in the array.
aray: the array that find was called on
--return : the first index of the element in the array that satisfies the provided testing function
--example:

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");
const ipl = ["rcb", "csk", "mi", "lsg", "gt", "kkr", "srh", "dc"];
const myteam = ipl.findIndex((ipl) => ipl === "rcb");
```

these method is used to find the indexof the element present in the array if array is empty or the item not found then returns the -1
it doesnt mutates the array
15`filter`:
--parameter: callback fun : to test each element , element : the current element in the array, index : current index, array : current array
--return : a new array with the elements that pass the test if n elements pass the test, an empty array will be returned
--example:

```js
let isBigEnough = (value) => value >= 10;
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // [12,130,44]
let isBigEnough = (value) => value <= 40; // [12,5,8]
```

16`flat`:
17`forEach`:
--parameter:
callback fun : to test each element , element : the current element in the array, index : current index in the array, array : current array where these method called
--return: undefined
--example:

```js
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));
const rating = [5, 4, 3, 5];
let sum = 0;
rating.forEach((num) => {
  sum += num;
});
console.log(sum);
```

these method is used to itrate ver the each array element once and it returns undefined
it doesnt mutates the array
18`map`:
--parameter:
callback fun : to test each element , element : the current element in the array, index : current index in the array, array : current array where these method called
--return : a new array with each element being the result of the callback function
--example:

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
let squareRoot = numbers.map((num) => num * num);
```

these method is used to map(go through)each element in the array and returns the new array with test results
it doesn't mutates the array

19`pop`:
--returns : the removed element from the array and if array is empty then undefined
--example:

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const popped = myFish.pop();
let fingers = [5, 10, 3, 4, 12];
console.log(fingers.pop());
```

these method used to remove the last element from the array
20`reduce`:
--parameter :
callbackfun : function is called wih some arguments
previousValue, shows the intial value if not set then first index value will be set as these value
current value : the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
array: the array to traverse.
--return : The value that results from running the "reducer" callback function to completion over the entire array.
--example:
```js
let arr = [20,40,50,30,60,70];
let sum = arr.reduce((acc,num) => acc + num ,10);
let sum = arr.reduce((acc,num) => acc - num ,5);
undefined
sum
-260
```
these method used to irates the each element in the array and reduze the element size into single element and returns the tested value as the results 
21`slice`:
--parameter : start -- start of the index value like 0
, end -- The index of the first element to exclude from the returned array. slice extracts up to but not including end
--return : a return array containing the extraction elements
--example:
```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));
```
these method is used  return a copy of the some protion of array from specified index 
and returns the new array with these values
it doesn't mutates the array

22`some`:
--parameter:
callback fun : to test each element , element : the current element in the array, index : current index in the array, array : current array where these method called
--return : the truthy value if the cb function returns truthy value otherwise false

--example:
```js
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x < 10); // true
[4,6,8,10].some(x => x % 3 === 0);//true
[4,8,10].some(x => x % 3 === 0);//false
```

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array,

```

```
