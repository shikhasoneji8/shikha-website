// Display an alert when the website loads
window.onload = function() {
    alert("Welcome to My Website!");
};

// Add interactivity to the navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});