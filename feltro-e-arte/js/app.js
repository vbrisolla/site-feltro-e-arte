(function () {
  "use strict";

  var WHATSAPP = "5512991560939";
  var MSG_GERAL = "Olá! Vi o site da Feltro & Arte e gostaria de fazer uma encomenda.";

  function linkWhats(texto) {
    return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto);
  }
  function msgPeca(nome) {
    return 'Olá! Vi a peça "' + nome + '" no site da Feltro & Arte e gostaria de fazer uma encomenda.';
  }
  function plural(n) { return n === 1 ? "1 peça" : n + " peças"; }
  function el(tag, attrs, filhos) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "texto") e.textContent = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else e.setAttribute(k, attrs[k]);
    });
    (filhos || []).forEach(function (f) { if (f) e.appendChild(f); });
    return e;
  }

  var CATS = window.CATEGORIAS || [];
  var PECAS = window.PECAS || [];
  var nomeCat = {};
  CATS.forEach(function (c) { nomeCat[c.id] = c.nome; });

  // Links gerais de WhatsApp
  document.querySelectorAll(".js-wa").forEach(function (a) { a.href = linkWhats(MSG_GERAL); });
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // ---------- Filtro ----------
  var catAtual = "todas";
  var filtrosEl = document.getElementById("filtros");
  var pecasEl = document.getElementById("pecas");
  var contagemEl = document.getElementById("contagem");

  function desenharFiltros() {
    filtrosEl.innerHTML = "";
    [{ id: "todas", nome: "Todas" }].concat(CATS).forEach(function (c) {
      var b = el("button", { type: "button", "class": "filtro", "aria-pressed": String(c.id === catAtual), texto: c.nome });
      b.addEventListener("click", function () { filtrar(c.id); });
      filtrosEl.appendChild(b);
    });
  }

  function desenharPecas() {
    var lista = catAtual === "todas" ? PECAS : PECAS.filter(function (p) { return p.categoria === catAtual; });
    pecasEl.innerHTML = "";
    lista.forEach(function (p) {
      var b = el("button", { type: "button", "class": "peca", "aria-label": p.nome + " — ver detalhes" }, [
        el("img", { src: p.fotos[0], alt: p.nome, loading: "lazy", width: "400", height: "500" }),
        el("span", { "class": "peca__info" }, [
          el("span", { "class": "rotulo", texto: nomeCat[p.categoria] || "" }),
          el("span", { "class": "peca__nome", texto: p.nome }),
          el("span", { "class": "peca__preco", texto: "Preço sob consulta" })
        ])
      ]);
      b.addEventListener("click", function () { abrir(p); });
      pecasEl.appendChild(b);
    });
    contagemEl.textContent = plural(lista.length);
  }

  function filtrar(id) {
    catAtual = id;
    desenharFiltros();
    desenharPecas();
  }

  // ---------- Categorias ----------
  var catsEl = document.getElementById("categorias");
  CATS.forEach(function (c) {
    var n = PECAS.filter(function (p) { return p.categoria === c.id; }).length;
    var a = el("a", { href: "#catalogo", "class": "categoria" }, [
      el("img", { src: c.foto, alt: c.alt || c.nome, loading: "lazy", width: "400", height: "400" }),
      el("span", { "class": "categoria__rodape" }, [
        el("span", {}, [
          el("span", { "class": "categoria__nome", texto: c.nome }),
          el("span", { "class": "categoria__qtd", texto: plural(n) })
        ]),
        el("span", { "class": "categoria__seta", "aria-hidden": "true",
          html: '<svg class="ico"><use href="#i-arrow"/></svg>' })
      ])
    ]);
    a.addEventListener("click", function () { filtrar(c.id); });
    catsEl.appendChild(a);
  });

  // ---------- Detalhe ----------
  var dlg = document.getElementById("detalhe");
  var dFoto = document.getElementById("d-foto");
  var dMinis = document.getElementById("d-miniaturas");

  function mostrarFoto(p, i) {
    dFoto.src = p.fotos[i];
    dFoto.alt = p.nome + (p.fotos.length > 1 ? " — foto " + (i + 1) : "");
    Array.prototype.forEach.call(dMinis.children, function (m, j) {
      m.setAttribute("aria-current", String(i === j));
    });
  }

  function abrir(p) {
    document.getElementById("d-categoria").textContent = nomeCat[p.categoria] || "";
    document.getElementById("d-nome").textContent = p.nome;
    document.getElementById("d-descricao").textContent = p.descricao || "";
    document.getElementById("d-wa").href = linkWhats(msgPeca(p.nome));
    dMinis.innerHTML = "";
    if (p.fotos.length > 1) {
      p.fotos.forEach(function (src, i) {
        var m = el("button", { type: "button", "class": "miniatura", "aria-label": "Ver foto " + (i + 1) }, [
          el("img", { src: src, alt: "" })
        ]);
        m.addEventListener("click", function () { mostrarFoto(p, i); });
        dMinis.appendChild(m);
      });
    }
    mostrarFoto(p, 0);
    document.body.classList.add("travado");
    dlg.showModal();
  }

  document.getElementById("d-fechar").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("close", function () { document.body.classList.remove("travado"); });
  // Fecha ao clicar fora da caixa
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg) dlg.close();
  });

  filtrar("todas");
})();
