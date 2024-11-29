function contamination(text, char) {
    arr = Array(text.length).fill(char)
    return arr.join('')
}

console.log(contamination("zzz", "z"));
