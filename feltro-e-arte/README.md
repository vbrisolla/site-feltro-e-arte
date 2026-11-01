# Feltro & Arte — site

Site vitrine da Feltro & Arte (artesanato em feltro feito à mão, São José dos Campos – SP).
HTML, CSS e JavaScript puros: sem build, sem dependências, sem backend.

## Rodar no computador

Abra a pasta no VS Code e use a extensão **Live Server** (botão "Go Live"),
ou no terminal:

```bash
npx serve .
```

Abrir o `index.html` direto com dois cliques também funciona.

## Estrutura

```
index.html        página única
css/style.css     estilos (cores no topo, em :root)
js/pecas.js       CATÁLOGO — é aqui que se adicionam/removem peças
js/app.js         filtro, detalhe da peça e links de WhatsApp
img/logo.webp     logo (trocar pelo arquivo original em alta quando tiver)
img/pecas/        fotos das peças (.webp)
img/og.jpg        imagem de prévia ao compartilhar o link
```

## Adicionar uma peça

1. Coloque a foto em `img/pecas/` (de preferência `.webp`, até ~900 px de lado).
2. Em `js/pecas.js`, copie um bloco e ajuste `id`, `categoria`, `nome`, `fotos` e `descricao`.
3. Commit + push. A Vercel publica sozinha.

## Publicar na Vercel

1. Suba este repositório no GitHub.
2. Em vercel.com → **Add New → Project** → importe o repositório.
3. Framework preset: **Other**. Sem build command, output directory `.` (raiz).
4. Depois, em **Settings → Domains**, ligue o domínio próprio.

## Pendências antes de publicar

- [ ] Nomes e descrições reais das peças (os atuais são provisórios)
- [ ] Foto da artesã (seção Sobre — ver comentário no `index.html`)
- [ ] Logo em alta resolução / vetor
- [ ] Foto do kit sem texto por cima
- [ ] Confirmar o tempo de experiência ("Mais de 8 anos")
- [ ] Trocar `og:image` por URL absoluta quando tiver o domínio
