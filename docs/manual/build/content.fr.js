// Texte du manuel d’utilisation de QRcode tool (français).
// Balises : **gras**, [[Touche]], `code`. Les noms de figure renvoient à shots/<langue>/ (voir figures.js).

module.exports = {
  lang: 'fr',
  font: 'Segoe UI',
  monoFont: 'Consolas',
  file: 'QRcode-tool-User-Manual-fr',
  docTitle: 'Manuel d’utilisation de QRcode tool',
  cover: {
    title: 'QRcode tool',
    subtitle: 'Manuel d’utilisation',
    tagline: 'Scannez les codes QR sur votre ordinateur aussi facilement qu’avec votre téléphone.',
    edition: 'Version 1.0.0   |   octobre 2026',
    platforms: 'Pour Windows 10 (21H2 ou version ultérieure) / Windows 11, macOS 13 ou version ultérieure et Linux',
  },
  back: {
    heading: 'Scanner. Vérifier. Puis ouvrir.',
    body: [
      'QRcode tool est un scanner de bureau gratuit et open source. Il lit les codes QR et les codes-barres de l’écran, de la webcam, du Presse-papiers et des fichiers image, et vérifie chaque adresse web à la recherche des pièges courants avant d’ouvrir quoi que ce soit.',
      'Tout se passe sur votre ordinateur. Le programme ne collecte aucune donnée d’utilisation et n’envoie jamais sur internet ce que vous scannez.',
    ],
    links: [
      ['Page du projet', 'https://github.com/naritaroad/qrcode-tool'],
      ['Dernière version', 'https://github.com/naritaroad/qrcode-tool/releases/latest'],
      ['Signaler un problème', 'https://github.com/naritaroad/qrcode-tool/issues'],
    ],
    license: 'Le logiciel est publié sous licence MIT ou Apache-2.0. Ce manuel peut être copié et adapté dans les mêmes conditions.',
    trademark: 'QR Code est une marque déposée de DENSO WAVE INCORPORATED. QRcode tool n’est affilié ni à DENSO WAVE, ni à Google, ni à Microsoft.',
  },
  labels: {
    toc: 'Sommaire',
    chapter: (n) => `Chapitre ${n}`,
    appendix: (l) => `Annexe ${l}`,
    figure: (id) => `Figure ${id}`,
    tip: 'Astuce',
    note: 'Remarque',
    header: 'Manuel d’utilisation de QRcode tool',
    tocHint: '(Dans Word, faites un clic droit sur la table des matières et choisissez Mettre à jour les champs pour actualiser les numéros de page.)',
  },
  blocks: [
    // ───────────────────────── 1 ─────────────────────────
    { h1: 'Présentation de QRcode tool' },
    { p: 'QRcode tool est un petit programme de bureau qui attend dans la zone de notification et lit les codes QR et les codes-barres affichés à l’écran. Lorsque vous appuyez sur son raccourci, l’écran se fige un instant et chaque code reçoit une étiquette de résultat qui indique le type de contenu et, pour les liens, le vrai nom du site. Appuyez sur [[Entrée]] ou cliquez sur l’étiquette pour ouvrir le lien, rejoindre le réseau Wi-Fi ou enregistrer le contact.' },
    { p: 'Il lit aussi les codes présentés à la webcam, les images du Presse-papiers et les fichiers image, et comprend un générateur de codes QR simple.' },
    { h2: 'Fonctions principales' },
    {
      table: {
        cols: [26, 74],
        head: ['Fonction', 'Description'],
        rows: [
          ['Scanner tout l’écran', 'Fige tous les écrans, trouve automatiquement chaque code et lui attribue une étiquette. Fonctionne aussi avec les vidéos et les jeux.'],
          ['Sélectionner une zone', 'Tracez un cadre autour d’un seul code. Utile pour les codes trop petits, flous ou inclinés pour être trouvés automatiquement.'],
          ['Webcam', 'Présentez un code imprimé ou l’écran d’un téléphone à la caméra ; le résultat s’affiche dès que le code est reconnu.'],
          ['Presse-papiers et fichiers image', 'Lit une capture d’écran que vous venez de copier, ou des fichiers PNG, JPEG, BMP, GIF et WebP.'],
          ['Comprend le contenu', 'Reconnaît les liens web, le Wi-Fi, les contacts, les e-mails, les numéros de téléphone, les SMS, les positions géographiques, les clés de vérification en deux étapes, les adresses de paiement et les factures électroniques de Taïwan, et propose les boutons adaptés.'],
          ['Contrôles de sécurité des liens', 'Avant l’ouverture d’un lien, le programme recherche les connexions non chiffrées, les adresses déguisées, les lettres similaires, les adresses IP, les liens raccourcis et d’autres pièges courants. Tous les contrôles se font hors ligne.'],
          ['Créer des codes QR', 'Transforme un texte ou un lien en code QR que vous pouvez copier ou enregistrer en PNG ou SVG.'],
          ['Barre d’outils et bulle flottantes', 'Une barre placée en haut de l’écran (horizontale) ou sur le bord droit ou gauche (verticale), qui peut se réduire en une petite bulle ronde.'],
          ['Langues', 'Anglais, chinois traditionnel, chinois simplifié, japonais, coréen, espagnol, portugais (Brésil), français, allemand et russe.'],
        ],
      },
    },
    { h2: 'Configuration requise' },
    {
      table: {
        cols: [30, 70],
        head: ['Système d’exploitation', 'Exigences et remarques'],
        rows: [
          ['Windows', 'Windows 10 21H2 ou version ultérieure, Windows 11. x64 et ARM64. L’installation ne demande pas de droits d’administrateur.'],
          ['macOS', 'macOS 13 ou version ultérieure (Apple silicon et Intel). Le premier scan nécessite l’autorisation Enregistrement de l’écran, le scan par webcam l’autorisation Caméra.'],
          ['Linux', 'Toutes les fonctions sous X11. Sous Wayland, le scan se lance avec un raccourci clavier que vous définissez dans les réglages du bureau (voir le chapitre 4).'],
          ['Matériel', 'N’importe quel ordinateur de bureau ordinaire. La webcam est facultative. Au repos, le programme utilise moins d’environ 30 Mo de mémoire.'],
        ],
      },
    },
    { h2: 'Principes de confidentialité et de sécurité' },
    {
      ul: [
        'Le décodage et la vérification des liens se font sur votre ordinateur. Le contenu scanné n’est jamais envoyé, et aucun service web n’est interrogé sur la réputation d’une adresse.',
        'La seule connexion réseau est la recherche automatique de mises à jour, facultative, qui demande seulement à GitHub si une version plus récente existe.',
        'L’historique des scans est désactivé par défaut. Même activé, il ne conserve jamais les mots de passe Wi-Fi ni les clés de vérification en deux étapes.',
        'Seules les adresses `http` et `https` peuvent être ouvertes. Les autres types de liens peuvent seulement être copiés ; ils ne sont jamais transmis au système.',
        'Un lien qui présente un avertissement affiche toujours ses détails d’abord et attend votre décision.',
      ],
    },
    { h2: 'Conventions de ce manuel' },
    {
      ul: [
        'Les boutons, options et noms de fenêtres sont en **gras**, par exemple **Paramètres** ou **Scanner tout l’écran**.',
        'Les touches sont représentées comme des touches, par exemple [[Entrée]] ou [[Ctrl+Alt+Q]].',
        '**Paramètres › Général** signifie : ouvrez la fenêtre **Paramètres** et choisissez la page **Général** à gauche.',
        'Les images montrent Windows 11. macOS et Linux fonctionnent de la même façon ; seuls les cadres des fenêtres et les menus du système changent d’aspect.',
      ],
    },

    // ───────────────────────── 2 ─────────────────────────
    { h1: 'Installation et premier démarrage' },
    { h2: 'Télécharger et installer (Windows)' },
    {
      ol: [
        'Ouvrez la page des versions sur GitHub (https://github.com/naritaroad/qrcode-tool/releases/latest).',
        'Téléchargez `QRcodeTool-win-x64-Setup.exe` pour la plupart des ordinateurs, ou `QRcodeTool-win-arm64-Setup.exe` pour les ordinateurs équipés d’un processeur ARM.',
        'Lancez le fichier téléchargé. QRcode tool s’installe uniquement pour votre compte utilisateur et ne demande pas de droits d’administrateur.',
        'À la fin de l’installation, QRcode tool démarre et affiche l’écran d’accueil.',
      ],
    },
    { tip: 'Si vous préférez ne rien installer, téléchargez le fichier `Portable.zip`, décompressez-le et lancez le programme directement. La version portable ne peut pas se mettre à jour seule.' },
    { h2: 'Si Windows affiche « Windows a protégé votre ordinateur »' },
    { p: 'Les versions actuelles ne sont pas encore signées numériquement ; Windows SmartScreen peut donc signaler un éditeur inconnu. C’est courant pour les nouveaux programmes non signés.' },
    {
      ol: [
        'Dans l’avertissement, cliquez sur **Informations complémentaires**.',
        'Vérifiez que le nom de l’application est QRcode tool, puis cliquez sur **Exécuter quand même**.',
      ],
    },
    { p: 'Pour vérifier que le téléchargement n’a pas été modifié, exécutez la commande suivante dans PowerShell et comparez le résultat avec le fichier `SHA256SUMS` de la page de la version :' },
    { code: 'Get-FileHash .\\QRcodeTool-win-x64-Setup.exe -Algorithm SHA256' },
    { h2: 'macOS et Linux' },
    { p: '**macOS :** téléchargez et installez le fichier `.pkg`. Les versions ne sont pas encore notariées par Apple : la première fois, faites un clic droit sur l’app et choisissez **Ouvrir**. Au premier scan, autorisez QRcode tool dans **Réglages Système › Confidentialité et sécurité › Enregistrement de l’écran**, ainsi que dans **Caméra** si vous voulez utiliser la webcam.' },
    { p: '**Linux :** téléchargez le fichier `.AppImage`, rendez-le exécutable et lancez-le. GNOME a besoin de l’extension « AppIndicator and KStatusNotifierItem Support » pour afficher les icônes de notification.' },
    { h2: 'L’écran d’accueil' },
    { p: 'L’écran d’accueil s’affiche au premier démarrage. Il présente les trois façons de scanner les plus courantes, avec leurs raccourcis, et explique que les liens ne s’ouvrent jamais par surprise.' },
    { fig: 'welcome', cap: 'L’écran d’accueil au premier démarrage', width: 11 },
    {
      ul: [
        '**Langue :** suit le système d’exploitation par défaut. Un changement ici s’applique immédiatement.',
        '**Démarrer avec l’ordinateur :** activé par défaut pour que le raccourci soit toujours prêt. Vous pouvez le désactiver ici ou plus tard dans **Paramètres › Général**.',
        '**Essayer maintenant :** ferme l’écran d’accueil et scanne une fois tout l’écran.',
        '**Fermer :** ferme l’écran d’accueil et affiche la barre d’outils flottante.',
      ],
    },
    { p: 'Pour revoir l’écran d’accueil, ouvrez **Paramètres › Général** et cliquez sur **Afficher à nouveau l’écran d’accueil**.' },
    { h2: 'L’icône de notification' },
    { p: 'QRcode tool n’a pas de fenêtre principale traditionnelle. Une fois démarré, son icône apparaît dans la zone de notification, à l’extrémité droite de la barre des tâches, et toutes les fonctions sont accessibles à partir de là.' },
    {
      ul: [
        '**Clic sur l’icône :** scanne tout l’écran immédiatement.',
        '**Clic droit :** ouvre le menu (figure 2-2).',
        '**Survol de l’icône :** affiche le raccourci de scan actuel.',
      ],
    },
    { fig: 'tray-menu', cap: 'Le menu de l’icône de notification', width: 11 },
    { tip: 'Windows peut masquer les nouvelles icônes derrière la flèche « ^ ». Faites glisser l’icône sur la barre des tâches pour qu’elle reste visible.' },

    // ───────────────────────── 3 ─────────────────────────
    { h1: 'Scanner l’écran' },
    { h2: 'Scanner tout l’écran' },
    {
      ol: [
        'Vérifiez que la page web, le document, la vidéo ou l’image contenant le code QR est visible.',
        'Appuyez sur [[Ctrl+Alt+Q]], cliquez sur l’icône de notification ou cliquez sur **Scanner tout l’écran** dans la barre flottante.',
        'L’écran se fige et s’assombrit. Après un bref balayage, chaque code trouvé reçoit une étiquette de résultat.',
        'Appuyez sur [[Entrée]] pour ouvrir le code sélectionné, ou cliquez sur l’étiquette voulue.',
        'Appuyez sur [[Échap]] ou faites un clic droit pour quitter l’écran de scan.',
      ],
    },
    { fig: 'scan-screen', cap: 'Scanner tout l’écran : chaque code reçoit une étiquette ; le premier est sélectionné' },
    { p: 'L’indicateur d’état en haut montre combien de codes ont été trouvés. La couleur des crochets autour de chaque code indique le résultat des contrôles :' },
    {
      table: {
        cols: [22, 78],
        head: ['Couleur des crochets', 'Signification'],
        rows: [
          ['Blanc', 'Rien de suspect n’a été trouvé.'],
          ['Couleur d’accentuation (bleu)', 'Le code sélectionné. [[Entrée]] l’ouvre.'],
          ['Jaune', 'Un point mérite votre attention, par exemple un lien http non chiffré ou un lien raccourci. La raison s’affiche sous l’étiquette.'],
          ['Rouge', 'Le lien semble trompeur, par exemple une adresse déguisée ou un domaine qui mélange plusieurs alphabets.'],
        ],
      },
    },
    { p: 'Comme l’écran est figé, les codes des vidéos, des présentations et des jeux peuvent aussi être lus. Avec plusieurs écrans, tous sont scannés en même temps.' },
    { h2: 'Sélectionner une zone' },
    { p: 'Lorsqu’un code est petit, flou ou incliné, ou lorsqu’il y a beaucoup de codes à l’écran, tracez un cadre autour du seul code qui vous intéresse. La zone sélectionnée est agrandie avant d’être lue, ce qui donne de meilleurs résultats qu’un scan de tout l’écran pour les codes difficiles.' },
    {
      ol: [
        'Appuyez sur [[Ctrl+Alt+A]], ou choisissez **Sélectionner une zone** dans le menu de notification ou dans la barre flottante.',
        'L’écran se fige et le pointeur devient une croix. Maintenez le bouton gauche de la souris enfoncé et tracez un cadre autour du code.',
        'Relâchez le bouton. Seul le contenu du cadre est lu.',
      ],
    },
    { fig: 'scan-region', cap: 'Sélectionner une zone : la taille du cadre s’affiche pendant le tracé' },
    { tip: 'Faites un cadre un peu plus grand que le code ; une marge vide autour aide la lecture. Si le message « Aucun code dans cette zone » apparaît, tracez un cadre légèrement plus grand.' },
    { h2: 'La barre de l’écran de scan' },
    { p: 'L’écran de scan comporte une rangée de boutons en haut. De gauche à droite : **Scanner tout l’écran**, **Sélectionner une zone**, **Scanner avec la caméra**, **Scanner l’image du Presse-papiers**, **Ouvrir une image…**, **Créer un code QR…**, **Historique**, **Paramètres** et **Fermer**. Vous pouvez changer de méthode sans quitter l’écran de scan, par exemple passer de tout l’écran à une zone sélectionnée. Survolez un bouton pour voir sa description et son raccourci.' },
    { h2: 'Clavier' },
    { p: 'L’écran de scan s’utilise entièrement au clavier :' },
    {
      table: {
        cols: [30, 70],
        head: ['Touche', 'Action'],
        rows: [
          ['[[Entrée]]', 'Ouvrir le code sélectionné.'],
          ['[[Tab]], [[→]], [[↓]]', 'Sélectionner le code suivant.'],
          ['[[Maj+Tab]], [[←]], [[↑]]', 'Sélectionner le code précédent.'],
          ['[[C]]', 'Copier le code sélectionné.'],
          ['[[F]] ou [[F5]]', 'Relancer la recherche sur tout l’écran.'],
          ['[[Échap]]', 'Annuler et quitter l’écran de scan (le clic droit fonctionne aussi).'],
        ],
      },
    },
    { h2: 'Si aucun code n’est trouvé' },
    {
      ul: [
        'Utilisez **Sélectionner une zone** et tracez un cadre autour du code seulement ; il est agrandi avant d’être lu.',
        'Si le code bouge vite dans une vidéo, mettez d’abord la vidéo en pause.',
        'Écartez les autres fenêtres, le pointeur de la souris ou tout ce qui cache une partie du code.',
        'Vérifiez que **Paramètres › Scan › Lire aussi les codes-barres** est activé si vous voulez lire des codes-barres et des formats comme Data Matrix.',
        'Si le code est très petit à l’écran (moins d’environ 40 pixels de large), agrandissez d’abord la page ou l’image.',
      ],
    },

    // ───────────────────────── 4 ─────────────────────────
    { h1: 'Autres façons de scanner' },
    { h2: 'Webcam' },
    { p: 'Utilisez la webcam pour les codes sur papier, sur une carte de visite ou sur l’écran d’un autre téléphone.' },
    {
      ol: [
        'Appuyez sur [[Ctrl+Alt+W]], ou choisissez **Scanner avec la caméra**.',
        'Présentez le code à la caméra à une distance d’environ 15 à 30 cm.',
        'Lorsqu’un code est reconnu, des crochets apparaissent autour de lui et son étiquette de résultat se place dans une liste fixe en bas de l’image.',
        'Cliquez sur l’étiquette, ou sélectionnez-la avec [[Tab]] et appuyez sur [[Entrée]].',
      ],
    },
    { fig: 'camera', cap: 'Scanner avec la caméra : les résultats restent dans une liste fixe en bas', width: 13 },
    {
      ul: [
        'Un code doit être vu sur plusieurs images d’affilée avant d’apparaître dans la liste, ce qui évite les erreurs de lecture.',
        'Quand un code quitte l’image, son résultat reste dans la liste un moment (8 secondes par défaut) pour que vous puissiez encore cliquer dessus. Modifiez cette durée dans **Paramètres › Caméra**.',
        'Si plusieurs caméras sont branchées, passez de l’une à l’autre avec la liste en bas de la fenêtre.',
        'L’interrupteur **Miroir** change seulement l’affichage de l’image ; la reconnaissance fonctionne dans les deux cas.',
        'Par défaut, la fenêtre de la caméra se ferme après l’ouverture d’un code. Vous pouvez changer ce comportement dans **Paramètres › Caméra**.',
      ],
    },
    { note: 'Si la caméra ne démarre pas, fermez les autres programmes qui l’utilisent peut-être (appels vidéo, par exemple) et autorisez QRcode tool à utiliser la caméra dans les paramètres de confidentialité du système.' },
    { h2: 'Image du Presse-papiers' },
    {
      ol: [
        'Faites une capture du code avec [[Win+Maj+S]] ou un autre outil de capture, ou copiez une image depuis une page web.',
        'Choisissez **Scanner l’image du Presse-papiers**.',
        'L’image s’affiche dans une fenêtre d’aperçu, et chaque code trouvé reçoit une étiquette de résultat.',
      ],
    },
    { p: 'S’il n’y a pas d’image dans le Presse-papiers, le programme vous invite à copier d’abord une capture d’écran ou une image.' },
    { h2: 'Fichiers image' },
    {
      ol: [
        'Choisissez **Ouvrir une image…**.',
        'Sélectionnez un fichier PNG, JPEG, BMP, GIF ou WebP.',
        'Cliquez sur une étiquette de résultat dans la fenêtre d’aperçu. Les boutons du bas ouvrent une autre image ou scannent plutôt le Presse-papiers.',
      ],
    },
    { fig: 'image-preview', cap: 'La fenêtre d’aperçu : les étiquettes sont placées sur les codes de l’image', width: 13 },
    { h2: 'Menu contextuel de Windows' },
    { p: 'Sous Windows, QRcode tool peut ajouter ses fonctions principales au menu contextuel (clic droit) de l’Explorateur de fichiers : faites un clic droit sur le fond du Bureau pour scanner l’écran, ou sur une image pour scanner ce fichier, sans ouvrir la barre ni retenir de raccourci.' },
    {
      figs: [
        ['shell-desktop', 'Clic droit sur le fond du Bureau'],
        ['shell-image', 'Clic droit sur une image'],
      ],
      cap: 'Entrées de QRcode tool dans le menu contextuel (Windows 11, Afficher d’autres options)',
    },
    { h3: 'Activer ou désactiver le menu contextuel' },
    { p: 'Le menu contextuel est **activé** par défaut : les entrées apparaissent dès que QRcode tool a été installé et lancé une fois. Si vous l’avez désactivé, réactivez-le ainsi :' },
    {
      ol: [
        'Ouvrez **Paramètres** depuis le menu de notification ou la barre flottante.',
        'Choisissez **Général** à gauche.',
        'Activez **Menu contextuel**. Le changement s’applique immédiatement ; inutile de redémarrer l’ordinateur ou l’Explorateur de fichiers.',
      ],
    },
    { p: 'Désactivez le même interrupteur pour retirer les entrées. Elles sont enregistrées dans vos propres paramètres utilisateur (la partie HKEY_CURRENT_USER du Registre) : aucun droit d’administrateur n’est nécessaire et les autres comptes de l’ordinateur ne sont pas concernés.' },
    { h3: 'Ouvrir le menu' },
    {
      ul: [
        '**Windows 11 :** faites un clic droit, puis choisissez **Afficher d’autres options** en bas ; les entrées de QRcode tool se trouvent dans le menu complet. Pour ouvrir directement le menu complet, maintenez [[Maj]] enfoncée pendant le clic droit, ou appuyez sur [[Maj+F10]].',
        '**Windows 10 :** les entrées de QRcode tool apparaissent dès le clic droit.',
      ],
    },
    {
      table: {
        cols: [36, 22, 42],
        head: ['Entrée du menu', 'Où', 'Action'],
        rows: [
          ['QRcode tool Analyser l’écran', 'Fond du Bureau', 'Scanne tout l’écran (comme [[Ctrl+Alt+Q]]).'],
          ['QRcode tool Analyser une zone', 'Fond du Bureau', 'Fige l’écran pour que vous sélectionniez une zone (comme [[Ctrl+Alt+A]]).'],
          ['QRcode tool Analyser avec la caméra', 'Fond du Bureau', 'Ouvre la webcam (comme [[Ctrl+Alt+W]]).'],
          ['QRcode tool Barre d’outils', 'Fond du Bureau', 'Affiche la barre d’outils flottante.'],
          ['QRcode tool Ouvrir l’image', 'Fichiers image', 'Scanne l’image dans la fenêtre d’aperçu. PNG, JPEG, BMP, GIF et WebP sont pris en charge.'],
        ],
      },
    },
    {
      ul: [
        'Les quatre entrées du Bureau sont regroupées en bas du menu entre deux séparateurs, avec l’icône de QRcode tool.',
        '**QRcode tool Ouvrir l’image** n’apparaît que lorsqu’**une seule** image est sélectionnée, pas pour plusieurs fichiers à la fois.',
        'Les entrées utilisent la langue de QRcode tool. Après une modification de **Paramètres › Général › Langue**, le menu est mis à jour aussi.',
        'Si QRcode tool n’est pas en cours d’exécution, choisir une entrée le lance et exécute la fonction ; s’il est déjà lancé, c’est le programme ouvert qui traite la demande.',
        'Avec la version portable, les entrées pointent vers l’emplacement actuel du programme. Après avoir déplacé le dossier portable, lancez le programme une fois pour mettre les entrées à jour.',
        'La désinstallation de QRcode tool supprime les entrées. macOS et Linux n’ont pas d’entrées de menu contextuel ; utilisez les raccourcis ou la ligne de commande.',
      ],
    },
    { tip: 'Si QRcode tool n’apparaît pas dans le menu : vérifiez que **Paramètres › Général › Menu contextuel** est activé, choisissez **Afficher d’autres options** sous Windows 11, et lancez QRcode tool une fois s’il vient d’être installé ou déplacé.' },
    { h2: 'Ligne de commande' },
    { p: 'Chaque fonction de scan peut être lancée par une commande. Si le programme tourne déjà, la commande lui est transmise. C’est particulièrement utile sous Linux avec Wayland : associez les commandes à des raccourcis personnalisés dans les réglages clavier du bureau.' },
    {
      table: {
        cols: [42, 58],
        head: ['Commande', 'Action'],
        rows: [
          ['`qrcode-tool`', 'Lance le programme, ou affiche la barre flottante s’il tourne déjà.'],
          ['`qrcode-tool scan-screen`', 'Scanne tout l’écran.'],
          ['`qrcode-tool scan-region`', 'Fige l’écran et sélectionne une zone.'],
          ['`qrcode-tool scan-camera`', 'Scanne avec la webcam.'],
          ['`qrcode-tool scan-clipboard`', 'Scanne l’image du Presse-papiers.'],
          ['`qrcode-tool scan-file FICHIER`', 'Scanne un fichier image dans la fenêtre d’aperçu.'],
          ['`qrcode-tool toolbar`', 'Affiche ou masque la barre d’outils flottante.'],
          ['`qrcode-tool bubble`', 'Affiche ou masque la bulle flottante.'],
          ['`qrcode-tool generate "TEXTE"`', 'Ouvre le générateur de codes QR avec le texte déjà saisi.'],
          ['`qrcode-tool settings`', 'Ouvre les paramètres.'],
          ['`qrcode-tool decode FICHIER… [--json]`', 'Affiche dans le terminal les codes des fichiers image sans lancer l’interface.'],
          ['`qrcode-tool quit`', 'Quitte le programme en cours d’exécution.'],
        ],
      },
    },

    // ───────────────────────── 5 ─────────────────────────
    { h1: 'Résultats et détails' },
    { h2: 'Étiquettes de résultat' },
    { p: 'Chaque code trouvé reçoit une étiquette de résultat sombre. De gauche à droite, elle affiche :' },
    {
      ul: [
        '**Icône :** le type de contenu, par exemple un globe pour un lien, des ondes pour le Wi-Fi ou une silhouette pour un contact. Les liens avec avertissement affichent à la place un symbole d’avertissement ou de danger.',
        '**Texte principal :** pour un lien, le vrai nom du site plutôt que l’adresse complète ; pour le Wi-Fi, le nom du réseau ; pour un contact, le nom.',
        '**Deuxième ligne :** le type de contenu, ou la raison principale d’un avertissement.',
        '**Bouton › :** ouvre toujours la fiche de détails, quel que soit le contenu.',
      ],
    },
    { h2: 'Ce que font Entrée et le clic' },
    {
      table: {
        cols: [36, 64],
        head: ['Contenu', 'Action'],
        rows: [
          ['Lien sans avertissement', 'S’ouvre dans votre navigateur par défaut.'],
          ['Lien avec avertissement', 'Affiche d’abord la fiche de détails ; le lien ne s’ouvre qu’après votre confirmation.'],
          ['Tout le reste', 'Affiche la fiche de détails, où vous choisissez quoi faire.'],
        ],
      },
    },
    { h2: 'La fiche de détails' },
    { p: 'La fiche de détails liste chaque champ du code et propose des boutons adaptés au contenu. Le bouton Copier à côté d’un champ copie seulement ce champ. Les champs sensibles, comme les mots de passe, sont masqués par « •••• » ; le bouton cadenas les affiche un instant. Cliquez en dehors de la fiche ou sur **Fermer** pour revenir aux résultats.' },
    { fig: 'detail-wifi', cap: 'Fiche de détails d’un code Wi-Fi : « Se connecter » rejoint le réseau', width: 12 },
    { h2: 'Boutons selon le type de contenu' },
    {
      table: {
        cols: [30, 70],
        head: ['Type', 'Boutons'],
        rows: [
          ['Lien', '**Ouvrir**, **Copier**. Les liens sans avertissement vers des sites pas encore approuvés proposent aussi **Toujours autoriser ce site**.'],
          ['Réseau Wi-Fi', '**Se connecter** (le système crée le profil réseau), **Copier le mot de passe**.'],
          ['Contact (vCard, MeCard)', '**Enregistrer le contact** (enregistre un fichier .vcf à importer dans votre carnet d’adresses), **Copier**.'],
          ['E-mail', '**Écrire un e-mail** (ouvre votre messagerie par défaut), **Copier**.'],
          ['Numéro de téléphone', '**Appeler** (transmis à l’application d’appel du système), **Copier**.'],
          ['SMS', '**Envoyer un message**, **Copier**.'],
          ['Position', '**Ouvrir la carte**, **Copier**.'],
          ['Clé de vérification en deux étapes', 'Seuls le nom du service et le compte sont affichés ; **Copier** est disponible. Le secret lui-même n’est jamais affiché ni enregistré.'],
          ['Adresse de paiement', '**Copier**. Vérifiez toujours une adresse de paiement avant d’envoyer de l’argent.'],
          ['Facture électronique', '**Copier le numéro de facture**, **Copier**.'],
          ['Lien bloqué', 'Les liens autres que `http` et `https` (par exemple `file:` ou `javascript:`) peuvent seulement être copiés, jamais ouverts.'],
          ['Texte et codes-barres', '**Copier**. Pour les codes-barres, le format (par exemple EAN-13) est aussi indiqué.'],
        ],
      },
    },
    { h2: 'Factures électroniques de Taïwan' },
    { p: 'Une facture électronique de Taïwan comporte deux codes QR côte à côte. Le code de gauche contient le numéro de facture, la date, les montants et une partie des articles ; celui de droite contient les articles restants. Lorsque **Scanner tout l’écran** ou **Ouvrir une image…** trouve les deux codes, ils sont fusionnés en une seule facture, et la fiche de détails liste le numéro de facture, la date, le code aléatoire, le total, la taxe, les identifiants du vendeur et de l’acheteur et tous les articles. Si seul le code de gauche est trouvé, la fiche vous rappelle de scanner aussi celui de droite.' },
    { h2: 'Données sensibles' },
    { p: 'Les clés de vérification en deux étapes et les mots de passe Wi-Fi sont des données sensibles. Même si l’historique ou **Copier le résultat automatiquement** est activé, ils ne sont jamais écrits dans l’historique, jamais copiés automatiquement et jamais inscrits dans les fichiers journaux du programme.' },

    // ───────────────────────── 6 ─────────────────────────
    { h1: 'Sécurité des liens' },
    { p: 'Les codes QR malveillants mènent souvent à de faux sites web. QRcode tool analyse chaque adresse web sur votre ordinateur avant d’afficher le résultat, et signale ce qu’il trouve directement sur l’étiquette et sur la fiche de détails. Rien n’est vérifié en ligne et aucune adresse n’est envoyée à un service.' },
    { h2: 'Vérifiez le nom du site avant d’ouvrir' },
    { p: 'L’étiquette de résultat affiche le vrai nom du site contenu dans l’adresse. Avant d’ouvrir un lien, assurez-vous qu’il s’agit bien du site attendu. Les liens avec avertissement affichent d’abord leur fiche de détails, avec en haut un bandeau coloré qui explique à quoi faire attention.' },
    { fig: 'detail-warning', cap: 'Un lien avec avertissements : un lien raccourci non chiffré affiche les raisons et attend', width: 12 },
    { h2: 'Niveaux d’avertissement' },
    {
      table: {
        cols: [18, 82],
        head: ['Niveau', 'Ce que fait le programme'],
        rows: [
          ['Info', 'Par exemple une adresse très longue. Signalé seulement sur la fiche de détails ; [[Entrée]] ouvre le lien directement.'],
          ['Avertissement', 'Crochets et icône jaunes. [[Entrée]] ou un clic affiche d’abord la fiche de détails ; vous cliquez ensuite sur **Ouvrir**.'],
          ['Danger', 'Crochets et icône rouges. **Ouvrir** n’est plus le bouton par défaut et, après avoir cliqué dessus, vous devez confirmer avec **Ouvrir quand même**.'],
        ],
      },
    },
    { h2: 'Ce qui est vérifié' },
    {
      table: {
        cols: [30, 12, 58],
        head: ['Message affiché', 'Niveau', 'Explication et conseil'],
        rows: [
          ['Non chiffré (http)', 'Avertissement', 'La connexion n’est pas chiffrée : les données peuvent être lues ou modifiées en chemin. Ne saisissez ni mot de passe ni données de paiement sur ces pages.'],
          ['Adresse déguisée', 'Danger', 'Un nom de confiance est placé avant un « @ », mais le lien mène en réalité au site qui suit, par exemple `https://bank.example.com@login-check.example.net/`.'],
          ['Nom de domaine international', 'Avertissement', 'Le domaine contient des lettres non latines. La fiche affiche aussi l’adresse encodée réelle (commençant par `xn--`) pour que vous puissiez la vérifier.'],
          ['Lettres similaires', 'Danger', 'Une partie du domaine mélange plusieurs alphabets, par exemple un « а » cyrillique à la place d’un « a » latin. C’est une ruse courante des faux sites.'],
          ['Adresse IP brute', 'Avertissement', 'L’adresse utilise des chiffres au lieu d’un nom de site, ce que les sites ordinaires font rarement.'],
          ['Port inhabituel', 'Avertissement', 'L’adresse indique un numéro de port non standard.'],
          ['Lien raccourci', 'Avertissement', 'Des services comme bit.ly masquent la vraie destination. Le lien n’est pas déplié en ligne, car cela révélerait au service ce que vous avez scanné. N’ouvrez les liens raccourcis que s’ils viennent de sources fiables.'],
          ['Adresse très longue', 'Info', 'Une adresse très longue peut repousser le vrai nom du site hors de vue.'],
          ['Nombreux caractères encodés', 'Info', 'De nombreuses séquences « % » peuvent servir à cacher le contenu d’une adresse.'],
          ['Nombreux sous-domaines', 'Info', 'Par exemple `login.bank.example.com.secure-check.example.net`, qui ressemble au premier coup d’œil au site d’une banque.'],
        ],
      },
    },
    { h2: 'Liens trompeurs' },
    { p: 'Pour les liens classés **Danger**, la fiche de détails indique en rouge que le lien semble trompeur et en liste les raisons. Fiez-vous au vrai nom du site affiché sur la fiche, pas au texte imprimé à côté du code.' },
    { fig: 'detail-danger', cap: 'Une adresse déguisée : elle ressemble à une banque mais mène à login-check.example.net', width: 12 },
    { p: 'Si vous êtes sûr de vouloir continuer, cliquez sur **Ouvrir**. La fiche demande une nouvelle fois ; seul **Ouvrir quand même** ouvre réellement la page.' },
    { h2: 'Sites de confiance et ouverture automatique' },
    { p: 'Vous pouvez ajouter aux sites de confiance ceux que vous utilisez souvent, comme le domaine de votre école ou de votre entreprise. Un lien s’ouvre alors juste après le scan, sans attendre [[Entrée]], lorsque toutes ces conditions sont réunies :' },
    {
      ul: [
        'Un seul code a été trouvé.',
        'Le lien ne présente aucun avertissement.',
        'Le site (ou l’un de ses sous-domaines) figure dans la liste de confiance.',
        '**Paramètres › Scan › Ouvrir les sites de confiance sans demander** est activé (valeur par défaut).',
      ],
    },
    { p: 'Ajoutez un site avec **Toujours autoriser ce site** sur la fiche de détails d’un lien sans avertissement, ou saisissez le domaine dans **Paramètres › Scan**.' },
    { fig: 'detail-link', cap: 'Un lien sans avertissement : ouvrez-le ou ajoutez le site à la liste de confiance', width: 12 },

    // ───────────────────────── 7 ─────────────────────────
    { h1: 'Barre d’outils et bulle flottantes' },
    { p: 'La barre d’outils flottante reste au-dessus des autres fenêtres pour que chaque fonction soit à un clic. Elle n’apparaît jamais dans les captures scannées. Affichez-la ou masquez-la avec **Barre d’outils flottante** dans le menu de notification, le raccourci [[Ctrl+Alt+E]] ou la commande `qrcode-tool toolbar`.' },
    { h2: 'Boutons de la barre' },
    { fig: 'toolbar-row', cap: 'Barre horizontale : survolez un bouton pour voir son nom et son raccourci en dessous', width: 11 },
    {
      table: {
        cols: [34, 66],
        head: ['Bouton', 'Action'],
        rows: [
          ['(poignée pointillée au début)', 'Maintenez et faites glisser pour déplacer la barre.'],
          ['Scanner tout l’écran', 'Comme [[Ctrl+Alt+Q]].'],
          ['Sélectionner une zone', 'Comme [[Ctrl+Alt+A]].'],
          ['Scanner avec la caméra', 'Comme [[Ctrl+Alt+W]]. Grisé si aucune caméra n’est trouvée.'],
          ['Scanner l’image du Presse-papiers', 'Lit l’image du Presse-papiers.'],
          ['Ouvrir une image…', 'Choisissez un fichier image et scannez-le.'],
          ['Créer un code QR…', 'Ouvre le générateur de codes QR.'],
          ['Historique', 'Ouvre **Paramètres › Confidentialité et historique**.'],
          ['Paramètres', 'Ouvre les paramètres.'],
          ['Manuel d’utilisation (bouton « ? »)', 'Ouvre le manuel d’utilisation PDF sur GitHub dans un nouvel onglet du navigateur, dans la langue de l’interface.'],
          ['Réduire en bulle', 'Masque la barre et affiche à la place la petite bulle ronde.'],
          ['Fermer la barre d’outils', 'Masque la barre (la bulle n’apparaît pas). Le programme continue de tourner dans la zone de notification.'],
        ],
      },
    },
    { h2: 'Barre verticale (droite ou gauche)' },
    { p: 'En plus de la disposition horizontale par défaut en haut de l’écran, la barre peut former une colonne verticale sur le bord droit ou gauche. La colonne prend moins de largeur, ce qui convient aux écrans larges et laisse libre le haut des pages web.' },
    {
      figs: [
        ['toolbar-right', 'Verticale, à droite (position verticale par défaut)'],
        ['toolbar-left', 'Verticale, à gauche'],
      ],
      cap: 'Barre verticale : le nom et le raccourci du bouton survolé s’affichent sous les boutons',
    },
    { p: 'Pour changer de disposition :' },
    {
      ol: [
        'Ouvrez **Paramètres** et choisissez **Général**.',
        'Dans la section **Barre d’outils et bulle flottantes**, repérez **Disposition de la barre**.',
        'Choisissez **Horizontale, en haut**, **Verticale, à droite** ou **Verticale, à gauche**.',
      ],
    },
    { p: 'Le changement s’applique immédiatement. La barre se place à l’emplacement par défaut de la nouvelle disposition : centrée en haut pour l’horizontale, centrée verticalement sur le bord choisi pour la verticale. Vous pouvez ensuite la faire glisser où vous voulez.' },
    { h2: 'Déplacer la barre' },
    { p: 'Maintenez la poignée pointillée à une extrémité de la barre et faites-la glisser. Le programme mémorise la dernière position et y réaffiche la barre la fois suivante. Si cette position n’est plus sur aucun écran, par exemple après avoir débranché un écran externe, la barre revient à son emplacement par défaut.' },
    { h2: 'La bulle flottante' },
    { p: 'La bulle flottante est la barre réduite. Elle n’occupe qu’un petit cercle et s’affiche par défaut sur le bord droit de l’écran.' },
    { fig: 'bubble', cap: 'La bulle flottante', width: 8 },
    {
      table: {
        cols: [30, 70],
        head: ['Action', 'Résultat'],
        rows: [
          ['Clic', 'Déplie la barre d’outils flottante complète.'],
          ['Maintien d’environ une demi-seconde', 'Scanne tout l’écran.'],
          ['Clic droit', 'Ouvre un menu : **Scanner tout l’écran**, **Sélectionner une zone**, **Scanner avec la caméra**, **Scanner l’image du Presse-papiers**, **Afficher la barre d’outils**, **Masquer la bulle**.'],
          ['Glisser', 'Déplace la bulle.'],
        ],
      },
    },
    { p: 'Pour afficher la bulle à chaque démarrage du programme, activez **Paramètres › Général › Afficher la bulle au démarrage de l’application**. La barre et la bulle ne s’affichent jamais en même temps.' },
    { h2: 'Masquer pendant les applications en plein écran' },
    { p: 'Sous Windows, la barre et la bulle se masquent pendant que vous regardez une vidéo en plein écran, faites une présentation ou jouez, et reviennent quand vous quittez le plein écran. Désactivez ce comportement dans **Paramètres › Général › Masquer pendant les applications en plein écran**.' },

    // ───────────────────────── 8 ─────────────────────────
    { h1: 'Créer des codes QR' },
    { p: 'Le générateur de codes QR transforme un lien ou un texte en code QR que vous pouvez scanner avec un téléphone ou insérer dans des documents et des présentations.' },
    {
      ol: [
        'Choisissez **Créer un code QR…** dans le menu de notification, la barre flottante ou l’écran de scan.',
        'Saisissez ou collez le contenu dans **Texte ou lien**. Le code QR apparaît aussitôt à droite.',
        'Choisissez si besoin un niveau de **Correction d’erreurs**.',
        'Cliquez sur **Copier l’image** pour copier le code dans le Presse-papiers, ou sur **Enregistrer en PNG…** ou **Enregistrer en SVG…** pour l’enregistrer dans un fichier.',
      ],
    },
    { fig: 'generator', cap: 'Le générateur de codes QR', width: 13 },
    { h2: 'Correction d’erreurs' },
    { p: 'Un niveau plus élevé permet de lire le code même s’il est en partie abîmé ou masqué par un logo, mais le rend plus dense et plus grand.' },
    {
      table: {
        cols: [36, 64],
        head: ['Niveau', 'Quand l’utiliser'],
        rows: [
          ['Faible — code le plus petit', 'Beaucoup de contenu qui ne sera affiché qu’à l’écran.'],
          ['Moyenne — recommandée', 'La valeur par défaut pour un usage général.'],
          ['Quartile', 'Codes imprimés sur des objets susceptibles d’être rayés.'],
          ['Élevée — résiste aux dégâts ou à un logo', 'Quand un logo sera placé au centre du code, ou quand une robustesse maximale est nécessaire.'],
        ],
      },
    },
    { note: 'Un code QR ne peut contenir qu’une quantité limitée de contenu. Si « Trop de texte pour un seul code QR » s’affiche, raccourcissez le contenu ou choisissez un niveau de correction plus faible.' },
    { p: '**PNG** est pratique pour les documents et les diapositives ; **SVG** est un format vectoriel qui reste net même imprimé en grand. Appuyez sur [[Échap]] pour fermer le générateur.' },

    // ───────────────────────── 9 ─────────────────────────
    { h1: 'Paramètres' },
    { p: 'Choisissez **Paramètres** dans le menu de notification, la barre flottante ou l’écran de scan. Chaque modification est enregistrée et appliquée immédiatement ; il n’y a pas de bouton OK.' },
    { h2: 'Général' },
    { fig: 'settings-general', cap: 'Paramètres › Général', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Paramètre', 'Description'],
        rows: [
          ['Langue', 'Langue des menus et des messages. Suit le système d’exploitation par défaut.'],
          ['Thème', '**Utiliser le paramètre système**, **Clair** ou **Sombre**. La couleur d’accentuation du système est appliquée automatiquement.'],
          ['Démarrer avec l’ordinateur', 'Démarre discrètement en arrière-plan à l’ouverture de session, pour que le raccourci fonctionne toujours.'],
          ['Menu contextuel', '(Windows uniquement) Ajoute des entrées QRcode tool aux menus contextuels du Bureau et des fichiers image. Activé par défaut ; voir « Menu contextuel de Windows » au chapitre 4.'],
          ['Disposition de la barre', '**Horizontale, en haut**, **Verticale, à droite** ou **Verticale, à gauche**. Voir le chapitre 7.'],
          ['Afficher la bulle au démarrage de l’application', 'Affiche la bulle flottante au démarrage.'],
          ['Masquer pendant les applications en plein écran', '(Windows uniquement) Masque la barre et la bulle pendant les vidéos, présentations et jeux en plein écran.'],
          ['Rechercher automatiquement les mises à jour', 'Demande à GitHub une fois par jour si une nouvelle version existe. Rien n’est installé sans votre accord.'],
          ['Afficher à nouveau l’écran d’accueil', 'Ouvre l’écran d’accueil du premier démarrage.'],
        ],
      },
    },
    { h2: 'Scan' },
    { fig: 'settings-scanning', cap: 'Paramètres › Scan', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Paramètre', 'Description'],
        rows: [
          ['Copier le résultat automatiquement', 'Quand un seul code est trouvé, son contenu est placé dans le Presse-papiers. Le contenu sensible n’est jamais copié. Désactivé par défaut.'],
          ['Émettre un son lorsqu’un code est trouvé', 'Émet un son bref. Désactivé par défaut.'],
          ['Lire aussi les codes-barres', 'Lit EAN, UPC, Code 128, Data Matrix, PDF417, Aztec et d’autres formats en plus des codes QR. Activé par défaut.'],
          ['Ouvrir les sites de confiance sans demander', 'Ouvre automatiquement les liens vers les sites de confiance dans les conditions décrites au chapitre 6.'],
          ['Sites de confiance', 'Saisissez un domaine (par exemple example.com) et cliquez sur **Ajouter**. Ses sous-domaines sont aussi approuvés. L’icône de corbeille supprime une entrée.'],
        ],
      },
    },
    { h2: 'Caméra' },
    { fig: 'settings-camera', cap: 'Paramètres › Caméra', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Paramètre', 'Description'],
        rows: [
          ['Caméra', 'La webcam à utiliser.'],
          ['Afficher l’image en miroir', 'Affiche la caméra comme un miroir. La reconnaissance fonctionne dans les deux cas.'],
          ['Garder les résultats à l’écran (secondes)', 'Durée (0 à 60 secondes) pendant laquelle un résultat reste dans la liste après la sortie du code de l’image. Avec 0, seuls les codes visibles sont listés.'],
          ['Fermer la caméra après l’ouverture d’un code', 'Ferme la fenêtre de la caméra dès qu’un code a été ouvert ou utilisé.'],
        ],
      },
    },
    { h2: 'Raccourcis' },
    { fig: 'settings-shortcuts', cap: 'Paramètres › Raccourcis', width: 14 },
    {
      table: {
        cols: [34, 22, 44],
        head: ['Action', 'Par défaut', 'Description'],
        rows: [
          ['Scanner tout l’écran', '[[Ctrl+Alt+Q]]', 'Fige et scanne tous les écrans.'],
          ['Sélectionner une zone', '[[Ctrl+Alt+A]]', 'Fige l’écran pour que vous traciez un cadre.'],
          ['Scanner avec la caméra', '[[Ctrl+Alt+W]]', 'Ouvre la fenêtre de la webcam.'],
          ['Afficher ou masquer la barre d’outils', '[[Ctrl+Alt+E]]', 'Affiche ou masque la barre flottante.'],
        ],
      },
    },
    { p: 'Pour modifier un raccourci :' },
    {
      ol: [
        'Cliquez sur le raccourci à modifier. Le bouton affiche **Appuyez sur des touches… (Échap pour annuler)**.',
        'Appuyez sur la nouvelle combinaison de touches. Elle doit comporter au moins l’une des touches [[Ctrl]], [[Alt]], [[Maj]] ou [[Win]] (sur Mac, [[Cmd]]).',
        'Le nouveau raccourci s’applique immédiatement.',
      ],
    },
    { p: 'Si une autre application utilise déjà la combinaison, la ligne indique « Déjà utilisé par une autre application — choisissez-en un autre. » Choisissez une autre combinaison. **Rétablir les valeurs par défaut** restaure tous les raccourcis d’origine. La section **Pendant le scan**, en bas, liste les touches de l’écran de scan, les mêmes qu’au chapitre 3.' },
    { h2: 'Confidentialité et historique' },
    { fig: 'settings-privacy', cap: 'Paramètres › Confidentialité et historique (historique activé)', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Paramètre', 'Description'],
        rows: [
          ['Conserver un historique des scans', 'Enregistré uniquement sur cet ordinateur. Les mots de passe Wi-Fi et les clés de vérification en deux étapes ne sont jamais enregistrés. Désactivé par défaut.'],
          ['Nombre d’entrées à conserver', 'De 5 à 500 entrées. Les plus anciennes sont supprimées en premier.'],
          ['Scans récents', 'Les plus récents en premier. Les liens sans avertissement peuvent être rouverts avec **Ouvrir** ; chaque entrée peut être copiée avec **Copier**.'],
          ['Effacer l’historique', 'Supprime tout l’historique.'],
        ],
      },
    },
    { h2: 'À propos' },
    { fig: 'settings-about', cap: 'Paramètres › À propos', width: 14 },
    {
      ul: [
        'Affiche la version actuelle. **Rechercher des mises à jour** vérifie tout de suite.',
        'Liens vers le code source, le signalement de problèmes, la déclaration de confidentialité et les licences open source.',
        '**Ouvrir le dossier des paramètres** et **Ouvrir le dossier des journaux** ouvrent directement ces dossiers, pour sauvegarder vos paramètres ou joindre des journaux à un signalement.',
      ],
    },

    // ───────────────────────── 10 ─────────────────────────
    { h1: 'Mise à jour et désinstallation' },
    { h2: 'Rechercher et installer les mises à jour' },
    { p: 'Les copies installées avec le programme d’installation peuvent se mettre à jour elles-mêmes. Avec **Rechercher automatiquement les mises à jour** activé, le programme interroge GitHub une fois par jour. Vous pouvez aussi cliquer à tout moment sur **Rechercher des mises à jour** dans le menu de notification ou dans **Paramètres › À propos**.' },
    { fig: 'message-update', cap: 'Le message affiché quand une nouvelle version est disponible', width: 10 },
    {
      ol: [
        'Quand le message **Mise à jour disponible** apparaît, cliquez sur **Mettre à jour**.',
        'La nouvelle version est téléchargée en arrière-plan, puis le programme redémarre.',
        'Cliquez sur **Plus tard** si vous ne voulez pas mettre à jour maintenant.',
      ],
    },
    { p: 'Les mises à jour ne sont installées qu’après un clic sur **Mettre à jour** ; le programme n’installe jamais rien de lui-même.' },
    { h2: 'Version portable' },
    { p: 'La version portable (`Portable.zip`) ne se met pas à jour seule ; la recherche de mises à jour affiche « Les mises à jour ne sont pas disponibles ». Téléchargez la nouvelle version sur la page des versions GitHub et remplacez les anciens fichiers. Vos paramètres sont conservés.' },
    { h2: 'Désinstaller' },
    {
      ol: [
        'Ouvrez **Paramètres › Applications › Applications installées** dans Windows.',
        'Repérez QRcode tool, cliquez sur **…** et choisissez **Désinstaller**.',
        'L’entrée de démarrage et les entrées du menu contextuel sont également supprimées.',
      ],
    },
    { p: 'Pour supprimer aussi vos paramètres et votre historique, ouvrez le dossier des paramètres et celui des journaux depuis **Paramètres › À propos** avant la désinstallation, puis supprimez-les.' },
    { h2: 'Emplacement des paramètres et des journaux' },
    {
      table: {
        cols: [18, 82],
        head: ['Système', 'Emplacement'],
        rows: [
          ['Windows', 'Paramètres : `%APPDATA%\\Lrniey666\\qrcode-tool\\config`\nHistorique et journaux : `%LOCALAPPDATA%\\Lrniey666\\qrcode-tool\\data`'],
          ['macOS', '`~/Library/Application Support/io.github.Lrniey666.qrcode-tool`'],
          ['Linux', 'Paramètres : `~/.config/qrcode-tool`\nHistorique et journaux : `~/.local/share/qrcode-tool`'],
        ],
      },
    },
    { p: 'Le fichier de paramètres `settings.toml` est en texte brut. Copiez-le pour transférer vos paramètres sur un autre ordinateur.' },

    // ───────────────────────── 11 ─────────────────────────
    { h1: 'Dépannage' },
    {
      qa: [
        ['Rien ne se passe quand j’appuie sur le raccourci.', 'Une autre application l’utilise peut-être déjà. Ouvrez **Paramètres › Raccourcis** ; si la ligne indique « Déjà utilisé par une autre application », choisissez une autre combinaison. Certains jeux et logiciels de bureau à distance capturent toutes les touches lorsqu’ils sont au premier plan.'],
        ['Le scan ne trouve aucun code.', 'Utilisez **Sélectionner une zone** et tracez un cadre autour du code seulement, ou agrandissez d’abord la page ou l’image. Voir « Si aucun code n’est trouvé » au chapitre 3.'],
        ['Pourquoi le lien ne s’est-il pas ouvert tout de suite ?', 'Un lien avec avertissement affiche toujours ses détails d’abord pour que vous vérifiiez le vrai site. Seuls les liens vers des sites de confiance sans aucun avertissement s’ouvrent automatiquement, et seulement s’ils sont le seul code trouvé.'],
        ['Il est écrit « Lien raccourci — la vraie destination est masquée ».', 'Les services de liens raccourcis masquent la vraie destination. Le programme ne la recherche pas en ligne, car cela révélerait ce que vous avez scanné. N’ouvrez les liens raccourcis que s’ils viennent de sources fiables.'],
        ['Où est la fenêtre principale ?', 'Il n’y en a pas, c’est voulu. Utilisez l’icône de notification, le raccourci, la barre d’outils flottante ou la bulle flottante.'],
        ['QRcode tool n’apparaît pas dans le menu contextuel.', 'Vérifiez que **Paramètres › Général › Menu contextuel** est activé. Sous Windows 11, les entrées se trouvent sous **Afficher d’autres options** (ou maintenez [[Maj]] pendant le clic droit). **QRcode tool Ouvrir l’image** n’apparaît que si une seule image est sélectionnée. Si vous venez d’installer QRcode tool ou de déplacer la version portable, lancez-le une fois.'],
        ['La barre d’outils a disparu.', 'Appuyez sur [[Ctrl+Alt+E]] ou cochez **Barre d’outils flottante** dans le menu de notification. Avec **Masquer pendant les applications en plein écran** activé, la barre est masquée tant qu’un programme en plein écran est au premier plan.'],
        ['La caméra ne démarre pas.', 'Fermez les autres programmes qui utilisent la caméra et vérifiez que les paramètres de confidentialité du système autorisent QRcode tool à l’utiliser. Avec plusieurs caméras, choisissez la bonne dans **Paramètres › Caméra**.'],
        ['Le Wi-Fi ne se connecte pas automatiquement.', 'Certains réseaux (avec authentification d’entreprise, par exemple) ne peuvent pas être configurés par le programme. Cliquez sur **Copier le mot de passe** dans la fiche de détails et connectez-vous depuis le menu Wi-Fi du système.'],
        ['Mon antivirus affiche un avertissement.', 'Les nouveaux programmes non signés qui enregistrent des raccourcis, lisent l’écran et démarrent avec l’ordinateur sont parfois signalés par la détection comportementale. QRcode tool utilise des interfaces système standard et son code source est public. Signalez le faux positif à l’éditeur de votre antivirus, ou ouvrez une issue sur GitHub.'],
        ['Sous macOS, la capture est noire.', 'Autorisez QRcode tool dans **Réglages Système › Confidentialité et sécurité › Enregistrement de l’écran** et redémarrez le programme. macOS peut redemander l’autorisation après une mise à jour du système.'],
        ['Sous Linux avec Wayland, le raccourci ne fait rien.', 'Wayland n’autorise pas les programmes à enregistrer des raccourcis globaux. Ajoutez dans les réglages clavier du bureau un raccourci personnalisé qui exécute `qrcode-tool scan-screen` ou une autre commande.'],
        ['Comment rouvrir ce manuel ?', 'Cliquez sur le bouton **?** (**Manuel d’utilisation**) de la barre flottante ; l’édition PDF sur GitHub s’ouvre dans un nouvel onglet du navigateur. Les fichiers Word et PDF se trouvent aussi dans le dossier `docs/manual` du dépôt GitHub.'],
        ['Comment signaler un problème ?', 'Cliquez sur **Signaler un problème ou proposer une idée** dans **Paramètres › À propos** et décrivez votre système, les étapes et les messages affichés. Vous pouvez joindre des fichiers du dossier des journaux ; les journaux ne contiennent que des événements et des erreurs, jamais de contenu scanné.'],
      ],
    },

    // ───────────────────────── Annexes ─────────────────────────
    { h1: 'Raccourcis et touches en un coup d’œil', appendix: true },
    {
      table: {
        cols: [30, 26, 44],
        head: ['Où', 'Touche', 'Action'],
        rows: [
          ['Partout', '[[Ctrl+Alt+Q]]', 'Scanner tout l’écran'],
          ['Partout', '[[Ctrl+Alt+A]]', 'Sélectionner une zone'],
          ['Partout', '[[Ctrl+Alt+W]]', 'Scanner avec la caméra'],
          ['Partout', '[[Ctrl+Alt+E]]', 'Afficher ou masquer la barre flottante'],
          ['Écran de scan, aperçu', '[[Entrée]]', 'Ouvrir le code sélectionné'],
          ['Écran de scan, aperçu', '[[Tab]] / [[Maj+Tab]]', 'Sélectionner le code suivant / précédent'],
          ['Écran de scan, aperçu', '[[C]]', 'Copier le code sélectionné'],
          ['Écran de scan', '[[F]] ou [[F5]]', 'Relancer la recherche sur tout l’écran'],
          ['Écran de scan, aperçu, générateur', '[[Échap]]', 'Fermer'],
        ],
      },
    },
    { p: 'Les raccourcis globaux se modifient dans **Paramètres › Raccourcis**. Le tableau indique les valeurs par défaut.' },
    { h1: 'Codes pris en charge', appendix: true },
    {
      table: {
        cols: [30, 70],
        head: ['Groupe', 'Formats'],
        rows: [
          ['Toujours lus', 'QR Code, Micro QR Code, rMQR Code'],
          ['Avec « Lire aussi les codes-barres »', 'EAN-13, EAN-8, UPC-A, UPC-E, Code 128, Code 39, Code 93, Codabar, ITF, DataBar, Data Matrix, PDF417, Aztec et d’autres'],
        ],
      },
    },
    {
      table: {
        cols: [30, 70],
        head: ['Contenu reconnu', 'Exemple'],
        rows: [
          ['Lien web', '`https://example.com/`'],
          ['Wi-Fi', '`WIFI:T:WPA;S:réseau;P:motdepasse;;`'],
          ['Contact', 'vCard (`BEGIN:VCARD`), MeCard (`MECARD:`)'],
          ['E-mail', '`mailto:`, `MATMSG:`'],
          ['Téléphone et SMS', '`tel:`, `sms:`, `SMSTO:`'],
          ['Position', '`geo:25.0330,121.5654`'],
          ['Clé de vérification en deux étapes', '`otpauth://`'],
          ['Adresse de paiement', '`bitcoin:`, `ethereum:` et d’autres'],
          ['Facture électronique de Taïwan', 'Les deux codes QR de la facture'],
        ],
      },
    },
  ],
};
