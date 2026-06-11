// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Cambiar estilo del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255,255,255,0.98)';
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
    } else {
        header.style.background = 'rgba(255,255,255,0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Pequeña animación de entrada para las cards (opcional)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.servicio-card, .nosotros-flex > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});