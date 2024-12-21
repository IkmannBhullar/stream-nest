// Select the "Get Started" button
const ctaButton = document.querySelector('.cta-button');
// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');
// Select carousel and buttons
const carousel = document.querySelector('.carousel');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');
// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');


// Add a click event listener
ctaButton.addEventListener('click', () => {
    alert('Welcome to Stream-Nest!');
});



// Loop through each link and add hover effects
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#e50914'; // Change to red
    });

    link.addEventListener('mouseout', () => {
        link.style.color = ''; // Reset to original color
    });
});



// Scroll left
scrollLeft.addEventListener('click', () => {
    carousel.scrollBy({
        left: -250, // Match the card width
        behavior: 'smooth'
    });
});

// Scroll right
scrollRight.addEventListener('click', () => {
    carousel.scrollBy({
        left: 250, // Match the card width
        behavior: 'smooth'
    });
});




// Add a click event listener to toggle themes
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Update button text based on the current mode
    if (document.body.classList.contains('light-mode')) {
        darkModeToggle.textContent = 'Dark Mode';
    } else {
        darkModeToggle.textContent = 'Light Mode';
    }
});
