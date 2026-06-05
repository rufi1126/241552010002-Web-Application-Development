const data = [
    {nama: 'Budi', jurusan: 'TI', nilai: [80, 90, 85]},
    {nama: 'Ani', jurusan: 'SI', nilai: [95, 88, 92]},
    {nama: 'Cici', jurusan: 'TI', nilai: [60, 72, 65]},
    {nama: 'Dedi', jurusan: 'SI', nilai: [78, 82, 80]},
    {nama: 'Eka', jurusan: 'TI', nilai: [91, 88, 95]},
], 

// === SOAL 1 : Hitung rata-rata tiap mahasiswa ===
const withAvg = data.map(m => ({
    ...m,
    rata: m.nilai.reduce((a, b) => a + b, 0) / m.nilai.length
}));
withAvg.forEach(m => console.log(`${m.nama}: ${m.rata.toFixed(1)}`));

// SOAL 2 Filter lulus (rata >= 75)
const lulus = withAvg.filter(m => m.rata >= 75);
console.log('lulus:', lulus.map (m => m.nama));

// SOAL 3: Rangking dari nilai tertinggi
