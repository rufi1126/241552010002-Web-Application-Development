const kalkulator = {
    tambah: (a, b) => a + b,
    kurangi: (a, b) => a - b,
    kali: (a, b) => a * b,
    bagi: (a, b) => b !== 0 ? a / b : 'Error: Pembagian dengan nol',
    pangkat: (a, b) => a ** b,
};
console.log(kalkulator.tambah(10, 5)); 
console.log(kalkulator.bagi(10, 0));
console.log(kalkulator.pangkat(2, 8));

function terapkan(arr, fn) {return arr.map(fn); }
console.log