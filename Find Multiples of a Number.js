function findMultiples(integer, limit) {
    let arr = []
    for (let index = integer; index <= limit; index += integer) {
        arr.push(index)
    }
    return arr
}




