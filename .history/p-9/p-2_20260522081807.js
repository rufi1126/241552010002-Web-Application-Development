// === SOAL 1 : Kalkulator Nilai ===
function hitungGrade(nilai) {
    if (nilai < 0 || nilai > 100) return 'Input tidak valid';
    if (nilai >=90) return 'A - Sangat Memuaskan';
    if (nilai >=80) return 'B - Memuaskan';
    if (nilai >=70) return 'C - Cukup';
    if (nilai >=60) return 'D - Kurang';
    return 'E - Sangat Kurang';
}