let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide() {
    // Remove the 'active' class from the current image
    slides[currentIndex].classList.remove('active');
    
    // Move to the next image
    currentIndex = (currentIndex + 1) % slides.length;
    
    // Add the 'active' class to the new image
    slides[currentIndex].classList.add('active');
}

// Start the image slideshow
setInterval(changeSlide, 3000); // Change image every 3 seconds
