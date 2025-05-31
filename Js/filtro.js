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


window.onload = function () {
const modal = document.getElementById("modal-produto");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const modalPreco = document.getElementById("modal-preco");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll('.produto').forEach(produto => {
    produto.addEventListener('click', () => {
    const imgSrc = produto.querySelector('.img-produto').src;
    const titulo = produto.querySelector('.titulo-produto .nome-produto').textContent;
    const descricao = produto.querySelector('.titulo-produto .descricao-produto').textContent;
    const preco = produto.querySelector('.preço-produto .preço').textContent;

    modalImg.src = imgSrc;
    modalTitulo.textContent = titulo;
    modalDescricao.textContent = descricao;
    modalPreco.textContent = preco;

    modal.style.display = "block";
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
    modal.style.display = "none";
    }
});

const btnAdicionar = document.querySelector(".adicionar-carrinho");
btnAdicionar.addEventListener('click', () => {
    modal.style.display = "none";
    mostrarToast();
});

function mostrarToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
    toast.classList.remove("show");
    }, 3000);
}};

