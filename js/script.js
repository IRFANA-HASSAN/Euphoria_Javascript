// Hamburger menu functionality
const hamburger = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    //hero image slider
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    let currentIndex = 0;
    const totalSlides = 3;

    function updateSlider() {
        const offset = -currentIndex * 33.333;
        slider.style.transform = `translateX(${offset}%)`;
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    //new arrivals slider
    const newArrivals = document.querySelector('.new_arrivals_slides');
    const newArrivalsPrev = document.querySelector('.prev');
    const newArrivalsNext = document.querySelector('.next');
    const newArrivalsTotalSlides = 8;
    const visibleSlides = 4;

    // Track the current slide index (0-based)
    let newArrivalsIndex = 0;

    // Calculate the maximum index we can scroll to
    const maxIndex = newArrivalsTotalSlides - visibleSlides;

    // Calculate slide width as percentage
    const slideWidth = 100 / visibleSlides;

    // Update the slider position
    function updateNewArrivalsSlider() {
    // Calculate the offset based on the slide width
    const offset = -newArrivalsIndex * slideWidth;
    newArrivals.style.transform = `translateX(${offset}%)`;
    
    // Update button states (optional)
    newArrivalsPrev.disabled = newArrivalsIndex === 0;
    newArrivalsNext.disabled = newArrivalsIndex >= maxIndex;
    }

    // Previous button click handler
    newArrivalsPrev.addEventListener('click', () => {
    if (newArrivalsIndex > 0) {
        newArrivalsIndex--;
        updateNewArrivalsSlider();
    }
    });

    // Next button click handler
    newArrivalsNext.addEventListener('click', () => {
    if (newArrivalsIndex < maxIndex) {
        newArrivalsIndex++;
        updateNewArrivalsSlider();
    }
    });

    // Initialize the slider
    updateNewArrivalsSlider();



    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        
        // You could add additional code here to save favorites to localStorage
        // or send to a backend API
        });
    });

    const dropdownHeader = document.querySelector('.dropdown-header');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownArrow = document.querySelector('.dropdown-arrow');

    dropdownHeader.addEventListener('click', function() {
        dropdownContent.classList.toggle('active');
        dropdownArrow.classList.toggle('rotate');
    });
});
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function currentSlide(index) {
  const slideWidth = document.querySelector('.carousel-item').offsetWidth;
  carousel.scrollLeft = slideWidth * index;
  
  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  
  currentIndex = index;
}

// Optional: Add auto-scrolling
setInterval(() => {
  currentIndex = (currentIndex + 1) % dots.length;
  currentSlide(currentIndex);
}, 5000);

// Handle scroll events to update active dot
carousel.addEventListener('scroll', () => {
  const slideWidth = document.querySelector('.carousel-item').offsetWidth;
  const index = Math.round(carousel.scrollLeft / slideWidth);
  
  if (index !== currentIndex) {
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) {
      dots[index].classList.add('active');
      currentIndex = index;
    }
  }
});