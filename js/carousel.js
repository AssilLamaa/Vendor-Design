// Owl Carousel Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Owl Carousel
    $('#heroCarousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false, // Disable default dots
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        touchDrag: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
    
    // Custom dots functionality
    const customDots = document.querySelectorAll('.custom-dot');
    const carousel = $('#heroCarousel');
    
    customDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            carousel.trigger('to.owl.carousel', [index, 300]);
            updateCustomDots(index);
        });
    });
    
    // Update custom dots when carousel changes
    carousel.on('changed.owl.carousel', (event) => {
        updateCustomDots(event.item.index);
    });
    
    function updateCustomDots(activeIndex) {
        customDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }
    
    // Pause autoplay on hover
    const carouselElement = document.querySelector('#heroCarousel');
    if (carouselElement) {
        carouselElement.addEventListener('mouseenter', () => {
            carousel.trigger('stop.owl.autoplay');
        });
        
        carouselElement.addEventListener('mouseleave', () => {
            carousel.trigger('play.owl.autoplay');
        });
    }
});

// Add smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}); 