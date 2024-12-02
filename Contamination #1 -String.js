function contamination(text, char) {
    arr = Array(text.length).fill(char)
    return arr.join('')
}


// function contamination(text, char) {
//     return char.repeat(text.length);
// }

//Этот метод создает новую строку, повторяя символ char указанное количество раз, равное длине строки text.