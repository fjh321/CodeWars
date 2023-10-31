let array = [1, 2, 2]

function squareSum(numbers) {
    return numbers.reduce((a, b) => (a) + (b * b), 0)
}

console.log(squareSum(array))

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] should return 9 

