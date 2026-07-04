// ==========================================
// INJEÇÃO GLOBAL DE FAVICON
// ==========================================
(function injectFavicon() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'assets/imagens/favicon.png';
    document.head.appendChild(link);
})();

// ==========================================
// INJEÇÃO GLOBAL DE ESTILOS
// ==========================================
(function injectGlobalStyles() {
    const globalStyles = `
/* ==========================================
   ESTILOS GERAIS (Injetados via JS)
   ========================================== */
.bounty-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 30px; padding: 20px 15px; justify-items: center; }
.bounty-card { background: var(--sidebar-bg); border: 2px solid var(--sidebar-border); border-radius: 12px; overflow: hidden; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease; width: 100%; max-width: 350px; }
.bounty-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 15px 30px rgba(211, 47, 47, 0.3); border-color: var(--accent-color); }
.bounty-image { width: 100%; aspect-ratio: 3184 / 4160; object-fit: cover; display: block; border-bottom: 2px solid var(--sidebar-border); }
    .bounty-copy-icon { opacity: 0; cursor: pointer; transition: opacity 0.2s ease, color 0.2s ease; font-size: 16px; position: absolute; right: -25px; top: 50%; transform: translateY(-50%); }
    .bounty-name:hover .bounty-copy-icon, .bounty-value:hover .bounty-copy-icon, .gallery-title:hover .bounty-copy-icon, .gallery-subtitle:hover .bounty-copy-icon { opacity: 1; }
.bounty-info { padding: 15px; text-align: center; }
.bounty-name { font-family: 'Quantico', sans-serif; font-size: 20px; color: var(--accent-color); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.bounty-controls { text-align: center; margin-bottom: 20px; }
.bounty-sort-select { padding: 10px 15px; border-radius: 8px; border: 1px solid var(--sidebar-border); background: var(--sidebar-bg); color: var(--text-color); font-family: 'Comfortaa', sans-serif; font-size: 16px; outline: none; cursor: pointer; transition: all 0.3s ease; }
.bounty-sort-select:focus { border-color: var(--accent-color); }
.bounty-value { font-family: 'Quantico', sans-serif !important; font-size: 20px; color: red !important; margin: 10px 0 0 0; font-weight: bold; }


/* ========================================== */
.toggle-content { display: block; overflow: hidden; }
.toggle-content.collapsed { display: none; }
.toggle-icon { display: inline-block; font-size: 0.8em; vertical-align: middle; transition: transform 0.3s ease; margin-left: 10px; }
.toggle-title { cursor: pointer; }
.toggle-title.collapsed .toggle-icon { transform: rotate(-90deg); }
.rank-box { border: 2px solid var(--sidebar-border); border-radius: var(--border-radius); padding: 30px; margin-bottom: 30px; background-color: var(--sidebar-bg); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
body.dark-mode .rank-box { box-shadow: 0 4px 15px rgba(156, 39, 176, 0.15); }
.rank-title { padding-bottom: 10px; border-bottom: 1px solid var(--sidebar-border); font-size: 32px !important; text-align: center; color: var(--accent-color); margin-bottom: 25px; }
.box-content { border-top: 1px dashed var(--sidebar-border); padding-top: 30px; margin-top: 30px; }
.contador-textarea { background-color: var(--bg-color); color: var(--text-color); border: 2px solid var(--sidebar-border); border-radius: var(--border-radius); padding: 15px; width: 100%; font-size: 14px; box-sizing: border-box; font-family: 'Comfortaa', sans-serif; resize: vertical; text-align: justify; line-height: 1.6; transition: all 0.3s ease; }
.contador-textarea:focus { outline: none; border-color: var(--accent-color); box-shadow: 0 0 8px rgba(0,0,0,0.2); }
.stats-bar { display: flex; justify-content: space-between; align-items: center; font-size: 16px; font-weight: bold; background: var(--bg-color); padding: 15px; border-radius: var(--border-radius); border: 2px solid var(--sidebar-border); margin-top: 15px; }
.btn-copiar-contador { width: 100%; margin-top: 20px; padding: 15px; font-size: 16px; cursor: pointer; border-radius: var(--border-radius); background-color: var(--sidebar-bg); color: var(--accent-color); border: 2px solid var(--accent-color); font-family: 'Quantico', sans-serif; transition: all 0.3s ease; }
.btn-copiar-contador:hover { background-color: var(--accent-color); color: var(--sidebar-bg); }

.wg-emblem { font-size: 80px; text-align: center; color: var(--accent-color); margin-bottom: 10px; line-height: 1; }
.wg-subtitle { text-align: center; font-size: 18px; opacity: 0.8; margin-bottom: 30px; }
.highlight-text { color: var(--accent-color); font-weight: bold; font-family: 'Quantico', sans-serif; font-size: 18px; }

.sub-attr { margin-left: 40px; padding-left: 20px; border-left: 3px solid var(--accent-color); margin-top: 15px; margin-bottom: 25px; }
.sub-attr h3 { color: var(--accent-color); font-family: 'Quantico', sans-serif; font-size: 24px; margin-bottom: 12px; }
.info-box { background: var(--bg-color); border: 1px dashed var(--sidebar-border); padding: 20px; border-radius: var(--border-radius); text-align: center; box-shadow: inset 0 0 10px rgba(0,0,0,0.05); margin-top: 20px; margin-bottom: 25px; }
.impel-image { width: 100%; max-width: 800px; height: auto; border-radius: 8px; margin: 15px auto 25px auto; display: block; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); border: 2px solid var(--sidebar-border); }
.level-title { font-size: 32px; text-align: center; color: var(--accent-color); margin-bottom: 5px; text-transform: uppercase; cursor: pointer; }
.verificador-box { background-color: rgba(0,0,0,0.05); border: 2px solid var(--sidebar-border); padding: 20px; border-radius: var(--border-radius); margin-bottom: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
body.dark-mode .verificador-box { background-color: rgba(0,0,0,0.2); box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
.verificador-title { font-family: 'Quantico', sans-serif; font-size: 20px; font-weight: bold; text-align: center; text-transform: uppercase; margin-bottom: 15px; border-bottom: 1px dashed var(--sidebar-border); padding-bottom: 10px; color: var(--accent-color); }
.verificador-box textarea:disabled { background-color: rgba(0,0,0,0.1); color: #888; cursor: not-allowed; border-color: var(--sidebar-border); }
.checkbox-group { display: flex; gap: 15px; margin-top: 5px; flex-wrap: wrap; }
.checkbox-group label { font-family: 'Comfortaa', sans-serif; text-transform: none; font-weight: bold; font-size: 14px; display: flex; align-items: center; gap: 5px; cursor: pointer; }
#resultado { margin-top: 15px; padding: 15px; border-radius: var(--border-radius); text-align: justify; line-height: 1.5; font-size: 14px; font-weight: bold; min-height: 50px; transition: all 0.3s ease; display: none; }
#resultado.active { display: block; }
.job-type-container { margin-bottom: 20px; padding: 15px; border: none; border-left: 4px solid var(--accent-color); background-color: rgba(0,0,0,0.02); border-radius: 0 8px 8px 0; }
body.dark-mode .job-type-container { background-color: rgba(255,255,255,0.02); }
.job-type-container h3 { color: var(--accent-color); margin-top: 0; font-family: 'Quantico', sans-serif; font-size: 18px; border-bottom: none; padding-bottom: 0; margin-bottom: 10px; }
.job-type-container ul { margin-left: 20px; margin-top: 10px; }
.job-type-container li { margin-bottom: 5px; }
.calc-box { border: 2px solid var(--sidebar-border); border-radius: var(--border-radius); padding: 25px; margin-bottom: 30px; background-color: var(--sidebar-bg); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
body.dark-mode .calc-box { box-shadow: 0 4px 15px rgba(156, 39, 176, 0.15); }
.calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; }
.info-box { background: var(--bg-color); border: 1px dashed var(--sidebar-border); padding: 15px; border-radius: var(--border-radius); text-align: center; font-size: 16px; margin-top: 20px; }
.rank-info-label { font-weight: bold; color: var(--accent-color); display: block; width: 100%; font-family: 'Quantico', sans-serif; font-size: 18px; margin-top: 20px; margin-bottom: 10px; }
.btn-toggle-nav { background: none; border: 1px solid var(--sidebar-border); color: var(--text-color); font-family: 'Comfortaa', sans-serif; font-size: 14px; padding: 8px 15px; cursor: pointer; border-radius: 4px; transition: all 0.3s ease; }
.btn-toggle-nav:hover { background: var(--accent-color); color: var(--bg-color); border-color: var(--accent-color); }

.admin-generator-box { background-color: var(--bg-color); border: 2px solid var(--sidebar-border); border-radius: var(--border-radius); padding: 20px; margin-top: 20px; }
.admin-generator-box .input-group { margin-bottom: 20px; }
.admin-generator-box label { display: block; margin-bottom: 8px; font-weight: bold; color: var(--accent-color); font-family: 'Quantico', sans-serif; }
.admin-generator-box input[type="text"], .admin-generator-box select { width: 100%; padding: 12px; border: 1px solid var(--sidebar-border); border-radius: var(--border-radius); background-color: var(--sidebar-bg); color: var(--text-color); font-family: 'Comfortaa', sans-serif; box-sizing: border-box; transition: all 0.3s ease; }
.admin-generator-box input[type="text"]:focus, .admin-generator-box select:focus { outline: none; border-color: var(--accent-color); box-shadow: 0 0 8px rgba(0,0,0,0.2); }
.admin-checkbox-group { display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap; }
.admin-checkbox-group label { display: flex; align-items: center; font-weight: normal; cursor: pointer; color: var(--text-color); font-family: 'Comfortaa', sans-serif; }
.admin-checkbox-group input[type="checkbox"], .admin-checkbox-group input[type="radio"] { margin-right: 8px; cursor: pointer; accent-color: var(--accent-color); }
.output-container { background-color: var(--sidebar-bg); padding: 20px; border-radius: var(--border-radius); border: 1px solid var(--sidebar-border); margin-top: 20px; }
.output-container pre { white-space: pre-wrap; word-wrap: break-word; font-family: monospace; color: var(--text-color); margin: 0; }

.btn-admin { width: 100%; padding: 15px; background-color: var(--sidebar-bg); color: var(--accent-color); border: 2px solid var(--accent-color); border-radius: var(--border-radius); cursor: pointer; font-size: 16px; font-weight: bold; font-family: 'Quantico', sans-serif; transition: all 0.3s ease; margin-top: 15px; }
.btn-admin:hover { background-color: var(--accent-color); color: var(--sidebar-bg); }
.btn-clear-admin { width: 100%; padding: 15px; background-color: var(--sidebar-bg); color: #d32f2f; border: 2px solid #d32f2f; border-radius: var(--border-radius); cursor: pointer; margin-top: 15px; font-size: 16px; font-weight: bold; font-family: 'Quantico', sans-serif; transition: all 0.3s ease; }
.btn-clear-admin:hover { background-color: #d32f2f; color: var(--sidebar-bg); }



.calculator-box { margin-top: 15px; padding: 20px; background-color: rgba(103, 58, 183, 0.05); border: 1px solid var(--accent-color); border-radius: 8px; }
.calculator-box h4 { color: var(--accent-color); margin-bottom: 15px; font-family: 'Quantico', sans-serif; }
.calculator-box label { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; font-weight: bold; color: var(--text-color); font-family: 'Comfortaa', sans-serif; font-size: 16px; }
.calculator-box input { margin-left: 10px; padding: 12px; border: 2px solid var(--sidebar-border); border-radius: 8px; background-color: var(--bg-color); color: var(--text-color); font-family: 'Quantico', sans-serif; font-size: 16px; width: 140px; outline: none; transition: all 0.3s ease; text-align: center; }
.calculator-box input:focus { box-shadow: 0 0 8px var(--accent-color); }
.math-box { background-color: rgba(103, 58, 183, 0.05); border-left: 4px solid var(--accent-color); padding: 15px; margin-top: 15px; border-radius: 4px; }
.input-group { margin-bottom: 15px; }
.input-group label { display: block; font-family: 'Quantico', sans-serif; font-weight: bold; color: var(--text-color); margin-bottom: 8px; }
.input-group input, .input-group select { width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--sidebar-border); background-color: var(--bg-color); color: var(--text-color); font-size: 16px; font-family: 'Comfortaa', sans-serif; transition: all 0.3s ease; outline: none; }
.input-group input:focus, .input-group select:focus { box-shadow: 0 0 8px var(--accent-color); }
.calc-input-group { display: flex; flex-direction: column; }
.calc-input-group label { color: var(--accent-color); font-weight: bold; margin-bottom: 8px; font-family: 'Quantico', sans-serif; }
.calc-input-group input { padding: 12px; border-radius: 8px; border: 2px solid var(--sidebar-border); background: var(--sidebar-bg); color: inherit; font-family: 'Quantico', sans-serif; font-size: 16px; outline: none; transition: border-color 0.3s ease; }
.calc-input-group input:focus { border-color: var(--accent-color); }
.result-display { background-color: var(--sidebar-border); color: var(--bg-color); padding: 15px; border-radius: 8px; font-size: 20px; font-family: 'Quantico', sans-serif; text-align: center; margin-top: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }

.btn-alternar-img { position: absolute; bottom: 8px; right: 8px; background: var(--sidebar-bg); color: var(--accent-color); border: 1px solid var(--accent-color); border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 12px; font-family: 'Quantico', sans-serif; box-shadow: 0 2px 4px rgba(0,0,0,0.5); transition: all 0.3s ease; z-index: 10; }
.btn-alternar-img:hover { background: var(--accent-color); color: var(--bg-color); }
.gallery-img-container img.secundaria { display: none !important; }
.map-container.show-coords .grid-cell::after { content: attr(data-coord); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: rgba(255, 255, 255, 0.9); font-size: min(35cqw, 10px); font-weight: bold; font-family: 'Quantico', monospace; pointer-events: none; text-shadow: 1px 1px 1px #000, -1px -1px 1px #000, 1px -1px 1px #000, -1px 1px 1px #000; z-index: 2; }
.grid-cell { position: relative; container-type: inline-size; }

@media (max-width: 768px) { 
    .stats-bar { flex-direction: column; gap: 10px; text-align: center; } 
    .calc-grid { grid-template-columns: 1fr; }
}
`;
    const styleEl = document.createElement('style');
    styleEl.innerHTML = globalStyles;
    document.head.appendChild(styleEl);
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.bounty-value').forEach(el => {
            if (!el.textContent.includes('฿')) {
                el.textContent = '฿' + el.textContent;
            }
        });
    });
})();

// ==========================================
// FUNÇÃO GLOBAL DE CÓPIA (COMPATÍVEL COM IOS)
// ==========================================
window.copiarTextoUniversal = function(texto) {
    return new Promise((resolve, reject) => {
        function fallbackCopy() {
            let textArea = document.createElement("textarea");
            textArea.value = texto;
            
            textArea.style.position = "fixed";
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            
            const isIOS = navigator.userAgent.match(/ipad|iphone/i);
            if (isIOS) {
                let range = document.createRange();
                range.selectNodeContents(textArea);
                let selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.setSelectionRange(0, 999999);
            } else {
                textArea.select();
            }

            try {
                let successful = document.execCommand('copy');
                if (successful) {
                    resolve();
                } else {
                    reject(new Error('execCommand falhou no iOS'));
                }
            } catch (err) {
                reject(err);
            }
            
            document.body.removeChild(textArea);
        }

        if (navigator.clipboard && window.isSecureContext) {
            window.copiarTextoUniversal(texto).then(resolve).catch(() => fallbackCopy());
        } else {
            fallbackCopy();
        }
    });
};

// ==========================================
// INICIALIZAÇÃO
// ==========================================
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

