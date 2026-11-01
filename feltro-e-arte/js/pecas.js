/*
  CATÁLOGO DA FELTRO & ARTE
  ---------------------------------------------------------------
  Para adicionar uma peça:
  1. Salve a foto em img/pecas/ (de preferência .webp, até ~900 px).
  2. Copie um bloco { ... } abaixo e troque os dados.
     - id: único, sem espaços nem acentos (ex.: "boneca-flor")
     - categoria: "bonecas" | "bichinhos" | "kits" | "enfeites"
     - fotos: a primeira é a capa do card
  Para remover, apague o bloco inteiro (com a vírgula).
*/

window.CATEGORIAS = [
  { id: "bonecas",   nome: "Bonecas",          foto: "img/pecas/cachinhos-xadrez.webp", alt: "Boneca de pano com cabelo de lã cacheado" },
  { id: "bichinhos", nome: "Bichinhos",        foto: "img/pecas/ursa-filhote.webp",     alt: "Ursa de feltro com filhote" },
  { id: "kits",      nome: "Kits",             foto: "img/pecas/kit-troquinhas.webp",   alt: "Kit com boneca e duas trocas de roupa na bolsa transparente" },
  { id: "enfeites",  nome: "Enfeites de casa", foto: "img/pecas/vasinhos-1.webp",       alt: "Vasinhos com flores de feltro" }
];

window.PECAS = [
  { id: "bailarina", categoria: "bonecas", nome: "Boneca bailarina",
    fotos: ["img/pecas/bailarina.webp"],
    descricao: "Boneca de pano com saia de tule rosa, coque e coroinha." },
  { id: "cachinhos-xadrez", categoria: "bonecas", nome: "Boneca de cachinhos com vestido xadrez",
    fotos: ["img/pecas/cachinhos-xadrez.webp"],
    descricao: "Cabelo de lã cacheado, laço no cabelo e vestidinho com renda." },
  { id: "dupla-avental", categoria: "bonecas", nome: "Dupla de bonecas com avental",
    fotos: ["img/pecas/dupla-avental.webp"],
    descricao: "Duas bonecas com vestido estampado e avental, cabelo de lã cacheado." },
  { id: "trancas", categoria: "bonecas", nome: "Boneca de tranças",
    fotos: ["img/pecas/trancas.webp"],
    descricao: "Tranças de lã, vestido colorido e sapatinhos de feltro." },
  { id: "cacheada-rosa", categoria: "bonecas", nome: "Boneca cacheada de macacão rosa",
    fotos: ["img/pecas/cacheada-rosa.webp"],
    descricao: "Cabelo de lã cacheado, florzinha no cabelo e conjunto rosa estampado." },
  { id: "boneca-gatinho", categoria: "bonecas", nome: "Boneca com gatinho",
    fotos: ["img/pecas/boneca-gatinho.webp"],
    descricao: "Boneca de cachinhos segurando um gatinho de feltro." },

  { id: "ursa-filhote", categoria: "bichinhos", nome: "Ursa com filhote",
    fotos: ["img/pecas/ursa-filhote.webp"],
    descricao: "Mamãe ursa e filhote com vestidinhos combinando." },
  { id: "cachorrinhas", categoria: "bichinhos", nome: "Cachorrinhas de vestido",
    fotos: ["img/pecas/cachorrinhas.webp"],
    descricao: "Dupla de cachorrinhas de feltro com vestidos e lacinhos." },

  { id: "kit-troquinhas", categoria: "kits", nome: "Kit boneca + 2 troquinhas",
    fotos: ["img/pecas/kit-troquinhas.webp"],
    descricao: "Boneca com duas trocas de roupa em cabides e bolsinhas. Acompanha bolsinha transparente." },

  { id: "vasinhos", categoria: "enfeites", nome: "Vasinhos de flores de feltro",
    fotos: ["img/pecas/vasinhos-1.webp", "img/pecas/vasinhos-2.webp", "img/pecas/vasinhos-3.webp"],
    descricao: "Arranjos de flores de feltro em vasinhos de barro com laço." },
  { id: "cactos", categoria: "enfeites", nome: "Cactos de feltro",
    fotos: ["img/pecas/cactos.webp"],
    descricao: "Cactos de feltro em vasinhos com renda." },
  { id: "eu-e-minha-casa", categoria: "enfeites", nome: "Quadro “Eu e minha casa serviremos ao Senhor”",
    fotos: ["img/pecas/eu-e-minha-casa-1.webp", "img/pecas/eu-e-minha-casa-2.webp"],
    descricao: "Quadro redondo com letreiro em MDF e flores de feltro." },
  { id: "guirlanda-cachorrinhos", categoria: "enfeites", nome: "Guirlanda “Bem-vindo” com cachorrinhos",
    fotos: ["img/pecas/guirlanda-cachorrinhos.webp"],
    descricao: "Guirlanda com cachorrinhos e flores de feltro e placa de boas-vindas." },
  { id: "bastidor-juta", categoria: "enfeites", nome: "Bastidor de flores com juta",
    fotos: ["img/pecas/bastidor-juta.webp"],
    descricao: "Bastidor com flores de feltro, juta e laço." },
  { id: "bastidor-lavanda", categoria: "enfeites", nome: "Bastidor de lavandas",
    fotos: ["img/pecas/bastidor-lavanda.webp"],
    descricao: "Lavandas de feltro em cestinha de juta com renda." },
  { id: "bastidor-jardim", categoria: "enfeites", nome: "Bastidor jardim lilás",
    fotos: ["img/pecas/bastidor-jardim.webp"],
    descricao: "Quadro redondo com cena de jardim, flores e passarinho." },
  { id: "toalheiro", categoria: "enfeites", nome: "Toalheiro de flores",
    fotos: ["img/pecas/toalheiro.webp"],
    descricao: "Toalheiro redondo enfeitado com flores de feltro." },
  { id: "faixa-porta", categoria: "enfeites", nome: "Faixa de porta com flores",
    fotos: ["img/pecas/faixa-porta-1.webp", "img/pecas/faixa-porta-2.webp"],
    descricao: "Faixa vertical de juta com flores de feltro para porta." },
  { id: "painel-bem-vindos", categoria: "enfeites", nome: "Painel “Bem-vindos”",
    fotos: ["img/pecas/painel-bem-vindos.webp"],
    descricao: "Painel vertical com flores de feltro e letreiro." },
  { id: "painel-bastidores", categoria: "enfeites", nome: "Painel de bastidores com flores",
    fotos: ["img/pecas/painel-bastidores.webp"],
    descricao: "Três bastidores ligados, com flores delicadas." },
  { id: "painel-cafe", categoria: "enfeites", nome: "Painel de bastidores “Café”",
    fotos: ["img/pecas/painel-cafe.webp"],
    descricao: "Painel de três bastidores com tema de café." },
  { id: "painel-gratidao", categoria: "enfeites", nome: "Painel de bastidores “Gratidão”",
    fotos: ["img/pecas/painel-gratidao.webp"],
    descricao: "Painel de três bastidores com flores e a palavra Gratidão." },
  { id: "saquinhos-juta", categoria: "enfeites", nome: "Saquinhos de juta com flores",
    fotos: ["img/pecas/saquinhos-juta.webp"],
    descricao: "Saquinhos de juta decorados com flores de feltro." },
  { id: "ovais-cachorrinhos", categoria: "enfeites", nome: "Quadros ovais com cachorrinhos",
    fotos: ["img/pecas/ovais-cachorrinhos.webp"],
    descricao: "Quadros ovais com cachorrinhos e flores de feltro." }
];
