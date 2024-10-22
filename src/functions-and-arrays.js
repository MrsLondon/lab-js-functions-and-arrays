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
let sum = 0; 

function sumNumbers() {}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
