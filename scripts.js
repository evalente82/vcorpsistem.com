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
  },

  // Configurações responsivas
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      coverflowEffect: {
        rotate: 30,
        depth: 50,
      }
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      coverflowEffect: {
        rotate: 40,
        depth: 75,
      }
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      coverflowEffect: {
        rotate: 45,
        depth: 90,
      }
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      coverflowEffect: {
        rotate: 50,
        depth: 100,
      }
    }
  }
});

// Scroll suave e ativação do link ativo no menu
document.querySelectorAll('#navbarNav a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      // Fecha o menu mobile após clicar em um link
      const navbarCollapse = document.getElementById('navbarNav');
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();

      // Scroll suave para a seção
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Atualiza links ativos
      document.querySelectorAll('#navbarNav a.nav-link').forEach(el => el.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Validação simples do formulário de contato Bootstrap 5
(() => {
  'use strict';
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  }
})();

// Inicializa o segundo carrossel com Thumbs
const swiperThumbs = new Swiper('.swiper-container-thumbs', {
  slidesPerView: 3,   // Exibe 3 miniaturas por padrão
  spaceBetween: 10,    // Espaço entre miniaturas
  watchSlidesVisibility: true, // Detecta quais miniaturas estão visíveis
  watchSlidesProgress: true,   // Atualiza o progresso das miniaturas
  freeMode: true,      // Permite arrastar as miniaturas livremente
  loop: true,          // Permite que a navegação seja cíclica
  centeredSlides: true, // Centraliza as miniaturas
  slideToClickedSlide: true, // Permite que ao clicar em uma miniatura, o slide principal seja alterado
  
  // Configurações responsivas para thumbs
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    }
  }
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

if (btn) {
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
          this.reset(); // Limpa o formulário
        }, (err) => {
          btn.value = 'Enviar Email';  // Retorna o botão ao estado original
          alert('Erro ao enviar a mensagem: ' + JSON.stringify(err));  // Exibe o alerta de erro
        });
    });
}

// Função para detectar quando elementos entram na viewport (animações)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-slide-in');
    }
  });
}, observerOptions);

// Observa elementos que devem ser animados
document.querySelectorAll('.card, .carousel-caption-custom').forEach(el => {
  observer.observe(el);
});

// Função para ajustar altura do navbar em dispositivos móveis
function adjustNavbarHeight() {
  const navbar = document.getElementById('navbar');
  const main = document.querySelector('main');
  
  if (navbar && main) {
    const navbarHeight = navbar.offsetHeight;
    main.style.marginTop = `${navbarHeight + 20}px`;
  }
}

// Ajusta altura inicial e em redimensionamento
window.addEventListener('load', adjustNavbarHeight);
window.addEventListener('resize', adjustNavbarHeight);

// Previne zoom em inputs no iOS
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
  document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', () => {
      input.style.fontSize = '16px';
    });
  });
}

// Lazy loading para imagens (fallback para navegadores que não suportam loading="lazy")
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Adiciona classe para indicar que o JavaScript foi carregado
document.documentElement.classList.add('js-loaded');

