# Portal de Processos — Pelegrini Pins

Portal web com três abas: **BPMN**, **SIPOC** e **VSM**, na identidade visual
da **EngePro Consultoria Jr.**

## Identidade EngePro

- **Paleta** (extraída do material oficial): `#12163A` navy profundo,
  `#15214A` navy, `#214981` azul royal, `#3A67AA` azul médio, `#80A6DE` azul
  claro. A escada de azuis das cinco faixas do SIPOC segue essa gradação.
- **Tipografia**: *Ultra* nos títulos em caixa alta com a barra vertical à
  esquerda (a assinatura dos slides) e *Poppins* no restante. Os arquivos
  estão em `libs/engepro/fonts/` — o portal funciona **offline**, sem Google
  Fonts.
- **Taokei**: aparece no carregamento dos diagramas (a engrenagem do "Pro"
  girando) e no console do navegador. No pé da barra lateral fica a assinatura
  discreta da consultoria — o `engepro.svg` de verdade, invertido para branco.
- **Cabeçalho**: faixa navy com a foto da equipe esmaecida ao fundo
  (`Portal.brand.fotoHeader` no `data.js`). À esquerda fica o título do
  projeto com a barra vertical; à direita as **duas marcas assinam juntas** —
  EngePro e, depois do fio, Pelegrini —, ambas em branco. O fio inferior é a
  escada de azuis dos slides. Na impressão o cabeçalho volta a ser branco com
  os logos na cor original.

## Como abrir

Precisa rodar por um servidor local (abrir o `index.html` com duplo clique **não**
funciona — o navegador bloqueia a leitura dos diagramas por `file://`).

**Publicado online**: <https://enge-pelegrini.davidalledonemuniz.workers.dev> —
manda esse link direto, sem precisar de nada instalado do outro lado. É um
deploy de arquivos estáticos no Cloudflare Workers (conta
davidalledonemuniz), sem senha — quem tiver o link acessa. Pra atualizar
depois de mexer no conteúdo: Cloudflare dashboard → Workers & Pages →
`enge-pelegrini` → **New deployment** → suba de novo `index.html`, `libs/` e
`files/` (o `portal-pelegrini-pins.zip` nesta pasta já vem pronto pra isso —
se recriar o zip do zero, use `Compress-Archive` com cuidado: ele grava barra
invertida nos caminhos internos e o Cloudflare não entende isso como pasta;
prefira arrastar a **pasta** direto no uploader, ou zipar com uma ferramenta
que use `/`).

**Para quem só vai visualizar offline** (colegas, professor, cliente sem
internet): dê a pasta inteira (zip) e peça para dar duplo clique em
**`Abrir Portal.bat`**. Ele sobe um servidor local sozinho (via PowerShell, já
vem em qualquer Windows — nada para instalar) e abre o navegador em
`http://127.0.0.1:8000`. É só deixar a janela preta aberta enquanto usa o
portal; fechar a janela encerra o servidor. Se o Windows SmartScreen avisar
"Windows protegeu seu PC" (comum em `.bat` baixado de e-mail/zip), clique em
**Mais informações → Executar assim mesmo**.

**Para quem for editar o conteúdo**, com Python instalado, no terminal:

```
python -m http.server 8000
```

Depois acesse <http://127.0.0.1:8000>

## Onde editar o quê

| O que você quer mudar | Arquivo |
|---|---|
| Logos, conteúdo dos SIPOC, VSM | `libs/engepro/data.js` |
| Cores, espaçamentos, tipografia | `libs/engepro/portal.css` |
| Comportamento (zoom, navegação) | `libs/engepro/portal.js` |

Na prática, **só `data.js`** precisa ser tocado no dia a dia.

## Logos e foto do cabeçalho

Já instalados em `libs/engepro/brand/`:

- `engepro.svg` — canto direito do cabeçalho (antes do fio) e a assinatura no
  pé da barra lateral
- `pelegrini.svg` — canto direito do cabeçalho, depois do fio
- `equipe.jpg` — foto que aparece esmaecida no fundo do cabeçalho

Os dois logos são pretos sobre fundo transparente; sobre o navy do cabeçalho
eles são **invertidos para branco automaticamente** (via CSS). Na impressão
voltam ao preto original.

Para trocar os arquivos, basta sobrescrever mantendo os nomes. Nomes diferentes
podem ser apontados em `Portal.brand`, dentro do `data.js` (a foto fica em
`Portal.brand.fotoHeader` — apague a linha para o cabeçalho ficar só com o
degradê azul). Se um arquivo faltar, o portal cai para um wordmark de texto em
vez de quebrar.

## SIPOC

São **as imagens que a equipe montou**, exibidas como estão. Os arquivos ficam
em `files/sipoc/` e a lista está em `Portal.sipocs`, no `data.js`.

São **9 lugares**, na ordem do fluxo produtivo (o cliente de um é o fornecedor
do seguinte):

| # | Processo | Situação |
|---|---|---|
| 1 | Layout | pronto |
| 2 | Borracharia | pronto |
| 3 | Fundição | a fazer |
| 4 | Raspagem | a fazer |
| 5 | Polimento | pronto |
| 6 | Galvanoplastia | a fazer |
| 7 | Pintura | pronto |
| 8 | Embalagem | pronto |
| 9 | Expedição | a fazer |

Os quatro que faltam já aparecem no portal com o lugar guardado — na barra
lateral com a etiqueta *a fazer*, e abrindo o quadro a própria tela mostra a
linha exata que precisa ser trocada.

**Para publicar um deles**, são dois passos:

1. salve a imagem em `files/sipoc/` — ex.: `files/sipoc/Fundicao.png`
2. no `data.js`, naquela linha, troque `pendente: true` por
   `imagem: 'files/sipoc/Fundicao.png'`

Recarregue a página e pronto — ele entra no lugar certo, na miniatura de baixo
e na busca, sozinho.

> Os nomes 3, 4, 6 e 9 saíram dos próprios quadros já prontos (são os
> fornecedores e clientes citados neles). Se o processo que falta for outro,
> é só trocar o `titulo` e o `id` da linha.

## BPMN

Os diagramas são lidos automaticamente de `libs/js/json/configuration.json.js` —
o arquivo que o próprio Bizagi Modeler gera. **Se você republicar o modelo pelo
Bizagi, os diagramas novos aparecem no portal sozinhos**, sem editar nada aqui.

Subprocessos publicados ficam com uma moldura azul pulsando no diagrama e são
clicáveis — levam direto à página do subprocesso.

O selo "bizagi Modeler" que vem carimbado no canto dos `.svg` é removido na hora
de exibir. Os arquivos originais não são alterados.

## VSM

A aba já está pronta e ligada. Falta só o mapa — abra a aba no portal que ela
explica os quatro passos.

## Atalhos

| Tecla | Ação |
|---|---|
| `/` | vai para a busca |
| `←` `→` | SIPOC anterior / próximo |
| `+` `−` | zoom no BPMN |
| `0` | reenquadra o BPMN |
| duplo clique | reenquadra o diagrama |

## Sobre o export original

O visualizador original do Bizagi foi preservado em
`index-bizagi-original.html` e continua funcionando. Nada em `libs/js/` ou
`files/diagrams/` foi modificado.
