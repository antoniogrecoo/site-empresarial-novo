document.addEventListener("DOMContentLoaded", () => {
    const phoneElement = document.getElementById("phone");
    const emailElement = document.getElementById("email");
  
    if (phoneElement) {
        phoneElement.addEventListener("mouseover", () => {
            phoneElement.style.color = "#0056b3";
            phoneElement.style.transition = "color 0.3s ease";
        });
    
        phoneElement.addEventListener("mouseout", () => {
            phoneElement.style.color = "#007bff";
        });
    }
  
    if (emailElement) {
        emailElement.addEventListener("mouseover", () => {
            emailElement.style.color = "#0056b3";
            emailElement.style.transition = "color 0.3s ease";
        });
    
        emailElement.addEventListener("mouseout", () => {
            emailElement.style.color = "#007bff";
        });
    }

    // Adiciona animação aos elementos de contato
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.classList.add('hidden');
        item.dataset.animation = index % 2 === 0 ? 'slideInLeft' : 'slideInRight';
        
        // Adiciona um delay progressivo para cada item
        item.style.animationDelay = `${index * 0.2}s`;
    });

    // Verifica se os elementos estão visíveis ao carregar a página
    const checkVisibility = () => {
        contactItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.75) && (rect.bottom >= 0);
            
            if (isVisible && item.classList.contains('hidden')) {
                const animationType = item.dataset.animation || 'fadeIn';
                item.classList.add('visible', animationType);
                item.classList.remove('hidden');
            }
        });
    };

    // Verifica a visibilidade ao carregar e ao rolar a página
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});