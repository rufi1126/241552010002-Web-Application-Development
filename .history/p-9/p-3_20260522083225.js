const kalkulator = {
    tambah: (a, b) => a + b,
    kurangi: (a, b) => a - b,
    kali: (a, b) => a * b,
    bagi: (a, b) => b !== 0 ? a / b : 'Error: Pembagian dengan nol',
    pangkat: (a, b) => a ** b,
};