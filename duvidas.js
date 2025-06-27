document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;
        
        // Toggle active class on question
        button.classList.toggle('active');
        
        // Toggle answer visibility
        if (button.classList.contains('active')) {
            answer.classList.add('show');
            faqItem.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            answer.classList.remove('show');
            faqItem.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
        
        // Close other open items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.querySelector('.faq-question').classList.remove('active');
                item.querySelector('.faq-answer').classList.remove('show');
                item.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
            }
        });
    });
});

// Add animation to first FAQ item on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstFaq = document.querySelector('.faq-item');
    if (firstFaq) {
        setTimeout(() => {
            firstFaq.querySelector('.faq-question').classList.add('active');
            firstFaq.querySelector('.faq-answer').classList.add('show');
            firstFaq.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }, 500);
    }
});