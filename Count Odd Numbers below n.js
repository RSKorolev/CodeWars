// function oddCount(n) {
//     let count = 0
//     for (let i = 1; i < n; i += 2) {
//         if (i < n) {
//             count += 1
//         }
//     }
//     return count
// }

function oddCount(n) {
    return Math.floor(n / 2)
}




console.log(oddCount(15)); //7