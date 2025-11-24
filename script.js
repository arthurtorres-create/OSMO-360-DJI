document.addEventListener('DOMContentLoaded', function() {
    // Função genérica para inicializar tabs de uma seção específica
    const initializeTabs = (sectionClass, tabSelector, contentSelector) => {
        const tabs = document.querySelectorAll(tabSelector);
        const tabContents = document.querySelectorAll(contentSelector);

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove a classe active de todas as abas
                tabs.forEach(t => t.classList.remove('active'));
                // Adiciona a classe active apenas na aba clicada
                this.classList.add('active');

                // Remove a classe active de todos os conteúdos
                tabContents.forEach(content => content.classList.remove('active'));

                // Adiciona a classe active apenas no conteúdo correspondente
                const tabId = this.getAttribute('data-tab');
                const targetContent = document.querySelector(`.${sectionClass} .tab-full-content[data-tab="${tabId}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    };

    // Inicializar cada seção de produtos
    initializeTabs('product-section-1', '.product-section-1 .tab-1', '.product-section-1 .tab-full-content');
    initializeTabs('product-section-2', '.product-section-2 .tab-2', '.product-section-2 .tab-full-content');
    initializeTabs('product-section-3', '.product-section-3 .tab-3', '.product-section-3 .tab-full-content');
});
