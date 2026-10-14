/* ============================================================================
   HERIKLIZ  -  Localizar e Substituir em TODAS as fichas
   Área Restrita > Coisas Guardadas > "Herikliz"

   Como funciona:
   - Você escolhe um CAMPO (ex.: alcunhaAtiva), escreve o texto a LOCALIZAR e o texto que
     vai SUBSTITUIR. O programa varre todas as fichas salvas no Firebase e troca, em cada
     personagem/NPC, os campos cujo valor seja EXATAMENTE igual ao texto localizado.
   - Primeiro se clica em "Localizar" (só mostra o que seria alterado, não grava nada).
     Só depois o botão "Substituir" é liberado.
   - Antes de gravar, o navegador baixa um arquivo de BACKUP com o conteúdo original das
     fichas que serão alteradas.

   ============================  TRAVA DE SEGURANÇA  ============================
   Para usar, troque false por true na linha abaixo, salve/publique o arquivo, use, e depois
   volte para false (e publique de novo). Enquanto estiver false, a seção fica bloqueada e
   nem o Firebase é carregado.

   Atenção: esta trava só impede o uso casual. Como o site é público, quem soubesse mexer
   no código pelo navegador poderia contorná-la; a proteção de verdade é a das regras
   de segurança do Firestore (no painel do Firebase).
   ============================================================================ */
const HERIKLIZ_LIBERADO = false;

