document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const popularSerialsList = document.querySelectorAll('#popular-serials .serial-item'); // Assuming you add an ID to the section
    const newEpisodesList = document.querySelectorAll('#new-episodes .serial-item'); // Assuming you add an ID to the section
    const allSerialItems = document.querySelectorAll('.serial-item'); // More generic selector

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();

            allSerialItems.forEach(item => {
                const titleElement = item.querySelector('.serial-title');
                if (titleElement) {
                    const title = titleElement.textContent.toLowerCase();
                    if (title.includes(searchTerm)) {
                        item.style.display = ''; // Show item
                    } else {
                        item.style.display = 'none'; // Hide item
                    }
                }
            });
        });
    } else {
        console.error("Search input not found!");
    }

    // Initial check in case there's pre-filled search text (unlikely for this setup)
    if (searchInput && searchInput.value) {
        searchInput.dispatchEvent(new Event('input'));
    }
});

console.log("script.js loaded and search functionality attached.");
