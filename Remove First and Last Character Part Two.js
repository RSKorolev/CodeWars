function array(string) {
    if ((string.split(',').length) < 3) {
        return null
    }
    else {
        return string.split(',').slice(1, - 1).join(' ')
    }
}

