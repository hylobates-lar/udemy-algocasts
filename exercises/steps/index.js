// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

    for (let row = 0; row < n; row++) { // from 0 to n (iterate through rows)
        let stair = '';     // create an empty string 'stair'
        for (let column = 0; column < n; column++) {    // from 0 to n (iterate through columns)
            if (column <= row) {    // if the current column is equal to or less than the current row
                stair += '#';   // add a # to 'stair'
            } else {    // else
                stair += ' ';   // add a space to 'stair'
            }
        }
    console.log(stair); // console log 'stair
    }

    // option #2 with recursion

    // function steps(n, row = 0, stair = "")
    //  if (n === row) {    if (row === n) then we have hit the end of our problem
    //      return;
    //  }

    //  if (n === stair.length) {   if the 'stair' string has a length === n then we are at the end of a row
    //      console.log(stair);
    //      return steps(n, row + 1);
    //  }
    
    //  if (stair.length <= row) {  if the length of the stair string is less than or equal to the row number we're working on
    //      stair += '#';  we add a '#', 
    //  } else { 
    //      stair =+ " ";    otherwise add a space 
    //  }
    //  steps(n, row, stair)
    // }

    // can shorten the last part
    // const add = stair.length <= row ? '#' : ' ';
    // steps(n, row, stair + add)
}

module.exports = steps;
