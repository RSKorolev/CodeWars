function remove(string) {
    let result = ''
    for (char of string) {
        if (char !== '!') {
            result += char
        }
    }
    return result + '!'
}

console.log(remove('Hi! Hi!')); //"Hi Hi!"