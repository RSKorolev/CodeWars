function nameShuffler(str) {
    let arr = []
    arr = str.split(' ')
    return `${arr[1]} ${arr[0]}`
}

console.log(nameShuffler('john McClane')); // 'McClane john'


/*function nameSuffle(str) {
    return str.split(' ').reverse().join(' ')
}
*/