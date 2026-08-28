Bizagi.AppModel = {
  "personalized": false,
  "userLogoName": "\\libs\\img\\biz-ex-logo.png",
  "bizagiUrl": "http://www.bizagi.com",
  "productName": "Bizagi Modeler",
  "modelName": "Pelegrini Pins BPMN",
  "publishDate": "28/08/2026 10:45:00",
  "pages": [
    {
      "id": "f95d1b24-789b-49f0-bc92-bb79ff31238c",
      "name": "Diagram 1",
      "version": "1.0",
      "author": "EngePro",
      "image": "files\\diagrams\\Diagram 1.svg",
      "isSubprocessPage": false,
      "isCallActivityPage": false,
      "elements": [
        {
          "id": "f81fdd58-819c-4562-baad-bfc74e28ce9f",
          "name": "Pelegrini Pins",
          "imageObject": "System.Drawing.Bitmap",
          "elementImage": "files\\bpmnElements\\Participant.png",
          "imageBounds": {
            "points": [
              {
                "x": 25.0,
                "y": 31.0
              }
            ],
            "radius": 0.0,
            "height": 2924.0,
            "width": 11784.0,
            "shape": "rect"
          },
          "elementType": "Participant",
          "elementSubType": "Participant",
          "properties": [],
          "pageElements": [
            {
              "id": "7856e9dc-c9e2-43bc-ab22-e3ff13da2548",
              "name": "Dar banho",
              "imageObject": "System.Drawing.Bitmap",
              "elementImage": "files\\bpmnElements\\SubProcess.png",
              "imageBounds": {
                "points": [
                  {
                    "x": 8445.0,
                    "y": 1663.0
                  }
                ],
                "radius": 0.0,
                "height": 60.0,
                "width": 90.0,
                "shape": "rect"
              },
              "isPublished": true,
              "elementType": "SubProcess",
              "elementSubType": "SubProcess",
              "properties": []
            },
            {
              "id": "47eb3967-c517-43dc-a007-3321fd6a23a2",
              "name": "Pintar",
              "imageObject": "System.Drawing.Bitmap",
              "elementImage": "files\\bpmnElements\\SubProcess.png",
              "imageBounds": {
                "points": [
                  {
                    "x": 9603.0,
                    "y": 1941.0
                  }
                ],
                "radius": 0.0,
                "height": 60.0,
                "width": 90.0,
                "shape": "rect"
              },
              "isPublished": true,
              "elementType": "CallActivity",
              "elementSubType": "CallActivity",
              "properties": []
            }
          ]
        }
      ],
      "subPages": [
        {
          "id": "7856e9dc-c9e2-43bc-ab22-e3ff13da2548",
          "name": "Dar banho",
          "image": "files\\diagrams\\Dar banho.svg",
          "isSubprocessPage": true,
          "isCallActivityPage": false,
          "elements": [],
          "parentRef": "f95d1b24-789b-49f0-bc92-bb79ff31238c"
        },
        {
          "id": "47eb3967-c517-43dc-a007-3321fd6a23a2",
          "name": "Pintar",
          "image": "files\\diagrams\\Pintar.svg",
          "isSubprocessPage": true,
          "isCallActivityPage": true,
          "elements": [],
          "parentRef": "f95d1b24-789b-49f0-bc92-bb79ff31238c"
        }
      ]
    }
  ],
  "texts": {
    "tableOfContents": "Índice",
    "pageNumber": "Página",
    "pageNumberLabelOf": "de",
    "version": "Versão",
    "author": "Autor",
    "description": "Descrição",
    "mainPool": "Processo principal",
    "mainPoolDescription": "Processo principal Descrição",
    "processDiagrams": "Processar os Diagramas",
    "processElements": "Elementos do processo",
    "elements": "Elementos do processo",
    "defaultElementName": "Elemento",
    "performers": "Executantes",
    "accountable": "Responsável",
    "consulted": "Consultado",
    "informed": "Informado",
    "connectors": "Conectores",
    "connector": "Conector",
    "home": "Principal",
    "search": "Pesquisar",
    "goToParentProcess": "Ir para Matriz",
    "calledBy": "Chamada por",
    "attachmentsTooltip": "Exibir anexos",
    "visitBizagi": "Visite bizagi.com",
    "contains": "Contém {0} subprocessos",
    "showAll": "Mostrar tudo",
    "fullScreen": "Tela inteira",
    "zoomIn": "Ampliar",
    "zoomOut": "Reduzir",
    "close": "Fechar",
    "menu": "Menu: ",
    "errorPage": "Erro ao visualizar a página",
    "process": "Processo",
    "subProcess": "Subprocessos publicados",
    "contain": "Contém",
    "checkAttributes": "Ver atributos",
    "checkOverview": "Ver resumo",
    "unavailableResource": "O recurso não está disponível",
    "localResource": "O recurso pode ser acessado localmente",
    "performer": "Participantes",
    "linktoimage": "Link para a imagem",
    "presentationAction": "Ações de apresentação",
    "searchGlobal": "Busca todos",
    "searchLocal": "Busca neste processo",
    "searchResults": "Nenhum resultado encontrado",
    "titlePage": "Início",
    "emptyElement": "Este elemento ainda não foi documentado",
    "unsupported": "Seu navegador não suporta conteúdo exibido por esta página.",
    "details": "Detalhes",
    "viewDetails": "Ver detalhes",
    "expand": "Expandir",
    "mainPoolProperties": "Propriedades do Processo principal",
    "cannotVisualize": "A página não pode ser exibida",
    "resourceNotFound": "O recurso solicitado não foi encontrado:",
    "applyTheme": "Aplicando novo tema",
    "showMore": "Mostrar mais",
    "showLess": "Mostrar menos",
    "hideDescription": "Ocultar descrição",
    "showDescription": "Mostrar descrição",
    "presentationActionLink": "Exibir ações de apresentação",
    "goToLinkThrow": "Ir para o evento de destino",
    "goToLinkCatch": "Ir para o evento de origem",
    "goToSubProcess": "Ir para o subprocesso",
    "viewByList": "Lista de processos",
    "viewByTree": "Hierarquia de processos",
    "diagramList": "Lista de processos",
    "folderTree": "Hierarquia de processos"
  },
  "searchMap": [
    {
      "containerId": "f95d1b24-789b-49f0-bc92-bb79ff31238c",
      "containerName": "Diagram 1",
      "isSubprocess": false,
      "elements": [
        {
          "id": "f81fdd58-819c-4562-baad-bfc74e28ce9f",
          "value": "Pelegrini Pins"
        },
        {
          "id": "b6e75975-848a-49c0-a735-9136c440f59e",
          "value": "Main Process"
        },
        {
          "id": "cf9bdde2-a7ba-4ea1-84a2-dba055873db3",
          "value": ""
        },
        {
          "id": "a124942f-1906-4d07-9626-f3c0a496d40f",
          "value": "Receber pedido"
        },
        {
          "id": "bb7bb8b2-6342-4295-b631-69d98af28d4f",
          "value": "Elaborar orçamento"
        },
        {
          "id": "b02dffbb-2ab5-4f32-9473-1b78bda03935",
          "value": "Enviar pedido"
        },
        {
          "id": "501eede7-fae6-4f42-a576-aa4b1f716dec",
          "value": "Receber pedido"
        },
        {
          "id": "d5702222-0842-44b8-a514-face0ac12997",
          "value": "Preparar impressão"
        },
        {
          "id": "7043f6ac-714a-40fc-a02e-170b0eea5e35",
          "value": "Imprimir"
        },
        {
          "id": "90394958-d4a2-44fe-8cd8-cace740bfd85",
          "value": "Limpar com álcool"
        },
        {
          "id": "e50bfced-1979-481f-a782-3ac55472e3ad",
          "value": "Realizar cura UV"
        },
        {
          "id": "bb8b4757-6da8-4f2a-b120-c396d7b4d192",
          "value": "Lixar"
        },
        {
          "id": "933bf1ec-59a9-4c17-addb-d14aef52c88f",
          "value": "Enviar pra borracharia"
        },
        {
          "id": "5804db40-3d49-49ce-989d-9f8eea1d4613",
          "value": "Receber molde"
        },
        {
          "id": "5f14bb33-0263-4992-a7ba-4b666a20720c",
          "value": "Marcar número do pedido na borracha"
        },
        {
          "id": "483af420-5b0a-4e10-bf3c-8b94cb0e3de1",
          "value": "Cadastrar novo número"
        },
        {
          "id": "04dc4f90-ee56-4276-83bf-b2fe242ceea3",
          "value": "Colocar cone"
        },
        {
          "id": "45b397bb-7c49-42ac-bfa9-38d1717a36b2",
          "value": "Colocar arco"
        },
        {
          "id": "e42cbc85-83c6-4090-8222-44c1a30e2101",
          "value": "Adicionar molde e pinos"
        },
        {
          "id": "98ce597b-40c0-4f98-a7eb-d57f6dc57c3b",
          "value": "Fechar molde"
        },
        {
          "id": "19cbd367-166e-4b5c-891a-a544256a8784",
          "value": "Vulcanizar"
        },
        {
          "id": "360421db-a364-49d6-a621-3fc2bc62b52c",
          "value": "Abrir entrada do metal"
        },
        {
          "id": "0204f3fa-7925-4be7-886d-b29b8ae40cda",
          "value": "Abrir saída de air"
        },
        {
          "id": "aee0732f-ab91-448c-94db-15a4116e3819",
          "value": "Enviar para fundição"
        },
        {
          "id": "7a461371-9ec6-41f8-b1ca-01cc7393b739",
          "value": "Receber molde"
        },
        {
          "id": "7f1add31-024e-4e35-b6cf-cf97e1740d27",
          "value": "Misturar metal novo com reaproveitado (70/30)"
        },
        {
          "id": "dee0f115-052d-4234-b4fc-b340e1dc5c50",
          "value": "Fundir metal"
        },
        {
          "id": "ef71ee05-d962-4109-ba77-30b35a787fbe",
          "value": "Retirar peça"
        },
        {
          "id": "651cdca5-3b5a-4f83-81e2-b3b41533e680",
          "value": "Enviar para raspagem"
        },
        {
          "id": "5748c145-8f83-4258-b9a5-5a36ded4c3bc",
          "value": "Passar no esmeril"
        },
        {
          "id": "5db1e97c-53f4-4479-9883-44d87d4f6eda",
          "value": "Remover saída de ar"
        },
        {
          "id": "e03c5a16-a99f-4580-b9c6-8d59027fd5ef",
          "value": "Furar peça"
        },
        {
          "id": "d7f47ca7-0286-41a2-9dcd-258fe2324ee3",
          "value": "Inserir pino"
        },
        {
          "id": "66e19d31-ac2d-4447-86e4-52a54062a05a",
          "value": "Pino correto?"
        },
        {
          "id": "d4854e4f-ecab-47df-a6ce-6418717675bd",
          "value": "Enviar para polimento"
        },
        {
          "id": "210f74b1-acc4-4164-a82c-b00cf5a43efe",
          "value": "Polir com chip"
        },
        {
          "id": "bd2f14df-f06a-465c-aeeb-cad80de9caca",
          "value": "Lavar"
        },
        {
          "id": "33f42a10-5593-43ba-9635-f3954e6c1d00",
          "value": "Polir com  porcelana"
        },
        {
          "id": "4b294562-67d9-4f4d-a06b-9d3ed3018040",
          "value": "Aplicar pasta"
        },
        {
          "id": "15065be3-2f03-4a8b-84e2-588341968883",
          "value": "Aplicar shampoo"
        },
        {
          "id": "147fab2e-35e1-4eae-af0e-eac55e245b83",
          "value": "Limpar"
        },
        {
          "id": "47d33bd6-a7f1-42ed-84d0-3f5afe797450",
          "value": "Secar"
        },
        {
          "id": "3d9251f8-d59c-4d0e-9170-4780cb7dc28c",
          "value": "Peça aprovada?"
        },
        {
          "id": "1dc7de7b-539c-45e4-9214-40f44aa5da67",
          "value": "Enviar para galvanoplastia"
        },
        {
          "id": "bd08d099-2061-4322-a0b7-fe34d8572e01",
          "value": "Amarrar peças no fio de cobre"
        },
        {
          "id": "868de467-d63d-45eb-9dc9-d1f2de39a749",
          "value": "Realizar pré-secagem na estufa"
        },
        {
          "id": "df8a301f-e55b-4246-aefe-ba2b3c07a612",
          "value": "Dar banho desengraxante"
        },
        {
          "id": "99f62234-02bd-4327-93a3-7587c0df1fd0",
          "value": "Enxaguar"
        },
        {
          "id": "57a31092-2775-4df0-9b5c-2008e2ab960c",
          "value": "Dar banho ativador"
        },
        {
          "id": "e6b589f5-e34a-40a8-8199-e6c1c9ce2ca6",
          "value": "Enxaguar"
        },
        {
          "id": "5786b257-b98c-4d5a-872f-312472f40cf5",
          "value": "Dar banho cobre alcalino"
        },
        {
          "id": "1b28ef95-355c-431c-981e-62fe5ea697a7",
          "value": "Enxaguar"
        },
        {
          "id": "d9e18d81-6cb4-4880-b988-d48731cc609d",
          "value": "Dar banho cobre brilhante"
        },
        {
          "id": "e7c78421-4302-4d0c-bd0a-6485402373b2",
          "value": "Enxaguar"
        },
        {
          "id": "a5836838-4685-460b-b37e-119d6b0b1384",
          "value": "Limpar ganchos"
        },
        {
          "id": "4b54dd54-0b26-4c09-bfb3-fdd8bffedd97",
          "value": "Gancho precisa ser refeito?"
        },
        {
          "id": "588e10b0-efd8-4606-ae8c-5b2f7fd5edf3",
          "value": "Cortar gancho"
        },
        {
          "id": "be5e7f01-f37d-4b1c-86da-c77bdeb8834b",
          "value": "Refazer gancho"
        },
        {
          "id": "5905f8a4-1d9b-4cb8-b594-f688ae72dd4d",
          "value": ""
        },
        {
          "id": "2da49a20-60a5-4616-8613-62a3934b1b80",
          "value": "Pesar"
        },
        {
          "id": "d3bba061-82da-4f8c-a402-7e9e804fbdf7",
          "value": "Desamarrar"
        },
        {
          "id": "9423ece5-aacc-4396-879f-b599b5075fce",
          "value": "Fazer contagem final"
        },
        {
          "id": "a75ce8c5-d855-4a98-9004-858dad3ff80e",
          "value": "Finalizar lote no sistema"
        },
        {
          "id": "2f12740b-cc8d-44cf-b392-9169d9eba5bd",
          "value": "Receber lote"
        },
        {
          "id": "bf6e959c-710e-4884-b67a-11d5f42621cb",
          "value": ""
        },
        {
          "id": "61bd1371-77a6-4dcb-b050-ab779aea96f5",
          "value": "Cliente aprovou?"
        },
        {
          "id": "0a75748f-db9c-4dd5-9ff5-b49ce6eb0366",
          "value": "O número já existe no sistema?"
        },
        {
          "id": "f7cf5e03-ba86-4cd4-a18b-6e6722d0ab74",
          "value": ""
        },
        {
          "id": "51b4348d-39b5-4aa4-be09-6ca9e3ee6b5a",
          "value": "Existe metal reaproveitado?"
        },
        {
          "id": "3ba66147-6354-44d3-89ea-252defd496d4",
          "value": ""
        },
        {
          "id": "e4b8ccce-565e-47e0-a1d6-c03824b7e958",
          "value": "Peça aprovada?"
        },
        {
          "id": "e7dab9bf-9a48-4ca3-bdef-b92f3063a681",
          "value": ""
        },
        {
          "id": "ae9bb330-e51c-4912-80e2-3eda8f3908be",
          "value": ""
        },
        {
          "id": "a1ae10aa-50e4-42a9-9ecb-4c55fb874333",
          "value": "Verificar no sistema"
        },
        {
          "id": "c6db58f9-4e8d-4dc7-b147-f3ccef6c4087",
          "value": "Conferir peças"
        },
        {
          "id": "df2397a8-9ef6-4cb0-bc24-bae158a655bc",
          "value": "É preciso montar a peça?"
        },
        {
          "id": "4d24c617-a09a-48df-9d72-0fc14a3df966",
          "value": ""
        },
        {
          "id": "3c310972-6d82-4ede-ac8f-e8b94e9da929",
          "value": "Montar"
        },
        {
          "id": "63bda365-412a-4dd5-8b34-b9dcc0aa9261",
          "value": "As peças estão conforme?"
        },
        {
          "id": "e5faa9be-8ad7-416b-ade0-40d6b84e3cab",
          "value": "Embalar"
        },
        {
          "id": "6d82f8a2-d0b9-4fc8-aa3e-8307f6991913",
          "value": "Verificar sistema"
        },
        {
          "id": "514312de-e1ab-4fdb-bdd3-b01c0ea9dbbe",
          "value": "Gerar documentos"
        },
        {
          "id": "49aeec19-9ef5-4531-b1b9-39e2ee7bc425",
          "value": "Liberar para envio"
        },
        {
          "id": "26d18390-1aee-43b0-be39-7827c4cfd743",
          "value": "Separar para expedição"
        },
        {
          "id": "4c593991-a67c-4af0-89a5-954e73cc0030",
          "value": "Conferir pagamento"
        },
        {
          "id": "d15fc512-6b3c-48bf-863d-6e2f3a1f8c40",
          "value": ""
        },
        {
          "id": "31a3acb2-6bd2-4129-9a12-bf9f59108d96",
          "value": "Confirmar pagamento"
        },
        {
          "id": "2d90ef5f-e949-42aa-8327-2edd1f3818c2",
          "value": "Pedido enviado"
        },
        {
          "id": "68f33896-019f-48c0-95f8-6e72e2cdd8d5",
          "value": "Cobrar pagamento"
        },
        {
          "id": "e757cbb7-bf4c-47c8-9be8-33be586e739a",
          "value": "Enviar para embalagem/ costura"
        },
        {
          "id": "d324384f-b64d-4bc9-8fb4-a07081a4f179",
          "value": ""
        },
        {
          "id": "0f2d92f1-eed0-49e6-8718-c0ae169d9dfa",
          "value": ""
        },
        {
          "id": "3a4e56c1-a736-4334-a28a-a30db6f838cd",
          "value": "Criar/Adaptar arte"
        },
        {
          "id": "a173a6fd-5b9c-468c-aaa6-cbefcf243534",
          "value": "Enviar para aprovação do cliente"
        },
        {
          "id": "fc61ae8d-9942-4188-ad0a-73b1c55522f9",
          "value": "Cliente gostou?"
        },
        {
          "id": "e1774832-74fa-4b34-92f7-549f20a76d63",
          "value": ""
        },
        {
          "id": "c1963956-edf2-4be3-a1d9-3c94f043f5ad",
          "value": "Enviar para a terceirizada"
        },
        {
          "id": "31965d93-0884-4770-91c2-df1695f69148",
          "value": "Costurar"
        },
        {
          "id": "45d8dd07-bdb2-4122-a571-c295ed90be4e",
          "value": "Devolver para a fábrica"
        },
        {
          "id": "f15b8b0a-f80a-467c-8892-051c5cf45a09",
          "value": ""
        },
        {
          "id": "e9e350fb-ded9-48b4-9626-251f263cebc3",
          "value": ""
        },
        {
          "id": "9fe8b085-ac40-4e4b-bcca-03eacc175db8",
          "value": ""
        },
        {
          "id": "f1afd368-c4c7-41ca-a540-9ad797ace20c",
          "value": "Sim"
        },
        {
          "id": "d868f70f-bb4e-41ef-a462-df8f2012bd35",
          "value": ""
        },
        {
          "id": "703b3875-8cbb-4a83-aaf0-973aacb34b18",
          "value": ""
        },
        {
          "id": "1243c7cc-517a-45b7-8f41-9219ee2af985",
          "value": ""
        },
        {
          "id": "4edc0f89-5613-4da4-b402-e4a79fa1ee25",
          "value": ""
        },
        {
          "id": "830ea21b-7b18-4d64-bd6e-8088d5c14dea",
          "value": ""
        },
        {
          "id": "e0a778a6-cd97-44ef-bae1-3408c7b8a21f",
          "value": ""
        },
        {
          "id": "2c9418cc-2957-4936-95ee-5ff1856de120",
          "value": ""
        },
        {
          "id": "35e5d9bd-0499-41f4-bd19-261f85cd63fb",
          "value": ""
        },
        {
          "id": "1716bcaf-0074-453e-854d-7ddfa057e4cf",
          "value": ""
        },
        {
          "id": "b299307b-fdc1-492a-98da-40bdf6a3d26a",
          "value": ""
        },
        {
          "id": "564f7cb0-d503-4b0c-ac76-74161051e9ec",
          "value": "Não"
        },
        {
          "id": "8f9e7567-a03f-4ec9-b5d3-50319c8329ff",
          "value": "Sim"
        },
        {
          "id": "d137c7da-80d0-4458-a24d-a1a6de5d51df",
          "value": ""
        },
        {
          "id": "c66bf4f7-222d-4a2f-8278-c0563c993802",
          "value": ""
        },
        {
          "id": "7a568f49-fb20-46aa-883b-0dfb7382c5b2",
          "value": ""
        },
        {
          "id": "fce24499-cac5-4751-8de0-d64265f2aefa",
          "value": ""
        },
        {
          "id": "e03891cb-e4e7-4b31-b31d-0bc7b0307352",
          "value": ""
        },
        {
          "id": "79f1c6bd-7b78-4ba4-abf5-76792ee5f8da",
          "value": ""
        },
        {
          "id": "a52c3951-2362-4ba4-9454-4a55809363cc",
          "value": ""
        },
        {
          "id": "720b0473-84c2-421a-abb3-1d24d70d6de7",
          "value": ""
        },
        {
          "id": "3b2aea56-b36b-4160-b8d5-d21c02acb7f5",
          "value": ""
        },
        {
          "id": "65711f2c-c0a5-444f-a828-3e7fdf61ce1c",
          "value": ""
        },
        {
          "id": "f33124d3-31c5-46e0-b3da-aed0cc5d8565",
          "value": ""
        },
        {
          "id": "9c7d5135-c6ff-4d55-8022-70543bc38540",
          "value": ""
        },
        {
          "id": "ba43dd34-5079-4cb9-9dac-13f326807e82",
          "value": "Sim"
        },
        {
          "id": "4ffaff6e-4222-40ed-9214-3c2e3ded1a6c",
          "value": "Não"
        },
        {
          "id": "6fbface8-1aac-4124-bed8-c239b639c2d0",
          "value": ""
        },
        {
          "id": "66e83d70-7ae9-4aa0-9dc9-91640ed14dcd",
          "value": ""
        },
        {
          "id": "9930977f-774c-4667-86d7-4a90f19826e7",
          "value": ""
        },
        {
          "id": "2c536e7c-6a74-43eb-958c-50bae55a04f6",
          "value": ""
        },
        {
          "id": "fa88f1d0-afcf-48c2-8c42-a76ed8da72c6",
          "value": "Sim"
        },
        {
          "id": "b07a66f3-6ac2-4628-81fa-b6957ac2e0f1",
          "value": "Não"
        },
        {
          "id": "24eaadbc-b7c4-4961-b923-e68c1426e93c",
          "value": ""
        },
        {
          "id": "698f5f20-72b4-419c-af4f-48ee1013b049",
          "value": ""
        },
        {
          "id": "509425f5-7663-4442-9e1e-c4b5f5c7b0a4",
          "value": ""
        },
        {
          "id": "d1adc4bf-0a6a-468a-ab73-6746cde640b9",
          "value": ""
        },
        {
          "id": "87091613-9a1d-4adc-bbcc-0cadf4aab1c9",
          "value": ""
        },
        {
          "id": "739ec62d-71b8-4a72-a68c-dde3b482239b",
          "value": "Sim"
        },
        {
          "id": "8405efd6-47e0-44b4-ae8b-5b2b86ed06c4",
          "value": "Não"
        },
        {
          "id": "1cd2e3af-1560-4764-a4b9-f178ef33ab2f",
          "value": ""
        },
        {
          "id": "a33ffe9e-8c0e-42ff-85cb-bdabfa9d99e5",
          "value": ""
        },
        {
          "id": "e0c6fe0b-c2bd-43c4-9e08-0ff6c9690226",
          "value": ""
        },
        {
          "id": "7aeb3e2f-bd09-4cec-812e-21e7bc3d814c",
          "value": ""
        },
        {
          "id": "efa16680-6b11-4338-a08a-7b5ac0ef70c2",
          "value": ""
        },
        {
          "id": "3ea3a96a-802d-431f-a42c-11cf4c84e0f1",
          "value": ""
        },
        {
          "id": "cd562a75-3ead-403b-8789-ef73051a5aa1",
          "value": ""
        },
        {
          "id": "a36ad780-287c-4773-bd12-37925a85eb79",
          "value": ""
        },
        {
          "id": "f5fc7354-4738-4aa2-ab43-1c5694284345",
          "value": ""
        },
        {
          "id": "9cfeacc0-f002-402f-a2eb-30ab3e8ed40e",
          "value": ""
        },
        {
          "id": "90112b78-1e16-4758-bf7e-4c7b47519332",
          "value": "Sim"
        },
        {
          "id": "a58a9755-dd79-4467-819d-f0122ebd163a",
          "value": ""
        },
        {
          "id": "b5977176-1026-4613-97aa-1632b7b521b9",
          "value": ""
        },
        {
          "id": "2064bc5d-e493-4cba-98aa-493d2a755784",
          "value": ""
        },
        {
          "id": "6a8d4009-d432-4db2-aa66-aa187a37efbf",
          "value": ""
        },
        {
          "id": "e0ca9918-35cb-4e74-a160-6a030964a821",
          "value": ""
        },
        {
          "id": "b0eb2178-af2b-4224-b77c-d660ff0902b8",
          "value": ""
        },
        {
          "id": "8df1d6d9-d8d1-47c2-96db-6de0c5ec596b",
          "value": ""
        },
        {
          "id": "43b0647e-4079-42ac-9414-156ec7a35ff5",
          "value": ""
        },
        {
          "id": "9842faa1-056e-4d18-b636-efe47be9d86f",
          "value": ""
        },
        {
          "id": "13403ea4-b41d-43d0-9ab1-98d089c7f36d",
          "value": ""
        },
        {
          "id": "72f4704b-c494-423a-a160-26a79430dd5b",
          "value": "Sim"
        },
        {
          "id": "5c7d2148-2481-4264-b8dc-0b0863892db7",
          "value": ""
        },
        {
          "id": "baac46d4-8bc5-454d-8cc2-889f8b7ed392",
          "value": ""
        },
        {
          "id": "152b8033-26fa-49df-8563-351c83c34716",
          "value": "Não"
        },
        {
          "id": "0fef45a6-00a4-4e1d-bb37-939b512a1a94",
          "value": ""
        },
        {
          "id": "dafc0968-fe3d-4f44-b2ba-48e2e9cd9479",
          "value": ""
        },
        {
          "id": "bb3b6428-a4e8-4a2d-818c-b9e0846f7990",
          "value": ""
        },
        {
          "id": "832a02d9-e87c-4314-9143-c584080de603",
          "value": ""
        },
        {
          "id": "b0c7dffe-2475-4fb0-85fc-d27690c8d07d",
          "value": "Não"
        },
        {
          "id": "f751a12a-ac62-44d3-89cb-19aab635a446",
          "value": ""
        },
        {
          "id": "2112d17a-2a46-4cbd-b3c2-376ee3da2b0c",
          "value": ""
        },
        {
          "id": "03b01e38-b6a3-4021-934a-4a0c077f3a39",
          "value": "Não"
        },
        {
          "id": "62f27bf3-f412-44c1-b610-08e23c8cbedd",
          "value": ""
        },
        {
          "id": "0859a0fe-54a8-4418-be6f-4a6aaf7f4729",
          "value": ""
        },
        {
          "id": "d3fa41a2-aa76-4894-b3cb-2f2c194fb092",
          "value": ""
        },
        {
          "id": "256b2315-91ac-4c5a-907d-960a0ce1dd91",
          "value": "Não"
        },
        {
          "id": "6498d950-8a65-4193-a03a-1d876e96f279",
          "value": ""
        },
        {
          "id": "9ffa4601-4328-40bc-9364-bb4782cc66cb",
          "value": "Sim"
        },
        {
          "id": "9d87e354-6d56-4865-90ba-9d0b84921915",
          "value": ""
        },
        {
          "id": "f9337a4d-21c3-4efe-b3d2-460c19b95b88",
          "value": ""
        },
        {
          "id": "7e24eb12-32bc-4cb5-a579-fd5fdc0f39e8",
          "value": "Sim"
        },
        {
          "id": "26878262-b398-445b-a813-6f2b015a8e0e",
          "value": ""
        },
        {
          "id": "895b50ab-7fda-451a-96bc-ea4e1b83e849",
          "value": ""
        },
        {
          "id": "88a9f0b8-4bb5-48f2-a04c-dd5518d36142",
          "value": ""
        },
        {
          "id": "5de0b730-348f-4ed2-9a6a-f781b995d66b",
          "value": ""
        },
        {
          "id": "ab72a487-6e95-4720-946b-7dbd31089a54",
          "value": ""
        },
        {
          "id": "60d9ddb0-163c-4b8d-bcde-75d096eddf5d",
          "value": ""
        },
        {
          "id": "a58c5d23-52ef-4478-becb-011a87c727e6",
          "value": ""
        },
        {
          "id": "38c6f6b5-3602-4920-aeae-56bd306df57f",
          "value": "Sim"
        },
        {
          "id": "1077110a-eab1-471d-a198-70edacdb3b39",
          "value": ""
        },
        {
          "id": "bc3dd2ee-c60f-460c-a0f7-5a95d7648440",
          "value": ""
        },
        {
          "id": "bea58c0b-daf6-49a9-a824-f5cdf1e4ec7e",
          "value": ""
        },
        {
          "id": "fe725462-4ad3-4a3b-8222-2e73780d2cc5",
          "value": ""
        },
        {
          "id": "66e69dff-2c5d-4408-aebd-a330c98f046a",
          "value": ""
        },
        {
          "id": "95c26798-6a06-48d9-836d-e4beea407052",
          "value": ""
        },
        {
          "id": "07380745-a1d4-4036-9879-04ee1167667c",
          "value": ""
        },
        {
          "id": "e8883ac1-d5cd-41f9-99db-325a47d8266d",
          "value": ""
        },
        {
          "id": "c269098f-cb03-48ea-a853-1f6e673c3f64",
          "value": ""
        },
        {
          "id": "3070c381-0bde-468c-906c-7f74d2f2c499",
          "value": ""
        },
        {
          "id": "8a91947b-bab5-4fc6-93a2-7b4090b12e6c",
          "value": ""
        },
        {
          "id": "063f27a6-2a6f-4929-99fd-c270cf94d3e1",
          "value": ""
        },
        {
          "id": "d07fc496-4ec9-49f1-b67e-87ff75fab6c1",
          "value": ""
        },
        {
          "id": "30b539ca-a665-45c0-a1dd-a81b9c800b6d",
          "value": ""
        },
        {
          "id": "ae2a23f9-d4a8-485d-acd0-99fc3b00b939",
          "value": ""
        },
        {
          "id": "17259e6d-91a7-4380-ad25-1e1c29ec5cb1",
          "value": ""
        },
        {
          "id": "f1267cde-7ba6-43ef-bb34-ecfd44d0495e",
          "value": ""
        },
        {
          "id": "98b43cf7-6bb9-44b0-b65d-bd300aab2d20",
          "value": ""
        },
        {
          "id": "6c9f0806-c1d5-424b-839f-1b739fda433d",
          "value": ""
        },
        {
          "id": "47eb3967-c517-43dc-a007-3321fd6a23a2",
          "value": "Pintar"
        },
        {
          "id": "fae793bc-6f28-467f-a63b-4ee746f9a9b0",
          "value": "Não"
        },
        {
          "id": "3de331b8-2497-4946-93ad-5d6fae28c8c0",
          "value": "Aguardar resfriamento"
        },
        {
          "id": "5a4f913e-51a8-4605-90f3-ebd4b3570ea8",
          "value": "4-5 horas"
        },
        {
          "id": "676b8bfc-028a-44f2-823b-a0465bf6d44a",
          "value": "15 minutos"
        },
        {
          "id": "f12f10c3-1b2b-4cd7-8319-6b18379bf7ab",
          "value": "Esperar 12 horas"
        },
        {
          "id": "7856e9dc-c9e2-43bc-ab22-e3ff13da2548",
          "value": "Dar banho"
        },
        {
          "id": "22c0f8a1-b652-4b29-99a8-77739da95353",
          "value": "Comercial"
        },
        {
          "id": "8b5e2591-569e-46ce-87a9-42a22b2bc164",
          "value": "Layout"
        },
        {
          "id": "f09c49bd-c76d-47fa-973e-879fb3902ca9",
          "value": "Modelagem"
        },
        {
          "id": "a9e5b4df-d03a-4f08-8d25-6554690459f8",
          "value": "Borracharia"
        },
        {
          "id": "68ee3e03-fd60-449f-8490-b921193bd01d",
          "value": "Fundição"
        },
        {
          "id": "28e04dcd-640a-4794-b5a3-57f5e3ea4daf",
          "value": "Raspagem"
        },
        {
          "id": "278da7ae-84b1-4510-8971-7a4ba41a978c",
          "value": "Polimento"
        },
        {
          "id": "5dea5730-5f1f-4dd4-9b20-e2c8ee83aff5",
          "value": "Galvanoplastia"
        },
        {
          "id": "93c13030-b812-4e12-b006-8a61cf8330a2",
          "value": "Pintura"
        },
        {
          "id": "3753d49e-d245-4630-97b1-946f17b736d5",
          "value": "Costura"
        },
        {
          "id": "aa79a1ea-9069-47b2-91e7-882ad57d1663",
          "value": "Embalagem"
        },
        {
          "id": "81f07788-4480-40fd-b29b-ac1ae0a26eb6",
          "value": "Expedição"
        },
        {
          "id": "b103f336-80c4-430d-ac9d-2e642aef86c1",
          "value": "Financeiro"
        }
      ]
    },
    {
      "containerId": "7856e9dc-c9e2-43bc-ab22-e3ff13da2548",
      "containerName": "Dar banho",
      "isSubprocess": true,
      "elements": [
        {
          "id": "849a4193-1ce1-4559-9d35-006cde57cf6f",
          "value": "Dar banho de cobre"
        },
        {
          "id": "7fafca98-2c9b-425a-9add-5d4d61a1facb",
          "value": "Enxaguar"
        },
        {
          "id": "053aaf76-b82e-4b8c-9428-26c607a540f5",
          "value": "Colocar na estufa"
        },
        {
          "id": "273e83a5-1713-4bcd-bb14-384fed23fbb9",
          "value": "Colocar na água quente"
        },
        {
          "id": "86eda88d-7057-44f9-a8fa-7098f60d73ff",
          "value": "Colocar na água quente"
        },
        {
          "id": "681ba633-5a97-4e6d-b9ad-8f3e5e398a02",
          "value": "Colocar na água quente"
        },
        {
          "id": "d0ccbd99-777e-489d-9e33-ee365fbef159",
          "value": "Enxaguar"
        },
        {
          "id": "83d2a185-da27-432f-8b3a-bc3e25fb0512",
          "value": "Dar banho dourado"
        },
        {
          "id": "27c9dcdb-5cff-493d-bf31-2f4522572712",
          "value": "Dar banho de grafite"
        },
        {
          "id": "acafb1c7-66d2-4bcb-b9c0-b27e5cbe8ce1",
          "value": "Colocar na estufa"
        },
        {
          "id": "98fff0e7-e193-4f05-a8a2-3e346aa3901f",
          "value": "Colocar na água quente"
        },
        {
          "id": "043d6029-d878-4b51-9747-2537f7979b79",
          "value": "Enxaguar"
        },
        {
          "id": "3f6539fd-0fcc-4552-ae7a-c3307c061769",
          "value": "Dar banho de níquel"
        },
        {
          "id": "a5eb1a2a-52e6-4437-8b27-eadc3a6e0e6a",
          "value": "Polir"
        },
        {
          "id": "11926a67-f657-48f8-a006-6d62f2de60a5",
          "value": "Colocar na estufa"
        },
        {
          "id": "9927f498-6a2a-4a00-a58b-ab43c0cad642",
          "value": "Banho finalizado"
        }
      ]
    },
    {
      "containerId": "47eb3967-c517-43dc-a007-3321fd6a23a2",
      "containerName": "Pintar",
      "isSubprocess": true,
      "elements": [
        {
          "id": "b003c3fd-2815-4862-a7a9-e43b850ff996",
          "value": "Receber lote"
        },
        {
          "id": "b663fa59-a6f9-4dda-8cbc-dcfd34d25b2c",
          "value": ""
        },
        {
          "id": "ec760936-c452-4d50-a478-6084a041b9e3",
          "value": "Misturar tinta + catalisador"
        },
        {
          "id": "b7199d6e-b670-4ce1-b48d-6a198ce74698",
          "value": "Aquecer peças na estufa"
        },
        {
          "id": "b058a6bc-80f0-47c4-ad0e-a83cc11be332",
          "value": "Separar tintas"
        },
        {
          "id": "15cb9d2d-ad56-4b17-979e-45652555d8a4",
          "value": "Consultar pedido no sistena"
        },
        {
          "id": "2fb10e66-c8e1-4073-837c-50fe5c6d80b9",
          "value": "Passou no teste?"
        },
        {
          "id": "6c86424d-91d5-4123-8632-e8b8cffd942e",
          "value": "Pintar"
        },
        {
          "id": "f68d95dd-6786-4a1e-886d-e668c0f8865b",
          "value": "Selecionar agulha fina/padrão"
        },
        {
          "id": "2d560f1c-f3a0-4e88-80a9-ed553f5ba09f",
          "value": "Preparar seringa"
        },
        {
          "id": "f2252c34-e220-4181-bd01-159cea146c32",
          "value": "Realizar teste da chapa quente"
        },
        {
          "id": "ebf981ae-9489-4046-a208-ef67a66093c7",
          "value": ""
        },
        {
          "id": "c7df6586-4e8b-4ed2-b0a0-65d2aab92f35",
          "value": "O defeito é reparável?"
        },
        {
          "id": "46f16dd5-136e-4a90-aa3e-79eaeb9298a7",
          "value": "A peça possui defeito?"
        },
        {
          "id": "d7af6481-646c-444c-b183-76d59ef7e30c",
          "value": "Existe outra cor?"
        },
        {
          "id": "9cbfe9db-60c9-4b73-bf01-8abea985da7f",
          "value": ""
        },
        {
          "id": "189d0ee3-4e68-486a-90ad-c69dddb6a25c",
          "value": "Repintar"
        },
        {
          "id": "0d69f9f4-3d77-4838-9e5f-7500adc190e4",
          "value": "Remover resina"
        },
        {
          "id": "230d4d3e-b0b3-404a-9030-56af1062fa47",
          "value": "Aquecer peça "
        },
        {
          "id": "8d9e656c-2238-409a-8cdd-210b033805d5",
          "value": "Enviar para embalagem/ costura"
        },
        {
          "id": "3d7caec8-e775-45a9-8e92-d2eceb67f7b2",
          "value": "Secar"
        },
        {
          "id": "0f2b43f5-a59d-4b07-bf04-bc5a395ccf81",
          "value": "Inspecionar peça"
        },
        {
          "id": "a9e4ada0-bea7-44b4-a718-66d85433f547",
          "value": ""
        },
        {
          "id": "22a9e193-0422-4c36-bbbf-9c72de7d3bf7",
          "value": ""
        },
        {
          "id": "9007d5fc-ebec-49d7-949f-45059bc6aff1",
          "value": ""
        },
        {
          "id": "0a9fe76f-3e16-40b6-9368-80d5231ac6cc",
          "value": ""
        },
        {
          "id": "f7601c7f-6aed-4f65-9637-a3b6e7d59873",
          "value": ""
        },
        {
          "id": "68cf1ac9-0105-4a98-9148-caa7ea71cc36",
          "value": ""
        },
        {
          "id": "f8576a59-5783-4207-9b4c-cf4f9032adad",
          "value": "Não"
        },
        {
          "id": "932a61e8-ac7a-4223-89a1-67fd28197422",
          "value": ""
        },
        {
          "id": "bf564a44-1905-4b22-8ec7-518b531287a7",
          "value": "Sim"
        },
        {
          "id": "8a7575e2-5abb-4519-83c6-13fb8f689965",
          "value": ""
        },
        {
          "id": "5bd26332-9f9e-4c07-a534-13e63b0bbe32",
          "value": ""
        },
        {
          "id": "62a9fb2a-ea50-4da3-93f1-5920dc0ac0a9",
          "value": ""
        },
        {
          "id": "a6907679-35bb-4e54-a1bf-45a9e531aebf",
          "value": "Sim"
        },
        {
          "id": "466bbede-5cf9-41ac-a271-6536ce39a299",
          "value": ""
        },
        {
          "id": "788dc4ff-0930-4774-9b77-d851e870cc6e",
          "value": "Sim"
        },
        {
          "id": "802c619b-c337-41c0-ad6b-dd121e861325",
          "value": "Não"
        },
        {
          "id": "a31bc1ed-ed53-4f98-93be-c4db7ac47295",
          "value": ""
        },
        {
          "id": "2329f308-0fda-498a-ba8e-b9e201750341",
          "value": ""
        },
        {
          "id": "f20e8787-740a-4962-a805-622e80d52b29",
          "value": ""
        },
        {
          "id": "ccf3cf42-f6e9-4f7a-a8db-1a4429261c86",
          "value": ""
        },
        {
          "id": "4aad8682-af04-4041-974e-61428434447f",
          "value": "Não"
        },
        {
          "id": "7516fc09-016c-4c85-bdb4-b324492796f5",
          "value": "Sim"
        },
        {
          "id": "c2406f81-ab7c-42e2-a48b-9437f2fb567d",
          "value": ""
        },
        {
          "id": "44c93f4e-fe86-4b65-8ff8-6cd02e22570a",
          "value": "Não"
        }
      ]
    }
  ]
};
