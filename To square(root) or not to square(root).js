function squareOrSquareRoot(array) {
    let result = []
    for (const element of array) {
        if (Math.sqrt(element) % 1 === 0) {
            result.push(Math.sqrt(element))
        }
        else {
            result.push(Math.pow(element, 2))
        }

    }
    return result;
}