if (window.location.pathname.endsWith('area-restrita.html') || window.location.pathname.includes('area-restrita')) {
    const childNodes = Array.from(document.body.children);
    childNodes.forEach(child => child.style.display = 'none');
    const overlay = document.createElement('div');
    overlay.innerHTML = `
        <style>
            #senha-input::-ms-reveal { display: none !important; }
        </style>
        <div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: #121212; z-index: 100000; display: flex; justify-content: center; align-items: center;">
            <div style="background: var(--sidebar-bg); padding: 40px; border-radius: 8px; border: 2px solid var(--accent-color); text-align: center; box-shadow: 0 8px 16px rgba(0,0,0,0.8); max-width: 400px; width: 90%;">
                <h2 style="color: var(--accent-color); font-family: 'Quantico', sans-serif; margin-bottom: 20px; font-size: 26px;">ACESSO RESTRITO</h2>
                <div style="position: relative; margin-bottom: 20px; width: 100%;">
                    <input type="password" id="senha-input" placeholder="Digite a senha..." autocomplete="new-password" style="width: 100%; padding: 12px 40px 12px 12px; border: 1px solid var(--sidebar-border); border-radius: 4px; background: rgba(0,0,0,0.5); color: #ffffff; font-family: 'Comfortaa', sans-serif; font-size: 16px; outline: none; text-align: center; box-sizing: border-box;">
                    <button id="toggle-senha-btn" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text-color); cursor: pointer; font-size: 18px; padding: 0; outline: none;">👁️</button>
                </div>
                <button id="senha-btn" style="background: var(--accent-color); color: #000000; border: none; padding: 12px 24px; font-family: 'Quantico', sans-serif; font-weight: bold; font-size: 18px; border-radius: 4px; cursor: pointer; width: 100%;">ENTRAR</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    setTimeout(() => {
        const inputSenha = document.getElementById('senha-input');
        const toggleBtn = document.getElementById('toggle-senha-btn');
        if (inputSenha) {
            inputSenha.focus();
        }
        if (toggleBtn && inputSenha) {
            toggleBtn.addEventListener('click', () => {
                if (inputSenha.type === 'password') {
                    inputSenha.type = 'text';
                    toggleBtn.textContent = '🙈';
                } else {
                    inputSenha.type = 'password';
                    toggleBtn.textContent = '👁️';
                }
            });
        }
        document.getElementById('senha-btn').addEventListener('click', () => {
            if (document.getElementById('senha-input').value === 'Ben10') {
                overlay.remove();
                childNodes.forEach(child => child.style.display = '');
            } else {
                window.location.href = 'index.html';
            }
        });
        document.getElementById('senha-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('senha-btn').click();
            }
        });
    }, 0);
}

// ==========================================
// TEMAS
// ==========================================
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

// ==========================================
// CARREGAMENTO DE TEMAS
// ==========================================
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

// ==========================================
// SIDEBAR E MENU DE NAVEGAÇÃO
// ==========================================
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
                <li>
                    <a href="index.html" class="toggle-btn">INÍCIO <span class="arrow">▼</span></a>
                    <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                        <li><a href="como-jogar.html">COMO JOGAR O RPG?</a></li>
                    </ul>
                </li>
                <li><a href="area-restrita.html">ÁREA RESTRITA</a></li>
                <li><a href="regras.html">REGRAS</a></li>
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
                    <li><a href="https://herikliz.github.io/New-Seas-RPG-Ficha/" target="_blank">SALVAR FICHA</a></li>
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
                    <li><a href="atributos-akuma-no-mi.html">AKUMA NO MI</a></li>
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
            <li>
                <a href="loja-geral.html" class="toggle-btn">LOJA GERAL <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="itens-exclusivos.html">ITENS EXCLUSIVOS</a></li>
                    <li><a href="loja-de-barcos.html">LOJA DE BARCOS</a></li>
                    <li><a href="loja-de-carpinteiros.html">LOJA DE CARPINTEIROS</a></li>
                    <li><a href="loja-de-criadores.html">LOJA DE CRIADORES</a></li>
                    <li><a href="loja-especial.html">LOJA ESPECIAL</a></li>
                    <li>
                        <a href="loja-de-ferreiros.html" class="toggle-btn">LOJA DE FERREIROS <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="escudos.html">ESCUDOS</a></li>
                        </ul>
                    </li>
                    <li>
                        <li><a href="loja-de-meitos.html">LOJA DE MEITŌS</a></li>
                    <li>
                        <a href="submundo.html" class="toggle-btn">SUBMUNDO <span class="arrow">▼</span></a>
                        <ul class="sub-menu" style="margin-left: 10px; background-color: rgba(0,0,0,0.05);">
                            <li><a href="akuma-no-mi.html">AKUMA NO MI</a></li>
                        </ul>
                    </li>
                    </li>
                </ul>
            </li>
            <li>
                <li><a href="impel-down.html">IMPEL DOWN</a></li>
            </li>
            <li>
                <a href="jornal.html" class="toggle-btn">JORNAL <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="procurados.html">PROCURADOS</a></li>
                    <li><a href="imperadores-dos-mares.html">IMPERADORES DOS MARES</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="toggle-btn">MECÂNICAS DO RPG <span class="arrow">▼</span></a>
                <ul class="sub-menu">
                    <li><a href="acao-oculta.html">AÇÃO OCULTA</a></li>
                    <li><a href="cacadas.html">CAÇADAS</a></li>
                    <li><a href="criacao-de-experimentos.html">CRIAÇÃO DE EXPERIMENTOS</a></li>
                    <li><a href="criacao-de-meitos.html">CRIAÇÃO DE MEITŌS</a></li>
                    <li><a href="descoberta-de-artefatos.html">DESCOBERTA DE ARTEFATOS</a></li>
                    <li><a href="dominacoes.html">DOMINAÇÕES</a></li>
                    <li><a href="investimento.html">INVESTIMENTO</a></li>
                    <li><a href="sangue.html">SANGUE</a></li>
                </ul>
            </li>
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
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Cor de Fundo</label>
                        <input type="color" id="custom-bg" value="#ffffff" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Cor do Menu</label>
                        <input type="color" id="custom-sidebar" value="#f8fafc" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Cor do Texto</label>
                        <input type="color" id="custom-text" value="#2d3748" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Cor de Destaque</label>
                        <input type="color" id="custom-accent" value="#d32f2f" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Cor das Bordas</label>
                        <input type="color" id="custom-border" value="#e2e8f0" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                </div>
                <div style="margin-bottom: 10px;">
                    <label style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-family: 'Comfortaa', sans-serif; cursor: pointer;">
                        <input type="checkbox" id="toggle-advanced-theme" style="accent-color: var(--accent-color); cursor: pointer;"> Personalização Avançada
                    </label>
                </div>
                <div id="advanced-theme-fields" style="display: none; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Cor do Link</label>
                        <input type="color" id="custom-link" value="#2d3748" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Fundo de Hover</label>
                        <input type="color" id="custom-hoverBg" value="#e2e8f0" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Texto do Botão</label>
                        <input type="color" id="custom-btnText" value="#ffffff" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Fundo da Área</label>
                        <input type="color" id="custom-areaBg" value="#ffffff" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Borda da Área</label>
                        <input type="color" id="custom-areaBorder" value="#e2e8f0" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; font-size: 14px; font-family: 'Comfortaa', sans-serif;">Submenu</label>
                        <input type="color" id="custom-subMenu" value="#f8fafc" style="width: 100%; height: 40px; padding: 0; border: 1px solid var(--sidebar-border); border-radius: 8px; cursor: pointer; background: none; box-sizing: border-box; outline: none;">
                    </div>
                </div>
                <button id="apply-custom-theme" class="theme-btn" style="width: 100%; margin-top: 5px; border-color: var(--accent-color);">Aplicar Personalizado</button>
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
                    if(document.getElementById('toggle-advanced-theme')) {
                        document.getElementById('toggle-advanced-theme').checked = !!customColors.advanced;
                        document.getElementById('advanced-theme-fields').style.display = customColors.advanced ? 'grid' : 'none';
                        document.getElementById('custom-link').value = customColors.link || customColors.text;
                        document.getElementById('custom-hoverBg').value = customColors.hoverBg || customColors.border;
                        document.getElementById('custom-btnText').value = customColors.btnText || '#ffffff';
                        document.getElementById('custom-areaBg').value = customColors.areaBg || customColors.bg;
                        document.getElementById('custom-areaBorder').value = customColors.areaBorder || customColors.border;
                        document.getElementById('custom-subMenu').value = customColors.subMenu || customColors.sidebar;
                    }
                }
            }
            if(document.getElementById('toggle-advanced-theme') && !document.getElementById('toggle-advanced-theme').dataset.hasListener) {
                document.getElementById('toggle-advanced-theme').dataset.hasListener = "true";
                document.getElementById('toggle-advanced-theme').addEventListener('change', function() {
                    document.getElementById('advanced-theme-fields').style.display = this.checked ? 'grid' : 'none';
                });
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
            const isAdvanced = document.getElementById('toggle-advanced-theme') && document.getElementById('toggle-advanced-theme').checked;
            const customObj = {
                bg: document.getElementById('custom-bg').value,
                text: document.getElementById('custom-text').value,
                sidebar: document.getElementById('custom-sidebar').value,
                border: document.getElementById('custom-border').value,
                link: isAdvanced ? document.getElementById('custom-link').value : document.getElementById('custom-text').value,
                hoverBg: isAdvanced ? document.getElementById('custom-hoverBg').value : document.getElementById('custom-border').value,
                accent: document.getElementById('custom-accent').value,
                btnText: isAdvanced ? document.getElementById('custom-btnText').value : '#ffffff',
                areaBg: isAdvanced ? document.getElementById('custom-areaBg').value : document.getElementById('custom-bg').value,
                areaBorder: isAdvanced ? document.getElementById('custom-areaBorder').value : document.getElementById('custom-border').value,
                subMenu: isAdvanced ? document.getElementById('custom-subMenu').value : document.getElementById('custom-sidebar').value,
                advanced: isAdvanced
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
    const currentLink = sidebarElement.querySelector(`.nav-links a[href="${path}"]`);
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
            if (window.copiarTextoUniversal) {
                window.copiarTextoUniversal(textArea.value).then(() => alert("Ficha copiada!"));
            } else {
                textArea.select();
                document.execCommand("copy");
                alert("Ficha copiada!");
            }
        });
    }
});

// ==========================================
// FUNÇÕES AUXILIARES PARA CÁLCULOS
// ==========================================
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

// ==========================================
// SISTEMA DE CÁLCULO DE ATRIBUTOS
// ==========================================
function getCalcVal(elementId) {
    let el = document.getElementById(elementId);
    if (!el) return 0;
    if (el.type === 'number') return parseFloat(el.value) || 0;
    let val = el.value.replace(/\./g, '');
    return val ? parseInt(val, 10) : 0;
}

function runAtributosCalc() {
    if (!document.getElementById('hp-res-passiva')) return;

    let ptsTotais = getCalcVal('hp-pontos-totais');
    let resPassiva = getCalcVal('hp-res-passiva');
    let outHp = document.getElementById('out-hp');
    
    let multiplicador = 1.5;
    if (ptsTotais >= 40000) multiplicador = 4.0;
    else if (ptsTotais >= 20000) multiplicador = 3.0;
    else if (ptsTotais >= 10000) multiplicador = 2.0;
    
    if (outHp) outHp.innerText = (Math.floor(resPassiva * multiplicador) + 10000).toLocaleString('pt-BR');

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

// ==========================================
// SISTEMA DE CÁLCULO DE ESTAMINA
// ==========================================
function runEstaminaCalc() {
    if (!document.getElementById('calc-res')) return;

    let res = getCalcVal('calc-res');
    let estaminaTotal = res * 5;
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

// ==========================================
// SISTEMA DE CENAS
// ==========================================
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
            
            if (this.dataset.copying) return;
            this.dataset.copying = "true";
            window.copiarTextoUniversal(textarea.value).then(() => {
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
                    delete this.dataset.copying;
                }, 1000);
            });
        });
    });
});

// ==========================================
// SISTEMA DE TRABALHO
// ==========================================
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

    let reqPontos = { "1": 1000, "2": 2500, "3": 5000, "4": 15000 };
    let reqPontosFormatados = { "1": "1.000", "2": "2.500", "3": "5.000", "4": "15.000" };

    let palavraPonto = pontos === 1 ? "ponto" : "pontos";

    for (let feito of tiposFeitos) {
        if (pontos < reqPontos[feito]) {
            resultadoEl.style.backgroundColor = "rgba(220, 53, 69, 0.1)";
            resultadoEl.style.border = "1px dashed var(--danger)";
            resultadoEl.style.color = "var(--danger)";
            resultadoEl.innerHTML = "Amigão, se você tem " + pontos.toLocaleString('pt-BR') + " " + palavraPonto + ", não tem como ter feito o Trabalho Tipo " + feito + ", porque precisa ter no mínimo " + reqPontosFormatados[feito] + " pontos pra fazer ele.";
            resultadoEl.classList.add("active");
            if (textarea) {
                textarea.disabled = true;
                updateTextareaStats(textarea);
            }
            return;
        }
    }

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
        resultadoEl.innerHTML = "Negado. O Trabalho Tipo " + tipoDesejado + " exige que você tenha no mínimo " + reqPontosFormatados[tipoDesejado] + " pontos acumulados. Atualmente, você possui apenas " + pontos.toLocaleString('pt-BR') + " " + palavraPonto + ".";
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
        let typeMin = { "1": 1200, "2": 1800, "3": 3000, "4": 9000 };
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
            
            if (this.dataset.copying) return;
            this.dataset.copying = "true";
            window.copiarTextoUniversal(textarea.value).then(() => {
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
                    delete this.dataset.copying;
                }, 1000);
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

    const ilhasCoordenadas = {
        'east-blue': {
            'Base da Marinha G-03': ['H10'],
            'Clockwork': ['K15'],
            'Conomi': ['E08', 'E09', 'F08', 'F09'],
            'Cozia': ['L18', 'L19'],
            'Dawn': ['I03', 'I04', 'I05'],
            'Gecko': ['F15', 'F16'],
            'Goat': ['G12', 'G13'],
            'Ilha dos Animais Raros': ['C07', 'D07'],
            'Ilha Navio de Guerra': ['K09', 'L08', 'L09', 'L10'],
            'Ilha Shimotsuki': ['G18', 'G19', 'H19', 'I18', 'I19'],
            'Kumate': ['D18', 'D19'],
            'Mirrorball': ['J07', 'J08'],
            'Organ': ['D12', 'D13'],
            'Oykot': ['J11', 'J12', 'J13'],
            'Polestar': ['L04', 'L05'],
            'Tequila Wolf': ['G02', 'G03', 'G04'],
            'Yotsuba': ['E04']
        },
        'south-blue': {
            'Base da Marinha G-10': ['F12'],
            'Baterilla': ['K04', 'K05', 'L04', 'L05'],
            'Briss': ['B10', 'B11'],
            'Centaurea': ['B17', 'B18', 'C17', 'C18'],
            'Karate': ['K12', 'K13'],
            'Kutsukku': ['G16', 'G17', 'H16', 'H17'],
            'Reino Negro de Drum': ['H06', 'I05', 'I06', 'I07'],
            'Roshwan': ['C06', 'C07', 'D06', 'D07'],
            'Samba': ['J08', 'J09', 'K08', 'K09'],
            'Samuwanai': ['F06', 'F07'],
            'Sorbet': ['D13', 'D14', 'D15'],
            'Taya': ['D10', 'E10'],
            'Torino': ['J18', 'K17', 'K18'],
            'Tumi': ['I14'],
            'Vespa': ['H08', 'H09', 'H10']
        },
        'west-blue': {
            'Ballywood': ['E04', 'E05'],
            'Base da Marinha G-12': ['C15', 'D15'],
            'God Valley': ['H07', 'H08'],
            'Ilusia': ['I15', 'I16', 'J15', 'J16'],
            'Kano': ['G18', 'G19'],
            'Las Camp': ['J05', 'J06', 'K05', 'K06'],
            'Ohara': ['F10', 'F11'],
            'Soja': ['G14', 'G15'],
            'Thriller Bark': ['J10', 'J11', 'J12', 'K10', 'K11', 'K12'],
            'Toroa': ['C09', 'C10', 'C11']
        },
        'north-blue': {
            'Base da Marinha G-11': ['G18', 'H18'],
            'Deul': ['G04', 'H04'],
            'Downs': ['E12', 'E13', 'E14', 'F12', 'F13', 'F14'],
            'Flevance': ['K11', 'K12'],
            'Kuen': ['I06', 'I07', 'I08', 'J06', 'J07'],
            'Lvneel': ['C12', 'C13'],
            'Minion': ['G07', 'G08'],
            'Notice': ['F16', 'G16'],
            'Polo Norte': ['A01', 'A02', 'A03', 'A04', 'A05', 'B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'D01', 'D02', 'D03', 'D04', 'D05', 'E01', 'E02', 'E03', 'E04', 'F02', 'F03'],
            'Rakesh': ['K08', 'K09', 'L08', 'L09'],
            'Rubeck': ['E08', 'E09'],
            'Spider Miles': ['C17', 'D17'],
            'Swallow': ['K04', 'K05', 'L04', 'L05'],
            'Welbems': ['G12', 'G13', 'H12', 'H13'],
            'Whiteland': ['L14', 'L15', 'M14', 'M15']
        },
        'paraiso': {
            'Baltigo': ['B16'],
            'Banaro': ['L09'],
            'Base da Marinha G-01': ['M18'],
            'Base da Marinha G-02': ['C14'],
            'Base da Marinha G-08': ['G06'],
            'Boin': ['K05', 'K06', 'L05', 'L06'],
            'Cactus': ['H03', 'H04'],
            'Drum': ['I08'],
            'Enies Lobby': ['M15'],
            'Foolshout': ['B13', 'B14'],
            'Ilha Spa': ['D13', 'E13', 'E14'],
            'Jaya': ['F12', 'G12'],
            'Karakuri': ['B06', 'B07'],
            'Kenzan': ['C18', 'D18'],
            'Kuraigana': ['E16'],
            'Kyuka': ['D05', 'E05', 'E06'],
            'Little Garden': ['I05', 'I06'],
            'Long Ring Long Land': ['H12', 'H13', 'I12', 'I13'],
            'Mar do Triângulo Florian': ['J12', 'J13', 'J14', 'J15', 'K12', 'K13', 'K14', 'K15', 'L13', 'L14'],
            'Mary Geoise': ['A20', 'A21', 'B19', 'B20', 'B21', 'C19', 'C20', 'C21', 'D20', 'D21', 'E19', 'E20', 'E21', 'F19', 'F20', 'F21', 'G19', 'G20', 'G21', 'H18', 'H19', 'H20', 'H21', 'I18', 'I19', 'I20', 'I21', 'J20', 'J21', 'K20', 'K21', 'L20', 'L21', 'M20', 'M21', 'N21'],
            'Merveille': ['H14', 'H15', 'I14', 'I15'],
            'Momoiro': ['B09', 'B10'],
            'Namakura': ['M03', 'M04'],
            'Nanimonai': ['F07', 'F08'],
            'Pucci': ['M10'],
            'Reino Lulusia': ['E10'],
            'Sabaody': ['G17', 'G18'],
            'San Faldo': ['L11', 'L12'],
            'Sandy': ['H09', 'H10'],
            'Water 7': ['K10']
        },
        'novo-mundo': {
            'Applenine': ['G10', 'G11', 'H10', 'H11'],
            'Base da Marinha G-09': ['G07', 'G08'],
            'Base da Marinha G-13': ['H13', 'I12', 'I13'],
            'Base da Marinha G-14': ['F15', 'F16', 'G15', 'G16'],
            'Base da Marinha G-15': ['K14', 'K15', 'L14', 'L15'],
            'Dressrosa': ['I09', 'J08', 'J09'],
            'Egghead': ['B16', 'B17', 'C16', 'C17'],
            'Elbaf': ['K18', 'K19', 'L18', 'L19'],
            'Foodvalten': ['K11', 'K12', 'L11', 'L12'],
            'Hachinosu': ['D18', 'E17', 'E18'],
            'Mystoria': ['I05', 'I06'],
            'Prodence': ['I15', 'I16'],
            'Punk Hazard': ['C06', 'C07', 'D06', 'D07'],
            'Raijin': ['K05', 'L04', 'L05', 'M05'],
            'Risky Red': ['F04', 'F05', 'G05'],
            'Wano': ['D13', 'D14'],
            'Whole Cake': ['L07', 'L08', 'M07', 'M08'],
            'Yukiryu': ['C09', 'C10', 'D09', 'D10']
        },
        'calm-belt-north': {
            'Base da Marinha G-06': ['D09', 'D10', 'E09', 'E10']
        },
        'calm-belt-east': {
            'Base da Marinha G-05': ['F10', 'F11', 'G10', 'G11'],
            'Shitsurakujima': ['J06'],
            '?': ['D17']
        },
        'calm-belt-west': {
            'Base da Marinha G-07': ['F11', 'F12', 'G11', 'G12']
        },
        'calm-belt-south': {
            'Amazon Lily': ['B11', 'C10', 'C11', 'C12', 'D10', 'D11', 'D12'],
            'Base da Marinha G-04': ['I11', 'I12', 'J11', 'J12'],
            'Impel Down': ['B16', 'B17', 'C16', 'C17'],
            'Rusukaina': ['E04', 'E05', 'F04', 'F05']
        }
    };

    window.obterNomeLocal = function(group, index, coord) {
        if (!group || index === undefined || !coord) return "Alto-Mar";
        
        let mapKey = "";
        index = parseInt(index);
        
        if (index === 0 && group === 'left') mapKey = 'north-blue';
        else if (index === 0 && group === 'right') mapKey = 'east-blue';
        else if (index === 1 && group === 'left') mapKey = 'calm-belt-north';
        else if (index === 1 && group === 'right') mapKey = 'calm-belt-east';
        else if (index === 2 && group === 'left') mapKey = 'novo-mundo';
        else if (index === 2 && group === 'right') mapKey = 'paraiso';
        else if (index === 3 && group === 'left') mapKey = 'calm-belt-west';
        else if (index === 3 && group === 'right') mapKey = 'calm-belt-south';
        else if (index === 4 && group === 'left') mapKey = 'west-blue';
        else if (index === 4 && group === 'right') mapKey = 'south-blue';
        
        if (!ilhasCoordenadas[mapKey]) return "Alto-Mar";
        for (const [ilha, coords] of Object.entries(ilhasCoordenadas[mapKey])) {
            if (coords.includes(coord)) return ilha;
        }
        return "Alto-Mar";
    };

    function isRedZone(group, index, x, y) {
        return redLineZones.some(z => z.group === group && z.index === index && z.x === x && z.y === y);
    }

    document.querySelectorAll('.map-container').forEach(container => {
        if (container.parentElement.querySelector('.copy-map-btn')) return;
    
        const btn = document.createElement('button');
        btn.className = 'copy-map-btn';
        btn.innerText = '📸 Copiar Mapa';
        btn.onclick = () => copiarMapa(container, btn);
        container.parentElement.insertBefore(btn, container);
    });

    document.querySelectorAll('.map-container').forEach(container => {
        const btnCoords = document.createElement('button');
        btnCoords.className = 'btn-toggle-nav';
        btnCoords.innerHTML = '📍Mostrar Coordenadas';
        btnCoords.style.cssText = 'background: var(--sidebar-bg); border-color: var(--accent-color); color: var(--accent-color); font-weight: bold; cursor: pointer; padding: 4px 8px; font-size: 12px; margin-left: 5px;';
        
        btnCoords.onclick = function() {
            container.classList.toggle('show-coords');
            this.innerHTML = container.classList.contains('show-coords') ? '📍Esconder Coordenadas' : '📍Mostrar Coordenadas';
        };

        const parent = container.parentElement;
        const flexDiv = Array.from(parent.children).find(el => el.style && el.style.display === 'flex' && el.style.justifyContent === 'flex-end');
        
        if (flexDiv) {
            flexDiv.appendChild(btnCoords);
        } else {
            const newFlexDiv = document.createElement('div');
            newFlexDiv.style.cssText = 'display: flex; justify-content: flex-end; margin-bottom: 5px; gap: 5px;';
            newFlexDiv.appendChild(btnCoords);
            
            const copyBtn = parent.querySelector('.copy-map-btn');
            if (copyBtn) {
                parent.insertBefore(newFlexDiv, copyBtn);
            } else {
                parent.insertBefore(newFlexDiv, container);
            }
        }
    });

    window.rotaSelecionada = [];

    function atualizarContagemQuadrados() {
        inputQuadrados.value = window.rotaSelecionada.length;
        calcularTempo();
    }

    function atualizarVisualCelula(cell) {
        let count = parseInt(cell.dataset.count) || 0;
        let badge = cell.querySelector('.cell-badge');
        cell.style.containerType = 'inline-size';
        if (count <= 0) {
            cell.classList.remove('selected');
            cell.style.backgroundColor = '';
            if (badge) badge.remove();
        } else {
            cell.classList.add('selected');
            if (count === 1) {
                cell.style.backgroundColor = 'rgba(103, 58, 183, 0.4)';
                if (badge) badge.remove();
            } else {
                cell.style.backgroundColor = 'rgba(211, 47, 47, 0.6)';
                if (!badge) {
                    badge = document.createElement('span');
                    badge.className = 'cell-badge';
                    badge.style.cssText = 'position: absolute; top: 0; right: 0; background: #d32f2f; color: #fff; font-size: min(45cqw, 12px); font-weight: bold; display: flex; align-items: center; justify-content: center; width: min(60%, 20px); height: min(60%, 20px); border-radius: 50%; z-index: 5; pointer-events: none; font-family: sans-serif; line-height: 1; box-shadow: 0 1px 3px rgba(0,0,0,0.5);';
                    cell.appendChild(badge);
                }
                badge.textContent = count;
            }
        }
    }

    window.limparQuadrados = function() {
        document.querySelectorAll('.grid-cell.selected').forEach(c => {
            c.classList.remove('selected');
            c.style.backgroundColor = '';
            c.style.containerType = 'inline-size';
            c.dataset.count = 0;
            let badge = c.querySelector('.cell-badge');
            if (badge) badge.remove();
        });
        window.rotaSelecionada = [];
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
                
                const letter = String.fromCharCode(65 + y);
                const num = String(x + 1).padStart(2, '0');
                cell.dataset.coord = letter + num;
                
                if (isRedZone(group, index, x, y)) {
                    cell.classList.add('red-zone');
                }
                
                cell.addEventListener('click', function() {
                    if (window.rotaSelecionada.length > 0) {
                        let lastCell = window.rotaSelecionada[window.rotaSelecionada.length - 1];
                        if (lastCell === this) {
                            window.rotaSelecionada.pop();
                            let count = parseInt(this.dataset.count) || 0;
                            count--;
                            this.dataset.count = count;
                            atualizarVisualCelula(this);
                            atualizarContagemQuadrados();
                            return;
                        }
                    }

                    if (window.rotaSelecionada.length === 0) {
                        this.dataset.count = 1;
                        atualizarVisualCelula(this);
                        window.rotaSelecionada.push(this);
                    } else {
                        let lastCell = window.rotaSelecionada[window.rotaSelecionada.length - 1];
                        let cx = parseInt(this.dataset.x);
                        let cy = parseInt(this.dataset.y);
                        let cg = this.dataset.group;
                        let ci = parseInt(this.dataset.index);
                        
                        let sx = parseInt(lastCell.dataset.x);
                        let sy = parseInt(lastCell.dataset.y);
                        let sg = lastCell.dataset.group;
                        let si = parseInt(lastCell.dataset.index);

                        let isAdjacent = false;
                        let isCurrentRedZone = isRedZone(cg, ci, cx, cy);

                        if (isCurrentRedZone && isRedZone(sg, si, sx, sy)) {
                            isAdjacent = true;
                        } else if (cg === sg) {
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

                        if (isAdjacent) {
                            let count = parseInt(this.dataset.count) || 0;
                            count++;
                            this.dataset.count = count;
                            atualizarVisualCelula(this);
                            window.rotaSelecionada.push(this);
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

        if (quadrados > 1 && tempoPorQuadrado > 0) {
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

            let nomeLocalInicio = "Alto-Mar";
            let nomeLocalFim = "Alto-Mar";
            if (window.rotaSelecionada && window.rotaSelecionada.length > 0) {
                let firstCell = window.rotaSelecionada[0];
                let lastCell = window.rotaSelecionada[window.rotaSelecionada.length - 1];
                nomeLocalInicio = window.obterNomeLocal(firstCell.dataset.group, firstCell.dataset.index, firstCell.dataset.coord);
                nomeLocalFim = window.obterNomeLocal(lastCell.dataset.group, lastCell.dataset.index, lastCell.dataset.coord);
            }

            resultadoTexto.innerHTML = `De: ${nomeLocalInicio} ➔ Para: ${nomeLocalFim}<br>Chegada: ${stringData}<br><small>Duração: ${textoDuracao}${infoEstamina}</small>`;
        } else {
            resultadoTexto.innerHTML = `Tempo Total: 0h (Você está parado)`;
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

        let nomeLocalInicio = "Alto-Mar";
        let nomeLocalFim = "Alto-Mar";
        if (window.rotaSelecionada && window.rotaSelecionada.length > 0) {
            let firstCell = window.rotaSelecionada[0];
            let lastCell = window.rotaSelecionada[window.rotaSelecionada.length - 1];
            nomeLocalInicio = window.obterNomeLocal(firstCell.dataset.group, firstCell.dataset.index, firstCell.dataset.coord);
            nomeLocalFim = window.obterNomeLocal(lastCell.dataset.group, lastCell.dataset.index, lastCell.dataset.coord);
        }

        if (quadrados <= 1) {
            const originalText = btn.innerText;
            btn.innerText = '⚠️ Selecione ao menos 2 quadrados!';
            btn.style.backgroundColor = '#d32f2f';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--accent-color)';
            }, 2000);
            return;
        }

        let relatorio = `*Saindo de:* ${nomeLocalInicio} [${stringSaida}]\n`;
        relatorio += `*Destino Final:* ${nomeLocalFim} [${stringChegada}]\n\n`;
        relatorio += `*Meio de Transporte:* ${nomeBarco}\n\n`;
        
        if (isIndividual) {
            relatorio += `*Custo de Estamina:* ${estaminaTotal}\n`;
        }
        
        relatorio += `*${papel}:* \n`;
        relatorio += `*Tripulantes:* `;

        if (btn.dataset.copying) return;
        btn.dataset.copying = "true";
        window.copiarTextoUniversal(relatorio).then(() => {
            const originalText = btn.innerText;
            btn.innerText = '✅ Relatório Copiado!';
            btn.style.backgroundColor = '#00b37e';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--accent-color)';
                delete btn.dataset.copying;
            }, 1000);
        }).catch(err => {
            const originalText = btn.innerText;
            btn.innerText = '❌ Erro ao copiar';
            btn.style.backgroundColor = '#d32f2f';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--accent-color)';
                delete btn.dataset.copying;
            }, 1000);
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

        let fileName = 'mapa-new-seas.png';
        try {
            let decodedSrc = decodeURIComponent(img.src);
            fileName = decodedSrc.split('/').pop().split('?')[0] || fileName;
        } catch(err) {}

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
                let count = parseInt(cell.dataset.count) || 1;
                
                if (count > 1) {
                    ctx.fillStyle = 'rgba(211, 47, 47, 0.6)';
                } else {
                    ctx.fillStyle = 'rgba(103, 58, 183, 0.4)';
                }
                ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
                
                ctx.beginPath();
                ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
                ctx.lineWidth = radius * 0.3;
                ctx.strokeStyle = '#000000';
                ctx.stroke();

                if (count > 1) {
                    ctx.fillStyle = '#ffffff';
                    ctx.font = `bold ${Math.max(10, cellWidth * 0.35)}px sans-serif`;
                    ctx.textAlign = 'right';
                    ctx.textBaseline = 'top';
                    ctx.fillText(count.toString(), (x + 1) * cellWidth - 3, y * cellHeight + 3);
                }
            });
        }
        
        try {
            const blobPromise = new Promise(resolve => {
                canvas.toBlob(blob => resolve(blob), 'image/png');
            });
            const item = new ClipboardItem({ "image/png": blobPromise });
            
            navigator.clipboard.write([item]).then(() => {
                const originalText = btn.innerText;
                btn.innerText = '✅ Copiado!';
                btn.style.backgroundColor = '#00b37e';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = 'var(--accent-color)';
                }, 1000);
            }).catch(err => {
                const originalText = btn.innerText;
                const link = document.createElement('a');
                link.download = fileName;
                link.href = canvas.toDataURL('image/png');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                btn.innerText = '📥 Baixado!';
                btn.style.backgroundColor = '#2196F3';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = 'var(--accent-color)';
                }, 2000);
            });
        } catch (err) {
            const originalText = btn.innerText;
            const link = document.createElement('a');
            link.download = fileName;
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            btn.innerText = '📥 Baixado!';
            btn.style.backgroundColor = '#2196F3';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--accent-color)';
            }, 2000);
        }
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

// ==========================================
// SISTEMA GEO WRITER
// ==========================================
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
            window.copiarTextoUniversal(textarea.value).then(() => {
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
                }, 1000);
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
        const check40k = document.getElementById('check40k');
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
            let pontosLivres = valorBase;
            if (checkHaki.checked) pontosLivres += calcHakiAkuma;
            if (checkAkuma.checked) pontosLivres += calcHakiAkuma;

            if (check40k.checked) {
                textoFinal += "Pontos Livres: " + formatarNum(pontosLivres) + "\n";
            } else {
                textoFinal += "Pontos de Atributo: " + formatarNum(valorBase) + "\n";
                if (checkHaki.checked) {
                    textoFinal += "Pontos de Haki: " + formatarNum(calcHakiAkuma) + "\n";
                }
                if (checkAkuma.checked) {
                    textoFinal += "Pontos de Akuma no Mi: " + formatarNum(calcHakiAkuma) + "\n";
                }
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
            
            let pontosNpc = Math.floor(valorBase / 2);
            textoFinal += "\nPontos dos NPCs: " + formatarNum(pontosNpc);

            textoFinal += "\u0060\u0060\u0060";
            
            preResultado.textContent = textoFinal;
        }

        inputBase.addEventListener('input', function() {
            let valor = this.value.replace(/\D/g, '');
            if (valor !== '') {
                let numero = parseInt(valor, 10);
                if (numero > 2000) {
                    numero = 2000;
                }
                this.value = formatarNum(numero);
            }
            gerarTextoRecompensa();
        });

        checkHaki.addEventListener('change', gerarTextoRecompensa);
        checkAkuma.addEventListener('change', gerarTextoRecompensa);
        check40k.addEventListener('change', gerarTextoRecompensa);
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
            if (btnCopiar.dataset.copying) return;
            btnCopiar.dataset.copying = "true";
            window.copiarTextoUniversal(preResultado.textContent).then(() => {
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
                    delete btnCopiar.dataset.copying;
                }, 1000);
            });
        });

        gerarTextoRecompensa();
    }

    const islandSorter = document.getElementById('island-sorter');
    if (islandSorter) {
        islandSorter.addEventListener('change', function() {
            const container = document.getElementById('island-container');
            const items = Array.from(container.getElementsByClassName('island-item'));
            const method = this.value;

            if (method === 'alphabetical') {
                items.sort((a, b) => {
                    return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'), 'pt-BR');
                });
            } else if (method === 'faction') {
                const factionOrder = { 'marinha': 1, 'pirata': 2, 'revolucionaria': 3, 'misto': 4, 'independente': 5, 'despovoada': 6 };
                items.sort((a, b) => {
                    const facA = factionOrder[a.getAttribute('data-faction')] || 99;
                    const facB = factionOrder[b.getAttribute('data-faction')] || 99;
                    if (facA !== facB) {
                        return facA - facB;
                    }
                    return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'), 'pt-BR');
                });
            }

            items.forEach(item => container.appendChild(item));
        });
    }
});

// ==========================================
// BANCO DE DADOS - ILHAS E REGIÕES
// ==========================================
const bancoDeIlhas = {
    "East Blue": [
        { nome: "Base da Marinha G-03", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma base flutuante da Marinha estrategicamente posicionada para patrulhar as águas próximas e responder rapidamente a ameaças piratas.</p>` },
        { nome: "Clockwork", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Embora pequena em extensão, a ilha é dominada por uma imensa torre mecânica que sustenta uma cidade inteira no topo. Com um sistema de engrenagens e elevadores complexos, Clockwork é um testemunho da engenhosidade de seus habitantes, servindo como um centro comercial independente e lar de inventores e engenheiros excêntricos.</p>` },
        { nome: "Conomi", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Um arquipélago de clima tropical, conhecido por suas vastas plantações de tangerinas e comunidades pesqueiras. Suas águas cristalinas e solos férteis sustentam vilas autossuficientes, onde os moradores levam uma vida simples, mas próspera. A paisagem é marcada por pequenas ilhas interligadas por barcos e pontes rústicas, com mercados vibrantes e festivais que celebram a cultura local. Antes pertencente à KYT, agora pertence à tripulação pirata Lótus de Ferro, antigamente tendo como capitão o finado Silvers Damir, quando a tripulação ainda se chamava Guerreiros da Libertação, tendo agora Astarion D. Emiri como capitã.</p><div style="margin-top: 30px; margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Vila Cocoyasi</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Pirata</i></p><p style="margin-left: 20px;">Uma vila acolhedora cercada por plantações de tangerinas, onde as famílias se dedicam à agricultura e ao comércio. O porto é movimentado, com pescadores trazendo suas capturas diárias para vender na praça central.</p></div><div style="margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Vila Gosa</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Pirata</i></p><p style="margin-left: 20px;">Uma vila tranquila, com casas de madeira espalhadas entre colinas suaves e campos cultiváveis. Apesar de seu tamanho modesto, possui um espírito comunitário forte, onde todos trabalham juntos para manter a paz e a ordem.</p></div>` },
        { nome: "Cozia", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha de importância estratégica, onde o Governo Mundial construiu uma fortaleza militar imponente para garantir a segurança e a ordem na região. Sua posição central a torna um ponto de apoio crucial para as rotas comerciais e uma base essencial para a Marinha. A cidade ao redor da base é bem estruturada, com ruas movimentadas, mercados prósperos e infraestrutura avançada, refletindo o poder e controle do Governo Mundial. A ilha é conhecida por sua população dedicada e pela forte presença militar que garante a paz e estabilidade na região.</p>` },
        { nome: "Dawn", afiliacaoTexto: "Independente | Governo Mundial/Marinha", afiliacaoClasse: "misto", descricao: `<p style="margin-bottom: 15px;">Um território sob controle do Governo Mundial, conhecido por seu equilíbrio entre riqueza e pobreza. Enquanto as classes altas prosperam no Reino Goa, os menos favorecidos lutam pela sobrevivência em áreas negligenciadas como o Terminal Cinza, onde o povo predomina, criando um campo de guerra entre ambos os lados da ilha.</p><div style="margin-top: 30px; margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Reino Goa</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Governo Mundial/Marinha</i></p><p style="margin-left: 20px;">Um dos reinos mais influentes do East Blue, com forte ligação ao Governo Mundial. Sua nobreza vê-se como a elite civilizada, mantendo rígido controle sobre seus domínios.</p></div><div style="margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Terminal Cinza</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Independente</i></p><p style="margin-left: 20px;">Uma favela localizada na Ilha Dawn, onde os rejeitados da sociedade se reúnem em meio ao lixo e à miséria, ignorados pela nobreza do Reino Goa.</p></div><div style="margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Vila Foosha</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Independente</i></p><p style="margin-left: 20px;">Uma pacata vila pesqueira na Ilha Dawn, isolada dos conflitos políticos e disputas territoriais da região.</p></div>` },
        { nome: "Gecko", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma cadeia de ilhas autônomas, lar da pacífica Vila Syrup, conhecida por sua tranquilidade e pequenas frotas mercantes que evitam se envolver nos conflitos entre piratas e o Governo Mundial.</p><div style="margin-top: 30px; margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Vila Syrup</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Independente</i></p><p style="margin-left: 20px;">Uma pequena e tranquila vila situada no Arquipélago Gecko, conhecida por sua serenidade e simplicidade. A vila é famosa por suas plantações e pela pesca em suas águas calmas, além de ser um centro de comércio pacífico, com pequenas frotas mercantes que cruzam os mares para vender seus produtos. Seus moradores, em sua maioria, são pessoas humildes que priorizam a paz e a vida tranquila, evitando envolvimento em conflitos externos. A arquitetura da vila é simples, com casas de madeira e ruas estreitas, rodeadas por belas paisagens naturais que a tornam um refúgio acolhedor para quem busca escapar da agitação do mundo exterior.</p></div>` },
        { nome: "Goat", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha pouco explorada e cercada de mistérios, raramente visitada devido à sua localização remota e à falta de recursos atrativos para colonizadores ou piratas.</p>` },
        { nome: "Ilha dos Animais Raros", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Uma densa floresta repleta de criaturas únicas e bizarras, lar de híbridos de diferentes espécies. Seus perigos naturais afastam invasores, tornando-a um território praticamente intocado. Atualmente a ilha pertence a um grande grupo pirata.</p>` },
        { nome: "Ilha Navio de Guerra", afiliacaoTexto: "Vanguarda Popular Revolucionária", afiliacaoClasse: "revolucionaria", descricao: `<p style="margin-bottom: 15px;">A ilha recebe esse nome por sua formação geográfica lembrar um imenso navio de guerra. É um local estratégico, mas também abriga um ninho de dragões lendários que emergem a cada mil anos, tornando-a um território de grande interesse para estudiosos e aventureiros.</p>` },
        { nome: "Ilha Shimotsuki", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">A terra fértil e os rios cristalinos indicam que poderia ser um local propício para assentamento. Criaturas selvagens dominam a paisagem, e os ventos que cortam as encostas trazem consigo o silêncio de um lugar que ainda aguarda sua história ser escrita. Atualmente, a ilha pertence a Reh D'Nanryū e Yuu D'Couteau, da tripulação pirata Darkin.</p>` },
        { nome: "Kumate", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha exótica com formato semelhante a uma pata de urso, suas montanhas elevadas formam uma espécie de muralha natural. Pouco se sabe sobre sua população e cultura, mas lendas locais falam de tribos canibais isoladas do resto do mundo.</p>` },
        { nome: "Mirrorball", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha vibrante, famosa por sua cultura musical. O Governo Mundial mantém forte presença na região para garantir a segurança de suas rotas comerciais.</p>` },
        { nome: "Organ", afiliacaoTexto: "Despovoada", afiliacaoClasse: "despovoada", descricao: `<p style="margin-bottom: 15px;">Um arquipélago completamente despovoado, frequentemente usado por piratas como ponto de descanso ou esconderijo temporário. Suas ilhas rochosas e de difícil acesso dificultam a presença da Marinha.</p>` },
        { nome: "Oykot", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">O arquipélago Oykot é formado por diversas ilhas de clima tropical, com praias extensas, vegetação abundante e vilas costeiras que vivem principalmente da pesca e do comércio marítimo. Sua localização favorece rotas de navegação, tornando-o um ponto de parada comum para viajantes e tripulações que cruzam os mares.</p>` },
        { nome: "Polestar", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Um dos arquipélagos mais movimentados do East Blue, lar da icônica cidade portuária de Loguetown, onde piratas e comerciantes se misturam em um dos maiores mercados da região.</p>` },
        { nome: "Tequila Wolf", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha marcada por um enorme projeto de construção que se estendia por séculos: uma ponte colossal, cuja construção foi iniciada há mais de 600 anos, ligando continentes. Trabalhadores forçados e prisioneiros são mantidos ali, sobre uma tortura e escravidão interminável.</p>` },
        { nome: "Yotsuba", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha de importância estratégica para a Marinha, onde se localiza Shells Town, um de seus postos mais conhecidos no East Blue.</p><div style="margin-top: 30px; margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Shells Town</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Governo Mundial/Marinha</i></p><p style="margin-left: 20px;">Uma cidade costeira localizada em uma ilha estratégica no East Blue, onde a Marinha mantém um de seus postos de controle mais importantes. A cidade é caracterizada por sua arquitetura militar robusta, com torres de observação e fortificações que cercam a base principal. No centro da cidade, uma praça movimentada serve como ponto de encontro para os habitantes e militares, enquanto mercados e lojas atendem tanto à população local quanto aos viajantes. Shells Town é um local de transição, onde a ordem da Marinha é mantida com firmeza, mas também possui uma forte presença civil que busca se beneficiar da segurança proporcionada pela base militar. A cidade é um elo vital para a manutenção da paz e da estabilidade na região, sendo um marco no East Blue.</p></div>` }
    ],
    "South Blue": [
        { nome: "Base da Marinha G-10", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">A Base da Marinha G-10 foi erguida como um ponto estratégico para vigiar e manter a ordem nas águas locais. A fortaleza militar foi equipada para operações táticas e de combate, servindo também como centro de treinamento rigoroso para marinheiros. Sua presença garantiu o poder do Governo Mundial na região, impondo respeito e controlando a segurança nas rotas comerciais.</p>` },
        { nome: "Baterilla", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Baterilla é uma ilha isolada e pacífica, com vilarejos espalhados por uma terra montanhosa. Seus habitantes vivem de forma simples, dedicando-se à agricultura e à pesca, preservando suas tradições e cultura.</p>` },
        { nome: "Briss", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">O Reino Briss é uma terra próspera, conhecida por sua poderosa frota e por sua cultura avançada em navegação e comércio. A ilha foi um ponto estratégico importante, mas sua independência foi perdida após a queda de sua ordem. Atualmente, Briss vive sob o domínio de forças externas, que destroem sua antiga glória. Os moradores agora lutam para sobreviver e tentar preservar o que resta de sua grandeza.</p>` },
        { nome: "Centaurea", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Centaurea é uma ilha marcada pela luta constante pela liberdade. Com um terreno montanhoso e selvagem, seus habitantes enfrentam qualquer tentativa de dominação externa com coragem e resistência. A natureza proporciona uma defesa natural, e os moradores prezam pela autonomia, sem aceitar imposições de autoridades externas.</p>` },
        { nome: "Karate", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">A Ilha Karate é um centro de treinamento dedicado ao aperfeiçoamento de técnicas de combate, especialmente o boxe. Com escolas e academias marciais espalhadas por toda a ilha, os guerreiros buscam desenvolver suas habilidades físicas e mentais. A disciplina e o treinamento rigoroso são aspectos essenciais da vida cotidiana. A ilha também é um local de encontros e competições entre lutadores habilidosos da região.</p>` },
        { nome: "Kutsukku", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Irregular e fragmentada, Kutsukku parece ter sido quebrada e remontada de forma caótica. Suas formações naturais desafiam a lógica, criando caminhos estranhos e territórios que mudam com o tempo.</p>` },
        { nome: "Reino Negro de Drum", afiliacaoTexto: "Vanguarda Popular Revolucionária", afiliacaoClasse: "revolucionaria", descricao: `<p style="margin-bottom: 15px;">Uma terra dominada pelo frio e pela opressão, onde montanhas cobertas de neve cercam cidades sombrias e silenciosas. O Reino Negro de Drum é marcado por um governo rígido e implacável, que mantém o controle absoluto sobre seus habitantes através do medo e da escassez. A medicina e o conhecimento são tratados como privilégios raros, concentrados nas mãos de poucos, enquanto o restante da população sobrevive em condições duras, sempre sob vigilância constante.</p>` },
        { nome: "Roshwan", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha de contrastes silenciosos, onde o vento percorre campos dourados. Roshwan é marcada por um clima melancólico, mas fértil.</p>` },
        { nome: "Samba", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Vibrante e caótica, Samba pulsa com energia constante, como se a própria terra dançasse. Suas cidades são coloridas, cheias de música, comércio e conflitos rápidos, tornando cada esquina imprevisível e viva.</p>` },
        { nome: "Samuwanai", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha isolada de atmosfera inquietante, onde uma comunidade fechada vive em harmonia aparente com a natureza e seus próprios costumes peculiares. Campos, bosques e construções simples compõem um cenário quase acolhedor, mas há algo profundamente estranho na forma como tudo segue um padrão rígido e ritualístico. Tradições antigas são levadas ao extremo, e visitantes logo percebem que cada detalhe, dos gestos cotidianos às celebrações, parece fazer parte de algo maior e perturbador.</p>` },
        { nome: "Sorbet", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Coberta por um frio constante, Sorbet é uma ilha de inverno. Nevascas frequentes escondem caminhos e perigos, enquanto suas paisagens geladas desafiam qualquer um que tente dominá-las.</p>` },
        { nome: "Taya", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Marcada por vastas planícies e céus abertos, Taya transmite uma sensação de liberdade quase absoluta. No entanto, sua calmaria esconde perigos sutis, onde o maior inimigo pode ser aquilo que não se vê.</p>` },
        { nome: "Torino", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">O Reino Torino é uma ilha montanhosa e selvagem, coberta por densas florestas e vales profundos. Sua população é composta por pessoas simples, porém habilidosas, que têm uma conexão profunda com a natureza ao seu redor. A medicina tradicional é praticada com base em ervas e remédios naturais, e os habitantes da ilha são conhecidos por sua habilidade em curar ferimentos e doenças com o que a terra oferece. O reino é um bastião de conhecimento sobre as propriedades curativas das plantas e a vida selvagem, com escolas e sábios locais transmitindo esse saber para as novas gerações. O território é auto-sustentável e, devido à sua localização isolada, o Reino Torino mantém uma política de não-interferência em assuntos externos, focando apenas no bem-estar de seu povo e na preservação do ambiente natural.</p>` },
        { nome: "Tumi", afiliacaoTexto: "Despovoada | Governo Mundial/Marinha", afiliacaoClasse: "misto", descricao: `<p style="margin-bottom: 15px;">Uma ilha marcada por uma única cidade de aparência impecável, com ruas limpas, arquitetura elegante e uma beleza quase artificial. Por trás dessa fachada perfeita, no entanto, Tumi vive sob uma rígida ditadura militar, onde a ordem é mantida à força e qualquer desvio desaparece sem deixar vestígios.</p>` },
        { nome: "Vespa", afiliacaoTexto: "Despovoada", afiliacaoClasse: "despovoada", descricao: `<p style="margin-bottom: 15px;">Densa e perigosa, Vespa é tomada por florestas fechadas e criaturas agressivas. O ar parece sempre carregado, como se a própria ilha estivesse em alerta, pronta para reagir a qualquer intruso.</p>` }
    ],
    "West Blue": [
        { nome: "Ballywood", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Um reino próspero, governado por um monarca cuja lealdade ao Governo Mundial garante estabilidade e recursos. Suas forças armadas são bem treinadas, e o país mantém relações estreitas com a Marinha, servindo como ponto estratégico para o controle dos mares próximos.</p>` },
        { nome: "Base da Marinha G-12", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma base naval flutuante construída para reforçar a presença da Marinha em águas perigosas.</p>` },
        { nome: "God Valley", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha remota e misteriosa, ocasionalmente usada por nobres e oficiais do Governo Mundial para eventos privados.</p>` },
        { nome: "Ilusia", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Um reino de influência considerável dentro do Governo Mundial, anteriormente regido por uma linhagem respeitada, agora sob a administração de um novo monarca ambicioso. Sua frota marítima desempenha um papel crucial na defesa das rotas comerciais, garantindo a prosperidade do país.</p>` },
        { nome: "Kano", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Uma terra de guerreiros, conhecida por sua cultura marcial e pelo domínio das técnicas de combate desarmado. Um clã lendário se destaca como o mais temido e respeitado do reino, com sua linhagem forjada em batalhas e desafios de força. Clãs influentes disputam poder entre si, e mercadores de Kano são encontrados nos cantos mais remotos do mundo, espalhando sua arte e seus produtos. Mesmo com a grande diferença geográfica, Kano é rival de Wano, seu país "irmão".</p>` },
        { nome: "Las Camp", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Antes controlada por um poderoso pirata, Las Camp era um refúgio seguro em meio aos mares turbulentos. Apesar de sua natureza criminosa, havia ordem absoluta, com crimes e conflitos internos severamente proibidos. Sob esse domínio, o local prosperou como um território neutro, onde comércio e negociações ocorriam sem medo de traições. No entanto, após a derrota e captura de seu líder pela Marinha, Las Camp mergulhou no caos. Sem uma liderança capaz, a ilha tornou-se um território sem lei, dominado por traições e miséria. Mais tarde, um homem desconhecido assumiu o controle e foi responsável por restaurar a ordem, ainda que de forma rígida e instável.</p>` },
        { nome: "Ohara", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">O berço do conhecimento, lar dos maiores estudiosos da história e das civilizações antigas. Protegida pela majestosa Árvore do Conhecimento, a ilha é um farol para aqueles que buscam a verdade.</p>` },
        { nome: "Soja", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha rural de vastas plantações e vilas simples, onde a terra fértil sustenta uma produção abundante e constante. Apesar da aparência pacífica, há uma sensação de controle silencioso, com rotinas rígidas e pouca abertura para mudanças, como se tudo ali seguisse um propósito maior definido por poucos.</p>` },
        { nome: "Thriller Bark", afiliacaoTexto: "Vanguarda Popular Revolucionária", afiliacaoClasse: "revolucionaria", descricao: `<p style="margin-bottom: 15px;">Uma ilha de arquitetura gótica, repleta de torres imponentes, corredores subterrâneos e salões ornamentados. Seus jardins bem cuidados contrastam com a atmosfera sombria, criando um ambiente tão enigmático quanto fascinante. Thriller Bark é conhecida por suas tradições peculiares e por atrair artesãos e navegadores curiosos em busca de seus segredos. A vida na ilha segue um ritmo próprio, distinto de qualquer outro lugar, enquanto seus habitantes preservam costumes únicos que perduram há gerações.</p>` },
        { nome: "Toroa", afiliacaoTexto: "Vanguarda Popular Revolucionária", afiliacaoClasse: "revolucionaria", descricao: `<p style="margin-bottom: 15px;">Toroa foi governada por uma líder que acreditava que apenas os mais fortes mereciam reinar, sem leis ou restrições. A ilha refletia essa filosofia brutal: traições, duelos e saques não só eram comuns, como incentivados, tornando o território um campo de batalha constante entre criminosos e ambiciosos. Piratas sem lealdade, mercadores inescrupulosos e assassinos de aluguel vagavam pelas ruas, sempre atentos para não se tornarem a próxima vítima. A anarquia era vista como a forma mais pura de liberdade, em oposição a qualquer ordem imposta por líderes externos. Essa era chegou ao fim quando forças organizadas eliminaram todos os piratas da ilha, transformando Toroa em uma terra vazia. Posteriormente, uma organização passou a utilizar o local inóspito como base, e atualmente a Vanguarda Popular Revolucionária é dona dessa ilha, após ter sido conquistada por Dante Salvatore e Donquixote Druig.</p>` }
    ],
    "North Blue": [
        { nome: "Base da Marinha G-11", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma das principais fortalezas navais do North Blue, equipada com uma frota formidável e tropas treinadas para manter a ordem na região. Suas muralhas imponentes e canhões voltados para o mar intimidam qualquer um que tente desafiar sua autoridade.</p>` },
        { nome: "Deul", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Um reino próspero, cercado por extensos campos agrícolas e rios que alimentam suas cities movimentadas. Governado por uma monarquia tradicional, mantém-se distante de conflitos e foca na expansão de suas rotas comerciais pelo North Blue.</p>` },
        { nome: "Downs", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha de ruas estreitas e vielas escondidas, conhecida por ser o lar de ladrões, vigaristas e mercadores duvidosos. Estalagens clandestinas e mercados subterrâneos movimentam a economia local, enquanto alianças temporárias são feitas e desfeitas a cada dia.</p>` },
        { nome: "Flevance", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma cidade de arquitetura refinada, famosa por suas minas de chumbo branco, cuja extração tornou sua elite extremamente rica. Enquanto a nobreza prospera, estudiosos e mineradores buscam entender os segredos do minério que sustenta a economia local.</p>` },
        { nome: "Kuen", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Uma ilha árida e marcada por terrenos hostis, onde apenas os mais resistentes conseguem viver. Pequenos assentamentos se formam de maneira improvisada, e disputas por recursos são frequentes, criando um ambiente instável e perigoso.</p>` },
        { nome: "Lvneel", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Um reino de grande influência, onde historiadores e exploradores são reverenciados. Seus portos movimentados são um dos mais bem organizados do North Blue, permitindo que sua marinha comercial prospere.</p>` },
        { nome: "Minion", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha isolada, com poucas aldeias e uma costa repleta de falésias traiçoeiras. Conhecida por ser um refúgio para aqueles que desejam desaparecer do mundo, suas cavernas escondem histórias de viajantes que nunca retornaram.</p>` },
        { nome: "Notice", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha voltada ao conhecimento e à comunicação, repleta de arquivos, registros e estruturas dedicadas à coleta de informações. Apesar do ar organizado, há uma sensação constante de vigilância, como se tudo que acontece ali estivesse sendo observado e catalogado.</p>` },
        { nome: "Polo Norte", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma região gélida e hostil, onde apenas os mais resistentes conseguem sobreviver. Pequenos assentamentos foram estabelecidos por exploradores que buscam riquezas ocultas no gelo, enquanto embarcações patrulham suas águas traiçoeiras em busca de possíveis intrusos.</p>` },
        { nome: "Rakesh", afiliacaoTexto: "Vanguarda Popular Revolucionária", afiliacaoClasse: "revolucionaria", descricao: `<p style="margin-bottom: 15px;">Uma ilha fortificada pelo Governo Mundial, servindo como posto avançado para operações militares no North Blue. Soldados treinam incessantemente em suas instalações, enquanto oficiais supervisionam atividades estratégicas na região.</p>` },
        { nome: "Rubeck", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Um movimentado centro mercantil, onde comerciantes de diferentes origens negociam bens raros e exóticos. Suas feiras e mercados atraem viajantes de todo o North Blue, tornando-se um ponto essencial para trocas comerciais e informações valiosas.</p>` },
        { nome: "Spider Miles", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Uma cidade industrial tomada pelo crime e pela corrupção, onde fábricas e docas funcionam sob o domínio de sindicatos ilegais. Navios de procedência duvidosa atracam regularmente, transportando cargas contrabandeadas e negociadas por figuras influentes do submundo.</p>` },
        { nome: "Swallow", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha de geografia peculiar, com formações rochosas que lembram asas de uma andorinha. Suas aldeias costeiras vivem da pesca e da navegação, e marinheiros habilidosos dali são frequentemente contratados como navegadores por expedições de longa distância.</p>` },
        { nome: "Welbems", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha industrializada, coberta por construções robustas, máquinas e fumaça constante. A produção nunca para, e tudo gira em torno de eficiência e lucro, mesmo que isso custe a qualidade de vida de quem vive ali.</p>` },
        { nome: "Whiteland", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Um grandioso reino sob o comando de um poderoso líder pirata, temido em todos os mares. Suas cidades prosperam sob esse domínio, enquanto fortalezas vigiam as águas ao redor. Guerreiros e navegadores habilidosos juram lealdade ao governo local, consolidando Whiteland como um império marítimo no North Blue.</p>` }
    ],
    "Paraíso": [
        { nome: "Baltigo", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Conhecida como a "Terra da Argila Branca", Baltigo é uma ilha envolta por ventanias constantes e paisagens áridas, com colinas cobertas por uma poeira esbranquiçada. Sua localização é de difícil acesso, tornando-a um refúgio para eremitas e estudiosos que buscam isolamento.</p>` },
        { nome: "Banaro", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha coberta por vastas plantações e bosques de árvores frutíferas. O solo fértil e o clima ameno fazem dela um local ideal para a agricultura. Apesar de sua tranquilidade, antigas ruínas de um povoado desaparecido indicam que a ilha já teve uma história turbulenta.</p>` },
        { nome: "Base da Marinha G-02", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma fortaleza marítima posicionada na entrada da Grand Line. Seu propósito é controlar o fluxo de embarcações que entram e saem da rota, funcionando como um posto avançado da Marinha na região.</p>` },
        { nome: "Base da Marinha G-08", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma base móvel da Marinha construída sobre uma frota de navios interligados. Sua posição varia conforme a necessidade estratégica, tornando-a uma força de resposta rápida contra ameaças emergentes.</p>` },
        { nome: "Boin", afiliacaoTexto: "Vanguarda Popular Revolucionária", afiliacaoClasse: "revolucionaria", descricao: `<p style="margin-bottom: 15px;">O Arquipélago Boin consiste em um conjunto de ilhas de formato peculiar, lembrando pétalas de flores. Sua flora e fauna são exuberantes, mas perigosas: insetos gigantes e plantas carnívoras dominam o ecossistema, tornando a sobrevivência um desafio constante.</p>` },
        { nome: "Cactus", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha rochosa repleta de colinas pontiagudas que se assemelham a cactos. Os "espinhos" que cobrem suas formações naturais, no entanto, são na verdade lápides de um antigo cemitério, indicando que batalhas sangrentas ocorreram ali no passado.</p>` },
        { nome: "Corrente Tarai", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">A Corrente Tarai é uma poderosa corrente marítima "controlada" pelo Governo Mundial, conectando diretamente três de suas fortalezas mais imponentes: Enies Lobby, Impel Down e a Sede da Marinha. Essa via exclusiva de transporte é estrategicamente projetada para facilitar o deslocamento rápido entre essas bases, ao mesmo tempo em que impede a navegação de embarcações não autorizadas. Devido à sua localização e às águas turbulentas que a compõem, é praticamente impossível acessá-la ou escapar dela sem a permissão do Governo. A Corrente Tarai desempenha um papel crucial na segurança dessas instalações, tornando qualquer invasão ou fuga uma tarefa extremamente desafiadora.</p><div style="margin-top: 30px; margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Base da Marinha G-01</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Governo Mundial/Marinha</i></p><p style="margin-left: 20px;">Marineford é a base de operações do Quartel-General da Marinha, onde os almirantes e altos oficiais residem. Sua posição estratégica próxima à Red Line faz dela uma das fortalezas mais bem protegidas do mundo.</p></div><div style="margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Enies Lobby</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Governo Mundial/Marinha</i></p><p style="margin-left: 20px;">Também chamada de "Ilha Judiciária", Enies Lobby serve como um centro administrativo para julgamentos ligados ao Governo Mundial. Cercada por correntes marítimas violentas, seu acesso é restrito, sendo usada para o transporte de prisioneiros.</p></div><div style="margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Impel Down</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Governo Mundial/Marinha</i></p><p style="margin-left: 20px;">Veja a página Calm Belt.</p></div>` },
        { nome: "Drum", afiliacaoTexto: "Despovoada", afiliacaoClasse: "despovoada", descricao: `<p style="margin-bottom: 15px;">Uma ilha de inverno conhecida por suas montanhas nevadas e o frio intenso que domina a paisagem. Pequenos vilarejos espalhados por suas encostas sobrevivem graças à caça e ao cultivo de ervas medicinais raras. Atualmente está sob o controle do pirata Dragon, que destruiu grande parte da ilha.</p>` },
        { nome: "Foolshout", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Uma ilha marcada por penhascos e uma cidade portuária decadente. O local se tornou refúgio para foras da lei, com tavernas e docas onde se negociam bens ilegais. A ilha está sob o controle de um poderoso capitão pirata e de sua tripulação, conhecidos por dominar a região à força.</p>` },
        { nome: "Ilha Spa", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Um paraíso de águas termais e resorts, repleto de escorregadores naturais, fontes aquecidas e restaurantes sofisticados. Sua fama atrai visitantes de toda a Grand Line em busca de descanso e lazer.</p>` },
        { nome: "Jaya", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha de primavera com vegetação densa e florestas tropicais. Sua geografia montanhosa esconde vestígios de civilizações antigas, mas a maior parte de sua história permanece desconhecida.</p><div style="margin-top: 30px; margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Skypiea</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Independente</i></p><p style="margin-left: 20px;">Uma ilha flutuante sobre o Mar Branco-Branco. Os habitantes locais veneram uma entidade divina e vivem em estruturas suspensas. A identidade do líder supremo de Skypiea é Odin Tenshi.</p></div>` },
        { nome: "Karakuri", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Uma ilha de inverno conhecida por suas máquinas complexas e autômatos. Sua principal cidade, Baldimore, abriga artesãos e inventores que exploram a engenharia avançada. Atualmente, a ilha está sob o controle de um alto representante de um grande Imperador do Mar.</p>` },
        { nome: "Kenzan", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">O Reino Tehna Gehna se ergue sobre a ilha Kenzan, famosa por sua arquitetura peculiar e habitantes que dominam técnicas de combate corpo a corpo.</p>` },
        { nome: "Kuraigana", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Uma ilha sombria, coberta por ruínas de um reino esquecido. Criaturas misteriosas espreitam entre os escombros, e poucos aventureiros ousam permanecer por muito tempo. A ilha está sob o controle de um temido Imperador do Mar.</p>` },
        { nome: "Kyuka", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha de clima ameno e forte economia pesqueira, antes marcada por pequenos vilarejos costeiros e festivais sazonais.</p>` },
        { nome: "Little Garden", afiliacaoTexto: "Desabitada", afiliacaoClasse: "despovoada", descricao: `<p style="margin-bottom: 15px;">Uma ilha isolada, onde a vida selvagem permaneceu intocada por séculos. Dinossauros e outros seres pré-históricos habitam a região, tornando-a um verdadeiro desafio para exploradores.</p>` },
        { nome: "Long Ring Long Land", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha peculiar que se estende em anéis de terra interligados. De tempos em tempos, o recuo das marés revela novas passagens e altera o formato da ilha.</p>` },
        { nome: "Reino Lulusia", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">O Reino Lulusia é um lugar de clima ameno, com colinas suaves, campos férteis e cidades bem cuidadas de aparência clássica. O povo é educado e contido, acostumado a seguir regras e respeitar autoridades, mas há uma tensão silenciosa sob a aparência ordeira, como se muitos sorrisos fossem forçados. A vida é tranquila para quem se encaixa, mas rígida para quem pensa diferente.</p>` },
        { nome: "Mar do Triângulo Florian", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma região coberta por uma névoa densa, conhecida por engolir embarcações inteiras. Muitos marinheiros evitam essa rota, temendo as lendas sobre fantasmas e monstros marinhos. Toda navegação passando por esse local deve ser narrada por um ADM.</p>` },
        { nome: "Mary Geoise", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">O coração do Governo Mundial, onde os governantes mais influentes residem. O local é cercado por muralhas imponentes e protegido por exércitos de elite.</p>` },
        { nome: "Merveille", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha selvagem cercada por ilhotas menores. A flora da região contém uma substância única chamada QI, responsável por acelerar a evolução de algumas criaturas locais.</p>` },
        { nome: "Momoiro", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">A ilha onde se localiza o Reino de Kamabakka, lar de indivíduos que seguem uma cultura própria baseada na beleza e na graça.</p>` },
        { nome: "Namakura", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Uma ilha devastada pela pobreza, onde seus habitantes vivem em condições precárias. A "Terra da Pobreza" já foi um reino próspero, mas guerras e saques reduziram seu povoado a meras sombras do passado. Atualmente, a ilha está sob o controle de um senhor da guerra pirata.</p>` },
        { nome: "Nanimonai", afiliacaoTexto: "Desabitada", afiliacaoClasse: "despovoada", descricao: `<p style="margin-bottom: 15px;">Uma ilha desabitada antes de Alabasta. Suas terras áridas e ausência de recursos fazem dela um local de passagem, raramente visitado por navegantes.</p>` },
        { nome: "Pucci", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Famosa por sua culinária requintada, é chamada de "A Cidade Gourmet" devido à sua grande concentração de chefs renomados.</p>` },
        { nome: "Sabaody", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Um arquipélago formado por gigantescas árvores de mangue. Sua proximidade com a Red Line faz dela um ponto de parada obrigatório para navegantes em busca de novas rotas.</p><div style="margin-top: 30px; margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Ilha dos Homens-Peixe</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Pirata</i></p><p style="margin-left: 20px;">Uma cidade subaquática habitada por homens-peixe e sereianos. Sua localização serve como ponto de travessia entre os mares, mas muitos humanos têm dificuldade para obter passagem segura. Esta ilha está sob o controle do grande Imperador do Mar David The Statue.</p></div>` },
        { nome: "San Faldo", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma cidade movimentada, famosa por seus festivais exuberantes e carnaval interminável.</p>` },
        { nome: "Sandy", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">A ilha onde se encontra o Reino de Alabasta, uma das maiores civilizações da Grand Line. Seu deserto escaldante esconde oásis e segredos antigos. Atualmente, a ilha pertence a poderosos Imperadores dos Mares que disputam influência sobre a região.</p>` },
        { nome: "Water 7", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma cidade conhecida por seus construtores navais, responsáveis por embarcações de qualidade excepcional. Seu sistema de canais a torna uma metrópole única na Grand Line.</p>` }
    ],
    "Novo Mundo": [
        { nome: "Applenine", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha fértil e exuberante, conhecida por suas vastas plantações de maçãs únicas, chamadas de "Nove-Sabores", devido à variedade de gostos que uma única maçã pode oferecer. Situada próxima a outras ilhas influentes, Applenine prospera como um centro comercial independente, atraindo comerciantes e aventureiros. No entanto, sua posição estratégica também a torna alvo frequente de piratas e facções em busca de domínio sobre suas terras produtivas.</p>` },
        { nome: "Base da Marinha G-09", afiliacaoTexto: "Vanguarda Popular Revolucionária", afiliacaoClasse: "revolucionaria", descricao: `<p style="margin-bottom: 15px;">Localizada em uma área estratégica do Novo Mundo, a Base G-09 é uma fortaleza flutuante construída sobre uma ilha artificial reforçada com aço naval. Apelidada de "Forte da Aurora" devido ao brilho dourado que reflete em suas muralhas ao amanhecer, essa base é um dos principais pontos de defesa contra piratas que tentam invadir territórios sob controle do Governo Mundial. Seu comandante é um estrategista infame, conhecido por suas táticas defensivas e emboscadas no mar. A G-09 também serve como um centro de treinamento para novos marinheiros, moldando futuros combatentes para enfrentar as ameaças do Novo Mundo.</p>` },
        { nome: "Base da Marinha G-13", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Escondida em meio a ilhas rochosas e bancos de neblina traiçoeiros, a G-13 é um centro de pesquisa e desenvolvimento militar, onde a Marinha testa novas armas e embarcações projetadas para enfrentar as ameaças do Novo Mundo. Seu acesso é altamente restrito, e poucas pessoas além de seus próprios engenheiros e oficiais conhecem sua localização exata. Rumores entre os marinheiros dizem que a G-13 abriga protótipos tão destrutivos que o Governo Mundial mantém sua existência em segredo, temendo que sua tecnologia caia em mãos erradas.</p>` },
        { nome: "Base da Marinha G-14", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Situada sobre uma série de falésias elevadas, a G-14 se destaca por sua posição privilegiada, permitindo que seus vigias enxerguem grandes distâncias no horizonte. Essa base é especializada em combates aéreos e tem um esquadrão próprio de navios leves, capazes de realizar ataques rápidos e missões de interceptação. Seus oficiais são treinados para operações em altitudes elevadas, e alguns rumores dizem que a base mantém uma parceria secreta com uma tribo de guerreiros que dominam os céus.</p>` },
        { nome: "Base da Marinha G-15", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">A G-15 é uma das bases mais fortificadas do Novo Mundo, construída sobre uma imensa doca naval que abriga frotas de guerra da Marinha. Conhecida como "O Dique de Ferro", essa base é o maior ponto de reabastecimento e manutenção de navios da Marinha na região. Sua estrutura é reforçada com camadas de metal, tornando-a resistente a bombardeios e ataques diretos. Os engenheiros navais mais talentosos do Governo Mundial operam aqui, criando embarcações e armas avançadas para combater a crescente ameaça pirata.</p>` },
        { nome: "Dressrosa", afiliacaoTexto: "Governo Mundial/Marinha | Independente", afiliacaoClasse: "misto", descricao: `<p style="margin-bottom: 15px;">Um reino situado no Novo Mundo, Dressrosa é famoso por sua arquitetura deslumbrante e tradições culturais que misturam festivais vibrantes e um código de honra rigoroso entre seus guerreiros. O reino mantém relações estreitas com o Governo Mundial, garantindo proteção contra piratas e invasores, mas também gerando insatisfação entre aqueles que desejam maior independência. As ruas de Dressrosa são sempre movimentadas, repletas de artistas, duelistas e comerciantes de todo o mundo.</p><div style="margin-top: 30px; margin-bottom: 30px;"><h4 class="highlight-text" style="margin-bottom: 15px;">Green Bit</h4><p style="margin-bottom: 15px; margin-left: 20px;"><strong>Afiliação:</strong> <i>Independente</i></p><p style="margin-left: 20px;">Green Bit é um lugar misterioso e selvagem, onde a natureza reina sem interferência dos humanos. Atravessar a antiga ponte de ferro que liga Dressrosa até aqui é um desafio, com criaturas marinhas gigantes sempre à espreita. Mas o verdadeiro segredo da ilha está escondido sob as raízes das árvores gigantes: o reino dos Tontatta, pequeninos ágeis e incrivelmente fortes que vivem em harmonia com a floresta. Para quem chega sem conhecer os costumes, pode parecer que a ilha é desabitada, mas basta um passo em falso para sentir a velocidade de um golpe dos pequenos guerreiros.</p></div>` },
        { nome: "Egghead", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Uma ilha cercada por um mistério denso, Egghead abriga um dos mais avançados centros de pesquisa do Governo Mundial. Poucos sabem o que realmente acontece em suas instalações, mas rumores falam de experimentos científicos inovadores, desde aprimoramento de armamentos até estudos sobre os segredos do próprio mar. Sua localização isolada a torna quase impenetrável, sendo vigiada constantemente pela Marinha e por guardiões autômatos desconhecidos.</p>` },
        { nome: "Elbaf", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">O poderoso reino dos gigantes, conhecido por sua sociedade guerreira e valores baseados em honra e força. Governado por um conselho de anciãos e grandes chefes de clãs, Elbaf se mantém isolado do mundo, raramente aceitando forasteiros. Sua frota de navios colossais e guerreiros lendários faz com que seja respeitado e temido. As histórias de seus maiores guerreiros são passadas de geração em geração, e apenas os mais fortes entre os gigantes podem sonhar em se tornar lendas em Elbaf.</p>` },
        { nome: "Foodvalten", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Uma ilha de grande riqueza gastronômica, Foodvalten é um paraíso para os amantes da comida e um ponto crucial para comerciantes de especiarias raras. Seus mercados oferecem desde pratos exóticos até bebidas fermentadas em cavernas subterrâneas por décadas. Devido à sua abundância, a ilha sempre foi disputada por piratas, sendo atualmente governada por forças que impõem sua autoridade à base de ferro e fogo, transformando Foodvalten em um território perigoso para forasteiros.</p>` },
        { nome: "Hachinosu", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Conhecida como a "Ilha dos Piratas", Hachinosu é um refúgio para foras-da-lei e uma terra sem leis. Diferentes tripulações chegam e partem, negociando, duelando e tramando alianças. As tavernas nunca fecham, e cada beco pode esconder um segredo sombrio. Atualmente, a ilha está sob o domínio de um Imperador do Mar, mas conflitos constantes entre forças rivais tornam o controle do território instável.</p>` },
        { nome: "Mystoria", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha que parece flutuar entre a realidade e a lenda, Mystoria é cercada por névoas enigmáticas que confundem navegadores. Muitas tripulações que chegam aqui nunca mais são vistas, enquanto outras retornam com histórias sobre criaturas impossíveis e cidades fantasmagóricas. Alguns acreditam que a ilha é protegida por uma civilização oculta, enquanto outros veem Mystoria apenas como um jogo cruel do mar.</p>` },
        { nome: "Prodence", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Um reino orgulhoso e independente, Prodence é famoso por seus guerreiros destemidos e por sua monarquia que valoriza a força e a bravura. Seus soldados treinam desde a infância, preparando-se para batalhas que garantam a soberania de seu povo. O rei governa com mão firme, buscando manter sua posição no sempre volátil cenário político do Novo Mundo.</p>` },
        { nome: "Punk Hazard", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Punk Hazard é uma ilha vulcânica onde o Governo Mundial mantém grandes fornalhas e fundições para a produção de armas e navios da Marinha. Suas montanhas expelem fumaça constantemente, alimentando forjas gigantescas que derretem metais raros extraídos das profundezas da ilha. O local também abriga um centro de pesquisas avançadas, onde cientistas estudam novas tecnologias militares em segredo. Devido ao calor intenso e à atividade vulcânica, a ilha é fortemente patrulhada.</p>` },
        { nome: "Raijin", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Uma ilha perpetuamente envolta por tempestades violentas, onde relâmpagos cortam o céu sem cessar. Suas montanhas são lar de tribos isoladas que desenvolveram resistência às tempestades, tornando-se guerreiros formidáveis. Poucos ousam se aventurar em Raijin, mas aqueles que sobrevivem falam de tesouros ocultos e da possibilidade de dominar o próprio trovão.</p>` },
        { nome: "Risky Red", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Conhecida como a "Ilha dos Atiradores", Risky Red é um território onde a mira perfeita decide quem vive e quem morre. As tavernas são palco de desafios constantes, e qualquer desentendimento pode resultar em um duelo de pistolas. A ilha está sob o controle de um poderoso Imperador do Mar, tornando o local ainda mais perigoso para visitantes despreparados.</p>` },
        { nome: "Wano", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Um país fechado para o mundo exterior, onde samurais seguem um rígido código de conduta e honram a tradição de seus ancestrais. Isolado por suas montanhas e mares traiçoeiros, Wano mantém sua cultura e governo sem interferência do Governo Mundial. No entanto, rumores dizem que sua paz interna esconde conflitos entre clãs e traições silenciosas. Atualmente, a ilha está sob o domínio de um Imperador do Mar, envolvido em disputas territoriais contínuas.</p>` },
        { nome: "Whole Cake", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Um arquipélago coberto por vegetação vibrante e construções peculiares, Whole Cake é um paraíso de excessos onde festas nunca terminam. As ilhas prosperam por meio de alianças e negociações secretas, tornando-se um dos territórios mais influentes do Novo Mundo. No passado, todo o arquipélago esteve sob o domínio de uma Imperatriz do Mar, cuja influência ainda marca a região.</p>` },
        { nome: "Yukiryu", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Uma ilha de inverno coberta por florestas geladas e montanhas intransponíveis. Suas cavernas abrigam criaturas lendárias e guerreiros nômades que vivem em harmonia com a neve. A beleza de Yukiryu contrasta com sua hostilidade, pois poucos sobrevivem ao frio e às tempestades repentinas que assolam a região</p>` }
    ],
    "Calm Belt": [
        { nome: "Amazon Lily", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Amazon Lily é uma ilha localizada no Calm Belt, cercada por águas infestadas de Reis do Mar, o que a torna isolada e de difícil acesso. A ilha é governada pelas guerreiras da Tribo Kuja, uma sociedade exclusivamente feminina conhecida por sua força em combate e pelo domínio do Haki. A cultura local valoriza a força e a independência, e os homens são estritamente proibidos de permanecer na ilha. Devido ao seu isolamento e às habilidades excepcionais de suas habitantes, Amazon Lily é um dos lugares mais singulares do mundo.</p>` },
        { nome: "Base da Marinha G-04", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Base flutuante da Marinha. Fronteira da Grand Line com o South Blue no Calm Belt.</p>` },
        { nome: "Base da Marinha G-05", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Base flutuante da Marinha. Fronteira da Grand Line com o East Blue no Calm Belt.</p>` },
        { nome: "Base da Marinha G-06", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Base flutuante da Marinha. Fronteira da Grand Line com o North Blue no Calm Belt.</p>` },
        { nome: "Base da Marinha G-07", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Base flutuante da Marinha. Fronteira da Grand Line com o West Blue no Calm Belt.</p>` },
        { nome: "Impel Down", afiliacaoTexto: "Governo Mundial/Marinha", afiliacaoClasse: "marinha", descricao: `<p style="margin-bottom: 15px;">Impel Down é uma prisão submarina de segurança máxima administrada pelo Governo Mundial, situada no Calm Belt e integrada à Corrente Tarai. Junto com Marineford e Enies Lobby, forma um dos três grandes baluartes da justiça no Paraíso. Destinada a manter os criminosos e piratas mais perigosos sob rigorosa vigilância, a fortaleza é praticamente impenetrável. Sua estrutura imponente e seus guardas implacáveis fazem dela um verdadeiro pesadelo para qualquer detento.</p>` },
        { nome: "Rusukaina", afiliacaoTexto: "Vanguarda Popular Revolucionária", afiliacaoClasse: "revolucionaria", descricao: `<p style="margin-bottom: 15px;">Rusukaina é uma ilha inóspita localizada no Calm Belt, caracterizada por suas condições extremas e hostis. O clima na ilha muda drasticamente 48 vezes ao longo do ano, tornando o ambiente imprevisível e desafiador. Além disso, a região é habitada por diversas criaturas selvagens e extremamente perigosas, dificultando ainda mais a sobrevivência de qualquer visitante. Devido a esses fatores, Rusukaina é um local ideal para o desenvolvimento de habilidades de combate e resistência, sendo um verdadeiro teste para aqueles que ousam enfrentar seus perigos.</p>` },
        { nome: "Shitsurakujima", afiliacaoTexto: "Vanguarda Popular Revolucionária", afiliacaoClasse: "revolucionaria", descricao: `<p style="margin-bottom: 15px;">Shitsurakujima é uma ilha remota e isolada localizada no Calm Belt. É um território montanhoso coberto por florestas densas e constantemente assolado por um clima glacial. Ventos cortantes, tempestades de neve frequentes e terrenos traiçoeiros tornaram a ilha inóspita e praticamente inabitável</p>` }
    ],
    "Ilhas Sem Localização Exata": [
        { nome: "Arkham Island", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `` },
        { nome: "Gran Tesoro", afiliacaoTexto: "Pirata", afiliacaoClasse: "pirata", descricao: `<p style="margin-bottom: 15px;">Gran Tesoro é um navio enorme com uma metrópole construída sobre ele, sendo a maior cidade de entretenimento do mundo.</p>` },
        { nome: "Ilha do Sol", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `` },
        { nome: "Reino de Atlantis", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `` },
        { nome: "Zou", afiliacaoTexto: "Independente", afiliacaoClasse: "independente", descricao: `<p style="margin-bottom: 15px;">Zou é uma ilha situada nas costas de um enorme elefante com cerca de 1.000 anos de idade, que percorre o Novo Mundo. É conhecida como uma "ilha fantasma" devido aos Log Pose serem incapazes de apontá-la. É a casa da Tribo Mink.</p>` }
    ]
};

// ==========================================
// BANCO DE DADOS - RECURSOS E MATERIAIS
// ==========================================
const recursosDasIlhas = {
    "Amazon Lily": ["Carvalho", "Pau-Brasil", "Pinheiro", "Materiais de Criadores 1", "Unobtainium", "Vibranium"],
    "Applenine": ["Pinheiro", "Materiais de Criadores 1", "Unobtainium"],
    "Arkham Island": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Adamantium"],
    "Ballywood": ["Carvalho", "Materiais de Criadores 1", "Materiais de Criadores 2", "Materiais de Criadores 3", "Ferro"],
    "Baltigo": ["Carvalho", "Materiais de Criadores 1", "Vibranium"],
    "Banaro": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Base da Marinha G-01": [],
    "Base da Marinha G-02": [],
    "Base da Marinha G-03": [],
    "Base da Marinha G-04": [],
    "Base da Marinha G-05": [],
    "Base da Marinha G-06": [],
    "Base da Marinha G-07": [],
    "Base da Marinha G-08": [],
    "Base da Marinha G-09": [],
    "Base da Marinha G-10": [],
    "Base da Marinha G-11": [],
    "Base da Marinha G-12": [],
    "Base da Marinha G-13": [],
    "Base da Marinha G-14": [],
    "Base da Marinha G-15": [],
    "Baterilla": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Mithril"],
    "Boin": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Aço Carbono", "Unobtainium"],
    "Briss": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Cactus": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Centaurea": ["Carvalho", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Clockwork": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Conomi": ["Carvalho", "Pau-Brasil", "Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Aço Carbono", "Ferro"],
    "Corrente Tarai": [],
    "Cozia": ["Carvalho", "Materiais de Criadores 1", "Aço Carbono"],
    "Dawn": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Deul": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Downs": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Dressrosa": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Materiais de Criadores 3", "Mithril"],
    "Drum": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Materiais de Criadores 3", "Mithril"],
    "Egghead": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 4", "Adamantium"],
    "Elbaf": ["Árvore do Tesouro Adão", "Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Adamantium", "Vibranium"],
    "Enies Lobby": [],
    "Flevance": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Foodvalten": ["Pinheiro", "Pau-Brasil", "Materiais de Criadores 1", "Unobtainium"],
    "Foolshout": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Aço Carbono"],
    "Gecko": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Goat": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "God Valley": ["Carvalho", "Materiais de Criadores 1", "Vibranium"],
    "Gran Tesoro": ["Árvore do Tesouro Adão", "Materiais de Criadores 1"],
    "Green Bit": ["Beskar"],
    "Hachinosu": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Adamantium"],
    "Ilha do Sol": ["Pinheiro", "Materiais de Criadores 1", "Mithril"],
    "Ilha dos Animais Raros": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Unobtainium"],
    "Ilha dos Homens-Peixe": ["Árvore da Luz Solar Eva", "Materiais de Criadores 1", "Adamantium"],
    "Ilha Navio de Guerra": ["Carvalho", "Materiais de Criadores 1", "Aço Carbono"],
    "Ilha Shimotsuki": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Ilha Spa": ["Pinheiro", "Materiais de Criadores 1", "Unobtainium"],
    "Ilusia": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Impel Down": [],
    "Jaya": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Kano": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Materiais de Criadores 2", "Mithril"],
    "Karakuri": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Adamantium"],
    "Karate": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Kenzan": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Kuen": ["Pinheiro", "Pau-Brasil", "Materiais de Criadores 1", "Ferro"],
    "Kumate": ["Carvalho", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Kuraigana": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Materiais de Criadores 2", "Materiais de Criadores 3", "Mithril"],
    "Kutsukku": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Kyuka": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Las Camp": ["Pinheiro", "Pau-Brasil", "Materiais de Criadores 1", "Aço Carbono"],
    "Little Garden": ["Carvalho", "Materiais de Criadores 1", "Unobtainium"],
    "Long Ring Long Land": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono", "Unobtainium"],
    "Lvneel": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Mary Geoise": ["Carvalho", "Mithril"],
    "Merveille": ["Carvalho", "Materiais de Criadores 1", "Vibranium"],
    "Minion": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Mirrorball": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Momoiro": ["Pinheiro", "Materiais de Criadores 1", "Unobtainium"],
    "Mystoria": ["Carvalho", "Materiais de Criadores 1", "Materiais de Criadores 2", "Mithril"],
    "Namakura": ["Pinheiro", "Pau-Brasil", "Materiais de Criadores 1", "Aço Carbono"],
    "Nanimonai": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Notice": ["Carvalho", "Materiais de Criadores 1", "Aço Carbono"],
    "Ohara": ["Carvalho", "Materiais de Criadores 1", "Materiais de Criadores 2", "Mithril", "Unobtainium"],
    "Organ": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Aço Carbono", "Ferro"],
    "Oykot": ["Pinheiro", "Pau-Brasil", "Materiais de Criadores 1", "Aço Carbono"],
    "Polo Norte": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Mithril"],
    "Polestar": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Materiais de Criadores 2", "Materiais de Criadores 3", "Ferro", "Unobtainium"],
    "Prodence": ["Carvalho", "Materiais de Criadores 1", "Unobtainium"],
    "Pucci": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Punk Hazard": ["Carvalho", "Materiais de Criadores 1", "Materiais de Criadores 2", "Mithril"],
    "Raijin": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Unobtainium"],
    "Rakesh": ["Carvalho", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Reino de Atlantis": ["Carvalho", "Materiais de Criadores 1", "Kairoseki"],
    "Reino Lulusia": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Unobtainium"],
    "Reino Negro de Drum": ["Pinheiro", "Materiais de Criadores 1", "Wapometal"],
    "Risky Red": ["Pinheiro", "Pau-Brasil", "Materiais de Criadores 1", "Materiais de Criadores 2", "Mithril"],
    "Roshwan": ["Pinheiro", "Materiais de Criadores 1", "Ferro"],
    "Rubeck": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Rusukaina": ["Carvalho", "Materiais de Criadores 1", "Vibranium"],
    "Sabaody": ["Pau-Brasil", "Mogno de Sabaody", "Materiais de Criadores 1", "Materiais de Criadores 2", "Materiais de Criadores 3", "Adamantium", "Mithril"],
    "Samba": ["Carvalho", "Pau-Brasil", "Pinheiro", "Materiais de Criadores 1", "Vibranium"],
    "Samuwanai": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Ferro"],
    "San Faldo": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Sandy": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Vibranium"],
    "Shitsurakujima": ["Pinheiro", "Materiais de Criadores 1", "Vibranium"],
    "Skypiea": ["Pinheiro", "Materiais de Criadores 1", "Unobtainium", "Vibranium"],
    "Soja": ["Pinheiro", "Materiais de Criadores 1", "Ferro"],
    "Sorbet": ["Pinheiro", "Materiais de Criadores 1", "Aço Carbono"],
    "Spider Miles": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Aço Carbono"],
    "Swallow": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Taya": ["Pinheiro", "Materiais de Criadores 1", "Ferro"],
    "Tequila Wolf": ["Materiais de Criadores 1"],
    "Thriller Bark": ["Carvalho", "Materiais de Criadores 1", "Materiais de Criadores 2", "Mithril"],
    "Torino": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Materiais de Criadores 3", "Ferro"],
    "Toroa": ["Pinheiro", "Pau-Brasil", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Tumi": ["Carvalho", "Materiais de Criadores 1", "Ferro"],
    "Vespa": ["Carvalho", "Materiais de Criadores 1", "Ferro"],
    "Wano": ["Carvalho", "Pinheiro", "Pau-Brasil", "Materiais de Criadores 1", "Adamantium", "Kairoseki"],
    "Water 7": ["Carvalho", "Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Materiais de Criadores 3", "Mithril"],
    "Welbems": ["Carvalho", "Materiais de Criadores 1", "Unobtainium"],
    "Whiteland": ["Carvalho", "Pau-Brasil", "Materiais de Criadores 1", "Aço Carbono"],
    "Whole Cake": ["Pinheiro", "Materiais de Criadores 1", "Materiais de Criadores 2", "Mithril", "Unobtainium"],
    "Yotsuba": ["Carvalho", "Materiais de Criadores 1", "Materiais de Criadores 2", "Ferro"],
    "Yukiryu": ["Pinheiro", "Materiais de Criadores 1", "Vibranium"],
    "Zou": ["Carvalho", "Pinheiro"]
};

// ==========================================
// FUNÇÕES DE RENDERIZAÇÃO DINÂMICA
// ==========================================
function renderizarIlhasDinamicas() {
    const container = document.getElementById('island-container');
    if (!container || !container.hasAttribute('data-mar')) return;

    const mar = container.getAttribute('data-mar');
    const ilhasDoMar = bancoDeIlhas[mar];

    if (!ilhasDoMar) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-color);">Nenhuma ilha cadastrada neste mar ainda.</p>`;
        return;
    }

    let htmlGerado = "";

    ilhasDoMar.forEach(ilha => {
        htmlGerado += `
            <div class="island-item" data-name="${ilha.nome}" data-faction="${ilha.afiliacaoClasse}">
                <section class="content-section">
                    <h2 class="title-quantico toggle-title" style="font-size: 32px; text-align: center; color: var(--accent-color); margin-bottom: 25px; cursor: pointer;">
                        ${ilha.nome} <span class="toggle-icon">▼</span>
                    </h2>
                    
                    <div class="toggle-content">
                        <p style="margin-bottom: 15px;"><strong>Afiliação:</strong> <i>${ilha.afiliacaoTexto}</i></p>
                        ${ilha.descricao}
                    </div>
                </section>
                <hr style="border: 1px solid var(--sidebar-border); margin: 40px 0;">
            </div>
        `;
    });

    container.innerHTML = htmlGerado;

    if (typeof iniciarSistemaDeAbas === 'function') {
        iniciarSistemaDeAbas();
    }
}

// ==========================================
// CARREGAMENTO DE LOCAIS DE MATERIAIS
// ==========================================
function carregarLocaisDeMateriais() {
    const elementosMaterial = document.querySelectorAll('.locais-material');
    if (elementosMaterial.length === 0) return;

    elementosMaterial.forEach(elemento => {
        const materialDesejado = elemento.getAttribute('data-material');
        let ilhasEncontradas = [];

        if (materialDesejado) {
            for (const [ilha, materiais] of Object.entries(recursosDasIlhas)) {
                if (materiais.includes(materialDesejado)) {
                    ilhasEncontradas.push(ilha);
                }
            }
        }

        if (ilhasEncontradas.length > 0) {
            let ilhasOrdenadas = [...new Set(ilhasEncontradas)].sort((a, b) => a.localeCompare(b, 'pt-BR'));
            if (ilhasOrdenadas.length === 1) {
                elemento.textContent = ilhasOrdenadas[0];
            } else {
                let ultimaIlha = ilhasOrdenadas.pop();
                elemento.textContent = ilhasOrdenadas.join(', ') + ' e ' + ultimaIlha;
            }
        } else {
            elemento.textContent = 'Disponibilidade restrita ou desconhecida.';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarIlhasDinamicas();
    iniciarSistemaDeAbas();
    carregarLocaisDeMateriais();

    const toggleAllBtn = document.getElementById('toggle-all-btn');
    if (toggleAllBtn) {
        if (document.querySelector('.calc-floating')) {
            toggleAllBtn.parentElement.style.setProperty('bottom', 'auto', 'important');
            toggleAllBtn.parentElement.style.setProperty('top', '80px', 'important');
        }

        toggleAllBtn.addEventListener('click', () => {
            const toggleTitles = document.querySelectorAll('.toggle-title');
            if (!toggleTitles || toggleTitles.length === 0) return;
            const isAllCollapsed = toggleTitles[0] && !toggleTitles[0].classList.contains('collapsed');

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

            toggleAllBtn.textContent = isAllCollapsed ? 'Expandir Tudo' : 'Retrair Tudo';
        });
    }
});

// ==========================================
// RESISTÊNCIA - LOJA DE FERREIROS E ESCUDOS
// ==========================================
const minerioHp = {
    'Adamantium': 10000,
    'Aço Carbono': 2000,
    'Beskar': 4000,
    'Ferro': 1000,
    'Mithril': 8000,
    'Unobtainium': 3500,
    'Vibranium': 15000,
    'Kairoseki': '???',
    'Wapometal': '???'
};

function carregarHpDosMinerios() {
    document.querySelectorAll('.hp-value[data-hp-key]').forEach(el => {
        const key = el.getAttribute('data-hp-key');
        if (minerioHp[key] !== undefined) {
            const val = minerioHp[key];
            if (val === '???') {
                el.textContent = '???';
            } else {
                el.textContent = val.toLocaleString('pt-BR');
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', carregarHpDosMinerios);

// ==========================================
// PREÇOS - LOJA DE FERREIROS
// ==========================================
const minerioPrices = {
    'adamantium': 500000000,
    'aco-carbono': 60000000,
    'beskar': 300000000,
    'ferro': 40000000,
    'mithril': 400000000,
    'unobtainium': 150000000,
    'vibranium': 500000000,
    'kairoseki': 4000000000,
    'wapometal': null,
    'barra-damasco': null
};

function formatPriceBR(value) {
    if (value === null || value === undefined) return '—';
    return '฿' + value.toLocaleString('pt-BR');
}

function populateMinerioPrices() {
    document.querySelectorAll('.price-value[data-price-key]').forEach(el => {
        const key = el.getAttribute('data-price-key');
        const val = minerioPrices[key];
        el.textContent = formatPriceBR(val);
    });
}

document.addEventListener('DOMContentLoaded', populateMinerioPrices);

// ==========================================
// SISTEMA DE ABAS COM RETRAÇÃO E EXPANSÃO
// ==========================================
function iniciarSistemaDeAbas() {
    document.querySelectorAll('.toggle-title').forEach(title => {
        const newTitle = title.cloneNode(true);
        title.parentNode.replaceChild(newTitle, title);
        
        newTitle.addEventListener('click', function() {
            this.classList.toggle('collapsed');
            const content = this.nextElementSibling;
            if (content && content.classList.contains('toggle-content')) {
                content.classList.toggle('collapsed');
            }
        });
    });
}

// ==========================================
// CALCULADORA DE MINÉRIOS
// ==========================================
(function() {
    const mineriosDisplay = {
        'aco-carbono': 'Aço Carbono',
        'adamantium': 'Adamantium',
        'beskar': 'Beskar',
        'ferro': 'Ferro',
        'kairoseki': 'Kairoseki',
        'mithril': 'Mithril',
        'unobtainium': 'Unobtainium',
        'vibranium': 'Vibranium'
    };

    function formatNumberInputDisplay(value) {
        if (value == null) return '';
        let v = String(value).replace(/[^0-9,\.]/g, '');
        if (v === '') return '';
        let sepIndex = Math.max(v.lastIndexOf('.'), v.lastIndexOf(','));
        let intPart = v;
        let decPart = '';
        if (sepIndex !== -1) {
            intPart = v.slice(0, sepIndex);
            decPart = v.slice(sepIndex + 1);
        }
        intPart = intPart.replace(/^0+(?=\d)/, '');
        let intNum = intPart === '' ? 0 : parseInt(intPart, 10);
        let formattedInt = intNum.toLocaleString('pt-BR');
        if (decPart !== '') {
            decPart = decPart.replace(/[^0-9]/g, '').slice(0,1);
            return formattedInt + ',' + decPart;
        }
        return formattedInt;
    }

    function parseFormattedNumber(str) {
        if (!str) return 0;
        let s = String(str).trim();
        s = s.replace(/\./g, '');
        s = s.replace(/,/g, '.');
        let n = parseFloat(s);
        return isNaN(n) ? 0 : n;
    }

    function initCalculadoraMinerios() {
        const container = document.getElementById('calculadora-minerios-container');
        if (!container) return;

        const optionsHTML = Object.keys(mineriosDisplay).map(key => `<option value="${key}">${mineriosDisplay[key]}</option>`).join('');

        container.innerHTML = `
    <div class="calc-floating">
        <div class="calc-title">Calculadora de Minérios ▲</div>

        <div class="input-group">
            <label>Metal Principal</label>
            <select id="calc-metal">` + optionsHTML + `<option value="damasco">Barra Damasco</option><option value="wapometal">Wapometal</option></select>
        </div>

        <div class="input-group" id="calc-peso-container">
            <label>Quantidade de Lingotes</label>
            <input type="text" id="calc-peso" value="1">
        </div>

        <div id="calc-damasco-container" style="display:none; width: 100%;">
            <div class="input-group" style="margin-bottom: 10px;">
                <label>Composição 1 (Metal / Lingotes)</label>
                <div style="display:flex; gap:10px;">
                    <select id="calc-metal1" style="flex:2;">`+ optionsHTML +`</select>
                    <input type="text" id="calc-peso1" value="1" style="flex:1;">
                </div>
            </div>
            <div class="input-group">
                <label>Composição 2 (Metal / Lingotes)</label>
                <div style="display:flex; gap:10px;">
                    <select id="calc-metal2" style="flex:2;">`+ optionsHTML +`</select>
                    <input type="text" id="calc-peso2" value="1" style="flex:1;">
                </div>
            </div>
        </div>

        <div class="resultado-nav" id="calc-resultado" style="margin-top: 15px;">Total: ฿0</div>
    </div>
        `;

        const selectMetal = document.getElementById('calc-metal');
        const inputPeso = document.getElementById('calc-peso');
        const damascoContainer = document.getElementById('calc-damasco-container');
        const pesoContainer = document.getElementById('calc-peso-container');
        const selectMetal1 = document.getElementById('calc-metal1');
        const selectMetal2 = document.getElementById('calc-metal2');
        const inputPeso1 = document.getElementById('calc-peso1');
        const inputPeso2 = document.getElementById('calc-peso2');
        const spanResultado = document.getElementById('calc-resultado');

        function formatAndMaintain(e) {
            const el = e.target;
            const formatted = formatNumberInputDisplay(el.value);
            el.value = formatted;
        }

        function calcular() {
            const selecao = selectMetal.value;

            if (selecao === 'wapometal') {
                pesoContainer.style.display = 'block';
                damascoContainer.style.display = 'none';
                spanResultado.textContent = 'Total: ???';
                spanResultado.style.color = '#ff5252';
                return;
            }

            let valorFinal = 0;
            if (selecao === 'damasco') {
                pesoContainer.style.display = 'none';
                damascoContainer.style.display = 'block';
                const preco1 = (minerioPrices[selectMetal1.value] !== undefined) ? minerioPrices[selectMetal1.value] : 0;
                const preco2 = (minerioPrices[selectMetal2.value] !== undefined) ? minerioPrices[selectMetal2.value] : 0;
                const peso1 = parseFormattedNumber(inputPeso1.value) || 0;
                const peso2 = parseFormattedNumber(inputPeso2.value) || 0;
                valorFinal = (preco1 * peso1) + (preco2 * peso2);
            } else {
                pesoContainer.style.display = 'block';
                damascoContainer.style.display = 'none';
                const preco = (minerioPrices[selecao] !== undefined) ? minerioPrices[selecao] : 0;
                const peso = parseFormattedNumber(inputPeso.value) || 0;
                valorFinal = preco * peso;
            }

            spanResultado.style.color = '#4CAF50';
            spanResultado.textContent = 'Total: ฿' + Math.round(valorFinal).toLocaleString('pt-BR');
        }

        selectMetal.addEventListener('change', calcular);
        selectMetal1.addEventListener('change', calcular);
        selectMetal2.addEventListener('change', calcular);

        [inputPeso, inputPeso1, inputPeso2].forEach(inp => {
            inp.addEventListener('input', function(e) { formatAndMaintain(e); calcular(); });
            inp.value = formatNumberInputDisplay(inp.value);
        });

        calcular();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCalculadoraMinerios);
    } else {
        initCalculadoraMinerios();
    }
})();

(function() {
    const mineriosEscudo = {
        "Adamantium": { preco10kg: 500000000, hp: minerioHp['Adamantium'] },
        "Aço Carbono": { preco10kg: 60000000, hp: minerioHp['Aço Carbono'] },
        "Beskar": { preco10kg: 300000000, hp: minerioHp['Beskar'] },
        "Ferro": { preco10kg: 40000000, hp: minerioHp['Ferro'] },
        "Mithril": { preco10kg: 400000000, hp: minerioHp['Mithril'] },
        "Unobtainium": { preco10kg: 150000000, hp: minerioHp['Unobtainium'] },
        "Vibranium": { preco10kg: 500000000, hp: minerioHp['Vibranium'] },
        "Kairoseki": { preco10kg: 4000000000, hp: minerioHp['Kairoseki'] },
        "Wapometal": { preco10kg: '???', hp: minerioHp['Wapometal'] }
    };

    function initCalculadoraEscudos() {
        const container = document.getElementById('calculadora-escudos-container');
        if (!container) return;

        const optionsHTML = Object.keys(mineriosEscudo).map(name => `<option value="${name}">${name}</option>`).join('');

        container.innerHTML = `
    <style>
        .escudo-calc-container {
            background: var(--sidebar-bg);
            padding: 30px;
            border-radius: 12px;
            border: 1px solid var(--sidebar-border);
            max-width: 650px;
            margin: 40px auto;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            font-family: 'Comfortaa', Verdana, sans-serif;
            color: var(--text-color);
        }

        .escudo-calc-title {
            font-family: 'Quantico', sans-serif;
            font-size: 28px;
            margin-top: 0;
            margin-bottom: 25px;
            text-align: center;
            color: var(--accent-color);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .escudo-calc-field {
            margin-bottom: 20px;
        }

        .escudo-calc-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 700;
            font-size: 16px;
        }

        .escudo-calc-input-group {
            display: flex;
            gap: 10px;
        }

        .escudo-calc-select, .escudo-calc-input {
            width: 100%;
            padding: 12px 15px;
            border-radius: 8px;
            border: 1px solid var(--sidebar-border);
            background: var(--bg-color);
            color: var(--text-color);
            font-size: 16px;
            transition: border-color 0.3s;
        }

        .escudo-calc-select {
            appearance: none;
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23b0bec5%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095a17.6%2017.6%200%200%200%205.5-12.8c0-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
            background-repeat: no-repeat;
            background-position: right 15px top 50%;
            background-size: 12px auto;
            cursor: pointer;
        }

        .escudo-calc-select:focus, .escudo-calc-input:focus {
            outline: none;
            border-color: var(--accent-color);
        }

        .escudo-calc-results {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px dashed var(--sidebar-border);
            display: flex;
            flex-direction: column;
            gap: 15px;
            font-size: 18px;
        }

        .escudo-calc-result-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 15px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.03);
        }

        .escudo-calc-result-item.total {
            background: rgba(211, 47, 47, 0.1);
            border: 1px solid rgba(211, 47, 47, 0.3);
            font-weight: 700;
            padding: 15px;
        }

        .escudo-calc-result-label {
            font-weight: 400;
        }

        .escudo-calc-result-value {
            font-family: 'Quantico', sans-serif;
            font-weight: 700;
            font-size: 20px;
        }

        .escudo-calc-result-value.positivo { color: #f44336; }
        .escudo-calc-result-value.negativo { color: #4CAF50; }
        
        #calc-escudo-hp {
            color: var(--accent-color);
        }
    </style>
    <div class="escudo-calc-container">
        <h2 class="escudo-calc-title">Calculadora de Escudos</h2>
        
        <div class="escudo-calc-field">
            <label class="escudo-calc-label">Minério Base</label>
            <select id="calc-escudo-metal" class="escudo-calc-select">` + optionsHTML + `</select>
        </div>

        <div class="escudo-calc-field">
            <label class="escudo-calc-label">Mão de Obra do Ferreiro (%)</label>
            <div class="escudo-calc-input-group">
                <select id="calc-escudo-tipo-taxa" class="escudo-calc-select" style="flex: 1.5;">
                    <option value="1">Acréscimo (Taxa)</option>
                    <option value="-1">Desconto</option>
                </select>
                <input type="number" id="calc-escudo-taxa" class="escudo-calc-input" style="flex: 1;" min="0" max="25" value="0" placeholder="0 a 25">
            </div>
        </div>

        <div class="escudo-calc-results">
            <div class="escudo-calc-result-item">
                <span class="escudo-calc-result-label">Custo Base:</span>
                <strong id="calc-escudo-base" class="escudo-calc-result-value">฿0</strong>
            </div>
            <div class="escudo-calc-result-item">
                <span class="escudo-calc-result-label">Parte do Ferreiro (Mão de Obra):</span>
                <strong id="calc-escudo-ferreiro" class="escudo-calc-result-value">฿0</strong>
            </div>
            <div class="escudo-calc-result-item total">
                <span class="escudo-calc-result-label">Preço Total a Pagar:</span>
                <strong id="calc-escudo-total" class="escudo-calc-result-value" style="color: #4CAF50; font-size: 24px;">฿0</strong>
            </div>
            <div class="escudo-calc-result-item" style="border-top: 1px solid var(--sidebar-border); border-radius: 0; background: transparent; padding-top: 20px;">
                <span class="escudo-calc-result-label">HP do Escudo:</span>
                <strong id="calc-escudo-hp" class="escudo-calc-result-value" style="font-size: 24px;">0</strong>
            </div>
        </div>
    </div>
        `;

        const selectMetal = document.getElementById('calc-escudo-metal');
        const selectTipoTaxa = document.getElementById('calc-escudo-tipo-taxa');
        const inputTaxa = document.getElementById('calc-escudo-taxa');

        const spanBase = document.getElementById('calc-escudo-base');
        const spanFerreiro = document.getElementById('calc-escudo-ferreiro');
        const spanTotal = document.getElementById('calc-escudo-total');
        const spanHp = document.getElementById('calc-escudo-hp');

        function calcular() {
            let taxaVal = parseInt(inputTaxa.value, 10);
            if (isNaN(taxaVal) || taxaVal < 0) {
                taxaVal = 0;
            } else if (taxaVal > 25) {
                taxaVal = 25;
            }
            
            if (inputTaxa.value !== "" && parseInt(inputTaxa.value, 10) > 25) {
                inputTaxa.value = 25;
            } else if (inputTaxa.value !== "" && parseInt(inputTaxa.value, 10) < 0) {
                inputTaxa.value = 0;
            }

            const multiplicador = parseInt(selectTipoTaxa.value, 10);
            const porcentagem = (taxaVal / 100) * multiplicador;

            const minName = selectMetal.value;
            const data = mineriosEscudo[minName];
            
            if (data.hp === '???') {
                spanHp.textContent = '???';
            } else {
                spanHp.textContent = data.hp.toLocaleString('pt-BR');
            }

            if (data.preco10kg === '???') {
                spanBase.textContent = '???';
                spanBase.style.color = '#ff5252';
                spanFerreiro.textContent = '???';
                spanFerreiro.className = 'escudo-calc-result-value';
                spanTotal.textContent = '???';
                spanTotal.style.color = '#ff5252';
            } else {
                const preco8kg = (data.preco10kg / 10) * 8;
                const custoBase = preco8kg * 1.10;
                
                const valorFerreiro = Math.round(custoBase * Math.abs(porcentagem));
                let valorTotal = custoBase;
                
                if (multiplicador > 0) {
                    valorTotal += valorFerreiro;
                } else {
                    valorTotal -= valorFerreiro;
                }

                spanBase.textContent = '฿' + Math.round(custoBase).toLocaleString('pt-BR');
                spanBase.style.color = 'var(--text-color)';
                
                let textFerreiro = '฿' + valorFerreiro.toLocaleString('pt-BR');
                if (taxaVal > 0 && multiplicador > 0) {
                    textFerreiro = '+' + textFerreiro;
                    spanFerreiro.className = 'escudo-calc-result-value positivo';
                } else if (taxaVal > 0 && multiplicador < 0) {
                    textFerreiro = '-' + textFerreiro;
                    spanFerreiro.className = 'escudo-calc-result-value negativo';
                } else {
                    spanFerreiro.className = 'escudo-calc-result-value';
                }
                spanFerreiro.textContent = textFerreiro;

                spanTotal.textContent = '฿' + Math.round(valorTotal).toLocaleString('pt-BR');
                spanTotal.style.color = '#4CAF50';
            }
        }

        selectMetal.addEventListener('change', calcular);
        selectTipoTaxa.addEventListener('change', calcular);
        inputTaxa.addEventListener('input', calcular);
        calcular();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCalculadoraEscudos);
    } else {
        initCalculadoraEscudos();
    }
})();

(function() {
    const dadosJornal = window.dadosJornalApp || {};
    const datasDisponiveis = Object.keys(dadosJornal).sort();
    let dataAtual = datasDisponiveis.length > 0 ? datasDisponiveis[datasDisponiveis.length - 1] : "2026-05-11";
    let paginaAtual = 0;

    let mesesDisponiveis = [...new Set(datasDisponiveis.map(d => d.substring(0, 7)))].sort();
    if (mesesDisponiveis.length === 0) mesesDisponiveis = ["2026-05"];
    
    let currentMesAno = dataAtual.substring(0, 7);
    let indexMesAtual = mesesDisponiveis.indexOf(currentMesAno);
    if (indexMesAtual === -1) indexMesAtual = Math.max(0, mesesDisponiveis.length - 1);

    let calAno = parseInt(mesesDisponiveis[indexMesAtual].substring(0, 4), 10);
    let calMes = parseInt(mesesDisponiveis[indexMesAtual].substring(5, 7), 10);

    const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    function formatarData(dataISO) {
        const partes = dataISO.split('-');
        return parseInt(partes[2], 10) + " de " + nomesMeses[parseInt(partes[1], 10) - 1].toLowerCase() + " de " + partes[0];
    }

    function gerarCalendario(mes, ano) {
        let htmlCal = '<div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; text-align: center; margin-top: 15px;">';
        const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
        
        diasSemana.forEach(d => {
            htmlCal += `<div style="font-weight: bold; color: var(--accent-color); padding: 5px 0;">${d}</div>`;
        });

        const primeiroDia = new Date(ano, mes - 1, 1).getDay();
        const diasNoMes = new Date(ano, mes, 0).getDate();

        for (let i = 0; i < primeiroDia; i++) {
            htmlCal += '<div></div>';
        }

        for (let dia = 1; dia <= diasNoMes; dia++) {
            const strMes = mes < 10 ? '0' + mes : mes;
            const strDia = dia < 10 ? '0' + dia : dia;
            const dataData = `${ano}-${strMes}-${strDia}`;
            const temJornal = dadosJornal[dataData] !== undefined;
            
            let btnStyle = `padding: 10px 0; border-radius: 4px; font-family: 'Comfortaa', sans-serif; font-size: 14px; border: 1px solid var(--sidebar-border); cursor: default; background: var(--bg-color); color: var(--text-color); opacity: 0.5;`;
            
            let classeJornal = "";
            if (temJornal) {
                btnStyle = `padding: 10px 0; border-radius: 4px; font-family: 'Comfortaa', sans-serif; font-size: 14px; font-weight: bold; border: 1px solid #d4af37; background: rgba(212, 175, 55, 0.1); color: #d4af37; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 0 5px rgba(212, 175, 55, 0.3);`;
                classeJornal = "btn-dia-jornal";
            }
            
            if (dataData === dataAtual) {
                btnStyle = `padding: 10px 0; border-radius: 4px; font-family: 'Comfortaa', sans-serif; font-size: 14px; font-weight: bold; border: 1px solid var(--accent-color); background: var(--accent-color); color: var(--sidebar-bg); cursor: default;`;
                classeJornal = "";
            }

            htmlCal += `<button class="btn-cal-dia ${classeJornal}" style="${btnStyle}" data-data="${dataData}">${dia}</button>`;
        }

        htmlCal += '</div>';
        return htmlCal;
    }

    function initSistemaJornal() {
        const container = document.getElementById('jornal-sistema-container');
        if (!container) return;

        container.innerHTML = `
        <style>
            .jornal-box {
                background: var(--sidebar-bg);
                border: 1px solid var(--sidebar-border);
                border-radius: 12px;
                padding: 30px;
                max-width: 800px;
                margin: 0 auto;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            .data-selector-btn {
                background: var(--bg-color);
                border: 2px solid var(--accent-color);
                color: var(--accent-color);
                font-family: 'Quantico', sans-serif;
                font-size: 22px;
                padding: 15px 30px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: block;
                width: 100%;
                text-align: center;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }
            .data-selector-btn:hover {
                background: var(--accent-color);
                color: var(--sidebar-bg);
            }
            .calendario-panel {
                display: none;
                background: var(--sidebar-bg);
                border: 1px solid var(--sidebar-border);
                border-radius: 8px;
                padding: 20px;
                margin-top: 15px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            }
            .calendario-panel.show {
                display: block;
                animation: slideDown 0.3s ease;
            }
            .cal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px dashed var(--sidebar-border);
                padding-bottom: 10px;
            }
            .cal-nav-btn {
                background: transparent;
                border: none;
                color: var(--accent-color);
                font-size: 20px;
                cursor: pointer;
                padding: 5px 15px;
                transition: transform 0.2s;
            }
            .cal-nav-btn:hover {
                transform: scale(1.2);
            }
            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .btn-dia-jornal:hover {
                background: #d4af37 !important;
                color: #fff !important;
            }
            .jornal-book-container {
                margin-top: 40px;
                position: relative;
                width: 100%;
                background: var(--bg-color);
                border-radius: 4px;
                border: 1px solid var(--sidebar-border);
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
            .jornal-page-image {
                width: 100%;
                height: auto;
                display: block;
                margin: 0 auto;
                transition: transform 0.3s ease-out, opacity 0.3s ease-out;
            }
            .jornal-page-image.turning-forward {
                transform: translateX(-50px);
                opacity: 0;
            }
            .jornal-page-image.turning-backward {
                transform: translateX(50px);
                opacity: 0;
            }
            .jornal-nav-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 25px;
            }
            .jornal-btn-nav {
                background: var(--sidebar-bg);
                border: 1px solid var(--sidebar-border);
                color: var(--text-color);
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
                font-family: 'Quantico', sans-serif;
                font-size: 16px;
                transition: all 0.3s;
            }
            .jornal-btn-nav:hover:not(:disabled) {
                border-color: var(--accent-color);
                color: var(--accent-color);
            }
            .jornal-btn-nav:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
            .jornal-contador-paginas {
                font-family: 'Comfortaa', sans-serif;
                font-size: 16px;
                color: var(--text-color);
                opacity: 0.8;
            }
            .img-placeholder {
                padding: 50px;
                text-align: center;
                color: var(--text-color);
                opacity: 0.5;
                border: 2px dashed var(--sidebar-border);
                border-radius: 8px;
                width: 80%;
            }
        </style>

        <div class="jornal-box">
            <div style="display: flex; gap: 10px; align-items: center;">
                <button id="btn-edicao-ant" class="jornal-btn-nav" title="Edição Anterior" style="font-size: 24px; padding: 10px 20px;">◄</button>
                <button id="btn-selecionar-data" class="data-selector-btn" style="flex: 1; margin: 0;"></button>
                <button id="btn-edicao-prox" class="jornal-btn-nav" title="Próxima Edição" style="font-size: 24px; padding: 10px 20px;">►</button>
            </div>
            
            <div id="painel-calendario" class="calendario-panel">
                <div class="cal-header">
                    <button id="btn-cal-ant" class="cal-nav-btn">◄</button>
                    <div id="txt-cal-mesano" style="font-family: 'Quantico', sans-serif; font-size: 18px; color: var(--accent-color);"></div>
                    <button id="btn-cal-prox" class="cal-nav-btn">►</button>
                </div>
                <div id="calendario-grid"></div>
            </div>

            <div class="jornal-book-container">
                <div id="jornal-imagem-render" style="width: 100%; display: flex; justify-content: center; padding: 0;"></div>
            </div>

            <div class="jornal-nav-container">
                <button id="btn-jornal-ant" class="jornal-btn-nav">◄ Anterior</button>
                <div id="txt-jornal-contador" class="jornal-contador-paginas">Página 1 de X</div>
                <button id="btn-jornal-prox" class="jornal-btn-nav">Próxima ►</button>
            </div>
        </div>
        `;

        const btnSelecionarData = document.getElementById('btn-selecionar-data');
        const btnEdicaoAnt = document.getElementById('btn-edicao-ant');
        const btnEdicaoProx = document.getElementById('btn-edicao-prox');
        const painelCalendario = document.getElementById('painel-calendario');
        const calendarioGrid = document.getElementById('calendario-grid');
        const txtCalMesAno = document.getElementById('txt-cal-mesano');
        const btnCalAnt = document.getElementById('btn-cal-ant');
        const btnCalProx = document.getElementById('btn-cal-prox');
        
        const renderContainer = document.getElementById('jornal-imagem-render');
        const btnAnt = document.getElementById('btn-jornal-ant');
        const btnProx = document.getElementById('btn-jornal-prox');
        const txtContador = document.getElementById('txt-jornal-contador');

        function mostrarAvisoJornal(mensagem) {
            const overlay = document.createElement('div');
            overlay.innerHTML = `
                <div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.8); z-index: 100000; display: flex; justify-content: center; align-items: center; backdrop-filter: blur(3px);">
                    <div style="background: var(--sidebar-bg); padding: 30px; border-radius: 8px; border: 2px solid var(--accent-color); text-align: center; box-shadow: 0 8px 16px rgba(0,0,0,0.8); max-width: 400px; width: 90%; animation: slideDown 0.3s ease;">
                        <h2 style="color: var(--accent-color); font-family: 'Quantico', sans-serif; margin-bottom: 15px; font-size: 22px;">AVISO DO JORNAL</h2>
                        <p style="color: var(--text-color); font-family: 'Comfortaa', sans-serif; font-size: 16px; margin-bottom: 25px;">${mensagem}</p>
                        <button id="btn-fechar-aviso" style="background: var(--accent-color); color: #000000; border: none; padding: 10px 20px; font-family: 'Quantico', sans-serif; font-weight: bold; font-size: 16px; border-radius: 4px; cursor: pointer; width: 100%; transition: transform 0.2s;">OK</button>
                    </div>
                </div>
            `;
            document.body.appendChild(overlay);
            document.getElementById('btn-fechar-aviso').addEventListener('click', () => {
                overlay.remove();
            });
        }

        function checarAvisoTemporada(dataAntiga, novaData) {
            if (!window.avisosJornal) return;
            for (let aviso of window.avisosJornal) {
                if (dataAntiga >= aviso.dataCorte && novaData < aviso.dataCorte) {
                    mostrarAvisoJornal(aviso.msgAntes);
                } else if (dataAntiga < aviso.dataCorte && novaData >= aviso.dataCorte) {
                    mostrarAvisoJornal(aviso.msgDepois);
                }
            }
        }

        function atualizarBotoesNavegacaoMes() {
            if (mesesDisponiveis.length <= 1) {
                btnCalAnt.style.opacity = "0.3";
                btnCalAnt.style.cursor = "not-allowed";
                btnCalProx.style.opacity = "0.3";
                btnCalProx.style.cursor = "not-allowed";
                return;
            }
            if (indexMesAtual <= 0) {
                btnCalAnt.style.opacity = "0.3";
                btnCalAnt.style.cursor = "not-allowed";
            } else {
                btnCalAnt.style.opacity = "1";
                btnCalAnt.style.cursor = "pointer";
            }
            if (indexMesAtual >= mesesDisponiveis.length - 1) {
                btnCalProx.style.opacity = "0.3";
                btnCalProx.style.cursor = "not-allowed";
            } else {
                btnCalProx.style.opacity = "1";
                btnCalProx.style.cursor = "pointer";
            }
        }

        function atualizarGradeCalendario() {
            txtCalMesAno.textContent = `${nomesMeses[calMes - 1]} de ${calAno}`;
            calendarioGrid.innerHTML = gerarCalendario(calMes, calAno);
            atualizarBotoesNavegacaoMes();

            document.querySelectorAll('.btn-dia-jornal').forEach(btn => {
                btn.addEventListener('click', function() {
                    const novaData = this.getAttribute('data-data');
                    if (novaData && dadosJornal[novaData]) {
                        checarAvisoTemporada(dataAtual, novaData);
                        dataAtual = novaData;
                        paginaAtual = 0;
                        atualizarRenderizacao();
                        painelCalendario.classList.remove('show');
                    }
                });
            });
        }

        btnCalAnt.addEventListener('click', () => {
            if (indexMesAtual > 0) {
                indexMesAtual--;
                const novoMesAno = mesesDisponiveis[indexMesAtual];
                calAno = parseInt(novoMesAno.substring(0, 4), 10);
                calMes = parseInt(novoMesAno.substring(5, 7), 10);
                atualizarGradeCalendario();
            }
        });

        btnCalProx.addEventListener('click', () => {
            if (indexMesAtual < mesesDisponiveis.length - 1) {
                indexMesAtual++;
                const novoMesAno = mesesDisponiveis[indexMesAtual];
                calAno = parseInt(novoMesAno.substring(0, 4), 10);
                calMes = parseInt(novoMesAno.substring(5, 7), 10);
                atualizarGradeCalendario();
            }
        });

        function atualizarRenderizacao(direcaoAnimacao = null) {
            btnSelecionarData.textContent = formatarData(dataAtual);
            atualizarGradeCalendario();
            
            const imagens = dadosJornal[dataAtual] || [];
            
            if (imagens.length === 0) {
                renderContainer.innerHTML = `<div class="img-placeholder">Nenhum jornal encontrado para esta data.</div>`;
                btnAnt.disabled = true;
                btnProx.disabled = true;
                txtContador.textContent = "Página 0 de 0";
            } else {
                const imagemSrc = imagens[paginaAtual];
                
                const imgElement = document.createElement('img');
                imgElement.src = imagemSrc;
                imgElement.alt = "Página do Jornal";
                imgElement.className = "jornal-page-image";
                
                imgElement.onerror = function() {
                    imgElement.outerHTML = `<div class="img-placeholder" style="width: 100%;">Imagem não encontrada.<br><br>Avise ao <a href="https://wa.link/b6zcmn" target="_blank">Herikliz</a> que a imagem não está aqui, e ele a colocará assim que possível.</div>`;
                };

                if (direcaoAnimacao === 'forward') {
                    imgElement.classList.add('turning-backward');
                    setTimeout(() => imgElement.classList.remove('turning-backward'), 50);
                } else if (direcaoAnimacao === 'backward') {
                    imgElement.classList.add('turning-forward');
                    setTimeout(() => imgElement.classList.remove('turning-forward'), 50);
                }

                renderContainer.innerHTML = '';
                renderContainer.style.flexDirection = 'column';
                renderContainer.style.alignItems = 'center';
                renderContainer.appendChild(imgElement);

                if (window.mensagensRodape && window.mensagensRodape[dataAtual]) {
                    const aviso = document.createElement('div');
                    aviso.style.textAlign = 'center';
                    aviso.style.fontFamily = "'Quantico', sans-serif";
                    aviso.style.color = "var(--accent-color)";
                    aviso.style.marginTop = "20px";
                    aviso.style.marginBottom = "20px";
                    aviso.style.fontSize = "18px";
                    aviso.innerHTML = window.mensagensRodape[dataAtual];
                    renderContainer.appendChild(aviso);
                }

                txtContador.textContent = `Página ${paginaAtual + 1} de ${imagens.length}`;
                btnAnt.disabled = paginaAtual === 0;
                btnProx.disabled = paginaAtual === (imagens.length - 1);
            }

            const idx = datasDisponiveis.indexOf(dataAtual);
            btnEdicaoAnt.disabled = idx <= 0;
            btnEdicaoProx.disabled = idx >= datasDisponiveis.length - 1;
        }

        btnEdicaoAnt.addEventListener('click', function() {
            const idx = datasDisponiveis.indexOf(dataAtual);
            if (idx > 0) {
                const novaData = datasDisponiveis[idx - 1];
                checarAvisoTemporada(dataAtual, novaData);
                dataAtual = novaData;
                paginaAtual = 0;
                
                calAno = parseInt(dataAtual.substring(0, 4), 10);
                calMes = parseInt(dataAtual.substring(5, 7), 10);
                let currentMesAno = dataAtual.substring(0, 7);
                indexMesAtual = mesesDisponiveis.indexOf(currentMesAno) !== -1 ? mesesDisponiveis.indexOf(currentMesAno) : 0;
                
                const imgCurrent = renderContainer.querySelector('.jornal-page-image');
                if (imgCurrent) {
                    imgCurrent.classList.add('turning-backward');
                    setTimeout(() => atualizarRenderizacao('backward'), 300);
                } else {
                    atualizarRenderizacao();
                }
            }
        });

        btnEdicaoProx.addEventListener('click', function() {
            const idx = datasDisponiveis.indexOf(dataAtual);
            if (idx < datasDisponiveis.length - 1) {
                const novaData = datasDisponiveis[idx + 1];
                checarAvisoTemporada(dataAtual, novaData);
                dataAtual = novaData;
                paginaAtual = 0;
                
                calAno = parseInt(dataAtual.substring(0, 4), 10);
                calMes = parseInt(dataAtual.substring(5, 7), 10);
                let currentMesAno = dataAtual.substring(0, 7);
                indexMesAtual = mesesDisponiveis.indexOf(currentMesAno) !== -1 ? mesesDisponiveis.indexOf(currentMesAno) : 0;

                const imgCurrent = renderContainer.querySelector('.jornal-page-image');
                if (imgCurrent) {
                    imgCurrent.classList.add('turning-forward');
                    setTimeout(() => atualizarRenderizacao('forward'), 300);
                } else {
                    atualizarRenderizacao();
                }
            }
        });

        btnSelecionarData.addEventListener('click', function() {
            painelCalendario.classList.toggle('show');
        });

        btnProx.addEventListener('click', function() {
            const imagens = dadosJornal[dataAtual] || [];
            if (paginaAtual < imagens.length - 1) {
                const imgCurrent = renderContainer.querySelector('.jornal-page-image');
                if (imgCurrent) {
                    imgCurrent.classList.add('turning-forward');
                    setTimeout(() => {
                        paginaAtual++;
                        atualizarRenderizacao('forward');
                    }, 300);
                } else {
                    paginaAtual++;
                    atualizarRenderizacao();
                }
            }
        });

        btnAnt.addEventListener('click', function() {
            if (paginaAtual > 0) {
                const imgCurrent = renderContainer.querySelector('.jornal-page-image');
                if (imgCurrent) {
                    imgCurrent.classList.add('turning-backward');
                    setTimeout(() => {
                        paginaAtual--;
                        atualizarRenderizacao('backward');
                    }, 300);
                } else {
                    paginaAtual--;
                    atualizarRenderizacao();
                }
            }
        });

        atualizarRenderizacao();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSistemaJornal);
    } else {
        initSistemaJornal();
    }
})();

// ==========================================
// ORDENAÇÃO DE PROCURADOS
// ==========================================
function initBountySort() {
    const select = document.getElementById('sort-bounties');
    const grid = document.querySelector('.bounty-grid');
    if (!select || !grid) return;

    function sortCards() {
        const cards = Array.from(grid.querySelectorAll('.bounty-card'));
        const sortType = select.value;

        cards.sort((a, b) => {
            const nameA = a.querySelector('.bounty-name').textContent.trim().toLowerCase();
            const nameB = b.querySelector('.bounty-name').textContent.trim().toLowerCase();
            
            const valStrA = a.querySelector('.bounty-value').textContent.replace(/[^0-9]/g, '');
            const valStrB = b.querySelector('.bounty-value').textContent.replace(/[^0-9]/g, '');
            const valA = parseInt(valStrA, 10) || 0;
            const valB = parseInt(valStrB, 10) || 0;

            if (sortType === 'az') {
                return nameA.localeCompare(nameB);
            } else if (sortType === 'za') {
                return nameB.localeCompare(nameA);
            } else if (sortType === 'val-desc') {
                return valB - valA;
            } else if (sortType === 'val-asc') {
                return valA - valB;
            }
            return 0;
        });

        cards.forEach(card => grid.appendChild(card));
    }

    select.addEventListener('change', sortCards);
    sortCards();
}

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initBountySort); } else { initBountySort(); }

// ==========================================
// EXIBIÇÃO DE DONOS DAS AKUMA NO MI NA PÁGINA
// ==========================================
function exibirDonosAkuma() {
    if (!window.location.pathname.includes('akuma-no-mi.html') && !window.location.pathname.endsWith('akuma-no-mi.html')) return;

    if (!window.donosDeAkuma) return;

    const sectionsFrutas = document.querySelectorAll('h4.highlight-text');

    sectionsFrutas.forEach(tituloEl => {
        const div = tituloEl.parentElement;
        const isFruit = Array.from(div.querySelectorAll('p')).some(p => p.textContent.includes('Valor:'));
        if (!isFruit) return;

        let nomeBruto = tituloEl.textContent.split(' (')[0].trim();
        let dono = window.donosDeAkuma[nomeBruto];
        
        let status = "livres";
        if (dono && dono !== "Bloqueada" && dono !== "AGORAAGORA") {
            if (dono === "🔒FRUTA PERDIDA PELO MUNDO🔒") {
                status = "perdidas";
            } else {
                status = "ocupadas";
            }
            
            const paragrafos = div.querySelectorAll('p');
            paragrafos.forEach(p => {
                if (p.textContent.includes('Valor:') && !p.innerHTML.includes(dono)) {
                    p.innerHTML = p.innerHTML + ` (<i>${dono}</i>)`;
                }
            });
        }
        
        div.dataset.status = status;
        div.classList.add('fruit-entry');
    });

    const filterSelect = document.getElementById('filter-akuma');
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            const showType = this.value;
            document.querySelectorAll('.fruit-entry').forEach(div => {
                const status = div.dataset.status;
                const hr = div.nextElementSibling;
                
                let shouldShow = (showType === 'todas') || (showType === status);
                
                if (shouldShow) {
                    div.style.display = '';
                    if (hr && hr.tagName === 'HR') hr.style.display = '';
                } else {
                    div.style.display = 'none';
                    if (hr && hr.tagName === 'HR') hr.style.display = 'none';
                }
            });

            document.querySelectorAll('h2.toggle-title, h3.toggle-title').forEach(header => {
                const content = header.nextElementSibling;
                if (content && content.classList.contains('toggle-content')) {
                    const fruits = Array.from(content.querySelectorAll('.fruit-entry'));
                    if (fruits.length > 0) {
                        const hasVisible = fruits.some(f => f.style.display !== 'none');
                        if (hasVisible) {
                            header.style.display = '';
                            content.style.display = '';
                        } else {
                            header.style.display = 'none';
                            content.style.display = 'none';
                        }
                    }
                }
            });
        });
    }
}

if (document.readyState === 'loading') { 
    document.addEventListener('DOMContentLoaded', exibirDonosAkuma); 
} else { 
    exibirDonosAkuma(); 
}

// ==========================================
// ORDENAÇÃO DE APARÊNCIAS
// ==========================================
function initGallerySort() {
    if (!window.location.pathname.includes('aparencias.html')) return;

    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll('.gallery-item'));
    if (items.length === 0) return;

    items.sort((a, b) => {
        const titleElA = a.querySelector('.gallery-title');
        const titleElB = b.querySelector('.gallery-title');
        
        if (!titleElA || !titleElB) return 0;

        const nameA = titleElA.textContent.trim().toLowerCase();
        const nameB = titleElB.textContent.trim().toLowerCase();

        if (nameA === '???' && nameB !== '???') return 1;
        if (nameB === '???' && nameA !== '???') return -1;

        return nameA.localeCompare(nameB, 'pt-BR');
    });

    items.forEach(item => grid.appendChild(item));
}

// ==========================================
// MÚLTIPLAS IMAGENS NA GALERIA
// ==========================================
function initGalleryMultipleImages() {
    if (!window.location.pathname.includes('aparencias.html')) return;

    const containers = document.querySelectorAll('.gallery-img-container');
    containers.forEach(container => {
        const images = container.querySelectorAll('img');
        if (images.length > 1) {
            container.style.position = 'relative';

            images.forEach((img, index) => {
                if (index !== 0) img.style.display = 'none';
                img.classList.remove('secundaria');
            });

            const btn = document.createElement('button');
            btn.textContent = 'Alternar';
            btn.className = 'btn-alternar-img';
            container.appendChild(btn);

            let currentIndex = 0;
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                images[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].style.display = 'block';
            });
        }
    });
}

if (document.readyState === 'loading') { 
    document.addEventListener('DOMContentLoaded', () => {
        initGallerySort();
        initGalleryMultipleImages();
    }); 
} else { 
    initGallerySort(); 
    initGalleryMultipleImages();
}

(function initGlobalImageCopy() {
    let activeBtns = [];

    document.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'IMG') {
            if (e.target.closest('.map-container') || e.target.classList.contains('hero-image') || e.target.src.includes('Banner.png') || e.target.naturalWidth < 100) return;
            
            const img = e.target;
            const parent = img.parentElement;
            
            let baseFileName = 'imagem-new-seas';
            try {
                let decodedSrc = decodeURIComponent(img.src);
                let possibleName = decodedSrc.split('/').pop().split('?')[0];
                if (possibleName && possibleName.length > 0) {
                    baseFileName = possibleName;
                }
            } catch(err) {}
            
            let btnCopy = parent.querySelector('.injected-copy-img-btn');
            let btnDownload = parent.querySelector('.injected-download-img-btn');

            if (!btnCopy || !btnDownload) {
                const style = window.getComputedStyle(parent);
                if (style.position === 'static') {
                    parent.style.position = 'relative';
                }
                
                const commonCss = `
                    position: absolute;
                    background: rgba(0, 0, 0, 0.7);
                    color: #fff;
                    border: 1px solid rgba(255,255,255,0.3);
                    border-radius: 6px;
                    padding: 6px 10px;
                    font-size: 12px;
                    font-family: 'Comfortaa', sans-serif;
                    cursor: pointer;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease, background 0.2s ease;
                    z-index: 100;
                    backdrop-filter: blur(4px);
                    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
                    white-space: nowrap;
                `;
                
                const triggerFallbackDownload = (btnElement, originalTextBtn) => {
                    fetch(img.src, { mode: 'cors' })
                        .then(res => res.blob())
                        .then(blob => {
                            let finalFileName = baseFileName;
                            let ext = blob.type.split('/')[1];
                            if (ext) {
                                if (ext === 'jpeg') ext = 'jpg';
                                if (ext === 'svg+xml') ext = 'svg';
                                if (!finalFileName.toLowerCase().endsWith('.' + ext)) {
                                    finalFileName = finalFileName.replace(/\.[a-z0-9]+$/i, '') + '.' + ext;
                                }
                            }
                            const url = URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.download = finalFileName;
                            link.href = url;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            URL.revokeObjectURL(url);

                            btnElement.innerHTML = '📥 Baixado!';
                            btnElement.style.color = '#2196F3';
                            btnElement.style.borderColor = '#2196F3';
                            
                            setTimeout(() => {
                                btnElement.innerHTML = originalTextBtn;
                                btnElement.style.color = '#fff';
                                btnElement.style.borderColor = 'rgba(255,255,255,0.3)';
                            }, 2000);
                        })
                        .catch(() => {
                            let finalFileName = baseFileName;
                            if (!/\.(png|jpg|jpeg|gif|webp|svg)$/i.test(finalFileName)) {
                                finalFileName += '.png';
                            }
                            const link = document.createElement('a');
                            link.download = finalFileName;
                            link.href = img.src;
                            link.target = '_blank';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);

                            btnElement.innerHTML = '📥 Baixado!';
                            btnElement.style.color = '#2196F3';
                            btnElement.style.borderColor = '#2196F3';
                            
                            setTimeout(() => {
                                btnElement.innerHTML = originalTextBtn;
                                btnElement.style.color = '#fff';
                                btnElement.style.borderColor = 'rgba(255,255,255,0.3)';
                            }, 2000);
                        });
                };

                if (!btnCopy) {
                    btnCopy = document.createElement('button');
                    btnCopy.className = 'injected-copy-img-btn';
                    btnCopy.innerHTML = '📋 Copiar';
                    btnCopy.style.cssText = commonCss;
                    
                    btnCopy.onmouseover = () => { btnCopy.style.background = 'rgba(0, 0, 0, 0.9)'; };
                    btnCopy.onmouseout = () => { btnCopy.style.background = 'rgba(0, 0, 0, 0.7)'; };
                    
                    btnCopy.addEventListener('click', (ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        
                        const originalText = '📋 Copiar';
                        btnCopy.innerHTML = '⏳...';
                        
                        const tryCopy = () => {
                            return fetch(img.src, { mode: 'cors' })
                                .then(res => res.blob())
                                .then(blob => {
                                    return new Promise((resolve, reject) => {
                                        const url = URL.createObjectURL(blob);
                                        const tempImg = new Image();
                                        tempImg.onload = () => {
                                            const canvas = document.createElement('canvas');
                                            canvas.width = tempImg.naturalWidth;
                                            canvas.height = tempImg.naturalHeight;
                                            const ctx = canvas.getContext('2d');
                                            ctx.drawImage(tempImg, 0, 0);
                                            canvas.toBlob(pngBlob => {
                                                URL.revokeObjectURL(url);
                                                if (pngBlob) resolve(pngBlob);
                                                else reject();
                                            }, 'image/png');
                                        };
                                        tempImg.onerror = () => {
                                            URL.revokeObjectURL(url);
                                            reject();
                                        };
                                        tempImg.src = url;
                                    });
                                })
                                .catch(() => {
                                    return new Promise((resolve, reject) => {
                                        const canvas = document.createElement('canvas');
                                        canvas.width = img.naturalWidth;
                                        canvas.height = img.naturalHeight;
                                        const ctx = canvas.getContext('2d');
                                        ctx.drawImage(img, 0, 0);
                                        canvas.toBlob(pngBlob => {
                                            if (pngBlob) resolve(pngBlob);
                                            else reject();
                                        }, 'image/png');
                                    });
                                });
                        };

                        tryCopy().then(pngBlob => {
                            const item = new ClipboardItem({ "image/png": pngBlob });
                            navigator.clipboard.write([item]).then(() => {
                                btnCopy.innerHTML = '✅ Copiado!';
                                btnCopy.style.color = '#00b37e';
                                btnCopy.style.borderColor = '#00b37e';
                                setTimeout(() => {
                                    btnCopy.innerHTML = originalText;
                                    btnCopy.style.color = '#fff';
                                    btnCopy.style.borderColor = 'rgba(255,255,255,0.3)';
                                }, 2000);
                            }).catch(() => {
                                triggerFallbackDownload(btnCopy, originalText);
                            });
                        }).catch(() => {
                            triggerFallbackDownload(btnCopy, originalText);
                        });
                    });
                    
                    parent.appendChild(btnCopy);
                }

                if (!btnDownload) {
                    btnDownload = document.createElement('button');
                    btnDownload.className = 'injected-download-img-btn';
                    btnDownload.innerHTML = '📥 Baixar';
                    btnDownload.style.cssText = commonCss;
                    btnDownload.onmouseover = () => { btnDownload.style.background = 'rgba(0, 0, 0, 0.9)'; };
                    btnDownload.onmouseout = () => { btnDownload.style.background = 'rgba(0, 0, 0, 0.7)'; };
                    
                    btnDownload.addEventListener('click', (ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        
                        const originalText = '📥 Baixar';
                        btnDownload.innerHTML = '⏳...';
                        triggerFallbackDownload(btnDownload, originalText);
                    });
                    
                    parent.appendChild(btnDownload);
                }
            }
            
            btnCopy.style.top = (img.offsetTop + 8) + 'px';
            btnCopy.style.right = (parent.clientWidth - (img.offsetLeft + img.offsetWidth) + 8) + 'px';
            
            btnDownload.style.top = (img.offsetTop + 8) + 'px';
            btnDownload.style.left = (img.offsetLeft + 8) + 'px';
            
            if (activeBtns.length > 0 && activeBtns[0] !== btnCopy) {
                activeBtns.forEach(b => {
                    if (b) {
                        b.style.opacity = '0';
                        b.style.pointerEvents = 'none';
                    }
                });
            }
            
            btnCopy.style.opacity = '1';
            btnCopy.style.pointerEvents = 'auto';
            
            btnDownload.style.opacity = '1';
            btnDownload.style.pointerEvents = 'auto';
            
            activeBtns = [btnCopy, btnDownload];
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'IMG') {
            const parent = e.target.parentElement;
            let btnC = parent.querySelector('.injected-copy-img-btn');
            let btnD = parent.querySelector('.injected-download-img-btn');
            if (e.relatedTarget !== btnC && e.relatedTarget !== btnD) {
                if (btnC) { btnC.style.opacity = '0'; btnC.style.pointerEvents = 'none'; }
                if (btnD) { btnD.style.opacity = '0'; btnD.style.pointerEvents = 'none'; }
                activeBtns = [];
            }
        } else if (e.target.classList.contains('injected-copy-img-btn') || e.target.classList.contains('injected-download-img-btn')) {
            const parent = e.target.parentElement;
            const img = parent.querySelector('img');
            let btnC = parent.querySelector('.injected-copy-img-btn');
            let btnD = parent.querySelector('.injected-download-img-btn');
            if (e.relatedTarget !== img && e.relatedTarget !== btnC && e.relatedTarget !== btnD && e.relatedTarget !== parent) {
                if (btnC) { btnC.style.opacity = '0'; btnC.style.pointerEvents = 'none'; }
                if (btnD) { btnD.style.opacity = '0'; btnD.style.pointerEvents = 'none'; }
                activeBtns = [];
            }
        }
    });
})();

function updateMedTextareaStats(textarea) {
    if (!textarea) return;
    const wrapper = textarea.closest('.verificador-box');
    if (!wrapper) return;
    let sceneTxt = textarea.value;
    let sChars = sceneTxt.length;
    let sParas = sceneTxt.trim() === "" ? 0 : sceneTxt.split(/\n+/).filter(p => p.trim().length > 0).length;
    const tipoEl = document.getElementById('med-tipo-calculadora');
    const containerTratamento = document.getElementById('med-container-tratamento');
    let minChars = 500;
    if (tipoEl && tipoEl.value === 'tratamento') {
        if (containerTratamento) containerTratamento.style.display = 'grid';
        const ferimentoEl = document.getElementById('med-nivel-ferimento');
        const medicoEl = document.getElementById('med-nivel-medico');
        let baseChars = 600;
        if (ferimentoEl) baseChars = parseInt(ferimentoEl.value) || 600;
        let reduction = 0;
        if (medicoEl) reduction = parseInt(medicoEl.value) || 0;
        minChars = Math.ceil(baseChars * (1 - (reduction / 100)));
    } else {
        if (containerTratamento) containerTratamento.style.display = 'none';
    }
    let charsEl = wrapper.querySelector('.scene-chars');
    let parasEl = wrapper.querySelector('.scene-paras');
    let statusEl = wrapper.querySelector('.scene-status');
    if(charsEl) charsEl.textContent = sChars.toLocaleString('pt-BR');
    if(parasEl) parasEl.textContent = sParas.toLocaleString('pt-BR');
    if(statusEl) {
        if (sChars >= minChars) { 
            statusEl.textContent = "(✔️ Alcançou o mínimo de " + minChars.toLocaleString('pt-BR') + " caracteres)"; 
            statusEl.style.color = "#4caf50"; 
        } else { 
            let faltam = minChars - sChars;
            statusEl.textContent = "(❌ Faltam " + faltam.toLocaleString('pt-BR') + " caracteres)"; 
            statusEl.style.color = "#f44336"; 
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const medTextarea = document.getElementById('med-sceneText');
    if (medTextarea) {
        medTextarea.addEventListener('input', function() {
            updateMedTextareaStats(this);
        });
        updateMedTextareaStats(medTextarea);
    }
    document.querySelectorAll('.auto-calc-med').forEach(select => {
        select.addEventListener('change', () => {
            let textarea = document.getElementById('med-sceneText');
            if (textarea) updateMedTextareaStats(textarea);
        });
    });

    const hakiInput = document.getElementById('haki-rei-pontos');
    const hakiResultado = document.getElementById('haki-rei-alcance');
    if (hakiInput && hakiResultado) {
        hakiInput.addEventListener('input', function(e) {
            let rawValue = this.value.replace(/\D/g, '');
            if (rawValue === '') {
                this.value = '';
                hakiResultado.textContent = "0 m";
                return;
            }
            let pontos = parseInt(rawValue, 10);
            this.value = pontos.toLocaleString('pt-BR');
            let metros = pontos / 10;
            if (metros >= 1000) {
                let km = metros / 1000;
                hakiResultado.textContent = km.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) + " km (" + metros.toLocaleString('pt-BR') + "m)";
            } else {
                hakiResultado.textContent = metros.toLocaleString('pt-BR') + "m";
            }
        });
    }

    const calcHpTotal = document.getElementById('calc-hp-total');
    const calcTipoFerimento = document.getElementById('calc-tipo-ferimento');
    const calcHpLimite = document.getElementById('calc-hp-limite');
    
    function updateHpLimite() {
        if (!calcHpTotal || !calcTipoFerimento || !calcHpLimite) return;
        let rawValue = calcHpTotal.value.replace(/\D/g, '');
        if (rawValue === '') {
            calcHpTotal.value = '';
            calcHpLimite.textContent = '0';
            return;
        }
        let hpTotal = parseInt(rawValue, 10);
        calcHpTotal.value = hpTotal.toLocaleString('pt-BR');
        let multiplicador = parseFloat(calcTipoFerimento.value);
        let hpLimite = Math.floor(hpTotal * multiplicador);
        calcHpLimite.textContent = hpLimite.toLocaleString('pt-BR');
    }

    if (calcHpTotal) calcHpTotal.addEventListener('input', updateHpLimite);
    if (calcTipoFerimento) calcTipoFerimento.addEventListener('change', updateHpLimite);
});

// ==========================================
// SORTEADOR DE AKUMA NO MI E DONOS
// ==========================================
window.donosDeAkuma = {
    "Awa Awa no Mi": "Iwoye Zhuo",
    "Baku Baku no Mi": "Rhaast",
    "Batto Batto no Mi, Modelo: Vampiro": "Astarion Ancunín",
    "Buku Buku no Mi": "Patchouli Quazar",
    "Chiyu Chiyu no Mi": "Tontatta",
    "Doa Doa no Mi": "Chester",
    "Goro Goro no Mi": "Edward Belmont",
    "Gura Gura no Mi": "Sakazuki Itadori",
    "Hebi Hebi no Mi, Modelo: Kaijū [Original do RPG]": "Raidjinn Le Laufey",
    "Hemo Hemo no Mi": "Sakazuki Choso",
    "Hie Hie no Mi": "Astarion D. Emiri",
    "Hito Hito no Mi, Modelo: O Anfitrião [Original do RPG]": "Alastor",
    "Hito Hito no Mi, Modelo: Estátua [Original do RPG]": "David The Statue",
    "Hobi Hobi no Mi": "🔒FRUTA PERDIDA PELO MUNDO🔒",
    "Horo Horo no Mi": "???",
    "Inu Inu no Mi, Modelo: Cérbero [Original do RPG]": "Dante Salvatore",
    "Kaze Kaze no Mi": "Donquixote Druig",
    "Kobu Kobu no Mi": "Ernesto Cruz",
    "Kumo Kumo no Mi, Modelo: Rosamygale grauvogeli": "Toshio Kumo-rui",
    "Magu Magu no Mi": "Bloqueada",
    "Mero Mero no Mi": "🔒FRUTA PERDIDA PELO MUNDO🔒",
    "Mira Mira no Mi": "Bloqueada",
    "Mochi Mochi no Mi": "Hikaru Chinjao",
    "Modo Modo no Mi": "🔒FRUTA PERDIDA PELO MUNDO🔒",
    "Neko Neko no Mi, Modelo: Tigre-Dente-de-Sabre": "MahaD Mnaj",
    "Nikyu Nikyu no Mi": "Takenozo Mazatsugu Opera O",
    "Ope Ope no Mi": "Morgana Du'lor",
    "Pika Pika no Mi": "Rhaizen D. Aether",
    "Ryū Ryū no Mi, Modelo: Dragão Ocidental [Original do RPG]": "Galan'd Von Antares",
    "Ryū Ryū no Mi, Modelo: Kirin": "🔒FRUTA PERDIDA PELO MUNDO🔒",
    "Shiku Shiku no Mi": "???",
    "Soru Soru no Mi": "Kozuki Ryōshū",
    "Suji Suji no Mi": "???",
    "Suna Suna no Mi": "BladeHawk",
    "Susu Susu no Mi": "Iori",
    "Toki Toki no Mi": "🔒FRUTA PERDIDA PELO MUNDO🔒",
    "Tori Tori no Mi, Modelo: Fênix": "Kozuki Shingen",
    "Tori Tori no Mi, Modelo: Pássaro de Cinzas [Original do RPG]": "Genma Gan",
    "Tori Tori no Mi, Modelo: Pássaro de Gelo [Original do RPG]": "Alexander Pierce",
    "Tori Tori no Mi, Modelo: Thunderbird [Original do RPG]": "???",
    "Toro Toro no Mi": "Hyun",
    "Uo Uo no Mi, Modelo: Carpa Seiryū": "Keigo Kiyosaki",
    "Uta Uta no Mi": "???",
    "Yami Yami no Mi": "Andrial D. Oran",
    "Yomi Yomi no Mi": "La Muerte",
    "Zou Zou no Mi, Modelo: Mamute": "Serm D'yos",
    "Zushi Zushi no Mi": "Sorum"
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('area-restrita')) {
        const btnSortearSangue = document.getElementById('btn-sortear-sangue');
        const containerResultadoSangue = document.getElementById('container-resultado-sangue');
        const preResultadoSangue = document.getElementById('resultado-sangue');
        const btnCopiarSangue = document.getElementById('btn-copiar-sangue');

        if (btnSortearSangue) {
            btnSortearSangue.addEventListener('click', () => {
                const tiposSanguineos = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
                const sorteado = tiposSanguineos[Math.floor(Math.random() * tiposSanguineos.length)];
                preResultadoSangue.textContent = "Seu tipo sanguíneo sorteado: " + sorteado;
                preResultadoSangue.style.color = "var(--text-color)";
                containerResultadoSangue.style.display = 'block';
            });

            btnCopiarSangue.addEventListener('click', () => {
                if (!preResultadoSangue.textContent) return;
                if (btnCopiarSangue.dataset.copying) return;
                btnCopiarSangue.dataset.copying = "true";
                
                if (window.copiarTextoUniversal) {
                    window.copiarTextoUniversal(preResultadoSangue.textContent).then(() => {
                        let originalText = btnCopiarSangue.textContent;
                        let originalBg = btnCopiarSangue.style.backgroundColor;
                        let originalColor = btnCopiarSangue.style.color;

                        btnCopiarSangue.textContent = "Texto Copiado!";
                        btnCopiarSangue.style.backgroundColor = "#4caf50";
                        btnCopiarSangue.style.color = "#fff";
                        
                        setTimeout(() => {
                            btnCopiarSangue.textContent = originalText;
                            btnCopiarSangue.style.backgroundColor = originalBg;
                            btnCopiarSangue.style.color = originalColor;
                            delete btnCopiarSangue.dataset.copying;
                        }, 1000);
                    });
                } else {
                    navigator.clipboard.writeText(preResultadoSangue.textContent).then(() => {
                        let originalText = btnCopiarSangue.textContent;
                        let originalBg = btnCopiarSangue.style.backgroundColor;
                        let originalColor = btnCopiarSangue.style.color;

                        btnCopiarSangue.textContent = "Texto Copiado!";
                        btnCopiarSangue.style.backgroundColor = "#4caf50";
                        btnCopiarSangue.style.color = "#fff";
                        
                        setTimeout(() => {
                            btnCopiarSangue.textContent = originalText;
                            btnCopiarSangue.style.backgroundColor = originalBg;
                            btnCopiarSangue.style.color = originalColor;
                            delete btnCopiarSangue.dataset.copying;
                        }, 1000);
                    });
                }
            });
        }

        const inputMin = document.getElementById('sorteio-min');
        const inputMax = document.getElementById('sorteio-max');
        const inputQtdMin = document.getElementById('sorteio-qtd-min');
        const inputQtdMax = document.getElementById('sorteio-qtd-max');
        const btnSortear = document.getElementById('btn-sortear-akuma');
        const btnSorteioSemanal = document.getElementById('btn-sorteio-semanal');

        if (btnSorteioSemanal) {
            btnSorteioSemanal.addEventListener('click', () => {
                if (inputMin) inputMin.value = "700.000.000";
                if (inputMax) inputMax.value = "4.600.000.000";
                if (inputQtdMin) inputQtdMin.value = "5";
                if (inputQtdMax) inputQtdMax.value = "8";
                const checkboxIncluir = document.getElementById('sorteio-incluir-donos');
                if (checkboxIncluir) checkboxIncluir.checked = false;
                const selectMar = document.getElementById('sorteio-mar');
                if (selectMar) selectMar.value = "Paraíso";
                const selectFaccao = document.getElementById('sorteio-faccao');
                if (selectFaccao) selectFaccao.value = "pirata";
                if (btnSortear) btnSortear.click();
            });
        }
        const containerResultado = document.getElementById('container-resultado-sorteio');
        const preResultado = document.getElementById('resultado-sorteio');
        const btnCopiar = document.getElementById('btn-copiar-sorteio');

        if (!btnSortear) return;

        function formatarNumeroSorteio(e) {
            let valor = e.target.value.replace(/\D/g, '');
            if (valor !== '') {
                e.target.value = parseInt(valor, 10).toLocaleString('pt-BR');
            } else {
                e.target.value = '';
            }
        }

        if (inputMin) inputMin.addEventListener('input', formatarNumeroSorteio);
        if (inputMax) inputMax.addEventListener('input', formatarNumeroSorteio);
        
        const inputCartazNome = document.getElementById('cartaz-nome');
        const inputCartazRecompensa = document.getElementById('cartaz-recompensa');
        const canvasCartaz = document.getElementById('cartaz-canvas');
        const inputUpload = document.getElementById('cartaz-upload');
        const btnColarImagem = document.getElementById('btn-colar-imagem');
        const inputZoom = document.getElementById('cartaz-zoom');
        const inputImgW = document.getElementById('cartaz-img-w');
        const inputImgH = document.getElementById('cartaz-img-h');
        const lockRatio = document.getElementById('cartaz-lock-ratio');
        const btnCopiarCartaz = document.getElementById('btn-copiar-cartaz');
        const btnBaixarCartaz = document.getElementById('btn-baixar-cartaz');

        if (canvasCartaz) {
            const ctx = canvasCartaz.getContext('2d');
            const templateImg = new Image();
            templateImg.src = 'assets/imagens/Cartazes/Modelo.png';
            
            let customImg = null;
            let customFileName = 'Cartaz';
            let imgX = 0, imgY = 0, drawW = 0, drawH = 0;
            let originalRatio = 1;
            let isDragging = false;
            let startX, startY;

            function drawCartaz() {
                ctx.clearRect(0, 0, canvasCartaz.width, canvasCartaz.height);
                ctx.fillStyle = '#e4d5b7';
                ctx.fillRect(0, 0, canvasCartaz.width, canvasCartaz.height);

                if (customImg) {
                    ctx.drawImage(customImg, imgX, imgY, drawW, drawH);
                }

                if (templateImg.complete) {
                    ctx.drawImage(templateImg, 0, 0, canvasCartaz.width, canvasCartaz.height);
                }

                const nomeRaw = inputCartazNome ? inputCartazNome.value.toUpperCase().trim() : '';
                const nome = nomeRaw.replace(/\./g, '').replace(/\s+/g, '●');
                let recompensa = inputCartazRecompensa ? inputCartazRecompensa.value : '';
                if (recompensa) recompensa += '–';

                ctx.shadowColor = "rgba(0,0,0,0.2)";
                ctx.shadowOffsetX = 2;
                ctx.shadowOffsetY = 2;
                ctx.fillStyle = "#413633";

                const limiteNomeWidth = (3000 - 282) * (canvasCartaz.width / 3469);
                const limiteRecompensaWidth = (2700 - 550) * (canvasCartaz.width / 3469);

                ctx.textAlign = "center";
                ctx.textBaseline = "middle";

                let fontSizeNome = 72;
                ctx.font = `${fontSizeNome}px 'Playfair Display', serif`;
                while (ctx.measureText(nome).width > limiteNomeWidth && fontSizeNome > 10) {
                    fontSizeNome--;
                    ctx.font = `${fontSizeNome}px 'Playfair Display', serif`;
                }
                ctx.fillText(nome, canvasCartaz.width * 0.5, canvasCartaz.height * 0.750);

                let fontSizeRec = 60;
                ctx.font = `${fontSizeRec}px 'Always In My Heart', 'Times New Roman', serif`;
                while (ctx.measureText(recompensa).width > limiteRecompensaWidth && fontSizeRec > 10) {
                    fontSizeRec--;
                    ctx.font = `${fontSizeRec}px 'Always In My Heart', 'Times New Roman', serif`;
                }
                ctx.fillText(recompensa, canvasCartaz.width * 0.5, canvasCartaz.height * 0.840);
            }

            templateImg.onload = drawCartaz;
            if(document.fonts) document.fonts.ready.then(drawCartaz);

            if (inputCartazNome) inputCartazNome.addEventListener('input', drawCartaz);
            if (inputCartazRecompensa) {
                inputCartazRecompensa.addEventListener('input', (e) => {
                    formatarNumeroSorteio(e);
                    drawCartaz();
                });
            }

            if (inputUpload) {
                inputUpload.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    customFileName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
                    if (!customFileName) customFileName = 'Cartaz';
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        const img = new Image();
                        img.onload = () => {
                            customImg = img;
                            originalRatio = img.width / img.height;
                            const targetW = canvasCartaz.width * 0.86;
                            const targetH = canvasCartaz.height * 0.56;
                            const targetX = canvasCartaz.width * 0.07;
                            const targetY = canvasCartaz.height * 0.20;
                            const scale = Math.max(targetW / img.width, targetH / img.height);
                            drawW = img.width * scale;
                            drawH = img.height * scale;
                            imgX = targetX + (targetW - drawW) / 2;
                            imgY = targetY + (targetH - drawH) / 2;
                            if (inputZoom) inputZoom.value = scale;
                            if (inputImgW) {
                                inputImgW.value = Math.round(drawW);
                                inputImgW.disabled = false;
                            }
                            if (inputImgH) {
                                inputImgH.value = Math.round(drawH);
                                inputImgH.disabled = false;
                            }
                            drawCartaz();
                        };
                        img.src = ev.target.result;
                    };
                    reader.readAsDataURL(file);
                });
            }

            window.addEventListener('paste', (e) => {
                if (!canvasCartaz || canvasCartaz.offsetParent === null) return;
                const items = (e.clipboardData || e.originalEvent.clipboardData).items;
                for (let index in items) {
                    const item = items[index];
                    if (item.kind === 'file' && item.type.startsWith('image/')) {
                        const blob = item.getAsFile();
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                            const img = new Image();
                            img.onload = () => {
                                customImg = img;
                                originalRatio = img.width / img.height;
                                const targetW = canvasCartaz.width * 0.86;
                                const targetH = canvasCartaz.height * 0.56;
                                const targetX = canvasCartaz.width * 0.07;
                                const targetY = canvasCartaz.height * 0.20;
                                const scale = Math.max(targetW / img.width, targetH / img.height);
                                drawW = img.width * scale;
                                drawH = img.height * scale;
                                imgX = targetX + (targetW - drawW) / 2;
                                imgY = targetY + (targetH - drawH) / 2;
                                if (inputZoom) inputZoom.value = scale;
                                if (inputImgW) inputImgW.value = Math.round(drawW);
                                if (inputImgH) inputImgH.value = Math.round(drawH);
                                drawCartaz();
                            };
                            img.src = ev.target.result;
                        };
                        reader.readAsDataURL(blob);
                        e.preventDefault();
                        break;
                    }
                }
            });

            if (btnColarImagem) {
                btnColarImagem.addEventListener('click', async () => {
                    try {
                        const clipboardItems = await navigator.clipboard.read();
                        for (const clipboardItem of clipboardItems) {
                            const imageTypes = clipboardItem.types.filter(type => type.startsWith('image/'));
                            if (imageTypes.length > 0) {
                                const blob = await clipboardItem.getType(imageTypes[0]);
                                const reader = new FileReader();
                                reader.onload = (ev) => {
                                    const img = new Image();
                                    img.onload = () => {
                                        customImg = img;
                                        originalRatio = img.width / img.height;
                                        const targetW = canvasCartaz.width * 0.86;
                                        const targetH = canvasCartaz.height * 0.56;
                                        const targetX = canvasCartaz.width * 0.07;
                                        const targetY = canvasCartaz.height * 0.20;
                                        const scale = Math.max(targetW / img.width, targetH / img.height);
                                        drawW = img.width * scale;
                                        drawH = img.height * scale;
                                        imgX = targetX + (targetW - drawW) / 2;
                                        imgY = targetY + (targetH - drawH) / 2;
                                        if (inputZoom) inputZoom.value = scale;
                                        if (inputImgW) inputImgW.value = Math.round(drawW);
                                        if (inputImgH) inputImgH.value = Math.round(drawH);
                                        drawCartaz();
                                    };
                                    img.src = ev.target.result;
                                };
                                reader.readAsDataURL(blob);
                                return;
                            }
                        }
                        alert("Nenhuma imagem encontrada na área de transferência.");
                    } catch (err) {
                        alert("Erro ao colar imagem. Verifique se você deu permissão ao navegador ou tente enviar o arquivo manualmente.");
                    }
                });
            }

            if (inputZoom) {
                inputZoom.addEventListener('input', (e) => {
                    if (!customImg) return;
                    const scale = parseFloat(e.target.value);
                    drawW = customImg.width * scale;
                    drawH = customImg.height * scale;
                    if (inputImgW) inputImgW.value = Math.round(drawW);
                    if (inputImgH) inputImgH.value = Math.round(drawH);
                    drawCartaz();
                });
            }

            if (inputImgW) {
                inputImgW.addEventListener('input', (e) => {
                    if (!customImg) return;
                    drawW = parseFloat(e.target.value) || 0;
                    if (lockRatio && lockRatio.checked) {
                        drawH = drawW / originalRatio;
                        if (inputImgH) inputImgH.value = Math.round(drawH);
                    }
                    drawCartaz();
                });
            }

            if (inputImgH) {
                inputImgH.addEventListener('input', (e) => {
                    if (!customImg) return;
                    drawH = parseFloat(e.target.value) || 0;
                    if (lockRatio && lockRatio.checked) {
                        drawW = drawH * originalRatio;
                        if (inputImgW) inputImgW.value = Math.round(drawW);
                    }
                    drawCartaz();
                });
            }

            function getPointerPos(e) {
                const rect = canvasCartaz.getBoundingClientRect();
                const scaleX = canvasCartaz.width / rect.width;
                const scaleY = canvasCartaz.height / rect.height;
                let cx = e.clientX;
                let cy = e.clientY;
                if (e.touches && e.touches.length > 0) {
                    cx = e.touches[0].clientX;
                    cy = e.touches[0].clientY;
                }
                return {
                    x: (cx - rect.left) * scaleX,
                    y: (cy - rect.top) * scaleY
                };
            }

            const startDrag = (e) => {
                isDragging = true;
                const pos = getPointerPos(e);
                startX = pos.x - imgX;
                startY = pos.y - imgY;
                if (e.type === 'touchstart' && e.cancelable) e.preventDefault();
            };
            const onDrag = (e) => {
                if (!isDragging) return;
                const pos = getPointerPos(e);
                imgX = pos.x - startX;
                imgY = pos.y - startY;
                drawCartaz();
                if (e.type === 'touchmove' && e.cancelable) e.preventDefault();
            };
            const endDrag = () => isDragging = false;

            canvasCartaz.addEventListener('mousedown', startDrag);
            canvasCartaz.addEventListener('mousemove', onDrag);
            window.addEventListener('mouseup', endDrag);
            canvasCartaz.addEventListener('touchstart', startDrag, {passive: false});
            canvasCartaz.addEventListener('touchmove', onDrag, {passive: false});
            window.addEventListener('touchend', endDrag);

            if (btnCopiarCartaz) {
                btnCopiarCartaz.addEventListener('click', () => {
                    canvasCartaz.toBlob(blob => {
                        try {
                            const item = new ClipboardItem({ "image/png": blob });
                            navigator.clipboard.write([item]).then(() => {
                                const original = btnCopiarCartaz.textContent;
                                btnCopiarCartaz.textContent = "✅ Copiado!";
                                btnCopiarCartaz.style.backgroundColor = "#4caf50";
                                btnCopiarCartaz.style.color = "#fff";
                                setTimeout(() => {
                                    btnCopiarCartaz.textContent = original;
                                    btnCopiarCartaz.style.backgroundColor = "";
                                    btnCopiarCartaz.style.color = "";
                                }, 2000);
                            }).catch(() => alert('Seu navegador não suporta copiar imagens diretamente. Use o botão de baixar.'));
                        } catch (err) {
                            alert('Erro ao tentar copiar a imagem.');
                        }
                    }, "image/png");
                });
            }

            if (btnBaixarCartaz) {
                btnBaixarCartaz.addEventListener('click', () => {
                    const url = canvasCartaz.toDataURL("image/png");
                    const link = document.createElement("a");
                    let nomeDownload = inputCartazNome && inputCartazNome.value.trim() !== '' ? inputCartazNome.value.trim() : 'Cartaz';
                    link.download = nomeDownload + ".png";
                    link.href = url;
                    link.click();
                    
                    const original = btnBaixarCartaz.textContent;
                    btnBaixarCartaz.textContent = "✅ Baixado!";
                    btnBaixarCartaz.style.backgroundColor = "#2196f3";
                    btnBaixarCartaz.style.color = "#fff";
                    setTimeout(() => {
                        btnBaixarCartaz.textContent = original;
                        btnBaixarCartaz.style.backgroundColor = "";
                        btnBaixarCartaz.style.color = "";
                    }, 2000);
                });
            }
        }

        const listaFrutas = [
            {nome: "Ame Ame no Mi (Fruta do Melaço)", valor: 1200000000},
            {nome: "Chikyū Chikyū no Mi (Fruta da Terra)", valor: 1300000000},
            {nome: "Gasu Gasu no Mi (Fruta do Gás)", valor: 3000000000},
            {nome: "Goro Goro no Mi (Fruta do Relâmpago)", valor: 2400000000},
            {nome: "Hie Hie no Mi (Fruta do Frio)", valor: 2900000000},
            {nome: "Kaze Kaze no Mi (Fruta do Vento)", valor: 1800000000},
            {nome: "Kumo Kumo no Mi (Fruta da Nuvem)", valor: 1100000000},
            {nome: "Magu Magu no Mi (Fruta do Magma)", valor: 3200000000},
            {nome: "Mera Mera no Mi (Fruta das Chamas)", valor: 1500000000},
            {nome: "Moku Moku no Mi (Fruta da Fumaça)", valor: 1200000000},
            {nome: "Mori Mori no Mi (Fruta da Floresta)", valor: 2900000000},
            {nome: "Numa Numa no Mi (Fruta do Pântano)", valor: 1700000000},
            {nome: "Pasa Pasa no Mi (Fruta do Papel)", valor: 1100000000},
            {nome: "Pika Pika no Mi (Fruta da Luz)", valor: 4200000000},
            {nome: "Suna Suna no Mi (Fruta da Areia)", valor: 2000000000},
            {nome: "Susu Susu no Mi (Fruta da Fuligem)", valor: 1400000000},
            {nome: "Toro Toro no Mi (Fruta do Líquido)", valor: 1200000000},
            {nome: "Yami Yami no Mi (Fruta da Escuridão)", valor: 4500000000},
            {nome: "Yuki Yuki no Mi (Fruta da Neve)", valor: 1600000000},
            {nome: "Ami Ami no Mi (Fruta da Rede)", valor: 500000000},
            {nome: "Aro Aro no Mi (Fruta da Flecha)", valor: 1400000000},
            {nome: "Ato Ato no Mi (Fruta da Arte)", valor: 900000000},
            {nome: "Awa Awa no Mi (Fruta do Sabão)", valor: 200000000},
            {nome: "Baku Baku no Mi (Fruta da Mastigação)", valor: 400000000},
            {nome: "Bane Bane no Mi (Fruta da Mola)", valor: 700000000},
            {nome: "Bara Bara no Mi (Fruta dos Pedaços)", valor: 600000000},
            {nome: "Bari Bari no Mi (Fruta da Barreira)", valor: 850000000},
            {nome: "Bata Bata no Mi (Fruta da Manteiga)", valor: 350000000},
            {nome: "Beri Beri no Mi (Fruta da Baga)", valor: 550000000},
            {nome: "Beta Beta no Mi (Fruta do Muco Explosivo)", valor: 620000000},
            {nome: "Bijo Bijo no Mi (Fruta da Fantasia)", valor: 850000000},
            {nome: "Bisu Bisu no Mi (Fruta do Biscoito)", valor: 1000000000},
            {nome: "Bomu Bomu no Mi (Fruta da Bomba)", valor: 600000000},
            {nome: "Buki Buki no Mi (Fruta das Armas)", valor: 400000000},
            {nome: "Buku Buku no Mi (Fruta dos Livros)", valor: 500000000},
            {nome: "Chiyu Chiyu no Mi (Fruta da Cura)", valor: 900000000},
            {nome: "Choki Choki no Mi (Fruta da Tesoura)", valor: 300000000},
            {nome: "Deka Deka no Mi (Fruta da Gigantificação)", valor: 1300000000},
            {nome: "Dero Dero no Mi (Fruta da Dissolução)", valor: 1300000000},
            {nome: "Doa Doa no Mi (Fruta da Porta)", valor: 800000000},
            {nome: "Doku Doku no Mi (Fruta do Veneno)", valor: 2800000000},
            {nome: "Doru Doru no Mi (Fruta da Cera de Vela)", valor: 400000000},
            {nome: "Fude Fude no Mi (Fruta da Tinta)", valor: 1200000000},
            {nome: "Fuku Fuku no Mi (Fruta da Vestimenta)", valor: 100000000},
            {nome: "Fuwa Fuwa no Mi (Fruta da Levitação)", valor: 1800000000},
            {nome: "Gabu Gabu no Mi (Fruta da Bebida)", valor: 1100000000},
            {nome: "Gasha Gasha no Mi (Fruta da Construção)", valor: 1000000000},
            {nome: "Gatsu Gatsu no Mi (Fruta dos Pregos)", valor: 1500000000},
            {nome: "Genso Genso no Mi (Fruta da Ilusão)", valor: 550000000},
            {nome: "Giro Giro no Mi (Fruta da Visão)", valor: 800000000},
            {nome: "Gocha Gocha no Mi (Fruta da Fusão)", valor: 600000000},
            {nome: "Goe Goe no Mi (Fruta da Voz)", valor: 950000000},
            {nome: "Gomu Gomu no Mi (Fruta da Borracha)", valor: 650000000},
            {nome: "Goru Goru no Mi (Fruta do Ouro)", valor: 1800000000},
            {nome: "Gura Gura no Mi (Fruta do Terremoto)", valor: 3800000000},
            {nome: "Guru Guru no Mi (Fruta da Hélice)", valor: 100000000},
            {nome: "Gutsu Gutsu no Mi (Fruta da Fundição)", valor: 950000000},
            {nome: "Hana Hana no Mi (Fruta dos Membros)", valor: 700000000},
            {nome: "Hemo Hemo no Mi (Fruta do Sangue)", valor: 850000000},
            {nome: "Hira Hira no Mi (Fruta da Bandeira)", valor: 450000000},
            {nome: "Hiso Hiso no Mi (Fruta da Conversa)", valor: 400000000},
            {nome: "Hobi Hobi no Mi (Fruta do Brinquedo)", valor: 1100000000},
            {nome: "Hone Hone no Mi (Fruta do Osso)", valor: 700000000},
            {nome: "Horo Horo no Mi (Fruta do Fantasma)", valor: 800000000},
            {nome: "Horu Horu no Mi (Fruta dos Hormônios)", valor: 800000000},
            {nome: "Hoya Hoya no Mi (Fruta do Gênio)", valor: 500000000},
            {nome: "Iro Iro no Mi (Fruta da Camuflagem)", valor: 400000000},
            {nome: "Ishi Ishi no Mi (Fruta da Rocha)", valor: 1000000000},
            {nome: "Ito Ito no Mi (Fruta dos Fios)", valor: 1200000000},
            {nome: "Jake Jake no Mi (Fruta da Jaqueta)", valor: 120000000},
            {nome: "Jara Jara no Mi (Fruta das Correntes)", valor: 600000000},
            {nome: "Jiki Jiki no Mi (Fruta do Magnetismo)", valor: 1400000000},
            {nome: "Juku Juku no Mi (Fruta do Amadurecimento)", valor: 1100000000},
            {nome: "Kachi Kachi no Mi (Fruta da Resistência de Ferro)", valor: 800000000},
            {nome: "Kage Kage no Mi (Fruta da Sombra)", valor: 1400000000},
            {nome: "Kama Kama no Mi (Fruta da Unha)", valor: 700000000},
            {nome: "Kegawa Kegawa no Mi (Fruta do Pelo)", valor: 400000000},
            {nome: "Kesshō Kesshō no Mi (Fruta do Cristal)", valor: 800000000},
            {nome: "Kibi Kibi no Mi (Fruta do Kibi Dango)", valor: 650000000},
            {nome: "Kira Kira no Mi (Fruta do Diamante)", valor: 600000000},
            {nome: "Kiro Kiro no Mi (Fruta do Peso)", valor: 250000000},
            {nome: "Kobu Kobu no Mi (Fruta do Incentivo)", valor: 300000000},
            {nome: "Kon Kon no Mi (Fruta do Milho)", valor: 500000000},
            {nome: "Koro Koro no Mi (Fruta do Giro)", valor: 180000000},
            {nome: "Kuku Kuku no Mi (Fruta da Comida)", valor: 250000000},
            {nome: "Kuri Kuri no Mi (Fruta do Creme)", valor: 600000000},
            {nome: "Kyubu Kyubu no Mi (Fruta dos Cubos)", valor: 890000000},
            {nome: "Maki Maki no Mi (Fruta do Pergaminho)", valor: 850000000},
            {nome: "Mane Mane no Mi (Fruta da Cópia de Aparência)", valor: 120000000},
            {nome: "Masu Masu no Mi (Fruta da Massa)", valor: 1200000000},
            {nome: "Mato Mato no Mi (Fruta do Alvo)", valor: 450000000},
            {nome: "Memo Memo no Mi (Fruta da Memória)", valor: 750000000},
            {nome: "Mero Mero no Mi (Fruta do Amor)", valor: 2000000000},
            {nome: "Mini Mini no Mi (Fruta da Diminuição Corporal)", valor: 300000000},
            {nome: "Mira Mira no Mi (Fruta dos Espelhos)", valor: 800000000},
            {nome: "Muchi Muchi no Mi (Fruta do Chicote)", valor: 750000000},
            {nome: "Moa Moa no Mi (Fruta do Aumento)", valor: 1000000000},
            {nome: "Modo Modo no Mi (Fruta do Retorno)", valor: 3900000000},
            {nome: "Mosa Mosa no Mi (Fruta do Crescimento)", valor: 600000000},
            {nome: "Nagi Nagi no Mi (Fruta do Silêncio)", valor: 300000000},
            {nome: "Nawa Nawa no Mi (Fruta das Cordas)", valor: 250000000},
            {nome: "Nemu Nemu no Mi (Fruta do Sono)", valor: 450000000},
            {nome: "Netsu Netsu no Mi (Fruta do Calor)", valor: 550000000},
            {nome: "Nikyu Nikyu no Mi (Fruta da Pata)", valor: 3000000000},
            {nome: "Noko Noko no Mi (Fruta do Cogumelo)", valor: 900000000},
            {nome: "Nomi Nomi no Mi (Fruta do Cérebro)", valor: 200000000},
            {nome: "Nori Nori no Mi (Fruta da Montaria)", valor: 700000000},
            {nome: "Noro Noro no Mi (Fruta da Lentidão)", valor: 600000000},
            {nome: "Nui Nui no Mi (Fruta da Costura)", valor: 370000000},
            {nome: "Nuke Nuke no Mi (Fruta da Intangibilidade)", valor: 900000000},
            {nome: "Ope Ope no Mi (Fruta da Operação)", valor: 4600000000},
            {nome: "Ori Ori no Mi (Fruta da Grade)", valor: 350000000},
            {nome: "Oshi Oshi no Mi (Fruta da Argila)", valor: 500000000},
            {nome: "Oto Oto no Mi (Fruta do Som)", valor: 1000000000},
            {nome: "Pamu Pamu no Mi (Fruta da Explosão)", valor: 800000000},
            {nome: "Pero Pero no Mi (Fruta do Doce)", valor: 600000000},
            {nome: "Peto Peto no Mi (Fruta do Pet)", valor: 800000000},
            {nome: "Poke Poke no Mi (Fruta do Bolso)", valor: 650000000},
            {nome: "Rashin Rashin no Mi (Fruta da Bússola)", valor: 700000000},
            {nome: "Riki Riki no Mi (Fruta da Força)", valor: 1000000000},
            {nome: "Sabi Sabi no Mi (Fruta da Ferrugem)", valor: 400000000},
            {nome: "Shari Shari no Mi (Fruta da Roda)", valor: 120000000},
            {nome: "Shibo Shibo no Mi (Fruta do Suco)", valor: 800000000},
            {nome: "Shiku Shiku no Mi (Fruta da Doença)", valor: 2200000000},
            {nome: "Shima Shima no Mi (Fruta da Ilha)", valor: 1600000000},
            {nome: "Shiro Shiro no Mi (Fruta da Fortaleza)", valor: 1200000000},
            {nome: "Soru Soru no Mi (Fruta da Alma)", valor: 2300000000},
            {nome: "Sube Sube no Mi (Fruta do Corpo Liso)", valor: 100000000},
            {nome: "Sui Sui no Mi (Fruta do Nado)", valor: 300000000},
            {nome: "Suji Suji no Mi (Fruta dos Músculos)", valor: 800000000},
            {nome: "Suke Suke no Mi (Fruta da Invisibilidade)", valor: 500000000},
            {nome: "Supa Supa no Mi (Fruta das Lâminas)", valor: 700000000},
            {nome: "Toge Toge no Mi (Fruta dos Espinhos)", valor: 400000000},
            {nome: "Toki Toki no Mi (Fruta do Tempo)", valor: 2100000000},
            {nome: "Ton Ton no Mi (Fruta do Aumento de Peso)", valor: 1000000000},
            {nome: "Toshi Toshi no Mi (Fruta da Idade)", valor: 800000000},
            {nome: "Tsutsu Tsutsu no Mi (Fruta do Barril)", valor: 550000000},
            {nome: "Uta Uta no Mi (Fruta da Canção)", valor: 2400000000},
            {nome: "Wapu Wapu no Mi (Fruta do Teleporte)", valor: 1900000000},
            {nome: "Wara Wara no Mi (Fruta da Palha)", valor: 800000000},
            {nome: "Woshu Woshu no Mi (Fruta da Limpeza)", valor: 120000000},
            {nome: "Yomi Yomi no Mi (Fruta do Renascimento)", valor: 750000000},
            {nome: "Zushi Zushi no Mi (Fruta da Gravidade)", valor: 2600000000},
            {nome: "Karan Karan no Mi (Fruta do Metal)", valor: 1200000000},
            {nome: "Mochi Mochi no Mi (Fruta do Bolo de Arroz)", valor: 1000000000},
            {nome: "Kame Kame no Mi", valor: 250000000},
            {nome: "Batto Batto no Mi", valor: 500000000},
            {nome: "Gama Gama no Mi", valor: 160000000},
            {nome: "Hebi Hebi no Mi, Modelo: Anaconda", valor: 500000000},
            {nome: "Hebi Hebi no Mi, Modelo: Cobra-Real", valor: 500000000},
            {nome: "Hito Hito no Mi", valor: 300000000},
            {nome: "Inu Inu no Mi, Modelo: Cão de Caça", valor: 450000000},
            {nome: "Inu Inu no Mi, Modelo: Cão-Guaxinim", valor: 450000000},
            {nome: "Inu Inu no Mi, Modelo: Chacal", valor: 450000000},
            {nome: "Inu Inu no Mi, Modelo: Dachshund", valor: 150000000},
            {nome: "Inu Inu no Mi, Modelo: Lobo", valor: 600000000},
            {nome: "Mogu Mogu no Mi", valor: 320000000},
            {nome: "Mushi Mushi no Mi, Modelo: Besouro-Rinoceronte", valor: 450000000},
            {nome: "Mushi Mushi no Mi, Modelo: Vespa-Mandarina", valor: 180000000},
            {nome: "Neko Neko no Mi, Modelo: Leão", valor: 450000000},
            {nome: "Neko Neko no Mi, Modelo: Leopardo", valor: 400000000},
            {nome: "Neko Neko no Mi, Modelo: Pantera Negra", valor: 500000000},
            {nome: "Neko Neko no Mi, Modelo: Tigre de Bengala", valor: 450000000},
            {nome: "Rako Rako no Mi", valor: 180000000},
            {nome: "Sara Sara no Mi, Modelo: Axolote", valor: 180000000},
            {nome: "Tama Tama no Mi", valor: 900000000},
            {nome: "Tori Tori no Mi, Modelo: Águia", valor: 350000000},
            {nome: "Tori Tori no Mi, Modelo: Albatroz", valor: 100000000},
            {nome: "Tori Tori no Mi, Modelo: Falcão", valor: 350000000},
            {nome: "Uma Uma no Mi", valor: 100000000},
            {nome: "Usagi Usagi no Mi", valor: 130000000},
            {nome: "Ushi Ushi no Mi, Modelo: Bisão", valor: 300000000},
            {nome: "Ushi Ushi no Mi, Modelo: Girafa", valor: 300000000},
            {nome: "Ushi Ushi no Mi, Modelo: Rinoceronte", valor: 600000000},
            {nome: "Zou Zou no Mi", valor: 500000000},
            {nome: "Kumo Kumo no Mi, Modelo: Rosamygale grauvogeli", valor: 1400000000},
            {nome: "Neko Neko no Mi, Modelo: Tigre-Dente-de-Sabre", valor: 1600000000},
            {nome: "Ryū Ryū no Mi, Modelo: Alossauro", valor: 1950000000},
            {nome: "Ryū Ryū no Mi, Modelo: Braquiossauro", valor: 1550000000},
            {nome: "Ryū Ryū no Mi, Modelo: Espinossauro", valor: 1950000000},
            {nome: "Ryū Ryū no Mi, Modelo: Paquicefalossauro", valor: 1000000000},
            {nome: "Ryū Ryū no Mi, Modelo: Pteranodonte", valor: 1700000000},
            {nome: "Ryū Ryū no Mi, Modelo: Triceratops", valor: 1000000000},
            {nome: "Zou Zou no Mi, Modelo: Mamute", valor: 1800000000},
            {nome: "Batto Batto no Mi, Modelo: Vampiro", valor: 3200000000},
            {nome: "Hebi Hebi no Mi, Modelo: Kaijū", valor: 3800000000},
            {nome: "Hebi Hebi no Mi, Modelo: Yamata no Orochi", valor: 2200000000},
            {nome: "Hito Hito no Mi, Modelo: Daibutsu", valor: 2500000000},
            {nome: "Hito Hito no Mi, Modelo: Estátua", valor: 2500000000},
            {nome: "Hito Hito no Mi, Modelo: O Anfitrião", valor: 4134134134},
            {nome: "Hito Hito no Mi, Modelo: Ōnyūdō", valor: 2200000000},
            {nome: "Inu Inu no Mi, Modelo: Bake-Danuki", valor: 2000000000},
            {nome: "Inu Inu no Mi, Modelo: Cérbero", valor: 2300000000},
            {nome: "Inu Inu no Mi, Modelo: Ōkuchi no Makami", valor: 3000000000},
            {nome: "Inu Inu no Mi, Modelo: Raposa de Nove Caudas", valor: 2700000000},
            {nome: "Ryū Ryū no Mi, Modelo: Dragão Ocidental", valor: 2700000000},
            {nome: "Ryū Ryū no Mi, Modelo: Kirin", valor: 2500000000},
            {nome: "Tori Tori no Mi, Modelo: Fênix", valor: 3000000000},
            {nome: "Tori Tori no Mi, Modelo: Nue", valor: 3000000000},
            {nome: "Tori Tori no Mi, Modelo: Pássaro de Cinzas", valor: 1800000000},
            {nome: "Tori Tori no Mi, Modelo: Pássaro de Gelo", valor: 2200000000},
            {nome: "Tori Tori no Mi, Modelo: Thunderbird", valor: 2400000000},
            {nome: "Uma Uma no Mi, Modelo: Pégaso", valor: 2100000000},
            {nome: "Uo Uo no Mi, Modelo: Carpa Seiryū", valor: 2900000000}
        ];

        if (inputMin) {
            const menorValor = Math.min(...listaFrutas.map(f => f.valor));
            inputMin.value = menorValor.toLocaleString('pt-BR');
        }
        if (inputMax) {
            const maiorValor = Math.max(...listaFrutas.map(f => f.valor));
            inputMax.value = maiorValor.toLocaleString('pt-BR');
        }

        btnSortear.addEventListener('click', () => {
            let minStr = inputMin.value.replace(/\D/g, '');
            let maxStr = inputMax.value.replace(/\D/g, '');
            
            let min = parseInt(minStr, 10);
            let max = parseInt(maxStr, 10);
            
            let qtdMinVal = parseInt(inputQtdMin.value, 10);
            let qtdMaxVal = parseInt(inputQtdMax.value, 10);
            
            if (isNaN(qtdMinVal) || qtdMinVal < 1) qtdMinVal = 1;
            if (isNaN(qtdMaxVal) || qtdMaxVal < 1) qtdMaxVal = 1;
            if (qtdMinVal > qtdMaxVal) qtdMinVal = qtdMaxVal;
            
            if (isNaN(min) || isNaN(max)) {
                preResultado.textContent = "Por favor, defina os valores mínimo e máximo.";
                preResultado.style.color = "#f44336";
                containerResultado.style.display = 'block';
                return;
            }

            if (min > max) {
                preResultado.textContent = "O valor mínimo não pode ser maior que o máximo.";
                preResultado.style.color = "#f44336";
                containerResultado.style.display = 'block';
                return;
            }
            
            const checkboxIncluir = document.getElementById('sorteio-incluir-donos');
            const incluirDonos = checkboxIncluir ? checkboxIncluir.checked : false;

            const frutasObrigatorias = [];
            const frutasNormais = [];

            listaFrutas.forEach(f => {
                if (f.valor < min || f.valor > max) return;
                
                let nomeBase = f.nome.split(' (')[0].trim();
                let isObrigatoria = false;
                let isOcupada = false;

                Object.keys(window.donosDeAkuma).forEach(key => {
                    if (key.replace(' [Original do RPG]', '').trim() === nomeBase) {
                        if (window.donosDeAkuma[key] === "AGORAAGORA") {
                            isObrigatoria = true;
                        } else {
                            isOcupada = true;
                        }
                    }
                });

                if (isObrigatoria) {
                    frutasObrigatorias.push(f);
                } else if (incluirDonos || !isOcupada) {
                    frutasNormais.push(f);
                }
            });

            if (frutasObrigatorias.length === 0 && frutasNormais.length === 0) {
                preResultado.textContent = "Nenhuma Akuma no Mi encontrada nessa faixa de valor.";
                preResultado.style.color = "#ffeb3b";
                containerResultado.style.display = 'block';
                return;
            }

            let baseQtdMin = Math.max(qtdMinVal, Math.min(qtdMaxVal, frutasObrigatorias.length));
            let qtd = Math.floor(Math.random() * (qtdMaxVal - baseQtdMin + 1)) + baseQtdMin;

            for (let i = frutasObrigatorias.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [frutasObrigatorias[i], frutasObrigatorias[j]] = [frutasObrigatorias[j], frutasObrigatorias[i]];
            }
            
            for (let i = frutasNormais.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [frutasNormais[i], frutasNormais[j]] = [frutasNormais[j], frutasNormais[i]];
            }

            let sorteadas = [];
            
            let qtdPegarObrigatorias = Math.min(qtd, frutasObrigatorias.length);
            sorteadas = sorteadas.concat(frutasObrigatorias.slice(0, qtdPegarObrigatorias));
            
            let restantes = qtd - sorteadas.length;
            if (restantes > 0) {
                let qtdPegarNormais = Math.min(restantes, frutasNormais.length);
                sorteadas = sorteadas.concat(frutasNormais.slice(0, qtdPegarNormais));
            }

            sorteadas.sort((a, b) => {
                let nameA = a.nome.split(' (')[0].trim();
                let nameB = b.nome.split(' (')[0].trim();
                return nameA.localeCompare(nameB, 'pt-BR');
            });

            const inputIlhaManual = document.getElementById('sorteio-ilha-manual');
            const selectMar = document.getElementById('sorteio-mar');
            const selectFaccao = document.getElementById('sorteio-faccao');

            let nomeIlha = "";
            
            if (inputIlhaManual && inputIlhaManual.value.trim() !== '') {
                nomeIlha = inputIlhaManual.value.trim();
            } else {
                let marFiltro = selectMar ? selectMar.value : 'Qualquer';
                let faccaoFiltro = selectFaccao ? selectFaccao.value : 'Qualquer';
                let ilhasValidas = [];

                if (typeof bancoDeIlhas !== 'undefined') {
                    for (const [marNome, ilhas] of Object.entries(bancoDeIlhas)) {
                        if (marFiltro !== 'Qualquer' && marNome !== marFiltro) continue;
                        
                        ilhas.forEach(ilha => {
                            if (faccaoFiltro !== 'Qualquer' && ilha.afiliacaoClasse !== faccaoFiltro) return;
                            ilhasValidas.push(ilha.nome);
                        });
                    }
                }

                if (ilhasValidas.length > 0) {
                    nomeIlha = ilhasValidas[Math.floor(Math.random() * ilhasValidas.length)];
                } else {
                    nomeIlha = "[Nenhuma ilha corresponde aos filtros]";
                }
            }

            let textoFinal = "*SORTEIO DAS FRUTAS RARAS QUE ESTÃO DISPONÍVEIS PARA SEREM COMPRADAS*\n\n";
            textoFinal += `* Ilha: *${nomeIlha}*\n\n`;
            textoFinal += "* Frutas:\n";
            
            sorteadas.forEach((f, index) => {
                let nomeBase = f.nome.split(' (')[0].trim();
                textoFinal += `${index + 1}. *${nomeBase} - ฿${f.valor.toLocaleString('pt-BR')}*\n`;
            });

            textoFinal += "\nAqui está o link que lhes permite verificar qual é a cada uma das Frutas: https://herikliz.github.io/New-Seas-RPG/akuma-no-mi.html";

            preResultado.textContent = textoFinal;
            preResultado.style.color = "var(--text-color)";
            containerResultado.style.display = 'block';
        });

        btnCopiar.addEventListener('click', () => {
            if (!preResultado.textContent || preResultado.textContent.includes('Por favor') || preResultado.textContent.includes('Nenhuma')) return;
            if (btnCopiar.dataset.copying) return;
            btnCopiar.dataset.copying = "true";
            
            if (window.copiarTextoUniversal) {
                window.copiarTextoUniversal(preResultado.textContent).then(() => {
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
                        delete btnCopiar.dataset.copying;
                    }, 1000);
                });
            } else {
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
                        delete btnCopiar.dataset.copying;
                    }, 1000);
                });
            }
        });
    }
});

