const kalkulator = {
    tambah: (a, b) => a + b,
    kurangi: (a, b) => a - b,
    kali: (a, b) => a * b,
    bagi: (a, b) => {
        if (b === 0) return 'Error: Pembagian dengan nol';
        return a / b;
    }