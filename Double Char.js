function doubleChar(str) {
    let array = []
    array = str.split('')
    let sum = []
    for (let i = 0; i < array.length; i++) {
        sum += array[i] + array[i]
    }
    return sum
}

console.log(doubleChar('absd'));