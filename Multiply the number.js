function multiply(number) {
    return number * Math.pow(5, String(Math.abs(number)).length)
}

console.log(multiply(3));
