function noSpace(x) {
    arr = x.split('')
    return arr.filter(item => item != " ").join("")
}

console.log(noSpace('fff ffff    ffff'));
