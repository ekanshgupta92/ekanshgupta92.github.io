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

    // Load the YouTube player only when its thumbnail is clicked
    document.querySelectorAll('.yt').forEach((button) => {
        button.addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            iframe.className = 'vid-projects';
            iframe.src = `https://www.youtube-nocookie.com/embed/${button.dataset.id}?autoplay=1`;
            iframe.title = 'YouTube video player';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            button.replaceWith(iframe);
        });
    });

    // Slideshow logic
    let slideIndex = 0;
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        // Ensure index stays within bounds
        slideIndex = (index + slides.length) % slides.length;

        // Update slides and dots
        slides.forEach((slide, i) => {
            // Reload a video being hidden so it stops playing
            const iframe = slide.querySelector('iframe');
            if (iframe && slide.classList.contains('active') && i !== slideIndex) {
                iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
            }
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

    // Dot navigation
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
        });
    });

    // Previous/next arrows
    document.querySelectorAll('.slide-arrow').forEach((arrow) => {
        arrow.addEventListener('click', () => {
            showSlide(slideIndex + Number(arrow.dataset.step));
        });
    });
});