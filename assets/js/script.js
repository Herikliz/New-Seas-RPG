if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);

    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = `
    <button id="sidebar-toggle" class="sidebar-toggle-btn">☰</button>
    <aside class="sidebar">
        <div class="logo-container">
            <div class="logo-text"><a href="index" style="color: inherit; text-decoration: none;">New Seas OP</a></div>
        </div>
        <ul class="nav-links">
            <li><a href="index">INÍCIO</a></li>
            <li>
                <a href="criacao-de-personagem" class="toggle-btn">CRIAÇÃO DE PERSONAGEM <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="aparencias">APARÊNCIAS</a></li>
                    <li><a href="classes">CLASSES</a></li>
                    <li><a href="estilos-de-luta">ESTILOS DE LUTA</a></li>
                    <li><a href="habilidades-unicas">HABILIDADES ÚNICAS</a></li>
                    <li><a href="linhagens">LINHAGENS</a></li>
                    <li><a href="racas">RAÇAS</a></li>
                    <li><a href="https://herikliz.github.io/new-seas/">SALVAR FICHA</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">ORGANIZAÇÕES <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="governo-mundial">GOVERNO MUNDIAL</a></li>
                    <li><a href="marinha">MARINHA</a></li>
                    <li><a href="pirata">PIRATA</a></li>
                    <li><a href="revolucionarios">REVOLUCIONÁRIOS</a></li>
                    <li><a href="tripulacoes">TRIPULAÇÕES</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">FORÇA VITAL <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="atributos">ATRIBUTOS</a></li>
                    <li><a href="akuma-no-mi">AKUMA NO MI</a></li>
                    <li><a href="estamina">ESTAMINA</a></li>
                    <li><a href="haki">HAKI</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">EVOLUÇÃO <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="extra-narrada">EXTRA-NARRADA</a></li>
                    <li><a href="missoes">MISSÕES</a></li>
                    <li><a href="npcs-especiais">NPCS ESPECIAIS</a></li>
                    <li><a href="recrutar-npcs">RECRUTAR NPCS</a></li>
                    <li><a href="trabalho">TRABALHO</a></li>
                    <li><a href="treino">TREINO</a></li>
                </ul>
            </li>
            <li>
                <a href="geografia" class="toggle-btn">GEOGRAFIA <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li>
                        <a href="ilhas" class="toggle-btn">ILHAS <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="east-blue">EAST BLUE</a></li>
                            <li><a href="south-blue">SOUTH BLUE</a></li>
                            <li><a href="west-blue">WEST BLUE</a></li>
                            <li><a href="north-blue">NORTH BLUE</a></li>
                            <li><a href="paraiso">PARAÍSO</a></li>
                            <li><a href="novo-mundo">NOVO MUNDO</a></li>
                            <li><a href="calm-belt">CALM BELT</a></li>
                            <li><a href="ilhas-sem-localizacao-exata">ILHAS SEM LOCALIZAÇÃO EXATA</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="historia">HISTÓRIA</a></li>
            <li>
                <a href="submundo" class="toggle-btn">SUBMUNDO <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="escravos">ESCRAVOS</a></li>
                    <li>
                        <a href="#" class="toggle-btn">AKUMA NO MI <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="logia">LOGIA</a></li>
                            <li><a href="paramecia">PARAMECIA</a></li>
                            <li><a href="zoan">ZOAN</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="loja" class="toggle-btn">LOJA <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="itens-exclusivos">ITENS EXCLUSIVOS</a></li>
                    <li><a href="loja-de-barcos">LOJA DE BARCOS</a></li>
                    <li><a href="loja-de-carpinteiro">LOJA DE CARPINTEIRO</a></li>
                    <li><a href="loja-de-criadores">LOJA DE CRIADORES</a></li>
                    <li><a href="loja-especial">LOJA ESPECIAL</a></li>
                    <li>
                        <a href="loja-de-ferreiros" class="toggle-btn">LOJA DE FERREIROS <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="escudos">ESCUDOS</a></li>
                        </ul>
                    </li>
                    <li><a href="loja-de-meitous">LOJA DE MEITOUS</a></li>
                </ul>
            </li>
            <li>
                <a href="impel-down" class="toggle-btn">IMPEL DOWN <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="adaptacao">ADAPTAÇÃO</a></li>
                </ul>
            </li>
            <li>
                <a href="jornal" class="toggle-btn">JORNAL <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="procurados">PROCURADOS</a></li>
                    <li><a href="younkous">YOUNKOUS</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">MECÂNICAS DO RPG <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="cacadas">CAÇADAS</a></li>
                    <li><a href="criacao-de-experimentos">CRIAÇÃO DE EXPERIMENTOS</a></li>
                    <li><a href="criacao-de-meitos">CRIAÇÃO DE MEITOS</a></li>
                    <li><a href="descoberta-de-artefatos">DESCOBERTA DE ARTEFATOS</a></li>
                    <li><a href="dominacoes">DOMINAÇÕES</a></li>
                    <li><a href="investimento">INVESTIMENTO</a></li>
                    <li><a href="sangue">SANGUE</a></li>
                </ul>
            </li>
            <li><a href="regras">REGRAS</a></li>
        </ul>
    </aside>
        `;
    }

    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('sidebar-collapsed');
        });
    }

    let path = window.location.pathname.split('/').pop() || 'index';
    path = path.replace('.html', '');
    if (path === '') path = 'index';
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

    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if(themeToggleBtn) themeToggleBtn.textContent = '☀️';
    } else {
        if(themeToggleBtn) themeToggleBtn.textContent = '🌙';
    }
    
    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            let theme = 'light';
            if (document.body.classList.contains('dark-theme')) {
                theme = 'dark';
                themeToggleBtn.textContent = '☀️';
            } else {
                themeToggleBtn.textContent = '🌙';
            }
            localStorage.setItem('theme', theme);
        });
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
            const isIndexFile = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('index') || window.location.pathname.endsWith('/') || window.location.pathname === '';
            const isCriacaoFile = window.location.pathname.endsWith('criacao-de-personagem.html') || window.location.pathname.endsWith('criacao-de-personagem');

            if (href === '#') {
                return;
            }

            if ((href === 'index' && isIndexFile) || (href === 'criacao-de-personagem' && isCriacaoFile)) {
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