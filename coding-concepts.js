// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.split(""))

// a) Your answer: The .split("") mutator will cause the string variable to be split into an array with each character at a separate index in the array.
// b) Verify and explain: The console.log confirmed what I had expected. Each of the characters, including the space between a and 2, became a separate element within the array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: The return will be undefined since "LEARN Student" has not been defined.
// b) Verify and explain: The console.log returned undefined since "LEARN Student" is not defined in a variable prior to the console.log


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: The console.log will return each value within the array multiplied by 2 with the array returning [8, 10, 12, 14, 16].
// b) Verify and explain: Console.log returned [8, 10, 12, 14, 16]. multBy2 run through the function returned each index in the array * 2. 


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: The .filter function will create a smaller array than the input array. Each value will run through the function and return only the values that are evenly divisible by 2. The console.log will return [12, 14].
// b) Verify and explain: My answer was correct. The function returned [12, 14] which are they only values that are evenly divisible by 2 in the array. 


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: The function will return George Delta 2021. The name is the only value that will be run through the function. "Delta" and 2021 are hard coded into the function so they will return with the name George for the ouput. 
// b) Verify and explain: My answer was partially correct. While the student, cohort, and year were returned in the output, it was returned in a class. So the true answer was Learn {student: 'George', cohort: 'Delta', year: 2021}.
