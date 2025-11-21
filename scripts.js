// Inicialização do AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Navbar dinâmica ao rolar
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Inicialização do EmailJS (Substitua 'YOUR_USER_ID' pelo seu ID real se tiver)
  // emailjs.init("user_xxxxxxxxxxxxxxxxxxxx");

  // Validação e Envio do Formulário
  const contactForm = document.getElementById('contactForm');
  const submitButton = document.getElementById('button');

  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();

      if (contactForm.checkValidity()) {
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
        submitButton.disabled = true;

        const serviceID = 'default_service';
        const templateID = 'template_contact'; // Substitua pelo seu Template ID

        // Simulação de envio (ou descomente abaixo para usar EmailJS real)
        /*
        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            submitButton.innerHTML = 'Mensagem Enviada!';
            submitButton.classList.remove('btn-primary');
            submitButton.classList.add('btn-success');
            contactForm.reset();
            setTimeout(() => {
              submitButton.innerHTML = 'Enviar Mensagem';
              submitButton.classList.remove('btn-success');
              submitButton.classList.add('btn-primary');
              submitButton.disabled = false;
            }, 3000);
          }, (err) => {
            submitButton.innerHTML = 'Erro ao enviar';
            submitButton.classList.remove('btn-primary');
            submitButton.classList.add('btn-danger');
            console.log(JSON.stringify(err));
            setTimeout(() => {
              submitButton.innerHTML = 'Enviar Mensagem';
              submitButton.classList.remove('btn-danger');
              submitButton.classList.add('btn-primary');
              submitButton.disabled = false;
            }, 3000);
          });
        */
       
        // Simulação para demonstração visual
        setTimeout(() => {
            alert('Obrigado pelo contato! Esta é uma demonstração. Para funcionar realmente, configure o EmailJS no scripts.js.');
            submitButton.innerHTML = 'Mensagem Enviada!';
            submitButton.classList.remove('btn-primary');
            submitButton.classList.add('btn-success');
            contactForm.reset();
            
            setTimeout(() => {
                submitButton.innerHTML = 'Enviar Mensagem';
                submitButton.classList.remove('btn-success');
                submitButton.classList.add('btn-primary');
                submitButton.disabled = false;
            }, 3000);
        }, 1500);

      }

      contactForm.classList.add('was-validated');
    });
  }
});