function initLinhagensAutomacao() {
    if (!window.location.pathname.includes('linhagens.html') && !window.location.pathname.includes('racas.html')) return;
    const vagasHeaders = Array.from(document.querySelectorAll('h4.highlight-text, h5.highlight-text')).filter(h => h.textContent.includes('Vagas'));
    vagasHeaders.forEach(header => {
        let ul = header.nextElementSibling;
        while (ul && ul.tagName !== 'UL' && ul.tagName !== 'H4' && ul.tagName !== 'H5') {
            ul = ul.nextElementSibling;
        }
        if (ul && ul.tagName === 'UL') {
            const lis = Array.from(ul.querySelectorAll('li'));
            const totalVagas = lis.length;
            const ocupados = [];
            const livres = [];
            lis.forEach(li => {
                const textoLimpo = li.textContent.trim();
                if (textoLimpo === '' || textoLimpo === String.fromCharCode(160) || li.innerHTML.trim() === '&nbsp;') {
                    livres.push(li);
                } else {
                    ocupados.push(li);
                }
            });
            ocupados.sort((a, b) => a.textContent.trim().localeCompare(b.textContent.trim(), 'pt-BR'));
            header.textContent = `Vagas ${ocupados.length}/${totalVagas}:`;
            ul.innerHTML = '';
            ocupados.forEach(li => ul.appendChild(li));
            livres.forEach(li => ul.appendChild(li));
        }
    });
}
function initProcuradosCopy() {
    if (!window.location.pathname.includes('procurados.html') && !window.location.pathname.includes('aparencias.html')) return;
    
    document.querySelectorAll('.bounty-name, .bounty-value, .gallery-title, .gallery-subtitle').forEach(el => {
        const nodes = Array.from(el.childNodes);
        el.innerHTML = '';
        
        let currentWrapper = document.createElement('span');
        currentWrapper.style.position = 'relative';
        currentWrapper.style.display = 'inline-block';

        function attachIconIfNeeded(wrapper) {
            let wText = wrapper.textContent.trim();
            if (wText !== '' && wText !== 'OC' && wText !== 'IA') {
                const icon = document.createElement('span');
                icon.className = 'bounty-copy-icon';
                icon.innerHTML = '📋';
                icon.title = 'Copiar';
                icon.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    icon.style.display = 'none';
                    let textToCopy = wrapper.innerText || wrapper.textContent;
                    icon.style.display = '';
                    
                    textToCopy = textToCopy.trim();
                    
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        icon.innerHTML = '✔️';
                        icon.style.color = '#4caf50';
                        setTimeout(() => {
                            icon.innerHTML = '📋';
                            icon.style.color = '';
                        }, 1500);
                    });
                });
                wrapper.appendChild(icon);
            }
        }

        nodes.forEach(node => {
            if (node.nodeName.toLowerCase() === 'br') {
                attachIconIfNeeded(currentWrapper);
                el.appendChild(currentWrapper);
                el.appendChild(node);
                
                currentWrapper = document.createElement('span');
                currentWrapper.style.position = 'relative';
                currentWrapper.style.display = 'inline-block';
            } else {
                currentWrapper.appendChild(node);
            }
        });

        if (currentWrapper.childNodes.length > 0) {
            attachIconIfNeeded(currentWrapper);
            el.appendChild(currentWrapper);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initLinhagensAutomacao();
        initMeitosAutomacao();
        initProcuradosCopy();
    });
} else {
    initLinhagensAutomacao();
    initMeitosAutomacao();
    initProcuradosCopy();
}

