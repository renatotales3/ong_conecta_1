# ONG Conecta - Plataforma Digital para o Terceiro Setor

## 📋 Sobre o Projeto

Este projeto consiste no desenvolvimento de uma plataforma web completa e profissional para Organizações Não Governamentais (ONGs). O objetivo é permitir que essas organizações gerenciem suas atividades, divulguem projetos, captem recursos e engajem voluntários, superando as limitações técnicas e orçamentárias que muitas enfrentam.

O projeto foi desenvolvido aplicando conceitos avançados de Front-end, incluindo SPA (Single Page Application), Acessibilidade (WCAG 2.1) e Otimização para Produção.

## 🎯 Objetivos

### Geral
Desenvolver uma plataforma web que integre os conceitos estudados, oferecendo uma solução real para o terceiro setor.

### Específicos
*   Aplicar fundamentos de HTML5 semântico.
*   Implementar layouts responsivos e design system com CSS3.
*   Desenvolver interatividade com JavaScript (SPA, máscaras e validações).
*   Garantir acessibilidade (WCAG 2.1 AA) e boas práticas de SEO.
*   Implementar fluxo de trabalho profissional com GitFlow e Versionamento Semântico.

## 🚀 Funcionalidades Principais

*   **SPA (Single Page Application):** Navegação fluida sem recarregamento de página.
*   **Acessibilidade:**
    *   Modo Alto Contraste e Modo Escuro.
    *   Navegação por teclado aprimorada.
    *   Suporte a leitores de tela (ARIA).
    *   Link "Pular para conteúdo".
*   **Área Institucional:** Apresentação da missão, visão, valores e histórico.
*   **Gestão de Projetos:** Vitrine de projetos sociais com indicadores de impacto.
*   **Engajamento de Voluntários:** Informações sobre como ajudar e cadastro de voluntários.
*   **Captação de Recursos:** Opções de doação e transparência.
*   **Contato e Localização:** Informações de contato e mapa interativo.

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica e acessível.
*   **CSS3:** Design System modular, Flexbox, Grid, Variáveis CSS.
*   **JavaScript (ES6+):** SPA Router, Módulos, Manipulação do DOM, Regex.
*   **PowerShell:** Script de build para otimização.
*   **Git/GitHub:** Versionamento com GitFlow.

## 📂 Estrutura do Projeto

```
/
├── assets/
│   ├── css/            # Arquitetura CSS Modular
│   ├── img/            # Imagens otimizadas
│   └── js/             # Lógica da aplicação (Router, Views, Utils)
├── dist/               # Versão de produção (minificada)
├── build.ps1           # Script de build
├── index.html          # Entry point
├── projetos.html       # Fallback SEO
├── cadastro.html       # Fallback SEO
└── README.md           # Documentação
```

## 👣 Como Executar

### Desenvolvimento
1.  Clone este repositório.
2.  Abra o arquivo `index.html` em seu navegador.

### Produção (Build)
Para gerar a versão otimizada (minificada) do projeto:
1.  Abra o terminal (PowerShell).
2.  Execute o script de build:
    ```powershell
    ./build.ps1
    ```
3.  Os arquivos otimizados estarão na pasta `dist/`.

## ♿ Acessibilidade

O projeto segue as diretrizes WCAG 2.1 Nível AA:
- Contraste de cores verificado.
- Estrutura de cabeçalhos lógica.
- Foco visível em todos os elementos interativos.
- Alternância de temas (Alto Contraste/Dark Mode).

## 📝 Histórico de Versões

*   **v1.0.0** - Release Final: SPA, Acessibilidade, Otimização.
*   **v0.3.0** - Entrega 3: Lógica JS e Validações.
*   **v0.2.0** - Entrega 2: Design System e Responsividade.
*   **v0.1.0** - Entrega 1: Estrutura HTML.

---
Desenvolvido para a disciplina de Desenvolvimento Front-end.
