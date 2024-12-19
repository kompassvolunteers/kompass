// Function to toggle language
function toggleLanguage() {
    const toggle = document.getElementById('language-toggle');
    const label = document.getElementById('language-label');

    if (!toggle || !label) {
        console.error('Language toggle or label element is missing.');
        return;
    }

    if (toggle.checked) {
        // Switch to Mandarin
        label.textContent = '中文';
        console.log('Switching to Mandarin');
        // Redirect to Mandarin version
        window.location.href = 'about-zh.html';
    } else {
        // Switch to English
        label.textContent = 'English';
        console.log('Switching to English');
        // Redirect to English version
        window.location.href = 'about.html';
    }
}

// Scroll-triggered timeline animations
document.addEventListener('DOMContentLoaded', () => {
    const timelineEvents = document.querySelectorAll('.timeline-event');

    if (!timelineEvents.length) {
        console.warn('No timeline events found.');
        return;
    }

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const handleScroll = () => {
        timelineEvents.forEach((event) => {
            if (isElementInViewport(event)) {
                event.classList.add('visible');
            }
        });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load to check initial visibility
});