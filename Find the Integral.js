function integrate(coefficient, exponent) {
    return `${coefficient / (exponent + 1)}x^${(exponent + 1)}`
}

console.log(integrate(3, 2)); //1x^3