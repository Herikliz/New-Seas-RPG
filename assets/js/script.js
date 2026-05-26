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
                    <li><a href="https://herikliz.github.io/new-seas/">SALVAR FICHA</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">ORGANIZAÇÕES <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="governo-mundial.html">GOVERNO MUNDIAL</a></li>
                    <li><a href="marinha.html">MARINHA</a></li>
                    <li><a href="pirata.html">PIRATA</a></li>
                    <li><a href="revolucionarios.html">REVOLUCIONÁRIOS</a></li>
                    <li><a href="tripulacoes.html">TRIPULAÇÕES</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">FORÇA VITAL <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="atributos.html">ATRIBUTOS</a></li>
                    <li><a href="akuma-no-mi.html">AKUMA NO MI</a></li>
                    <li><a href="estamina.html">ESTAMINA</a></li>
                    <li><a href="haki.html">HAKI</a></li>
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
                        <a href="ilhas.html" class="toggle-btn">ILHAS <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="east-blue.html">EAST BLUE</a></li>
                            <li><a href="south-blue.html">SOUTH BLUE</a></li>
                            <li><a href="west-blue.html">WEST BLUE</a></li>
                            <li><a href="north-blue.html">NORTH BLUE</a></li>
                            <li><a href="paraiso.html">PARAÍSO</a></li>
                            <li><a href="novo-mundo.html">NOVO MUNDO</a></li>
                            <li><a href="calm-belt.html">CALM BELT</a></li>
                            <li><a href="ilhas-sem-localizacao-exata.html">ILHAS SEM LOCALIZAÇÃO EXATA</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="historia.html">HISTÓRIA</a></li>
            <li>
                <a href="submundo.html" class="toggle-btn">SUBMUNDO <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="escravos.html">ESCRAVOS</a></li>
                    <li>
                        <a href="#" class="toggle-btn">AKUMA NO MI <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="logia.html">LOGIA</a></li>
                            <li><a href="paramecia.html">PARAMECIA</a></li>
                            <li><a href="zoan.html">ZOAN</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="loja.html" class="toggle-btn">LOJA <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="itens-exclusivos.html">ITENS EXCLUSIVOS</a></li>
                    <li><a href="loja-de-barcos.html">LOJA DE BARCOS</a></li>
                    <li><a href="loja-de-carpinteiro.html">LOJA DE CARPINTEIRO</a></li>
                    <li><a href="loja-de-criadores.html">LOJA DE CRIADORES</a></li>
                    <li><a href="loja-especial.html">LOJA ESPECIAL</a></li>
                    <li>
                        <a href="loja-de-ferreiros.html" class="toggle-btn">LOJA DE FERREIROS <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="escudos.html">ESCUDOS</a></li>
                        </ul>
                    </li>
                    <li><a href="loja-de-meitous.html">LOJA DE MEITOUS</a></li>
                </ul>
            </li>
            <li>
                <a href="impel-down.html" class="toggle-btn">IMPEL DOWN <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="adaptacao.html">ADAPTAÇÃO</a></li>
                </ul>
            </li>
            <li>
                <a href="jornal.html" class="toggle-btn">JORNAL <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="procurados.html">PROCURADOS</a></li>
                    <li><a href="younkous.html">YOUNKOUS</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">MECÂNICAS DO RPG <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="cacadas.html">CAÇADAS</a></li>
                    <li><a href="criacao-de-experimentos.html">CRIAÇÃO DE EXPERIMENTOS</a></li>
                    <li><a href="criacao-de-meitos.html">CRIAÇÃO DE MEITOS</a></li>
                    <li><a href="descoberta-de-artefatos.html">DESCOBERTA DE ARTEFATOS</a></li>
                    <li><a href="dominacoes.html">DOMINAÇÕES</a></li>
                    <li><a href="investimento.html">INVESTIMENTO</a></li>
                    <li><a href="sangue.html">SANGUE</a></li>
                </ul>
            </li>
            <li><a href="regras.html">REGRAS</a></li>
        </ul>
    </aside>
        `;
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