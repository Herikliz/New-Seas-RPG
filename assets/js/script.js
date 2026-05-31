if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

const presetThemes = {
    claro: { bg: '#f0f8ff', text: '#2d3748', sidebar: '#ffffff', border: '#e2e8f0', link: '#4a5568', hoverBg: '#edf2f7', accent: '#d32f2f', btnText: '#ffffff', areaBg: '#ffffff', areaBorder: '#cbd5e0', subMenu: '#f8fafc' },
    escuro: { bg: '#121212', text: '#e0e0e0', sidebar: '#1e1e1e', border: '#333333', link: '#b0b0b0', hoverBg: '#2d3748', accent: '#f1c40f', btnText: '#121212', areaBg: '#1a1a1a', areaBorder: '#4a5568', subMenu: '#1a1a1a' },
    oceano: { bg: '#0f172a', text: '#e2e8f0', sidebar: '#1e293b', border: '#334155', link: '#94a3b8', hoverBg: '#334155', accent: '#38bdf8', btnText: '#0f172a', areaBg: '#0f172a', areaBorder: '#334155', subMenu: '#0f172a' },
    floresta: { bg: '#064e3b', text: '#ecfdf5', sidebar: '#065f46', border: '#047857', link: '#a7f3d0', hoverBg: '#047857', accent: '#34d399', btnText: '#064e3b', areaBg: '#064e3b', areaBorder: '#047857', subMenu: '#064e3b' },
    carmesim: { bg: '#450a0a', text: '#fef2f2', sidebar: '#7f1d1d', border: '#991b1b', link: '#fecaca', hoverBg: '#991b1b', accent: '#f87171', btnText: '#450a0a', areaBg: '#450a0a', areaBorder: '#991b1b', subMenu: '#450a0a' },
    marinha: { bg: '#ffffff', text: '#1e3a8a', sidebar: '#eff6ff', border: '#bfdbfe', link: '#1e40af', hoverBg: '#dbeafe', accent: '#2563eb', btnText: '#ffffff', areaBg: '#ffffff', areaBorder: '#93c5fd', subMenu: '#eff6ff' },
    deserto: { bg: '#fef3c7', text: '#78350f', sidebar: '#fde68a', border: '#fcd34d', link: '#92400e', hoverBg: '#fef3c7', accent: '#d97706', btnText: '#ffffff', areaBg: '#fffbeb', areaBorder: '#fbbf24', subMenu: '#fde68a' },
    sakura: { bg: '#fdf2f8', text: '#831843', sidebar: '#fce7f3', border: '#fbcfe8', link: '#9d174d', hoverBg: '#fdf2f8', accent: '#db2777', btnText: '#ffffff', areaBg: '#ffffff', areaBorder: '#f9a8d4', subMenu: '#fce7f3' },
    trevas: { bg: '#2e1065', text: '#f5f3ff', sidebar: '#3b0764', border: '#581c87', link: '#ddd6fe', hoverBg: '#581c87', accent: '#a855f7', btnText: '#ffffff', areaBg: '#2e1065', areaBorder: '#6b21a8', subMenu: '#3b0764' },
    ouro: { bg: '#000000', text: '#fef08a', sidebar: '#1a1a1a', border: '#ca8a04', link: '#fde047', hoverBg: '#333333', accent: '#eab308', btnText: '#000000', areaBg: '#000000', areaBorder: '#a16207', subMenu: '#1a1a1a' }
};

