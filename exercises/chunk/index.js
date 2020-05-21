// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunked = [] // create empty array to hold chunks called 'chunked'

    for (let element of array) { // for each element in the 'unchunked' array
        let last = chunked[chunked.length - 1] // retrieve the last element in 'chunked'

        if (!last || last.length === size) { // if last element does not exist or if its length is equal to chunk size  
            chunked.push([element]) // push a new chunk into 'chunked' with the current element
        } else {
            last.push(element) // else add the current element into the chunk
        }
    }
    return chunked

    // option #2

    // let chunked = []      create empty 'chunked' array
    // let index = 0       create 'index' start at 0
    // while (index < array.length) {      while index is less than array.length
        // chunked.push(array.slice(index, index + size))      push a slice of length 'size' from 'array' into 'chunked'
        // index += size      add 'size to 'index'
    // }
    // return chunked

    
}

module.exports = chunk;






