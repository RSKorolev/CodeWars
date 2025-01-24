function findAverage(nums) {
    return nums.reduce((sum, i) => sum + i) / nums.length
}



console.log(findAverage([1, 2, 3, 4])) // 2.5