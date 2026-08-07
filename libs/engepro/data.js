/* ============================================================================
   Portal de Processos — Pelegrini Pins
   Fonte de dados do portal. É AQUI que você edita o conteúdo.
   Não precisa mexer em portal.js nem em portal.css.
   ========================================================================== */

window.Portal = window.Portal || {};

/* ----------------------------------------------------------------------------
   1. MARCA
   Coloque os arquivos em libs/engepro/brand/ e ajuste os nomes abaixo.
   Se o arquivo não existir, o portal mostra automaticamente um wordmark de
   texto no lugar — nada quebra.
   Formatos aceitos: .svg (melhor), .png com fundo transparente.
-------------------------------------------------------------------------- */
Portal.brand = {
  consultoria: {
    nome: 'EngePro',
    logo: 'libs/engepro/brand/engepro.svg'
  },
  cliente: {
    nome: 'Pelegrini Pins',
    logo: 'libs/engepro/brand/pelegrini.svg'
  },
  projeto: 'Mapeamento de Processos',

  /* Foto que aparece esmaecida no fundo do cabeçalho (atrás dos logos).
     Troque o arquivo ou aponte outro caminho; apague a linha para ficar
     só o degradê azul. */
  fotoHeader: 'libs/engepro/brand/equipe.jpg'
};

/* ----------------------------------------------------------------------------
   2. BPMN
   Os diagramas são lidos automaticamente de libs/js/json/configuration.json.js
   (o arquivo que o próprio Bizagi gera). Se você republicar o modelo pelo
   Bizagi, os diagramas novos aparecem aqui sozinhos — sem editar nada.

   Só use a lista abaixo se quiser sobrescrever manualmente.
-------------------------------------------------------------------------- */
Portal.bpmn = {
  usarConfiguracaoBizagi: true,
  diagramas: [] // preenchido em tempo de execução a partir do Bizagi.AppModel
};

/* ----------------------------------------------------------------------------
   3. SIPOC
   Cada item aponta para a imagem do quadro que a equipe montou, em
   files/sipoc/. A ordem abaixo é a do fluxo produtivo: o cliente de um SIPOC
   é o fornecedor do seguinte.

   Campos:
     id       → identificador único, sem espaços/acento (usado na URL)
     numero   → ordem no seletor de baixo
     titulo   → nome que aparece na barra lateral e na miniatura
     imagem   → caminho do arquivo dentro de files/sipoc/
     pendente → true enquanto o quadro ainda não foi feito

   PARA PUBLICAR UM DOS PENDENTES (o portal explica isso na própria tela):
     1. salve a imagem em files/sipoc/  — ex.: files/sipoc/Fundicao.png
     2. na linha do processo aqui embaixo, troque
          pendente: true   por   imagem: 'files/sipoc/Fundicao.png'
     3. recarregue a página. Só isso.

   A ordem abaixo é a do fluxo produtivo: o cliente de um SIPOC é o
   fornecedor do seguinte.
-------------------------------------------------------------------------- */
Portal.sipocs = [
  { id: 'comercial',     numero: 1, titulo: 'Comercial',     imagem: 'files/sipoc/Comercial.png' },
  { id: 'layout',        numero: 2, titulo: 'Layout',        imagem: 'files/sipoc/Layout.png' },
  { id: 'borracharia',   numero: 3, titulo: 'Borracharia',   imagem: 'files/sipoc/Borracharia.png' },
  { id: 'fundicao',      numero: 4, titulo: 'Fundição',      pendente: true },
  { id: 'raspagem',      numero: 5, titulo: 'Raspagem',      pendente: true },
  { id: 'polimento',     numero: 6, titulo: 'Polimento',     imagem: 'files/sipoc/Polimento.png' },
  { id: 'galvanoplastia', numero: 7, titulo: 'Galvanoplastia', pendente: true },
  { id: 'pintura',       numero: 8, titulo: 'Pintura',       imagem: 'files/sipoc/Pintura.png' },
  { id: 'embalagem',     numero: 9, titulo: 'Embalagem',     imagem: 'files/sipoc/Embalagem.png' }
];

Portal.vsm = [{ id:'atual', numero:1, titulo:'VSM — Estado Atual', imagem:'files/vsm/atual.svg' }];
Portal.vsm = [];
