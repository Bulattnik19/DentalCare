document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Change hamburger icon to close icon if desired
            if (mainNav.classList.contains('active')) {
                this.innerHTML = '✕'; // Close icon
            } else {
                this.innerHTML = '☰'; // Hamburger icon
            }
        });
    }

    // Form submissions (basic example, for real use needs backend)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Ваше сообщение отправлено! Мы скоро свяжемся с вами.');
            this.reset(); // Clear the form
        });
    }

    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Ваша заявка на запись отправлена! Мы свяжемся с вами для подтверждения.');
            this.reset();
        });
    }

    // Add animation classes when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationClass = element.dataset.animation || element.classList.some(cls => cls.startsWith('animate-')) ? element.classList.value.match(/animate-[\w-]+/g) : [];
                
                if (animationClass && animationClass.length > 0) {
                    element.classList.add(...animationClass);
                }
                // If using IntersectionObserver for multiple animations on one element
                // you might need to add classes based on specific data-animation attributes.
                // For simplicity here, we assume classes like 'animate-fade-in' are already present.
                
                // If we want to trigger animation only once, unobserve
                // observer.unobserve(element); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe elements that should be animated
    document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right').forEach(el => {
        observer.observe(el);
    });

});