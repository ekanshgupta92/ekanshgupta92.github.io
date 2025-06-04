/*!
* Start Bootstrap - Resume v7.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', () => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Slideshow logic
    let slideIndex = 0;
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    function showSlide(index) {
        // Ensure index stays within bounds
        slideIndex = (index + slides.length) % slides.length;

        // Update slides and dots
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === slideIndex);
            if (dots[i]) {
                dots[i].classList.toggle('active', i === slideIndex);
            }
        });
    }

    // Initialize the first slide
    if (slides.length > 0) {
        showSlide(slideIndex);
    }

    // Next/Previous button listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(slideIndex + 1);
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(slideIndex - 1);
        });
    }

    // Dot navigation
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
        });
    });
});