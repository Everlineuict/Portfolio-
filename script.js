// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.elements['name'].value;
        const email = this.elements['email'].value;
        const message = this.elements['message'].value;
        
        // Here you would typically send the data to a server
        // For this example, we'll just log it and show an alert
        console.log({ name, email, message });
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset the form
        this.reset();
    });
}

// Add animation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger the hero section animation immediately
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
    }
});
