function rentalCarCost(d) {
    if (d >= 7) return d * 40 - 50;
    if (d >= 3) return 40 * d - 20;
    return 40 * d;
}