document.addEventListener('DOMContentLoaded', function() {
    const initSection1 = () => {
        const section = document.querySelector('.product-section-1');
        if (!section) return;

        const fullContents = Array.from(section.querySelectorAll('.tab-full-content'));

        fullContents.forEach(fc => {
            fc.classList.remove('active');
            const container = fc.querySelector('.tabs-container-1');
            if (!container) return;
            container.querySelectorAll('.tab-1').forEach(t => t.classList.remove('active'));
        });

        if (fullContents.length > 0) {
            const first = fullContents[0];
            first.classList.add('active');
            const firstContainer = first.querySelector('.tabs-container-1');
            if (firstContainer) {
                const firstTabs = firstContainer.querySelectorAll('.tab-1');
                if (firstTabs.length > 0) firstTabs[0].classList.add('active');
            }
        }

        section.addEventListener('click', function(e) {
            const tab = e.target.closest('.tab-1');
            if (!tab) return;
            e.preventDefault();

            const tabId = tab.getAttribute('data-tab');

            // Desativar todos tabs e conteúdos
            section.querySelectorAll('.tab-1').forEach(t => t.classList.remove('active'));
            section.querySelectorAll('.tab-full-content').forEach(c => c.classList.remove('active'));

            // Ativar o conteúdo alvo
            const target = section.querySelector(`.tab-full-content[data-tab="${tabId}"]`);
            if (target) target.classList.add('active');

            const activeContainer = target ? target.querySelector('.tabs-container-1') : null;
            if (activeContainer) {
                const matching = activeContainer.querySelector(`.tab-1[data-tab="${tabId}"]`);
                if (matching) matching.classList.add('active');
                else {
                    const firstTab = activeContainer.querySelector('.tab-1');
                    if (firstTab) firstTab.classList.add('active');
                }
            }
        });
    };

    const initSection2 = () => {
        const section = document.querySelector('.product-section-2');
        if (!section) return;

        const fullContents = Array.from(section.querySelectorAll('.tab-full-content'));
        fullContents.forEach(fc => {
            fc.classList.remove('active');
            const container = fc.querySelector('.tabs-container-2');
            if (!container) return;
            container.querySelectorAll('.tab-2').forEach(t => t.classList.remove('active'));
        });

        if (fullContents.length > 0) {
            const first = fullContents[0];
            first.classList.add('active');
            const firstContainer = first.querySelector('.tabs-container-2');
            if (firstContainer) {
                const firstTabs = firstContainer.querySelectorAll('.tab-2');
                if (firstTabs.length > 0) firstTabs[0].classList.add('active');
            }
        }

        section.addEventListener('click', function(e) {
            const tab = e.target.closest('.tab-2');
            if (!tab) return;
            e.preventDefault();

            const tabId = tab.getAttribute('data-tab');
            section.querySelectorAll('.tab-2').forEach(t => t.classList.remove('active'));
            section.querySelectorAll('.tab-full-content').forEach(c => c.classList.remove('active'));

            const target = section.querySelector(`.tab-full-content[data-tab="${tabId}"]`);
            if (target) target.classList.add('active');

            const activeContainer = target ? target.querySelector('.tabs-container-2') : null;
            if (activeContainer) {
                const matching = activeContainer.querySelector(`.tab-2[data-tab="${tabId}"]`);
                if (matching) matching.classList.add('active');
                else {
                    const firstTab = activeContainer.querySelector('.tab-2');
                    if (firstTab) firstTab.classList.add('active');
                }
            }
        });
    };

    const initSection3 = () => {
        const section = document.querySelector('.product-section-3');
        if (!section) return;

        const fullContents = Array.from(section.querySelectorAll('.tab-full-content'));
        fullContents.forEach(fc => {
            fc.classList.remove('active');
            const container = fc.querySelector('.tabs-container-3');
            if (!container) return;
            container.querySelectorAll('.tab-3').forEach(t => t.classList.remove('active'));
        });

        if (fullContents.length > 0) {
            const first = fullContents[0];
            first.classList.add('active');
            const firstContainer = first.querySelector('.tabs-container-3');
            if (firstContainer) {
                const firstTabs = firstContainer.querySelectorAll('.tab-3');
                if (firstTabs.length > 0) firstTabs[0].classList.add('active');
            }
        }

        section.addEventListener('click', function(e) {
            const tab = e.target.closest('.tab-3');
            if (!tab) return;
            e.preventDefault();

            const tabId = tab.getAttribute('data-tab');
            section.querySelectorAll('.tab-3').forEach(t => t.classList.remove('active'));
            section.querySelectorAll('.tab-full-content').forEach(c => c.classList.remove('active'));

            const target = section.querySelector(`.tab-full-content[data-tab="${tabId}"]`);
            if (target) target.classList.add('active');

            const activeContainer = target ? target.querySelector('.tabs-container-3') : null;
            if (activeContainer) {
                const matching = activeContainer.querySelector(`.tab-3[data-tab="${tabId}"]`);
                if (matching) matching.classList.add('active');
                else {
                    const firstTab = activeContainer.querySelector('.tab-3');
                    if (firstTab) firstTab.classList.add('active');
                }
            }
        });
    };

    initSection1();
    initSection2();
    initSection3();
});
