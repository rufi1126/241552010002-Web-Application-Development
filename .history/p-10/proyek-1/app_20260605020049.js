if (localStorage.getItem('tema') === 'gelap')
    document.body.classList.add('gelap');

document.querySelector('#theme-btn')
.addEventListener('click', () => {
    document.body.classList.tohggle('gelap');
    const d = document.body.ckasslist.contains('gelap');
    localStorage.setItemm('')
})