function applyTheme(themeObj) {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', themeObj.bg);
    root.style.setProperty('--text-color', themeObj.text);
    root.style.setProperty('--sidebar-bg', themeObj.sidebar);
    root.style.setProperty('--sidebar-border', themeObj.border);
    root.style.setProperty('--link-color', themeObj.link);
    root.style.setProperty('--link-hover-bg', themeObj.hoverBg);
    root.style.setProperty('--link-hover-color', themeObj.accent);
    root.style.setProperty('--accent-color', themeObj.accent);
    root.style.setProperty('--button-text', themeObj.btnText);
    root.style.setProperty('--textarea-bg', themeObj.areaBg);
    root.style.setProperty('--textarea-border', themeObj.areaBorder);
    root.style.setProperty('--submenu-bg', themeObj.subMenu);
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme === 'custom') {
        const customColors = JSON.parse(localStorage.getItem('customThemeColors'));
        if (customColors) applyTheme(customColors);
    } else if (savedTheme && presetThemes[savedTheme]) {
        applyTheme(presetThemes[savedTheme]);
    } else {
        applyTheme(presetThemes['escuro']);
    }
}
loadSavedTheme();

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);

    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = `
    <button id="sidebar-toggle" class="sidebar-toggle-btn">☰</button>
    <aside class="sidebar">
        <div class="logo-container">
            <div class="logo-text"><a href="index.html" style="color: inherit; text-decoration: none;">New Seas OP</a></div>
        </div>
        <div class="search-container" style="padding: 10px 20px;">
            <input type="text" id="menu-search" placeholder="Pesquisar no menu..." style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--sidebar-border); background: var(--bg-color); color: var(--text-color); font-family: 'Comfortaa', sans-serif; outline: none; transition: border-color 0.3s ease;">
        </div>
        <ul class="nav-links">
            <li><a href="index.html">INÍCIO</a></li>
            <li>
                <a href="criacao-de-personagem.html" class="toggle-btn">CRIAÇÃO DE PERSONAGEM <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="aparencias.html">APARÊNCIAS</a></li>
                    <li><a href="classes.html">CLASSES</a></li>
                    <li><a href="estilos-de-luta.html">ESTILOS DE LUTA</a></li>
                    <li><a href="habilidades-unicas.html">HABILIDADES ÚNICAS</a></li>
                    <li><a href="linhagens.html">LINHAGENS</a></li>
                    <li><a href="racas.html">RAÇAS</a></li>
                    <li><a href="https://herikliz.github.io/New-Seas-RPG-Ficha/">SALVAR FICHA</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">ORGANIZAÇÕES <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="governo-mundial.html">GOVERNO MUNDIAL</a></li>
                    <li><a href="marinha.html">MARINHA</a></li>
                    <li><a href="pirata.html">PIRATA</a></li>
                    <li><a href="vanguarda-popular-revolucionaria.html">VANGUARDA POPULAR REVOLUCIONÁRIA</a></li>
                    <li><a href="tripulacoes.html">TRIPULAÇÕES</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">FORÇA VITAL <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="atributos.html">ATRIBUTOS</a></li>
                    <li><a href="akuma-no-mi.html">AKUMA NO MI</a></li>
                    <li><a href="haki.html">HAKI</a></li>
                    <li><a href="estamina.html">ESTAMINA</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">EVOLUÇÃO <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="extra-narrada.html">EXTRA-NARRADA</a></li>
                    <li><a href="missoes.html">MISSÕES</a></li>
                    <li><a href="npcs-especiais.html">NPCS ESPECIAIS</a></li>
                    <li><a href="recrutar-npcs.html">RECRUTAR NPCS</a></li>
                    <li><a href="trabalho.html">TRABALHO</a></li>
                    <li><a href="treino.html">TREINO</a></li>
                </ul>
            </li>
            <li>
                <a href="https://sites.google.com/view/new-seas-op/geografia" class="toggle-btn">GEOGRAFIA <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li>
                        <a href="https://sites.google.com/view/new-seas-op/geografia/ilhas" class="toggle-btn">ILHAS <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="https://sites.google.com/view/new-seas-op/geografia/ilhas/east-blue">EAST BLUE</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/geografia/ilhas/south-blue">SOUTH BLUE</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/geografia/ilhas/west-blue">WEST BLUE</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/geografia/ilhas/north-blue">NORTH BLUE</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/geografia/ilhas/paraíso">PARAÍSO</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/geografia/ilhas/novo-mundo">NOVO MUNDO</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/geografia/ilhas/calm-belt">CALM BELT</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/geografia/ilhas/ilhas-sem-localização-exata">ILHAS SEM LOCALIZAÇÃO EXATA</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="https://sites.google.com/view/new-seas-op/história">HISTÓRIA</a></li>
            <li>
                <a href="https://sites.google.com/view/new-seas-op/submundo" class="toggle-btn">SUBMUNDO <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="https://sites.google.com/view/new-seas-op/submundo/escravos">ESCRAVOS</a></li>
                    <li>
                        <a href="#" class="toggle-btn">AKUMA NO MI <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="https://sites.google.com/view/new-seas-op/submundo/akuma-no-mi/logia">LOGIA</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/submundo/akuma-no-mi/paramecia">PARAMECIA</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/submundo/akuma-no-mi/zoan">ZOAN</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="https://sites.google.com/view/new-seas-op/loja" class="toggle-btn">LOJA <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="https://sites.google.com/view/new-seas-op/loja/itens-exclusivos">ITENS EXCLUSIVOS</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-de-barcos">LOJA DE BARCOS</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-de-carpinteiro">LOJA DE CARPINTEIRO</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-de-criadores">LOJA DE CRIADORES</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-especial">LOJA ESPECIAL</a></li>
                    <li>
                        <a href="https://sites.google.com/view/new-seas-op/loja/loja-de-ferreiro" class="toggle-btn">LOJA DE FERREIROS <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-de-ferreiro/escudos">ESCUDOS</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://sites.google.com/view/new-seas-op/loja/loja-de-meitous" class="toggle-btn">LOJA DE MEITOUS <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-de-meitous/grau-desconhecido">GRAU DESCONHECIDO</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-de-meitous/armas-do-mundo">ARMAS DO MUNDO</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-de-meitous/wazamono">WAZAMONO</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-de-meitous/ryō-wazamono">RYŌ WAZAMONO</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-de-meitous/ō-wazamono">Ō WAZAMONO</a></li>
                            <li><a href="https://sites.google.com/view/new-seas-op/loja/loja-de-meitous/saijō-ō-wazamono">SAIJŌ Ō WAZAMONO</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="https://sites.google.com/view/new-seas-op/impel-down" class="toggle-btn">IMPEL DOWN <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="https://sites.google.com/view/new-seas-op/impel-down/adaptação">ADAPTAÇÃO</a></li>
                </ul>
            </li>
            <li>
                <a href="https://sites.google.com/view/new-seas-op/jornal" class="toggle-btn">JORNAL <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="https://sites.google.com/view/new-seas-op/jornal/procurados">PROCURADOS</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/jornal/younkous">YOUNKOUS</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">MECÂNICAS DO RPG <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="https://sites.google.com/view/new-seas-op/mecânicas-do-rpg/caçadas">CAÇADAS</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/mecânicas-do-rpg/criação-de-experimentos">CRIAÇÃO DE EXPERIMENTOS</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/mecânicas-do-rpg/criação-de-meitos">CRIAÇÃO DE MEITOUS</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/mecânicas-do-rpg/descoberta-de-aterfatos">DESCOBERTA DE ARTEFATOS</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/mecânicas-do-rpg/dominações">DOMINAÇÕES</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/mecânicas-do-rpg/investimento">INVESTIMENTO</a></li>
                    <li><a href="https://sites.google.com/view/new-seas-op/mecânicas-do-rpg/sangue">SANGUE</a></li>
                </ul>
            </li>
            <li><a href="https://sites.google.com/view/new-seas-op/regras">REGRAS</a></li>
        </ul>
    </aside>
        `;
    }

    const menuSearch = document.getElementById('menu-search');
    if (menuSearch) {
        menuSearch.addEventListener('input', function() {
            const term = this.value.toLowerCase().trim();
            const allListItems = document.querySelectorAll('.nav-links li');

            if (term === '') {
                allListItems.forEach(li => {
                    li.style.display = '';
                    const subMenu = li.querySelector('.sub-menu');
                    if (subMenu) subMenu.classList.remove('show');
                    const arrow = li.querySelector('.arrow');
                    if (arrow) arrow.classList.remove('rotate');
                });
                return;
            }

            allListItems.forEach(li => li.style.display = 'none');

            allListItems.forEach(li => {
                const link = li.querySelector('a');
                if (link && link.textContent.toLowerCase().includes(term)) {
                    li.style.display = '';
                    
                    let parent = li.parentElement.closest('li');
                    while (parent) {
                        parent.style.display = '';
                        const subMenu = parent.querySelector('.sub-menu');
                        if (subMenu) subMenu.classList.add('show');
                        const arrow = parent.querySelector('.arrow');
                        if (arrow) arrow.classList.add('rotate');
                        parent = parent.parentElement.closest('li');
                    }
                }
            });
        });
    }

    const themeModalHTML = `
    <div id="theme-modal-overlay" class="theme-modal-overlay">
        <div class="theme-modal">
            <h2 class="title-quantico" style="font-size: 20px; text-align: center; margin-bottom: 20px;">ESCOLHA SEU TEMA</h2>
            <div class="theme-btn-grid">
                <button class="theme-btn" data-theme="claro">Claro</button>
                <button class="theme-btn" data-theme="escuro">Escuro</button>
                <button class="theme-btn" data-theme="oceano">Oceano</button>
                <button class="theme-btn" data-theme="floresta">Floresta</button>
                <button class="theme-btn" data-theme="carmesim">Carmesim</button>
                <button class="theme-btn" data-theme="marinha">Marinha</button>
                <button class="theme-btn" data-theme="deserto">Deserto</button>
                <button class="theme-btn" data-theme="sakura">Sakura</button>
                <button class="theme-btn" data-theme="trevas">Trevas</button>
                <button class="theme-btn" data-theme="ouro">Ouro</button>
            </div>
            <div class="custom-theme-section">
                <h3 style="margin-bottom: 15px; font-size: 16px; text-align: center;">TEMA PERSONALIZADO</h3>
                <div class="color-picker-group"><label>Cor de Fundo</label><input type="color" id="custom-bg" value="#ffffff"></div>
                <div class="color-picker-group"><label>Cor do Menu</label><input type="color" id="custom-sidebar" value="#f8fafc"></div>
                <div class="color-picker-group"><label>Cor do Texto</label><input type="color" id="custom-text" value="#2d3748"></div>
                <div class="color-picker-group"><label>Cor de Destaque</label><input type="color" id="custom-accent" value="#d32f2f"></div>
                <div class="color-picker-group"><label>Cor das Bordas</label><input type="color" id="custom-border" value="#e2e8f0"></div>
                <button id="apply-custom-theme" class="theme-btn" style="width: 100%; margin-top: 15px; border-color: var(--accent-color);">Aplicar Personalizado</button>
            </div>
            <button id="close-theme-modal" class="close-modal-btn">Fechar</button>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', themeModalHTML);

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeModalOverlay = document.getElementById('theme-modal-overlay');
    const closeThemeModal = document.getElementById('close-theme-modal');

    if (themeToggleBtn) {
        themeToggleBtn.textContent = '🎨';
        themeToggleBtn.addEventListener('click', function() {
            const savedTheme = localStorage.getItem('selectedTheme');
            if (savedTheme === 'custom') {
                const customColors = JSON.parse(localStorage.getItem('customThemeColors'));
                if(customColors) {
                    document.getElementById('custom-bg').value = customColors.bg;
                    document.getElementById('custom-sidebar').value = customColors.sidebar;
                    document.getElementById('custom-text').value = customColors.text;
                    document.getElementById('custom-accent').value = customColors.accent;
                    document.getElementById('custom-border').value = customColors.border;
                }
            }
            themeModalOverlay.classList.add('show');
        });
    }

    if (closeThemeModal) {
        closeThemeModal.addEventListener('click', function() {
            themeModalOverlay.classList.remove('show');
        });
    }

    document.querySelectorAll('.theme-btn-grid .theme-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const themeKey = this.getAttribute('data-theme');
            applyTheme(presetThemes[themeKey]);
            localStorage.setItem('selectedTheme', themeKey);
            themeModalOverlay.classList.remove('show');
        });
    });

    const applyCustomBtn = document.getElementById('apply-custom-theme');
    if (applyCustomBtn) {
        applyCustomBtn.addEventListener('click', function() {
            const customObj = {
                bg: document.getElementById('custom-bg').value,
                text: document.getElementById('custom-text').value,
                sidebar: document.getElementById('custom-sidebar').value,
                border: document.getElementById('custom-border').value,
                link: document.getElementById('custom-text').value,
                hoverBg: document.getElementById('custom-border').value,
                accent: document.getElementById('custom-accent').value,
                btnText: '#ffffff',
                areaBg: document.getElementById('custom-bg').value,
                areaBorder: document.getElementById('custom-border').value,
                subMenu: document.getElementById('custom-sidebar').value
            };
            applyTheme(customObj);
            localStorage.setItem('selectedTheme', 'custom');
            localStorage.setItem('customThemeColors', JSON.stringify(customObj));
            themeModalOverlay.classList.remove('show');
        });
    }

    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('sidebar-collapsed');
        });
    }

    const path = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarElement = sidebarContainer || document.body;
    const currentLink = sidebarElement.querySelector(`a[href="${path}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
        let parentMenu = currentLink.closest('.sub-menu');
        while (parentMenu) {
            parentMenu.classList.add('show');
            const toggleBtn = parentMenu.previousElementSibling;
            if (toggleBtn) {
                toggleBtn.classList.add('active');
                const arrow = toggleBtn.querySelector('.arrow');
                if (arrow) arrow.classList.add('rotate');
            }
            parentMenu = toggleBtn ? toggleBtn.closest('.sub-menu') : null;
        }
        const nextSubMenu = currentLink.nextElementSibling;
        if (nextSubMenu && nextSubMenu.classList.contains('sub-menu')) {
            nextSubMenu.classList.add('show');
            const arrow = currentLink.querySelector('.arrow');
            if (arrow) arrow.classList.add('rotate');
        }
    }

    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (e.target.closest('.arrow') || this.getAttribute('href') === '#') {
                e.preventDefault();
                const subMenu = this.nextElementSibling;
                const arrow = this.querySelector('.arrow');
                if (subMenu && arrow) {
                    subMenu.classList.toggle('show');
                    arrow.classList.toggle('rotate');
                }
            }
        });
    });

    const mainContent = document.querySelector('.main-content');
    const originalElements = Array.from(mainContent.children);

    const allLinks = document.querySelectorAll('.nav-links a');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const pageName = this.textContent.replace('▼', '').trim();
            const isIndexFile = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '';
            const isCriacaoFile = window.location.pathname.endsWith('criacao-de-personagem.html');

            if (href === '#') {
                return;
            }

            if ((href === 'index.html' && isIndexFile) || (href === 'criacao-de-personagem.html' && isCriacaoFile)) {
                if (this.classList.contains('toggle-btn') && !e.target.closest('.arrow')) {
                    return;
                }

                e.preventDefault();

                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                const existingDynamic = document.getElementById('dynamic-page-content');
                if (existingDynamic) {
                    existingDynamic.remove();
                }

                if ((pageName === 'INÍCIO' && isIndexFile) || (pageName === 'CRIAÇÃO DE PERSONAGEM' && isCriacaoFile)) {
                    originalElements.forEach(el => el.style.display = '');
                } else {
                    originalElements.forEach(el => {
                        if (el.tagName !== 'SCRIPT') {
                            el.style.display = 'none';
                        }
                    });

                    const dynamicWrapper = document.createElement('div');
                    dynamicWrapper.id = 'dynamic-page-content';
                    dynamicWrapper.className = 'content-wrapper';

                    const section = document.createElement('section');
                    section.className = 'content-section text-center';

                    const title = document.createElement('h1');
                    title.className = 'title-quantico';
                    title.textContent = pageName;

                    section.appendChild(title);
                    dynamicWrapper.appendChild(section);
                    mainContent.appendChild(dynamicWrapper);
                }
            }
        });
    });

    const btnCopiar = document.getElementById('btnCopiar');
    if (btnCopiar) {
        btnCopiar.addEventListener('click', function() {
            let textArea = document.getElementById("textAreaFicha");
            textArea.select();
            document.execCommand("copy");
            alert("Ficha copiada!");
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleTitles = document.querySelectorAll('.toggle-title');
    
    toggleTitles.forEach(title => {
        title.addEventListener('click', () => {
            title.classList.toggle('collapsed');
            const content = title.nextElementSibling;
            if (content && content.classList.contains('toggle-content')) {
                content.classList.toggle('collapsed');
            }
        });
    });

    const toggleAllBtn = document.getElementById('toggle-all-btn');
    let isAllCollapsed = false;

    if (toggleAllBtn) {
        toggleAllBtn.addEventListener('click', () => {
            isAllCollapsed = !isAllCollapsed;
            toggleAllBtn.textContent = isAllCollapsed ? 'Expandir Tudo' : 'Retrair Tudo';

            toggleTitles.forEach(title => {
                const content = title.nextElementSibling;
                if (content && content.classList.contains('toggle-content')) {
                    if (isAllCollapsed) {
                        title.classList.add('collapsed');
                        content.classList.add('collapsed');
                    } else {
                        title.classList.remove('collapsed');
                        content.classList.remove('collapsed');
                    }
                }
            });
        });
    }
});

function formatCalcInput(inputField) {
    if (inputField.tagName.toLowerCase() !== 'input' || inputField.type !== 'text') return;
    let val = inputField.value.replace(/\D/g, '');
    if (val === '') {
        inputField.value = '';
        return;
    }
    let num = parseInt(val, 10);
    inputField.value = num.toLocaleString('pt-BR');
}

function getCalcVal(elementId) {
    let el = document.getElementById(elementId);
    if (!el) return 0;
    if (el.type === 'number') return parseFloat(el.value) || 0;
    let val = el.value.replace(/\./g, '');
    return val ? parseInt(val, 10) : 0;
}

function runAtributosCalc() {
    if (!document.getElementById('hp-res-passiva')) return;

    let resPassiva = getCalcVal('hp-res-passiva');
    let outHp = document.getElementById('out-hp');
    if (outHp) outHp.innerText = (resPassiva + 10000).toLocaleString('pt-BR');

    let dmgBruto = getCalcVal('dmg-bruto');
    let dmgResTotal = getCalcVal('dmg-res-total');
    let dmgFinal = Math.floor(dmgBruto * (25000 / (25000 + dmgResTotal)));
    let outDanoFinal = document.getElementById('out-dano-final');
    if (outDanoFinal) outDanoFinal.innerText = dmgFinal.toLocaleString('pt-BR');

    let esqAtk = getCalcVal('esq-atk');
    let esqDef = getCalcVal('esq-def');
    let diffLabel = document.getElementById('out-esq-perc');
    let statusLabel = document.getElementById('out-esq-status');

    if (diffLabel && statusLabel) {
        if (esqDef === 0 && esqAtk === 0) {
            diffLabel.innerText = "0%";
            diffLabel.style.color = "#ffeb3b";
            statusLabel.innerText = "Igualdade ou Valores Parelhos. Combate equilibrado. A esquiva é plenamente possível de forma coerente.";
        } else if (esqDef === 0 && esqAtk > 0) {
            diffLabel.innerText = "∞ (Incalculável)";
            diffLabel.style.color = "#f44336";
            statusLabel.innerText = "Speedblitz Absoluto: Disparidade esmagadora. O defensor sequer consegue ver o ataque chegar.";
        } else {
            let diff = ((esqAtk - esqDef) / esqDef) * 100;
            diffLabel.innerText = diff.toFixed(1) + "%";

            if (diff <= 10) {
                diffLabel.style.color = "#4caf50";
                if(diff < -10) {
                    statusLabel.innerText = "Vantagem Clara do Defensor: O ataque é lido e evitado com extrema facilidade.";
                } else {
                    statusLabel.innerText = "Igualdade ou Valores Parelhos: Ambos conseguem atacar, reagir e se defender normalmente.";
                }
            } else if (diff <= 25) {
                diffLabel.style.color = "#ff9800";
                statusLabel.innerText = "Dificuldade Perceptível (10% a 25%): O defensor acompanha os movimentos com esforço. A esquiva exige boa descrição e movimentação estratégica.";
            } else if (diff <= 50) {
                diffLabel.style.color = "#ff5722";
                statusLabel.innerText = "Desvantagem (25% a 50%): O defensor reage, mas está claramente em apuros. Erros de tempo ou posicionamento serão punidos com o acerto.";
            } else if (diff <= 75) {
                diffLabel.style.color = "#e91e63";
                statusLabel.innerText = "Situação Crítica (50% a 75%): Reagir exige uso estratégico do terreno, antecipação perfeita ou recurso de build. Esquivas comuns não funcionam mais.";
            } else {
                diffLabel.style.color = "#f44336";
                statusLabel.innerText = "Speedblitz (> 75%): Disparidade esmagadora. O defensor não consegue acompanhar. Salvo por habilidades passivas específicas, o golpe acertará.";
            }
        }
    }

    let pAttr = getCalcVal('proj-attr');
    let pTipoEl = document.getElementById('proj-tipo');
    let pClasseEl = document.getElementById('proj-classe');
    
    if (pTipoEl) {
        let pTipo = pTipoEl.value;
        let pClasse = pClasseEl ? pClasseEl.value : '';
        
        let classBox = document.getElementById('container-classe');
        if (classBox) {
            if (pTipo === 'arco' || pTipo === 'fogo') {
                classBox.style.display = 'block';
            } else {
                classBox.style.display = 'none';
            }
        }

        let pVel = 0;
        let pDist = 0;

        if (pTipo === 'forca' || pTipo === 'corte') {
            pVel = Math.floor(pAttr * 0.50);
        } else if (pTipo === 'arco') {
            pVel = Math.floor(pAttr * 0.60);
        } else if (pTipo === 'fogo') {
            pVel = Math.floor(pAttr * 0.70);
        }

        if (pTipo === 'forca' || pTipo === 'corte') {
            pDist = Math.floor(pAttr / 100);
        } else if (pTipo === 'fogo') {
            if (pClasse === 'atirador') pDist = Math.floor(pAttr / 10);
            else pDist = Math.floor(pAttr / 100);
        } else if (pTipo === 'arco') {
            if (pClasse === 'atirador') pDist = Math.floor(pAttr / 100) * 5;
            else pDist = Math.floor(pAttr / 1000) * 5;
        }

        let outProjVel = document.getElementById('out-proj-vel');
        let outProjDist = document.getElementById('out-proj-dist');
        if (outProjVel) outProjVel.innerText = pVel.toLocaleString('pt-BR');
        if (outProjDist) outProjDist.innerText = pDist.toLocaleString('pt-BR');
    }
}

function runEstaminaCalc() {
    if (!document.getElementById('calc-res')) return;

    let res = getCalcVal('calc-res');
    let estaminaTotal = res * 2;
    let elEstaminaTotal = document.getElementById('res-estamina-total');
    if (elEstaminaTotal) elEstaminaTotal.innerText = estaminaTotal.toLocaleString('pt-BR');

    let buff = getCalcVal('calc-buff');
    let gastoBuff = Math.floor(buff * 15);
    let elGastoBuff = document.getElementById('res-gasto-buff');
    if (elGastoBuff) elGastoBuff.innerText = gastoBuff.toLocaleString('pt-BR');

    let vel = getCalcVal('calc-vel');
    let gastoVel = Math.floor(vel * 0.1);
    let elGastoVel = document.getElementById('res-gasto-vel');
    if (elGastoVel) elGastoVel.innerText = gastoVel.toLocaleString('pt-BR');

    let dano = getCalcVal('calc-dano');
    let gastoDano = Math.floor(dano * 0.1);
    let elGastoDano = document.getElementById('res-gasto-dano');
    if (elGastoDano) elGastoDano.innerText = gastoDano.toLocaleString('pt-BR');

    let hakiArm = getCalcVal('calc-haki-arm');
    let hakiObs = getCalcVal('calc-haki-obs');
    let gastoHaki = (hakiArm * 300) + (hakiObs * 200);
    let elGastoHaki = document.getElementById('res-gasto-haki');
    if (elGastoHaki) elGastoHaki.innerText = gastoHaki.toLocaleString('pt-BR');

    let gastoTotal = gastoBuff + gastoVel + gastoDano + gastoHaki;
    let elGastoTotal = document.getElementById('res-gasto-total');
    if (elGastoTotal) elGastoTotal.innerText = gastoTotal.toLocaleString('pt-BR');

    let estaminaRestante = estaminaTotal - gastoTotal;
    let elEstaminaRestante = document.getElementById('res-estamina-restante');
    if (elEstaminaRestante) elEstaminaRestante.innerText = estaminaRestante.toLocaleString('pt-BR');
}

document.addEventListener('DOMContentLoaded', () => {
    const autoCalcInputs = document.querySelectorAll('.auto-calc');

    autoCalcInputs.forEach(input => {
        input.addEventListener('input', function() {
            formatCalcInput(this);
            runAtributosCalc();
            runEstaminaCalc();
        });
        
        if (input.tagName.toLowerCase() === 'select') {
            input.addEventListener('change', () => {
                runAtributosCalc();
                runEstaminaCalc();
            });
        }
    });

    runAtributosCalc();
    runEstaminaCalc();
});

function updateSceneStats(textarea) {
    if (!textarea) return;
    let sceneTxt = textarea.value;
    let sChars = sceneTxt.length;
    let sParas = sceneTxt.trim() === "" ? 0 : sceneTxt.split(/\n+/).filter(p => p.trim().length > 0).length;
    
    let wrapper = textarea.closest('.box-content');
    if(!wrapper) return;

    let minChars = parseInt(textarea.getAttribute('data-min-chars')) || 12000;
    
    let charsEl = wrapper.querySelector('.scene-chars');
    let parasEl = wrapper.querySelector('.scene-paras');
    let statusEl = wrapper.querySelector('.scene-status');
    
    if(charsEl) charsEl.textContent = sChars.toLocaleString('pt-BR');
    if(parasEl) parasEl.textContent = sParas.toLocaleString('pt-BR');
    
    if(statusEl) {
        if (sChars >= minChars) { 
            statusEl.textContent = `(✔️ Alcançou o mínimo de ${minChars.toLocaleString('pt-BR')})`; 
            statusEl.style.color = "#4caf50"; 
        } else { 
            let faltam = minChars - sChars;
            statusEl.textContent = `(❌ Faltam ${faltam.toLocaleString('pt-BR')})`; 
            statusEl.style.color = "#f44336"; 
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const textareas = document.querySelectorAll('.contador-textarea');
    textareas.forEach(ta => {
        ta.addEventListener('input', function() {
            updateSceneStats(this);
        });
        updateSceneStats(ta);
    });

    document.querySelectorAll('.btn-copiar-contador').forEach(btn => {
        btn.addEventListener('click', function() {
            let wrapper = this.closest('.box-content');
            if(!wrapper) return;
            let textarea = wrapper.querySelector('textarea');
            if (!textarea || !textarea.value) return;
            
            navigator.clipboard.writeText(textarea.value).then(() => {
                let originalText = this.textContent;
                let originalBg = this.style.backgroundColor;
                let originalColor = this.style.color;

                this.textContent = "Texto Copiado!";
                this.style.backgroundColor = "#4caf50";
                this.style.color = "#fff";
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = originalBg;
                    this.style.color = originalColor;
                }, 2000);
            });
        });
    });
});


