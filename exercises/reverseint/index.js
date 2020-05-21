// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    let reversedString = n.toString().split('').reverse().join('')
    let reversedNum = parseInt(reversedString)

    // if (n < 0){
    //     return reversedNum * -1
    // }
    
    return reversedNum * Math.sign(n)
    // can also do return parseInt(reversedString) * Math.sign(n) and bypass the other variable
}

module.exports = reverseInt;

// parseInt turns string into integer
// .toString turns integer into string
// Math.sign returns 1 if positive and -1 if integer is negative
