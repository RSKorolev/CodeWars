function twoDecimalPlaces(n) {
    // return parseFloat(n.toFixed(2)) // преобразовывает строку в число 
    //return Number(n.toFixed(2))        // изящней чем предыдущий 
    return +(n.toFixed(2))              // еще одно решение

}
const n = 6.7878
console.log(twoDecimalPlaces(n));
console.log(typeof (+(n.toFixed(2))));  