// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    // turn string into an object/hash with characters as keys and number of uses as values
    let chars = {}
    let max = 0
    let maxChar = ''

    for (let character of str) { // use 'of' for arrays or strings
        if (!chars[character]){
            chars[character] = 1
        } else {
            chars[character]++
        }
        // chars[character] = chars[character] + 1 || 1
    }

    for (let character in chars) { // use 'in' for objects
        if (chars[character] > max) {
            max = chars[character]
            maxChar = character
        }
    } 

    return maxChar
}

module.exports = maxChar;


// similar questions
// does string A have the same characters as string B (is it an anagram)
// does the given string have any repeated characters in it