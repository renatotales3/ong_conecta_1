export function initAccessibility() {
    injectSkipLink();
    injectAccessibilityControls();
    loadPreferences();
}

function injectSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Pular para o conteúdo principal';
    document.body.prepend(skipLink);

    // Ensure main has the ID
    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main-content';
        main.setAttribute('tabindex', '-1'); // Allow focus programmatically
    }
}

function injectAccessibilityControls() {
    const container = document.createElement('div');
    container.className = 'accessibility-controls';
    container.setAttribute('role', 'group');
    container.setAttribute('aria-label', 'Controles de Acessibilidade');

    // High Contrast Button
    const btnContrast = document.createElement('button');
    btnContrast.className = 'btn-access';
    btnContrast.innerHTML = '👁️';
    btnContrast.setAttribute('aria-label', 'Alternar Alto Contraste');
    btnContrast.setAttribute('title', 'Alto Contraste');
    btnContrast.onclick = toggleHighContrast;

    // Dark Mode Button
    const btnDark = document.createElement('button');
    btnDark.className = 'btn-access';
    btnDark.innerHTML = '🌙';
    btnDark.setAttribute('aria-label', 'Alternar Modo Escuro');
    btnDark.setAttribute('title', 'Modo Escuro');
    btnDark.onclick = toggleDarkMode;

    container.appendChild(btnContrast);
    container.appendChild(btnDark);
    document.body.appendChild(container);
}

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    document.body.classList.remove('dark-mode'); // Mutually exclusive usually better for simplicity
    savePreferences();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.remove('high-contrast');
    savePreferences();
}

function savePreferences() {
    const isHighContrast = document.body.classList.contains('high-contrast');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    localStorage.setItem('ong_conecta_high_contrast', isHighContrast);
    localStorage.setItem('ong_conecta_dark_mode', isDarkMode);
}

function loadPreferences() {
    const isHighContrast = localStorage.getItem('ong_conecta_high_contrast') === 'true';
    const isDarkMode = localStorage.getItem('ong_conecta_dark_mode') === 'true';

    if (isHighContrast) document.body.classList.add('high-contrast');
    if (isDarkMode) document.body.classList.add('dark-mode');
}