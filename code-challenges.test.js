// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// // Expected output: "15 is divisible by three"
var num2 = 0
// // Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

//Pseudo code: 
    // Declare a function called div3 that takes in each of the provided variables
    // Conditionals - if the variable % 3 === 0 
    // return true 
        // use string interpolation to return the variable with the string
    // otherwise return false
        // use string interpolation to include the variable with the string "is divisible by three"
        // if the variable is not evenly divisible by 3 return false, use string interpolation to include the variable with the string "is not divisible by three"

describe("div3", () => {
    test("return if the number is or is not divisible by three", () => {
       expect(div3(num1)).toEqual(`${num1} is divisible by three`)
       expect(div3(num2)).toEqual(`${num2} is divisible by three`)
       expect(div3(num3)).toEqual(`${num3} is not divisible by three`)
    })
})
// Test returned as failed, ReferenceError: div3 is not defined


// b) Create the function that makes the test pass.

let div3 = (number) => {
    if(number % 3 === 0){
        return `${number} is divisible by three`
    } else if (number % 3 !== 0){
        return `${number} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//Pseudo code
    // Create a function
    // Input an array of words
    // Iterate through each 0 index in the array
    // Higher order function - .map
    // Method - array[].toUpperCase()
    // Output all worlds capitalized in the array

describe("capLetters", () => {
    test("return an array with all the words capitalized", () => {
        expect(capLetters(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capLetters(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})





// // b) Create the function that makes the test pass.
const capLetters = (array) => {
    let newArray = array.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })
    return newArray
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

// Pseudo code
    // Create a function called firstVowel
        // input is a string
        // create a for loop to run through each vowel
        // indexOf to find first vowel index
        // output is the index of the first vowel

    describe("firstVowel", () => {
    test("return the index of the first vowel in a string", () => {
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(2)
        expect(firstVowel(vowelTester3)).toEqual(3)        
    })
})
// b) Create the function that makes the test pass.





// var vowelTester1 = "learn"
var vowelTester1 = "learn"
var vowelTestArray = vowelTester1.split("")

const firstVowel = (array) => {
    let newArray = []
    for(let i= 0; i < array.length; i++) {
        if(i === array.indexOf("a") || i === array.indexOf("e") || i === array.indexOf("i") || i === array.indexOf("o") || i === array.indexOf("u")) {
            newArray.push(array[i])
            }
        }   
        return newArray.join()
        }

// I got really stuck on this one and was not able to create the function on time. What first threw me off was that I was creating a function for a string. My thought was I needed to create a new variable to split the strings so I could input an array into the function. I used a for loop to run through the possible vowels using .indexOf. I tried both || and && statements to run through each index to find the first vowel. I keep receiving an undefined error. Below this first function are the scattered remains of other attempts.
    
// const firstVowel = (string) => {
//     let testerArray = string.split("")
//     let newArr = []
//     let vowelArr = ["a", "e", "i", "o", "u"]
//     for(let i=0; i<array.length; i++){
//         if(array[i] === testerArray.indexOf(vowelArr)){
//             return newArr.push()
//         }
//     }
// } 
// console.log(newArr[i])
//     let newArray = string.split("")
    
//     return newArray.filter((value) => {
//         return array.indexOf(newArray) 
//     })
// }


// console.log(array.indexOf(value))
// const firstVowel = (string) => {
//     let vowelArr = ["a", "e", "i", "o", "u",]
//     let newArray = string.split(" ")
// //     if (newArray == vowelArr.filter(vowelArr)) {
//         return newArray.indexOf(string)
//     }
//     return newArray[i]
// }
