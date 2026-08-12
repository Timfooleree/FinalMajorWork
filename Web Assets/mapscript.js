document.addEventListener('DOMContentLoaded', () => {
    const popupBox = document.getElementById('popupBox');
    const popupTitle = document.getElementById('popupTitle');
    const popupDesc = document.getElementById('popupDesc');
    const mapContainer = document.getElementById('mapContainer');

    if (!popupBox || !mapContainer) return;

    // Use event delegation on map container
    mapContainer.addEventListener('click', (event) => {
        const node = event.target.closest('.map-node');

        if (node) {
            event.stopPropagation();

            const title = node.getAttribute('data-title') || 'Location';
            const desc = node.getAttribute('data-desc') || '';

            popupTitle.textContent = title;
            popupDesc.textContent = desc;

            // Position box directly above the clicked node
            popupBox.style.top = node.style.top;
            popupBox.style.left = node.style.left;

            popupBox.classList.add('active');
        } else if (!popupBox.contains(event.target)) {
            // Hide popup if clicking away on the map background
            popupBox.classList.remove('active');
        }
    });
});