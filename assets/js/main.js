document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');
    const phoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 9) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            } else if (value.length > 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
            } else if (value.length > 3) {
                value = value.replace(/(\d{3})(\d{3})/, '$1.$2');
            }
            
            e.target.value = value;
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);

            if (value.length > 10) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            }
            
            e.target.value = value;
        });
    }

    if (cepInput) {
        cepInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 8) value = value.slice(0, 8);

            if (value.length > 5) {
                value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
            }
            
            e.target.value = value;
        });
    }

    // Menu Mobile
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
