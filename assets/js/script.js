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
            <li>
                <a href="index.html" class="toggle-btn">INÍCIO <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="area-restrita.html">ÁREA RESTRITA ADMINISTRATIVA</a></li>
                </ul>
            </li>
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
                <a href="geografia.html" class="toggle-btn">GEOGRAFIA <span class="arrow">▼</span></a>
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

    const geoMarDestinoEl = document.getElementById('geo-mar-destino');
    const geoIsNavegadorEl = document.getElementById('geo-is-navegador');
    if (geoMarDestinoEl && geoIsNavegadorEl && textarea.id === 'geo-sceneText') {
        let minCharsGeo = 1200;
        let mar = geoMarDestinoEl.value;
        let nav = geoIsNavegadorEl.value;
        
        if (mar === 'blues') {
            minCharsGeo = nav === 'sim' ? 720 : 1200;
        } else if (mar === 'paraiso') {
            minCharsGeo = nav === 'sim' ? 1440 : 2400;
        } else if (mar === 'novomundo') {
            minCharsGeo = nav === 'sim' ? 2400 : 3600;
        }
        minC = minCharsGeo;
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

    document.querySelectorAll('.auto-calc-geo').forEach(select => {
        select.addEventListener('change', () => {
            let textarea = document.getElementById('geo-sceneText');
            if (textarea) updateTextareaStats(textarea);
        });
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

// ==========================================
// SISTEMA DE GEOGRAFIA E NAVEGAÇÃO
// ==========================================
const mapGrids = document.querySelectorAll('.grid-overlay');
if (mapGrids.length > 0) {
    const calcContainer = document.getElementById('calculadora-rota-container');
    if (calcContainer) {
        calcContainer.innerHTML = `
    <div class="calc-floating">
        <div class="calc-title">Calculadora de Rota ▲</div>
        
        <div class="input-group">
            <label>Distância (Quadrados selecionados)</label>
            <input type="text" id="quadrados" value="0" readonly>
        </div>

        <div class="input-group">
            <label>Meio de Transporte</label>
            <select id="barco">
                <option value="0" disabled selected>Selecione...</option>
                <optgroup label="Barcos Civis">
                    <option value="12">Bote (12h/q)</option>
                    <option value="10">Barco Pesqueiro (10h/q)</option>
                    <option value="8">Escuna (8h/q)</option>
                    <option value="8">Brigue (8h/q)</option>
                    <option value="7">Caravela (7h/q)</option>
                    <option value="6">Fragata (6h/q)</option>
                    <option value="5">Gran General (5h/q)</option>
                </optgroup>
                <optgroup label="Marinha/Governo">
                    <option value="9">C-15 Kenpachi (9h/q)</option>
                    <option value="7">Z-10 Perci (7h/q)</option>
                    <option value="6">B-47 Hajime (6h/q)</option>
                    <option value="5">T-33 Apollo (5h/q)</option>
                    <option value="4">K-55 Mereoleona (4h/q)</option>
                    <option value="3">A-1 Atlas (3h/q)</option>
                </optgroup>
                <optgroup label="Especiais">
                    <option value="2">Pérola Negra (2h/q)</option>
                    <option value="5">Holandês Voador (5h/q)</option>
                    <option value="4">Vingança da Rainha Ana (4h/q)</option>
                    <option value="4">Silent Mary (4h/q)</option>
                    <option value="4">Pequod (4h/q)</option>
                </optgroup>
                <optgroup label="Individual">
                    <option value="18">Nado Comum (18h/q)</option>
                    <option value="11">Nado Tritão/Sereiano (11h/q)</option>
                    <option value="5">Voo (5h/q)</option>
                </optgroup>
                <optgroup label="Outros">
                    <option value="custom">Personalizado</option>
                </optgroup>
            </select>
            <input type="number" id="tempo-custom" placeholder="Horas por quadrado" min="1" style="display: none; margin-top: 10px; width: 100%; padding: 10px; border-radius: var(--border-radius); border: 1px solid var(--sidebar-border); background: var(--bg-color); color: var(--text-color); font-family: 'Comfortaa', sans-serif; box-sizing: border-box;">
        </div>

        <div class="input-group checkbox-group" id="timoneiro-container">
            <input type="checkbox" id="timoneiro">
            <label for="timoneiro">Com Timoneiro (-50% tempo)</label>
        </div>

        <div class="resultado-nav" id="resultadoTexto">Tempo Total: 0h</div>

        <button class="btn-copy-relatorio" onclick="copiarRelatorio(this)">Copiar Relatório</button>
        <button class="btn-clear" onclick="limparQuadrados()">Limpar Quadrados</button>
    </div>
        `;
    }

    const inputQuadrados = document.getElementById('quadrados');
    const selectBarco = document.getElementById('barco');
    const tempoCustomInput = document.getElementById('tempo-custom');
    const checkboxTimoneiro = document.getElementById('timoneiro');
    const timoneiroContainer = document.getElementById('timoneiro-container');
    const resultadoTexto = document.getElementById('resultadoTexto');
    const cols = 21;
    const rows = 14;

    const redLineZones = [
        { group: 'left', index: 0, x: 20, y: 0 }, { group: 'left', index: 0, x: 20, y: 1 }, { group: 'left', index: 0, x: 20, y: 2 }, { group: 'left', index: 0, x: 20, y: 3 }, { group: 'left', index: 0, x: 20, y: 4 }, { group: 'left', index: 0, x: 20, y: 5 }, { group: 'left', index: 0, x: 20, y: 6 }, { group: 'left', index: 0, x: 20, y: 7 }, { group: 'left', index: 0, x: 20, y: 8 }, { group: 'left', index: 0, x: 20, y: 9 }, { group: 'left', index: 0, x: 20, y: 10 }, { group: 'left', index: 0, x: 20, y: 11 }, { group: 'left', index: 0, x: 20, y: 12 }, { group: 'left', index: 0, x: 20, y: 13 },
        { group: 'right', index: 0, x: 0, y: 0 }, { group: 'right', index: 0, x: 0, y: 1 }, { group: 'right', index: 0, x: 0, y: 2 }, { group: 'right', index: 0, x: 0, y: 3 }, { group: 'right', index: 0, x: 0, y: 4 }, { group: 'right', index: 0, x: 0, y: 5 }, { group: 'right', index: 0, x: 0, y: 6 }, { group: 'right', index: 0, x: 0, y: 7 }, { group: 'right', index: 0, x: 0, y: 8 }, { group: 'right', index: 0, x: 0, y: 9 }, { group: 'right', index: 0, x: 0, y: 10 }, { group: 'right', index: 0, x: 0, y: 11 }, { group: 'right', index: 0, x: 0, y: 12 }, { group: 'right', index: 0, x: 0, y: 13 },
        { group: 'left', index: 1, x: 20, y: 0 }, { group: 'left', index: 1, x: 20, y: 1 }, { group: 'left', index: 1, x: 20, y: 2 }, { group: 'left', index: 1, x: 20, y: 3 }, { group: 'left', index: 1, x: 20, y: 4 }, { group: 'left', index: 1, x: 20, y: 5 }, { group: 'left', index: 1, x: 20, y: 6 }, { group: 'left', index: 1, x: 20, y: 7 }, { group: 'left', index: 1, x: 20, y: 8 }, { group: 'left', index: 1, x: 20, y: 9 }, { group: 'left', index: 1, x: 20, y: 10 }, { group: 'left', index: 1, x: 20, y: 11 }, { group: 'left', index: 1, x: 20, y: 12 }, { group: 'left', index: 1, x: 20, y: 13 },
        { group: 'right', index: 1, x: 0, y: 0 }, { group: 'right', index: 1, x: 0, y: 1 }, { group: 'right', index: 1, x: 0, y: 2 }, { group: 'right', index: 1, x: 0, y: 3 }, { group: 'right', index: 1, x: 0, y: 4 }, { group: 'right', index: 1, x: 0, y: 5 }, { group: 'right', index: 1, x: 0, y: 6 }, { group: 'right', index: 1, x: 0, y: 7 }, { group: 'right', index: 1, x: 0, y: 8 }, { group: 'right', index: 1, x: 0, y: 9 }, { group: 'right', index: 1, x: 0, y: 10 }, { group: 'right', index: 1, x: 0, y: 11 }, { group: 'right', index: 1, x: 0, y: 12 }, { group: 'right', index: 1, x: 0, y: 13 },
        { group: 'left', index: 2, x: 20, y: 0 }, { group: 'left', index: 2, x: 20, y: 1 }, { group: 'left', index: 2, x: 20, y: 2 }, { group: 'left', index: 2, x: 20, y: 3 }, { group: 'left', index: 2, x: 20, y: 4 }, { group: 'left', index: 2, x: 20, y: 5 }, { group: 'left', index: 2, x: 20, y: 6 }, { group: 'left', index: 2, x: 20, y: 7 }, { group: 'left', index: 2, x: 20, y: 8 }, { group: 'left', index: 2, x: 20, y: 9 }, { group: 'left', index: 2, x: 20, y: 10 }, { group: 'left', index: 2, x: 20, y: 11 }, { group: 'left', index: 2, x: 20, y: 12 }, { group: 'left', index: 2, x: 20, y: 13 },
        { group: 'right', index: 2, x: 0, y: 0 }, { group: 'right', index: 2, x: 0, y: 1 }, { group: 'right', index: 2, x: 0, y: 2 }, { group: 'right', index: 2, x: 0, y: 3 }, { group: 'right', index: 2, x: 0, y: 4 }, { group: 'right', index: 2, x: 0, y: 5 }, { group: 'right', index: 2, x: 0, y: 6 }, { group: 'right', index: 2, x: 0, y: 7 }, { group: 'right', index: 2, x: 0, y: 8 }, { group: 'right', index: 2, x: 0, y: 9 }, { group: 'right', index: 2, x: 0, y: 10 }, { group: 'right', index: 2, x: 0, y: 11 }, { group: 'right', index: 2, x: 0, y: 12 }, { group: 'right', index: 2, x: 0, y: 13 },
        { group: 'left', index: 3, x: 20, y: 0 }, { group: 'left', index: 3, x: 20, y: 1 }, { group: 'left', index: 3, x: 20, y: 2 }, { group: 'left', index: 3, x: 20, y: 3 }, { group: 'left', index: 3, x: 20, y: 4 }, { group: 'left', index: 3, x: 20, y: 5 }, { group: 'left', index: 3, x: 20, y: 6 }, { group: 'left', index: 3, x: 20, y: 7 }, { group: 'left', index: 3, x: 20, y: 8 }, { group: 'left', index: 3, x: 20, y: 9 }, { group: 'left', index: 3, x: 20, y: 10 }, { group: 'left', index: 3, x: 20, y: 11 }, { group: 'left', index: 3, x: 20, y: 12 }, { group: 'left', index: 3, x: 20, y: 13 },
        { group: 'right', index: 3, x: 0, y: 0 }, { group: 'right', index: 3, x: 0, y: 1 }, { group: 'right', index: 3, x: 0, y: 2 }, { group: 'right', index: 3, x: 0, y: 3 }, { group: 'right', index: 3, x: 0, y: 4 }, { group: 'right', index: 3, x: 0, y: 5 }, { group: 'right', index: 3, x: 0, y: 6 }, { group: 'right', index: 3, x: 0, y: 7 }, { group: 'right', index: 3, x: 0, y: 8 }, { group: 'right', index: 3, x: 0, y: 9 }, { group: 'right', index: 3, x: 0, y: 10 }, { group: 'right', index: 3, x: 0, y: 11 }, { group: 'right', index: 3, x: 0, y: 12 }, { group: 'right', index: 3, x: 0, y: 13 },
        { group: 'left', index: 4, x: 20, y: 0 }, { group: 'left', index: 4, x: 20, y: 1 }, { group: 'left', index: 4, x: 20, y: 2 }, { group: 'left', index: 4, x: 20, y: 3 }, { group: 'left', index: 4, x: 20, y: 4 }, { group: 'left', index: 4, x: 20, y: 5 }, { group: 'left', index: 4, x: 20, y: 6 }, { group: 'left', index: 4, x: 20, y: 7 }, { group: 'left', index: 4, x: 20, y: 8 }, { group: 'left', index: 4, x: 20, y: 9 }, { group: 'left', index: 4, x: 20, y: 10 }, { group: 'left', index: 4, x: 20, y: 11 }, { group: 'left', index: 4, x: 20, y: 12 }, { group: 'left', index: 4, x: 20, y: 13 },
        { group: 'right', index: 4, x: 0, y: 0 }, { group: 'right', index: 4, x: 0, y: 1 }, { group: 'right', index: 4, x: 0, y: 2 }, { group: 'right', index: 4, x: 0, y: 3 }, { group: 'right', index: 4, x: 0, y: 4 }, { group: 'right', index: 4, x: 0, y: 5 }, { group: 'right', index: 4, x: 0, y: 6 }, { group: 'right', index: 4, x: 0, y: 7 }, { group: 'right', index: 4, x: 0, y: 8 }, { group: 'right', index: 4, x: 0, y: 9 }, { group: 'right', index: 4, x: 0, y: 10 }, { group: 'right', index: 4, x: 0, y: 11 }, { group: 'right', index: 4, x: 0, y: 12 }, { group: 'right', index: 4, x: 0, y: 13 }
    ];

    function isRedZone(group, index, x, y) {
        return redLineZones.some(z => z.group === group && z.index === index && z.x === x && z.y === y);
    }

    document.querySelectorAll('.geo-layout .map-container').forEach(container => {
        const btn = document.createElement('button');
        btn.className = 'copy-map-btn';
        btn.innerText = '📸 Copiar Mapa';
        btn.onclick = () => copiarMapa(container, btn);
        container.parentElement.insertBefore(btn, container);
    });

    function atualizarContagemQuadrados() {
        const totalSelected = document.querySelectorAll('.grid-cell.selected').length;
        inputQuadrados.value = totalSelected;
        calcularTempo();
    }

    window.limparQuadrados = function() {
        document.querySelectorAll('.grid-cell.selected').forEach(c => c.classList.remove('selected'));
        inputQuadrados.value = "0";
        calcularTempo();
    }

    mapGrids.forEach(grid => {
        const group = grid.dataset.group;
        const index = parseInt(grid.dataset.index);

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.dataset.x = x;
                cell.dataset.y = y;
                cell.dataset.group = group;
                cell.dataset.index = index;
                
                if (isRedZone(group, index, x, y)) {
                    cell.classList.add('red-zone');
                }
                
                cell.addEventListener('click', function() {
                    if (this.classList.contains('selected')) {
                        this.classList.remove('selected');
                        atualizarContagemQuadrados();
                        return;
                    }

                    const selectedElements = document.querySelectorAll('.grid-cell.selected');
                    
                    if (selectedElements.length === 0) {
                        this.classList.add('selected');
                    } else {
                        let cx = parseInt(this.dataset.x);
                        let cy = parseInt(this.dataset.y);
                        let cg = this.dataset.group;
                        let ci = parseInt(this.dataset.index);
                        
                        let isAdjacent = false;
                        let isCurrentRedZone = isRedZone(cg, ci, cx, cy);

                        selectedElements.forEach(el => {
                            let sx = parseInt(el.dataset.x);
                            let sy = parseInt(el.dataset.y);
                            let sg = el.dataset.group;
                            let si = parseInt(el.dataset.index);

                            if (isCurrentRedZone && isRedZone(sg, si, sx, sy)) {
                                isAdjacent = true;
                                return;
                            }

                            if (cg === sg) {
                                if (ci === si) {
                                    if (Math.abs(cx - sx) <= 1 && Math.abs(cy - sy) <= 1) {
                                        isAdjacent = true;
                                    }
                                } else if (ci === si + 1) {
                                    if (cy === 0 && sy === rows - 1 && Math.abs(cx - sx) <= 1) {
                                        isAdjacent = true;
                                    }
                                } else if (ci === si - 1) {
                                    if (cy === rows - 1 && sy === 0 && Math.abs(cx - sx) <= 1) {
                                        isAdjacent = true;
                                    }
                                }
                            }
                        });

                        if (isAdjacent) {
                            this.classList.add('selected');
                        }
                    }
                    atualizarContagemQuadrados();
                });

                grid.appendChild(cell);
            }
        }
    });

    function calcularTempo() {
        const quadrados = parseInt(inputQuadrados.value) || 0;
        let tempoPorQuadrado = 0;
        let isIndividual = false;

        if (selectBarco.value === 'custom') {
            tempoPorQuadrado = parseInt(tempoCustomInput.value) || 0;
        } else {
            tempoPorQuadrado = parseInt(selectBarco.value) || 0;
            if (selectBarco.selectedIndex > 0) {
                isIndividual = selectBarco.options[selectBarco.selectedIndex].parentNode.label === "Individual";
            }
        }

        if (isIndividual) {
            timoneiroContainer.style.display = 'none';
            checkboxTimoneiro.checked = false;
        } else {
            timoneiroContainer.style.display = 'flex';
        }

        if (quadrados > 0 && tempoPorQuadrado > 0) {
            let horasTotais = quadrados * tempoPorQuadrado;
            
            if (checkboxTimoneiro.checked) {
                horasTotais = horasTotais / 2;
            }

            const agora = new Date();
            const dataChegada = new Date(agora.getTime() + (horasTotais * 60 * 60 * 1000));
            
            const dia = String(dataChegada.getDate()).padStart(2, '0');
            const mes = String(dataChegada.getMonth() + 1).padStart(2, '0');
            const ano = dataChegada.getFullYear();
            const hora = String(dataChegada.getHours()).padStart(2, '0');
            const minuto = String(dataChegada.getMinutes()).padStart(2, '0');
            
            const stringData = `${hora}h${minuto} do dia ${dia}/${mes}/${ano}`;

            const totalMinutos = horasTotais * 60;
            const totalHorasFloor = Math.floor(totalMinutos / 60);
            const minutosRestantes = totalMinutos % 60;

            const dias = Math.floor(totalHorasFloor / 24);
            const horasRestantesDias = totalHorasFloor % 24;
            
            let textoDuracaoBase = "";
            if (dias > 0) {
                let strDias = dias === 1 ? "1 dia" : dias + " dias";
                let strHoras = horasRestantesDias === 1 ? "1 hora" : horasRestantesDias + " horas";
                
                if (horasRestantesDias === 0 && minutosRestantes === 0) {
                    textoDuracaoBase = strDias;
                } else if (minutosRestantes === 0) {
                    textoDuracaoBase = `${strDias} e ${strHoras}`;
                } else {
                    textoDuracaoBase = `${strDias}, ${strHoras} e ${minutosRestantes} minutos`;
                }
            } else {
                let strHoras = totalHorasFloor === 1 ? "1 hora" : totalHorasFloor + " horas";
                if (minutosRestantes === 0) {
                    textoDuracaoBase = strHoras;
                } else {
                    textoDuracaoBase = `${strHoras} e ${minutosRestantes} minutos`;
                }
            }

            let textoFormatadoExtra = `(${totalHorasFloor}h ${minutosRestantes}m)`;
            let textoDuracao = `${textoDuracaoBase} ${textoFormatadoExtra}`;

            const estaminaTotal = (quadrados * 2000).toLocaleString('pt-BR');
            let infoEstamina = "";
            if (isIndividual) {
                infoEstamina = `<br>Custo de Estamina: ${estaminaTotal}`;
            }

            resultadoTexto.innerHTML = `Chegada: ${stringData}<br><small>Duração: ${textoDuracao}${infoEstamina}</small>`;
        } else {
            resultadoTexto.innerHTML = `Tempo Total: 0h`;
        }
    }

    window.copiarRelatorio = function(btn) {
        const quadrados = parseInt(inputQuadrados.value) || 0;
        let tempoPorQuadrado = 0;
        if (selectBarco.value === 'custom') {
            tempoPorQuadrado = parseInt(tempoCustomInput.value) || 0;
        } else {
            tempoPorQuadrado = parseInt(selectBarco.value) || 0;
        }
        
        if (quadrados <= 0 || tempoPorQuadrado <= 0) {
            const originalText = btn.innerText;
            btn.innerText = '❌ Rota Inválida!';
            btn.style.backgroundColor = '#d32f2f';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--accent-color)';
            }, 1000);
            return;
        }

        let isIndividual = false;
        if (selectBarco.selectedIndex > 0) {
            isIndividual = selectBarco.options[selectBarco.selectedIndex].parentNode.label === "Individual";
        }
        
        let horasTotais = quadrados * tempoPorQuadrado;
        if (!isIndividual && checkboxTimoneiro.checked) {
            horasTotais = horasTotais / 2;
        }

        const agora = new Date();
        const dataChegada = new Date(agora.getTime() + (horasTotais * 60 * 60 * 1000));
        
        const diaSaida = String(agora.getDate()).padStart(2, '0');
        const mesSaida = String(agora.getMonth() + 1).padStart(2, '0');
        const anoSaida = agora.getFullYear();
        const horaSaida = String(agora.getHours()).padStart(2, '0');
        const minSaida = String(agora.getMinutes()).padStart(2, '0');
        const stringSaida = `${horaSaida}h${minSaida} do dia ${diaSaida}/${mesSaida}/${anoSaida}`;

        const dia = String(dataChegada.getDate()).padStart(2, '0');
        const mes = String(dataChegada.getMonth() + 1).padStart(2, '0');
        const ano = dataChegada.getFullYear();
        const hora = String(dataChegada.getHours()).padStart(2, '0');
        const minuto = String(dataChegada.getMinutes()).padStart(2, '0');
        const stringChegada = `${hora}h${minuto} do dia ${dia}/${mes}/${ano}`;

        const estaminaTotal = (quadrados * 2000).toLocaleString('pt-BR');
        let nomeBarco = selectBarco.options[selectBarco.selectedIndex].text;
        if (selectBarco.value === 'custom') {
            nomeBarco = `Personalizado (${tempoPorQuadrado}h/q)`;
        }

        let papel = "Navegador";
        if (!isIndividual && checkboxTimoneiro.checked) {
            papel = "Timoneiro";
        }

        let relatorio = `*Saindo de:* [${stringSaida}]\n`;
        relatorio += `*Destino Final:* [${stringChegada}]\n\n`;
        relatorio += `*Meio de Transporte:* ${nomeBarco}\n\n`;
        
        if (isIndividual) {
            relatorio += `*Custo de Estamina:* ${estaminaTotal}\n`;
        }
        
        relatorio += `*${papel}:* \n`;
        relatorio += `*Tripulantes:* `;

        navigator.clipboard.writeText(relatorio).then(() => {
            const originalText = btn.innerText;
            btn.innerText = '✅ Relatório Copiado!';
            btn.style.backgroundColor = '#00b37e';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--accent-color)';
            }, 2000);
        }).catch(err => {
            const originalText = btn.innerText;
            btn.innerText = '❌ Erro ao copiar';
            btn.style.backgroundColor = '#d32f2f';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--accent-color)';
            }, 2000);
        });
    }

    function copiarMapa(container, btn) {
        const img = container.querySelector('img');
        if (!img || !img.complete) {
            const originalText = btn.innerText;
            btn.innerText = '❌ Aguarde carregar';
            btn.style.backgroundColor = '#d32f2f';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--accent-color)';
            }, 1000);
            return;
        }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const hasGrid = container.querySelector('.grid-overlay');
        
        if (hasGrid) {
            const cellWidth = canvas.width / cols;
            const cellHeight = canvas.height / rows;
            
            ctx.lineWidth = Math.max(1, canvas.width / 1500); 
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.beginPath();
            for(let i = 1; i < cols; i++) {
                ctx.moveTo(i * cellWidth, 0);
                ctx.lineTo(i * cellWidth, canvas.height);
            }
            for(let i = 1; i < rows; i++) {
                ctx.moveTo(0, i * cellHeight);
                ctx.lineTo(canvas.width, i * cellHeight);
            }
            ctx.stroke();
            
            const gridCells = container.querySelectorAll('.grid-cell.selected');
            const radius = Math.min(cellWidth, cellHeight) * 0.15; 
            
            gridCells.forEach(cell => {
                const x = parseInt(cell.dataset.x);
                const y = parseInt(cell.dataset.y);
                const cx = (x + 0.5) * cellWidth;
                const cy = (y + 0.5) * cellHeight;
                
                ctx.fillStyle = 'rgba(103, 58, 183, 0.4)';
                ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
                
                ctx.beginPath();
                ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
                ctx.lineWidth = radius * 0.3;
                ctx.strokeStyle = '#000000';
                ctx.stroke();
            });
        }
        
        canvas.toBlob(async function(blob) {
            try {
                const item = new ClipboardItem({ "image/png": blob });
                await navigator.clipboard.write([item]);
                const originalText = btn.innerText;
                btn.innerText = '✅ Copiado!';
                btn.style.backgroundColor = '#00b37e';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = 'var(--accent-color)';
                }, 2000);
            } catch (err) {
                const originalText = btn.innerText;
                btn.innerText = '❌ Erro ao copiar';
                btn.style.backgroundColor = '#d32f2f';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = 'var(--accent-color)';
                }, 2000);
            }
        }, 'image/png');
    }

    selectBarco.addEventListener('change', function() {
        if (this.value === 'custom') {
            tempoCustomInput.style.display = 'block';
        } else {
            tempoCustomInput.style.display = 'none';
            tempoCustomInput.value = '';
        }
        calcularTempo();
    });
    if (tempoCustomInput) {
        tempoCustomInput.addEventListener('input', calcularTempo);
    }
    checkboxTimoneiro.addEventListener('change', calcularTempo);
}

