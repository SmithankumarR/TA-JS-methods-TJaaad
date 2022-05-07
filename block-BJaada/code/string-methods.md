Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
    - return : A new string representing the calling string converted to upper case.
    - Example:
    ```js
    let user = 'harsha vardhan';
    user.toUppeerCase(); // "HARSHA VARDHAN"
    let school = 'altcampuus';
    school.toUpperCase(); // "ALTCAMPUS"
    let work = 'developer';
    work.toUpperCase(); // "DEVELOPER"
  ```
   `toUpperCase` accepts given string and converts into uppercase

3. `toLowerCase`
     - return : A new string representing the calling string converted to lower case.
    - Example:
    ```js
    let userName = 'ARYA VARDHAN';
    user.toUppeerCase(); // "arya vardhan"
    let school = 'ALTCAMPUS';
    school.toUpperCase(); // "altcampus"
    let work = 'DEVELOPER';
    work.toUpperCase(); // "developer"
    ```
    `toLowerCase` : accepts given string and converts into lowercase

4. `trim`
    - return : A new string representing str stripped of whitespace from both its beginning and end.
    -Example:
    ```js
    let hey = " hey arya    ";
    hey.trim(); // "hey arya"
    let color = "   red ";
    color.trim(); // "red"
    let rain = "  its raining  ";
    rain.trim(); // "its raining"
    ```
    `trim` : removes the white space from both the sides of the given string

5. `trimEnd`
      - return : A new string representing str stripped of whitespace from the end of the string.
    -Example:
    ```js
    let hey = " hey arya    ";
    hey.trim(); // "hey arya   "
    let color = "   red ";
    color.trim(); // "red  "
    let rain = "  its raining  ";
    rain.trim(); // "its raining   "
    ```
    `trimEnd` : removes the white space from  the Ending of the given string
6. `trimStart`
  - return : A new string representing str stripped of whitespace from the beginning of the string.
    -Example:
    ```js
    let hey = " hey arya    ";
    hey.trim(); // "hey arya   "
    let color = "   red ";
    color.trim(); // "red  "
    let rain = "  its raining  ";
    rain.trim(); // "its raining   "
    ```
    `trimEnd` : removes the white space from  the starting of the given string
7. `concat`
    -parameter : One or more strings to concatenate to str.
      -return :  A new string containing the combined text of the strings provided.
      -Example:
      ```js
      let str1 = "help";
      let str2 = "Me!";
      console.log(str1.concat(',', str2)) ; // help,Me!
       let str1 = "I";
      let str2 = "Love u";
      console.log(str1.concat(',', str2)) ; // help,Me!
       let str1 = "Lets be";
      let str2 = "Friends";
      console.log(str1.concat(' good ', str2)) ; // help,Me!
      ```
      `concat` :  these method used to concatenate the given 2 0r more string into single string


8. `endsWith`
    -parameter : The characters to be searched for at the end of str.
    -return : true if the given characters are found at the end of the string; otherwise, false.
    -Example:
    ```js
    let myName = "carhliealbert";
    myName.endsWith('t'); // true
    let sister = "caridocapel";
    myName.endsWith('t'); // fasle
     let mywife = "sunnyalbert";
    myName.endsWith('t'); // true
    ```
     `endsWith` : it checks whether the given charector is ends with the specified charector if it then it displays true  or false

9. `includes`
    -parameter : A string to be searched for within str.
    -return : true if the search string is found anywhere within the given string; otherwise, false if not.
    -Example : 
    ```js
    let games = " cricket"
    games.includes('k'); //true
    let score = " eleven"
    score.includes('V'); // false because it is case sensitive
    let bag = "red color";
    score.includes('C') // true
    ```
    `includes` -- checks the specified charector with the given string if it its persent then logs true or else false

