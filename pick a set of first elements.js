function first(arr, n) {
    if (n === undefined) {
        return arr.slice(0, 1);
    } else if (n === 0) {
        return [];
    } else {
        return arr.slice(0, n);
    }
}