function updateGeoWriterStats(box) {
    if (!box) return;
    let textarea = box.querySelector('textarea');
    let btn = box.querySelector('.btn-toggle-nav');
    if (!textarea || !btn) return;
    let mar = box.getAttribute('data-mar');
    let status = btn.getAttribute('data-status');
    let textVal = textarea.value;
    let chars = textVal.length;
    let paras = textVal.trim() === "" ? 0 : textVal.split(/\n+/).filter(p => p.trim().length > 0).length;
    let minC = 1200;
    if (mar === 'blues') {
        minC = (status === 'sim') ? 720 : 1200;
    } else if (mar === 'paraiso') {
        minC = (status === 'sim') ? 1440 : 2400;
    } else if (mar === 'novomundo') {
        minC = (status === 'sim') ? 2400 : 3600;
    } else if (mar === 'calmbelt') {
        minC = (status === 'sim') ? 3000 : 4500;
    }
    let charsEl = box.querySelector('.scene-chars');
    let parasEl = box.querySelector('.scene-paras');
    let statusEl = box.querySelector('.scene-status');
    if (charsEl) charsEl.textContent = chars.toLocaleString('pt-BR');
    if (parasEl) parasEl.textContent = paras.toLocaleString('pt-BR');
    if (statusEl) {
        if (chars >= minC) {
            statusEl.textContent = "(✔️ Alcançou o mínimo de " + minC.toLocaleString('pt-BR') + ")";
            statusEl.style.color = "#4caf50";
        } else {
            let faltam = minC - chars;
            statusEl.textContent = "(❌ Faltam " + faltam.toLocaleString('pt-BR') + ")";
            statusEl.style.color = "#f44336";
        }
    }
}
document.querySelectorAll('.geo-writer-box').forEach(box => {
    let textarea = box.querySelector('textarea');
    let btn = box.querySelector('.btn-toggle-nav');
    let btnCopiar = box.querySelector('.btn-copiar-contador');
    if (textarea) {
        textarea.addEventListener('input', () => {
            updateGeoWriterStats(box);
        });
        updateGeoWriterStats(box);
    }
    if (btn) {
        btn.addEventListener('click', () => {
            let current = btn.getAttribute('data-status');
            if (current === 'sim') {
                btn.setAttribute('data-status', 'nao');
                btn.textContent = 'Jogador Navegador: Não';
            } else {
                btn.setAttribute('data-status', 'sim');
                btn.textContent = 'Jogador Navegador: Sim';
            }
            updateGeoWriterStats(box);
        });
    }
    if (btnCopiar && textarea) {
        btnCopiar.addEventListener('click', () => {
            if (!textarea.value) return;
            navigator.clipboard.writeText(textarea.value).then(() => {
                let originalText = btnCopiar.textContent;
                let originalBg = btnCopiar.style.backgroundColor;
                let originalColor = btnCopiar.style.color;
                btnCopiar.textContent = "Texto Copiado!";
                btnCopiar.style.backgroundColor = "#4caf50";
                btnCopiar.style.color = "#fff";
                setTimeout(() => {
                    btnCopiar.textContent = originalText;
                    btnCopiar.style.backgroundColor = originalBg;
                    btnCopiar.style.color = originalColor;
                }, 2000);
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const adminBox = document.getElementById('admin-generator-extra');
    if (adminBox) {
        const inputBase = document.getElementById('pontosBase');
        const checkHaki = document.getElementById('checkHaki');
        const checkAkuma = document.getElementById('checkAkuma');
        const selectLinhagem = document.getElementById('linhagem');
        const inputNpc = document.getElementById('npcNome');
        const radiosBarco = document.querySelectorAll('input[name="barco"]');
        const btnClearBarco = document.getElementById('btn-clear-barco');
        const preResultado = document.getElementById('resultado');
        const btnCopiar = document.getElementById('btn-copiar-resultado');

        function formatarNum(num) {
            return num.toLocaleString('pt-BR');
        }

        function gerarTextoRecompensa() {
            let valorInput = inputBase.value.replace(/\D/g, '');
            let valorBase = parseInt(valorInput, 10) || 0;
            
            const calcHakiAkuma = Math.floor(valorBase / 2);
            const calcBerries = valorBase * 50000;
            
            const npcNomeStr = inputNpc.value.trim();
            const barcoSelecionado = document.querySelector('input[name="barco"]:checked');
            const linhagemSelecionada = selectLinhagem.value;
            
            let textoFinal = "\u0060\u0060\u0060Recompensas da Extra-Narrada:\n";
            textoFinal += "Pontos de Atributo: " + formatarNum(valorBase) + "\n";
            
            if (checkHaki.checked) {
                textoFinal += "Pontos de Haki: " + formatarNum(calcHakiAkuma) + "\n";
            }
            if (checkAkuma.checked) {
                textoFinal += "Pontos de Akuma no Mi: " + formatarNum(calcHakiAkuma) + "\n";
            }
            
            textoFinal += "Berries: ฿" + formatarNum(calcBerries);
            
            if (npcNomeStr !== '') {
                textoFinal += "\nNPC Especial: " + npcNomeStr;
            }
            if (barcoSelecionado) {
                textoFinal += "\nBarco: " + barcoSelecionado.value;
            }
            if (linhagemSelecionada !== '') {
                textoFinal += "\nLinhagem Descoberta: " + linhagemSelecionada;
            }

            textoFinal += "\u0060\u0060\u0060";
            
            preResultado.textContent = textoFinal;
        }

        inputBase.addEventListener('input', function() {
            let valor = this.value.replace(/\D/g, '');
            if (valor !== '') {
                this.value = formatarNum(parseInt(valor, 10));
            }
            gerarTextoRecompensa();
        });

        checkHaki.addEventListener('change', gerarTextoRecompensa);
        checkAkuma.addEventListener('change', gerarTextoRecompensa);
        selectLinhagem.addEventListener('change', gerarTextoRecompensa);
        inputNpc.addEventListener('input', gerarTextoRecompensa);
        
        radiosBarco.forEach(radio => {
            radio.addEventListener('change', gerarTextoRecompensa);
        });

        btnClearBarco.addEventListener('click', () => {
            radiosBarco.forEach(r => r.checked = false);
            gerarTextoRecompensa();
        });

        btnCopiar.addEventListener('click', () => {
            if (!preResultado.textContent) return;
            navigator.clipboard.writeText(preResultado.textContent).then(() => {
                let originalText = btnCopiar.textContent;
                let originalBg = btnCopiar.style.backgroundColor;
                let originalColor = btnCopiar.style.color;

                btnCopiar.textContent = "Texto Copiado!";
                btnCopiar.style.backgroundColor = "#4caf50";
                btnCopiar.style.color = "#fff";
                
                setTimeout(() => {
                    btnCopiar.textContent = originalText;
                    btnCopiar.style.backgroundColor = originalBg;
                    btnCopiar.style.color = originalColor;
                }, 2000);
            });
        });

        gerarTextoRecompensa();
    }
});