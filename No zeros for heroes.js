function noBoringZeros(n) {
    if (n === 0) return 0;
    return Number(n.toString().replace(/0+$/, ''));
}
