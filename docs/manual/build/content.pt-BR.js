// Texto do manual do usuário do QRcode tool (português do Brasil).
// Marcações: **negrito**, [[Tecla]], `código`. Os nomes de figura se referem a shots/<idioma>/ (veja figures.js).

module.exports = {
  lang: 'pt-BR',
  font: 'Segoe UI',
  monoFont: 'Consolas',
  file: 'QRcode-tool-User-Manual-pt-BR',
  docTitle: 'Manual do usuário do QRcode tool',
  cover: {
    title: 'QRcode tool',
    subtitle: 'Manual do usuário',
    tagline: 'Escaneie códigos QR no computador com a mesma facilidade do celular.',
    edition: 'Versão 1.0.0   |   outubro de 2026',
    platforms: 'Para Windows 10 (21H2 ou posterior) / Windows 11, macOS 13 ou posterior e Linux',
  },
  back: {
    heading: 'Escaneie. Confira. Depois abra.',
    body: [
      'O QRcode tool é um leitor de desktop gratuito e de código aberto. Ele lê códigos QR e códigos de barras da tela, da webcam, da área de transferência e de arquivos de imagem, e verifica cada endereço da web em busca de truques comuns antes de abrir qualquer coisa.',
      'Tudo acontece no seu computador. O programa não coleta dados de uso e nunca envia para a internet o que você escaneia.',
    ],
    links: [
      ['Página do projeto', 'https://github.com/naritaroad/qrcode-tool'],
      ['Versão mais recente', 'https://github.com/naritaroad/qrcode-tool/releases/latest'],
      ['Relatar um problema', 'https://github.com/naritaroad/qrcode-tool/issues'],
    ],
    license: 'O software é distribuído sob a licença MIT ou Apache-2.0. Este manual pode ser copiado e adaptado nas mesmas condições.',
    trademark: 'QR Code é uma marca registrada da DENSO WAVE INCORPORATED. O QRcode tool não é afiliado à DENSO WAVE, ao Google nem à Microsoft.',
  },
  labels: {
    toc: 'Sumário',
    chapter: (n) => `Capítulo ${n}`,
    appendix: (l) => `Apêndice ${l}`,
    figure: (id) => `Figura ${id}`,
    tip: 'Dica',
    note: 'Observação',
    header: 'Manual do usuário do QRcode tool',
    tocHint: '(No Word, clique com o botão direito no sumário e escolha Atualizar campo para atualizar os números de página.)',
  },
  blocks: [
    // ───────────────────────── 1 ─────────────────────────
    { h1: 'Conheça o QRcode tool' },
    { p: 'O QRcode tool é um pequeno programa de desktop que fica na bandeja do sistema e lê códigos QR e códigos de barras da tela. Quando você pressiona o atalho, a tela congela por um instante e cada código recebe uma etiqueta de resultado que mostra o tipo de conteúdo e, no caso de links, o nome real do site. Pressione [[Enter]] ou clique na etiqueta para abrir o link, entrar na rede Wi-Fi ou salvar o contato.' },
    { p: 'Ele também lê códigos mostrados à webcam, imagens da área de transferência e arquivos de imagem, e inclui um gerador simples de códigos QR.' },
    { h2: 'Principais recursos' },
    {
      table: {
        cols: [26, 74],
        head: ['Recurso', 'Descrição'],
        rows: [
          ['Escanear a tela inteira', 'Congela todos os monitores, encontra cada código automaticamente e coloca uma etiqueta nele. Funciona também com vídeos e jogos.'],
          ['Selecionar área', 'Arraste um retângulo em volta de um único código. Use para códigos pequenos, borrados ou inclinados demais para serem encontrados automaticamente.'],
          ['Webcam', 'Mostre à câmera um código impresso ou a tela de um celular; o resultado aparece assim que o código é reconhecido.'],
          ['Área de transferência e arquivos de imagem', 'Lê uma captura de tela que você acabou de copiar ou arquivos PNG, JPEG, BMP, GIF e WebP.'],
          ['Entende o conteúdo', 'Reconhece links, Wi-Fi, contatos, email, números de telefone, mensagens de texto, locais no mapa, chaves de verificação em duas etapas, endereços de pagamento e notas fiscais eletrônicas de Taiwan, e oferece os botões correspondentes.'],
          ['Verificações de segurança', 'Antes de abrir um link, verifica se ele usa conexão sem criptografia, endereço disfarçado, letras parecidas, endereço IP, link encurtado ou outros truques comuns. Tudo é verificado off-line.'],
          ['Criar códigos QR', 'Transforma um texto ou link em um código QR que você pode copiar ou salvar como PNG ou SVG.'],
          ['Barra de ferramentas e bolha flutuantes', 'Uma barra que fica no topo da tela (horizontal) ou na borda direita ou esquerda (vertical), e que pode ser recolhida em uma pequena bolha redonda.'],
          ['Idiomas', 'Inglês, chinês tradicional, chinês simplificado, japonês, coreano, espanhol, português (Brasil), francês, alemão e russo.'],
        ],
      },
    },
    { h2: 'Requisitos do sistema' },
    {
      table: {
        cols: [30, 70],
        head: ['Sistema operacional', 'Requisitos e observações'],
        rows: [
          ['Windows', 'Windows 10 21H2 ou posterior, Windows 11. x64 e ARM64. A instalação não exige direitos de administrador.'],
          ['macOS', 'macOS 13 ou posterior (Apple silicon e Intel). A primeira leitura exige a permissão de Gravação de Tela; a leitura pela webcam exige a permissão de Câmera.'],
          ['Linux', 'Todos os recursos no X11. No Wayland, a leitura é iniciada por um atalho de teclado configurado nas configurações da área de trabalho (veja o capítulo 4).'],
          ['Hardware', 'Qualquer computador de escritório comum. A webcam é opcional. Ocioso, o programa usa menos de cerca de 30 MB de memória.'],
        ],
      },
    },
    { h2: 'Princípios de privacidade e segurança' },
    {
      ul: [
        'A decodificação e a verificação de links são feitas no seu computador. O conteúdo escaneado nunca é enviado, e nenhum serviço da web é consultado sobre a reputação de um endereço.',
        'A única conexão de rede é a verificação automática de atualizações, que é opcional e só pergunta ao GitHub se existe uma versão mais nova.',
        'O histórico de leituras vem desativado. Mesmo ativado, senhas de Wi-Fi e chaves de verificação em duas etapas nunca são armazenadas.',
        'Só endereços `http` e `https` podem ser abertos. Outros tipos de link só podem ser copiados; nunca são entregues ao sistema.',
        'Um link com aviso sempre mostra os detalhes primeiro e espera por você.',
      ],
    },
    { h2: 'Convenções deste manual' },
    {
      ul: [
        'Botões, opções e nomes de janela aparecem em **negrito**, por exemplo **Configurações** ou **Escanear a tela inteira**.',
        'As teclas aparecem como teclas, por exemplo [[Enter]] ou [[Ctrl+Alt+Q]].',
        '**Configurações › Geral** significa: abra a janela **Configurações** e escolha a página **Geral** à esquerda.',
        'As imagens mostram o Windows 11. O macOS e o Linux funcionam da mesma forma; só mudam a aparência das molduras das janelas e dos menus do sistema.',
      ],
    },

    // ───────────────────────── 2 ─────────────────────────
    { h1: 'Instalação e primeira execução' },
    { h2: 'Baixar e instalar (Windows)' },
    {
      ol: [
        'Abra a página de versões no GitHub (https://github.com/naritaroad/qrcode-tool/releases/latest).',
        'Baixe `QRcodeTool-win-x64-Setup.exe` para a maioria dos computadores, ou `QRcodeTool-win-arm64-Setup.exe` para computadores com processador ARM.',
        'Execute o arquivo baixado. O QRcode tool é instalado só para a sua conta de usuário e não precisa de direitos de administrador.',
        'Ao final da instalação, o QRcode tool é iniciado e mostra a tela de boas-vindas.',
      ],
    },
    { tip: 'Se preferir não instalar nada, baixe o arquivo `Portable.zip`, extraia e execute o programa diretamente. A versão portátil não se atualiza sozinha.' },
    { h2: 'Se o Windows mostrar “O Windows protegeu o computador”' },
    { p: 'As versões atuais ainda não têm assinatura de código, então o Windows SmartScreen pode avisar sobre um editor desconhecido. Isso é comum em programas novos sem assinatura.' },
    {
      ol: [
        'No aviso, clique em **Mais informações**.',
        'Confira se o nome do aplicativo é QRcode tool e clique em **Executar assim mesmo**.',
      ],
    },
    { p: 'Para ter certeza de que o download não foi alterado, execute o comando a seguir no PowerShell e compare o resultado com o arquivo `SHA256SUMS` da página da versão:' },
    { code: 'Get-FileHash .\\QRcodeTool-win-x64-Setup.exe -Algorithm SHA256' },
    { h2: 'macOS e Linux' },
    { p: '**macOS:** baixe e instale o arquivo `.pkg`. As versões ainda não são autenticadas pela Apple; por isso, na primeira vez, clique com o botão direito no app e escolha **Abrir**. Na primeira leitura, permita o QRcode tool em **Ajustes do Sistema › Privacidade e Segurança › Gravação de Tela**, e em **Câmera** se quiser usar a webcam.' },
    { p: '**Linux:** baixe o arquivo `.AppImage`, torne-o executável e execute-o. O GNOME precisa da extensão “AppIndicator and KStatusNotifierItem Support” para mostrar ícones na bandeja.' },
    { h2: 'A tela de boas-vindas' },
    { p: 'A tela de boas-vindas aparece na primeira execução. Ela mostra as três formas mais comuns de escanear, com seus atalhos, e explica que os links nunca abrem de surpresa.' },
    { fig: 'welcome', cap: 'A tela de boas-vindas na primeira execução', width: 11 },
    {
      ul: [
        '**Idioma:** segue o sistema operacional por padrão. A mudança vale na hora.',
        '**Iniciar com o computador:** ativado por padrão, para que o atalho esteja sempre pronto. Você pode desativar aqui ou depois em **Configurações › Geral**.',
        '**Experimente agora:** fecha a tela de boas-vindas e escaneia a tela inteira uma vez.',
        '**Fechar:** fecha a tela de boas-vindas e mostra a barra de ferramentas flutuante.',
      ],
    },
    { p: 'Para ver a tela de boas-vindas de novo, abra **Configurações › Geral** e clique em **Mostrar a tela de boas-vindas novamente**.' },
    { h2: 'O ícone da bandeja' },
    { p: 'O QRcode tool não tem uma janela principal tradicional. Depois de iniciado, o ícone dele aparece na bandeja do sistema, no canto direito da barra de tarefas, e todos os recursos podem ser acessados por ali.' },
    {
      ul: [
        '**Clicar no ícone:** escaneia a tela inteira na hora.',
        '**Clicar com o botão direito:** abre o menu (figura 2-2).',
        '**Passar o mouse sobre o ícone:** mostra o atalho de leitura atual.',
      ],
    },
    { fig: 'tray-menu', cap: 'O menu do ícone da bandeja', width: 11 },
    { tip: 'O Windows pode esconder ícones novos da bandeja atrás da seta “^”. Arraste o ícone para a barra de tarefas para mantê-lo visível.' },

    // ───────────────────────── 3 ─────────────────────────
    { h1: 'Escanear a tela' },
    { h2: 'Escanear a tela inteira' },
    {
      ol: [
        'Verifique se a página, o documento, o vídeo ou a imagem com o código QR está visível.',
        'Pressione [[Ctrl+Alt+Q]], clique no ícone da bandeja ou clique em **Escanear a tela inteira** na barra flutuante.',
        'A tela congela e escurece. Depois de uma rápida varredura, cada código encontrado recebe uma etiqueta de resultado.',
        'Pressione [[Enter]] para abrir o código selecionado ou clique na etiqueta desejada.',
        'Pressione [[Esc]] ou clique com o botão direito para sair da tela de leitura.',
      ],
    },
    { fig: 'scan-screen', cap: 'Escanear a tela inteira: cada código recebe uma etiqueta; o primeiro fica selecionado' },
    { p: 'O indicador de status no topo mostra quantos códigos foram encontrados. A cor dos colchetes em volta de cada código indica o resultado das verificações:' },
    {
      table: {
        cols: [22, 78],
        head: ['Cor dos colchetes', 'Significado'],
        rows: [
          ['Branco', 'Nada suspeito foi encontrado.'],
          ['Cor de destaque (azul)', 'O código selecionado. [[Enter]] abre esse código.'],
          ['Amarelo', 'Algo merece atenção, por exemplo um link http sem criptografia ou um link encurtado. O motivo aparece abaixo da etiqueta.'],
          ['Vermelho', 'O link parece enganoso, por exemplo um endereço disfarçado ou um domínio que mistura alfabetos.'],
        ],
      },
    },
    { p: 'Como a tela fica congelada, também é possível ler códigos em vídeos, apresentações e jogos. Com vários monitores, todos são escaneados ao mesmo tempo.' },
    { h2: 'Selecionar uma área' },
    { p: 'Quando um código é pequeno, borrado ou inclinado, ou quando há muitos códigos na tela, desenhe um retângulo só em volta do que você precisa. A área selecionada é ampliada antes da leitura, o que funciona melhor que a tela inteira para códigos difíceis.' },
    {
      ol: [
        'Pressione [[Ctrl+Alt+A]] ou escolha **Selecionar área** no menu da bandeja ou na barra flutuante.',
        'A tela congela e o ponteiro vira uma cruz. Mantenha o botão esquerdo do mouse pressionado e arraste um retângulo em volta do código.',
        'Solte o botão. Só o conteúdo dentro do retângulo é lido.',
      ],
    },
    { fig: 'scan-region', cap: 'Selecionar área: o tamanho do retângulo aparece enquanto você arrasta' },
    { tip: 'Faça o retângulo um pouco maior que o código; uma margem vazia em volta ajuda. Se aparecer a mensagem “Nenhum código nessa área”, desenhe um retângulo um pouco maior.' },
    { h2: 'A barra da tela de leitura' },
    { p: 'A tela de leitura tem uma fileira de botões no topo. Da esquerda para a direita: **Escanear a tela inteira**, **Selecionar área**, **Escanear com a câmera**, **Escanear imagem da área de transferência**, **Abrir imagem…**, **Criar código QR…**, **Histórico**, **Configurações** e **Fechar**. Dá para trocar de método sem sair da tela de leitura, por exemplo da tela inteira para uma área selecionada. Passe o mouse sobre um botão para ver a descrição e o atalho.' },
    { h2: 'Teclado' },
    { p: 'A tela de leitura pode ser usada inteiramente pelo teclado:' },
    {
      table: {
        cols: [30, 70],
        head: ['Tecla', 'Ação'],
        rows: [
          ['[[Enter]]', 'Abrir o código selecionado.'],
          ['[[Tab]], [[→]], [[↓]]', 'Selecionar o próximo código.'],
          ['[[Shift+Tab]], [[←]], [[↑]]', 'Selecionar o código anterior.'],
          ['[[C]]', 'Copiar o código selecionado.'],
          ['[[F]] ou [[F5]]', 'Procurar novamente na tela inteira.'],
          ['[[Esc]]', 'Cancelar e sair da tela de leitura (clicar com o botão direito também funciona).'],
        ],
      },
    },
    { h2: 'Quando nenhum código é encontrado' },
    {
      ul: [
        'Use **Selecionar área** e desenhe um retângulo só em volta do código; ele é ampliado antes da leitura.',
        'Se o código se move rápido em um vídeo, pause o vídeo primeiro.',
        'Afaste outras janelas, o ponteiro do mouse ou qualquer coisa que cubra parte do código.',
        'Verifique se **Configurações › Escaneamento › Também ler códigos de barras** está ativado se quiser ler códigos de barras e formatos como Data Matrix.',
        'Se o código estiver muito pequeno na tela (menos de cerca de 40 pixels de largura), amplie a página ou a imagem primeiro.',
      ],
    },

    // ───────────────────────── 4 ─────────────────────────
    { h1: 'Outras formas de escanear' },
    { h2: 'Webcam' },
    { p: 'Use a webcam para códigos em papel, cartões de visita ou na tela de outro celular.' },
    {
      ol: [
        'Pressione [[Ctrl+Alt+W]] ou escolha **Escanear com a câmera**.',
        'Mostre o código à câmera a uma distância de cerca de 15 a 30 cm.',
        'Quando um código é reconhecido, aparecem colchetes em volta dele e a etiqueta de resultado entra em uma lista fixa na parte de baixo da imagem.',
        'Clique na etiqueta, ou selecione-a com [[Tab]] e pressione [[Enter]].',
      ],
    },
    { fig: 'camera', cap: 'Escanear com a câmera: os resultados ficam em uma lista fixa na parte de baixo', width: 13 },
    {
      ul: [
        'Um código precisa aparecer em vários quadros seguidos antes de entrar na lista, o que evita leituras erradas.',
        'Depois que um código sai da imagem, o resultado continua na lista por um tempo (8 segundos por padrão), para você ainda poder clicar. Altere o tempo em **Configurações › Câmera**.',
        'Se houver mais de uma câmera conectada, alterne entre elas pela lista na parte de baixo da janela.',
        'A chave **Espelhar** só muda a forma como a imagem é exibida; o reconhecimento funciona do mesmo jeito.',
        'Por padrão, a janela da câmera fecha depois que um código é aberto. Você pode mudar isso em **Configurações › Câmera**.',
      ],
    },
    { note: 'Se a câmera não iniciar, feche outros programas que possam estar usando a câmera (chamadas de vídeo, por exemplo) e permita que o QRcode tool use a câmera nas configurações de privacidade do sistema.' },
    { h2: 'Imagem na área de transferência' },
    {
      ol: [
        'Faça uma captura do código com [[Win+Shift+S]] ou outra ferramenta de captura, ou copie uma imagem de uma página da web.',
        'Escolha **Escanear imagem da área de transferência**.',
        'A imagem aparece em uma janela de visualização, e cada código encontrado recebe uma etiqueta de resultado.',
      ],
    },
    { p: 'Se não houver imagem na área de transferência, o programa pede que você copie uma captura de tela ou imagem primeiro.' },
    { h2: 'Arquivos de imagem' },
    {
      ol: [
        'Escolha **Abrir imagem…**.',
        'Selecione um arquivo PNG, JPEG, BMP, GIF ou WebP.',
        'Clique em uma etiqueta de resultado na janela de visualização. Os botões na parte de baixo abrem outra imagem ou escaneiam a área de transferência.',
      ],
    },
    { fig: 'image-preview', cap: 'A janela de visualização: as etiquetas ficam sobre os códigos da imagem', width: 13 },
    { h2: 'Menu do botão direito do Windows' },
    { p: 'No Windows, o QRcode tool pode adicionar as funções principais ao menu do botão direito (menu de contexto) do Explorador de Arquivos: clique com o botão direito no fundo da área de trabalho para escanear a tela, ou em uma imagem para escanear esse arquivo, sem abrir a barra nem lembrar de atalhos.' },
    {
      figs: [
        ['shell-desktop', 'Botão direito no fundo da área de trabalho'],
        ['shell-image', 'Botão direito em uma imagem'],
      ],
      cap: 'Itens do QRcode tool no menu do botão direito (Windows 11, Mostrar mais opções)',
    },
    { h3: 'Ativar ou desativar o menu do botão direito' },
    { p: 'O menu do botão direito vem **ativado**: os itens aparecem assim que o QRcode tool é instalado e iniciado uma vez. Se você o desativou antes, reative assim:' },
    {
      ol: [
        'Abra **Configurações** pelo menu da bandeja ou pela barra flutuante.',
        'Escolha **Geral** à esquerda.',
        'Ative **Menu do botão direito**. A mudança vale na hora; não é preciso reiniciar o computador nem o Explorador de Arquivos.',
      ],
    },
    { p: 'Desative a mesma chave para remover os itens. Eles ficam nas configurações do seu próprio usuário (a parte HKEY_CURRENT_USER do registro), então não são necessários direitos de administrador e as outras contas do computador não são afetadas.' },
    { h3: 'Abrir o menu' },
    {
      ul: [
        '**Windows 11:** clique com o botão direito e escolha **Mostrar mais opções** no final; os itens do QRcode tool estão no menu completo. Para abrir o menu completo direto, segure [[Shift]] ao clicar com o botão direito ou pressione [[Shift+F10]].',
        '**Windows 10:** os itens do QRcode tool aparecem assim que você clica com o botão direito.',
      ],
    },
    {
      table: {
        cols: [36, 22, 42],
        head: ['Item do menu', 'Onde', 'Ação'],
        rows: [
          ['QRcode tool Digitalizar a tela', 'Fundo da área de trabalho', 'Escaneia a tela inteira (como [[Ctrl+Alt+Q]]).'],
          ['QRcode tool Digitalizar seleção', 'Fundo da área de trabalho', 'Congela a tela para você selecionar uma área (como [[Ctrl+Alt+A]]).'],
          ['QRcode tool Digitalizar com a câmera', 'Fundo da área de trabalho', 'Abre a webcam (como [[Ctrl+Alt+W]]).'],
          ['QRcode tool Barra de ferramentas', 'Fundo da área de trabalho', 'Mostra a barra de ferramentas flutuante.'],
          ['QRcode tool Abrir imagem', 'Arquivos de imagem', 'Escaneia a imagem na janela de visualização. São aceitos PNG, JPEG, BMP, GIF e WebP.'],
        ],
      },
    },
    {
      ul: [
        'Os quatro itens da área de trabalho ficam agrupados no fim do menu, entre separadores, com o ícone do QRcode tool.',
        '**QRcode tool Abrir imagem** só aparece quando exatamente **uma** imagem está selecionada, não para vários arquivos de uma vez.',
        'Os itens usam o idioma do QRcode tool. Depois que você muda **Configurações › Geral › Idioma**, o menu também é atualizado.',
        'Se o QRcode tool não estiver em execução, escolher um item inicia o programa e executa a função; se já estiver em execução, o programa aberto atende o pedido.',
        'Na versão portátil, os itens apontam para o local atual do programa. Depois de mover a pasta portátil, inicie o programa uma vez para que os itens sejam atualizados.',
        'Desinstalar o QRcode tool remove os itens. O macOS e o Linux não têm itens no menu do botão direito; use os atalhos ou a linha de comando.',
      ],
    },
    { tip: 'Se o QRcode tool não aparecer no menu: verifique se **Configurações › Geral › Menu do botão direito** está ativado, escolha **Mostrar mais opções** no Windows 11 e inicie o QRcode tool uma vez se ele acabou de ser instalado ou movido.' },
    { h2: 'Linha de comando' },
    { p: 'Todas as funções de leitura podem ser iniciadas por um comando. Se o programa já estiver em execução, o comando é repassado a ele. Isso é especialmente útil no Linux com Wayland: associe os comandos a atalhos personalizados nas configurações de teclado da área de trabalho.' },
    {
      table: {
        cols: [42, 58],
        head: ['Comando', 'Ação'],
        rows: [
          ['`qrcode-tool`', 'Inicia o programa ou, se já estiver em execução, mostra a barra flutuante.'],
          ['`qrcode-tool scan-screen`', 'Escaneia a tela inteira.'],
          ['`qrcode-tool scan-region`', 'Congela a tela e seleciona uma área.'],
          ['`qrcode-tool scan-camera`', 'Escaneia com a webcam.'],
          ['`qrcode-tool scan-clipboard`', 'Escaneia a imagem da área de transferência.'],
          ['`qrcode-tool scan-file ARQUIVO`', 'Escaneia um arquivo de imagem na janela de visualização.'],
          ['`qrcode-tool toolbar`', 'Mostra ou oculta a barra de ferramentas flutuante.'],
          ['`qrcode-tool bubble`', 'Mostra ou oculta a bolha flutuante.'],
          ['`qrcode-tool generate "TEXTO"`', 'Abre o gerador de códigos QR com o texto preenchido.'],
          ['`qrcode-tool settings`', 'Abre as configurações.'],
          ['`qrcode-tool decode ARQUIVO… [--json]`', 'Mostra no terminal os códigos dos arquivos de imagem sem abrir a interface.'],
          ['`qrcode-tool quit`', 'Encerra o programa em execução.'],
        ],
      },
    },

    // ───────────────────────── 5 ─────────────────────────
    { h1: 'Resultados e detalhes' },
    { h2: 'Etiquetas de resultado' },
    { p: 'Cada código encontrado recebe uma etiqueta de resultado escura. Da esquerda para a direita, ela mostra:' },
    {
      ul: [
        '**Ícone:** o tipo de conteúdo, por exemplo um globo para link, ondas para Wi-Fi ou uma pessoa para contato. Links com aviso mostram um símbolo de aviso ou de perigo no lugar.',
        '**Texto principal:** para links, o nome real do site em vez do endereço completo; para Wi-Fi, o nome da rede; para contatos, o nome.',
        '**Segunda linha:** o tipo de conteúdo ou o principal motivo de um aviso.',
        '**Botão ›:** sempre abre o cartão de detalhes, seja qual for o conteúdo.',
      ],
    },
    { h2: 'O que Enter ou um clique fazem' },
    {
      table: {
        cols: [36, 64],
        head: ['Conteúdo', 'Ação'],
        rows: [
          ['Link sem avisos', 'Abre no navegador padrão.'],
          ['Link com aviso', 'Mostra primeiro o cartão de detalhes; o link só abre depois que você confirma.'],
          ['Todo o resto', 'Mostra o cartão de detalhes, onde você escolhe o que fazer.'],
        ],
      },
    },
    { h2: 'O cartão de detalhes' },
    { p: 'O cartão de detalhes lista todos os campos do código e oferece botões adequados ao conteúdo. O botão de copiar ao lado de um campo copia só aquele campo. Campos sensíveis, como senhas, aparecem como “••••”; o botão de cadeado mostra o conteúdo por um instante. Clique fora do cartão ou em **Fechar** para voltar aos resultados.' },
    { fig: 'detail-wifi', cap: 'Cartão de detalhes de um código Wi-Fi: Conectar entra na rede', width: 12 },
    { h2: 'Botões para cada tipo de conteúdo' },
    {
      table: {
        cols: [30, 70],
        head: ['Tipo', 'Botões'],
        rows: [
          ['Link', '**Abrir**, **Copiar**. Links sem avisos para sites que você ainda não marcou como confiáveis também oferecem **Sempre permitir este site**.'],
          ['Rede Wi-Fi', '**Conectar** (o sistema cria o perfil de rede), **Copiar senha**.'],
          ['Contato (vCard, MeCard)', '**Salvar contato** (salva um arquivo .vcf que você pode importar nos contatos), **Copiar**.'],
          ['Email', '**Escrever email** (abre o programa de email padrão), **Copiar**.'],
          ['Número de telefone', '**Ligar** (repassado ao app de chamadas do sistema), **Copiar**.'],
          ['Mensagem de texto', '**Enviar mensagem**, **Copiar**.'],
          ['Local', '**Abrir mapa**, **Copiar**.'],
          ['Chave de verificação em duas etapas', 'Só o nome do serviço e a conta são exibidos; **Copiar** está disponível. O segredo em si nunca é exibido nem armazenado.'],
          ['Endereço de pagamento', '**Copiar**. Sempre confira um endereço de pagamento antes de enviar dinheiro.'],
          ['Nota fiscal eletrônica', '**Copiar número da nota**, **Copiar**.'],
          ['Link bloqueado', 'Links que não sejam `http` nem `https` (por exemplo `file:` ou `javascript:`) só podem ser copiados, nunca abertos.'],
          ['Texto e códigos de barras', '**Copiar**. Nos códigos de barras, o formato (por exemplo EAN-13) também é exibido.'],
        ],
      },
    },
    { h2: 'Notas fiscais eletrônicas de Taiwan' },
    { p: 'Uma nota fiscal eletrônica de Taiwan tem dois códigos QR lado a lado. O código da esquerda contém o número da nota, a data, os valores e alguns itens; o da direita contém os itens restantes. Quando **Escanear a tela inteira** ou **Abrir imagem…** encontra os dois códigos, eles são unidos em uma única nota, e o cartão de detalhes lista o número da nota, a data, o código aleatório, o total, o imposto, as identificações do vendedor e do comprador e todos os itens. Se só o código da esquerda for encontrado, o cartão lembra você de escanear também o da direita.' },
    { h2: 'Dados sensíveis' },
    { p: 'Chaves de verificação em duas etapas e senhas de Wi-Fi são dados sensíveis. Mesmo com o histórico ou **Copiar o resultado automaticamente** ativados, elas nunca são gravadas no histórico, nunca são copiadas automaticamente e nunca são gravadas nos arquivos de log do programa.' },

    // ───────────────────────── 6 ─────────────────────────
    { h1: 'Segurança dos links' },
    { p: 'Códigos QR maliciosos costumam levar a sites falsos. O QRcode tool analisa cada endereço da web no seu computador antes de mostrar o resultado e marca o que encontra direto na etiqueta e no cartão de detalhes. Nada é consultado on-line e nenhum endereço é enviado a qualquer serviço.' },
    { h2: 'Confira o nome do site antes de abrir' },
    { p: 'A etiqueta de resultado mostra o nome real do site contido no endereço. Antes de abrir qualquer link, confirme que é o site esperado. Links com aviso mostram primeiro o cartão de detalhes, com um aviso colorido no topo explicando o que observar.' },
    { fig: 'detail-warning', cap: 'Um link com avisos: um link encurtado sem criptografia mostra os motivos e espera por você', width: 12 },
    { h2: 'Níveis de aviso' },
    {
      table: {
        cols: [18, 82],
        head: ['Nível', 'O que o programa faz'],
        rows: [
          ['Informação', 'Por exemplo, um endereço muito longo. Aparece só no cartão de detalhes; [[Enter]] abre o link diretamente.'],
          ['Aviso', 'Colchetes e ícone amarelos. [[Enter]] ou um clique mostram primeiro o cartão de detalhes; depois você clica em **Abrir**.'],
          ['Perigo', 'Colchetes e ícone vermelhos. **Abrir** deixa de ser o botão padrão e, depois de clicar nele, é preciso confirmar com **Abrir mesmo assim**.'],
        ],
      },
    },
    { h2: 'O que é verificado' },
    {
      table: {
        cols: [30, 12, 58],
        head: ['Mensagem exibida', 'Nível', 'Explicação e conselho'],
        rows: [
          ['Não criptografado (http)', 'Aviso', 'A conexão não é criptografada, então os dados podem ser lidos ou alterados no caminho. Não digite senhas nem dados de pagamento nessas páginas.'],
          ['Endereço disfarçado', 'Perigo', 'Um nome que parece confiável é colocado antes de um “@”, mas o link na verdade leva ao site depois dele, por exemplo `https://bank.example.com@login-check.example.net/`.'],
          ['Nome de domínio internacional', 'Aviso', 'O domínio contém letras não latinas. O cartão também mostra o endereço codificado real (começando com `xn--`) para você conferir.'],
          ['Letras parecidas', 'Perigo', 'Uma parte do domínio mistura alfabetos, por exemplo um “а” cirílico no lugar de um “a” latino. É um truque comum de sites falsos.'],
          ['Endereço IP', 'Aviso', 'O endereço usa números em vez do nome de um site, algo raro em sites comuns.'],
          ['Porta incomum', 'Aviso', 'O endereço especifica um número de porta fora do padrão.'],
          ['Link encurtado', 'Aviso', 'Serviços como bit.ly escondem o destino real. O link não é expandido on-line, porque isso diria ao serviço o que você escaneou. Abra links encurtados só de fontes confiáveis.'],
          ['Endereço muito longo', 'Informação', 'Endereços muito longos podem empurrar o nome real do site para fora da vista.'],
          ['Muitos caracteres codificados', 'Informação', 'Muitas sequências “%” podem ser usadas para esconder o que um endereço contém.'],
          ['Muitos subdomínios', 'Informação', 'Por exemplo `login.bank.example.com.secure-check.example.net`, que à primeira vista pode parecer o site de um banco.'],
        ],
      },
    },
    { h2: 'Links enganosos' },
    { p: 'Para links classificados como **Perigo**, o cartão de detalhes diz em vermelho que o link parece enganoso e lista os motivos. Confie no nome real do site mostrado no cartão, não no texto impresso ao lado do código.' },
    { fig: 'detail-danger', cap: 'Um endereço disfarçado: parece um banco, mas leva a login-check.example.net', width: 12 },
    { p: 'Se tiver certeza de que quer continuar, clique em **Abrir**. O cartão pergunta mais uma vez; só **Abrir mesmo assim** abre de fato a página.' },
    { h2: 'Sites confiáveis e abertura automática' },
    { p: 'Você pode adicionar aos sites confiáveis os que usa com frequência, como o domínio da sua escola ou empresa. Assim, um link abre logo depois da leitura, sem esperar pelo [[Enter]], quando tudo isto for verdade:' },
    {
      ul: [
        'Só um código foi encontrado.',
        'O link não tem avisos.',
        'O site (ou um de seus subdomínios) está na lista de confiáveis.',
        '**Configurações › Escaneamento › Abrir sites confiáveis sem perguntar** está ativado (o padrão).',
      ],
    },
    { p: 'Adicione um site com **Sempre permitir este site** no cartão de detalhes de um link sem avisos, ou digite o domínio em **Configurações › Escaneamento**.' },
    { fig: 'detail-link', cap: 'Um link sem avisos: abra-o ou adicione o site à lista de confiáveis', width: 12 },

    // ───────────────────────── 7 ─────────────────────────
    { h1: 'Barra de ferramentas e bolha flutuantes' },
    { p: 'A barra de ferramentas flutuante fica acima das outras janelas, para que cada função esteja a um clique. Ela nunca aparece nas capturas escaneadas. Mostre ou oculte a barra com **Barra de ferramentas flutuante** no menu da bandeja, com o atalho [[Ctrl+Alt+E]] ou com o comando `qrcode-tool toolbar`.' },
    { h2: 'Botões da barra' },
    { fig: 'toolbar-row', cap: 'Barra horizontal: passe o mouse sobre um botão para ver o nome e o atalho embaixo', width: 11 },
    {
      table: {
        cols: [34, 66],
        head: ['Botão', 'Ação'],
        rows: [
          ['(alça pontilhada no início)', 'Segure e arraste para mover a barra.'],
          ['Escanear a tela inteira', 'O mesmo que [[Ctrl+Alt+Q]].'],
          ['Selecionar área', 'O mesmo que [[Ctrl+Alt+A]].'],
          ['Escanear com a câmera', 'O mesmo que [[Ctrl+Alt+W]]. Fica acinzentado quando nenhuma câmera é encontrada.'],
          ['Escanear imagem da área de transferência', 'Lê a imagem da área de transferência.'],
          ['Abrir imagem…', 'Escolha um arquivo de imagem e escaneie.'],
          ['Criar código QR…', 'Abre o gerador de códigos QR.'],
          ['Histórico', 'Abre **Configurações › Privacidade e histórico**.'],
          ['Configurações', 'Abre as configurações.'],
          ['Manual do usuário (botão “?”)', 'Abre o manual do usuário em PDF no GitHub em uma nova guia do navegador, no idioma da interface.'],
          ['Recolher para bolha', 'Oculta a barra e mostra a pequena bolha redonda no lugar.'],
          ['Fechar barra de ferramentas', 'Oculta a barra (a bolha não aparece). O programa continua em execução na bandeja.'],
        ],
      },
    },
    { h2: 'Barra vertical (direita ou esquerda)' },
    { p: 'Além do layout horizontal padrão no topo da tela, a barra pode ser uma coluna vertical na borda direita ou esquerda. A coluna ocupa menos largura, o que combina com telas largas e deixa o topo das páginas livre.' },
    {
      figs: [
        ['toolbar-right', 'Vertical, à direita (posição vertical padrão)'],
        ['toolbar-left', 'Vertical, à esquerda'],
      ],
      cap: 'Barra vertical: o nome e o atalho do botão apontado aparecem abaixo dos botões',
    },
    { p: 'Para mudar o layout:' },
    {
      ol: [
        'Abra **Configurações** e escolha **Geral**.',
        'Na seção **Barra de ferramentas e bolha flutuantes**, encontre **Layout da barra de ferramentas**.',
        'Escolha **Horizontal, no topo**, **Vertical, à direita** ou **Vertical, à esquerda**.',
      ],
    },
    { p: 'A mudança vale na hora. A barra vai para a posição padrão do novo layout: centralizada no topo no layout horizontal, centralizada verticalmente na borda escolhida no vertical. Depois você ainda pode arrastá-la para qualquer lugar.' },
    { h2: 'Mover a barra' },
    { p: 'Segure a alça pontilhada em uma das pontas da barra e arraste. O programa lembra a última posição e mostra a barra ali da próxima vez. Se essa posição não estiver mais em nenhum monitor, por exemplo depois de desconectar uma tela externa, a barra volta à posição padrão.' },
    { h2: 'A bolha flutuante' },
    { p: 'A bolha flutuante é a barra recolhida. Ela ocupa só um pequeno círculo e aparece por padrão na borda direita da tela.' },
    { fig: 'bubble', cap: 'A bolha flutuante', width: 8 },
    {
      table: {
        cols: [30, 70],
        head: ['Ação', 'Resultado'],
        rows: [
          ['Clicar', 'Expande para a barra de ferramentas flutuante completa.'],
          ['Segurar por cerca de meio segundo', 'Escaneia a tela inteira.'],
          ['Clicar com o botão direito', 'Abre um menu: **Escanear a tela inteira**, **Selecionar área**, **Escanear com a câmera**, **Escanear imagem da área de transferência**, **Mostrar barra de ferramentas**, **Ocultar bolha**.'],
          ['Arrastar', 'Move a bolha.'],
        ],
      },
    },
    { p: 'Para mostrar a bolha sempre que o programa iniciar, ative **Configurações › Geral › Mostrar a bolha quando o aplicativo iniciar**. A barra e a bolha nunca aparecem juntas.' },
    { h2: 'Ocultar durante aplicativos em tela inteira' },
    { p: 'No Windows, a barra e a bolha se escondem enquanto você assiste a um vídeo em tela inteira, faz uma apresentação ou joga, e voltam quando você sai da tela inteira. Desative isso em **Configurações › Geral › Ocultar durante aplicativos em tela inteira**.' },

    // ───────────────────────── 8 ─────────────────────────
    { h1: 'Criar códigos QR' },
    { p: 'O gerador de códigos QR transforma um link ou um texto em um código QR que você pode escanear com o celular ou colocar em documentos e apresentações.' },
    {
      ol: [
        'Escolha **Criar código QR…** no menu da bandeja, na barra flutuante ou na tela de leitura.',
        'Digite ou cole o conteúdo em **Texto ou link**. O código QR aparece na hora, à direita.',
        'Se necessário, escolha um nível de **Correção de erros**.',
        'Clique em **Copiar imagem** para copiar o código para a área de transferência, ou em **Salvar PNG…** ou **Salvar SVG…** para salvar como arquivo.',
      ],
    },
    { fig: 'generator', cap: 'O gerador de códigos QR', width: 13 },
    { h2: 'Correção de erros' },
    { p: 'Um nível mais alto permite ler o código mesmo com parte dele danificada ou coberta por um logotipo, mas deixa o código mais denso e maior.' },
    {
      table: {
        cols: [36, 64],
        head: ['Nível', 'Quando usar'],
        rows: [
          ['Baixa — código menor', 'Muito conteúdo que só será exibido na tela.'],
          ['Média — recomendada', 'O padrão para uso geral.'],
          ['Quartil', 'Códigos impressos em objetos que podem ser riscados.'],
          ['Alta — resiste a danos ou a um logotipo', 'Quando um logotipo vai ficar no meio do código, ou quando é preciso o máximo de robustez.'],
        ],
      },
    },
    { note: 'Um código QR comporta uma quantidade limitada de conteúdo. Se aparecer “Texto demais para um código QR”, encurte o conteúdo ou escolha uma correção de erros menor.' },
    { p: '**PNG** é prático para documentos e slides; **SVG** é um formato vetorial que continua nítido quando impresso em tamanho grande. Pressione [[Esc]] para fechar o gerador.' },

    // ───────────────────────── 9 ─────────────────────────
    { h1: 'Configurações' },
    { p: 'Escolha **Configurações** no menu da bandeja, na barra flutuante ou na tela de leitura. Cada mudança é salva e aplicada na hora; não há botão OK.' },
    { h2: 'Geral' },
    { fig: 'settings-general', cap: 'Configurações › Geral', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Configuração', 'Descrição'],
        rows: [
          ['Idioma', 'Idioma dos menus e mensagens. Segue o sistema operacional por padrão.'],
          ['Tema', '**Usar configuração do sistema**, **Claro** ou **Escuro**. A cor de destaque do sistema é aplicada automaticamente.'],
          ['Iniciar com o computador', 'Inicia discretamente em segundo plano quando você entra no sistema, para que o atalho sempre funcione.'],
          ['Menu do botão direito', '(Só no Windows) Adiciona itens do QRcode tool aos menus do botão direito da área de trabalho e dos arquivos de imagem. Ativado por padrão; veja “Menu do botão direito do Windows” no capítulo 4.'],
          ['Layout da barra de ferramentas', '**Horizontal, no topo**, **Vertical, à direita** ou **Vertical, à esquerda**. Veja o capítulo 7.'],
          ['Mostrar a bolha quando o aplicativo iniciar', 'Mostra a bolha flutuante na inicialização.'],
          ['Ocultar durante aplicativos em tela inteira', '(Só no Windows) Oculta a barra e a bolha durante vídeos, apresentações e jogos em tela inteira.'],
          ['Verificar atualizações automaticamente', 'Pergunta ao GitHub uma vez por dia se existe uma versão nova. Nada é instalado sem perguntar a você.'],
          ['Mostrar a tela de boas-vindas novamente', 'Abre a tela de boas-vindas da primeira execução.'],
        ],
      },
    },
    { h2: 'Escaneamento' },
    { fig: 'settings-scanning', cap: 'Configurações › Escaneamento', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Configuração', 'Descrição'],
        rows: [
          ['Copiar o resultado automaticamente', 'Quando exatamente um código é encontrado, o conteúdo vai para a área de transferência. Conteúdo sensível nunca é copiado. Desativado por padrão.'],
          ['Tocar um som quando um código for encontrado', 'Toca um som curto. Desativado por padrão.'],
          ['Também ler códigos de barras', 'Além de códigos QR, lê EAN, UPC, Code 128, Data Matrix, PDF417, Aztec e outros. Ativado por padrão.'],
          ['Abrir sites confiáveis sem perguntar', 'Abre automaticamente links para sites confiáveis nas condições descritas no capítulo 6.'],
          ['Sites confiáveis', 'Digite um domínio (por exemplo example.com) e clique em **Adicionar**. Os subdomínios também passam a ser confiáveis. O ícone de lixeira remove um item.'],
        ],
      },
    },
    { h2: 'Câmera' },
    { fig: 'settings-camera', cap: 'Configurações › Câmera', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Configuração', 'Descrição'],
        rows: [
          ['Câmera', 'A webcam que será usada.'],
          ['Espelhar a imagem', 'Mostra a câmera como um espelho. O reconhecimento funciona do mesmo jeito.'],
          ['Manter resultados na tela (segundos)', 'Por quanto tempo (de 0 a 60 segundos) um resultado continua na lista depois que o código sai da imagem. Com 0, só os códigos visíveis no momento são listados.'],
          ['Fechar a câmera depois que um código for aberto', 'Fecha a janela da câmera assim que um código é aberto ou usado.'],
        ],
      },
    },
    { h2: 'Atalhos' },
    { fig: 'settings-shortcuts', cap: 'Configurações › Atalhos', width: 14 },
    {
      table: {
        cols: [34, 22, 44],
        head: ['Ação', 'Padrão', 'Descrição'],
        rows: [
          ['Escanear a tela inteira', '[[Ctrl+Alt+Q]]', 'Congela e escaneia todos os monitores.'],
          ['Selecionar área', '[[Ctrl+Alt+A]]', 'Congela a tela para você arrastar um retângulo.'],
          ['Escanear com a câmera', '[[Ctrl+Alt+W]]', 'Abre a janela da webcam.'],
          ['Mostrar ou ocultar a barra de ferramentas', '[[Ctrl+Alt+E]]', 'Alterna a barra de ferramentas flutuante.'],
        ],
      },
    },
    { p: 'Para mudar um atalho:' },
    {
      ol: [
        'Clique no atalho que deseja mudar. O botão mostra **Pressione as teclas… (Esc para cancelar)**.',
        'Pressione a nova combinação de teclas. Ela precisa incluir pelo menos uma destas: [[Ctrl]], [[Alt]], [[Shift]] ou [[Win]] (no Mac, [[Cmd]]).',
        'O novo atalho vale na hora.',
      ],
    },
    { p: 'Se outro aplicativo já usa a combinação, a linha mostra “Já usado por outro aplicativo — escolha outro.”. Escolha outra combinação. **Restaurar padrões** traz de volta todos os atalhos padrão. A seção **Durante o escaneamento**, embaixo, lista as teclas da tela de leitura, as mesmas do capítulo 3.' },
    { h2: 'Privacidade e histórico' },
    { fig: 'settings-privacy', cap: 'Configurações › Privacidade e histórico (com o histórico ativado)', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Configuração', 'Descrição'],
        rows: [
          ['Manter um histórico de escaneamentos', 'Fica só neste computador. Senhas de Wi-Fi e chaves de verificação em duas etapas nunca são salvas. Desativado por padrão.'],
          ['Número de itens a manter', 'De 5 a 500 itens. Os mais antigos são removidos primeiro.'],
          ['Escaneamentos recentes', 'Os mais novos primeiro. Links sem avisos podem ser abertos de novo com **Abrir**; qualquer item pode ser copiado com **Copiar**.'],
          ['Limpar histórico', 'Apaga todo o histórico.'],
        ],
      },
    },
    { h2: 'Sobre' },
    { fig: 'settings-about', cap: 'Configurações › Sobre', width: 14 },
    {
      ul: [
        'Mostra a versão atual. **Verificar atualizações** verifica na hora.',
        'Links para o código-fonte, para relatar problemas, para a política de privacidade e para as licenças de código aberto.',
        '**Abrir a pasta de configurações** e **Abrir a pasta de logs** abrem essas pastas diretamente, para fazer backup das configurações ou anexar arquivos de log a um relato de problema.',
      ],
    },

    // ───────────────────────── 10 ─────────────────────────
    { h1: 'Atualizar e desinstalar' },
    { h2: 'Verificar e instalar atualizações' },
    { p: 'Cópias instaladas pelo instalador podem se atualizar sozinhas. Com **Verificar atualizações automaticamente** ativado, o programa pergunta ao GitHub uma vez por dia. Você também pode clicar em **Verificar atualizações** no menu da bandeja ou em **Configurações › Sobre** a qualquer momento.' },
    { fig: 'message-update', cap: 'A mensagem mostrada quando há uma versão nova', width: 10 },
    {
      ol: [
        'Quando aparecer a mensagem **Atualização disponível**, clique em **Atualizar agora**.',
        'A nova versão é baixada em segundo plano, e o programa reinicia quando termina.',
        'Clique em **Mais tarde** se não quiser atualizar agora.',
      ],
    },
    { p: 'As atualizações só são instaladas depois que você clica em **Atualizar agora**; o programa nunca instala nada por conta própria.' },
    { h2: 'Versão portátil' },
    { p: 'A versão portátil (`Portable.zip`) não se atualiza sozinha; ao verificar atualizações, aparece “Atualizações não disponíveis”. Baixe a nova versão na página de versões do GitHub e substitua os arquivos antigos. Suas configurações são mantidas.' },
    { h2: 'Desinstalar' },
    {
      ol: [
        'Abra **Configurações › Aplicativos › Aplicativos instalados** do Windows.',
        'Encontre o QRcode tool, clique em **…** e escolha **Desinstalar**.',
        'O item de inicialização e os itens do menu do botão direito também são removidos.',
      ],
    },
    { p: 'Para remover também as configurações e o histórico, abra a pasta de configurações e a pasta de logs em **Configurações › Sobre** antes de desinstalar e apague-as.' },
    { h2: 'Onde ficam as configurações e os logs' },
    {
      table: {
        cols: [18, 82],
        head: ['Sistema', 'Local'],
        rows: [
          ['Windows', 'Configurações: `%APPDATA%\\Lrniey666\\qrcode-tool\\config`\nHistórico e logs: `%LOCALAPPDATA%\\Lrniey666\\qrcode-tool\\data`'],
          ['macOS', '`~/Library/Application Support/io.github.Lrniey666.qrcode-tool`'],
          ['Linux', 'Configurações: `~/.config/qrcode-tool`\nHistórico e logs: `~/.local/share/qrcode-tool`'],
        ],
      },
    },
    { p: 'O arquivo de configurações `settings.toml` é texto simples. Copie-o para levar suas configurações para outro computador.' },

    // ───────────────────────── 11 ─────────────────────────
    { h1: 'Solução de problemas' },
    {
      qa: [
        ['Nada acontece quando pressiono o atalho.', 'Outro aplicativo pode já estar usando esse atalho. Abra **Configurações › Atalhos**; se a linha mostrar “Já usado por outro aplicativo”, escolha outra combinação. Alguns jogos e programas de área de trabalho remota capturam todas as teclas enquanto estão em primeiro plano.'],
        ['A leitura não encontra nenhum código.', 'Use **Selecionar área** e desenhe um retângulo só em volta do código, ou amplie primeiro a página ou a imagem. Veja “Quando nenhum código é encontrado” no capítulo 3.'],
        ['Por que o link não abriu na hora?', 'Um link com aviso sempre mostra os detalhes primeiro, para você conferir o site real. Só links para sites confiáveis sem nenhum aviso abrem automaticamente, e só quando são o único código encontrado.'],
        ['Aparece “Link encurtado — o destino real está oculto”.', 'Serviços de links encurtados escondem o destino real. O programa não consulta isso on-line, porque revelaria o que você escaneou. Abra links encurtados só de fontes confiáveis.'],
        ['Onde está a janela principal?', 'Não existe, de propósito. Use o ícone da bandeja, o atalho, a barra de ferramentas flutuante ou a bolha flutuante.'],
        ['O QRcode tool não aparece no menu do botão direito.', 'Verifique se **Configurações › Geral › Menu do botão direito** está ativado. No Windows 11, os itens ficam em **Mostrar mais opções** (ou segure [[Shift]] ao clicar com o botão direito). **QRcode tool Abrir imagem** só aparece quando uma imagem está selecionada. Se você acabou de instalar o QRcode tool ou moveu a versão portátil, inicie-o uma vez.'],
        ['A barra de ferramentas sumiu.', 'Pressione [[Ctrl+Alt+E]] ou marque **Barra de ferramentas flutuante** no menu da bandeja. Com **Ocultar durante aplicativos em tela inteira** ativado, a barra fica oculta enquanto um programa em tela inteira está em primeiro plano.'],
        ['A câmera não inicia.', 'Feche outros programas que usam a câmera e verifique se as configurações de privacidade do sistema permitem que o QRcode tool a use. Com várias câmeras, escolha a certa em **Configurações › Câmera**.'],
        ['O Wi-Fi não conecta automaticamente.', 'Algumas redes (por exemplo, com autenticação corporativa) não podem ser configuradas pelo programa. Clique em **Copiar senha** no cartão de detalhes e conecte pelo menu de Wi-Fi do sistema.'],
        ['Meu antivírus mostra um aviso.', 'Programas novos sem assinatura que registram atalhos, leem a tela e iniciam com o computador às vezes são sinalizados pela detecção baseada em comportamento. O QRcode tool usa interfaces padrão do sistema e o código-fonte é público. Relate o falso positivo ao fornecedor do antivírus ou abra uma issue no GitHub.'],
        ['No macOS a captura fica preta.', 'Permita o QRcode tool em **Ajustes do Sistema › Privacidade e Segurança › Gravação de Tela** e reinicie o programa. O macOS pode perguntar de novo depois de atualizações do sistema.'],
        ['No Linux com Wayland o atalho não faz nada.', 'O Wayland não permite que programas registrem atalhos globais. Adicione um atalho personalizado nas configurações de teclado da área de trabalho que execute `qrcode-tool scan-screen` ou outro comando.'],
        ['Como abro este manual de novo?', 'Clique no botão **?** (**Manual do usuário**) na barra flutuante; a edição em PDF no GitHub abre em uma nova guia do navegador. Os arquivos Word e PDF também estão na pasta `docs/manual` do repositório no GitHub.'],
        ['Como relato um problema?', 'Clique em **Relatar um problema ou sugerir uma ideia** em **Configurações › Sobre** e descreva seu sistema, os passos e as mensagens que você viu. Você pode anexar arquivos da pasta de logs; os logs contêm só eventos e erros, nunca conteúdo escaneado.'],
      ],
    },

    // ───────────────────────── Apêndices ─────────────────────────
    { h1: 'Atalhos e teclas em resumo', appendix: true },
    {
      table: {
        cols: [30, 26, 44],
        head: ['Onde', 'Tecla', 'Ação'],
        rows: [
          ['Em qualquer lugar', '[[Ctrl+Alt+Q]]', 'Escanear a tela inteira'],
          ['Em qualquer lugar', '[[Ctrl+Alt+A]]', 'Selecionar área'],
          ['Em qualquer lugar', '[[Ctrl+Alt+W]]', 'Escanear com a câmera'],
          ['Em qualquer lugar', '[[Ctrl+Alt+E]]', 'Mostrar ou ocultar a barra flutuante'],
          ['Tela de leitura, visualização', '[[Enter]]', 'Abrir o código selecionado'],
          ['Tela de leitura, visualização', '[[Tab]] / [[Shift+Tab]]', 'Selecionar o próximo / anterior código'],
          ['Tela de leitura, visualização', '[[C]]', 'Copiar o código selecionado'],
          ['Tela de leitura', '[[F]] ou [[F5]]', 'Procurar novamente na tela inteira'],
          ['Tela de leitura, visualização, gerador', '[[Esc]]', 'Fechar'],
        ],
      },
    },
    { p: 'Os atalhos globais podem ser alterados em **Configurações › Atalhos**. A tabela mostra os padrões.' },
    { h1: 'Códigos compatíveis', appendix: true },
    {
      table: {
        cols: [30, 70],
        head: ['Grupo', 'Formatos'],
        rows: [
          ['Sempre lidos', 'QR Code, Micro QR Code, rMQR Code'],
          ['Com “Também ler códigos de barras”', 'EAN-13, EAN-8, UPC-A, UPC-E, Code 128, Code 39, Code 93, Codabar, ITF, DataBar, Data Matrix, PDF417, Aztec e outros'],
        ],
      },
    },
    {
      table: {
        cols: [30, 70],
        head: ['Conteúdo reconhecido', 'Exemplo'],
        rows: [
          ['Link da web', '`https://example.com/`'],
          ['Wi-Fi', '`WIFI:T:WPA;S:rede;P:senha;;`'],
          ['Contato', 'vCard (`BEGIN:VCARD`), MeCard (`MECARD:`)'],
          ['Email', '`mailto:`, `MATMSG:`'],
          ['Telefone e mensagem de texto', '`tel:`, `sms:`, `SMSTO:`'],
          ['Local', '`geo:25.0330,121.5654`'],
          ['Chave de verificação em duas etapas', '`otpauth://`'],
          ['Endereço de pagamento', '`bitcoin:`, `ethereum:` e outros'],
          ['Nota fiscal eletrônica de Taiwan', 'Os dois códigos QR da nota'],
        ],
      },
    },
  ],
};
