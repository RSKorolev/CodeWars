function mergeArrays(a, b) {
	return [... new Set([...a, ...b].sort((x, z) => x - z))]
}