10. `indexOf`
    -parameter : recives the string and with is  final postion limit
    -return: The index of the first occurrence of searchString found, or -1 if not found.
    -Exmple:
    ```js
    let ram ="cotton silk company owner "
    ram.indexOf('silk'); // 7
    let time = " current time is two pm "
    time.indexOf('two', 0); 17
    let color = "redvine is mine"
    color.indexOf("mine" , 0)  // 11
    ```
    `indexOf` -- search the given string in input and returns the index of that string if found , or -1 not found

11. `lastIndexOf`
     -parameter : recives the string and with is  final postion limit
    -return: The index of the last occurrence of searchString found, or -1 if not found.
    -Exmple:
    ```js
  
    let sentence = 'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1

    let time = "current time is two pm ";
    console.log(time.lastIndexOf('time',10)); // 8
   
    let color = "redvine is mine"
    color.lastindexOf("mine" , 0)  //  -1
    ```
    `indexOf` -- search casesensitive the given string in input and returns the lastindex of that string if found , or  not found or limit is set to 0 -- -1
12. `padEnd`
    -parameter : (targetLength)
The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
    -return: A String of the specified targetLength with the padString applied at the end of the current str.
    -Example:
    ```js
    'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
    ```
    `padEnd` : searchs the given targent length in input and returns the padstring apllied at the end

13. `padStart`
 -parameter : (targetLength , padstring)
The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
    -return: A String of the specified targetLength with the padString applied at the start .
    -Example:
    ```js
    'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
    ```
    `padStart` : searchs the given targent length in input and returns the padstring apllied at the end
14. `repeat`
    -parameter : count
An integer between 0 and +Infinity, indicating the number of times to repeat the string.
    -return :
    A new string containing the specified number of copies of the given string.
    -example:
  
    ```js
    "rama".repeat(4) ; //ramaramaramarama
    "hello".repat(7); //hellohellohellohellohellohellohello
    ```
    `repeat` : repeats the given string into given number of counts return the whole strings that time

15. `replace`
    -parameter : oldpattern 
    any string value or number that you what to replace
    -return :   A new string, with some or all matches of a pattern replaced by a replacement.
    -example:
    ```js
    let str = 'Twas the night before Xmas...';
    let newstr = str.replace(/xmas/i, 'Christmas');
      console.log(newstr);  // Twas the night before Christmas...;

    let re = /apples/gi;
    let str = 'Apples are round, and apples are juicy.';
    let newstr = str.replace(re, 'oranges');
    console.log(newstr);  // oranges are round, and oranges are juicy.
      ```
    replace : used to replace the old pattern world into new pattern word if it match the given word ;

16. `slice`
    --parameter : beginIndex ...The zero-based index at which to begin extraction.
        endIndex ...The index of the first character to exclude from the returned substring.
    -return :A new string containing the extracted section of the string.
      --example:
      ```js
      let str = 'The morning is upon us.'
      console.log(str.slice(-11, 16)) // => "is u"
      console.log(str.slice(-5, -1)) // => "n us"
      console.log(str.slice(11, -7)) // => " is u"
      ```
     `slice`: These method extracts a section of a string and returns it as a new string, without modifying the original string.

17. `split`
      --parameter: separator 
        The pattern describing where each split should occur. The separator can be a simple string or it can be a regular expression. 
      --return : An Array of strings, split at each point where the separator occurs in the given string.
      --example:
      ```js
      const myString = 'Hello World. How are you doing?'
    const splits = myString.split(' ', 3)

      console.log(splits)
      ```
      `split`:These method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array

18. `substring`
    --parameter : indexStart...The index of the first character to include in the returned substring.
      indexEnd ...The index of the first character to exclude from the returned substring.
    -return :A new string containing the specified part of the given string.
    -example: 
    ```js
    // Displays 'illa' the last 4 characters
    let anyString = 'Mozilla'
    let anyString4 = anyString.substring(anyString.length - 4)
      console.log(anyString4);

// Displays 'zilla' the last 5 characters
      let anyString = 'Mozilla'
      let anyString5 = anyString.substring(anyString.length - 5)
        console.log(anyString5)
```
`substring` :These method returns the part of the string between the start and end indexes, or to the end of the string.