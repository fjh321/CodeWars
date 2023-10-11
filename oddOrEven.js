function oddOrEven(array) {
    let sum = 0
    array.forEach(num => {
        sum = sum + num
    })
    if (sum % 2 === 0) {
        console.log('even')
        return 'even'
    } else if (sum % 2 !== 0) {
        console.log('odd')
        return 'odd'
    }
    console.log(sum)
}

oddOrEven([1, 5, 7, 9])

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).