function initMeitosAutomacao() {
    if (!window.location.pathname.includes('loja-de-meitos.html')) return;
    const headers = Array.from(document.querySelectorAll('h2.title-quantico, h2.toggle-title, h3'));
    headers.forEach(header => {
        const text = header.textContent.toLowerCase();
        let total = null;
        if (text.includes('ryo wazamono') || text.includes('ryō wazamono')) total = 50;
        else if (text.includes('saijo') || text.includes('saijō')) total = 12;
        else if (text.includes('o wazamono') || text.includes('ō wazamono')) total = 21;
        else if (text.includes('wazamono')) total = '??';
        else if (text.includes('classificação') || text.includes('sem classe') || text.includes('outras')) total = '??';
        if (total !== null) {
            let contentDiv = header.nextElementSibling;
            while (contentDiv && !contentDiv.classList.contains('toggle-content') && !contentDiv.classList.contains('box-content') && contentDiv.tagName !== 'DIV') {
                contentDiv = contentDiv.nextElementSibling;
            }
            if (contentDiv) {
                const itemsCount = contentDiv.querySelectorAll('h4').length;
                let counterEl = contentDiv.querySelector('.meito-contador');
                if (!counterEl) {
                    counterEl = document.createElement('p');
                    counterEl.className = 'meito-contador highlight-text';
                    counterEl.style.marginBottom = '15px';
                    contentDiv.insertBefore(counterEl, contentDiv.firstChild);
                }
                counterEl.textContent = `Quantidade: ${itemsCount}/${total}`;
            }
        }
    });
}

window.copiarTextoDoSubmundo = function() {
    const caixa = document.getElementById('caixa-texto-informativa');
    const botao = event.target;
    
    if (!caixa) return;
    
    const texto = caixa.innerText;
    
    window.copiarTextoUniversal(texto).then(() => {
        const originalText = botao.textContent;
        const originalBg = botao.style.backgroundColor;
        
        botao.textContent = "Copiado!";
        botao.style.backgroundColor = "#4caf50";
        
        setTimeout(() => {
            botao.textContent = originalText;
            botao.style.backgroundColor = originalBg;
        }, 1500);
    });
};