const cannonsReady = (gunners) => {
    //возвращает массив собственных перечислимых значений свойств заданного объекта, имеющих строковый ключ.
    const res = Object.values(gunners)
    //проверяет, все ли элементы массива проходят тест, реализованный предоставленной функцией. Он возвращает логическое значение
    if (res.every(item => item === "aye")) {
    }
    return "Shiver me timbers!"
}





