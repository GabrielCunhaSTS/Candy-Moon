document.addEventListener("DOMContentLoaded", function () {
const doces = document.querySelectorAll('.doce');
const produtos = document.querySelectorAll('.produto');
const btnFilter = document.querySelector('.btn-filter');

doces.forEach(btn => {
    btn.addEventListener('click', () => {
    const filtro = btn.querySelector('img').dataset.filter;

    produtos.forEach(produto => {
        if (produto.dataset.category === filtro) {
        produto.classList.remove('hidden');
        } else {
        produto.classList.add('hidden');
        }
    });
    });
});


btnFilter.addEventListener('click', () => {
    produtos.forEach(produto => {
    produto.classList.remove('hidden');
    });
});
});