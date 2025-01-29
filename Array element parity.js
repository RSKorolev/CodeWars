function solve(arr) {
    return arr.find(num => !arr.includes(-num));
}

console.log(solve([1, -1, 2, -2, 3])); //3