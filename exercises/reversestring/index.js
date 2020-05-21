// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   let arr = str.split("")
   arr.reverse()
   return arr.join("")

    // return str.split("").reverse().join("")

    // option #2
    // let reversed = "";
    // for (let character of str) {
    //   reversed = character + reversed;
    //  }
    // return reversed;


    // option #3
    // return str.split("").reduce((reversed, character) => {
    //     return character + reversed;
    // }, "");

     // return str.split("").reduce((reversed, character) => character + reversed, "");

}

module.exports = reverse;
