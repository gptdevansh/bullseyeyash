// Add click handler to CTA button
document.querySelector('.cta-button').addEventListener('click', function() {
    // Replace with your actual community link
    window.open('https://t.me/bullseyeyash', '_blank');
});

// Add smooth entrance animation on load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
