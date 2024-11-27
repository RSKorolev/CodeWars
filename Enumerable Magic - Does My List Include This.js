// через стандартный цикл
// function include(arr, item) {
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if (element === item) return true
//     }
//     return false
// }

// можно через метод массива includes
function include(arr, item) {
    return arr.includes(item)
}


console.log(include([1, 2, 3, 4], 6));