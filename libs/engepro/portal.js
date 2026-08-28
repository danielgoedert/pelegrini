/* ============================================================================
   Portal de Processos — Pelegrini Pins
   Motor do portal. Para mudar conteúdo edite data.js, não este arquivo.
   ========================================================================== */
(function () {
  'use strict';

  /* ==========================================================  ÍCONES  === */

  var I = {
    bpmn: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="7" height="8" rx="1.5"/><rect x="15" y="4" width="7" height="6" rx="1.5"/><rect x="15" y="14" width="7" height="6" rx="1.5"/><path d="M9 12h3m0-5v10m0-10h3m-3 5h3"/></svg>',
    sipoc: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="3.5" width="19" height="4" rx="1.2"/><rect x="2.5" y="10" width="19" height="4" rx="1.2"/><rect x="2.5" y="16.5" width="19" height="4" rx="1.2"/></svg>',
    vsm: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17V7m0 10h18M3 7h5l2 4h4l2-3h5"/><circle cx="3" cy="5" r="1.4" fill="currentColor" stroke="none"/></svg>',
    chev: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    zoomIn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M11 8v6M8 11h6M20 20l-3.7-3.7"/></svg>',
    zoomOut: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M8 11h6M20 20l-3.7-3.7"/></svg>',
    fit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8V4.5A1.5 1.5 0 014.5 3H8m8 0h3.5A1.5 1.5 0 0121 4.5V8m0 8v3.5a1.5 1.5 0 01-1.5 1.5H16M8 21H4.5A1.5 1.5 0 013 19.5V16"/></svg>',
    full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H4.5A1.5 1.5 0 003 4.5V8m13-5h3.5A1.5 1.5 0 0121 4.5V8M3 16v3.5A1.5 1.5 0 004.5 21H8m8 0h3.5a1.5 1.5 0 001.5-1.5V16"/></svg>',
    print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8V3h10v5M7 18H5a2 2 0 01-2-2v-4a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2h-2"/><rect x="7" y="14" width="10" height="7" rx="1"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4m0 4h.01M10.3 3.9L2.4 17.5A2 2 0 004.1 20.5h15.8a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg>',
    blank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>',
    /* ícones das faixas do SIPOC */
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7.5h11v9H2zM13 11h4l3 3v2.5h-7z"/><circle cx="6" cy="18.5" r="1.8"/><circle cx="17" cy="18.5" r="1.8"/></svg>',
    inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3h5a2 2 0 012 2v14a2 2 0 01-2 2h-5M10 8l4 4-4 4M14 12H3"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1A1.6 1.6 0 008 19.4a1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H2a2 2 0 110-4h.1A1.6 1.6 0 003.6 8a1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H8a1.6 1.6 0 001-1.5V2a2 2 0 114 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V8a1.6 1.6 0 001.5 1H22a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z"/></svg>',
    outbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3H5a2 2 0 00-2 2v14a2 2 0 002 2h5M17 8l4 4-4 4M21 12H10"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20a6.5 6.5 0 0113 0M17 5.2a3.4 3.4 0 010 6.6M18.5 20a6.4 6.4 0 00-3-5.4"/></svg>',
    person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20.5a7.5 7.5 0 0115 0"/></svg>',
    arrowR: '<svg viewBox="0 0 30 12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M0 6h23" stroke-dasharray="3 2.5"/><path d="M22 2l5 4-5 4z" fill="currentColor" stroke="none"/></svg>'
  };

  /* ==========================================================  UTIL    === */

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /** Caminhos do Bizagi vêm com barra invertida do Windows. */
  function fixPath(p) { return String(p || '').replace(/\\/g, '/'); }

  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }

  var $ = function (sel, root) { return (root || document).querySelector(sel); };

  /* ==========================================================  MARCA   === */

  /**
   * Mostra o logo se o arquivo existir; se não, cai para um wordmark de texto.
   * Assim o portal nunca aparece quebrado por falta de imagem.
   */
  function mountLogo(slot, src, fallbackHTML, cls) {
    var img = new Image();
    img.onload = function () {
      slot.innerHTML = '';
      img.className = cls;
      img.alt = '';
      slot.appendChild(img);
    };
    img.onerror = function () { slot.innerHTML = fallbackHTML; };
    slot.innerHTML = fallbackHTML;
    img.src = src;
  }

  function initBrand() {
    var b = Portal.brand || {};
    var c = b.consultoria || {}, k = b.cliente || {};

    var nome = esc(c.nome || 'Engepro');
    var head = nome.length > 3 ? nome.slice(0, nome.length - 3) : nome;
    var tail = nome.length > 3 ? nome.slice(-3) : '';

    mountLogo(
      $('#brandSlot'),
      c.logo || '',
      '<div class="brand-wordmark">' + head + '<span>' + tail + '</span></div>',
      'brand-logo'
    );

    mountLogo(
      $('#clientSlot'),
      k.logo || '',
      '<div class="client-fallback"><b>' + esc(k.nome || '') + '</b><i>Cliente</i></div>',
      'client-logo'
    );

    $('#projeto').textContent = b.projeto || 'Mapeamento de Processos';
    document.title = (k.nome || 'Portal') + ' — Processos · EngePro';

    /* foto esmaecida atrás dos logos; sem o arquivo fica só o degradê.
       Resolver para URL absoluta: url() em variável CSS é interpretado
       relativo ao portal.css, não à página. */
    if (b.fotoHeader) {
      var abs = new URL(encodeURI(b.fotoHeader), location.href).href;
      $('.header').style.setProperty('--header-photo', 'url("' + abs + '")');
    }
  }

  /* ==========================================================  ESTADO  === */

  var state = {
    aba: 'bpmn',
    bpmnId: null,
    sipocIdx: 0,
    vsmIdx: 0,
    diagramas: [],   // lista achatada { id, nome, imagem, nivel, paiId }
    zoom: 1, tx: 0, ty: 0
  };

  /* ================================================  BPMN — dados      === */

  /** Lê os diagramas do configuration.json.js gerado pelo Bizagi. */
  function lerDiagramasBizagi() {
    var out = [];
    var model = (window.Bizagi && window.Bizagi.AppModel) || null;
    if (!model || !model.pages) return out;

    var seen = {};
    model.pages.forEach(function (p) {
      if (!p.isSubprocessPage && !p.isCallActivityPage) {
        if (!seen[p.id]) {
          seen[p.id] = true;
          out.push({
            id: p.id,
            nome: p.name,
            imagem: fixPath(p.image),
            nivel: 0,
            paiId: null,
            versao: p.version,
            autor: p.author
          });
        }
      }
      (p.subPages || []).forEach(function (s) {
        var elemIds = [s.id];
        (p.elements || []).forEach(function (el) {
          (el.pageElements || []).forEach(function (pe) {
            if (pe.id === s.id) elemIds.push(pe.id);
            (pe.properties || []).forEach(function (prop) {
              if (prop.pageRef === s.id || prop.processPageRef === s.id) {
                elemIds.push(pe.id);
              }
            });
          });
        });

        var subNome = (s.name || '').replace(/ - Pintura$/, '');
        seen[s.id] = true;
        out.push({
          id: s.id,
          nome: subNome,
          imagem: fixPath(s.image),
          nivel: 1,
          paiId: p.id,
          elemIds: elemIds
        });
      });
    });

    var subPageIds = {};
    out.forEach(function (d) { if (d.paiId) subPageIds[d.id] = true; });
    out = out.filter(function (d) { return d.paiId != null || !subPageIds[d.id]; });

    return out;
  }

  function acharDiagrama(id) {
    for (var i = 0; i < state.diagramas.length; i++) {
      if (state.diagramas[i].id === id) return state.diagramas[i];
    }
    return null;
  }

  /* ================================================  PAN / ZOOM        === */

  /**
   * Controlador de pan+zoom reutilizado pelo BPMN e pelo VSM.
   * Aplica uma transform única no .canvas — barato e suave.
   */
  function Viewport(stage, canvas, onZoom) {
    var vp = { k: 1, x: 0, y: 0, w: 0, h: 0 };

    function apply() {
      canvas.style.transform = 'translate(' + vp.x + 'px,' + vp.y + 'px) scale(' + vp.k + ')';
      if (onZoom) onZoom(vp.k);
    }

    vp.setContent = function (w, h) { vp.w = w; vp.h = h; };

    vp.fit = function () {
      if (!vp.w || !vp.h) return;
      var r = stage.getBoundingClientRect();
      var k = Math.min((r.width - 48) / vp.w, (r.height - 48) / vp.h);
      vp.k = clamp(k, 0.02, 4);
      vp.x = (r.width - vp.w * vp.k) / 2;
      vp.y = (r.height - vp.h * vp.k) / 2;
      apply();
    };

    /**
     * Enquadramento de abertura. Diagramas BPMN em raia costumam ser muito
     * maiores que a tela: "caber tudo" deixaria o desenho em ~8% e ilegível.
     * Se couber a pelo menos 30%, mostra tudo; senão abre no início do
     * processo (canto superior esquerdo) num zoom em que dá para ler.
     */
    vp.fitInicial = function () {
      if (!vp.w || !vp.h) return;
      var r = stage.getBoundingClientRect();
      var kW = (r.width - 48) / vp.w;
      var kH = (r.height - 48) / vp.h;

      if (Math.min(kW, kH) >= 0.3) { vp.fit(); return; }

      vp.k = clamp(Math.max(kH, 0.55), 0.3, 1);
      vp.x = 24;
      vp.y = vp.h * vp.k <= r.height - 48
        ? (r.height - vp.h * vp.k) / 2
        : 24;
      apply();
    };

    vp.zoomTo = function (k, cx, cy) {
      var r = stage.getBoundingClientRect();
      if (cx == null) { cx = r.width / 2; cy = r.height / 2; }
      var nk = clamp(k, 0.02, 8);
      vp.x = cx - (cx - vp.x) * (nk / vp.k);
      vp.y = cy - (cy - vp.y) * (nk / vp.k);
      vp.k = nk;
      apply();
    };

    vp.step = function (f) { vp.zoomTo(vp.k * f); };

    stage.addEventListener('wheel', function (e) {
      e.preventDefault();
      var r = stage.getBoundingClientRect();
      vp.zoomTo(vp.k * (e.deltaY < 0 ? 1.14 : 1 / 1.14), e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });

    var drag = null;
    stage.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      drag = { px: e.clientX, py: e.clientY, moved: false };
      stage.classList.add('panning');
    });
    window.addEventListener('mousemove', function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.px, dy = e.clientY - drag.py;
      if (Math.abs(dx) + Math.abs(dy) > 3) drag.moved = true;
      vp.x += dx; vp.y += dy;
      drag.px = e.clientX; drag.py = e.clientY;
      apply();
    });
    window.addEventListener('mouseup', function () {
      if (drag) stage.classList.remove('panning');
      drag = null;
    });

    /* toque — pinça e arrasto */
    var touch = null;
    function dist(t) {
      var dx = t[0].clientX - t[1].clientX, dy = t[0].clientY - t[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }
    stage.addEventListener('touchstart', function (e) {
      if (e.touches.length === 1) touch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      else if (e.touches.length === 2) touch = { d: dist(e.touches), k: vp.k };
    }, { passive: true });
    stage.addEventListener('touchmove', function (e) {
      if (!touch) return;
      e.preventDefault();
      if (e.touches.length === 1 && touch.x != null) {
        vp.x += e.touches[0].clientX - touch.x;
        vp.y += e.touches[0].clientY - touch.y;
        touch.x = e.touches[0].clientX; touch.y = e.touches[0].clientY;
        apply();
      } else if (e.touches.length === 2 && touch.d) {
        var r = stage.getBoundingClientRect();
        vp.zoomTo(touch.k * (dist(e.touches) / touch.d),
          (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left,
          (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top);
      }
    }, { passive: false });
    stage.addEventListener('touchend', function () { touch = null; }, { passive: true });

    /* reenquadrar = voltar ao enquadramento de abertura (legível), e não
       espremer um diagrama de raia inteiro em 8% da tela */
    stage.addEventListener('dblclick', function () { vp.fitInicial(); });

    return vp;
  }

  /* ================================================  BPMN — render     === */

  var bpmnVP, bpmnStage, bpmnCanvas;

  function initBpmnViewport() {
    bpmnStage = $('#bpmnStage');
    bpmnCanvas = $('#bpmnCanvas');
    bpmnVP = Viewport(bpmnStage, bpmnCanvas, function (k) {
      $('#bpmnZoom').textContent = Math.round(k * 100) + '%';
    });
  }

  function abrirDiagrama(id) {
    var d = acharDiagrama(id);
    if (!d) return;
    state.bpmnId = id;

    marcarNavAtual();
    renderCrumbsBpmn(d);

    var loader = $('#bpmnLoader');
    loader.classList.remove('gone');
    bpmnCanvas.innerHTML = '';

    fetch(encodeURI(d.imagem))
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function (txt) {
        /* o Bizagi grava BOM + declaração XML; limpar antes de parsear */
        txt = txt.replace(/^﻿/, '').replace(/^\s+/, '');
        var doc = new DOMParser().parseFromString(txt, 'image/svg+xml');
        var svg = doc.documentElement;
        if (!svg || svg.nodeName === 'parsererror') throw new Error('SVG inválido');

        var vb = (svg.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number);
        var w = vb.length === 4 ? vb[2] : parseFloat(svg.getAttribute('width')) || 1000;
        var h = vb.length === 4 ? vb[3] : parseFloat(svg.getAttribute('height')) || 1000;

        svg.setAttribute('width', w);
        svg.setAttribute('height', h);

        removerMarcaDagua(svg);
        bpmnCanvas.appendChild(document.importNode(svg, true));
        bpmnVP.setContent(w, h);
        bpmnVP.fitInicial();

        ligarSubprocessos(d);
        loader.classList.add('gone');
        mostrarDica();
      })
      .catch(function (err) {
        loader.classList.add('gone');
        bpmnCanvas.innerHTML = '';
        $('#bpmnStage').insertAdjacentHTML('beforeend',
          '<div class="empty" style="position:absolute;inset:0"><div class="empty-art">' + I.warn +
          '</div><h2>Não foi possível abrir o diagrama</h2><p><code>' + esc(d.imagem) +
          '</code><br>' + esc(err.message) + '</p></div>');
      });
  }

  /**
   * O Bizagi carimba um selo "bizagi Modeler" no canto de cada diagrama: um
   * único <image> de 91x33 com PNG embutido em data URI. Removemos na hora de
   * exibir — assim os .svg originais continuam intactos e o selo some de novo
   * sozinho se o modelo for republicado.
   *
   * O casamento é pela assinatura exata (tamanho + data URI) para não apagar
   * uma imagem de verdade que alguém venha a colocar no modelo.
   */
  function removerMarcaDagua(svg) {
    Array.prototype.forEach.call(svg.querySelectorAll('image'), function (img) {
      var href = img.getAttribute('xlink:href') || img.getAttribute('href') || '';
      if (img.getAttribute('width') === '91' && img.getAttribute('height') === '33' &&
          href.indexOf('data:') === 0) {
        img.parentNode.removeChild(img);
      }
    });
  }

  /**
   * Os grupos do SVG do Bizagi carregam o GUID do elemento no atributo id.
   * Isso permite tornar o subprocesso clicável e levar direto à sua página.
   */
  function ligarSubprocessos(diagrama) {
    var filhos = state.diagramas.filter(function (x) { return x.paiId === diagrama.id; });
    var svg = bpmnCanvas.querySelector('svg');
    if (!svg) return;

    filhos.forEach(function (f) {
      var targetIds = f.elemIds || [f.id];
      var g = null;
      for (var i = 0; i < targetIds.length; i++) {
        var tid = targetIds[i];
        g = svg.querySelector('[id="' + tid + '"]') || svg.querySelector('[id="gfx-' + tid + '"]');
        if (g) break;
      }
      if (!g) return;

      g.classList.add('bpmn-link');
      g.addEventListener('click', function (e) {
        e.stopPropagation();
        irPara('bpmn', f.id);
      });

      var tip = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      tip.textContent = 'Abrir subprocesso: ' + f.nome;
      g.appendChild(tip);

      /* moldura pulsante para o usuário perceber que dá para clicar */
      try {
        var bb = g.getBBox();
        var r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        r.setAttribute('x', bb.x - 5); r.setAttribute('y', bb.y - 5);
        r.setAttribute('width', bb.width + 10); r.setAttribute('height', bb.height + 10);
        r.setAttribute('rx', 5);
        r.setAttribute('fill', 'none');
        r.setAttribute('stroke', '#3A67AA');
        r.setAttribute('stroke-width', 3);
        r.setAttribute('pointer-events', 'none');
        r.style.animation = 'pulse 2.6s ease-in-out infinite';
        g.appendChild(r);
      } catch (_) { /* getBBox falha se o nó estiver oculto — ignorar */ }
    });
  }

  function renderCrumbsBpmn(d) {
    var c = $('#bpmnCrumbs');
    c.innerHTML = '';
    var trilha = [];
    var cur = d;
    while (cur) { trilha.unshift(cur); cur = cur.paiId ? acharDiagrama(cur.paiId) : null; }

    trilha.forEach(function (n, i) {
      if (i) c.appendChild(el('span', 'sep', '›'));
      var ultimo = i === trilha.length - 1;
      var b = el('button', 'crumb ' + (ultimo ? 'now' : 'link'), esc(n.nome));
      if (!ultimo) b.onclick = function () { irPara('bpmn', n.id); };
      c.appendChild(b);
    });
  }

  var dicaTimer;
  function mostrarDica() {
    var d = $('#bpmnHint');
    d.classList.remove('gone');
    clearTimeout(dicaTimer);
    dicaTimer = setTimeout(function () { d.classList.add('gone'); }, 5200);
  }

  /* ================================================  SIPOC             === */

  function bandaHTML(n, titulo, icone, conteudo, centro) {
    return '<div class="band" data-b="' + n + '">' +
      '<div class="band-label">' + icone + '<div class="t">' + titulo + '</div></div>' +
      '<div class="band-content' + (centro ? ' center' : '') + '">' + conteudo + '</div>' +
      '</div>';
  }

  /** `ligacoes` (de qual fornecedor sai cada entrada) vira tooltip na pílula. */
  function pills(lista, cls, ligacoes) {
    if (!lista || !lista.length) return '<span class="band-empty">— a preencher —</span>';
    return lista.map(function (t) {
      var tip = ligacoes && ligacoes[t] ? ' title="Vem de: ' + esc(ligacoes[t]) + '"' : '';
      return '<span class="pill ' + cls + '"' + tip + '>' + esc(t) + '</span>';
    }).join('');
  }

  function fluxoHTML(s) {
    if (!s.processos || !s.processos.length) return '<span class="band-empty">— a preencher —</span>';
    var seta = '<span class="arrow">' + I.arrowR + '</span>';
    var h = '<div class="flow">';
    h += '<div class="terminal"><div class="circle">Início</div>' +
         (s.inicio ? '<div class="cap">' + esc(s.inicio) + '</div>' : '') + '</div>';
    s.processos.forEach(function (p) {
      h += seta + '<div class="step">' + esc(p) + '</div>';
    });
    h += seta + '<div class="terminal"><div class="circle end">Fim</div></div>';
    return h + '</div>';
  }

  function clientesHTML(lista) {
    if (!lista || !lista.length) return '<span class="band-empty">— a preencher —</span>';
    return lista.map(function (c) {
      return '<span class="pill client">' + I.person + esc(c) + '</span>';
    }).join('');
  }

  /** Monta o quadro SIPOC inteiro (usado no palco e, reduzido, na miniatura). */
  function sipocHTML(s, comAviso) {
    /* o quadro já vem com o próprio título desenhado: nada de cabeçalho em
       cima, que duplicaria o nome do processo */
    if (s.imagem) {
      return '<div class="sipoc sipoc-foto">' +
        '<img class="sipoc-img" src="' + esc(encodeURI(fixPath(s.imagem))) +
        '" alt="SIPOC ' + esc(s.titulo) + '"></div>';
    }

    /* lugar guardado: o processo já tem vaga no portal, falta o quadro.
       A tela mostra a linha exata que precisa ser trocada no data.js. */
    if (s.pendente && !(s.fornecedores || []).length) {
      /* o id já é sem acento e sem espaço: vira o nome de arquivo sugerido */
      var arq = s.id.charAt(0).toUpperCase() + s.id.slice(1) + '.png';
      return '<div class="sipoc sipoc-vaga">' +
        '<div class="sipoc-head"><span class="kind">SIPOC</span>' +
        '<span class="name">' + esc(s.titulo) + '</span></div>' +
        '<div class="vaga-art">' + I.blank + '</div>' +
        '<h3>Lugar reservado — falta subir o quadro</h3>' +
        (comAviso
          ? '<p>Salve a imagem em <code>files/sipoc/' + esc(arq) + '</code> e, no arquivo ' +
            '<code>libs/engepro/data.js</code>, troque nesta linha o <code>pendente: true</code> por:</p>' +
            '<code class="vaga-code">imagem: \'files/sipoc/' + esc(arq) + '\'</code>'
          : '') +
        '</div>';
    }

    var h = '<div class="sipoc">';
    h += '<div class="sipoc-head"><span class="kind">SIPOC</span>' +
         '<span class="name">' + esc(s.titulo) + '</span></div>';

    if (s.pendente && comAviso) {
      h += '<div class="pendente-note">' + I.warn +
        '<div>Levantamento ainda não preenchido. Abra <code>libs/engepro/data.js</code>, ' +
        'localize <code>id: \'' + esc(s.id) + '\'</code> e preencha as listas — ' +
        'o quadro se desenha sozinho.</div></div>';
    }

    h += bandaHTML(1, 'Fornecedores', I.truck, pills(s.fornecedores, 'supplier'), true);
    h += bandaHTML(2, 'Entradas', I.inbox, pills(s.entradas, 'input', s.ligacoes), true);
    h += bandaHTML(3, 'Processos', I.gear, fluxoHTML(s), true);
    h += bandaHTML(4, 'Saídas', I.outbox, pills(s.saidas, 'output'), true);
    h += bandaHTML(5, 'Clientes', I.people, clientesHTML(s.clientes), true);
    return h + '</div>';
  }

  /**
   * A faixa de processos precisa caber inteira — um SIPOC cortado não serve
   * para apresentar nem para imprimir. Se as etapas passarem da largura
   * disponível, reduzimos a faixa proporcionalmente até caber.
   * Abaixo de 60% a letra ficaria ilegível: aí deixamos rolar na horizontal.
   */
  function ajustarFluxo(root) {
    Array.prototype.forEach.call(root.querySelectorAll('.flow'), function (f) {
      f.style.transform = '';
      f.style.width = '';
      f.style.overflowX = '';

      var precisa = f.scrollWidth, cabe = f.clientWidth;
      if (!cabe || precisa <= cabe + 2) return;

      var k = cabe / precisa;
      if (k < 0.6) return;               // muito apertado: melhor rolar
      f.style.transformOrigin = 'left center';
      f.style.transform = 'scale(' + k + ')';
      f.style.width = (100 / k) + '%';
      f.style.overflowX = 'visible';
    });
  }

  function abrirSipoc(idx) {
    var lista = Portal.sipocs || [];
    if (!lista.length) return;
    state.sipocIdx = clamp(idx, 0, lista.length - 1);
    var s = lista[state.sipocIdx];

    $('#sipocStage').innerHTML = sipocHTML(s, true);
    ajustarFluxo($('#sipocStage'));
    $('#sipocCrumbs').innerHTML =
      '<span class="crumb">SIPOC</span><span class="sep">›</span>' +
      '<button class="crumb now">' + esc(s.titulo) + '</button>';

    Array.prototype.forEach.call(document.querySelectorAll('#strip .thumb'), function (t, i) {
      t.classList.toggle('current', i === state.sipocIdx);
      if (i === state.sipocIdx && t.scrollIntoView) {
        t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    });

    $('#sipocStage').scrollTop = 0;
    marcarNavAtual();
  }

  function montarFilmstrip() {
    var strip = $('#strip');
    strip.innerHTML = '';
    (Portal.sipocs || []).forEach(function (s, i) {
      var b = el('button', 'thumb');
      var preview;
      if (s.imagem) {
        preview = '<img src="' + esc(encodeURI(fixPath(s.imagem))) + '" alt="">';
      } else if (s.pendente) {
        preview = '<div class="mini-blank">' + I.blank + '</div>';
      } else {
        preview = '<div class="mini">' + sipocHTML(s, false) + '</div>';
      }
      b.innerHTML =
        '<div class="thumb-canvas">' + preview + '</div>' +
        '<div class="thumb-cap"><span class="n">' + (s.numero || i + 1) + '</span>' +
        '<span class="t">' + esc(s.titulo) + '</span></div>';
      b.onclick = function () { irPara('sipoc', s.id); };
      strip.appendChild(b);
    });
  }

  function passoSipoc(d) {
    var lista = Portal.sipocs || [];
    var n = state.sipocIdx + d;
    if (n < 0) n = lista.length - 1;
    if (n >= lista.length) n = 0;
    irPara('sipoc', lista[n].id);
  }

  /* ================================================  VSM               === */

  var vsmVP;

  function initVsm() {
    var lista = Portal.vsm || [];
    var view = $('#view-vsm');

    if (!lista.length) {
      view.innerHTML =
        '<div class="empty"><div class="empty-art">' + I.vsm + '</div>' +
        '<h2>VSM ainda não publicado</h2>' +
        '<p>Esta aba já está pronta e ligada ao portal — falta só o mapa.</p>' +
        '<div class="steps">' +
        '<b>1.</b> Exporte o VSM em <code>.svg</code> (ideal) ou <code>.png</code><br>' +
        '<b>2.</b> Salve em <code>files/vsm/</code><br>' +
        '<b>3.</b> Em <code>libs/engepro/data.js</code>, no fim do arquivo, troque por:<br>' +
        '<code>Portal.vsm = [{ id:\'atual\', numero:1, titulo:\'VSM — Estado Atual\', imagem:\'files/vsm/atual.svg\' }];</code><br>' +
        '<b>4.</b> Recarregue a página' +
        '</div></div>';
      return;
    }

    view.innerHTML =
      '<div class="toolbar"><div class="crumbs" id="vsmCrumbs"></div>' +
      '<div class="tools">' +
      '<button class="tool" data-act="out" title="Reduzir">' + I.zoomOut + '</button>' +
      '<span class="zoom-level" id="vsmZoom">100%</span>' +
      '<button class="tool" data-act="in" title="Ampliar">' + I.zoomIn + '</button>' +
      '<span class="tool-sep"></span>' +
      '<button class="tool wide" data-act="fit">' + I.fit + ' Ajustar</button>' +
      '<button class="tool" data-act="full" title="Tela cheia">' + I.full + '</button>' +
      '</div></div>' +
      '<div class="stage" id="vsmStage"><div class="canvas" id="vsmCanvas"></div></div>';

    vsmVP = Viewport($('#vsmStage'), $('#vsmCanvas'), function (k) {
      $('#vsmZoom').textContent = Math.round(k * 100) + '%';
    });

    view.querySelector('.tools').addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]'); if (!b) return;
      var a = b.getAttribute('data-act');
      if (a === 'in') vsmVP.step(1.25);
      if (a === 'out') vsmVP.step(1 / 1.25);
      if (a === 'fit') vsmVP.fit();
      if (a === 'full') alternarTelaCheia(view);
    });

    abrirVsm(0);
  }

  function abrirVsm(idx) {
    var lista = Portal.vsm || [];
    if (!lista.length) return;
    state.vsmIdx = clamp(idx, 0, lista.length - 1);
    var v = lista[state.vsmIdx];

    $('#vsmCrumbs').innerHTML =
      '<span class="crumb">VSM</span><span class="sep">›</span>' +
      '<button class="crumb now">' + esc(v.titulo) + '</button>';

    var canvas = $('#vsmCanvas');
    canvas.innerHTML = '';
    var img = new Image();
    img.onload = function () {
      canvas.appendChild(img);
      vsmVP.setContent(img.naturalWidth, img.naturalHeight);
      vsmVP.fit();
    };
    img.onerror = function () {
      canvas.innerHTML = '<div style="padding:30px;color:#6F7C99">Arquivo não encontrado: ' +
        esc(v.imagem) + '</div>';
    };
    img.src = encodeURI(fixPath(v.imagem));
    marcarNavAtual();
  }

  /* ================================================  NAVEGAÇÃO         === */

  function montarNav() {
    var nav = $('#nav');
    nav.innerHTML = '';

    nav.appendChild(el('div', 'nav-search',
      '<input type="search" id="busca" placeholder="Buscar processo…" autocomplete="off">'));

    /* --- BPMN --- */
    var sBpmn = el('div', 'section open', '');
    sBpmn.dataset.aba = 'bpmn';
    sBpmn.innerHTML = '<button class="section-btn">' + I.bpmn +
      '<span>BPMN</span><span class="count">' + state.diagramas.length + '</span>' + I.chev + '</button>' +
      '<div class="section-body"></div>';
    var bodyB = sBpmn.querySelector('.section-body');

    if (!state.diagramas.length) {
      bodyB.appendChild(el('div', 'nav-empty', 'Nenhum diagrama encontrado.'));
    }
    state.diagramas.forEach(function (d) {
      var b = el('button', 'nav-item' + (d.nivel ? ' sub' : ''),
        '<span class="dot"></span><span class="txt">' + esc(d.nome) + '</span>');
      b.dataset.aba = 'bpmn'; b.dataset.id = d.id;
      b.onclick = function () { irPara('bpmn', d.id); };
      bodyB.appendChild(b);
    });

    /* --- SIPOC --- */
    var sSipoc = el('div', 'section', '');
    sSipoc.dataset.aba = 'sipoc';
    var sipocs = Portal.sipocs || [];
    sSipoc.innerHTML = '<button class="section-btn">' + I.sipoc +
      '<span>SIPOC</span><span class="count">' + sipocs.length + '</span>' + I.chev + '</button>' +
      '<div class="section-body"></div>';
    var bodyS = sSipoc.querySelector('.section-body');

    sipocs.forEach(function (s, i) {
      var b = el('button', 'nav-item',
        '<span class="num">' + (s.numero || i + 1) + '</span>' +
        '<span class="txt">' + esc(s.titulo) + '</span>' +
        (s.pendente ? '<span class="tag">a fazer</span>' : ''));
      b.dataset.aba = 'sipoc'; b.dataset.id = s.id;
      b.onclick = function () { irPara('sipoc', s.id); };
      bodyS.appendChild(b);
    });

    /* --- VSM --- */
    var sVsm = el('div', 'section', '');
    sVsm.dataset.aba = 'vsm';
    var vsms = Portal.vsm || [];
    sVsm.innerHTML = '<button class="section-btn">' + I.vsm +
      '<span>VSM</span><span class="count">' + vsms.length + '</span>' + I.chev + '</button>' +
      '<div class="section-body"></div>';
    var bodyV = sVsm.querySelector('.section-body');

    if (!vsms.length) {
      bodyV.appendChild(el('div', 'nav-empty', 'Em construção — abra a aba para ver como publicar.'));
    }
    vsms.forEach(function (v, i) {
      var b = el('button', 'nav-item',
        '<span class="num">' + (v.numero || i + 1) + '</span>' +
        '<span class="txt">' + esc(v.titulo) + '</span>');
      b.dataset.aba = 'vsm'; b.dataset.id = v.id;
      b.onclick = function () { irPara('vsm', v.id); };
      bodyV.appendChild(b);
    });

    [sBpmn, sSipoc, sVsm].forEach(function (s) {
      nav.appendChild(s);
      s.querySelector('.section-btn').onclick = function () {
        var abrindo = !s.classList.contains('open');
        s.classList.toggle('open', abrindo);
        if (abrindo) abrirPrimeiroDa(s.dataset.aba);
      };
    });

    /* assinatura discreta da consultoria no pé da barra: a marca de verdade,
       não um desenho parecido — o nome já está no logo, então embaixo fica só
       o resto da qualificação */
    var foot = el('div', 'nav-foot',
      '<div class="foot-row"><span class="foot-logo"></span>' +
        '<div class="foot-id"><b>Consultoria Jr.</b>' +
        '<span>Engenharia de Produção — desde 2010</span></div>' +
      '</div>');
    nav.appendChild(foot);

    mountLogo(
      foot.querySelector('.foot-logo'),
      ((Portal.brand || {}).consultoria || {}).logo || '',
      '<span class="foot-wordmark">Enge<b>Pro</b></span>',
      'foot-logo-img'
    );

    $('#busca').addEventListener('input', function () { filtrarNav(this.value); });
  }

  function abrirPrimeiroDa(aba) {
    if (aba === 'bpmn' && state.diagramas.length) irPara('bpmn', state.diagramas[0].id);
    if (aba === 'sipoc' && (Portal.sipocs || []).length) irPara('sipoc', Portal.sipocs[0].id);
    if (aba === 'vsm') irPara('vsm', (Portal.vsm || [])[0] ? Portal.vsm[0].id : '');
  }

  function filtrarNav(q) {
    q = (q || '').trim().toLowerCase();
    Array.prototype.forEach.call(document.querySelectorAll('#nav .section'), function (s) {
      var itens = s.querySelectorAll('.nav-item');
      var achou = 0;
      Array.prototype.forEach.call(itens, function (it) {
        var ok = !q || it.textContent.toLowerCase().indexOf(q) >= 0;
        it.style.display = ok ? '' : 'none';
        if (ok) achou++;
      });
      if (q) s.classList.toggle('open', achou > 0);
    });
  }

  function marcarNavAtual() {
    Array.prototype.forEach.call(document.querySelectorAll('#nav .nav-item'), function (b) {
      var id = state.aba === 'bpmn' ? state.bpmnId
             : state.aba === 'sipoc' ? (Portal.sipocs[state.sipocIdx] || {}).id
             : ((Portal.vsm || [])[state.vsmIdx] || {}).id;
      var atual = b.dataset.aba === state.aba && b.dataset.id === id;
      b.classList.toggle('current', atual);
      if (atual) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
    Array.prototype.forEach.call(document.querySelectorAll('#nav .section'), function (s) {
      s.classList.toggle('active', s.dataset.aba === state.aba);
    });
  }

  /* ================================================  ROTEAMENTO        === */

  function irPara(aba, id) {
    location.hash = '#' + aba + (id ? '/' + encodeURIComponent(id) : '');
  }

  function aplicarRota() {
    var h = (location.hash || '').replace(/^#/, '');
    var partes = h.split('/');
    var aba = partes[0] || 'bpmn';
    var id = partes[1] ? decodeURIComponent(partes[1]) : null;

    if (['bpmn', 'sipoc', 'vsm'].indexOf(aba) < 0) aba = 'bpmn';
    state.aba = aba;

    Array.prototype.forEach.call(document.querySelectorAll('.view'), function (v) {
      v.classList.toggle('active', v.id === 'view-' + aba);
    });
    Array.prototype.forEach.call(document.querySelectorAll('#nav .section'), function (s) {
      if (s.dataset.aba === aba) s.classList.add('open');
    });

    if (aba === 'bpmn') {
      var alvo = id && acharDiagrama(id) ? id : (state.diagramas[0] || {}).id;
      /* voltar para um diagrama já aberto preserva o zoom/posição do usuário */
      if (alvo && alvo !== state.bpmnId) abrirDiagrama(alvo);
      else if (alvo) marcarNavAtual();
    } else if (aba === 'sipoc') {
      var i = 0;
      (Portal.sipocs || []).forEach(function (s, n) { if (s.id === id) i = n; });
      abrirSipoc(i);
    } else {
      var j = 0;
      (Portal.vsm || []).forEach(function (v, n) { if (v.id === id) j = n; });
      if ((Portal.vsm || []).length) abrirVsm(j); else marcarNavAtual();
    }

    $('#nav').classList.remove('open');
    var sc = $('.scrim'); if (sc) sc.remove();
  }

  /* ================================================  TELA CHEIA        === */

  function alternarTelaCheia(node) {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (node.requestFullscreen) node.requestFullscreen();
  }

  /* ================================================  ATALHOS           === */

  function initAtalhos() {
    document.addEventListener('keydown', function (e) {
      var t = e.target.tagName;
      if (t === 'INPUT' || t === 'TEXTAREA') {
        if (e.key === 'Escape') { e.target.value = ''; filtrarNav(''); e.target.blur(); }
        return;
      }

      if (state.aba === 'sipoc') {
        if (e.key === 'ArrowRight') { e.preventDefault(); passoSipoc(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); passoSipoc(-1); }
      }
      if (state.aba === 'bpmn' && bpmnVP) {
        if (e.key === '+' || e.key === '=') { e.preventDefault(); bpmnVP.step(1.25); }
        if (e.key === '-') { e.preventDefault(); bpmnVP.step(1 / 1.25); }
        if (e.key === '0') { e.preventDefault(); bpmnVP.fitInicial(); }
      }
      if (e.key === '/') { e.preventDefault(); $('#busca').focus(); }
    });
  }

  /* ================================================  INÍCIO            === */

  function init() {
    try {
      console.log('%c⚙ Taokei! %c Portal de Processos — EngePro Consultoria Jr. · desde 2010',
        'background:#12163A;color:#fff;padding:3px 7px;border-radius:3px 0 0 3px;font-weight:700',
        'background:#E8EFFA;color:#214981;padding:3px 7px;border-radius:0 3px 3px 0');
    } catch (_) { /* console indisponível — segue o jogo */ }

    initBrand();

    state.diagramas = (Portal.bpmn && Portal.bpmn.usarConfiguracaoBizagi !== false)
      ? lerDiagramasBizagi()
      : (Portal.bpmn.diagramas || []);
    if (!state.diagramas.length && Portal.bpmn && Portal.bpmn.diagramas) {
      state.diagramas = Portal.bpmn.diagramas;
    }

    montarNav();
    initBpmnViewport();
    montarFilmstrip();
    initVsm();
    initAtalhos();

    /* ferramentas do BPMN */
    $('#bpmnTools').addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]'); if (!b) return;
      var a = b.getAttribute('data-act');
      if (a === 'in') bpmnVP.step(1.25);
      if (a === 'out') bpmnVP.step(1 / 1.25);
      if (a === 'fit') bpmnVP.fitInicial();
      if (a === 'full') alternarTelaCheia($('#view-bpmn'));
    });

    /* ferramentas do SIPOC */
    $('#sipocTools').addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]'); if (!b) return;
      var a = b.getAttribute('data-act');
      if (a === 'prev') passoSipoc(-1);
      if (a === 'next') passoSipoc(1);
      if (a === 'print') window.print();
      if (a === 'full') alternarTelaCheia($('#view-sipoc'));
    });
    $('#stripPrev').onclick = function () { passoSipoc(-1); };
    $('#stripNext').onclick = function () { passoSipoc(1); };

    /* menu no mobile */
    $('#menuBtn').onclick = function () {
      var nav = $('#nav');
      nav.classList.add('open');
      var sc = el('div', 'scrim');
      sc.onclick = function () { nav.classList.remove('open'); sc.remove(); };
      document.body.appendChild(sc);
    };

    window.addEventListener('hashchange', aplicarRota);
    /* Redimensionar NÃO reenquadra o BPMN/VSM: isso descartaria o zoom que o
       usuário escolheu ("Ajustar" ou duplo clique reenquadra quando quiser).
       O SIPOC é diagramado em HTML, então precisa recalcular a escala da faixa. */
    var trs;
    window.addEventListener('resize', function () {
      clearTimeout(trs);
      trs = setTimeout(function () {
        if (state.aba === 'sipoc') ajustarFluxo($('#sipocStage'));
      }, 120);
    });

    /* As fontes (Poppins/Ultra) são locais e carregam com font-display:swap.
       Se a faixa de processos for medida antes da troca da fonte, a largura
       calculada fica presa à métrica da fonte de reserva — na primeira
       abertura (fontes ainda frias) isso deixa o "Fim" vazando do cartão até
       o usuário trocar de aba e voltar. Reajustamos assim que as fontes
       terminarem de carregar/trocar. */
    if (window.document && document.fonts) {
      var refazerFluxo = function () { ajustarFluxo($('#sipocStage')); };
      if (document.fonts.ready) document.fonts.ready.then(refazerFluxo);
      if (document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', refazerFluxo);
    }

    aplicarRota();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
