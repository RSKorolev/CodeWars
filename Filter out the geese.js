function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
}


























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