window.addEventListener('DOMContentLoaded', () => {
const perfilIcon = document.querySelector('.navBar .icon[src*="perfil"]');
const modalPerfil = document.getElementById('modal-perfil');
const closePerfil = document.querySelector('.fechar-perfil');

if (perfilIcon && modalPerfil && closePerfil) {
    perfilIcon.addEventListener('click', () => {
    modalPerfil.style.display = 'flex';
    });

    closePerfil.addEventListener('click', () => {
    modalPerfil.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
    if (e.target === modalPerfil) {
        modalPerfil.style.display = 'none';
    }
    });
}
});
