function isPalindrome(x) {
    console.log(x.split('').reverse().join('').toLowerCase())
    if (x.toLowerCase() === x.split('').reverse().join('').toLowerCase()) {
        return true
    } else {
        return false
    }
}

isPalindrome('Hannah')

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

