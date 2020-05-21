// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    const words = [];  // make an empty array 'words'

    for (let word of str.split(' ')) {      // split the input string by spaces to get an array
        words.push(word[0].toUpperCase() + word.slice(1)); // for each word in the array uppercase the first letter of the word
        // join first letter with the rest of the string
        // push result into 'words' array
    }

    return words.join(' ');  // join 'words' into a string and return it

    // option #2 (not as solid, what if it's Spanish starting with an exclamation etc)
    
    // let result = str[0].toUpperCase();    create 'result' which is the first character of the input string capitalized
    // for (let i = 1; i < str.length; i++) {   for each character in the string
    //      if (str[i - 1] === ' ') {   if the character to the left is a space
    //      result += str[i].toUpperCase();   capitalize it and add it to 'result'
    // } else { 
    //      result += str[i];  else add it to 'result'
    // }
    // return result;
}

module.exports = capitalize;
