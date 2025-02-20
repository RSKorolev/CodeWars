function sumOfDifferences(arr) {
    if (arr.length <= 1) return 0; // Если массив пуст или содержит один элемент, разностей нет.
    const sorted = arr.sort((a, b) => b - a); // Сортируем по убыванию.
    let sum = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
        sum += sorted[i] - sorted[i + 1]; // Суммируем разности.
    }
    return sum;
}