function formatarEVerificar(el) {
    let valor = el.value.replace(/\D/g, "");
    el.value = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    verificarTrabalho();
}

function verificarTrabalho() {
    let elPontos = document.getElementById('pontos-atuais');
    if (!elPontos) return;

    let pontosStr = elPontos.value.replace(/\D/g, "");
    let pontos = parseInt(pontosStr) || 0;
    let tipoDesejado = document.getElementById('tipo-desejado').value;
    let resultadoEl = document.getElementById('resultado');
    let textarea = document.getElementById('info-sceneText');
    let tiposFeitos = Array.from(document.querySelectorAll('.tipo-feito:checked')).map(cb => cb.value);

    let reqPontos = { "1": 1000, "2": 2500, "3": 5000 };
    let reqPontosFormatados = { "1": "1.000", "2": "2.500", "3": "5.000" };

    if (tiposFeitos.includes(tipoDesejado)) {
        resultadoEl.style.backgroundColor = "rgba(220, 53, 69, 0.1)";
        resultadoEl.style.border = "1px dashed var(--danger)";
        resultadoEl.style.color = "var(--danger)";
        resultadoEl.innerHTML = "Negado. Você já realizou um Trabalho Tipo " + tipoDesejado + " neste mês. Não é permitido repetir o mesmo tipo de trabalho dentro do mesmo mês.";
        resultadoEl.classList.add("active");
        if(textarea) {
            textarea.disabled = true;
            updateTextareaStats(textarea);
        }
        return;
    }

    if (pontos < reqPontos[tipoDesejado]) {
        resultadoEl.style.backgroundColor = "rgba(220, 53, 69, 0.1)";
        resultadoEl.style.border = "1px dashed var(--danger)";
        resultadoEl.style.color = "var(--danger)";
        resultadoEl.innerHTML = "Negado. O Trabalho Tipo " + tipoDesejado + " exige que você tenha no mínimo " + reqPontosFormatados[tipoDesejado] + " pontos acumulados. Atualmente, você possui apenas " + pontos.toLocaleString('pt-BR') + " pontos.";
        resultadoEl.classList.add("active");
        if(textarea) {
            textarea.disabled = true;
            updateTextareaStats(textarea);
        }
        return;
    }

    resultadoEl.style.backgroundColor = "rgba(25, 135, 84, 0.1)";
    resultadoEl.style.border = "1px dashed var(--success)";
    resultadoEl.style.color = "var(--success)";
    resultadoEl.innerHTML = "Aprovado! Você atende aos requisitos de " + reqPontosFormatados[tipoDesejado] + " pontos e está liberado para iniciar o seu Trabalho Tipo " + tipoDesejado + ".";
    resultadoEl.classList.add("active");
    if(textarea) {
        textarea.disabled = false;
        updateTextareaStats(textarea);
    }
}


