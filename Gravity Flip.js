const flip = (d, a) => {
    result = []
    if (d === 'R') {
        result = a.sort((a, b) => a - b)
    } else {
        result = a.sort((a, b) => a - b).reverse()
    }
    return result
}
