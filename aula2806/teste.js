function quest5(array) {
    let menor = array[1];
    for (let i = 0; i < array.length; i++) {
        if (menor < array[i]) {
            array[i] = menor;
        }
    }
    return menor;
}
num5 = [8, -5, 100, -50, 9, 0];
console.log(quest5(num5));
