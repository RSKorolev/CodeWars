function positiveSum(arr) {
    let Newarr = arr.filter(item => item >= 0);
    let sum = 0;
    for (let i = 0; i < Newarr.length; i++) {
        sum += Newarr[i];
    }
    return sum;

}




console.log(positiveSum([1, -2, 3, 4, 5]));