/* js/theme.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTION DU THÈME ---
    const toggleBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const iconSpan = toggleBtn.querySelector('.icon');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    root.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    toggleBtn.addEventListener('click', () => {
        const activeTheme = root.getAttribute('data-theme');
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
        toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Activer mode jour' : 'Activer mode nuit');
    }

    // --- 2. GESTION ACCORDÉON ---
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);

            const content = this.nextElementSibling;

            if (!isExpanded) {
                // OUVRIR (Calcul hauteur dynamique)
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                // FERMER
                content.style.maxHeight = null;
            }
        });
    });
});