
function maps(x) {
    let doubleArray = []
    for (let i = 0; i < x.length; i++) {
        let doubleNum = x[i] * 2
        doubleArray.push(doubleNum)
    }
    return doubleArray
}
console.log(maps([1, 2, 3]))

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]