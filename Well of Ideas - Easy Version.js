function well(x) {
    let count = 0
    for (const item of x) {
        if (item === "good") {
            count += 1
        }

    }
    switch (count) {
        case 0: return 'Fail!'
        case 1:
        case 2: return 'Publish!'
        default: return 'I smell a series!'

    }
}