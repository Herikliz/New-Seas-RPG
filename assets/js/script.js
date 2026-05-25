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
                    <li><a href="https://herikliz.github.io/New-Seas-RPG-Ficha/">SALVAR FICHA</a></li>
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