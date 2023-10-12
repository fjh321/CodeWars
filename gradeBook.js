function getGrade(s1, s2, s3) {
    let result = (s1 + s2 + s3) / 3
    if (result <= 100 && result >= 90) {
        return 'A'
    } else if (result < 90 && result >= 80) {
        return 'B'
    } else if (result < 80 && result >= 70) {
        return 'C'
    } else if (result < 70 && result >= 60) {
        return 'D'
    } else if (result < 60 && result >= 0) {
        return 'F'
    }
}


//   Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

