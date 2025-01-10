// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Ensure the link refers to a local section
        if (this.hash) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll smoothly to the target section
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Change header color on hover (dynamic interactivity)
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#FF4500'; // Orange on hover
    });

    link.addEventListener('mouseout', () => {
        link.style.color = ''; // Revert to original color
    });
});