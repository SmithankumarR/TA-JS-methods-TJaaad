let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((P) => P.name );

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((P) => P.grade );
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((P) => P.sex );

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filteredName = peopleName.filter((jname) => {
  jname.startsWith('J') || 
   jname.startsWith('P')
   return jname ;
});
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let lengthfilteredName = peopleName.map((jname) => {
 let len = jname.startsWith('A') || jname.startsWith('C')
 console.log(len.length);

});
// Log all the filtered male ('M') in persons array
let filteredMale = persons.filter((m) => m.sex == 'M' )
console.log(filteredMale, "male");

// Log all the filtered female ('F') in persons array
let filteredFemale = persons.filter((f) => f.sex == 'F' )
console.log(filteredFemale, "female");
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.map((g) => g % 2 == 0));

// Find the first name that starts with 'J' in persons array and log the object

let firstJname = peopleName.filter((jname) => {
if(jname.startsWith('J') ){
  return jname;
}
}
);

// Find the first name that starts with 'P' in persons array and log the object
let firstPname = peopleName.filter((jname) => {
  if(jname.startsWith('P') ){
    return jname;
  }
  }
  );
  
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let grade= persons.map((jname) => {
  if(jname.name.startsWith('J') && jname.grade > 10 && jname.sex == 'F' ){
    return jname;
  }
  }
  );
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((fmale)=> fmale.sex == 'F') ;
    
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((male)=> male.sex == 'M') ;

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc,cv)=> {
  acc = acc + cv;
  return acc;
},0)
// Find the average grade
let averageGrade = peopleGrade.reduce((acc,cv)=>{
  acc = acc +cv;
  return acc;
},0) / peopleGrade.length;
// Find the average grade of male

// Find the average grade of female


// Find the highest grade
let highestGrade = peopleGrade.sort((a,b) => a-b).pop();
// Find the highest grade in male
let highestGradeinMale = persons.map((m) => {
return  (m[grade]
  .sort((a,b) => a-b).pop() && m.sex == 'M' ) 
  
})
// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
