// Select DOM elements
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

/* 1. Responsive Menu */
// Toggle navigation visibility when clicking the menu button
function toggleMenu() {
    nav.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);

// Window resize handler:
// Always show navigation on large screens (> 1000px), and hide it on medium/small screens
function handleResize() {
    if (window.innerWidth > 1000) {
        nav.classList.remove('hide');
    } else {
        nav.classList.add('hide');
    }
}

// Run on window resize and initial page load
window.addEventListener('resize', handleResize);
handleResize();

/* 2. Modal Image Viewer */
// Open the modal when clicking an image in the gallery
function openModal(event) {
    const clickedElement = event.target;

    // Only proceed if the clicked element is an <img> tag
    if (clickedElement.tagName === 'IMG') {
        const src = clickedElement.getAttribute('src');
        const alt = clickedElement.getAttribute('alt');

        // Replace 'sm' with 'full' to get the high-resolution image path
        const fullSrc = src.replace('sm', 'full');

        modalImage.src = fullSrc;
        modalImage.alt = alt || 'Enlarged photo';

        // Display the modal dialog
        modal.showModal();
    }
}

gallery.addEventListener('click', openModal);

// 1. Close modal when clicking the close 'X' button
closeButton.addEventListener('click', () => {
    modal.close();
});

// 2. Close modal when clicking outside the modal image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// 3. Close modal when pressing the Esc key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.open) {
        modal.close();
    }
});
