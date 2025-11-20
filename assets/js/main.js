import { initRouter } from './router.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Router (SPA)
    initRouter();

    // Menu Mobile Logic
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            
            // Travar scroll do body quando menu estiver aberto
            const isExpanded = hamburger.classList.contains("active");
            document.body.style.overflow = isExpanded ? "hidden" : "initial";
            hamburger.setAttribute("aria-expanded", isExpanded);
        });

        // Fechar menu ao clicar em um link
        navLinks.forEach(n => n.addEventListener("click", (e) => {
            // Se for um link com dropdown no mobile, previne navegação imediata e abre o menu
            const parentItem = n.parentElement;
            if (window.innerWidth <= 768 && parentItem.querySelector('.dropdown-menu')) {
                // Se já estiver aberto, deixa navegar. Se não, abre.
                if (!parentItem.classList.contains('active')) {
                    e.preventDefault();
                    // Fecha outros dropdowns
                    document.querySelectorAll('.nav-item.active').forEach(item => {
                        if (item !== parentItem) item.classList.remove('active');
                    });
                    parentItem.classList.add('active');
                    return;
                }
            }

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.style.overflow = "initial";
            hamburger.setAttribute("aria-expanded", false);
        }));
    }
});
