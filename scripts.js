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

// Inicialização do EmailJS
// IMPORTANTE: Substitua "YOUR_PUBLIC_KEY" pela sua chave pública do EmailJS
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("-uCdYWVFgdh2kcxRK");
})();

// Manipulação do Formulário de Contato
const btn = document.getElementById('button');

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const btn = document.getElementById('button');
  const originalBtnText = btn.innerText;

  // Validação básica
  if (!this.checkValidity()) {
    event.stopPropagation();
    this.classList.add('was-validated');
    return;
  }

  btn.value = 'Enviando...';
  btn.innerText = 'Enviando...';
  btn.disabled = true;

  // IMPORTANTE: Insira seu Service ID e Template ID do EmailJS
  const serviceID = 'service_qsxytmo'; // Substitua pelo seu Service ID do Zoho configurado no EmailJS
  const templateID = 'template_pr6gg5r'; // Substitua pelo seu Template ID do EmailJS

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensagem';
      btn.innerText = originalBtnText;
      btn.disabled = false;
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      document.getElementById('contactForm').reset();
      document.getElementById('contactForm').classList.remove('was-validated');
    }, (err) => {
      btn.value = 'Enviar Mensagem';
      btn.innerText = originalBtnText;
      btn.disabled = false;
      console.error('Erro ao enviar email via EmailJS:', err);
      alert('Não foi possível enviar a mensagem por e-mail no momento. Por favor, tente novamente mais tarde ou entre em contato diretamente pelo nosso WhatsApp!');
    });
});
