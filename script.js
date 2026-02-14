// Simple initialization
window.addEventListener('DOMContentLoaded', function() {
    // Page loaded successfully!
    initScrollAnimations();
    createFloatingHearts();
    setupClickAnimations();
});

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Create floating hearts across the page
function createFloatingHearts() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            const heart = document.createElement('div');
            heart.className = 'fixed pointer-events-none text-2xl animate-pulse';
            heart.innerHTML = ['❤️', '💕', '💖', '💗'][Math.floor(Math.random() * 4)];
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-30px';
            heart.style.opacity = Math.random() * 0.6 + 0.4;
            heart.style.animation = `swayFall ${Math.random() * 3 + 5}s linear forwards`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 8000);
        }
    }, 800);
}

// Add click animations
function setupClickAnimations() {
    document.querySelectorAll('button, a').forEach(element => {
        element.addEventListener('click', function() {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            ripple.style.width = ripple.style.height = '20px';
            ripple.style.left = (event.clientX - rect.left - 10) + 'px';
            ripple.style.top = (event.clientY - rect.top - 10) + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Parallax effect on hero section
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('section:first-of-type');
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        const parallaxElements = heroSection.querySelectorAll('.floating-heart');
        parallaxElements.forEach((el, index) => {
            el.style.transform = `translateY(${scrollPosition * (0.5 + index * 0.1)}px)`;
        });
    }
});

// Add cursor glow effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Optional: Add a subtle glow to interactive elements on hover
    document.querySelectorAll('button, a').forEach(element => {
        const rect = element.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(x - (rect.left + rect.width / 2), 2) +
            Math.pow(y - (rect.top + rect.height / 2), 2)
        );
        
        if (distance < 100) {
            element.style.boxShadow = `0 0 ${30 - distance / 3}px rgba(236, 72, 153, 0.5)`;
        } else {
            element.style.boxShadow = '';
        }
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Falling rose petals animation
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'rose-petal';
    petal.innerHTML = '🌹';
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.top = '-20px';
    petal.style.fontSize = (Math.random() * 20 + 10) + 'px';
    petal.style.opacity = Math.random() * 0.5 + 0.5;
    petal.style.animation = `swayFall ${Math.random() * 3 + 4}s linear forwards`;
    
    document.body.appendChild(petal);
    
    setTimeout(() => petal.remove(), 7000);
}

// Add falling petals occasionally
setInterval(() => {
    if (Math.random() > 0.7) {
        createPetal();
    }
}, 1000);

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Toggle mobile menu
function toggleMenu() {
    const menu = document.querySelector('.hidden.md\\:flex');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}
