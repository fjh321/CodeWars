function descendingOrder(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}

descendingOrder(79123)

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.