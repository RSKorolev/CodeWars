function getSize(width, height, depth) {
    let volume = width * height * depth
    let area = (2 * width * height) + (2 * depth * width) + (2 * height * depth)
    let result = [area, volume]
    return result
}
