// Inicializa carrossel Swiper com efeito COVERFLOW
const swiper = new Swiper('.swiper-container-coverflow', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 700,

  coverflowEffect: {
    rotate: 50,       // rotação em graus
    stretch: 0,       // espaçamento entre slides
    depth: 100,       // profundidade Z
    modifier: 1,      // multiplicador
    slideShadows: true // sombras
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
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

// Inicializa o segundo carrossel com Thumbs
const swiperThumbs = new Swiper('.swiper-container-thumbs', {
  slidesPerView: 3,   // Exibe 3 miniaturas
  spaceBetween: 10,    // Espaço entre miniaturas
  watchSlidesVisibility: true, // Detecta quais miniaturas estão visíveis
  watchSlidesProgress: true,   // Atualiza o progresso das miniaturas
  freeMode: true,      // Permite arrastar as miniaturas livremente
  loop: true,          // Permite que a navegação seja cíclica
  centeredSlides: true, // Centraliza as miniaturas
  slideToClickedSlide: true, // Permite que ao clicar em uma miniatura, o slide principal seja alterado
});

// Inicializa o segundo carrossel (o carrossel principal) com Thumbs
const swiperSecond = new Swiper('.swiper-container-second', {
  loop: true,
  slidesPerView: 1, // Exibe uma imagem por vez
  spaceBetween: 10, // Espaço entre as imagens
  autoplay: {
    delay: 5000, // Intervalo entre cada slide
    disableOnInteraction: false, // O autoplay não será desativado quando o usuário interagir
  },
  speed: 500, // Velocidade da transição
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Tornando os pontos de navegação clicáveis
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Usando o Thumbs para controlar a navegação do carrossel principal
  thumbs: {
    swiper: swiperThumbs, // Referência ao carrossel de miniaturas
  }
});

// Inicializa o EmailJS
emailjs.init("-uCdYWVFgdh2kcxRK"); // Substitua pelo seu user_id obtido do EmailJS

const btn = document.getElementById('button'); // Agora o botão existe no HTML

document.getElementById('contactForm')
  .addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio tradicional do formulário

    btn.value = 'Enviando...';  // Altera o botão para mostrar que está enviando

    const serviceID = 'service_qsxytmo';  // O ID do seu serviço no EmailJS
    const templateID = 'template_pr6gg5r';  // O ID do seu modelo de e-mail no EmailJS

    // Envia o formulário para o EmailJS
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar Email';  // Retorna o botão ao estado original
        alert('Mensagem enviada com sucesso!');  // Exibe o alerta de sucesso
      }, (err) => {
        btn.value = 'Enviar Email';  // Retorna o botão ao estado original
        alert('Erro ao enviar a mensagem: ' + JSON.stringify(err));  // Exibe o alerta de erro
      });
});

