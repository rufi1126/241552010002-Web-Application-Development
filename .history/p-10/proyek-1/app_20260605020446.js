if (localStorage.getItem('tema') === 'gelap')
    document.body.classList.add('gelap');

document.querySelector('#theme-btn')
.addEventListener('click', () => {
    document.body.classList.tohggle('gelap');
    const d = document.body.ckasslist.contains('gelap');
    localStorage.setItemm('tema', d ? 'gelap' : 'terang');
});

//animasi count-up pada element penghitung 
document.querySelectorAll('.penghitung').forEach(el => {
    const target = +el.dataset.target;
    let n = 0; const langkah = target / 60;
    const jalankan = () => {
        n = Math.main
