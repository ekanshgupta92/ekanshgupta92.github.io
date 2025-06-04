//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Project Slideshow
const Slideshow = {
    index: 1,

    init() {
        this.showSlides(this.index);
        this.startAutoAdvance();
    },

    showSlides(n) {
        const slideshows = document.querySelectorAll('.slideshow-container');

        slideshows.forEach(slideshow => {
            const slides = slideshow.querySelectorAll('.mySlides');
            const dots = slideshow.parentElement.querySelectorAll('.dot');

            // Reset index if out of bounds
            if (n > slides.length) this.index = 1;
            if (n < 1) this.index = slides.length;

            // Update slides and dots
            slides.forEach(slide => slide.style.display = "none");
            dots.forEach(dot => dot.classList.remove('active'));

            slides[this.index - 1].style.display = "block";
            dots[this.index - 1].classList.add('active');
        });
    },

    currentSlide(n) {
        this.showSlides(this.index = n);
    },

    startAutoAdvance() {
        setInterval(() => {
            const hasMultipleSlides = document.querySelector('.slideshow-container .mySlides:nth-child(2)');
            if (hasMultipleSlides) {
                this.currentSlide(this.index + 1);
            }
        }, 5000);
    }
};

// Initialize slideshow
document.addEventListener('DOMContentLoaded', () => {
    Slideshow.init();
});
