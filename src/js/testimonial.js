// Add this to your main.js or create a new testimonials.js file
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonials-slider');
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('[data-index]');
    let currentIndex = 0;
    let slideInterval;

    // Set initial width of track
    track.style.width = `${slides.length * 100}%`;
    slides.forEach(slide => {
        slide.style.width = `${100 / slides.length}%`;
    });

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * (100 / slides.length)}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('bg-blue-200', index === currentIndex);
            dot.classList.toggle('bg-gray-300', index !== currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    // Click handlers for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlidePosition();
            stopSlideshow();
            startSlideshow();
        });
    });

    // Pause on hover
    slider.addEventListener('mouseenter', stopSlideshow);
    slider.addEventListener('mouseleave', startSlideshow);

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        stopSlideshow();
    }, { passive: true });

    slider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startSlideshow();
    }, { passive: true });

    function handleSwipe() {
        const diffX = touchStartX - touchEndX;
        if (Math.abs(diffX) > 50) { // Minimum swipe distance
            if (diffX > 0) {
                // Swipe left
                currentIndex = (currentIndex + 1) % slides.length;
            } else {
                // Swipe right
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            }
            updateSlidePosition();
        }
    }

    // Start the slideshow
    startSlideshow();
});