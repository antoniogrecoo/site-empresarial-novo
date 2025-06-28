document.addEventListener("DOMContentLoaded", function() {
  // Efeito de scroll no navbar
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '10px 0';
      } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '15px 0';
      }
    });
  }

  // Fechar menu mobile ao clicar em um link
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navLinks && navbarToggler && navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  }

  // Animação de scroll para elementos
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .about-content, .testimonial-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Inicializar elementos animados
  const animatedElements = document.querySelectorAll('.service-card, .about-content, .testimonial-card');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  // Executar animações
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  // Carousel de depoimentos
  $('#testimonialsCarousel').carousel({
    interval: 5000,
    pause: 'hover'
  });
});