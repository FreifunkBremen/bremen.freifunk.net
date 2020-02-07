---
layout: default
title: Anleitungen
category_id: 1
---
Damit dein Router Teil des Freifunk-Netzes werden kann, muss er mit dem Freifunk-Betriebssystem (der „Firmware“) **bespielt**, **eingerichtet** und entsprechend **angeschlossen** werden. Im Folgenden leiten wir dich durch diese drei kurzen Schritte durch.

Aber eins vorweg: Falls du dir unsicher bist, richten wir dir auch gerne einen Router bei einem der nächsten Freifunktreffen ein!

## Routerauswahl

Wir empfehlen dir für den Innenbereich entweder einen
Ubiquiti UAP-AC-LITE oder einen TP-Link Archer C7 (ca. 80€).
Momentan sind auf dem Markt leider keine guten, günstigen Geräte verfügbar.

Solltest du schon ein Gerät haben, kannst du in unserer [Liste](https://bremen.freifunk.net/firmware.html) nachgucken, ob es unterstützt wird.

Wenn du feststellst, dass Freifunk nicht schnell genug ist, dann lohnt sich unter Umständen ein sogenannter "Offloader". Dies ist ein zusätzliches Gerät, das sich nur um den Verbindungsaufbau mit unserem Netz kümmert, und somit schneller wird. Wirf hierzu einen Blick in unser [Wiki](https://wiki.bremen.freifunk.net/Anleitungen/Offloader).

Um draußen Freifunk zu senden, eignet sich die Ubiquiti AC Mesh (ca. 90€). Sie ist wetterbeständig und wird über das LAN-Kabel gleich mit Strom versorgt (PoE = Power over Ethernet).
Spezielle [flache Netzwerkkabel](http://www.amazon.de/1aTTack-Flach-Netzwerk-Patch-Kabel-Stecker/dp/B004WCQFGU/) können in vielen Fällen durch Fenster oder Türen gelegt werden, so dass keine Außenwand durchbohrt werden muss.

Für Punkt-zu-Punkt-Verbindungen mit einer Länge von mehreren hundert Metern lohnt sich ein Blick auf die Ubiquiti [NanoBeam M5](http://www.heise.de/preisvergleich/ubiquiti-nanobeam-m-nbe-m5-19-a1102259.html) oder [NanoBeam AC](http://www.heise.de/preisvergleich/ubiquiti-nanobeam-ac-nbe-5ac-19-a1302545.html).


## Neue Firmware

### Firmware downloaden

Zuerst brauchst du die passende Freifunk-Firmware für deinen Router. Die **Rückseite** deines Gerätes verrät dir, welche Firmware du genau brauchst.

<img src="/images/anleitung/router_rueckseite.jpg" title="Rückseite deines Routers" />

Unter **„1.“** findest du die **Modellnummer** und unter **„2.“** die **Versionsnummer**. „Ver 8.1“ steht dabei allgemein für Version 8, „Ver 7.4“ für Version 7 usw.

Auf der [Firmwareseite](firmware.html) suchst du dir nun genau dein Router-Modell mit deiner passenden Versions-Nummer, und lädst die Datei für die **"Erstinstallation"** herunter.

In oberen Fall wäre das die Datei mit dem Namen: gluon-ffhb-*GLUONVERSION*+bremen*BREMERVERSION*-tp-link-tl-**wr841n**-nd-**v8**.bin. Achte bitte unbedingt darauf, dass Modellbezeichnung und Version genau zu deinem Gerät passen. Einzig das N bzw. ND im Modellnamen ist nicht wichtig, die Firmware für den wr841n ist auch zum wr841nd kompatibel.

**Eine falsche Firmware kann dazu führen, dass wir den Router mit sehr großem Aufwand reanimieren müssen.**

### Firmware installieren
Nachdem du dir die neue Firmware besorgt hast, musst du deinen **Computer mit dem Freifunkrouter verbinden**. Dazu schaltest du den Router ein (**„1.“**, Knopf ganz links rein drücken bei 841). Das „LAN“-Kabel steckst du in eine der **gelben Buchsen („2“)**. Verbinde das andere Ende des LAN-Kabels mit deinem Computer.

<img src="/images/anleitung/router_anschluesse.jpg" title="Anschlüsse deines Routers" />

Das Menü deines Routers, über den wir die neue Firmware aufspielen, erreichst du über den **Webbrowser**. Tippe dazu folgende Adresse in deine Navigationsleiste **(„1.“) : 192.168.0.1**

Standardmäßig musst du dich mit einem Benutzernamen und einem Password **anmelden**, diese lauten im Auslieferungszustand meist **„admin“** und **„admin“**. Gucke sonst in die Anleitung des Routers.

<img src="/images/anleitung/menu_stock_1.jpg" title="Standard Weboberfläche">

Jetzt suchst du den Menüpunkt **„System Tools“ („2.“) → „Firmware Upgrade“ („3.“)**. Oder ähnlich klingend. Hier musst du nur noch die richtige **Firmwaredatei aus dem vorherigen Schritt auswählen („4.“)** und **hochladen („5.“)**. Prüfe bitte noch einmal, ob die Firmware wirklich zu deinem Routermodell passt, bevor du auf „Upgrade“ klickst!

<img src="/images/anleitung/menu_stock_2.jpg" title="Standard Weboberfläche">

Nach wenigen Minuten sollte dein Router folgende Meldung anzeigen und neu starten.

<img src="/images/anleitung/success.png" width="300px" title="Erfolgreich geflasht">

## Freifunk-Router Betriebsmodi
Ein Router mit aufgespielter Freifunk-Firmware nennt sich "Knoten" und hat zwei Betriebsmodi:

1. Konfigurationsmodus (config mode)
2. Produktivmodus (Freifunk)

### Konfigurationsmodus
Ist ein Knoten im Konfigurationsmodus, so baut er keine Verbindungen zu anderen Knoten in der Umgebung und zum Freifunk-Server, und somit dem Internet, auf. Das WLAN ist deaktiviert.

An Geräte, die an einen LAN-Anschluss angeschlossen sind, verteilt er eine IP im Adressbereich `192.168.1.2-255`. Es kann einige Minuten dauern, bis der Knoten die IP-Adresse vergeben hat. Wer sich nicht gedulden möchte, kann sich selber manuell eine IP-Adresse geben, wenn man weiß wie das auf dem eigenen System funktioniert.  
Über `192.168.1.1` ist die Konfigurations-Website des Knotens erreichbar.  
Hier lassen sich die wichtigsten Einstellungen vornehmen.

Wurde ein Knoten gerade frisch installiert, startet er direkt in den Konfigurationsmodus für die Ersteinrichtung.  
Nach dem Speichern der Einstellungen startet der Knoten in den Produktivmodus neu.

Um später wieder in den Konfigurationsmodus zu gelangen, muss der Reset-Knopf des Gerätes so lange gedrückt werden, bis alle LEDs ein mal kurz aufleuchten.

### Produktivmodus
Ein Freifunk-Knoten wird sich in der meisten Zeit im Produktivmodus befinden. Er baut zu anderen Knoten in der Umgebung per WLAN und zu den Freifunk-Servern per Internet eine Verbindung auf.  
Über die SSID (WLAN-Name) `bremen.freifunk.net` kann man mit WLAN-fähigen Geräten sich ins Freifunk einklinken.

Im Produktivmodus ist die Konfigurationsseite unter `192.168.1.1` **nicht** erreichbar.
Es ist dennoch möglich, sich per **SSH** auf das Gerät einzuloggen. Wie das geht, ist bei [Freifunk Lippe](https://freifunk-lippe.de/howtos/ssh-key-erstellen-und-einrichten/) beschrieben.


## Freifunk-Router konfigurieren

Nach dem RESET des Routers in den Konfigurationsmodus ist der Router unter einer **anderen IP-Adresse** zu erreichen. Es hat sich daher bewährt, das LAN-Kabel zwischen Computer und Router für einen kurzen Augenblick zu entfernen, damit der Computer danach eine neue Adresse beziehen kann.

Um das neue Menü des Routers zu erreichen, tippst du diesmal die **Adresse 192.168.1.1 in deine Navigationsleiste des Browsers ein**. Dort lassen sich verschiedene Einstellungen für den Router vornehmen.

<img src="/images/anleitung/gluon_1.jpg" title="Neue Weboberfläche">

Zuerst kannst du dir einen **beliebigen Namen** für deinen  Freifunkrouter ausdenken.
Außerdem musst du festlegen, ob die Firmware des Routers sich automatisch aktualisieren soll. Bitte deaktiviere diese Option nur, wenn du weißt, was du tust.
<img src="/images/anleitung/gluon_2.png" width="350px" title="Mesh-VPN">

**Mesh-VPN aktivieren**:
Diese Einstellung sollte immer aktiv sein, außer wenn der Router als REPEATER eingesetzt wird - sich also über einen schon vorhandenen Freifunkrouter ins Freifunk-Netz (=Internet) verbindet.
**Mesh-VPN Bandbreite begrenzen**:
Falls gewünscht kannst du die maximale Bandbreite einschränken.

<img src="/images/anleitung/gluon_5.png" width="350px" title="Geo-Koordinaten">

Damit andere Freifunker oder Nachbarn den Router auch auf der **Freifunk-Karte** finden können, kannst du die **Koordinaten** des Routers eintragen. Lässt man den Haken weg, so erscheint der Router nicht auf der Karte.
Die Koordinaten sollte man sich vor der Konfiguration ggf. zwischenspeichern. Auf <a href="https://map.bremen.freifunk.net/" target="_blank">unserer Karte</a> kannst du dir die gewünschten Koordinaten anzeigen lassen (über das Stecknadel-Symbol oben rechts).

Falls es ein Auswahlfeld gibt, bei dem Du nach einer **Domain** gefragt wirst, wähle im Zweifelsfall die Domain, die mit "neu" gekennzeichnet ist.

<img src="/images/anleitung/gluon_3.png" width="350px" title="Kontakt">

Bitte gib eine **Kontaktadresse** an, damit dich andere Freifunker bei Problemen mit deinem Router erreichen können. Diese Adresse ist öffentlich einsehbar.

Mit dem **„Fertig“-Button** speicherst du die Einstellungen.

Der folgende Bildschirm bestätigt dir die erfolgreiche Einrichtung. Dein Router ist fertig eingerichtet und startet neu in den produktiven Modus.

## Hinweise

Nach dem Flashen mit der Freifunkfirmware unterscheidet der Router zwei Betriebsmodi:
* __Konfigurationsmodus__: Die Konfigurationsseite des Routers ist mit IP 192.168.1.1 erreichbar. Netzkabelanschluss (RJ45) an einer gelben LAN-Buchse
* __Produktivmodus__: Normalbetrieb, User können WLAN-Verbindungen herstellen. Jedoch ist in diesem Modus kein Zugriff auf die Konfigurationsseite möglich.

Nach erfolgreichem Flashen startet der Router einmal automatisch im Konfigrationsmodus und ist über IP 192.168.1.1 erreichbar. Bei allen weiteren Neustarts startet er automatisch immer im Produktivmodus: Die Konfigurationsseite ist unerreichbar.

Um erneut in den Konfigurationsmodus zu gelangen, muss der RESET-Knopf 10 Sekunden gedrückt gehalten werden. Nach einigen Sekunden blinken alle Status-LEDs gleichzeitig kurz auf. Der Router bootet nun in den Konfigurationsmodus.

Der per Kabel an die gelben Buchsen angeschlossene Rechner erhält vom Router eine IP im Bereich 192.168.1.*. Dieser Vorgang kann auch einige Minuten in Anspruch nehmen. Danach kannst du erneut vorgehen, wie unter "Freifunk-Router konfigurieren" beschrieben.


## Anschluss an den Heimrouter

Den geflashten und eingerichteten Freifunk-Router musst du nun **mit deinem Heimrouter verbinden**.<br>Nimm dazu das graue LAN-Kabel aus dem Karton und stecke es in den **blauen „WAN“-Anschluss** deines Freifunkrouters **(„1.“)**.<br>(**Nicht die gelben Ports** verwenden! Denn dann kann der FF-Router keine Verbindung zum Freifunknetz über das Internet aufbauen!)

<img src="/images/anleitung/ff_an_fritz.jpg" title="Anschluss Freifunkrouter">

Das andere Ende des grauen LAN-Kabels kommt in den meist **gelben LAN-Port deines Providerrouters** (Fritzbox, Speedport, Easybox usw.) .<br>An dem Kabel, was aus der Wand (TAE-Dose) zu deinem Providerrouter führt und im blauen Port **(„2.“)** steckt, musst du **nichts verändern** (hier das orangene Kabel).<br>Sobald beide Geräte mit Strom versorgt werden, hast du nach wenigen Minuten deinen Freifunkrouter am Netz. Nach kurzer Zeit wird der Name deines Routers auf der [Knotenkarte](https://map.bremen.freifunk.net) auftauchen.


## Expertenmodus

Dieser sollte immer vor den Änderungen im Wizard vorgenommen werden, da beim Verlassen der Seite die Informationen nicht automatisch gespeichert werden.

Im Expertenmodus ist es zudem noch möglich einen SSH-Zugriff einzurichten, damit man auch im produktiven Betrieb auf den Freifunk-Router, per SSH zugreifen kann. Bitte dieses nur durchführen, wenn man sich damit auskennt!  
Des Weiteren kann man sich für einen Versionszweig entscheiden, der auf dem Router immer automatisch aufgespielt wird. Wir empfehlen die Standard-Einstellung.  

Solltest du vorhin das automatische Aktualisieren deaktiviert haben, kannst du bei „Firmware aktualisieren“ eine andere Version einspielen oder aber auch gar eine ganz andere Firmware.


## Diagnose und Fehlerbehebung

### Störung des heimischen WLANs

An dieser Stelle werden Probleme und mögliche Lösungen besprochen, die sich
mit dem heimischen WLAN beschäftigen.


#### Methode 1: anderes Frequenzband

Sollte es zu Störungen des heimischen WLANs kommen, da dieses z.B. ebenfalls auf 2.4GHz sendet ist eine Möglichkeit, dieses auf das weniger verwendete 5Ghz (802.11a/n) Frequenzband umzustellen. Einfach in der Fritzbox oder ähnlichen Providerroutern schauen, wie die Umstellung des Frequenzbandes funktioniert. Dieses Frequenzband wird bereits von vielen Geräten unterstüzt, auch wenn diese nicht mehr ganz so aktuell sind - z.B. Thinkpad x300 von 2008.


#### Methode 2: zusätzlicher Router

Eine andere Möglichkeit ist die Abschaltung des WLANs z.B. der Fritzbox, da diese per Default eher kleine Antennen hat und für eine größere Reichweite Repeater verwendet werden sollen.
Um WLAN trotzdem noch zur Verfügung zu stellen, kann ein weiterer TP-Link-Router verwendet werden. Diese habe größere Antennen, welche sich auch leichter tauschen lassen. Die Fritzbox dient somit nur noch als Modem, wobei das eigentliche WLAN über einen zweiten Router zur Verfügung gestellt wird.
Wird dieser noch mit OpenWRT bespielt, ergeben sich zusätzliche Möglichkeiten zur Konfiguration.

## Weiterführende Links
* [Geräte-Liste bei wiki.freifunk.net](http://wiki.freifunk.net/Freifunk_Firmware_Gluon/Hardware)
* welche Firmware-Version gerade aktuell ist und welche Router sie unterstützt, findest du [hier](http://wiki.bremen.freifunk.net/Firmware/Changelog).
