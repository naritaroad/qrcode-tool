// Text des Benutzerhandbuchs von QRcode tool (Deutsch).
// Auszeichnung: **fett**, [[Taste]], `Code`. Abbildungsnamen verweisen auf shots/<Sprache>/ (siehe figures.js).

module.exports = {
  lang: 'de',
  font: 'Segoe UI',
  monoFont: 'Consolas',
  file: 'QRcode-tool-User-Manual-de',
  docTitle: 'QRcode tool Benutzerhandbuch',
  cover: {
    title: 'QRcode tool',
    subtitle: 'Benutzerhandbuch',
    tagline: 'QR-Codes am Computer so einfach scannen wie mit dem Smartphone.',
    edition: 'Version 1.0.0   |   Oktober 2026',
    platforms: 'Für Windows 10 (21H2 oder neuer) / Windows 11, macOS 13 oder neuer und Linux',
  },
  back: {
    heading: 'Scannen. Prüfen. Dann öffnen.',
    body: [
      'QRcode tool ist ein kostenloser Open-Source-Scanner für den Desktop. Er liest QR-Codes und Barcodes vom Bildschirm, von der Webcam, aus der Zwischenablage und aus Bilddateien und prüft jede Webadresse auf gängige Tricks, bevor etwas geöffnet wird.',
      'Alles geschieht auf Ihrem Computer. Das Programm sammelt keine Nutzungsdaten und sendet nie, was Sie scannen, ins Internet.',
    ],
    links: [
      ['Projektseite', 'https://github.com/naritaroad/qrcode-tool'],
      ['Neueste Version', 'https://github.com/naritaroad/qrcode-tool/releases/latest'],
      ['Problem melden', 'https://github.com/naritaroad/qrcode-tool/issues'],
    ],
    license: 'Die Software steht unter der MIT- oder Apache-2.0-Lizenz. Dieses Handbuch darf unter denselben Bedingungen kopiert und bearbeitet werden.',
    trademark: 'QR Code ist eine eingetragene Marke der DENSO WAVE INCORPORATED. QRcode tool steht in keiner Verbindung zu DENSO WAVE, Google oder Microsoft.',
  },
  labels: {
    toc: 'Inhalt',
    chapter: (n) => `Kapitel ${n}`,
    appendix: (l) => `Anhang ${l}`,
    figure: (id) => `Abbildung ${id}`,
    tip: 'Tipp',
    note: 'Hinweis',
    header: 'QRcode tool Benutzerhandbuch',
    tocHint: '(Klicken Sie in Word mit der rechten Maustaste auf das Inhaltsverzeichnis und wählen Sie „Felder aktualisieren“, um die Seitenzahlen zu erneuern.)',
  },
  blocks: [
    // ───────────────────────── 1 ─────────────────────────
    { h1: 'QRcode tool im Überblick' },
    { p: 'QRcode tool ist ein kleines Desktop-Programm, das im Infobereich der Taskleiste wartet und QR-Codes und Barcodes vom Bildschirm liest. Wenn Sie die Tastenkombination drücken, wird der Bildschirm kurz eingefroren und jeder Code erhält ein Ergebnisetikett. Es zeigt die Art des Inhalts und bei Links den tatsächlichen Websitenamen. Drücken Sie [[Enter]] oder klicken Sie auf das Etikett, um den Link zu öffnen, sich mit dem WLAN zu verbinden oder den Kontakt zu speichern.' },
    { p: 'Es liest auch Codes, die Sie vor die Webcam halten, Bilder aus der Zwischenablage und Bilddateien, und enthält einen einfachen QR-Code-Generator.' },
    { h2: 'Die wichtigsten Funktionen' },
    {
      table: {
        cols: [26, 74],
        head: ['Funktion', 'Beschreibung'],
        rows: [
          ['Ganzen Bildschirm scannen', 'Friert alle Monitore ein, findet jeden Code automatisch und versieht ihn mit einem Etikett. Funktioniert auch bei Videos und Spielen.'],
          ['Bereich auswählen', 'Ziehen Sie einen Rahmen um einen einzelnen Code. Für Codes, die zu klein, unscharf oder schräg sind, um automatisch gefunden zu werden.'],
          ['Webcam', 'Halten Sie einen gedruckten Code oder einen Smartphone-Bildschirm vor die Kamera; das Ergebnis erscheint, sobald der Code erkannt ist.'],
          ['Zwischenablage und Bilddateien', 'Liest einen gerade kopierten Screenshot oder PNG-, JPEG-, BMP-, GIF- und WebP-Dateien.'],
          ['Versteht den Inhalt', 'Erkennt Weblinks, WLAN, Kontakte, E-Mail, Telefonnummern, SMS, Kartenpositionen, Schlüssel für die zweistufige Überprüfung, Zahlungsadressen und taiwanische E-Rechnungen und bietet passende Schaltflächen an.'],
          ['Sicherheitsprüfung für Links', 'Vor dem Öffnen wird jeder Link auf unverschlüsselte Verbindungen, getarnte Adressen, ähnlich aussehende Buchstaben, IP-Adressen, Kurzlinks und andere gängige Tricks geprüft. Alle Prüfungen laufen offline.'],
          ['QR-Codes erstellen', 'Macht aus Text oder einem Link einen QR-Code, den Sie kopieren oder als PNG oder SVG speichern können.'],
          ['Schwebende Symbolleiste und Blase', 'Eine Symbolleiste am oberen Bildschirmrand (horizontal) oder am rechten bzw. linken Rand (vertikal), die sich zu einer kleinen runden Blase zusammenklappen lässt.'],
          ['Sprachen', 'Englisch, traditionelles Chinesisch, vereinfachtes Chinesisch, Japanisch, Koreanisch, Spanisch, Portugiesisch (Brasilien), Französisch, Deutsch und Russisch.'],
        ],
      },
    },
    { h2: 'Systemvoraussetzungen' },
    {
      table: {
        cols: [30, 70],
        head: ['Betriebssystem', 'Voraussetzungen und Hinweise'],
        rows: [
          ['Windows', 'Windows 10 21H2 oder neuer, Windows 11. x64 und ARM64. Für die Installation sind keine Administratorrechte nötig.'],
          ['macOS', 'macOS 13 oder neuer (Apple Silicon und Intel). Für den ersten Scan ist die Berechtigung „Bildschirmaufnahme“ nötig, für das Scannen mit der Webcam die Berechtigung „Kamera“.'],
          ['Linux', 'Alle Funktionen unter X11. Unter Wayland starten Sie den Scan über eine Tastenkombination, die Sie in den Desktop-Einstellungen anlegen (siehe Kapitel 4).'],
          ['Hardware', 'Jeder übliche Bürocomputer. Eine Webcam ist optional. Im Leerlauf belegt das Programm weniger als etwa 30 MB Arbeitsspeicher.'],
        ],
      },
    },
    { h2: 'Grundsätze zu Datenschutz und Sicherheit' },
    {
      ul: [
        'Decodierung und Linkprüfung finden auf Ihrem Computer statt. Gescannte Inhalte werden nie hochgeladen, und kein Webdienst wird nach dem Ruf einer Adresse gefragt.',
        'Die einzige Netzwerkverbindung ist die optionale automatische Updateprüfung, die GitHub nur fragt, ob es eine neuere Version gibt.',
        'Der Scanverlauf ist standardmäßig ausgeschaltet. Auch wenn er eingeschaltet ist, werden WLAN-Kennwörter und Schlüssel für die zweistufige Überprüfung nie gespeichert.',
        'Nur `http`- und `https`-Adressen lassen sich öffnen. Andere Linkarten können nur kopiert werden; sie werden nie an das System übergeben.',
        'Ein Link mit Warnung zeigt immer zuerst seine Details und wartet auf Sie.',
      ],
    },
    { h2: 'Konventionen in diesem Handbuch' },
    {
      ul: [
        'Schaltflächen, Optionen und Fensternamen sind **fett** gesetzt, zum Beispiel **Einstellungen** oder **Ganzen Bildschirm scannen**.',
        'Tasten werden als Tastenkappen dargestellt, zum Beispiel [[Enter]] oder [[Ctrl+Alt+Q]]. [[Ctrl]] entspricht der Taste Strg.',
        '**Einstellungen › Allgemein** bedeutet: Öffnen Sie das Fenster **Einstellungen** und wählen Sie links die Seite **Allgemein**.',
        'Die Abbildungen zeigen Windows 11. Unter macOS und Linux funktioniert alles genauso; nur Fensterrahmen und Systemmenüs sehen anders aus.',
      ],
    },

    // ───────────────────────── 2 ─────────────────────────
    { h1: 'Installation und erster Start' },
    { h2: 'Herunterladen und installieren (Windows)' },
    {
      ol: [
        'Öffnen Sie die Release-Seite auf GitHub (https://github.com/naritaroad/qrcode-tool/releases/latest).',
        'Laden Sie für die meisten Computer `QRcodeTool-win-x64-Setup.exe` herunter, für Computer mit ARM-Prozessor `QRcodeTool-win-arm64-Setup.exe`.',
        'Führen Sie die heruntergeladene Datei aus. QRcode tool wird nur für Ihr Benutzerkonto installiert und braucht keine Administratorrechte.',
        'Nach der Installation startet QRcode tool und zeigt den Willkommensbildschirm.',
      ],
    },
    { tip: 'Wenn Sie nichts installieren möchten, laden Sie die Datei `Portable.zip` herunter, entpacken Sie sie und starten Sie das Programm direkt. Die portable Version kann sich nicht selbst aktualisieren.' },
    { h2: 'Wenn Windows „Der Computer wurde durch Windows geschützt“ anzeigt' },
    { p: 'Die aktuellen Versionen sind noch nicht codesigniert, daher kann Windows SmartScreen vor einem unbekannten Herausgeber warnen. Das ist bei neuen, nicht signierten Programmen üblich.' },
    {
      ol: [
        'Klicken Sie in der Warnung auf **Weitere Informationen**.',
        'Prüfen Sie, dass der App-Name QRcode tool lautet, und klicken Sie auf **Trotzdem ausführen**.',
      ],
    },
    { p: 'Um sicherzugehen, dass der Download nicht verändert wurde, führen Sie in PowerShell den folgenden Befehl aus und vergleichen das Ergebnis mit der Datei `SHA256SUMS` auf der Release-Seite:' },
    { code: 'Get-FileHash .\\QRcodeTool-win-x64-Setup.exe -Algorithm SHA256' },
    { h2: 'macOS und Linux' },
    { p: '**macOS:** Laden Sie die Datei `.pkg` herunter und installieren Sie sie. Die Versionen sind noch nicht von Apple notariell beglaubigt; klicken Sie beim ersten Mal mit der rechten Maustaste auf die App und wählen Sie **Öffnen**. Erlauben Sie QRcode tool beim ersten Scan unter **Systemeinstellungen › Datenschutz & Sicherheit › Bildschirmaufnahme** und, wenn Sie die Webcam nutzen möchten, unter **Kamera**.' },
    { p: '**Linux:** Laden Sie die Datei `.AppImage` herunter, machen Sie sie ausführbar und starten Sie sie. GNOME braucht die Erweiterung „AppIndicator and KStatusNotifierItem Support“, um Symbole im Infobereich anzuzeigen.' },
    { h2: 'Der Willkommensbildschirm' },
    { p: 'Beim ersten Start erscheint der Willkommensbildschirm. Er zeigt die drei häufigsten Arten zu scannen mit ihren Tastenkombinationen und erklärt, dass sich Links nie unerwartet öffnen.' },
    { fig: 'welcome', cap: 'Der Willkommensbildschirm beim ersten Start', width: 11 },
    {
      ul: [
        '**Sprache:** folgt standardmäßig dem Betriebssystem. Eine Änderung hier gilt sofort.',
        '**Mit dem Computer starten:** standardmäßig eingeschaltet, damit die Tastenkombination immer bereit ist. Sie können es hier oder später unter **Einstellungen › Allgemein** ausschalten.',
        '**Jetzt ausprobieren:** schließt den Willkommensbildschirm und scannt einmal den ganzen Bildschirm.',
        '**Schließen:** schließt den Willkommensbildschirm und zeigt die schwebende Symbolleiste.',
      ],
    },
    { p: 'Um den Willkommensbildschirm erneut zu sehen, öffnen Sie **Einstellungen › Allgemein** und klicken auf **Willkommensbildschirm erneut anzeigen**.' },
    { h2: 'Das Symbol im Infobereich' },
    { p: 'QRcode tool hat kein klassisches Hauptfenster. Nach dem Start erscheint sein Symbol im Infobereich am rechten Ende der Taskleiste; von dort erreichen Sie jede Funktion.' },
    {
      ul: [
        '**Klick auf das Symbol:** scannt sofort den ganzen Bildschirm.',
        '**Rechtsklick:** öffnet das Menü (Abbildung 2-2).',
        '**Mauszeiger auf das Symbol:** zeigt die aktuelle Tastenkombination zum Scannen.',
      ],
    },
    { fig: 'tray-menu', cap: 'Das Menü des Symbols im Infobereich', width: 11 },
    { tip: 'Windows blendet neue Symbole im Infobereich manchmal hinter dem Pfeil „^“ aus. Ziehen Sie das Symbol auf die Taskleiste, damit es immer sichtbar bleibt.' },

    // ───────────────────────── 3 ─────────────────────────
    { h1: 'Den Bildschirm scannen' },
    { h2: 'Ganzen Bildschirm scannen' },
    {
      ol: [
        'Sorgen Sie dafür, dass die Webseite, das Dokument, das Video oder das Bild mit dem QR-Code sichtbar ist.',
        'Drücken Sie [[Ctrl+Alt+Q]], klicken Sie auf das Symbol im Infobereich oder klicken Sie in der schwebenden Symbolleiste auf **Ganzen Bildschirm scannen**.',
        'Der Bildschirm friert ein und wird abgedunkelt. Nach einem kurzen Scan-Durchlauf erhält jeder gefundene Code ein Ergebnisetikett.',
        'Drücken Sie [[Enter]], um den ausgewählten Code zu öffnen, oder klicken Sie auf das gewünschte Etikett.',
        'Drücken Sie [[Esc]] oder klicken Sie mit der rechten Maustaste, um den Scanbildschirm zu verlassen.',
      ],
    },
    { fig: 'scan-screen', cap: 'Ganzen Bildschirm scannen: Jeder Code erhält ein Etikett, der erste ist ausgewählt' },
    { p: 'Die Statusanzeige oben zeigt, wie viele Codes gefunden wurden. Die Farbe der Klammern um jeden Code zeigt das Ergebnis der Prüfungen:' },
    {
      table: {
        cols: [22, 78],
        head: ['Klammerfarbe', 'Bedeutung'],
        rows: [
          ['Weiß', 'Nichts Verdächtiges gefunden.'],
          ['Akzentfarbe (blau)', 'Der ausgewählte Code. [[Enter]] öffnet ihn.'],
          ['Gelb', 'Etwas verdient Aufmerksamkeit, zum Beispiel ein unverschlüsselter http-Link oder ein Kurzlink. Der Grund steht unter dem Etikett.'],
          ['Rot', 'Der Link wirkt irreführend, zum Beispiel eine getarnte Adresse oder eine Domäne, die Alphabete mischt.'],
        ],
      },
    },
    { p: 'Da der Bildschirm eingefroren ist, lassen sich auch Codes in Videos, Präsentationen und Spielen lesen. Bei mehreren Monitoren werden alle gleichzeitig gescannt.' },
    { h2: 'Bereich auswählen' },
    { p: 'Wenn ein Code klein, unscharf oder schräg ist oder wenn viele Codes auf dem Bildschirm sind, ziehen Sie einen Rahmen nur um den gewünschten Code. Der ausgewählte Bereich wird vor dem Lesen vergrößert; bei schwierigen Codes funktioniert das besser als ein Scan des ganzen Bildschirms.' },
    {
      ol: [
        'Drücken Sie [[Ctrl+Alt+A]] oder wählen Sie **Bereich auswählen** im Menü des Infobereichs oder in der schwebenden Symbolleiste.',
        'Der Bildschirm friert ein und der Mauszeiger wird zum Fadenkreuz. Halten Sie die linke Maustaste gedrückt und ziehen Sie einen Rahmen um den Code.',
        'Lassen Sie die Maustaste los. Nur der Inhalt im Rahmen wird gelesen.',
      ],
    },
    { fig: 'scan-region', cap: 'Bereich auswählen: Beim Ziehen wird die Größe des Rahmens angezeigt' },
    { tip: 'Ziehen Sie den Rahmen etwas größer als den Code; ein freier Rand hilft. Erscheint die Meldung „Kein Code in diesem Bereich“, ziehen Sie einen etwas größeren Rahmen.' },
    { h2: 'Die Symbolleiste auf dem Scanbildschirm' },
    { p: 'Am oberen Rand des Scanbildschirms befindet sich eine Reihe von Schaltflächen. Von links nach rechts: **Ganzen Bildschirm scannen**, **Bereich auswählen**, **Mit Kamera scannen**, **Bild aus Zwischenablage scannen**, **Bild öffnen…**, **QR-Code erstellen…**, **Verlauf**, **Einstellungen** und **Schließen**. Sie können die Methode wechseln, ohne den Scanbildschirm zu verlassen, etwa vom ganzen Bildschirm zu einem ausgewählten Bereich. Zeigen Sie mit der Maus auf eine Schaltfläche, um ihre Beschreibung und Tastenkombination zu sehen.' },
    { h2: 'Tastatur' },
    { p: 'Der Scanbildschirm lässt sich vollständig mit der Tastatur bedienen:' },
    {
      table: {
        cols: [30, 70],
        head: ['Taste', 'Aktion'],
        rows: [
          ['[[Enter]]', 'Den ausgewählten Code öffnen.'],
          ['[[Tab]], [[→]], [[↓]]', 'Den nächsten Code auswählen.'],
          ['[[Shift+Tab]], [[←]], [[↑]]', 'Den vorherigen Code auswählen.'],
          ['[[C]]', 'Den ausgewählten Code kopieren.'],
          ['[[F]] oder [[F5]]', 'Den ganzen Bildschirm erneut durchsuchen.'],
          ['[[Esc]]', 'Abbrechen und den Scanbildschirm verlassen (Rechtsklick geht auch).'],
        ],
      },
    },
    { h2: 'Wenn kein Code gefunden wird' },
    {
      ul: [
        'Verwenden Sie **Bereich auswählen** und ziehen Sie den Rahmen nur um den Code; er wird vor dem Lesen vergrößert.',
        'Bewegt sich der Code in einem Video schnell, halten Sie das Video zuerst an.',
        'Schieben Sie andere Fenster, den Mauszeiger oder alles andere beiseite, was einen Teil des Codes verdeckt.',
        'Prüfen Sie, ob **Einstellungen › Scannen › Auch Barcodes lesen** eingeschaltet ist, wenn Sie Barcodes und Formate wie Data Matrix lesen möchten.',
        'Ist der Code auf dem Bildschirm sehr klein (weniger als etwa 40 Pixel breit), vergrößern Sie zuerst die Seite oder das Bild.',
      ],
    },

    // ───────────────────────── 4 ─────────────────────────
    { h1: 'Weitere Arten zu scannen' },
    { h2: 'Webcam' },
    { p: 'Verwenden Sie die Webcam für Codes auf Papier, Visitenkarten oder dem Bildschirm eines anderen Smartphones.' },
    {
      ol: [
        'Drücken Sie [[Ctrl+Alt+W]] oder wählen Sie **Mit Kamera scannen**.',
        'Halten Sie den Code in etwa 15 bis 30 cm Abstand vor die Kamera.',
        'Wird ein Code erkannt, erscheinen Klammern um ihn, und sein Ergebnisetikett wird in eine feste Liste unten im Bild eingefügt.',
        'Klicken Sie auf das Etikett oder wählen Sie es mit [[Tab]] aus und drücken Sie [[Enter]].',
      ],
    },
    { fig: 'camera', cap: 'Mit Kamera scannen: Die Ergebnisse bleiben in einer festen Liste unten', width: 13 },
    {
      ul: [
        'Ein Code muss in mehreren aufeinanderfolgenden Bildern erkannt werden, bevor er in die Liste kommt; das verhindert Fehllesungen.',
        'Verlässt ein Code das Bild, bleibt sein Ergebnis noch eine Weile in der Liste (standardmäßig 8 Sekunden), damit Sie es noch anklicken können. Die Dauer ändern Sie unter **Einstellungen › Kamera**.',
        'Sind mehrere Kameras angeschlossen, wechseln Sie mit der Liste unten im Fenster zwischen ihnen.',
        'Der Schalter **Spiegeln** ändert nur die Darstellung des Bildes; die Erkennung funktioniert in beiden Fällen.',
        'Standardmäßig schließt sich das Kamerafenster, nachdem ein Code geöffnet wurde. Das können Sie unter **Einstellungen › Kamera** ändern.',
      ],
    },
    { note: 'Startet die Kamera nicht, schließen Sie andere Programme, die sie möglicherweise nutzen (zum Beispiel Videoanrufe), und erlauben Sie QRcode tool in den Datenschutzeinstellungen des Systems den Zugriff auf die Kamera.' },
    { h2: 'Bild aus der Zwischenablage' },
    {
      ol: [
        'Nehmen Sie den Code mit [[Win+Shift+S]] oder einem anderen Screenshot-Werkzeug auf, oder kopieren Sie ein Bild von einer Webseite.',
        'Wählen Sie **Bild aus Zwischenablage scannen**.',
        'Das Bild erscheint in einem Vorschaufenster, und jeder gefundene Code erhält ein Ergebnisetikett.',
      ],
    },
    { p: 'Befindet sich kein Bild in der Zwischenablage, bittet das Programm Sie, zuerst einen Screenshot oder ein Bild zu kopieren.' },
    { h2: 'Bilddateien' },
    {
      ol: [
        'Wählen Sie **Bild öffnen…**.',
        'Wählen Sie eine PNG-, JPEG-, BMP-, GIF- oder WebP-Datei.',
        'Klicken Sie im Vorschaufenster auf ein Ergebnisetikett. Mit den Schaltflächen unten öffnen Sie ein anderes Bild oder scannen stattdessen die Zwischenablage.',
      ],
    },
    { fig: 'image-preview', cap: 'Das Vorschaufenster: Die Etiketten liegen auf den Codes im Bild', width: 13 },
    { h2: 'Windows-Kontextmenü' },
    { p: 'Unter Windows kann QRcode tool seine wichtigsten Funktionen zum Kontextmenü (Rechtsklickmenü) des Datei-Explorers hinzufügen: Klicken Sie mit der rechten Maustaste auf den Desktophintergrund, um den Bildschirm zu scannen, oder auf ein Bild, um diese Datei zu scannen – ohne die Symbolleiste zu öffnen oder sich eine Tastenkombination zu merken.' },
    {
      figs: [
        ['shell-desktop', 'Rechtsklick auf den Desktophintergrund'],
        ['shell-image', 'Rechtsklick auf ein Bild'],
      ],
      cap: 'Einträge von QRcode tool im Kontextmenü (Windows 11, Weitere Optionen anzeigen)',
    },
    { h3: 'Das Kontextmenü ein- oder ausschalten' },
    { p: 'Das Kontextmenü ist standardmäßig **eingeschaltet**: Die Einträge erscheinen, sobald QRcode tool installiert und einmal gestartet wurde. Wenn Sie es früher ausgeschaltet haben, schalten Sie es so wieder ein:' },
    {
      ol: [
        'Öffnen Sie **Einstellungen** über das Menü im Infobereich oder die schwebende Symbolleiste.',
        'Wählen Sie links **Allgemein**.',
        'Schalten Sie **Rechtsklickmenü** ein. Die Änderung gilt sofort; Computer oder Datei-Explorer müssen nicht neu gestartet werden.',
      ],
    },
    { p: 'Schalten Sie denselben Schalter aus, um die Einträge zu entfernen. Sie werden in Ihren eigenen Benutzereinstellungen gespeichert (im Bereich HKEY_CURRENT_USER der Registrierung); daher sind keine Administratorrechte nötig, und andere Konten auf dem Computer sind nicht betroffen.' },
    { h3: 'Das Menü öffnen' },
    {
      ul: [
        '**Windows 11:** Klicken Sie mit der rechten Maustaste und wählen Sie unten **Weitere Optionen anzeigen**; die Einträge von QRcode tool stehen im vollständigen Menü. Um das vollständige Menü direkt zu öffnen, halten Sie beim Rechtsklick [[Shift]] gedrückt oder drücken Sie [[Shift+F10]].',
        '**Windows 10:** Die Einträge von QRcode tool erscheinen direkt beim Rechtsklick.',
      ],
    },
    {
      table: {
        cols: [36, 22, 42],
        head: ['Menüeintrag', 'Wo', 'Aktion'],
        rows: [
          ['QRcode tool Bildschirm scannen', 'Desktophintergrund', 'Scannt den ganzen Bildschirm (wie [[Ctrl+Alt+Q]]).'],
          ['QRcode tool Auswahl scannen', 'Desktophintergrund', 'Friert den Bildschirm ein, damit Sie einen Bereich auswählen können (wie [[Ctrl+Alt+A]]).'],
          ['QRcode tool Mit Kamera scannen', 'Desktophintergrund', 'Öffnet die Webcam (wie [[Ctrl+Alt+W]]).'],
          ['QRcode tool Symbolleiste', 'Desktophintergrund', 'Zeigt die schwebende Symbolleiste.'],
          ['QRcode tool Bild öffnen', 'Bilddateien', 'Scannt das Bild im Vorschaufenster. Unterstützt werden PNG, JPEG, BMP, GIF und WebP.'],
        ],
      },
    },
    {
      ul: [
        'Die vier Desktop-Einträge stehen gesammelt unten im Menü zwischen Trennlinien, mit dem Symbol von QRcode tool.',
        '**QRcode tool Bild öffnen** erscheint nur, wenn genau **ein** Bild ausgewählt ist, nicht bei mehreren Dateien gleichzeitig.',
        'Die Einträge verwenden die Sprache von QRcode tool. Nach einer Änderung unter **Einstellungen › Allgemein › Sprache** wird auch das Menü aktualisiert.',
        'Läuft QRcode tool nicht, startet ein Eintrag das Programm und führt die Funktion aus; läuft es bereits, übernimmt das laufende Programm die Anfrage.',
        'Bei der portablen Version zeigen die Einträge auf den aktuellen Speicherort des Programms. Starten Sie das Programm nach dem Verschieben des portablen Ordners einmal, damit die Einträge aktualisiert werden.',
        'Beim Deinstallieren von QRcode tool werden die Einträge entfernt. macOS und Linux haben keine Kontextmenü-Einträge; nutzen Sie dort die Tastenkombinationen oder die Befehlszeile.',
      ],
    },
    { tip: 'Fehlt QRcode tool im Menü: Prüfen Sie, ob **Einstellungen › Allgemein › Rechtsklickmenü** eingeschaltet ist, wählen Sie unter Windows 11 **Weitere Optionen anzeigen**, und starten Sie QRcode tool einmal, wenn es gerade installiert oder verschoben wurde.' },
    { h2: 'Befehlszeile' },
    { p: 'Jede Scanfunktion lässt sich mit einem Befehl starten. Läuft das Programm bereits, wird der Befehl an das laufende Programm weitergegeben. Das ist besonders unter Linux mit Wayland nützlich: Legen Sie die Befehle in den Tastatureinstellungen des Desktops als eigene Tastenkombinationen an.' },
    {
      table: {
        cols: [42, 58],
        head: ['Befehl', 'Aktion'],
        rows: [
          ['`qrcode-tool`', 'Startet das Programm oder zeigt die schwebende Symbolleiste, wenn es bereits läuft.'],
          ['`qrcode-tool scan-screen`', 'Scannt den ganzen Bildschirm.'],
          ['`qrcode-tool scan-region`', 'Friert den Bildschirm ein und wählt einen Bereich aus.'],
          ['`qrcode-tool scan-camera`', 'Scannt mit der Webcam.'],
          ['`qrcode-tool scan-clipboard`', 'Scannt das Bild in der Zwischenablage.'],
          ['`qrcode-tool scan-file DATEI`', 'Scannt eine Bilddatei im Vorschaufenster.'],
          ['`qrcode-tool toolbar`', 'Blendet die schwebende Symbolleiste ein oder aus.'],
          ['`qrcode-tool bubble`', 'Blendet die schwebende Blase ein oder aus.'],
          ['`qrcode-tool generate "TEXT"`', 'Öffnet den QR-Code-Generator mit dem eingetragenen Text.'],
          ['`qrcode-tool settings`', 'Öffnet die Einstellungen.'],
          ['`qrcode-tool decode DATEI… [--json]`', 'Gibt die Codes in Bilddateien im Terminal aus, ohne die Oberfläche zu starten.'],
          ['`qrcode-tool quit`', 'Beendet das laufende Programm.'],
        ],
      },
    },

    // ───────────────────────── 5 ─────────────────────────
    { h1: 'Ergebnisse und Details' },
    { h2: 'Ergebnisetiketten' },
    { p: 'Jeder gefundene Code erhält ein dunkles Ergebnisetikett. Von links nach rechts zeigt es:' },
    {
      ul: [
        '**Symbol:** die Art des Inhalts, zum Beispiel ein Globus für einen Link, Funkwellen für WLAN oder eine Person für einen Kontakt. Links mit Warnung zeigen stattdessen ein Warn- oder Gefahrensymbol.',
        '**Haupttext:** bei Links der tatsächliche Websitename statt der vollständigen Adresse, bei WLAN der Netzwerkname, bei Kontakten der Name.',
        '**Zweite Zeile:** die Art des Inhalts oder der Hauptgrund einer Warnung.',
        '**Schaltfläche ›:** öffnet immer die Detailkarte, egal welcher Inhalt.',
      ],
    },
    { h2: 'Was Enter oder ein Klick bewirken' },
    {
      table: {
        cols: [36, 64],
        head: ['Inhalt', 'Aktion'],
        rows: [
          ['Link ohne Warnungen', 'Wird im Standardbrowser geöffnet.'],
          ['Link mit Warnung', 'Zeigt zuerst die Detailkarte; der Link wird erst nach Ihrer Bestätigung geöffnet.'],
          ['Alles andere', 'Zeigt die Detailkarte, auf der Sie wählen, was geschehen soll.'],
        ],
      },
    },
    { h2: 'Die Detailkarte' },
    { p: 'Die Detailkarte listet jedes Feld des Codes auf und bietet passende Schaltflächen an. Die Kopierschaltfläche neben einem Feld kopiert nur dieses Feld. Sensible Felder wie Kennwörter werden als „••••“ verborgen; die Schloss-Schaltfläche zeigt sie kurz an. Klicken Sie außerhalb der Karte oder auf **Schließen**, um zu den Ergebnissen zurückzukehren.' },
    { fig: 'detail-wifi', cap: 'Detailkarte eines WLAN-Codes: „Verbinden“ tritt dem Netzwerk bei', width: 12 },
    { h2: 'Schaltflächen je nach Inhalt' },
    {
      table: {
        cols: [30, 70],
        head: ['Art', 'Schaltflächen'],
        rows: [
          ['Link', '**Öffnen**, **Kopieren**. Links ohne Warnungen zu Websites, denen Sie noch nicht vertrauen, bieten außerdem **Diese Website immer zulassen**.'],
          ['WLAN-Netzwerk', '**Verbinden** (das System legt das Netzwerkprofil an), **Kennwort kopieren**.'],
          ['Kontakt (vCard, MeCard)', '**Kontakt speichern** (speichert eine .vcf-Datei, die Sie ins Adressbuch importieren können), **Kopieren**.'],
          ['E-Mail', '**E-Mail schreiben** (öffnet Ihr Standard-Mailprogramm), **Kopieren**.'],
          ['Telefonnummer', '**Anrufen** (an die Anruf-App des Systems übergeben), **Kopieren**.'],
          ['SMS', '**Nachricht senden**, **Kopieren**.'],
          ['Standort', '**Karte öffnen**, **Kopieren**.'],
          ['Schlüssel für zweistufige Überprüfung', 'Nur Dienstname und Konto werden angezeigt; **Kopieren** ist verfügbar. Das Geheimnis selbst wird nie angezeigt oder gespeichert.'],
          ['Zahlungsadresse', '**Kopieren**. Prüfen Sie eine Zahlungsadresse immer doppelt, bevor Sie Geld senden.'],
          ['E-Rechnung', '**Rechnungsnummer kopieren**, **Kopieren**.'],
          ['Blockierter Link', 'Links außer `http` und `https` (zum Beispiel `file:` oder `javascript:`) können nur kopiert, nie geöffnet werden.'],
          ['Text und Barcodes', '**Kopieren**. Bei Barcodes wird zusätzlich das Format angezeigt, zum Beispiel EAN-13.'],
        ],
      },
    },
    { h2: 'Taiwanische E-Rechnungen' },
    { p: 'Eine taiwanische E-Rechnung trägt zwei QR-Codes nebeneinander. Der linke Code enthält Rechnungsnummer, Datum, Beträge und einen Teil der Positionen, der rechte die übrigen Positionen. Findet **Ganzen Bildschirm scannen** oder **Bild öffnen…** beide Codes, werden sie zu einer Rechnung zusammengeführt, und die Detailkarte zeigt Rechnungsnummer, Datum, Zufallscode, Gesamtbetrag, Steuer, die Kennungen von Verkäufer und Käufer sowie alle Positionen. Wird nur der linke Code gefunden, erinnert die Karte Sie daran, auch den rechten zu scannen.' },
    { h2: 'Sensible Daten' },
    { p: 'Schlüssel für die zweistufige Überprüfung und WLAN-Kennwörter sind sensibel. Auch wenn der Verlauf oder **Ergebnis automatisch kopieren** eingeschaltet ist, werden sie nie in den Verlauf geschrieben, nie automatisch kopiert und nie in die Protokolldateien des Programms geschrieben.' },

    // ───────────────────────── 6 ─────────────────────────
    { h1: 'Sicherheit von Links' },
    { p: 'Schädliche QR-Codes führen oft zu gefälschten Websites. QRcode tool untersucht jede Webadresse auf Ihrem Computer, bevor das Ergebnis angezeigt wird, und markiert Auffälligkeiten direkt auf dem Ergebnisetikett und der Detailkarte. Nichts wird online nachgeschlagen, und keine Adresse wird an einen Dienst gesendet.' },
    { h2: 'Vor dem Öffnen den Websitenamen prüfen' },
    { p: 'Das Ergebnisetikett zeigt den tatsächlichen Websitenamen aus der Adresse. Prüfen Sie vor dem Öffnen eines Links, ob es die erwartete Website ist. Links mit Warnung zeigen zuerst ihre Detailkarte mit einem farbigen Hinweis oben, der erklärt, worauf Sie achten sollten.' },
    { fig: 'detail-warning', cap: 'Ein Link mit Warnungen: Ein unverschlüsselter Kurzlink nennt die Gründe und wartet', width: 12 },
    { h2: 'Warnstufen' },
    {
      table: {
        cols: [18, 82],
        head: ['Stufe', 'Was das Programm tut'],
        rows: [
          ['Info', 'Zum Beispiel eine sehr lange Adresse. Wird nur auf der Detailkarte genannt; [[Enter]] öffnet den Link direkt.'],
          ['Warnung', 'Gelbe Klammern und gelbes Symbol. [[Enter]] oder ein Klick zeigt zuerst die Detailkarte; dann klicken Sie auf **Öffnen**.'],
          ['Gefahr', 'Rote Klammern und rotes Symbol. **Öffnen** ist nicht mehr die Standardschaltfläche, und nach dem Klick müssen Sie mit **Trotzdem öffnen** bestätigen.'],
        ],
      },
    },
    { h2: 'Was geprüft wird' },
    {
      table: {
        cols: [30, 12, 58],
        head: ['Angezeigte Meldung', 'Stufe', 'Erklärung und Rat'],
        rows: [
          ['Nicht verschlüsselt (http)', 'Warnung', 'Die Verbindung ist nicht verschlüsselt; Daten können unterwegs gelesen oder verändert werden. Geben Sie auf solchen Seiten keine Kennwörter oder Zahlungsdaten ein.'],
          ['Getarnte Adresse', 'Gefahr', 'Ein vertrauenswürdig wirkender Name steht vor einem „@“, der Link führt aber tatsächlich zur Website dahinter, zum Beispiel `https://bank.example.com@login-check.example.net/`.'],
          ['Internationaler Domänenname', 'Warnung', 'Die Domäne enthält nicht-lateinische Buchstaben. Die Karte zeigt zusätzlich die tatsächliche codierte Adresse (beginnt mit `xn--`), damit Sie sie prüfen können.'],
          ['Ähnlich aussehende Buchstaben', 'Gefahr', 'Ein Teil der Domäne mischt Alphabete, zum Beispiel ein kyrillisches „а“ anstelle eines lateinischen „a“. Ein häufiger Trick gefälschter Websites.'],
          ['Reine IP-Adresse', 'Warnung', 'Die Adresse verwendet Zahlen statt eines Websitenamens, was gewöhnliche Websites selten tun.'],
          ['Ungewöhnlicher Port', 'Warnung', 'Die Adresse gibt eine nicht standardmäßige Portnummer an.'],
          ['Kurzlink', 'Warnung', 'Dienste wie bit.ly verbergen das tatsächliche Ziel. Der Link wird nicht online aufgelöst, weil der Dienst sonst erfahren würde, was Sie gescannt haben. Öffnen Sie Kurzlinks nur aus vertrauenswürdigen Quellen.'],
          ['Sehr lange Adresse', 'Info', 'Sehr lange Adressen können den tatsächlichen Websitenamen aus dem Blickfeld schieben.'],
          ['Viele codierte Zeichen', 'Info', 'Viele „%“-Escapes können verwendet werden, um den Inhalt einer Adresse zu verschleiern.'],
          ['Viele Subdomänen', 'Info', 'Zum Beispiel `login.bank.example.com.secure-check.example.net`, das auf den ersten Blick wie die Website einer Bank aussehen kann.'],
        ],
      },
    },
    { h2: 'Irreführende Links' },
    { p: 'Bei Links der Stufe **Gefahr** sagt die Detailkarte in Rot, dass der Link irreführend wirkt, und nennt die Gründe. Verlassen Sie sich auf den tatsächlichen Websitenamen auf der Karte, nicht auf den Text, der neben dem Code gedruckt ist.' },
    { fig: 'detail-danger', cap: 'Eine getarnte Adresse: Sie sieht nach einer Bank aus, führt aber zu login-check.example.net', width: 12 },
    { p: 'Wenn Sie sicher sind, dass Sie fortfahren möchten, klicken Sie auf **Öffnen**. Die Karte fragt noch einmal nach; erst **Trotzdem öffnen** öffnet die Seite wirklich.' },
    { h2: 'Vertrauenswürdige Websites und automatisches Öffnen' },
    { p: 'Websites, die Sie oft nutzen, etwa die Domäne Ihrer Schule oder Firma, können Sie zu den vertrauenswürdigen Websites hinzufügen. Ein Link öffnet sich dann direkt nach dem Scan, ohne auf [[Enter]] zu warten, wenn alles Folgende zutrifft:' },
    {
      ul: [
        'Es wurde nur ein Code gefunden.',
        'Der Link hat keine Warnungen.',
        'Die Website (oder eine ihrer Subdomänen) steht auf der Vertrauensliste.',
        '**Einstellungen › Scannen › Vertrauenswürdige Websites ohne Nachfrage öffnen** ist eingeschaltet (Standard).',
      ],
    },
    { p: 'Fügen Sie eine Website mit **Diese Website immer zulassen** auf der Detailkarte eines Links ohne Warnungen hinzu, oder geben Sie die Domäne unter **Einstellungen › Scannen** ein.' },
    { fig: 'detail-link', cap: 'Ein Link ohne Warnungen: Öffnen oder die Website zur Vertrauensliste hinzufügen', width: 12 },

    // ───────────────────────── 7 ─────────────────────────
    { h1: 'Schwebende Symbolleiste und Blase' },
    { p: 'Die schwebende Symbolleiste bleibt über anderen Fenstern, sodass jede Funktion nur einen Klick entfernt ist. In gescannten Screenshots erscheint sie nie. Blenden Sie sie mit **Schwebende Symbolleiste** im Menü des Infobereichs, mit [[Ctrl+Alt+E]] oder mit dem Befehl `qrcode-tool toolbar` ein oder aus.' },
    { h2: 'Schaltflächen der Symbolleiste' },
    { fig: 'toolbar-row', cap: 'Horizontale Symbolleiste: Zeigen Sie auf eine Schaltfläche, um darunter Name und Tastenkombination zu sehen', width: 11 },
    {
      table: {
        cols: [34, 66],
        head: ['Schaltfläche', 'Aktion'],
        rows: [
          ['(gepunkteter Griff am Anfang)', 'Gedrückt halten und ziehen, um die Symbolleiste zu verschieben.'],
          ['Ganzen Bildschirm scannen', 'Wie [[Ctrl+Alt+Q]].'],
          ['Bereich auswählen', 'Wie [[Ctrl+Alt+A]].'],
          ['Mit Kamera scannen', 'Wie [[Ctrl+Alt+W]]. Ausgegraut, wenn keine Kamera gefunden wird.'],
          ['Bild aus Zwischenablage scannen', 'Liest das Bild in der Zwischenablage.'],
          ['Bild öffnen…', 'Eine Bilddatei auswählen und scannen.'],
          ['QR-Code erstellen…', 'Öffnet den QR-Code-Generator.'],
          ['Verlauf', 'Öffnet **Einstellungen › Datenschutz & Verlauf**.'],
          ['Einstellungen', 'Öffnet die Einstellungen.'],
          ['Benutzerhandbuch (Schaltfläche „?“)', 'Öffnet das PDF-Benutzerhandbuch auf GitHub in einem neuen Browser-Tab, in der Sprache der Oberfläche.'],
          ['Zu Blase minimieren', 'Blendet die Symbolleiste aus und zeigt stattdessen die kleine runde Blase.'],
          ['Symbolleiste schließen', 'Blendet die Symbolleiste aus (die Blase erscheint nicht). Das Programm läuft im Infobereich weiter.'],
        ],
      },
    },
    { h2: 'Vertikale Symbolleiste (rechts oder links)' },
    { p: 'Neben der standardmäßigen horizontalen Anordnung oben am Bildschirm kann die Symbolleiste auch eine senkrechte Spalte am rechten oder linken Bildschirmrand sein. Die Spalte braucht weniger Breite, passt gut zu breiten Bildschirmen und lässt den oberen Teil von Webseiten frei.' },
    {
      figs: [
        ['toolbar-right', 'Vertikal, rechts (Standardposition der vertikalen Anordnung)'],
        ['toolbar-left', 'Vertikal, links'],
      ],
      cap: 'Vertikale Symbolleiste: Name und Tastenkombination der Schaltfläche unter dem Mauszeiger erscheinen unter den Schaltflächen',
    },
    { p: 'So ändern Sie die Anordnung:' },
    {
      ol: [
        'Öffnen Sie **Einstellungen** und wählen Sie **Allgemein**.',
        'Suchen Sie im Abschnitt **Schwebende Symbolleiste und Blase** die Option **Anordnung der Symbolleiste**.',
        'Wählen Sie **Horizontal, oben**, **Vertikal, rechts** oder **Vertikal, links**.',
      ],
    },
    { p: 'Die Änderung gilt sofort. Die Symbolleiste springt an die Standardposition der neuen Anordnung: horizontal oben in der Mitte, vertikal in der Mitte des gewählten Rands. Danach können Sie sie beliebig verschieben.' },
    { h2: 'Die Symbolleiste verschieben' },
    { p: 'Halten Sie den gepunkteten Griff an einem Ende der Symbolleiste gedrückt und ziehen Sie. Das Programm merkt sich die letzte Position und zeigt die Symbolleiste beim nächsten Mal dort an. Liegt diese Position auf keinem Monitor mehr, etwa nach dem Abziehen eines externen Bildschirms, kehrt die Symbolleiste an ihren Standardplatz zurück.' },
    { h2: 'Die schwebende Blase' },
    { p: 'Die schwebende Blase ist die zusammengeklappte Symbolleiste. Sie belegt nur einen kleinen Kreis und erscheint standardmäßig am rechten Bildschirmrand.' },
    { fig: 'bubble', cap: 'Die schwebende Blase', width: 8 },
    {
      table: {
        cols: [30, 70],
        head: ['Aktion', 'Ergebnis'],
        rows: [
          ['Klicken', 'Klappt zur vollständigen schwebenden Symbolleiste auf.'],
          ['Etwa eine halbe Sekunde halten', 'Scannt den ganzen Bildschirm.'],
          ['Rechtsklick', 'Öffnet ein Menü: **Ganzen Bildschirm scannen**, **Bereich auswählen**, **Mit Kamera scannen**, **Bild aus Zwischenablage scannen**, **Symbolleiste anzeigen**, **Blase ausblenden**.'],
          ['Ziehen', 'Verschiebt die Blase.'],
        ],
      },
    },
    { p: 'Damit die Blase bei jedem Programmstart erscheint, schalten Sie **Einstellungen › Allgemein › Blase beim Start der App anzeigen** ein. Symbolleiste und Blase werden nie gleichzeitig angezeigt.' },
    { h2: 'Bei Vollbild-Apps ausblenden' },
    { p: 'Unter Windows verschwinden Symbolleiste und Blase, während Sie ein Video im Vollbild ansehen, eine Präsentation halten oder spielen, und kehren zurück, wenn Sie den Vollbildmodus verlassen. Sie können das unter **Einstellungen › Allgemein › Bei Vollbild-Apps ausblenden** ausschalten.' },

    // ───────────────────────── 8 ─────────────────────────
    { h1: 'QR-Codes erstellen' },
    { p: 'Der QR-Code-Generator macht aus einem Link oder einem Text einen QR-Code, den Sie mit dem Smartphone scannen oder in Dokumente und Präsentationen einfügen können.' },
    {
      ol: [
        'Wählen Sie **QR-Code erstellen…** im Menü des Infobereichs, in der schwebenden Symbolleiste oder auf dem Scanbildschirm.',
        'Geben Sie den Inhalt unter **Text oder Link** ein oder fügen Sie ihn ein. Der QR-Code erscheint sofort rechts.',
        'Wählen Sie bei Bedarf eine Stufe der **Fehlerkorrektur**.',
        'Klicken Sie auf **Bild kopieren**, um den Code in die Zwischenablage zu kopieren, oder auf **Als PNG speichern…** bzw. **Als SVG speichern…**, um ihn als Datei zu speichern.',
      ],
    },
    { fig: 'generator', cap: 'Der QR-Code-Generator', width: 13 },
    { h2: 'Fehlerkorrektur' },
    { p: 'Eine höhere Stufe sorgt dafür, dass der Code auch dann lesbar bleibt, wenn ein Teil beschädigt oder von einem Logo verdeckt ist; der Code wird dafür dichter und größer.' },
    {
      table: {
        cols: [36, 64],
        head: ['Stufe', 'Wann verwenden'],
        rows: [
          ['Niedrig – kleinster Code', 'Viel Inhalt, der nur auf dem Bildschirm angezeigt wird.'],
          ['Mittel – empfohlen', 'Der Standard für den allgemeinen Gebrauch.'],
          ['Quartil', 'Codes, die auf Gegenstände gedruckt werden, die verkratzen können.'],
          ['Hoch – übersteht Schäden oder ein Logo', 'Wenn ein Logo in die Mitte des Codes kommt oder maximale Robustheit nötig ist.'],
        ],
      },
    },
    { note: 'Ein QR-Code fasst nur eine begrenzte Menge an Inhalt. Erscheint „Zu viel Text für einen QR-Code“, kürzen Sie den Inhalt oder wählen Sie eine niedrigere Fehlerkorrektur.' },
    { p: '**PNG** eignet sich für Dokumente und Folien; **SVG** ist ein Vektorformat, das auch groß gedruckt scharf bleibt. Mit [[Esc]] schließen Sie den Generator.' },

    // ───────────────────────── 9 ─────────────────────────
    { h1: 'Einstellungen' },
    { p: 'Wählen Sie **Einstellungen** im Menü des Infobereichs, in der schwebenden Symbolleiste oder auf dem Scanbildschirm. Jede Änderung wird sofort gespeichert und angewendet; eine OK-Schaltfläche gibt es nicht.' },
    { h2: 'Allgemein' },
    { fig: 'settings-general', cap: 'Einstellungen › Allgemein', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Einstellung', 'Beschreibung'],
        rows: [
          ['Sprache', 'Sprache von Menüs und Meldungen. Folgt standardmäßig dem Betriebssystem.'],
          ['Design', '**Systemeinstellung verwenden**, **Hell** oder **Dunkel**. Die Akzentfarbe des Systems wird automatisch übernommen.'],
          ['Mit dem Computer starten', 'Startet bei der Anmeldung unauffällig im Hintergrund, damit die Tastenkombination immer funktioniert.'],
          ['Rechtsklickmenü', '(Nur Windows) Fügt Einträge von QRcode tool zu den Kontextmenüs des Desktops und von Bilddateien hinzu. Standardmäßig eingeschaltet; siehe „Windows-Kontextmenü“ in Kapitel 4.'],
          ['Anordnung der Symbolleiste', '**Horizontal, oben**, **Vertikal, rechts** oder **Vertikal, links**. Siehe Kapitel 7.'],
          ['Blase beim Start der App anzeigen', 'Zeigt die schwebende Blase beim Start.'],
          ['Bei Vollbild-Apps ausblenden', '(Nur Windows) Blendet Symbolleiste und Blase bei Vollbild-Videos, Präsentationen und Spielen aus.'],
          ['Automatisch nach Updates suchen', 'Fragt GitHub einmal am Tag, ob es eine neue Version gibt. Ohne Ihre Zustimmung wird nichts installiert.'],
          ['Willkommensbildschirm erneut anzeigen', 'Öffnet den Willkommensbildschirm des ersten Starts.'],
        ],
      },
    },
    { h2: 'Scannen' },
    { fig: 'settings-scanning', cap: 'Einstellungen › Scannen', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Einstellung', 'Beschreibung'],
        rows: [
          ['Ergebnis automatisch kopieren', 'Wird genau ein Code gefunden, kommt sein Inhalt in die Zwischenablage. Sensible Inhalte werden nie kopiert. Standardmäßig ausgeschaltet.'],
          ['Ton abspielen, wenn ein Code gefunden wird', 'Spielt einen kurzen Ton ab. Standardmäßig ausgeschaltet.'],
          ['Auch Barcodes lesen', 'Liest zusätzlich zu QR-Codes EAN, UPC, Code 128, Data Matrix, PDF417, Aztec und mehr. Standardmäßig eingeschaltet.'],
          ['Vertrauenswürdige Websites ohne Nachfrage öffnen', 'Öffnet Links zu vertrauenswürdigen Websites automatisch unter den in Kapitel 6 genannten Bedingungen.'],
          ['Vertrauenswürdige Websites', 'Geben Sie eine Domäne ein (zum Beispiel example.com) und klicken Sie auf **Hinzufügen**. Subdomänen gelten ebenfalls als vertrauenswürdig. Das Papierkorbsymbol entfernt einen Eintrag.'],
        ],
      },
    },
    { h2: 'Kamera' },
    { fig: 'settings-camera', cap: 'Einstellungen › Kamera', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Einstellung', 'Beschreibung'],
        rows: [
          ['Kamera', 'Die zu verwendende Webcam.'],
          ['Bild spiegeln', 'Zeigt die Kamera wie einen Spiegel. Die Erkennung funktioniert in beiden Fällen.'],
          ['Ergebnisse anzeigen (Sekunden)', 'Wie lange (0 bis 60 Sekunden) ein Ergebnis in der Liste bleibt, nachdem sein Code das Bild verlassen hat. Bei 0 werden nur gerade sichtbare Codes aufgeführt.'],
          ['Kamera schließen, nachdem ein Code geöffnet wurde', 'Schließt das Kamerafenster, sobald ein Code geöffnet oder verwendet wurde.'],
        ],
      },
    },
    { h2: 'Tastenkombinationen' },
    { fig: 'settings-shortcuts', cap: 'Einstellungen › Tastenkombinationen', width: 14 },
    {
      table: {
        cols: [34, 22, 44],
        head: ['Aktion', 'Standard', 'Beschreibung'],
        rows: [
          ['Ganzen Bildschirm scannen', '[[Ctrl+Alt+Q]]', 'Friert alle Monitore ein und scannt sie.'],
          ['Bereich auswählen', '[[Ctrl+Alt+A]]', 'Friert den Bildschirm ein, damit Sie einen Rahmen ziehen können.'],
          ['Mit Kamera scannen', '[[Ctrl+Alt+W]]', 'Öffnet das Webcam-Fenster.'],
          ['Symbolleiste ein-/ausblenden', '[[Ctrl+Alt+E]]', 'Schaltet die schwebende Symbolleiste um.'],
        ],
      },
    },
    { p: 'So ändern Sie eine Tastenkombination:' },
    {
      ol: [
        'Klicken Sie auf die Tastenkombination, die Sie ändern möchten. Die Schaltfläche zeigt **Tasten drücken… (Esc zum Abbrechen)**.',
        'Drücken Sie die neue Tastenkombination. Sie muss mindestens eine der Tasten [[Ctrl]], [[Alt]], [[Shift]] oder [[Win]] enthalten (auf dem Mac [[Cmd]]).',
        'Die neue Tastenkombination gilt sofort.',
      ],
    },
    { p: 'Verwendet eine andere App die Kombination bereits, steht in der Zeile „Wird bereits von einer anderen App verwendet – wählen Sie eine andere.“ Wählen Sie dann eine andere Kombination. **Standard wiederherstellen** stellt alle Standard-Tastenkombinationen wieder her. Der Abschnitt **Beim Scannen** unten listet die Tasten des Scanbildschirms auf, dieselben wie in Kapitel 3.' },
    { h2: 'Datenschutz & Verlauf' },
    { fig: 'settings-privacy', cap: 'Einstellungen › Datenschutz & Verlauf (mit eingeschaltetem Verlauf)', width: 14 },
    {
      table: {
        cols: [34, 66],
        head: ['Einstellung', 'Beschreibung'],
        rows: [
          ['Scanverlauf speichern', 'Wird nur auf diesem Computer gespeichert. WLAN-Kennwörter und Schlüssel für die zweistufige Überprüfung werden nie gespeichert. Standardmäßig ausgeschaltet.'],
          ['Anzahl gespeicherter Einträge', '5 bis 500 Einträge. Die ältesten werden zuerst entfernt.'],
          ['Letzte Scans', 'Neueste zuerst. Links ohne Warnungen lassen sich mit **Öffnen** erneut öffnen; jeder Eintrag lässt sich mit **Kopieren** kopieren.'],
          ['Verlauf löschen', 'Löscht den gesamten Verlauf.'],
        ],
      },
    },
    { h2: 'Info' },
    { fig: 'settings-about', cap: 'Einstellungen › Info', width: 14 },
    {
      ul: [
        'Zeigt die aktuelle Version. **Nach Updates suchen** prüft sofort.',
        'Links zum Quellcode, zu Problemmeldungen, zur Datenschutzerklärung und zu den Open-Source-Lizenzen.',
        '**Einstellungsordner öffnen** und **Protokollordner öffnen** öffnen diese Ordner direkt, etwa um Ihre Einstellungen zu sichern oder Protokolldateien an eine Problemmeldung anzuhängen.',
      ],
    },

    // ───────────────────────── 10 ─────────────────────────
    { h1: 'Aktualisieren und deinstallieren' },
    { h2: 'Nach Updates suchen und installieren' },
    { p: 'Mit dem Installationsprogramm installierte Kopien können sich selbst aktualisieren. Ist **Automatisch nach Updates suchen** eingeschaltet, fragt das Programm einmal am Tag bei GitHub nach. Sie können auch jederzeit im Menü des Infobereichs oder unter **Einstellungen › Info** auf **Nach Updates suchen** klicken.' },
    { fig: 'message-update', cap: 'Die Meldung, wenn eine neue Version verfügbar ist', width: 10 },
    {
      ol: [
        'Wenn die Meldung **Update verfügbar** erscheint, klicken Sie auf **Jetzt aktualisieren**.',
        'Die neue Version wird im Hintergrund heruntergeladen, und das Programm startet danach neu.',
        'Klicken Sie auf **Später**, wenn Sie jetzt nicht aktualisieren möchten.',
      ],
    },
    { p: 'Updates werden erst installiert, nachdem Sie auf **Jetzt aktualisieren** geklickt haben; das Programm installiert nie etwas von sich aus.' },
    { h2: 'Portable Version' },
    { p: 'Die portable Version (`Portable.zip`) aktualisiert sich nicht selbst; die Updatesuche meldet „Updates sind nicht verfügbar“. Laden Sie die neue Version von der GitHub-Release-Seite herunter und ersetzen Sie die alten Dateien. Ihre Einstellungen bleiben erhalten.' },
    { h2: 'Deinstallieren' },
    {
      ol: [
        'Öffnen Sie in Windows **Einstellungen › Apps › Installierte Apps**.',
        'Suchen Sie QRcode tool, klicken Sie auf **…** und wählen Sie **Deinstallieren**.',
        'Der Autostart-Eintrag und die Kontextmenü-Einträge werden ebenfalls entfernt.',
      ],
    },
    { p: 'Um auch Einstellungen und Verlauf zu entfernen, öffnen Sie vor dem Deinstallieren unter **Einstellungen › Info** den Einstellungsordner und den Protokollordner und löschen Sie sie.' },
    { h2: 'Wo Einstellungen und Protokolle gespeichert sind' },
    {
      table: {
        cols: [18, 82],
        head: ['System', 'Speicherort'],
        rows: [
          ['Windows', 'Einstellungen: `%APPDATA%\\Lrniey666\\qrcode-tool\\config`\nVerlauf und Protokolle: `%LOCALAPPDATA%\\Lrniey666\\qrcode-tool\\data`'],
          ['macOS', '`~/Library/Application Support/io.github.Lrniey666.qrcode-tool`'],
          ['Linux', 'Einstellungen: `~/.config/qrcode-tool`\nVerlauf und Protokolle: `~/.local/share/qrcode-tool`'],
        ],
      },
    },
    { p: 'Die Einstellungsdatei `settings.toml` ist reiner Text. Kopieren Sie sie, um Ihre Einstellungen auf einen anderen Computer zu übertragen.' },

    // ───────────────────────── 11 ─────────────────────────
    { h1: 'Fehlerbehebung' },
    {
      qa: [
        ['Beim Drücken der Tastenkombination passiert nichts.', 'Eine andere App verwendet sie vielleicht schon. Öffnen Sie **Einstellungen › Tastenkombinationen**; steht in der Zeile „Wird bereits von einer anderen App verwendet“, wählen Sie eine andere Kombination. Manche Spiele und Remotedesktop-Programme fangen alle Tasten ab, solange sie im Vordergrund sind.'],
        ['Der Scan findet keinen Code.', 'Verwenden Sie **Bereich auswählen** und ziehen Sie den Rahmen nur um den Code, oder vergrößern Sie zuerst die Seite oder das Bild. Siehe „Wenn kein Code gefunden wird“ in Kapitel 3.'],
        ['Warum hat sich der Link nicht sofort geöffnet?', 'Ein Link mit Warnung zeigt immer zuerst seine Details, damit Sie die tatsächliche Website prüfen können. Automatisch öffnen sich nur Links zu vertrauenswürdigen Websites ohne jede Warnung, und das nur, wenn sie der einzige gefundene Code sind.'],
        ['Es erscheint „Kurzlink – das tatsächliche Ziel ist verborgen“.', 'Kurzlink-Dienste verbergen das tatsächliche Ziel. Das Programm schlägt es nicht online nach, weil das verraten würde, was Sie gescannt haben. Öffnen Sie Kurzlinks nur aus vertrauenswürdigen Quellen.'],
        ['Wo ist das Hauptfenster?', 'Es gibt absichtlich keines. Verwenden Sie das Symbol im Infobereich, die Tastenkombination, die schwebende Symbolleiste oder die schwebende Blase.'],
        ['QRcode tool fehlt im Kontextmenü.', 'Prüfen Sie, ob **Einstellungen › Allgemein › Rechtsklickmenü** eingeschaltet ist. Unter Windows 11 stehen die Einträge unter **Weitere Optionen anzeigen** (oder halten Sie beim Rechtsklick [[Shift]] gedrückt). **QRcode tool Bild öffnen** erscheint nur, wenn ein Bild ausgewählt ist. Wenn Sie QRcode tool gerade installiert oder die portable Version verschoben haben, starten Sie es einmal.'],
        ['Die Symbolleiste ist verschwunden.', 'Drücken Sie [[Ctrl+Alt+E]] oder setzen Sie im Menü des Infobereichs das Häkchen bei **Schwebende Symbolleiste**. Ist **Bei Vollbild-Apps ausblenden** eingeschaltet, bleibt die Symbolleiste verborgen, solange ein Vollbildprogramm im Vordergrund ist.'],
        ['Die Kamera startet nicht.', 'Schließen Sie andere Programme, die die Kamera nutzen, und prüfen Sie, ob die Datenschutzeinstellungen des Systems QRcode tool den Kamerazugriff erlauben. Bei mehreren Kameras wählen Sie unter **Einstellungen › Kamera** die richtige aus.'],
        ['Das WLAN verbindet sich nicht automatisch.', 'Manche Netzwerke (zum Beispiel mit Unternehmensanmeldung) kann das Programm nicht einrichten. Klicken Sie auf der Detailkarte auf **Kennwort kopieren** und verbinden Sie sich über das WLAN-Menü des Systems.'],
        ['Mein Virenschutz warnt.', 'Neue, nicht signierte Programme, die Tastenkombinationen registrieren, den Bildschirm lesen und mit dem Computer starten, werden von verhaltensbasierter Erkennung manchmal markiert. QRcode tool nutzt Standard-Systemschnittstellen, und sein Quellcode ist öffentlich. Melden Sie den Fehlalarm bitte Ihrem Virenschutz-Anbieter oder eröffnen Sie ein Issue auf GitHub.'],
        ['Unter macOS ist der Screenshot schwarz.', 'Erlauben Sie QRcode tool unter **Systemeinstellungen › Datenschutz & Sicherheit › Bildschirmaufnahme** und starten Sie das Programm neu. macOS kann nach Systemupdates erneut fragen.'],
        ['Unter Linux mit Wayland bewirkt die Tastenkombination nichts.', 'Wayland erlaubt Programmen nicht, globale Tastenkombinationen zu registrieren. Legen Sie in den Tastatureinstellungen des Desktops eine eigene Tastenkombination an, die `qrcode-tool scan-screen` oder einen anderen Befehl ausführt.'],
        ['Wie öffne ich dieses Handbuch wieder?', 'Klicken Sie in der schwebenden Symbolleiste auf die Schaltfläche **?** (**Benutzerhandbuch**); die PDF-Ausgabe auf GitHub öffnet sich in einem neuen Browser-Tab. Die Word- und PDF-Dateien liegen außerdem im Ordner `docs/manual` des GitHub-Repositorys.'],
        ['Wie melde ich ein Problem?', 'Klicken Sie unter **Einstellungen › Info** auf **Problem melden oder Idee vorschlagen** und beschreiben Sie Ihr System, die Schritte und die angezeigten Meldungen. Sie können Dateien aus dem Protokollordner anhängen; Protokolle enthalten nur Ereignisse und Fehler, nie gescannte Inhalte.'],
      ],
    },

    // ───────────────────────── Anhänge ─────────────────────────
    { h1: 'Tastenkombinationen auf einen Blick', appendix: true },
    {
      table: {
        cols: [30, 26, 44],
        head: ['Wo', 'Taste', 'Aktion'],
        rows: [
          ['Überall', '[[Ctrl+Alt+Q]]', 'Ganzen Bildschirm scannen'],
          ['Überall', '[[Ctrl+Alt+A]]', 'Bereich auswählen'],
          ['Überall', '[[Ctrl+Alt+W]]', 'Mit Kamera scannen'],
          ['Überall', '[[Ctrl+Alt+E]]', 'Schwebende Symbolleiste ein-/ausblenden'],
          ['Scanbildschirm, Vorschau', '[[Enter]]', 'Ausgewählten Code öffnen'],
          ['Scanbildschirm, Vorschau', '[[Tab]] / [[Shift+Tab]]', 'Nächsten / vorherigen Code auswählen'],
          ['Scanbildschirm, Vorschau', '[[C]]', 'Ausgewählten Code kopieren'],
          ['Scanbildschirm', '[[F]] oder [[F5]]', 'Ganzen Bildschirm erneut durchsuchen'],
          ['Scanbildschirm, Vorschau, Generator', '[[Esc]]', 'Schließen'],
        ],
      },
    },
    { p: 'Die globalen Tastenkombinationen lassen sich unter **Einstellungen › Tastenkombinationen** ändern. Die Tabelle zeigt die Standardwerte.' },
    { h1: 'Unterstützte Codes', appendix: true },
    {
      table: {
        cols: [30, 70],
        head: ['Gruppe', 'Formate'],
        rows: [
          ['Immer gelesen', 'QR Code, Micro QR Code, rMQR Code'],
          ['Mit „Auch Barcodes lesen“', 'EAN-13, EAN-8, UPC-A, UPC-E, Code 128, Code 39, Code 93, Codabar, ITF, DataBar, Data Matrix, PDF417, Aztec und mehr'],
        ],
      },
    },
    {
      table: {
        cols: [30, 70],
        head: ['Erkannter Inhalt', 'Beispiel'],
        rows: [
          ['Weblink', '`https://example.com/`'],
          ['WLAN', '`WIFI:T:WPA;S:Netzwerk;P:Kennwort;;`'],
          ['Kontakt', 'vCard (`BEGIN:VCARD`), MeCard (`MECARD:`)'],
          ['E-Mail', '`mailto:`, `MATMSG:`'],
          ['Telefon und SMS', '`tel:`, `sms:`, `SMSTO:`'],
          ['Standort', '`geo:25.0330,121.5654`'],
          ['Schlüssel für zweistufige Überprüfung', '`otpauth://`'],
          ['Zahlungsadresse', '`bitcoin:`, `ethereum:` und andere'],
          ['Taiwanische E-Rechnung', 'Die beiden QR-Codes auf der Rechnung'],
        ],
      },
    },
  ],
};
