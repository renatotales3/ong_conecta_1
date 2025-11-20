import renderHome from './views/home.js';
import renderProjects from './views/projects.js';
import renderRegister, { initRegister } from './views/register.js';

const routes = {
    '/': { render: renderHome, title: 'ONG Conecta - Página Inicial' },
    '/index.html': { render: renderHome, title: 'ONG Conecta - Página Inicial' },
    '/projetos.html': { render: renderProjects, title: 'ONG Conecta - Projetos Sociais' },
    '/cadastro.html': { render: renderRegister, title: 'ONG Conecta - Cadastro', init: initRegister },
    '/cadastro': { render: renderRegister, title: 'ONG Conecta - Cadastro', init: initRegister }
};

export function initRouter() {
    // Handle initial load - only if main is empty or we want to force SPA behavior
    // But since we restored static content for SEO/No-JS fallback, we might skip initial render
    // unless we want to attach event listeners (like for the form).
    
    // Check if we are on the registration page to init validation
    const path = window.location.pathname;
    if (path.includes('cadastro.html') || path.endsWith('/cadastro')) {
        if (routes['/cadastro.html'].init) {
            routes['/cadastro.html'].init();
        }
    }

    // Handle navigation links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        
        // Ignore external links, anchors, or mailto
        if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;

        e.preventDefault();
        window.history.pushState({}, '', href);
        handleLocation();
    });

    // Handle back/forward buttons
    window.addEventListener('popstate', handleLocation);
}

function handleLocation() {
    const path = window.location.pathname;
    // Extract filename (e.g., "index.html" from "/folder/index.html")
    let filename = path.split('/').pop();
    
    // If filename is empty (root path), treat as empty string which maps to '/'
    if (!filename) filename = '';

    // Construct route key
    // If filename is "index.html", key is "/index.html"
    // If filename is "", key is "/"
    let routeKey = '/' + filename;

    // Find route
    let route = routes[routeKey];

    // Fallback for root or index
    if (!route) {
        if (routeKey === '/' || routeKey === '/index.html') {
            route = routes['/'] || routes['/index.html'];
        } else {
            // Fallback to home if route not found (or handle 404)
            console.warn(`Route not found for: ${routeKey}. Defaulting to Home.`);
            route = routes['/index.html'] || routes['/'];
        }
    }

    const main = document.querySelector('main');
    if (main && route) {
        main.innerHTML = route.render();
        document.title = route.title;
        
        // Update active menu
        updateActiveMenu(filename || 'index.html');

        // Initialize view specific logic
        if (route.init) {
            try {
                route.init();
            } catch (error) {
                console.error("Error initializing view:", error);
            }
        }
    } else {
        console.error("Main element not found or route invalid.");
    }

    // Scroll to top or anchor
    if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) element.scrollIntoView();
    } else {
        window.scrollTo(0, 0);
    }
}

function updateActiveMenu(currentFile) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        // Check if href matches currentFile
        if (href === currentFile || (currentFile === 'index.html' && (href === 'index.html' || href === '/'))) {
            link.classList.add('active');
        }
    });
}