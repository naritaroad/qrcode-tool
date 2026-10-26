// Texto del manual de usuario de QRcode tool (español).
// Marcas: **negrita**, [[Tecla]], `código`. Los nombres de figura remiten a shots/<idioma>/ (ver figures.js).

module.exports = {
  lang: 'es',
  font: 'Segoe UI',
  monoFont: 'Consolas',
  file: 'QRcode-tool-User-Manual-es',
  docTitle: 'Manual de usuario de QRcode tool',
  cover: {
    title: 'QRcode tool',
    subtitle: 'Manual de usuario',
    tagline: 'Escanea códigos QR en tu computadora tan fácilmente como con el teléfono.',
    edition: 'Versión 1.0.0   |   octubre de 2026',
    platforms: 'Para Windows 10 (21H2 o posterior) / Windows 11, macOS 13 o posterior y Linux',
  },
  back: {
    heading: 'Escanea. Comprueba. Después abre.',
    body: [
      'QRcode tool es un escáner de escritorio gratuito y de código abierto. Lee códigos QR y códigos de barras de la pantalla, la cámara web, el portapapeles y los archivos de imagen, y revisa cada dirección web en busca de trucos habituales antes de abrir nada.',
      'Todo ocurre en tu computadora. El programa no recopila datos de uso y nunca envía a internet lo que escaneas.',
    ],
    links: [
      ['Página del proyecto', 'https://github.com/naritaroad/qrcode-tool'],
      ['Última versión', 'https://github.com/naritaroad/qrcode-tool/releases/latest'],
      ['Informar de un problema', 'https://github.com/naritaroad/qrcode-tool/issues'],
    ],
    license: 'El software se publica bajo la licencia MIT o Apache-2.0. Este manual puede copiarse y adaptarse en las mismas condiciones.',
    trademark: 'QR Code es una marca registrada de DENSO WAVE INCORPORATED. QRcode tool no está afiliado a DENSO WAVE, Google ni Microsoft.',
  },
  labels: {
    toc: 'Contenido',
    chapter: (n) => `Capítulo ${n}`,
    appendix: (l) => `Apéndice ${l}`,
    figure: (id) => `Figura ${id}`,
    tip: 'Consejo',
    note: 'Nota',
    header: 'Manual de usuario de QRcode tool',
    tocHint: '(En Word, haz clic derecho en la tabla de contenido y elige Actualizar campos para refrescar los números de página).',
  },
  blocks: [
    // ───────────────────────── 1 ─────────────────────────
    { h1: 'Presentación de QRcode tool' },
    { p: 'QRcode tool es un pequeño programa de escritorio que espera en la bandeja del sistema y lee códigos QR y códigos de barras de la pantalla. Al pulsar su método abreviado, la pantalla se congela un momento y cada código recibe una etiqueta de resultado que muestra qué tipo de contenido tiene y, en el caso de los enlaces, el nombre real del sitio. Pulsa [[Enter]] o haz clic en la etiqueta para abrir el enlace, conectarte a la red Wi-Fi o guardar el contacto.' },
    { p: 'También lee códigos que muestras a la cámara web, imágenes del portapapeles y archivos de imagen, e incluye un sencillo generador de códigos QR.' },
    { h2: 'Funciones principales' },
    {
      table: {
        cols: [26, 74],
        head: ['Función', 'Descripción'],
        rows: [
          ['Escanear toda la pantalla', 'Congela todos los monitores, encuentra cada código automáticamente y lo etiqueta. También funciona con videos y juegos.'],
          ['Seleccionar área', 'Arrastra un recuadro alrededor de un solo código. Úsalo con códigos demasiado pequeños, borrosos o inclinados para encontrarlos automáticamente.'],
          ['Cámara web', 'Acerca a la cámara un código impreso o la pantalla de un teléfono; el resultado aparece en cuanto se reconoce el código.'],
          ['Portapapeles y archivos de imagen', 'Lee una captura de pantalla que acabas de copiar o archivos PNG, JPEG, BMP, GIF y WebP.'],
          ['Entiende el contenido', 'Reconoce enlaces web, Wi-Fi, contactos, correo electrónico, números de teléfono, mensajes de texto, ubicaciones, claves de verificación en dos pasos, direcciones de pago y facturas electrónicas de Taiwán, y ofrece los botones correspondientes.'],
          ['Comprobaciones de seguridad', 'Antes de abrir un enlace se comprueba si usa una conexión sin cifrar, una dirección disfrazada, letras parecidas, una dirección IP, un enlace acortado u otros trucos habituales. Todo se comprueba sin conexión.'],
          ['Crear códigos QR', 'Convierte un texto o un enlace en un código QR que puedes copiar o guardar como PNG o SVG.'],
          ['Barra de herramientas y burbuja flotantes', 'Una barra que se coloca en la parte superior de la pantalla (horizontal) o en el borde derecho o izquierdo (vertical), y que se contrae en una pequeña burbuja redonda.'],
          ['Idiomas', 'Inglés, chino tradicional, chino simplificado, japonés, coreano, español, portugués (Brasil), francés, alemán y ruso.'],
        ],
      },
    },
    { h2: 'Requisitos del sistema' },
    {
      table: {
        cols: [30, 70],
        head: ['Sistema operativo', 'Requisitos y notas'],
        rows: [
          ['Windows', 'Windows 10 21H2 o posterior, Windows 11. x64 y ARM64. No se necesitan permisos de administrador para instalarlo.'],
          ['macOS', 'macOS 13 o posterior (Apple silicon e Intel). El primer escaneo requiere el permiso de Grabación de pantalla, y el escaneo con la cámara web, el permiso de Cámara.'],
          ['Linux', 'Todas las funciones en X11. En Wayland, el escaneo se inicia con un atajo de teclado que configuras en los ajustes del escritorio (ver el capítulo 4).'],
          ['Hardware', 'Cualquier computadora de oficina normal. La cámara web es opcional. En reposo, el programa usa menos de unos 30 MB de memoria.'],
        ],
      },
    },
    { h2: 'Principios de privacidad y seguridad' },
    {
      ul: [
        'La decodificación y la comprobación de enlaces se hacen en tu computadora. El contenido escaneado nunca se sube y no se consulta a ningún servicio web la reputación de una dirección.',
        'La única conexión de red es la búsqueda automática de actualizaciones, que es opcional y solo pregunta a GitHub si existe una versión más nueva.',
        'El historial de escaneos está desactivado de forma predeterminada. Aunque lo actives, las contraseñas Wi-Fi y las claves de verificación en dos pasos nunca se guardan.',
        'Solo se pueden abrir direcciones `http` y `https`. Los demás tipos de enlace solo se pueden copiar; nunca se pasan al sistema.',
        'Un enlace con advertencia siempre muestra primero sus detalles y te espera.',
      ],
    },
    { h2: 'Convenciones de este manual' },
    {
      ul: [
        'Los botones, opciones y nombres de ventana aparecen en **negrita**, por ejemplo **Configuración** o **Escanear toda la pantalla**.',
        'Las teclas se muestran como teclas, por ejemplo [[Enter]] o [[Ctrl+Alt+Q]].',
        '**Configuración › General** significa: abre la ventana **Configuración** y elige la página **General** a la izquierda.',
        'Las imágenes muestran Windows 11. macOS y Linux funcionan igual; solo cambia el aspecto de los marcos de ventana y los menús del sistema.',
      ],
    },

    // ───────────────────────── 2 ─────────────────────────
    { h1: 'Instalación y primer inicio' },
    { h2: 'Descargar e instalar (Windows)' },
    {
      ol: [
        'Abre la página de versiones en GitHub (https://github.com/naritaroad/qrcode-tool/releases/latest).',
        'Descarga `QRcodeTool-win-x64-Setup.exe` para la mayoría de las computadoras, o `QRcodeTool-win-arm64-Setup.exe` para equipos con procesador ARM.',
        'Ejecuta el archivo descargado. QRcode tool se instala solo para tu cuenta de usuario y no necesita permisos de administrador.',
        'Al terminar la instalación, QRcode tool se inicia y muestra la pantalla de bienvenida.',
      ],
    },
    { tip: 'Si prefieres no instalar nada, descarga el archivo `Portable.zip`, descomprímelo y ejecuta el programa directamente. La versión portátil no se puede actualizar sola.' },
    { h2: 'Si Windows muestra “Windows protegió su PC”' },
    { p: 'Las versiones actuales aún no tienen firma de código, por lo que Windows SmartScreen puede advertir de un editor desconocido. Es habitual en programas nuevos sin firmar.' },
    {
      ol: [
        'En la advertencia, haz clic en **Más información**.',
        'Comprueba que el nombre de la aplicación es QRcode tool y haz clic en **Ejecutar de todas formas**.',
      ],
    },
    { p: 'Para asegurarte de que la descarga no se ha modificado, ejecuta el siguiente comando en PowerShell y compara el resultado con el archivo `SHA256SUMS` de la página de la versión:' },
    { code: 'Get-FileHash .\\QRcodeTool-win-x64-Setup.exe -Algorithm SHA256' },
    { h2: 'macOS y Linux' },
    { p: '**macOS:** descarga e instala el archivo `.pkg`. Las versiones aún no están notarizadas por Apple, así que la primera vez haz clic derecho en la aplicación y elige **Abrir**. En el primer escaneo, permite QRcode tool en **Ajustes del Sistema › Privacidad y seguridad › Grabación de pantalla**, y en **Cámara** si quieres usar la cámara web.' },
    { p: '**Linux:** descarga el archivo `.AppImage`, hazlo ejecutable y ejecútalo. GNOME necesita la extensión “AppIndicator and KStatusNotifierItem Support” para mostrar iconos en la bandeja.' },
    { h2: 'La pantalla de bienvenida' },
    { p: 'La pantalla de bienvenida aparece en el primer inicio. Muestra las tres formas de escaneo más habituales, con sus métodos abreviados, y explica que los enlaces nunca se abren por sorpresa.' },
    { fig: 'welcome', cap: 'La pantalla de bienvenida en el primer inicio', width: 11 },
    {
      ul: [
        '**Idioma:** sigue al sistema operativo de forma predeterminada. Un cambio aquí se aplica de inmediato.',
        '**Iniciar con el equipo:** activado de forma predeterminada para que el método abreviado esté siempre listo. Puedes desactivarlo aquí o más tarde en **Configuración › General**.',
        '**Pruébalo ahora:** cierra la pantalla de bienvenida y escanea toda la pantalla una vez.',
        '**Cerrar:** cierra la pantalla de bienvenida y muestra la barra de herramientas flotante.',
      ],
    },
    { p: 'Para volver a ver la pantalla de bienvenida, abre **Configuración › General** y haz clic en **Volver a mostrar la pantalla de bienvenida**.' },
    { h2: 'El icono de la bandeja' },
    { p: 'QRcode tool no tiene una ventana principal tradicional. Después de iniciarse, su icono aparece en la bandeja del sistema, en el extremo derecho de la barra de tareas, y desde ahí se llega a todas las funciones.' },
    {
      ul: [
        '**Clic en el icono:** escanea toda la pantalla al instante.',
        '**Clic derecho:** abre el menú (figura 2-2).',
        '**Pasar el puntero sobre el icono:** muestra el método abreviado de escaneo actual.',
      ],
    },
    { fig: 'tray-menu', cap: 'El menú del icono de la bandeja', width: 11 },
    { tip: 'Windows puede ocultar los iconos nuevos de la bandeja detrás de la flecha “^”. Arrastra el icono a la barra de tareas para que quede siempre visible.' },

    // ───────────────────────── 3 ─────────────────────────
    { h1: 'Escanear la pantalla' },
    { h2: 'Escanear toda la pantalla' },
    {
      ol: [
        'Asegúrate de que la página web, el documento, el video o la imagen con el código QR esté visible.',
        'Pulsa [[Ctrl+Alt+Q]], haz clic en el icono de la bandeja o haz clic en **Escanear toda la pantalla** en la barra flotante.',
        'La pantalla se congela y se oscurece. Tras un breve barrido, cada código encontrado recibe una etiqueta de resultado.',
        'Pulsa [[Enter]] para abrir el código seleccionado o haz clic en la etiqueta que quieras.',
        'Pulsa [[Esc]] o haz clic derecho para salir de la pantalla de escaneo.',
      ],
    },
    { fig: 'scan-screen', cap: 'Escanear toda la pantalla: cada código recibe una etiqueta; el primero queda seleccionado' },
    { p: 'El indicador de estado de la parte superior muestra cuántos códigos se encontraron. El color de los corchetes que rodean cada código indica el resultado de las comprobaciones:' },
    {
      table: {
        cols: [22, 78],
        head: ['Color de los corchetes', 'Significado'],
        rows: [
          ['Blanco', 'No se encontró nada sospechoso.'],
          ['Color de énfasis (azul)', 'El código seleccionado. [[Enter]] lo abre.'],
          ['Amarillo', 'Hay algo que merece atención, por ejemplo un enlace http sin cifrar o un enlace acortado. El motivo aparece bajo la etiqueta.'],
          ['Rojo', 'El enlace parece engañoso, por ejemplo una dirección disfrazada o un dominio que mezcla alfabetos.'],
        ],
      },
    },
    { p: 'Como la pantalla está congelada, también se pueden leer códigos de videos, presentaciones y juegos. Con varios monitores, se escanean todos a la vez.' },
    { h2: 'Seleccionar un área' },
    { p: 'Cuando un código es pequeño, borroso o está inclinado, o cuando hay muchos códigos en la pantalla, dibuja un recuadro solo alrededor del que necesitas. El área seleccionada se amplía antes de leerla, lo que funciona mejor que escanear toda la pantalla con códigos difíciles.' },
    {
      ol: [
        'Pulsa [[Ctrl+Alt+A]] o elige **Seleccionar área** en el menú de la bandeja o en la barra flotante.',
        'La pantalla se congela y el puntero se convierte en una cruz. Mantén pulsado el botón izquierdo del mouse y arrastra un recuadro alrededor del código.',
        'Suelta el botón. Solo se lee el contenido del recuadro.',
      ],
    },
    { fig: 'scan-region', cap: 'Seleccionar área: mientras arrastras se muestra el tamaño del recuadro' },
    { tip: 'Haz el recuadro un poco más grande que el código; un margen vacío alrededor ayuda. Si aparece el mensaje “No hay ningún código en esa área”, dibuja un recuadro algo mayor.' },
    { h2: 'La barra de la pantalla de escaneo' },
    { p: 'La pantalla de escaneo tiene una fila de botones en la parte superior. De izquierda a derecha: **Escanear toda la pantalla**, **Seleccionar área**, **Escanear con la cámara**, **Escanear imagen del portapapeles**, **Abrir imagen…**, **Crear código QR…**, **Historial**, **Configuración** y **Cerrar**. Puedes cambiar de método sin salir de la pantalla de escaneo, por ejemplo de toda la pantalla a un área seleccionada. Pasa el puntero sobre un botón para ver su descripción y su método abreviado.' },
    { h2: 'Teclado' },
    { p: 'La pantalla de escaneo se puede usar por completo con el teclado:' },
    {
      table: {
        cols: [30, 70],
        head: ['Tecla', 'Acción'],
        rows: [
          ['[[Enter]]', 'Abrir el código seleccionado.'],
          ['[[Tab]], [[→]], [[↓]]', 'Seleccionar el código siguiente.'],
          ['[[Shift+Tab]], [[←]], [[↑]]', 'Seleccionar el código anterior.'],
          ['[[C]]', 'Copiar el código seleccionado.'],
          ['[[F]] o [[F5]]', 'Volver a buscar en toda la pantalla.'],
          ['[[Esc]]', 'Cancelar y salir de la pantalla de escaneo (el clic derecho también funciona).'],
        ],
      },
    },
    { h2: 'Si no se encuentra ningún código' },
    {
      ul: [
        'Usa **Seleccionar área** y dibuja un recuadro solo alrededor del código; se amplía antes de leerlo.',
        'Si el código se mueve rápido en un video, pausa primero el video.',
        'Aparta otras ventanas, el puntero del mouse o cualquier cosa que tape parte del código.',
        'Comprueba que **Configuración › Escaneo › Leer también códigos de barras** esté activado si quieres leer códigos de barras y formatos como Data Matrix.',
        'Si el código es muy pequeño en la pantalla (menos de unos 40 píxeles de ancho), amplía primero la página o la imagen.',
      ],
    },

    // ───────────────────────── 4 ─────────────────────────
    { h1: 'Otras formas de escanear' },
    { h2: 'Cámara web' },
    { p: 'Usa la cámara web para códigos en papel, tarjetas de visita o la pantalla de otro teléfono.' },
    {
      ol: [
        'Pulsa [[Ctrl+Alt+W]] o elige **Escanear con la cámara**.',
        'Acerca el código a la cámara, a unos 15–30 cm de distancia.',
        'Cuando se reconoce un código, aparecen corchetes a su alrededor y su etiqueta de resultado se coloca en una lista fija en la parte inferior de la imagen.',
        'Haz clic en la etiqueta, o selecciónala con [[Tab]] y pulsa [[Enter]].',
      ],
    },
    { fig: 'camera', cap: 'Escanear con la cámara: los resultados permanecen en una lista fija en la parte inferior', width: 13 },
    {
      ul: [
        'Un código debe verse en varios fotogramas seguidos antes de aparecer en la lista, lo que evita lecturas erróneas.',
        'Cuando un código sale de la imagen, su resultado sigue en la lista un tiempo (8 segundos de forma predeterminada) para que aún puedas hacer clic. Cambia el tiempo en **Configuración › Cámara**.',
        'Si hay más de una cámara conectada, cambia entre ellas con la lista de la parte inferior de la ventana.',
        'El interruptor **Espejo** solo cambia cómo se muestra la imagen; el reconocimiento funciona igual.',
        'De forma predeterminada, la ventana de la cámara se cierra después de abrir un código. Puedes cambiarlo en **Configuración › Cámara**.',
      ],
    },
    { note: 'Si la cámara no se inicia, cierra otros programas que puedan estar usándola (por ejemplo, videollamadas) y permite que QRcode tool use la cámara en la configuración de privacidad del sistema.' },
    { h2: 'Imagen del portapapeles' },
    {
      ol: [
        'Haz una captura de pantalla del código con [[Win+Shift+S]] u otra herramienta de captura, o copia una imagen de una página web.',
        'Elige **Escanear imagen del portapapeles**.',
        'La imagen se muestra en una ventana de vista previa y cada código encontrado recibe una etiqueta de resultado.',
      ],
    },
    { p: 'Si no hay ninguna imagen en el portapapeles, el programa te pide que copies primero una captura o una imagen.' },
    { h2: 'Archivos de imagen' },
    {
      ol: [
        'Elige **Abrir imagen…**.',
        'Selecciona un archivo PNG, JPEG, BMP, GIF o WebP.',
        'Haz clic en una etiqueta de resultado en la ventana de vista previa. Los botones de la parte inferior abren otra imagen o escanean el portapapeles.',
      ],
    },
    { fig: 'image-preview', cap: 'La ventana de vista previa: las etiquetas se colocan sobre los códigos de la imagen', width: 13 },
    { h2: 'Menú contextual de Windows' },
    { p: 'En Windows, QRcode tool puede añadir sus funciones principales al menú contextual (clic derecho) del Explorador de archivos: haz clic derecho en el fondo del escritorio para escanear la pantalla, o en una imagen para escanear ese archivo, sin abrir la barra ni recordar un método abreviado.' },
    {
      figs: [
        ['shell-desktop', 'Clic derecho en el fondo del escritorio'],
        ['shell-image', 'Clic derecho en una imagen'],
      ],
      cap: 'Entradas de QRcode tool en el menú contextual (Windows 11, Mostrar más opciones)',
    },
    { h3: 'Activar o desactivar el menú contextual' },
    { p: 'El menú contextual está **activado** de forma predeterminada: las entradas aparecen en cuanto QRcode tool se ha instalado e iniciado una vez. Si lo desactivaste antes, vuelve a activarlo así:' },
    {
      ol: [
        'Abre **Configuración** desde el menú de la bandeja o la barra flotante.',
        'Elige **General** a la izquierda.',
        'Activa **Menú del clic derecho**. El cambio se aplica de inmediato; no hace falta reiniciar la computadora ni el Explorador de archivos.',
      ],
    },
    { p: 'Desactiva el mismo interruptor para quitar las entradas. Se guardan en tu propia configuración de usuario (la parte HKEY_CURRENT_USER del registro), así que no se necesitan permisos de administrador y no afectan a otras cuentas de la computadora.' },
    { h3: 'Abrir el menú' },
    {
      ul: [
        '**Windows 11:** haz clic derecho y elige **Mostrar más opciones** al final; las entradas de QRcode tool están en el menú completo. Para abrir el menú completo directamente, mantén pulsada [[Shift]] al hacer clic derecho o pulsa [[Shift+F10]].',
        '**Windows 10:** las entradas de QRcode tool aparecen en cuanto haces clic derecho.',
      ],
    },
    {
      table: {
        cols: [36, 22, 42],
        head: ['Entrada del menú', 'Dónde', 'Acción'],
        rows: [
          ['QRcode tool Escanear pantalla', 'Fondo del escritorio', 'Escanea toda la pantalla (como [[Ctrl+Alt+Q]]).'],
          ['QRcode tool Escanear selección', 'Fondo del escritorio', 'Congela la pantalla para que selecciones un área (como [[Ctrl+Alt+A]]).'],
          ['QRcode tool Escanear con la cámara', 'Fondo del escritorio', 'Abre la cámara web (como [[Ctrl+Alt+W]]).'],
          ['QRcode tool Barra de herramientas', 'Fondo del escritorio', 'Muestra la barra de herramientas flotante.'],
          ['QRcode tool Abrir imagen', 'Archivos de imagen', 'Escanea la imagen en la ventana de vista previa. Se admiten PNG, JPEG, BMP, GIF y WebP.'],
        ],
      },
    },
    {
      ul: [
        'Las cuatro entradas del escritorio están agrupadas al final del menú entre separadores, con el icono de QRcode tool.',
        '**QRcode tool Abrir imagen** solo aparece cuando hay exactamente **una** imagen seleccionada, no con varios archivos a la vez.',
        'Las entradas usan el idioma de QRcode tool. Al cambiar **Configuración › General › Idioma**, el menú también se actualiza.',
        'Si QRcode tool no se está ejecutando, al elegir una entrada se inicia y realiza la función; si ya se está ejecutando, el programa abierto atiende la petición.',
        'Con la versión portátil, las entradas apuntan a la ubicación actual del programa. Si mueves la carpeta portátil, inicia el programa una vez para que se actualicen.',
        'Al desinstalar QRcode tool se quitan las entradas. macOS y Linux no tienen entradas en el menú contextual; usa los métodos abreviados o la línea de comandos.',
      ],
    },
    { tip: 'Si QRcode tool no aparece en el menú: comprueba que **Configuración › General › Menú del clic derecho** esté activado, elige **Mostrar más opciones** en Windows 11 e inicia QRcode tool una vez si acabas de instalarlo o moverlo.' },
    { h2: 'Línea de comandos' },
    { p: 'Todas las funciones de escaneo se pueden iniciar con un comando. Si el programa ya se está ejecutando, el comando se le pasa a él. Esto es especialmente útil en Linux con Wayland: asigna los comandos a atajos personalizados en la configuración de teclado del escritorio.' },
    {
      table: {
        cols: [42, 58],
        head: ['Comando', 'Acción'],
        rows: [
          ['`qrcode-tool`', 'Inicia el programa o, si ya se está ejecutando, muestra la barra flotante.'],
          ['`qrcode-tool scan-screen`', 'Escanea toda la pantalla.'],
          ['`qrcode-tool scan-region`', 'Congela la pantalla y selecciona un área.'],
          ['`qrcode-tool scan-camera`', 'Escanea con la cámara web.'],
          ['`qrcode-tool scan-clipboard`', 'Escanea la imagen del portapapeles.'],
          ['`qrcode-tool scan-file ARCHIVO`', 'Escanea un archivo de imagen en la ventana de vista previa.'],
          ['`qrcode-tool toolbar`', 'Muestra u oculta la barra de herramientas flotante.'],
          ['`qrcode-tool bubble`', 'Muestra u oculta la burbuja flotante.'],
          ['`qrcode-tool generate "TEXTO"`', 'Abre el generador de códigos QR con el texto ya escrito.'],
          ['`qrcode-tool settings`', 'Abre la configuración.'],
          ['`qrcode-tool decode ARCHIVO… [--json]`', 'Muestra en la terminal los códigos de los archivos de imagen sin abrir la interfaz.'],
          ['`qrcode-tool quit`', 'Cierra el programa en ejecución.'],
        ],
      },
    },

    // ───────────────────────── 5 ─────────────────────────
    { h1: 'Resultados y detalles' },
    { h2: 'Etiquetas de resultado' },
    { p: 'Cada código encontrado recibe una etiqueta de resultado oscura. De izquierda a derecha muestra:' },
    {
      ul: [
        '**Icono:** el tipo de contenido, por ejemplo un globo para un enlace, ondas para el Wi-Fi o una persona para un contacto. Los enlaces con advertencia muestran en su lugar un símbolo de advertencia o de peligro.',
        '**Texto principal:** para los enlaces, el nombre real del sitio en lugar de la dirección completa; para el Wi-Fi, el nombre de la red; para los contactos, el nombre.',
        '**Segunda línea:** el tipo de contenido o el motivo principal de una advertencia.',
        '**Botón ›:** siempre abre la tarjeta de detalles, sea cual sea el contenido.',
      ],
    },
    { h2: 'Qué hace Enter o un clic' },
    {
      table: {
        cols: [36, 64],
        head: ['Contenido', 'Acción'],
        rows: [
          ['Enlace sin advertencias', 'Se abre en el navegador predeterminado.'],
          ['Enlace con advertencia', 'Primero se muestra la tarjeta de detalles; el enlace solo se abre cuando lo confirmas.'],
          ['Todo lo demás', 'Se muestra la tarjeta de detalles, donde eliges qué hacer.'],
        ],
      },
    },
    { h2: 'La tarjeta de detalles' },
    { p: 'La tarjeta de detalles enumera todos los campos del código y ofrece botones adecuados al contenido. El botón de copiar junto a un campo copia solo ese campo. Los campos sensibles, como las contraseñas, se ocultan como “••••”; el botón del candado los muestra un momento. Haz clic fuera de la tarjeta o en **Cerrar** para volver a los resultados.' },
    { fig: 'detail-wifi', cap: 'Tarjeta de detalles de un código Wi-Fi: Conectar se une a la red', width: 12 },
    { h2: 'Botones según el tipo de contenido' },
    {
      table: {
        cols: [30, 70],
        head: ['Tipo', 'Botones'],
        rows: [
          ['Enlace', '**Abrir**, **Copiar**. Los enlaces sin advertencias a sitios en los que aún no confías también ofrecen **Permitir siempre este sitio**.'],
          ['Red Wi-Fi', '**Conectar** (el sistema crea el perfil de red), **Copiar contraseña**.'],
          ['Contacto (vCard, MeCard)', '**Guardar contacto** (guarda un archivo .vcf que puedes importar a tu libreta de direcciones), **Copiar**.'],
          ['Correo electrónico', '**Escribir correo** (abre tu programa de correo predeterminado), **Copiar**.'],
          ['Número de teléfono', '**Llamar** (se pasa a la aplicación de llamadas del sistema), **Copiar**.'],
          ['Mensaje de texto', '**Enviar mensaje**, **Copiar**.'],
          ['Ubicación', '**Abrir mapa**, **Copiar**.'],
          ['Clave de verificación en dos pasos', 'Solo se muestran el nombre del servicio y la cuenta; está disponible **Copiar**. El secreto nunca se muestra ni se guarda.'],
          ['Dirección de pago', '**Copiar**. Comprueba siempre una dirección de pago antes de enviar dinero.'],
          ['Factura electrónica', '**Copiar número de factura**, **Copiar**.'],
          ['Enlace bloqueado', 'Los enlaces que no son `http` ni `https` (por ejemplo `file:` o `javascript:`) solo se pueden copiar, nunca abrir.'],
          ['Texto y códigos de barras', '**Copiar**. En los códigos de barras también se muestra el formato, por ejemplo EAN-13.'],
        ],
      },
    },
    { h2: 'Facturas electrónicas de Taiwán' },
    { p: 'Una factura electrónica de Taiwán tiene dos códigos QR uno al lado del otro. El código izquierdo contiene el número de factura, la fecha, los importes y algunos artículos; el derecho contiene el resto de los artículos. Cuando **Escanear toda la pantalla** o **Abrir imagen…** encuentra los dos códigos, se combinan en una sola factura y la tarjeta de detalles muestra el número de factura, la fecha, el código aleatorio, el total, el impuesto, los identificadores del vendedor y del comprador y todos los artículos. Si solo se encuentra el código izquierdo, la tarjeta te recuerda que escanees también el derecho.' },
    { h2: 'Datos sensibles' },
    { p: 'Las claves de verificación en dos pasos y las contraseñas Wi-Fi son sensibles. Aunque estén activados el historial o **Copiar el resultado automáticamente**, nunca se escriben en el historial, nunca se copian automáticamente y nunca se escriben en los archivos de registro del programa.' },

    // ───────────────────────── 6 ─────────────────────────
    { h1: 'Seguridad de los enlaces' },
    { p: 'Los códigos QR maliciosos suelen llevar a sitios web falsos. QRcode tool analiza cada dirección web en tu computadora antes de mostrar el resultado y marca lo que encuentra directamente en la etiqueta y en la tarjeta de detalles. No se consulta nada en línea ni se envía ninguna dirección a ningún servicio.' },
    { h2: 'Comprueba el nombre del sitio antes de abrir' },
    { p: 'La etiqueta de resultado muestra el nombre real del sitio que contiene la dirección. Antes de abrir cualquier enlace, asegúrate de que es el sitio que esperas. Los enlaces con advertencia muestran primero su tarjeta de detalles, con un aviso de color en la parte superior que explica a qué prestar atención.' },
    { fig: 'detail-warning', cap: 'Un enlace con advertencias: un enlace acortado sin cifrar muestra los motivos y te espera', width: 12 },
    { h2: 'Niveles de advertencia' },
    {
      table: {
        cols: [18, 82],
        head: ['Nivel', 'Qué hace el programa'],
        rows: [
          ['Información', 'Por ejemplo, una dirección muy larga. Solo se indica en la tarjeta de detalles; [[Enter]] abre el enlace directamente.'],
          ['Advertencia', 'Corchetes e icono amarillos. [[Enter]] o un clic muestran primero la tarjeta de detalles; después haces clic en **Abrir**.'],
          ['Peligro', 'Corchetes e icono rojos. **Abrir** deja de ser el botón predeterminado y, tras pulsarlo, debes confirmar con **Abrir de todos modos**.'],
        ],
      },
    },
    { h2: 'Qué se comprueba' },
    {
      table: {
        cols: [30, 12, 58],
        head: ['Mensaje mostrado', 'Nivel', 'Explicación y consejo'],
        rows: [
          ['Sin cifrar (http)', 'Advertencia', 'La conexión no está cifrada, así que los datos pueden leerse o modificarse por el camino. No escribas contraseñas ni datos de pago en esas páginas.'],
          ['Dirección disfrazada', 'Peligro', 'Se coloca un nombre de aspecto fiable antes de una “@”, pero el enlace lleva en realidad al sitio que va después, por ejemplo `https://bank.example.com@login-check.example.net/`.'],
          ['Nombre de dominio internacional', 'Advertencia', 'El dominio contiene letras no latinas. La tarjeta también muestra la dirección codificada real (empieza por `xn--`) para que puedas comprobarla.'],
          ['Letras parecidas', 'Peligro', 'Una parte del dominio mezcla alfabetos, por ejemplo una “а” cirílica en lugar de una “a” latina. Es un truco habitual de los sitios falsos.'],
          ['Dirección IP', 'Advertencia', 'La dirección usa números en lugar de un nombre de sitio, algo poco habitual en sitios web normales.'],
          ['Puerto inusual', 'Advertencia', 'La dirección indica un número de puerto no estándar.'],
          ['Enlace acortado', 'Advertencia', 'Servicios como bit.ly ocultan el destino real. El enlace no se expande en línea, porque eso le diría al servicio qué escaneaste. Abre enlaces acortados solo de fuentes de confianza.'],
          ['Dirección muy larga', 'Información', 'Las direcciones muy largas pueden dejar fuera de la vista el nombre real del sitio.'],
          ['Muchos caracteres codificados', 'Información', 'Muchas secuencias “%” pueden servir para ocultar lo que contiene una dirección.'],
          ['Muchos subdominios', 'Información', 'Por ejemplo `login.bank.example.com.secure-check.example.net`, que a primera vista puede parecer el sitio de un banco.'],
        ],
      },
    },
    { h2: 'Enlaces engañosos' },
    { p: 'En los enlaces calificados como **Peligro**, la tarjeta de detalles indica en rojo que el enlace parece engañoso y enumera los motivos. Fíate del nombre real del sitio que muestra la tarjeta, no del texto impreso junto al código.' },
    { fig: 'detail-danger', cap: 'Una dirección disfrazada: parece un banco, pero lleva a login-check.example.net', width: 12 },
    { p: 'Si estás seguro de que quieres continuar, haz clic en **Abrir**. La tarjeta pregunta una vez más; solo **Abrir de todos modos** abre realmente la página.' },
    { h2: 'Sitios de confianza y apertura automática' },
    { p: 'Puedes añadir a los sitios de confianza los que usas a menudo, como el dominio de tu escuela o tu empresa. Entonces un enlace se abre justo después del escaneo, sin esperar a [[Enter]], cuando se cumple todo esto:' },
    {
      ul: [
        'Solo se encontró un código.',
        'El enlace no tiene advertencias.',
        'El sitio (o uno de sus subdominios) está en la lista de confianza.',
        '**Configuración › Escaneo › Abrir sitios de confianza sin preguntar** está activado (opción predeterminada).',
      ],
    },
    { p: 'Añade un sitio con **Permitir siempre este sitio** en la tarjeta de detalles de un enlace sin advertencias, o escribe el dominio en **Configuración › Escaneo**.' },
    { fig: 'detail-link', cap: 'Un enlace sin advertencias: ábrelo o añade el sitio a la lista de confianza', width: 12 },

    // ───────────────────────── 7 ─────────────────────────
    { h1: 'Barra de herramientas y burbuja flotantes' },
    { p: 'La barra de herramientas flotante se mantiene sobre las demás ventanas para que cada función esté a un clic. Nunca aparece en las capturas que se escanean. Muéstrala u ocúltala con **Barra de herramientas flotante** en el menú de la bandeja, el método abreviado [[Ctrl+Alt+E]] o el comando `qrcode-tool toolbar`.' },
    { h2: 'Botones de la barra' },
    { fig: 'toolbar-row', cap: 'Barra horizontal: pasa el puntero sobre un botón para ver debajo su nombre y su método abreviado', width: 11 },
    {
      table: {
        cols: [34, 66],
        head: ['Botón', 'Acción'],
        rows: [
          ['(asa punteada del principio)', 'Mantén pulsado y arrastra para mover la barra.'],
          ['Escanear toda la pantalla', 'Igual que [[Ctrl+Alt+Q]].'],
          ['Seleccionar área', 'Igual que [[Ctrl+Alt+A]].'],
          ['Escanear con la cámara', 'Igual que [[Ctrl+Alt+W]]. Aparece atenuado cuando no se encuentra ninguna cámara.'],
          ['Escanear imagen del portapapeles', 'Lee la imagen del portapapeles.'],
          ['Abrir imagen…', 'Elige un archivo de imagen y escanéalo.'],
          ['Crear código QR…', 'Abre el generador de códigos QR.'],
          ['Historial', 'Abre **Configuración › Privacidad e historial**.'],
          ['Configuración', 'Abre la configuración.'],
          ['Manual de usuario (botón “?”)', 'Abre el manual de usuario en PDF de GitHub en una pestaña nueva del navegador, en el idioma de la interfaz.'],
          ['Contraer en burbuja', 'Oculta la barra y muestra en su lugar la pequeña burbuja redonda.'],
          ['Cerrar barra de herramientas', 'Oculta la barra (la burbuja no aparece). El programa sigue ejecutándose en la bandeja.'],
        ],
      },
    },
    { h2: 'Barra vertical (derecha o izquierda)' },
    { p: 'Además de la disposición horizontal predeterminada en la parte superior de la pantalla, la barra puede ser una columna vertical en el borde derecho o izquierdo. La columna ocupa menos ancho, lo que conviene en pantallas anchas y deja libre la parte superior de las páginas web.' },
    {
      figs: [
        ['toolbar-right', 'Vertical, a la derecha (posición vertical predeterminada)'],
        ['toolbar-left', 'Vertical, a la izquierda'],
      ],
      cap: 'Barra vertical: el nombre y el método abreviado del botón señalado aparecen bajo los botones',
    },
    { p: 'Para cambiar la disposición:' },
    {
      ol: [
        'Abre **Configuración** y elige **General**.',
        'En la sección **Barra de herramientas y burbuja flotantes**, busca **Disposición de la barra**.',
        'Elige **Horizontal, arriba**, **Vertical, a la derecha** o **Vertical, a la izquierda**.',
      ],
    },
    { p: 'El cambio se aplica de inmediato. La barra se mueve a la posición predeterminada de la nueva disposición: centrada arriba en la horizontal y centrada verticalmente en el borde elegido en la vertical. Después puedes arrastrarla a cualquier lugar.' },
    { h2: 'Mover la barra' },
    { p: 'Mantén pulsada el asa punteada de un extremo de la barra y arrástrala. El programa recuerda la última posición y la vuelve a mostrar ahí. Si esa posición ya no está en ningún monitor, por ejemplo tras desconectar una pantalla externa, la barra vuelve a su lugar predeterminado.' },
    { h2: 'La burbuja flotante' },
    { p: 'La burbuja flotante es la barra contraída. Solo ocupa un pequeño círculo y aparece de forma predeterminada en el borde derecho de la pantalla.' },
    { fig: 'bubble', cap: 'La burbuja flotante', width: 8 },
    {
      table: {
        cols: [30, 70],
        head: ['Acción', 'Resultado'],
        rows: [
          ['Clic', 'Se expande en la barra de herramientas flotante completa.'],
          ['Mantener pulsado medio segundo', 'Escanea toda la pantalla.'],
          ['Clic derecho', 'Abre un menú: **Escanear toda la pantalla**, **Seleccionar área**, **Escanear con la cámara**, **Escanear imagen del portapapeles**, **Mostrar barra de herramientas**, **Ocultar burbuja**.'],
          ['Arrastrar', 'Mueve la burbuja.'],
        ],
      },
    },
    { p: 'Para mostrar la burbuja cada vez que se inicia el programa, activa **Configuración › General › Mostrar la burbuja al iniciar la aplicación**. La barra y la burbuja nunca se muestran a la vez.' },
    { h2: 'Ocultar con aplicaciones en pantalla completa' },
    { p: 'En Windows, la barra y la burbuja se ocultan mientras ves un video a pantalla completa, das una presentación o juegas, y vuelven al salir de la pantalla completa. Desactívalo en **Configuración › General › Ocultar con aplicaciones en pantalla completa**.' },

    // ───────────────────────── 8 ─────────────────────────
    { h1: 'Crear códigos QR' },
    { p: 'El generador de códigos QR convierte un enlace o un texto en un código QR que puedes escanear con un teléfono o colocar en documentos y presentaciones.' },
    {
      ol: [
        'Elige **Crear código QR…** en el menú de la bandeja, la barra flotante o la pantalla de escaneo.',
        'Escribe o pega el contenido en **Texto o enlace**. El código QR aparece a la derecha al instante.',
        'Si hace falta, elige un nivel de **Corrección de errores**.',
        'Haz clic en **Copiar imagen** para copiar el código al portapapeles, o en **Guardar PNG…** o **Guardar SVG…** para guardarlo como archivo.',
      ],
    },
    { fig: 'generator', cap: 'El generador de códigos QR', width: 13 },
    { h2: 'Corrección de errores' },
    { p: 'Un nivel más alto permite leer el código aunque una parte esté dañada o tapada por un logotipo, pero hace el código más denso y más grande.' },
    {
      table: {
        cols: [36, 64],
        head: ['Nivel', 'Cuándo usarlo'],
        rows: [
          ['Baja — código más pequeño', 'Mucho contenido que solo se mostrará en pantalla.'],
          ['Media — recomendada', 'La opción predeterminada para uso general.'],
          ['Cuartil', 'Códigos impresos en objetos que pueden rayarse.'],
          ['Alta — resiste daños o un logotipo', 'Cuando se colocará un logotipo en el centro del código o se necesita la máxima robustez.'],
        ],
      },
    },
    { note: 'Un código QR solo puede contener una cantidad limitada de contenido. Si aparece “Hay demasiado texto para un código QR”, acorta el contenido o elige un nivel de corrección de errores más bajo.' },
    { p: '**PNG** es práctico para documentos y diapositivas; **SVG** es un formato vectorial que se mantiene nítido al imprimirlo en grande. Pulsa [[Esc]] para cerrar el generador.' },

    // ───────────────────────── 9 ─────────────────────────
    { h1: 'Configuración' },
    { p: 'Elige **Configuración** en el menú de la bandeja, la barra flotante o la pantalla de escaneo. Cada cambio se guarda y se aplica de inmediato; no hay botón Aceptar.' },
    { h2: 'General' },
    { fig: 'settings-general', cap: 'Configuración › General', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Opción', 'Descripción'],
        rows: [
          ['Idioma', 'Idioma de los menús y mensajes. Sigue al sistema operativo de forma predeterminada.'],
          ['Tema', '**Usar la configuración del sistema**, **Claro** u **Oscuro**. El color de énfasis del sistema se aplica automáticamente.'],
          ['Iniciar con el equipo', 'Se inicia discretamente en segundo plano al iniciar sesión, para que el método abreviado funcione siempre.'],
          ['Menú del clic derecho', '(Solo Windows) Añade entradas de QRcode tool a los menús contextuales del escritorio y de los archivos de imagen. Activado de forma predeterminada; ver “Menú contextual de Windows” en el capítulo 4.'],
          ['Disposición de la barra', '**Horizontal, arriba**, **Vertical, a la derecha** o **Vertical, a la izquierda**. Ver el capítulo 7.'],
          ['Mostrar la burbuja al iniciar la aplicación', 'Muestra la burbuja flotante al iniciar.'],
          ['Ocultar con aplicaciones en pantalla completa', '(Solo Windows) Oculta la barra y la burbuja durante videos, presentaciones y juegos a pantalla completa.'],
          ['Buscar actualizaciones automáticamente', 'Pregunta a GitHub una vez al día si hay una versión nueva. No se instala nada sin preguntarte.'],
          ['Volver a mostrar la pantalla de bienvenida', 'Abre la pantalla de bienvenida del primer inicio.'],
        ],
      },
    },
    { h2: 'Escaneo' },
    { fig: 'settings-scanning', cap: 'Configuración › Escaneo', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Opción', 'Descripción'],
        rows: [
          ['Copiar el resultado automáticamente', 'Cuando se encuentra exactamente un código, su contenido se copia al portapapeles. El contenido sensible nunca se copia. Desactivado de forma predeterminada.'],
          ['Reproducir un sonido al encontrar un código', 'Reproduce un sonido breve. Desactivado de forma predeterminada.'],
          ['Leer también códigos de barras', 'Además de los códigos QR, lee EAN, UPC, Code 128, Data Matrix, PDF417, Aztec y más. Activado de forma predeterminada.'],
          ['Abrir sitios de confianza sin preguntar', 'Abre automáticamente los enlaces a sitios de confianza en las condiciones indicadas en el capítulo 6.'],
          ['Sitios de confianza', 'Escribe un dominio (por ejemplo example.com) y haz clic en **Agregar**. También se confía en sus subdominios. El icono de la papelera quita una entrada.'],
        ],
      },
    },
    { h2: 'Cámara' },
    { fig: 'settings-camera', cap: 'Configuración › Cámara', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Opción', 'Descripción'],
        rows: [
          ['Cámara', 'La cámara web que se usará.'],
          ['Reflejar la imagen', 'Muestra la cámara como un espejo. El reconocimiento funciona igual.'],
          ['Mantener resultados en pantalla (segundos)', 'Cuánto tiempo (de 0 a 60 segundos) sigue en la lista un resultado después de que el código salga de la imagen. Con 0 solo se listan los códigos visibles.'],
          ['Cerrar la cámara después de abrir un código', 'Cierra la ventana de la cámara cuando se ha abierto o usado un código.'],
        ],
      },
    },
    { h2: 'Métodos abreviados' },
    { fig: 'settings-shortcuts', cap: 'Configuración › Métodos abreviados', width: 14 },
    {
      table: {
        cols: [34, 22, 44],
        head: ['Acción', 'Predeterminado', 'Descripción'],
        rows: [
          ['Escanear toda la pantalla', '[[Ctrl+Alt+Q]]', 'Congela y escanea todos los monitores.'],
          ['Seleccionar área', '[[Ctrl+Alt+A]]', 'Congela la pantalla para que arrastres un recuadro.'],
          ['Escanear con la cámara', '[[Ctrl+Alt+W]]', 'Abre la ventana de la cámara web.'],
          ['Mostrar u ocultar la barra de herramientas', '[[Ctrl+Alt+E]]', 'Muestra u oculta la barra flotante.'],
        ],
      },
    },
    { p: 'Para cambiar un método abreviado:' },
    {
      ol: [
        'Haz clic en el método abreviado que quieres cambiar. El botón muestra **Presiona teclas… (Esc para cancelar)**.',
        'Pulsa la nueva combinación de teclas. Debe incluir al menos una de [[Ctrl]], [[Alt]], [[Shift]] o [[Win]] (en Mac, [[Cmd]]).',
        'El nuevo método abreviado se aplica de inmediato.',
      ],
    },
    { p: 'Si otra aplicación ya usa la combinación, la fila indica “Ya lo usa otra aplicación: elige otro.”. Elige otra combinación. **Restaurar valores predeterminados** recupera todos los métodos abreviados predeterminados. La sección **Durante el escaneo** de la parte inferior enumera las teclas de la pantalla de escaneo, las mismas del capítulo 3.' },
    { h2: 'Privacidad e historial' },
    { fig: 'settings-privacy', cap: 'Configuración › Privacidad e historial (con el historial activado)', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Opción', 'Descripción'],
        rows: [
          ['Guardar un historial de escaneos', 'Se guarda solo en esta computadora. Las contraseñas Wi-Fi y las claves de verificación en dos pasos nunca se guardan. Desactivado de forma predeterminada.'],
          ['Número de entradas que se conservan', 'De 5 a 500 entradas. Las más antiguas se eliminan primero.'],
          ['Escaneos recientes', 'Los más nuevos primero. Los enlaces sin advertencias pueden volver a abrirse con **Abrir**; cualquier entrada se puede copiar con **Copiar**.'],
          ['Borrar historial', 'Elimina todo el historial.'],
        ],
      },
    },
    { h2: 'Acerca de' },
    { fig: 'settings-about', cap: 'Configuración › Acerca de', width: 14 },
    {
      ul: [
        'Muestra la versión actual. **Buscar actualizaciones** comprueba en ese momento.',
        'Enlaces al código fuente, a los informes de problemas, a la declaración de privacidad y a las licencias de código abierto.',
        '**Abrir la carpeta de configuración** y **Abrir la carpeta de registros** abren esas carpetas directamente, para hacer una copia de seguridad de la configuración o adjuntar archivos de registro a un informe de problema.',
      ],
    },

    // ───────────────────────── 10 ─────────────────────────
    { h1: 'Actualizar y desinstalar' },
    { h2: 'Buscar e instalar actualizaciones' },
    { p: 'Las copias instaladas con el programa de instalación pueden actualizarse solas. Con **Buscar actualizaciones automáticamente** activado, el programa pregunta a GitHub una vez al día. También puedes hacer clic en **Buscar actualizaciones** en el menú de la bandeja o en **Configuración › Acerca de** cuando quieras.' },
    { fig: 'message-update', cap: 'El mensaje que aparece cuando hay una versión nueva', width: 10 },
    {
      ol: [
        'Cuando aparezca el mensaje **Actualización disponible**, haz clic en **Actualizar ahora**.',
        'La nueva versión se descarga en segundo plano y el programa se reinicia al terminar.',
        'Haz clic en **Más tarde** si no quieres actualizar ahora.',
      ],
    },
    { p: 'Las actualizaciones solo se instalan después de hacer clic en **Actualizar ahora**; el programa nunca instala nada por su cuenta.' },
    { h2: 'Versión portátil' },
    { p: 'La versión portátil (`Portable.zip`) no se actualiza sola; al buscar actualizaciones se muestra “Las actualizaciones no están disponibles”. Descarga la nueva versión desde la página de versiones de GitHub y reemplaza los archivos antiguos. Tu configuración se conserva.' },
    { h2: 'Desinstalar' },
    {
      ol: [
        'Abre **Configuración › Aplicaciones › Aplicaciones instaladas** de Windows.',
        'Busca QRcode tool, haz clic en **…** y elige **Desinstalar**.',
        'También se quitan la entrada de inicio y las entradas del menú contextual.',
      ],
    },
    { p: 'Para quitar también tu configuración y tu historial, abre la carpeta de configuración y la de registros desde **Configuración › Acerca de** antes de desinstalar, y elimínalas.' },
    { h2: 'Dónde se guardan la configuración y los registros' },
    {
      table: {
        cols: [18, 82],
        head: ['Sistema', 'Ubicación'],
        rows: [
          ['Windows', 'Configuración: `%APPDATA%\\Lrniey666\\qrcode-tool\\config`\nHistorial y registros: `%LOCALAPPDATA%\\Lrniey666\\qrcode-tool\\data`'],
          ['macOS', '`~/Library/Application Support/io.github.Lrniey666.qrcode-tool`'],
          ['Linux', 'Configuración: `~/.config/qrcode-tool`\nHistorial y registros: `~/.local/share/qrcode-tool`'],
        ],
      },
    },
    { p: 'El archivo de configuración `settings.toml` es texto sin formato. Cópialo para llevar tu configuración a otra computadora.' },

    // ───────────────────────── 11 ─────────────────────────
    { h1: 'Solución de problemas' },
    {
      qa: [
        ['No pasa nada al pulsar el método abreviado.', 'Puede que otra aplicación ya lo use. Abre **Configuración › Métodos abreviados**; si la fila indica “Ya lo usa otra aplicación”, elige otra combinación. Algunos juegos y programas de escritorio remoto capturan todas las teclas mientras están en primer plano.'],
        ['El escaneo no encuentra ningún código.', 'Usa **Seleccionar área** y dibuja un recuadro solo alrededor del código, o amplía primero la página o la imagen. Ver “Si no se encuentra ningún código” en el capítulo 3.'],
        ['¿Por qué no se abrió el enlace al momento?', 'Un enlace con advertencia siempre muestra primero sus detalles para que compruebes el sitio real. Solo se abren automáticamente los enlaces a sitios de confianza sin ninguna advertencia, y solo cuando son el único código encontrado.'],
        ['Dice “Enlace acortado: el destino real está oculto”.', 'Los servicios de enlaces acortados ocultan el destino real. El programa no lo consulta en línea, porque eso revelaría lo que escaneaste. Abre enlaces acortados solo de fuentes de confianza.'],
        ['¿Dónde está la ventana principal?', 'No hay ninguna, a propósito. Usa el icono de la bandeja, el método abreviado, la barra de herramientas flotante o la burbuja flotante.'],
        ['QRcode tool no aparece en el menú contextual.', 'Comprueba que **Configuración › General › Menú del clic derecho** esté activado. En Windows 11 las entradas están en **Mostrar más opciones** (o mantén pulsada [[Shift]] al hacer clic derecho). **QRcode tool Abrir imagen** solo aparece cuando hay una imagen seleccionada. Si acabas de instalar QRcode tool o moviste la versión portátil, inícialo una vez.'],
        ['La barra de herramientas ha desaparecido.', 'Pulsa [[Ctrl+Alt+E]] o marca **Barra de herramientas flotante** en el menú de la bandeja. Con **Ocultar con aplicaciones en pantalla completa** activado, la barra se oculta mientras hay un programa a pantalla completa en primer plano.'],
        ['La cámara no se inicia.', 'Cierra otros programas que usen la cámara y comprueba que la configuración de privacidad del sistema permita a QRcode tool usarla. Si tienes varias cámaras, elige la correcta en **Configuración › Cámara**.'],
        ['El Wi-Fi no se conecta automáticamente.', 'Algunas redes (por ejemplo, con autenticación empresarial) no pueden configurarse desde el programa. Haz clic en **Copiar contraseña** en la tarjeta de detalles y conéctate desde el menú Wi-Fi del sistema.'],
        ['Mi antivirus muestra una advertencia.', 'Los programas nuevos sin firmar que registran métodos abreviados, leen la pantalla y se inician con el equipo a veces se marcan por detección de comportamiento. QRcode tool usa interfaces estándar del sistema y su código fuente es público. Informa del falso positivo a tu proveedor de antivirus o abre una incidencia en GitHub.'],
        ['En macOS la captura sale negra.', 'Permite QRcode tool en **Ajustes del Sistema › Privacidad y seguridad › Grabación de pantalla** y reinicia el programa. macOS puede volver a preguntar después de una actualización del sistema.'],
        ['En Linux con Wayland el método abreviado no hace nada.', 'Wayland no permite que los programas registren métodos abreviados globales. Añade un atajo personalizado en la configuración de teclado del escritorio que ejecute `qrcode-tool scan-screen` u otro comando.'],
        ['¿Cómo vuelvo a abrir este manual?', 'Haz clic en el botón **?** (**Manual de usuario**) de la barra flotante; la edición PDF de GitHub se abre en una pestaña nueva del navegador. Los archivos Word y PDF también están en la carpeta `docs/manual` del repositorio de GitHub.'],
        ['¿Cómo informo de un problema?', 'Haz clic en **Informar de un problema o sugerir una idea** en **Configuración › Acerca de** y describe tu sistema, los pasos y los mensajes que viste. Puedes adjuntar archivos de la carpeta de registros; los registros solo contienen eventos y errores, nunca contenido escaneado.'],
      ],
    },

    // ───────────────────────── Apéndices ─────────────────────────
    { h1: 'Métodos abreviados y teclas de un vistazo', appendix: true },
    {
      table: {
        cols: [30, 26, 44],
        head: ['Dónde', 'Tecla', 'Acción'],
        rows: [
          ['En cualquier lugar', '[[Ctrl+Alt+Q]]', 'Escanear toda la pantalla'],
          ['En cualquier lugar', '[[Ctrl+Alt+A]]', 'Seleccionar área'],
          ['En cualquier lugar', '[[Ctrl+Alt+W]]', 'Escanear con la cámara'],
          ['En cualquier lugar', '[[Ctrl+Alt+E]]', 'Mostrar u ocultar la barra flotante'],
          ['Pantalla de escaneo, vista previa', '[[Enter]]', 'Abrir el código seleccionado'],
          ['Pantalla de escaneo, vista previa', '[[Tab]] / [[Shift+Tab]]', 'Seleccionar el código siguiente / anterior'],
          ['Pantalla de escaneo, vista previa', '[[C]]', 'Copiar el código seleccionado'],
          ['Pantalla de escaneo', '[[F]] o [[F5]]', 'Volver a buscar en toda la pantalla'],
          ['Pantalla de escaneo, vista previa, generador', '[[Esc]]', 'Cerrar'],
        ],
      },
    },
    { p: 'Los métodos abreviados globales se pueden cambiar en **Configuración › Métodos abreviados**. La tabla muestra los valores predeterminados.' },
    { h1: 'Códigos compatibles', appendix: true },
    {
      table: {
        cols: [30, 70],
        head: ['Grupo', 'Formatos'],
        rows: [
          ['Siempre se leen', 'QR Code, Micro QR Code, rMQR Code'],
          ['Con “Leer también códigos de barras”', 'EAN-13, EAN-8, UPC-A, UPC-E, Code 128, Code 39, Code 93, Codabar, ITF, DataBar, Data Matrix, PDF417, Aztec y más'],
        ],
      },
    },
    {
      table: {
        cols: [30, 70],
        head: ['Contenido reconocido', 'Ejemplo'],
        rows: [
          ['Enlace web', '`https://example.com/`'],
          ['Wi-Fi', '`WIFI:T:WPA;S:red;P:contraseña;;`'],
          ['Contacto', 'vCard (`BEGIN:VCARD`), MeCard (`MECARD:`)'],
          ['Correo electrónico', '`mailto:`, `MATMSG:`'],
          ['Teléfono y mensaje de texto', '`tel:`, `sms:`, `SMSTO:`'],
          ['Ubicación', '`geo:25.0330,121.5654`'],
          ['Clave de verificación en dos pasos', '`otpauth://`'],
          ['Dirección de pago', '`bitcoin:`, `ethereum:` y otras'],
          ['Factura electrónica de Taiwán', 'Los dos códigos QR de la factura'],
        ],
      },
    },
  ],
};
