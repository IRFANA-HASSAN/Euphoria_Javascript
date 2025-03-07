 // Hamburger menu functionality
const hamburger = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
 
 // Thumbnail click event
 const thumbnails = document.querySelectorAll('.thumbnail');
 const mainImg = document.getElementById('mainImg');
 
 thumbnails.forEach(thumb => {
     thumb.addEventListener('click', function() {
         // Remove active class from all thumbnails
         thumbnails.forEach(t => t.classList.remove('active'));
         
         // Add active class to clicked thumbnail
         this.classList.add('active');
         
         // Update main image (in a real app, would change the src)
         // For the demo, we're just showing placeholder images
     });
 });
 
 // Size selection
 const sizeOptions = document.querySelectorAll('.size-option');
 
 sizeOptions.forEach(option => {
     option.addEventListener('click', function() {
         // Remove selected class from all size options
         sizeOptions.forEach(opt => opt.classList.remove('selected'));
         
         // Add selected class to clicked option
         this.classList.add('selected');
     });
 });
 
 // Color selection
 const colorOptions = document.querySelectorAll('.color-option');
 
 colorOptions.forEach(option => {
     option.addEventListener('click', function() {
         // Remove selected class from all color options
         colorOptions.forEach(opt => opt.classList.remove('selected'));
         
         // Add selected class to clicked option
         this.classList.add('selected');
     });
 });
 
 // Add to cart functionality
 const addToCartBtn = document.querySelector('.add-to-cart');
 
 addToCartBtn.addEventListener('click', function() {
     // Get selected size and color
     const selectedSize = document.querySelector('.size-option.selected')?.textContent || 'L';
     const selectedColor = document.querySelector('.color-option.selected')?.style.backgroundColor || 'black';
     
     alert(`Added to cart: Raven Hoodie With Black colored Design\nSize: ${selectedSize}\nColor: ${selectedColor}`);
 });

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
document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const navUp = document.querySelector('.nav-button-up');
  const navDown = document.querySelector('.nav-button-down');
  const thumbnailList = document.querySelector('.thumbnail-list');
  const mainImage = document.querySelector('.main-image img');
  const sizeOptions = document.querySelectorAll('.size-option');
  const colorOptions = document.querySelectorAll('.color-option');
  
  let currentIndex = 0;
  const maxVisible = 3;
  
  // Set initial state for nav buttons
  updateNavButtons();
  
  // Thumbnail click event
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
      // Update active thumbnail
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Update main image
      const imgSrc = this.querySelector('img').src;
      mainImage.src = imgSrc;
      
      // Update current index
      currentIndex = index;
      
      // Scroll to show the selected thumbnail if needed
      if(index >= maxVisible) {
        const translateY = (index - maxVisible + 1) * (thumbnails[0].offsetHeight + 10);
        thumbnailList.style.transform = `translateY(-${translateY}px)`;
      } else if(index < maxVisible) {
        thumbnailList.style.transform = 'translateY(0)';
      }
      // Update nav buttons
      updateNavButtons();
    });
  });
  // Navigation buttons
  navUp.addEventListener('click', function() {
    if(currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });
  navDown.addEventListener('click', function() {
    if(currentIndex < thumbnails.length - 1) {
      currentIndex++;
      updateGallery();
    }
  });
  function updateGallery() {
    // Update active thumbnail
    thumbnails.forEach((t, i) => {
      if(i === currentIndex) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
    // Update main image
    const imgSrc = thumbnails[currentIndex].querySelector('img').src;
    mainImage.src = imgSrc;
    // Scroll thumbnails if needed
    if(currentIndex >= maxVisible) {
      const translateY = (currentIndex - maxVisible + 1) * (thumbnails[0].offsetHeight + 10);
      thumbnailList.style.transform = `translateY(-${translateY}px)`;
    } else {
      thumbnailList.style.transform = 'translateY(0)';
    }
    // Update nav buttons
    updateNavButtons();
  }
  function updateNavButtons() {
    // Reset both buttons
    navUp.classList.remove('active');
    navDown.classList.remove('active')
    // Activate appropriate button based on position
    if(currentIndex > 0) {
      navUp.classList.add('active');
    }
    if(currentIndex < thumbnails.length - 1) {
      navDown.classList.add('active');
    }
  }

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
      tab.addEventListener("click", function () {
          // Remove active class from all tabs and badges
          tabs.forEach(t => {
              t.classList.remove("active");
              t.querySelector(".tab-badge")?.classList.remove("active");
          });

          // Hide all content
          contents.forEach(content => content.classList.remove("active"));

          // Add active class to the clicked tab and badge
          this.classList.add("active");
          this.querySelector(".tab-badge")?.classList.add("active");

          // Show the corresponding tab content
          const tabId = this.getAttribute("data-tab");
          document.getElementById(tabId).classList.add("active");
      });
  });
});

