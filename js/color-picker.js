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
    const bodyLinks = document.querySelectorAll('#fh5co-about a, .display-tc a, .fh5co-heading a, .animate-box a, #fh5co-portfolio a:not(.js-gotop)');
    bodyLinks.forEach(link => {
        link.style.color = color;
        link.style.textDecorationColor = color;
    });

    // Change active page underline color and text selection color
    const style = document.createElement('style');
    style.textContent = `
        .fh5co-nav ul li.active > a:after {
            background: ${color} !important;
        }
        .fh5co-heading a {
            color: ${color} !important;
            text-decoration: none !important;
        }
        .fh5co-heading a:hover {
            color: ${color} !important;
            text-decoration: none !important;
        }
        .animate-box a {
            color: ${color} !important;
        }
        .animate-box a:hover {
            color: ${color} !important;
        }
        #fh5co-portfolio a:not(.js-gotop) {
            color: ${color} !important;
        }
        #fh5co-portfolio a:not(.js-gotop):hover {
            color: ${color} !important;
        }
        ::-webkit-selection {
            color: #fff;
            background: ${color} !important;
        }
        ::-moz-selection {
            color: #fff;
            background: ${color} !important;
        }
        ::selection {
            color: #fff;
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