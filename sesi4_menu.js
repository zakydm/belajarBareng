const { kalkulator } = require('./rumus.js');
const readline = require('readline');

const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inputUser.question('Masukkan angka pertama: ', angka1 => {
    inputUser.question('Masukkan angka kedua: ', angka2 => {
        inputUser.question('Masukkan operator (+, -, *, /): ', operator => {
            console.log(
                `Hasil: ${kalkulator(
                    parseFloat(angka1),
                    parseFloat(angka2),
                    operator
                )}`
            );
            inputUser.close();
        });
    });
});
