function past(h, m, s) {
    if (0 <= h && h <= 23) {
        h = h * 3600000
        //         console.log('hello')
    }

    if (0 <= m && m <= 59) {
        m = m * 60000
        //         console.log('hello2')
    }

    if (0 <= s && s <= 59) {
        s = s * 1000
        //         console.log('hello3')
    }
    let time = h + m + s

    return time

}

console.log(past(0, 4, 1))


// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

