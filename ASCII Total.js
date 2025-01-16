function uniTotal(string) {
    if (string !== "") {
        let sum = 0;
        for (let i = 0; i < string.length; i++) {
            sum += string.codePointAt(i);
        }
        return sum;
    } else {
        return 0;
    }
}






