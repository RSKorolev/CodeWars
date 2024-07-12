function differenceInAges(ages) {
	let resultArr = []
	ages.sort((a, b) => a - b)
	resultArr.push(ages[0], ages[ages.length - 1], ages[ages.length - 1] - ages[0])
	return resultArr
}