(function () {
    'use strict';

    const painel = document.getElementById('container-coisas-guardadas-herikliz');
    if (!painel) return; // esta página não tem a seção

    const FIREBASE_CONFIG = {
        apiKey: 'AIzaSyDG9zDcphqyTfXXZBWc0-uRV74eeie_tEE',
        authDomain: 'new-seas.firebaseapp.com',
        projectId: 'new-seas',
        storageBucket: 'new-seas.firebasestorage.app',
        messagingSenderId: '551983006255',
        appId: '1:551983006255:web:29dae15ad04dabff7afcda',
    };
    const COLECAO = 'fichas_op';
    const SDK = [
        'https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js',
        'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js',
    ];
    const IDS_ESPECIAIS = ['NPCS', 'NPCI'];
    const MAX_LINHAS = 300; // quantas ocorrências aparecem na lista (a contagem é sempre total)

    const $ = (id) => document.getElementById(id);
    const el = {
        trava: $('hk-trava'), form: $('hk-form'),
        campo: $('hk-campo'), localizar: $('hk-localizar'), substituir: $('hk-substituir'),
        especiais: $('hk-especiais'),
        btnLocalizar: $('hk-btn-localizar'), btnSubstituir: $('hk-btn-substituir'),
        status: $('hk-status'), resultado: $('hk-resultado'), resumo: $('hk-resumo'), lista: $('hk-lista'),
    };

    if (!HERIKLIZ_LIBERADO) {
        if (el.form) el.form.style.display = 'none';
        if (el.trava) el.trava.style.display = 'block';
        return;
    }
    if (el.trava) el.trava.style.display = 'none';
    if (el.form) el.form.style.display = 'block';

    let db = null;
    let ocupado = false;
    let busca = null; // { campo, localizar, substituir, docs: Map(id -> dados originais), total }

    /* ------------------------------- utilidades ------------------------------- */
    function mostrarStatus(texto, tipo) {
        el.status.textContent = texto || '';
        el.status.className = 'rk-status' + (tipo ? ' rk-' + tipo : '');
        el.status.style.display = texto ? 'block' : 'none';
    }

    function invalidarBusca() {
        busca = null;
        el.btnSubstituir.disabled = true;
        el.resultado.style.display = 'none';
    }

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
        const nome = 'herikliz';
        const app = firebase.apps.find((a) => a.name === nome) || firebase.initializeApp(FIREBASE_CONFIG, nome);
        db = app.firestore();
        return db;
    }

    function mensagemDeErro(e) {
        if (e && e.code === 'permission-denied') return 'O Firebase não permitiu a operação (regras de segurança do Firestore).';
        return (e && e.message) || 'Erro desconhecido ao falar com o Firebase.';
    }

    /* ------------------------ caminho do campo (path) ------------------------- */
    // Aceita: alcunhaAtiva  |  info.raca  |  info.alcunhasList[].buffs[].stat
    //  - "[]" percorre todos os itens de uma lista.
    //  - Nome simples (sem ponto): procura em info.NOME e também em NOME direto no personagem.
    function interpretarCampo(texto) {
        const t = String(texto || '').trim();
        if (!t) return { erro: 'Escreva o nome do campo.' };
        const caminhos = /[.\[]/.test(t) ? [t] : ['info.' + t, t];
        const saida = [];
        for (const c of caminhos) {
            const segs = [];
            for (const parte of c.split('.')) {
                const m = /^([A-Za-z0-9_$-]+)((?:\[\])*)$/.exec(parte);
                if (!m) return { erro: 'Campo inválido: "' + t + '". Use letras/números, pontos e [] (ex.: info.alcunhasList[].nome).' };
                if (m[1] === '__proto__' || m[1] === 'constructor' || m[1] === 'prototype') return { erro: 'Campo não permitido.' };
                segs.push(m[1]);
                for (let i = 0; i < m[2].length / 2; i++) segs.push('[]');
            }
            saida.push({ texto: c, segs });
        }
        return { caminhos: saida };
    }

    // Chama cb(objeto, chave) para cada folha alcançada pelo caminho.
    function percorrer(no, segs, i, cb) {
        if (no === null || typeof no !== 'object') return;
        const s = segs[i];
        const ultimo = i === segs.length - 1;
        if (s === '[]') {
            if (!Array.isArray(no)) return;
            if (ultimo) return; // "[]" no fim não aponta para um texto
            no.forEach((x) => percorrer(x, segs, i + 1, cb));
            return;
        }
        if (Array.isArray(no) || !Object.prototype.hasOwnProperty.call(no, s)) return;
        if (ultimo) cb(no, s);
        else percorrer(no[s], segs, i + 1, cb);
    }

    // Todas as "pessoas" de um documento: personagem principal e NPCs de cada slot.
    function personagens(dados) {
        const saida = [];
        ((dados && dados.pcs) || []).forEach((p) => {
            if (!p) return;
            if (p.pc && typeof p.pc === 'object') saida.push(p.pc);
            (p.npcs || []).forEach((n) => { if (n && typeof n === 'object') saida.push(n); });
        });
        return saida;
    }

    // Caminhos que também precisam ser trocados junto com o campo escolhido.
    // A Alcunha ativa é o NOME de uma Alcunha da lista; se só a ativa mudasse, a Ficha
    // desfaria a troca ao abrir (ela volta a usar o nome que está na lista).
    function caminhosExtras(caminhos) {
        const ehAlcunha = caminhos.some((c) => c.texto === 'info.alcunhaAtiva' || c.texto === 'alcunhaAtiva');
        return ehAlcunha ? [{ texto: 'info.alcunhasList[].nome', segs: ['info', 'alcunhasList', '[]', 'nome'] }] : [];
    }

    // Procura (e, se "trocar" for texto, aplica) as ocorrências exatas em um documento.
    function varrer(dados, caminhos, procurado, trocar) {
        const achados = [];
        const todos = caminhos.concat(caminhosExtras(caminhos));
        personagens(dados).forEach((c) => {
            todos.forEach((cam) => {
                percorrer(c, cam.segs, 0, (obj, chave) => {
                    if (typeof obj[chave] === 'string' && obj[chave] === procurado) {
                        achados.push({ personagem: String(c.name || '(sem nome)'), caminho: cam.texto });
                        if (trocar !== null) obj[chave] = trocar;
                    }
                });
            });
        });
        return achados;
    }

    /* ------------------------------ ler as fichas ----------------------------- */
    async function lerDocumentos(incluirEspeciais) {
        const banco = await garantirBanco();
        const idDoc = firebase.firestore.FieldPath.documentId();
        // IDs que começam com dígito (os de 4 números). Ficam de fora: BACKUP-*.
        const snap = await banco.collection(COLECAO).where(idDoc, '>=', '0').where(idDoc, '<', ':').get();
        const docs = new Map();
        snap.forEach((d) => docs.set(d.id, d.data()));
        if (incluirEspeciais) {
            for (const id of IDS_ESPECIAIS) {
                const d = await banco.collection(COLECAO).doc(id).get();
                if (d.exists) docs.set(id, d.data());
            }
        }
        return docs;
    }

    function lerCampos() {
        const interp = interpretarCampo(el.campo.value);
        if (interp.erro) { mostrarStatus(interp.erro, 'erro'); return null; }
        const procurado = el.localizar.value; // exato: sem tirar espaços
        const trocar = el.substituir.value;
        if (procurado === '') { mostrarStatus('Escreva o texto a localizar.', 'erro'); return null; }
        if (procurado === trocar) { mostrarStatus('"Localizar" e "Substituir" são iguais; não há o que trocar.', 'erro'); return null; }
        return { caminhos: interp.caminhos, procurado, trocar };
    }

    /* -------------------------------- Localizar ------------------------------- */
    async function localizar() {
        if (ocupado) return;
        const c = lerCampos();
        if (!c) return;
        ocupado = true;
        invalidarBusca();
        el.btnLocalizar.disabled = true;
        mostrarStatus('Lendo as fichas...', 'info');
        try {
            const docs = await lerDocumentos(el.especiais.checked);
            const afetados = new Map();
            const linhas = [];
            let total = 0;
            docs.forEach((dados, id) => {
                const ach = varrer(JSON.parse(JSON.stringify(dados)), c.caminhos, c.procurado, null);
                if (!ach.length) return;
                afetados.set(id, dados);
                total += ach.length;
                ach.forEach((a) => linhas.push({ id, ...a }));
            });
            busca = { campo: el.campo.value.trim(), localizar: c.procurado, substituir: c.trocar, caminhos: c.caminhos, docs: afetados, total };
            desenharResultado(docs.size, linhas);
            if (total === 0) {
                mostrarStatus('Nenhuma ocorrência encontrada em ' + docs.size + ' fichas lidas. Confira o campo e a escrita (precisa ser exatamente igual).', 'aviso');
            } else {
                mostrarStatus(total + ' ocorrência(s) em ' + afetados.size + ' ficha(s). Nada foi alterado ainda. Se estiver certo, clique em "Substituir".', 'ok');
                el.btnSubstituir.disabled = false;
            }
        } catch (e) {
            console.error('Herikliz', e);
            mostrarStatus(mensagemDeErro(e), 'erro');
        } finally {
            ocupado = false;
            el.btnLocalizar.disabled = false;
        }
    }

    function desenharResultado(lidas, linhas) {
        el.lista.textContent = '';
        el.resumo.textContent = lidas + ' fichas lidas · ' + linhas.length + ' ocorrência(s)';
        linhas.slice(0, MAX_LINHAS).forEach((l) => {
            const li = document.createElement('li');
            li.className = 'rk-item';
            const centro = document.createElement('div');
            centro.className = 'rk-centro';
            const nome = document.createElement('div');
            nome.className = 'rk-nome';
            const forte = document.createElement('strong');
            forte.textContent = l.personagem;
            const id = document.createElement('span');
            id.className = 'rk-id';
            id.textContent = l.id;
            nome.append(forte, id);
            const det = document.createElement('div');
            det.className = 'rk-detalhe';
            det.textContent = l.caminho;
            centro.append(nome, det);
            li.appendChild(centro);
            el.lista.appendChild(li);
        });
        if (linhas.length > MAX_LINHAS) {
            const li = document.createElement('li');
            li.className = 'rk-detalhe';
            li.textContent = '... e mais ' + (linhas.length - MAX_LINHAS) + ' ocorrência(s) (todas serão trocadas).';
            el.lista.appendChild(li);
        }
        el.resultado.style.display = linhas.length || lidas ? 'block' : 'none';
    }

    /* ------------------------------- Substituir ------------------------------- */
    function baixarBackup(docs) {
        const objeto = {};
        docs.forEach((dados, id) => { objeto[id] = dados; });
        const pad = (n) => String(n).padStart(2, '0');
        const d = new Date();
        const nome = 'herikliz-backup-' + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds()) + '.json';
        const blob = new Blob([JSON.stringify(objeto, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = nome;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 5000);
        return nome;
    }

    async function substituir() {
        if (ocupado || !busca || !busca.total) return;
        // Garante que o que está na tela é o mesmo que foi localizado.
        if (el.localizar.value !== busca.localizar || el.substituir.value !== busca.substituir || el.campo.value.trim() !== busca.campo) {
            invalidarBusca();
            mostrarStatus('Os campos mudaram depois do "Localizar". Clique em "Localizar" de novo.', 'aviso');
            return;
        }
        const pergunta = 'Trocar "' + busca.localizar + '" por "' + busca.substituir + '" no campo "' + busca.campo + '"?\n\n' +
            busca.total + ' ocorrência(s) em ' + busca.docs.size + ' ficha(s) (' + busca.docs.size + ' gravações no Firebase).\n' +
            'Um arquivo de backup será baixado antes. Isso não pode ser desfeito pelo site.';
        if (!window.confirm(pergunta)) return;

        ocupado = true;
        el.btnLocalizar.disabled = true;
        el.btnSubstituir.disabled = true;
        const alvo = busca;
        try {
            const arquivo = baixarBackup(alvo.docs);
            mostrarStatus('Backup baixado (' + arquivo + '). Gravando...', 'info');
            const banco = await garantirBanco();
            const fila = Array.from(alvo.docs.keys());
            const total = fila.length;
            let feitos = 0, trocadas = 0, fichasAlteradas = 0, semMais = 0;
            const falhas = [];
            const trabalhador = async () => {
                while (fila.length) {
                    const id = fila.shift();
                    try {
                        const ref = banco.collection(COLECAO).doc(id);
                        const r = await banco.runTransaction(async (t) => {
                            const snap = await t.get(ref);
                            if (!snap.exists) return 0;
                            const dados = snap.data();
                            // Refaz a busca no que está AGORA no servidor (não sobrescreve edições recentes).
                            const n = varrer(dados, alvo.caminhos, alvo.localizar, alvo.substituir).length;
                            if (n > 0) t.update(ref, { pcs: dados.pcs });
                            return n;
                        });
                        if (r > 0) { trocadas += r; fichasAlteradas++; } else semMais++;
                    } catch (e) {
                        console.error('Herikliz: ficha ' + id + ' não alterada', e);
                        falhas.push(id + ' (' + mensagemDeErro(e) + ')');
                    }
                    feitos++;
                    mostrarStatus('Gravando... ' + feitos + ' de ' + total, 'info');
                }
            };
            await Promise.all([trabalhador(), trabalhador(), trabalhador()]);
            let msg = trocadas + ' ocorrência(s) trocada(s) em ' + fichasAlteradas + ' ficha(s).';
            if (semMais) msg += ' ' + semMais + ' ficha(s) já não tinham mais o texto (alguém pode ter alterado nesse meio tempo).';
            if (falhas.length) {
                msg += ' NÃO foram alteradas: ' + falhas.join('; ') + '. Use "Localizar" e "Substituir" de novo para tentar só essas.';
                mostrarStatus(msg, 'aviso');
            } else {
                mostrarStatus(msg + ' Backup: ' + arquivo + '.', 'ok');
            }
        } catch (e) {
            console.error('Herikliz', e);
            mostrarStatus(mensagemDeErro(e), 'erro');
        } finally {
            invalidarBusca();
            ocupado = false;
            el.btnLocalizar.disabled = false;
        }
    }

    /* --------------------------------- Eventos -------------------------------- */
    [el.campo, el.localizar, el.substituir, el.especiais].forEach((x) => {
        if (x) x.addEventListener('input', invalidarBusca);
    });
    if (el.btnLocalizar) el.btnLocalizar.addEventListener('click', localizar);
    if (el.btnSubstituir) el.btnSubstituir.addEventListener('click', substituir);
    invalidarBusca();
})();