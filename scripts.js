// Rastreamento de cliques em links do WhatsApp como conversão no GA4
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href*="wa.me"]');
  if (link && typeof gtag === 'function') {
    gtag('event', 'whatsapp_click', {
      event_category: 'contato',
      event_label: link.href
    });
  }
});

// Inicialização do AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Navbar dinâmica ao rolar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Formulário de Contato via EmailJS
// As páginas atuais usam links diretos do WhatsApp e não carregam a biblioteca EmailJS,
// portanto este bloco só é executado se um formulário (#contactForm) e a lib estiverem presentes.
// Os guards evitam que um "emailjs is not defined" interrompa o restante do script.
const contactForm = document.getElementById('contactForm');

if (contactForm && typeof emailjs !== 'undefined') {
  emailjs.init('-uCdYWVFgdh2kcxRK');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const btn = document.getElementById('button');
    const originalBtnText = btn ? btn.innerText : '';

    // Validação básica
    if (!this.checkValidity()) {
      event.stopPropagation();
      this.classList.add('was-validated');
      return;
    }

    if (btn) {
      btn.value = 'Enviando...';
      btn.innerText = 'Enviando...';
      btn.disabled = true;
    }

    const serviceID = 'service_qsxytmo';
    const templateID = 'template_pr6gg5r';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        if (btn) {
          btn.value = 'Enviar Mensagem';
          btn.innerText = originalBtnText;
          btn.disabled = false;
        }
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
        contactForm.classList.remove('was-validated');
      }, (err) => {
        if (btn) {
          btn.value = 'Enviar Mensagem';
          btn.innerText = originalBtnText;
          btn.disabled = false;
        }
        console.error('Erro ao enviar email via EmailJS:', err);
        alert('Não foi possível enviar a mensagem por e-mail no momento. Por favor, tente novamente mais tarde ou entre em contato diretamente pelo nosso WhatsApp!');
      });
  });
}
