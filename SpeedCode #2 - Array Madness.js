function arrayMadness(a, b) {
    let sumA = 0
    let sumB = 0
    for (let i = 0; i < a.length; i++) {
        sumA += Math.pow(a[i], 2)
    }
    for (let i = 0; i < b.length; i++) {
        sumB += Math.pow(b[i], 3)
    }
    if (sumA > sumB) {
        return true
    } else {
        return false
    }

}



console.log(arrayMadness([5, 3, 2, 4, 1], [15])); //false