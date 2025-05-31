const botaoPagamento = document.querySelector(".efetuar-pagamento");
const selectPagamento = document.querySelector("#metodo");
const modalPix = document.getElementById("modal-pix");
const closeModal = document.querySelector(".close-modal");
const toast = document.getElementById("toast");

botaoPagamento.addEventListener("click", () => {
  const metodo = selectPagamento.value.toLowerCase();

  if (metodo === "pix") {
    modalPix.style.display = "flex";
  } else if (metodo === "débito" || metodo === "credito") {
    window.open("https://www.mercadopago.com.br", "_blank");
  } else {
    showToast("Selecione um método de pagamento.");
  }
});

closeModal.addEventListener("click", () => {
  modalPix.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalPix) {
    modalPix.style.display = "none";
  }
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
