// Testimonials Carousel with Owl Carousel
$(document).ready(function() {
    // Initialize testimonials carousel
    $('#testimonialsCarousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                center: false
            },
            768: {
                items: 3,
                center: true
            }
        },
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        onInitialized: function() {
            // Add center class to center item
            updateCenterItem();
        },
        onTranslated: function() {
            // Update center item after transition
            updateCenterItem();
        }
    });

    // Function to update center item styling
    function updateCenterItem() {
        const carousel = $('#testimonialsCarousel');
        const centerIndex = carousel.find('.owl-item.center').index();
        
        carousel.find('.owl-item').each(function(index) {
            const item = $(this);
            if (index === centerIndex) {
                item.addClass('center');
            } else {
                item.removeClass('center');
            }
        });
    }

    // Pause autoplay on hover
    $('#testimonialsCarousel').hover(
        function() {
            $(this).trigger('stop.owl.autoplay');
        },
        function() {
            $(this).trigger('play.owl.autoplay');
        }
    );
}); 