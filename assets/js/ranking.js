/* ============================================================================
   RANKING DE PERSONAGENS
   Área Restrita > Coisas Guardadas > "Ranking de Personagens"

   Como funciona:
   - As fichas ficam no Firebase (coleção "fichas_op"). Cada personagem/NPC guarda um
     pequeno resumo (char.ranking) com os MESMOS números da Ficha Pronta: Base, Total,
     Akuma no Mi, Espírito e Hakis. Este arquivo só lê esse resumo; não recalcula nada.
   - O Firebase só é carregado quando a pessoa clica em "Puxar Ranking".
   - Fichas antigas só aparecem em Total/Akuma/Haki depois de abertas e salvas na Ficha
     (versão nova). "Base" funciona para todas, pois é calculado direto dos atributos.
   - IDs NPCS e NPCI só entram com o botão específico, e nesses IDs só entram NPCs.
   - Cópias "[COMBATE]" (Ficha travada) são ignoradas para ninguém aparecer duplicado.
   ============================================================================ */
(function () {
    'use strict';

    const painel = document.getElementById('container-coisas-guardadas-ranking');
    if (!painel) return; // esta página não tem o ranking

    // Configuração pública do Firebase (a mesma da Ficha).
    const FIREBASE_CONFIG = {
        "apiKey": "AIzaSyDG9zDcphqyTfXXZBWc0-uRV74eeie_tEE",
        "authDomain": "new-seas.firebaseapp.com",
        "projectId": "new-seas",
        "storageBucket": "new-seas.firebasestorage.app",
        "messagingSenderId": "551983006255",
        "appId": "1:551983006255:web:29dae15ad04dabff7afcda"
};
    const COLECAO = 'fichas_op';
    const SDK = [
        'https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js',
        'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js',
    ];
    const IDS_ESPECIAIS = ['NPCS', 'NPCI'];

    // Ficha (mesmo domínio deste site): carregada escondida só para usar o motor de cálculo dela.
    const URL_FICHA = '/New-Seas-RPG-Ficha/index.html';
    // Versão do resumo de ranking. Tem que ser igual à RANKING_VERSAO do script.js da Ficha.
    const RANKING_VERSAO = 1;

    // ===== HORÁRIO EM QUE O RANKING PODE SER PUXADO (horário de Brasília) =====
    // Para mudar o horário, altere só 'inicio' e 'fim' (formato 'HH:MM', 24 horas).
    //   - 'inicio' é o primeiro minuto liberado e 'fim' é o ÚLTIMO minuto liberado.
    //   - Pode cruzar a meia-noite (ex.: das 21:00 às 03:59 vale a noite toda).
    //   - Exemplos: das 22:00 às 05:30 -> inicio '22:00', fim '05:30'
    //               das 08:00 às 12:59 -> inicio '08:00', fim '12:59'
    // Para liberar o ranking o dia inteiro, troque 'ativa' para false.
    const JANELA_HORARIO = { ativa: true, inicio: '00:00', fim: '03:59' };

    // Pontuações que podem ser ordenadas. get() devolve null quando a ficha ainda não tem o dado.
    const PONTUACOES = {
        base: { rotulo: 'Base', get: (p) => p.base },
        total: { rotulo: 'Total', get: (p) => p.total },
        akuma: { rotulo: 'Akuma no Mi', get: (p) => p.akuma },
        haki: {
            rotulo: 'Haki (Armamento + Observação + Rei)',
            get: (p) => (p.ha === null ? null : p.ha + p.ho + p.hr),
        },
        ha: { rotulo: 'Haki do Armamento', get: (p) => p.ha },
        ho: { rotulo: 'Haki da Observação', get: (p) => p.ho },
        hr: { rotulo: 'Haki do Rei', get: (p) => p.hr },
        esp: { rotulo: 'Espírito', get: (p) => p.esp },
    };

    const $ = (id) => document.getElementById(id);
    const el = {
        pontuacao: $('rk-pontuacao'), top: $('rk-top'), tipo: $('rk-tipo'), ordem: $('rk-ordem'),
        btnEspeciais: $('rk-btn-especiais'), notaEspeciais: $('rk-nota-especiais'),
        org: $('rk-org'), raca: $('rk-raca'), linhagem: $('rk-linhagem'), classe: $('rk-classe'),
        akuma: $('rk-akuma'), tripulacao: $('rk-tripulacao'), nome: $('rk-nome'), minimo: $('rk-minimo'),
        btnLimpar: $('rk-btn-limpar'), btnPuxar: $('rk-btn-puxar'), status: $('rk-status'),
        resultado: $('rk-resultado'), resumo: $('rk-resumo'), lista: $('rk-lista'), btnCopiar: $('rk-btn-copiar'),
        janela: $('rk-aviso-janela'),
    };

    const estado = {
        dados: null, // personagens/NPCs de fichas com ID numérico (null = ainda não puxou)
        fichasLidas: 0,
        especiais: { NPCS: null, NPCI: null },
        usarEspeciais: false,
        carregando: false,
        ultimoTexto: '',
        pendentes: new Set(), // IDs de fichas com personagens sem o resumo do ranking
        tentados: new Set(),
        semSolucao: new Set(), // fichas que a Ficha não conseguiu calcular: não são tentadas de novo até recarregar
        motor: null, // janela da Ficha escondida
        leituras: 0, atualizadas: 0, semCalculo: 0, erroAtualizacao: '', resumoOk: '',
    };
    let db = null;

    /* ------------------------- janela de horário ------------------------------ */
    const paraMinutos = (hhmm) => {
        const m = /^(\d{1,2}):(\d{2})$/.exec(String(hhmm).trim());
        return m ? Number(m[1]) * 60 + Number(m[2]) : NaN;
    };

    // Hora de Brasília (em minutos desde 00:00) para o instante informado.
    function minutosEmBrasilia(instante) {
        const partes = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
        }).formatToParts(instante);
        const h = Number(partes.find((p) => p.type === 'hour').value);
        const m = Number(partes.find((p) => p.type === 'minute').value);
        return h * 60 + m;
    }

    // Tenta usar a hora do servidor do site (cabeçalho Date), que não depende do relógio do
    // aparelho; se não conseguir, usa o relógio do aparelho.
    async function agoraConfiavel() {
        try {
            const ctl = new AbortController();
            const t = setTimeout(() => ctl.abort(), 4000);
            const r = await fetch(location.pathname + '?_=' + Date.now(), { method: 'HEAD', cache: 'no-store', signal: ctl.signal });
            clearTimeout(t);
            const d = r.headers.get('Date');
            const ms = d ? Date.parse(d) : NaN;
            if (!isNaN(ms)) return new Date(ms);
        } catch (e) { /* cai no relógio do aparelho */ }
        return new Date();
    }

    function janelaValida() {
        return !isNaN(paraMinutos(JANELA_HORARIO.inicio)) && !isNaN(paraMinutos(JANELA_HORARIO.fim));
    }

    function dentroDaJanela(instante) {
        if (!JANELA_HORARIO.ativa) return true;
        if (!janelaValida()) return false; // horário escrito errado: bloqueia por segurança
        const agora = minutosEmBrasilia(instante);
        const ini = paraMinutos(JANELA_HORARIO.inicio);
        const fim = paraMinutos(JANELA_HORARIO.fim);
        return ini <= fim ? (agora >= ini && agora <= fim) : (agora >= ini || agora <= fim);
    }

    function textoDaJanela() {
        if (!JANELA_HORARIO.ativa) return '';
        if (!janelaValida()) return 'O horário configurado em JANELA_HORARIO (ranking.js) está inválido; o ranking está bloqueado até corrigir.';
        return 'O ranking só pode ser puxado entre ' + JANELA_HORARIO.inicio + ' e ' + JANELA_HORARIO.fim + ' (horário de Brasília).';
    }

    // Devolve true se pode continuar; senão mostra o aviso e devolve false.
    async function horarioLiberado() {
        if (!JANELA_HORARIO.ativa) return true;
        const agora = await agoraConfiavel();
        if (dentroDaJanela(agora)) return true;
        const hora = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(agora);
        mostrarStatus('Fora do horário. ' + textoDaJanela() + ' Agora são ' + hora + ' em Brasília.', 'erro');
        return false;
    }

    /* ------------------------------ utilidades ------------------------------ */
    const fmt = (n) => Number(n).toLocaleString('pt-BR');
    const norm = (t) => String(t == null ? '' : t).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    const soNumero = (t) => parseInt(String(t || '').replace(/\D/g, ''), 10) || 0;

    function mostrarStatus(texto, tipo) {
        el.status.textContent = texto || '';
        el.status.className = 'rk-status' + (tipo ? ' rk-' + tipo : '');
        el.status.style.display = texto ? 'block' : 'none';
    }

    /* ------------------------------- Firebase -------------------------------- */
    function carregarScript(url) {
        return new Promise((ok, erro) => {
            const s = document.createElement('script');
            s.src = url;
            s.onload = ok;
            s.onerror = () => erro(new Error('Não foi possível carregar o Firebase (' + url + ').'));
            document.head.appendChild(s);
        });
    }

    async function garantirBanco() {
        if (db) return db;
        if (!(window.firebase && window.firebase.firestore)) {
            for (const url of SDK) await carregarScript(url);
        }
        const nome = 'ranking';
        const app = firebase.apps.find((a) => a.name === nome) || firebase.initializeApp(FIREBASE_CONFIG, nome);
        db = app.firestore();
        return db;
    }

    // Só os campos usados no ranking são guardados; o resto do documento (inclusive a senha
    // da ficha) é descartado na hora e nunca fica na memória da página.
    function resumir(idDoc, c, tipo) {
        if (!c || typeof c !== 'object') return null;
        const nome = String(c.name || '').trim();
        if (/\[COMBATE\]\s*$/i.test(nome)) return null; // cópia de combate (Ficha travada)
        const info = c.info || {};
        const st = c.stats || {};
        const base = (+st.d || 0) + (+st.f || 0) + (+st.r || 0) + (+st.v || 0);
        if (!nome && base === 0) return null; // ficha em branco
        const rk = c.ranking && typeof c.ranking === 'object' ? c.ranking : null;
        const num = (k) => (rk && Number.isFinite(+rk[k]) ? +rk[k] : null);
        const custom = (valor, nomeCustom) => (valor === 'Outra' && nomeCustom ? nomeCustom : valor) || '';
        const classes = [info.classe, info.classe2, info.classe3, info.classe4, info.classe5, info.classe6, info.classe7, info.classe8]
            .filter(Boolean)
            .map((x) => String(x).replace(/\s*\d+\s*$/, '').trim())
            .filter(Boolean);
        const akumaNome = info.akumaNome && info.akumaNome !== 'nenhuma' ? String(info.akumaNome) : '';
        return {
            id: idDoc,
            tipo,
            nome: nome || '(sem nome)',
            racas: [custom(info.raca, info.racaNomeCustom), custom(info.raca2, info.racaNomeCustom2)].filter(Boolean),
            linhagem: custom(info.linhagem, info.linhagemNomeCustom),
            classes: [...new Set(classes)],
            org: info.orgTipo ? String(info.orgTipo) : '',
            tripulacao: info.tripulacao ? String(info.tripulacao) : '',
            akumaNome,
            base,
            total: num('total'),
            akuma: num('akuma'),
            esp: num('esp'),
            ha: num('ha'),
            ho: num('ho'),
            hr: num('hr'),
            temResumo: !!(rk && rk.v === RANKING_VERSAO),
        };
    }

    function registrarPendencia(id, entradas) {
        if (entradas.some((e) => !e.temResumo)) estado.pendentes.add(id);
        else estado.pendentes.delete(id);
    }

    function extrair(idDoc, dados, soNpcs) {
        const saida = [];
        ((dados && dados.pcs) || []).forEach((p) => {
            if (!p) return;
            // IDs especiais: só NPCs. Nos demais, o personagem do slot principal também entra.
            const pcEhNpc = p.pc && p.pc.isNPC === true;
            if (p.pc && (!soNpcs || pcEhNpc)) {
                const r = resumir(idDoc, p.pc, pcEhNpc ? 'NPC' : 'PC');
                if (r) saida.push(r);
            }
            (p.npcs || []).forEach((n) => {
                const r = resumir(idDoc, n, 'NPC');
                if (r) saida.push(r);
            });
        });
        return saida;
    }

    async function buscarFichasNumericas() {
        const banco = await garantirBanco();
        const idDoc = firebase.firestore.FieldPath.documentId();
        // IDs que começam com dígito (os de 4 números). Fica de fora: NPCS, NPCI e BACKUP-*.
        const snap = await banco.collection(COLECAO).where(idDoc, '>=', '0').where(idDoc, '<', ':').get();
        const lista = [];
        snap.forEach((doc) => {
            const entradas = extrair(doc.id, doc.data(), false);
            registrarPendencia(doc.id, entradas);
            lista.push(...entradas);
        });
        estado.fichasLidas = snap.size;
        return lista;
    }

    async function buscarEspecial(id) {
        const banco = await garantirBanco();
        const doc = await banco.collection(COLECAO).doc(id).get();
        const entradas = doc.exists ? extrair(id, doc.data(), true) : [];
        registrarPendencia(id, entradas);
        return entradas;
    }

    function mensagemDeErro(e) {
        if (e && e.code === 'permission-denied')
            return 'O Firebase não permitiu ler as fichas (regras de segurança do Firestore). É preciso liberar a leitura da coleção "' + COLECAO + '".';
        return (e && e.message) || 'Erro desconhecido ao falar com o Firebase.';
    }

    /* --------------------------- filtros e ordenação -------------------------- */
    function todosOsDados() {
        let lista = estado.dados ? estado.dados.slice() : [];
        if (estado.usarEspeciais) IDS_ESPECIAIS.forEach((id) => { if (estado.especiais[id]) lista = lista.concat(estado.especiais[id]); });
        return lista;
    }

    function lerFiltros() {
        return {
            pontuacao: el.pontuacao.value,
            top: Math.max(1, Math.min(500, parseInt(el.top.value, 10) || 10)),
            tipo: el.tipo.value,
            ordem: el.ordem.value,
            org: el.org.value, raca: el.raca.value, linhagem: el.linhagem.value, classe: el.classe.value,
            akuma: el.akuma.value, tripulacao: el.tripulacao.value,
            nome: norm(el.nome.value), minimo: soNumero(el.minimo.value),
        };
    }

    function calcular() {
        const f = lerFiltros();
        const def = PONTUACOES[f.pontuacao] || PONTUACOES.total;
        const universo = todosOsDados();
        let semDado = 0;
        let lista = universo.filter((p) => {
            if (f.tipo === 'pcs' && p.tipo !== 'PC') return false;
            if (f.tipo === 'npcs' && p.tipo !== 'NPC') return false;
            if (f.org && p.org !== f.org) return false;
            if (f.raca && !p.racas.includes(f.raca)) return false;
            if (f.linhagem && p.linhagem !== f.linhagem) return false;
            if (f.classe && !p.classes.includes(f.classe)) return false;
            if (f.tripulacao && p.tripulacao !== f.tripulacao) return false;
            if (f.akuma === 'sim' && !p.akumaNome) return false;
            if (f.akuma === 'nao' && p.akumaNome) return false;
            if (f.nome && !norm(p.nome).includes(f.nome)) return false;
            return true;
        });
        lista = lista
            .map((p) => ({ p, valor: def.get(p) }))
            .filter((x) => {
                if (x.valor === null) { semDado++; return false; } // ficha ainda sem esse dado
                return x.valor > 0 && x.valor >= f.minimo;
            });
        const dir = f.ordem === 'asc' ? 1 : -1;
        lista.sort((a, b) => dir * (a.valor - b.valor) || a.p.nome.localeCompare(b.p.nome, 'pt-BR'));
        lista.forEach((x, i) => {
            const igual = (o) => o && o.valor === x.valor;
            x.empate = igual(lista[i - 1]) || igual(lista[i + 1]);
        });
        return { f, def, total: lista.length, semDado, itens: lista.slice(0, f.top), universo: universo.length };
    }

    /* ------------------------------- renderização ------------------------------ */
    function opcao(valor, texto) {
        const o = document.createElement('option');
        o.value = valor;
        o.textContent = texto;
        return o;
    }

    function popularFiltros() {
        const universo = todosOsDados();
        const unicos = (fn) => [...new Set(universo.flatMap(fn).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
        const preencher = (select, valores) => {
            const atual = select.value;
            select.textContent = '';
            select.appendChild(opcao('', 'Todos'));
            valores.forEach((v) => select.appendChild(opcao(v, v)));
            select.value = valores.includes(atual) ? atual : '';
        };
        preencher(el.org, unicos((p) => [p.org]));
        preencher(el.raca, unicos((p) => p.racas));
        preencher(el.linhagem, unicos((p) => [p.linhagem]));
        preencher(el.classe, unicos((p) => p.classes));
        preencher(el.tripulacao, unicos((p) => [p.tripulacao]));
    }

    const medalha = (i) => ['🥇', '🥈', '🥉'][i] || '#' + (i + 1);

    function renderizar() {
        if (!estado.dados) return;
        const r = calcular();
        el.lista.textContent = '';
        const linhasTexto = [];
        r.itens.forEach((x, i) => {
            const p = x.p;
            const li = document.createElement('li');
            li.className = 'rk-item' + (i < 3 ? ' rk-podio' : '');

            const pos = document.createElement('span');
            pos.className = 'rk-pos';
            pos.textContent = medalha(i);

            const centro = document.createElement('div');
            centro.className = 'rk-centro';
            const linhaNome = document.createElement('div');
            linhaNome.className = 'rk-nome';
            const nome = document.createElement('strong');
            nome.textContent = p.nome;
            const id = document.createElement('span');
            id.className = 'rk-id';
            id.textContent = 'ID ' + p.id;
            linhaNome.append(nome, id);
            if (p.tipo === 'NPC') {
                const tag = document.createElement('span');
                tag.className = 'rk-tag';
                tag.textContent = 'NPC';
                linhaNome.appendChild(tag);
            }
            if (x.empate) {
                const tag = document.createElement('span');
                tag.className = 'rk-tag rk-tag-empate';
                tag.textContent = 'empate';
                linhaNome.appendChild(tag);
            }
            const detalhes = [p.racas.join(' / '), p.linhagem, p.org, p.classes.join(' / '), p.akumaNome ? 'Akuma: ' + p.akumaNome : '']
                .filter(Boolean).join(' • ');
            const linhaDet = document.createElement('div');
            linhaDet.className = 'rk-detalhe';
            linhaDet.textContent = detalhes || '—';
            centro.append(linhaNome, linhaDet);
            if (r.f.pontuacao === 'haki') {
                const lh = document.createElement('div');
                lh.className = 'rk-detalhe';
                lh.textContent = 'Armamento ' + fmt(p.ha) + ' · Observação ' + fmt(p.ho) + ' · Rei ' + fmt(p.hr);
                centro.appendChild(lh);
            }

            const valor = document.createElement('div');
            valor.className = 'rk-valor';
            valor.textContent = fmt(x.valor);

            li.append(pos, centro, valor);
            el.lista.appendChild(li);
            linhasTexto.push((i + 1) + 'º ' + p.nome + (p.tipo === 'NPC' ? ' (NPC)' : '') + ' [ID ' + p.id + '] — ' + fmt(x.valor));
        });

        const sentido = r.f.ordem === 'asc' ? 'menor → maior' : 'maior → menor';
        const titulo = 'TOP ' + r.itens.length + ' — ' + r.def.rotulo + ' (' + sentido + ')';
        el.resumo.textContent = r.itens.length
            ? titulo + '  |  ' + r.itens.length + ' de ' + r.total + ' que atendem aos filtros'
            : 'Nenhum personagem encontrado com esses filtros.';
        el.resultado.style.display = 'block';
        el.btnCopiar.style.display = r.itens.length ? '' : 'none';
        estado.ultimoTexto = r.itens.length ? '🏆 ' + titulo + '\n' + linhasTexto.join('\n') : '';

        const avisos = [];
        if (estado.erroAtualizacao) avisos.push('Atualização automática: ' + estado.erroAtualizacao);
        if (r.semDado > 0 && r.f.pontuacao !== 'base')
            avisos.push(r.semDado + ' personagem(ns) ficam de fora porque a Ficha não conseguiu calcular "' + r.def.rotulo + '" para eles' + (estado.erroAtualizacao ? '.' : ' (ou ainda não foram atualizados).'));
        if (avisos.length) mostrarStatus(avisos.join(' '), 'aviso');
        else mostrarStatus(estado.resumoOk, estado.resumoOk ? 'ok' : '');
    }

    /* --------------------------------- ações ---------------------------------- */
    const dormir = (ms) => new Promise((ok) => setTimeout(ok, ms));

    // Carrega a Ficha escondida (mesmo domínio) e devolve a janela dela, que tem o motor de cálculo.
    async function obterMotor() {
        if (estado.motor) return estado.motor;
        const iframe = document.createElement('iframe');
        iframe.src = URL_FICHA;
        iframe.title = 'Ficha (oculta, usada só para calcular o ranking)';
        iframe.setAttribute('aria-hidden', 'true');
        iframe.tabIndex = -1;
        iframe.style.cssText = 'position:fixed;left:-9999px;top:0;width:1200px;height:900px;border:0;visibility:hidden;';
        document.body.appendChild(iframe);
        try {
            await new Promise((ok, erro) => {
                iframe.onload = ok;
                setTimeout(() => erro(new Error('DEMOROU')), 40000);
            });
            let janela;
            try {
                janela = iframe.contentWindow;
                if (typeof janela.rankingAtualizarFichas !== 'function') throw new Error('SEM_FUNCAO');
            } catch (e) {
                throw e.message === 'SEM_FUNCAO' ? e : new Error('SEM_ACESSO'); // outro domínio bloqueia o acesso
            }
            estado.motor = janela;
            return janela;
        } catch (e) {
            iframe.remove();
            throw e;
        }
    }

    function mensagemDoMotor(e) {
        const m = e && e.message;
        if (m === 'SEM_ACESSO') return 'a Ficha precisa estar no mesmo domínio deste site para o cálculo automático.';
        if (m === 'SEM_FUNCAO') return 'a Ficha publicada ainda não tem a atualização de ranking (publique o script.js novo da Ficha).';
        if (m === 'DEMOROU') return 'a Ficha demorou demais para carregar.';
        return m || 'erro desconhecido.';
    }

    function substituirDocumento(id, dados) {
        const especial = IDS_ESPECIAIS.includes(id);
        const novos = extrair(id, dados, especial);
        if (especial) estado.especiais[id] = novos;
        else estado.dados = estado.dados.filter((p) => p.id !== id).concat(novos);
        registrarPendencia(id, novos);
    }

    // Pede à Ficha (escondida) para calcular e gravar o resumo das fichas que ainda não o têm.
    // O resultado volta direto para cá, então não é preciso ler essas fichas de novo.
    async function atualizarPendentes() {
        estado.erroAtualizacao = '';
        const ids = Array.from(estado.pendentes).filter((id) => !estado.tentados.has(id) && !estado.semSolucao.has(id));
        if (ids.length === 0) return;
        mostrarStatus('Calculando o ranking de ' + ids.length + ' ficha(s) com o motor da Ficha...', 'info');
        try {
            const motor = await obterMotor();
            const r = await motor.rankingAtualizarFichas(ids, (feitos, total) =>
                mostrarStatus('Atualizando fichas: ' + feitos + ' de ' + total + '...', 'info'));
            ids.forEach((id) => estado.tentados.add(id));
            estado.leituras += ids.length; // cada ficha é lida de novo dentro da transação de gravação
            r.atualizados.concat(r.semMudanca).forEach((x) => {
                substituirDocumento(x.id, x.dados);
                if (x.falhas > 0) estado.semSolucao.add(x.id);
            });
            estado.atualizadas += r.atualizados.length;
            estado.semCalculo += r.semCalculo;
            if (r.falhas.length) estado.erroAtualizacao = r.falhas.length + ' ficha(s) não puderam ser atualizadas (' + r.falhas[0].erro + ').';
        } catch (e) {
            console.error(e);
            ids.forEach((id) => estado.tentados.add(id));
            estado.erroAtualizacao = mensagemDoMotor(e);
        }
    }

    function atualizarResumoOk() {
        const partes = [estado.fichasLidas + ' ficha(s) lida(s)', todosOsDados().length + ' personagem(ns)/NPC(s)'];
        if (estado.atualizadas) partes.push(estado.atualizadas + ' ficha(s) atualizada(s) com o resumo do ranking');
        partes.push('≈ ' + estado.leituras + ' leitura(s) do Firebase');
        estado.resumoOk = partes.join(' • ');
    }

    async function puxar() {
        if (estado.carregando) return;
        estado.carregando = true; // trava cliques repetidos enquanto confere o horário
        el.btnPuxar.disabled = true;
        let liberado = false;
        try { liberado = await horarioLiberado(); } catch (e) { console.error(e); }
        if (!liberado) {
            estado.carregando = false;
            el.btnPuxar.disabled = false;
            return;
        }
        estado.leituras = 0; estado.atualizadas = 0; estado.semCalculo = 0; estado.erroAtualizacao = '';
        estado.pendentes.clear(); estado.tentados.clear();
        mostrarStatus('Carregando as fichas do Firebase...', 'info');
        try {
            estado.dados = await buscarFichasNumericas();
            estado.leituras += estado.fichasLidas || 1;
            estado.especiais = { NPCS: null, NPCI: null };
            if (estado.usarEspeciais) await carregarEspeciais();
            await atualizarPendentes();
            popularFiltros();
            el.btnPuxar.textContent = '🔄 Atualizar dados do ranking';
            atualizarResumoOk();
            renderizar();
        } catch (e) {
            console.error(e);
            mostrarStatus(mensagemDeErro(e), 'erro');
        } finally {
            estado.carregando = false;
            el.btnPuxar.disabled = false;
        }
    }

    async function carregarEspeciais() {
        for (const id of IDS_ESPECIAIS) {
            if (!estado.especiais[id]) {
                estado.especiais[id] = await buscarEspecial(id);
                estado.leituras += 1;
            }
        }
    }

    async function alternarEspeciais() {
        if (el.btnEspeciais.disabled || estado.carregando) return;
        estado.usarEspeciais = !estado.usarEspeciais;
        atualizarBotaoEspeciais();
        if (!estado.dados) return; // entra quando puxar
        if (estado.usarEspeciais) {
            estado.carregando = true;
            let liberado = false;
            try { liberado = await horarioLiberado(); } catch (e) { console.error(e); }
            if (!liberado) {
                estado.usarEspeciais = false;
                atualizarBotaoEspeciais();
                estado.carregando = false;
                return;
            }
            mostrarStatus('Carregando os IDs NPCS e NPCI...', 'info');
            try {
                await carregarEspeciais();
                await atualizarPendentes();
            } catch (e) {
                console.error(e);
                estado.usarEspeciais = false;
                atualizarBotaoEspeciais();
                estado.carregando = false;
                mostrarStatus(mensagemDeErro(e), 'erro');
                return;
            }
            estado.carregando = false;
        }
        popularFiltros();
        atualizarResumoOk();
        renderizar();
    }

    // IDs especiais só têm NPCs: com "Somente personagens" o botão fica desligado.
    function atualizarBotaoEspeciais() {
        const soPcs = el.tipo.value === 'pcs';
        if (soPcs && estado.usarEspeciais) estado.usarEspeciais = false;
        el.btnEspeciais.disabled = soPcs;
        el.btnEspeciais.classList.toggle('ativo', estado.usarEspeciais);
        el.btnEspeciais.setAttribute('aria-pressed', String(estado.usarEspeciais));
        el.btnEspeciais.textContent = (estado.usarEspeciais ? '✅ IDs NPCS e NPCI incluídos' : '➕ Incluir IDs NPCS e NPCI');
        el.notaEspeciais.textContent = soPcs
            ? 'Desativado: os IDs NPCS e NPCI só têm NPCs, e "Somente personagens" está marcado.'
            : 'Só entram os NPCs desses IDs. Personagens comuns que estejam neles nunca são puxados.';
    }

    function limpar() {
        [el.org, el.raca, el.linhagem, el.classe, el.tripulacao].forEach((s) => (s.value = ''));
        el.akuma.value = '';
        el.nome.value = '';
        el.minimo.value = '';
        renderizar();
    }

    async function copiar() {
        if (!estado.ultimoTexto) return;
        const texto = estado.ultimoTexto;
        try {
            if (window.copiarTextoUniversal) await window.copiarTextoUniversal(texto);
            else await navigator.clipboard.writeText(texto);
        } catch (e) {
            mostrarStatus('Não foi possível copiar automaticamente.', 'erro');
            return;
        }
        const original = el.btnCopiar.textContent;
        el.btnCopiar.textContent = '✅ Copiado!';
        setTimeout(() => (el.btnCopiar.textContent = original), 1500);
    }

    /* --------------------------------- eventos -------------------------------- */
    let temporizador = null;
    const atrasar = () => { clearTimeout(temporizador); temporizador = setTimeout(renderizar, 200); };

    el.btnPuxar.addEventListener('click', puxar);
    el.btnEspeciais.addEventListener('click', alternarEspeciais);
    el.btnLimpar.addEventListener('click', limpar);
    el.btnCopiar.addEventListener('click', copiar);
    [el.pontuacao, el.ordem, el.org, el.raca, el.linhagem, el.classe, el.akuma, el.tripulacao].forEach((c) => c.addEventListener('change', renderizar));
    el.tipo.addEventListener('change', () => { atualizarBotaoEspeciais(); renderizar(); });
    [el.top, el.nome, el.minimo].forEach((c) => c.addEventListener('input', atrasar));
    painel.querySelectorAll('[data-top]').forEach((b) => b.addEventListener('click', () => { el.top.value = b.dataset.top; renderizar(); }));

    if (el.janela) {
        el.janela.textContent = textoDaJanela();
        el.janela.style.display = textoDaJanela() ? 'block' : 'none';
    }
    atualizarBotaoEspeciais();
})();
