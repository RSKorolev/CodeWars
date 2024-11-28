function isVow(a) {
    return a.map(item =>
        item === 117 ? "u"
            : item === 111 ? "o"
                : item === 105 ? "i"
                    : item === 101 ? "e"
                        : item === 97 ? "a"
                            : item);
}

