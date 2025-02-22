// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        message: this.querySelector('textarea').value
    };

    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Add animation class to features on scroll
const featureCards = document.querySelectorAll('.feature-card');
const benefitItems = document.querySelectorAll('.benefit-item');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize elements with fade-in effect
featureCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(card);
});

benefitItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(item);
});