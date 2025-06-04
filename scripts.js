// Inicializa carrossel Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 700,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Scroll suave e ativação do link ativo no menu
document.querySelectorAll('#sidebar a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Atualiza links ativos
    document.querySelectorAll('#sidebar a.nav-link').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
  });
});

// Validação simples do formulário de contato Bootstrap 5
(() => {
  'use strict';
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  });
})();

