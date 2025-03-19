function kalkulator(angka1, angka2, operator) {
    switch (operator) {
        case "+":
            return angka1 + angka2;
        case "-":
            return angka1 - angka2;
        case "*":
            return angka1 * angka2;
        case "/":
            return angka2 !== 0 ? angka1 / angka2 : "Tidak dapat dibagi dengan nol!";
        default:
            return "Operator tidak valid!";
    }
}

module.exports = { kalkulator };
