// Create a single style element for the active page underline
let activePageStyle = document.createElement('style');
document.head.appendChild(activePageStyle);

function changeLinkColor(color) {
    // Change color of the period in the IV. heading
    const periodSpan = document.querySelector('#fh5co-logo a span');
    if (periodSpan) {
        periodSpan.style.color = color;
    }
    
    // Change color of body content links (excluding navigation)
    const bodyLinks = document.querySelectorAll('#fh5co-about a, .display-tc a');
    bodyLinks.forEach(link => {
        link.style.color = color;
        link.style.textDecorationColor = color;
    });

    // Change active page underline color
    const style = document.createElement('style');
    style.textContent = `
        .fh5co-nav ul li.active > a:after {
            background: ${color} !important;
        }
    `;
    // Remove any existing color picker styles
    const existingStyle = document.getElementById('color-picker-style');
    if (existingStyle) {
        existingStyle.remove();
    }
    style.id = 'color-picker-style';
    document.head.appendChild(style);
    
    // Store the color in localStorage to persist across page refreshes
    localStorage.setItem('linkColor', color);
}

// Apply saved color on page load
window.onload = function() {
    const savedColor = localStorage.getItem('linkColor');
    if (savedColor) {
        // If color picker exists on this page, update its value
        const colorPicker = document.getElementById('linkColor');
        if (colorPicker) {
            colorPicker.value = savedColor;
        }
        changeLinkColor(savedColor);
    }
} 