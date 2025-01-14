function evil(n) {
    let res = Array.from(n.toString(2), Number).reduce((sum, i) => sum + i, 0)
    if (res % 2 === 0) return `It's Evil!`
    return `It's Odious!`
}
console.log(evil(9)); 