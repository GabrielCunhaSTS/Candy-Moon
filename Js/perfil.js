window.addEventListener('DOMContentLoaded', () => {
  const perfilIcons = document.querySelectorAll('.navBar .icon[src*="perfil"], .navBar .icon-mobile img[src*="perfil"]');
  const modalPerfil = document.getElementById('modal-perfil');
  const closePerfil = document.querySelector('.fechar-perfil');

  if (perfilIcons.length && modalPerfil && closePerfil) {
    perfilIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        modalPerfil.style.display = 'flex';
      });
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
