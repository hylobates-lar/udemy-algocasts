// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0
    const letters = ['a', 'e', 'i', 'o', 'u']

    for (let char of str.toLowerCase()) {
        if (letters.includes(char)){
            count++
        }
    }

    return count

    // option #2

    // const matches = str.match(/[aeiou]/gi)   g means all cases, i means case insensitive
           // match returns an array but will return null/falsey if no matches found
    // return matches ? matches.length : 0

}

module.exports = vowels;
