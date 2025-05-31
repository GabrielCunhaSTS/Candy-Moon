
document.addEventListener("DOMContentLoaded", () => {
const subtotalEl = document.querySelector(".subtotal-valor");
const descontoEl = document.querySelector(".desconto-valor");
const freteEl = document.querySelector(".frete-valor");
const totalEl = document.querySelector(".total-valor");
const cepInput = document.querySelector(".campo-cep");
const cupomInput = document.querySelector(".campo-cupom");
const btnValidarCupom = document.querySelector(".btn-validar-cupom");
const mensagemCupom = document.querySelector(".mensagem-cupom");

let frete = 0;
let descontoValor = 0;
let cupomAtivo = false;

function atualizarValoresTotais() {
    const cards = document.querySelectorAll(".card-carrinho");
    let subtotal = 0;

    cards.forEach(card => {
    const qtd = parseInt(card.querySelector(".qtd p").textContent);
    const precoUnit = parseFloat(card.dataset.precoUnitario);
    subtotal += precoUnit * qtd;
    });

    descontoValor = cupomAtivo ? subtotal * 0.10 : 0;
    const totalComFrete = subtotal - descontoValor + frete;

    subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
    descontoEl.textContent = `R$ ${descontoValor.toFixed(2).replace(".", ",")}`;
    freteEl.textContent = `R$ ${frete.toFixed(2).replace(".", ",")}`;
    totalEl.textContent = `R$ ${totalComFrete.toFixed(2).replace(".", ",")}`;
}

function configurarCard(card) {
    const btnMais = card.querySelector(".btn-mais");
    const btnMenos = card.querySelector(".btn-menos");
    const qtdTexto = card.querySelector(".qtd p");
    const precoEl = card.querySelector(".preco");
    const precoUnit = parseFloat(precoEl.textContent.replace("R$", "").replace(",", "."));

    card.dataset.precoUnitario = precoUnit;

    btnMais.addEventListener("click", () => {
    let qtd = parseInt(qtdTexto.textContent);
    qtd++;
    qtdTexto.textContent = qtd;
    atualizarValoresTotais();
    });

    btnMenos.addEventListener("click", () => {
    let qtd = parseInt(qtdTexto.textContent);
    if (qtd > 1) {
        qtd--;
        qtdTexto.textContent = qtd;
        atualizarValoresTotais();
    }
    });

    const lixeira = card.querySelector(".lixeira");
    if (lixeira) {
    lixeira.addEventListener("click", () => {
        card.remove();
        atualizarValoresTotais();
    });
    }
}

document.querySelectorAll(".card-carrinho").forEach(configurarCard);

cepInput.addEventListener("input", () => {
const cep = cepInput.value.replace(/\D/g, "");
if (cep.length === 8) {
    frete = cep.startsWith("01") ? 15.00 : 25.00;
} else if (cep.length === 0) {
    frete = 0;
} else {
    frete = 0;
}
atualizarValoresTotais();
});


cupomInput.addEventListener("input", () => {
    if (cupomInput.value.trim().length > 0) {
    btnValidarCupom.style.display = "inline-block";
    } else {
    btnValidarCupom.style.display = "none";
    }
});

btnValidarCupom.addEventListener("click", () => {
    const cupom = cupomInput.value.trim().toUpperCase();

    if (cupom === "CANDYMOON10") {
    cupomAtivo = true;
    mensagemCupom.style.color = "green";
    mensagemCupom.textContent = "Cupom válido!";
    } else {
    cupomAtivo = false;
    mensagemCupom.style.color = "red";
    mensagemCupom.textContent = "Cupom inválido!";
    }
    mensagemCupom.style.display = "block";
    atualizarValoresTotais();

    setTimeout(() => {
    mensagemCupom.style.display = "none";
    }, 2000);
});

atualizarValoresTotais();
});
