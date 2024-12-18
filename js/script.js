// Function to toggle language
function toggleLanguage() {
    const toggle = document.getElementById('language-toggle');
    const label = document.getElementById('language-label');

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