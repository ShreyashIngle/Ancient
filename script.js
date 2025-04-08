document.addEventListener('DOMContentLoaded', function() {
    // Hieroglyph animation
    const hieroglyphs = document.querySelectorAll('.logo-hieroglyph');
    hieroglyphs.forEach((glyph, index) => {
        setTimeout(() => {
            glyph.style.opacity = '1';
            glyph.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.video-card, .place-card, .tip-card, .history-section');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.video-card, .place-card, .tip-card, .history-section');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Button ripple effect
    const buttons = document.querySelectorAll('.cta-button, .learn-more, .place-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple'); 
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            this.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Navigation highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add hover effect for place cards
    const placeCards = document.querySelectorAll('.place-card');
    placeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.place-overlay');
            if (overlay) {
                overlay.style.transform = 'translateY(0)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.place-overlay');
            if (overlay) {
                overlay.style.transform = 'translateY(100%)';
            }
        });
    });
});