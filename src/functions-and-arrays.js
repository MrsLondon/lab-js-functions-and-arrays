// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a , b) {
    if(a > b){
        return a
    }
    else if(a < b) {
        return b
    }
    else {
        return a 
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
// we build a function that we cant run this array through it to iterate through the words
//this function has to go through each word to find the longest word 
//As the function loops through the array, it will check each word and compare its length to 
//the current longestWord (eg current word is mytery it compare it with brother). 
//If the current word is longer, longestWord will be updated to hold that word.
function findLongestWord(arrayOfWords) {
    if(arrayOfWords.length === 0){
        return null;
    } //check if the array is empty 
    let longestWord = ""; //empty so that we can save values which is the longest words
   for(let i = 0; i < arrayOfWords.length; i++) {
    if(arrayOfWords[i].length > longestWord.length){
        longestWord = arrayOfWords[i]; //arrayOfWords[i] represents the current word in the loop (i.e., each word in the array as the loop runs).
    }  
   }
    return longestWord; 
}

console.log(findLongestWord(words)); 


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    let sum = 0; 
   // Iterating over the array using its length
    for(let i = 0; i < numbersArray.length; i++){
        sum += numbersArray[i]
    }
    return sum; 
}

console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//pseudocode..first check if the array is empty return 0
//to calculate average we divide the sum by the total number of values.. so total/8 numbers in bracet
//since we have a code that calculate the sum it would be better to implement it in this function .. how?

function averageNumbers(arrayOfNumbers) {
    if(arrayOfNumbers.length === 0){
        return 0
    }
   //to emplement sumNumbers function to calculate the sum of arrayOfNumbers we use a varialble
   const totalSum = sumNumbers(arrayOfNumbers);
   //another variable to store the avrage
   const average = totalSum /arrayOfNumbers.length
   return average; 
}
console.log(averageNumbers(numbers2))



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToFind) {
    if (wordsArray.length === 0) {
        return null;
    }
    // Loop through the array
    for (let i = 0; i < wordsArray.length; i++) {
        // Check if the current word matches the word we're looking for
        if (wordsArray[i] === wordToFind) {
            return true; //should return true if the word we are looking for is in the array
        }
    }

    return false; //should return false if word is not found
}


console.log(doesWordExist(words2, "subset")); 
console.log(doesWordExist(words2, "apple")); 
console.log(doesWordExist([], "truth")); 
