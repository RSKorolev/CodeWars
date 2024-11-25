function twoDecimalPlaces(n) {
    // return parseFloat(n.toFixed(2)) // преобразовывает строку в число 
    return Number(n.toFixed(2))        // изящней чем предыдущий 

}

console.log(twoDecimalPlaces(6.7878));