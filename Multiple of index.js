function multipleOfIndex(array) {
    return array.filter((item, index) => index === 0 ? item === 0 : item % index === 0)

}