function updateTextareaStats(textarea) {
    if (!textarea) return;
    
    const wrapper = textarea.closest('.box-content') || textarea.closest('.verificador-box');
    if (!wrapper) return;

    let sceneTxt = textarea.value;
    let sChars = sceneTxt.length;
    let sParas = sceneTxt.trim() === "" ? 0 : sceneTxt.split(/\n+/).filter(p => p.trim().length > 0).length;
    
    let minC = parseInt(textarea.getAttribute('data-min-chars')) || 0;

    const tipoDesejadoEl = document.getElementById('tipo-desejado');
    if (tipoDesejadoEl && textarea.id === 'info-sceneText') {
        let typeMin = { "1": 1200, "2": 1800, "3": 3000 };
        minC = typeMin[tipoDesejadoEl.value] || minC;
    }
    
    let charsEl = wrapper.querySelector('.scene-chars');
    let parasEl = wrapper.querySelector('.scene-paras');
    let statusEl = wrapper.querySelector('.scene-status');
    
    if(charsEl) charsEl.textContent = sChars.toLocaleString('pt-BR');
    if(parasEl) parasEl.textContent = sParas.toLocaleString('pt-BR');
    
    if(statusEl && minC > 0) {
        if (textarea.disabled) {
            statusEl.textContent = "(Bloqueado)";
            statusEl.style.color = "#f44336";
        } else {
            if (sChars >= minC) { 
                statusEl.textContent = `(✔️ Alcançou o mínimo de ${minC.toLocaleString('pt-BR')})`; 
                statusEl.style.color = "#4caf50"; 
            } else { 
                let faltam = minC - sChars;
                statusEl.textContent = `(❌ Faltam ${faltam.toLocaleString('pt-BR')})`; 
                statusEl.style.color = "#f44336"; 
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const textareas = document.querySelectorAll('.contador-textarea, #info-sceneText');
    textareas.forEach(ta => {
        ta.addEventListener('input', function() {
            updateTextareaStats(this);
        });
        
        updateTextareaStats(ta);
    });

    document.querySelectorAll('.btn-copiar-contador').forEach(btn => {
        btn.addEventListener('click', function() {
            let wrapper = this.closest('.box-content') || this.closest('.verificador-box');
            if(!wrapper) return;
            
            let textarea = wrapper.querySelector('textarea');
            if (!textarea || !textarea.value) return;
            
            navigator.clipboard.writeText(textarea.value).then(() => {
                let originalText = this.textContent;
                let originalBg = this.style.backgroundColor;
                let originalColor = this.style.color;

                this.textContent = "Texto Copiado!";
                this.style.backgroundColor = "#4caf50";
                this.style.color = "#fff";
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = originalBg;
                    this.style.color = originalColor;
                }, 2000);
            });
        });
    });
    
    if (document.getElementById('pontos-atuais')) {
        verificarTrabalho();
    }
});