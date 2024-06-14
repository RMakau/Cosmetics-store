document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle newsletter subscription
    const newsletterForm = document.querySelector('.newsletter form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            emailInput.value = ''; // Clear the input
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Hero button scroll to products
    const heroButton = document.querySelector('.hero button');
    heroButton.addEventListener('click', function() {
        const featuredProductsSection = document.querySelector('.featured-products');
        if (featuredProductsSection) {
            window.scrollTo({
                top: featuredProductsSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});