document.addEventListener("DOMContentLoaded", function() {
  // Navbar scroll effect
  const header = document.querySelector('.header');
  const heroSection = document.querySelector('.hero-banner');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Testimonials carousel
  $('#testimonialsCarousel').carousel({
    interval: 5000,
    pause: 'hover'
  });

  // Animation on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .about-content, .testimonial-card, .cta-content');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animated elements
  const animatedElements = document.querySelectorAll('.service-card, .about-content, .testimonial-card, .cta-content');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  // Run once on load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);

  // Mobile menu toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});