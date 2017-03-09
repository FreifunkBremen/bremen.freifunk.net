---
layout: default
title: Anleitungen
category_id: 1
---
Damit dein Router Teil des Freifunk-Netzes werden kann, muss er mit dem Freifunk-Betriebssystem (der „Firmware“) **bespielt**, **eingerichtet** und entsprechend **angeschlossen** werden. Im Folgenden leiten wir dich durch diese drei kurzen Schritte durch.

Aber eins vorweg: Falls du dir unsicher bist, richten wir dir auch gerne einen Router bei einem der nächsten Freifunktreffen ein!

## Auswahl der Hardware
Wenn du dich dazu entscheidest beim Freifunk mitzumachen, hast du anfangs die Qual der Wahl beim Aussuchen eines Routers. Welche Firmware-Version gerade aktuell ist und welche Router sie unterstützt, findest du [hier](http://wiki.bremen.freifunk.net/Firmware/Changelog).
Eine gute Übersichtseite mit vielen Informationen findet sich auch im [Wiki von freifunk.net](http://wiki.freifunk.net/Freifunk_Firmware_Gluon/Hardware).

### Für den Innenbereich

Für den schmalen Geldbeutel empfehlen wir den  [**TP-Link TL-WR841N**](http://www.heise.de/preisvergleich/tp-link-tl-wr841nd-a601787.html) für knapp 20 €.
Wenn es etwas mehr kosten darf, raten wir zu dem leistungsfähigeren TP-Link TL-WDR3600 (gebraucht ab ca. 40€), TL-WDR4300 (gebraucht ab ca. 45€) oder TL-WDR4900 (gebraucht ab ca 50 €).

### Richtfunk für den Außenbereich

Zur Versorgung von Nutzern in einem 60°-Bereich eignet sich der [**TP-Link CPE-210**](http://www.heise.de/preisvergleich/tp-link-cpe210-a1189570.html) für rund 50 € und die Ubiquiti [NanoStation M2 Loco](http://www.heise.de/preisvergleich/ubiquiti-nanostation-m2-loco-a651904.html). Zum Aufbau von Richtfunkstrecken empfehlen wir den [TP-Link CPE-510](http://www.heise.de/preisvergleich/tp-link-cpe510-a1156684.html) oder die Ubiquiti NanoStation M5. Für Punkt-zu-Punkt-Verbindungen mit einer Länge von mehreren hundert Metern lohnt sich ein Blick auf die Ubiquiti [NanoBeam M5](http://www.heise.de/preisvergleich/ubiquiti-nanobeam-m-nbe-m5-19-a1102259.html) oder [NanoBeam AC](http://www.heise.de/preisvergleich/ubiquiti-nanobeam-ac-nbe-5ac-19-a1302545.html).

Alle Außengeräte werden über das Netzwerkkabel mit Strom versorgt (PoE). Spezielle [flache Netzwerkkabel](http://www.amazon.de/1aTTack-Flach-Netzwerk-Patch-Kabel-Stecker/dp/B004WCQFGU/) können in vielen Fällen durch Fenster/Türen gelegt werden, so dass keine Außenwand durchbohrt werden muss.


## Neue Firmware

### Firmware downloaden

Zuerst brauchst du die passende Freifunk-Firmware für deinen Router. Die **Rückseite** deines Gerätes verrät dir, welche Firmware du genau brauchst.

<img src="http://jel.to/ff_pics/router_rueckseite.jpg" title="Rückseite deines Routers" />

Unter **„1.“** findest du die **Modellnummer** und unter **„2.“** die **Revisionsnummer**. „Ver 8.1“ steht dabei allgemein für Version 8, „Ver 7.4“ für Version 7 usw.

Auf der [Firmwareseite](firmware.html) suchst du dir nun genau dein Router-Modell in deiner Revision, und lädst die Datei für die **"Erstinstallation"** herunter.

In oberen Fall wäre das die Datei mit dem Namen: gluon-ffhb-*GLUONVERSION*+bremen*BREMERVERSION*-tp-link-tl-**wr841n**-nd-**v8**.bin. Achte bitte unbedingt darauf, dass Modellbezeichnung und Revision genau zu deinem Gerät passen. Einzig das N bzw. ND im Modellnamen ist irrelevant, die Firmware für den wr841n ist auch zum wr841nd kompatibel.

**Eine falsche Firmware kann dazu führen, dass wir den Router mit sehr großem Aufwand reanimieren müssen.**

###### Ubiquiti Besonderheit (Richtfunk)
<s>Für die Richtfunkgeräte Ubiquiti Picostation M2, die NanoStaion loco M und die NanoBridge muss das Image der Bullet benutzt werden.</s>

*Dies entfällt ab Version 2015.1.2, in welcher separierte Images für alle Geräte eingeführt wurden.*

**Ganz wichtig:** Auf der Konfigurationsseite für das Upgrade, wird auch die Version der Originalfirmware angezeigt. Ist die Versionsnummer > 5.5.x muss zwingend ein Downgrade der Firmware durchgeführt werden. Eine detailierte Anleitung ist in Vorbereitung. Bitte kommt mit dem Gerät zu einem der Freifunktreffen, wir unterstützen dort gerne.

### Firmware aufspielen

Nachdem du dir die neue Firmware besorgt hast, musst du deinen **Computer mit dem Freifunkrouter verbinden**. Dazu setzt du den Router unter Strom (**„1.“**, Knopf ganz links rein drücken bei 841). Das „LAN“-Kabel steckst du in eine der **gelben Buchsen („2“)**. Die blaue Buchse brauchst du erst später. Verbinde das andere Ende des LAN-Kabels mit deinem Computer.
Am besten du verwendest das graue LAN-Kabel, was schon im Karton deines Routers dabei war.

<img src="http://jel.to/ff_pics/router_anschluesse.jpg" title="Anschlüsse deines Routers" />

Das Menü deines Routers, über den wir die neue Firmware aufspielen, erreichst du über den **Webbrowser**. Tippe dazu folgende Adresse in deine Navigationsleiste **(„1.“) : 192.168.0.1**

Standardmäßig musst du dich mit einem Benutzernamen und einem Password **authentifizieren**, diese lauten im Auslieferungszustand **„admin“** und **„admin“**.

<img src="http://jel.to/ff_pics/menu_stock_1.jpg" title="Standard Weboberfläche">

Den für uns interessanten Menüpunkt erreichst du links unter **„System Tools“ („2.“) → „Firmware Upgrade“ („3.“)**. Hier musst du nur noch die richtige **Firmwaredatei aus dem vorherigen Schritt auswählen („4.“)** und **hochladen („5.“)**. Prüfe bitte noch einmal, ob die Firmware wirklich zu deinem Routermodell passt, bevor du auf „Upgrade“ klickst!

<img src="http://jel.to/ff_pics/menu_stock_2.jpg" title="Standard Weboberfläche">

Nach wenigen Minuten sollte dein Router folgende Meldung anzeigen und neu starten.

<img src="http://jel.to/ff_pics/success.png" width="300px" title="Erfolgreich geflasht">

## Freifunk-Router Betriebsmodi
Ein Router mit aufgespielter Freifunk-Firmware nennt sich Knoten und hat zwei Betriebsmodi:

1. Konfigurationsmodus (config mode)
2. Produktivmodus

### Konfigurationsmodus
Ist ein Knoten im Konfigurationsmodus, so baut er keine Verbindungen zu anderen Knoten in der Umgebung und zum Freifunk-Server, und somit dem Internet, auf. Das WLAN ist deaktiviert.

An Geräte, welche an einen LAN-Anschluss angeschlossen sind, verteilt er eine IP im Adressbereich `192.168.1.2-255`. Es kann einige Minuten dauern, bis der Knoten die IP vergeben hat. Wer sich nicht gedulden möchte, kann sich selber manuell eine IP geben, wenn man weiß wie das auf dem eigenen System funktioniert.  
Über `192.168.1.1` ist das Konfigurationsinterface des Knotens erreichbar.  
Hier lassen sich die wichtigsten Einstellungen vornehmen.

Wurde ein Knoten gerade frisch geflashed, startet er direkt in den Konfigurationsmodus für die Ersteinrichtung.  
Nach dem Speichern der Einstellungen startet der Knoten in den Produktivmodus neu.

Um später wieder in den Konfigurationsmodus zu gelangen, muss der Reset-Knopf des Gerätes so lange gedrückt werden, bis alle LEDs ein mal kurz aufleuchten.

### Produktivmodus
Ein Freifunk-Knoten wird sich in der meisten Zeit im Produktivmodus befinden. Er baut zu anderen Knoten in der Umgebung per WLAN und zu den Freifunk Servern per Internet eine Verbindung auf.  
Über die SSID (WLAN-Name) `bremen.freifunk.net` kann man mit WLAN-fähigen Geräten sich ins Freifunk einklinken.

Im Produktivmodus ist die Konfigurationsseite unter `192.168.1.1` **nicht** erreichbar.


## Freifunk-Router konfigurieren

Nach dem RESET des Routers in den Konfigurationsmodus ist der Router unter einer **anderen IP** zu erreichen, daher hat es sich bewährt, das LAN-Kabel zwischen Computer und Router für einen kurzen Augenblick zu entfernen, damit der Computer danach eine neue Adresse beziehen kann.

Um das neue Menü des Routers zu erreichen, tippst du diesmal die **Adresse 192.168.1.1 in deine Navigationsleiste des Browsers ein**. Dort lassen sich verschiedene Einstellungen für den Router vornehmen.

<img src="http://jel.to/ff_pics/gluon_1.jpg" title="Neue Weboberfläche">

Zuerst kannst du dir einen **beliebigen Namen** für deinen  Freifunkrouter ausdenken (oder ihn so lassen).
Außerdem musst du festlegen, ob die Firmware des Routers sich automatisch aktualisieren soll. In den meisten Fällen ist eine automatische Aktualisierung sinnvoll, so ist dein Router immer auf dem neusten Stand und unerwartete  Netzausfälle bleiben aus.

<img src="http://jel.to/ff_pics/gluon_2.png" width="350px" title="Mesh-VPN">

Dein Freifunkrouter soll sich über das Internet mit anderen Routern verbinden. (**Mesh-VPN**). Diese Einstellung ist nötig, weil sonst DCHP des Routers nicht funktioniert. Den angeschlossenen Geräten würden keine IP-Nummern automatisch zugewiesen, mit der Folge, dass es auch keine IP-Verbindungen gäbe.
<br>Allein wenn der Router als REPEATER eingesetzt wird, sich also über einen schon vorhandenen Freifunkrouter ins Freifunk-Netz (=Internet) verbindet, kann auf &quot;Mesh-VPN&quot; verzichtet werden. So ist dies z.B. sinnvoll für einen Repeater-Router im Gartenhäuschen, ohne eigenen, direkten Zugang zum Internet.
<br>Falls gewünscht, kann die **Bandbreite**, die der Freifunkrouter maximal nutzten darf, über die darauf folgende Option **eingeschränkt werden** (optional).

<img src="http://jel.to/ff_pics/gluon_5.png" width="350px" title="Geo-Koordinaten">

Damit andere Freifunker oder Nachbarn den Router auch auf der **Freifunk-Karte** finden, können die **Koordinaten** des Betriebsortes des Routers eingetragen werden. Lässt man den Haken weg, so erscheint der Router nicht auf der Karte.
Die Koordinaten sollte man sich vor der Konfiguration ggf. zwischenspeichern. Auf <a href="https://map.bremen.freifunk.net/" target="_blank">unserer Karte</a> kannst du dir die gewünschten Koordinaten anzeigen lassen (über das Stecknadel-Symbol oben rechts).

<img src="http://jel.to/ff_pics/gluon_3.png" width="350px" title="Kontakt">

Nachdem du, natürlich auch **optional**, deine **Kontaktadresse** eingetragen hast, schließt du die Konfiguration mit einem Click auf den **„Fertig“-Button** ab. Der Kontakt dient dazu, dass du du dich informieren lassen kannst, wenn der Router mal keine Verbindung mehr zum Freifunk-Netz hat.
Der folgende Bildschirm bestätigt dir die erfolgreiche Einrichtung. Dein Router ist fertig eingerichtet und startet neu in den produktiven Modus. Deinen Schlüssel musst du **nicht** mehr, wie beschrieben, über einen Link übertragen.

## Hinweise

Nach dem Flashen mit der Freifunkfirmware unterscheidet der Router zwei Betriebsmodi:
* __Konfigurationsmodus__: Die Konfigurationsseite des Routers ist mit IP 192.168.1.1 erreichbar. Netzkabelanschluss (RJ45) an einer gelben LAN-Buchse
* __Produktivmodus__: Normalbetrieb, User können WLAN-Verbindungen herstellen. Jedoch ist in diesem Modus kein Zugriff auf die Konfigurationsseite möglich.

Nach erfolgreichem Flashen startet der Router einmal automatisch im Konfigrationsmodus und ist über IP 192.168.1.1 erreichbar. Bei allen weiteren Neustarts startet er automatisch immer im Produktivmodus: Die Konfigurationsseite ist unerreichbar.

Um erneut in den Konfigurationsmodus zu gelangen, muss der RESET-Knopf 10 Sekunden gedrückt gehalten werden. Nach einigen Sekunden blinken alle Status-LEDs gleichzeitig kurz auf. Der Router bootet nun in den Konfigurationsmodus.

Der per Kabel an die gelben Buchsen angeschlossene Rechner erhält vom Router eine IP im Bereich 192.168.1.*. Dieser Vorgang kann auch einige Minuten in Anspruch nehmen. Danach kannst du erneut vorgehen, wie unter "Freifunk-Router konfigurieren" beschrieben.


## Anschluss an den Heimrouter

Den geflashten und eingerichteten Freifunk-Router musst du nun **mit deinem Heimrouter verbinden**.<br>Nimm dazu das graue LAN-Kabel aus dem Karton und stecke es in den **blauen „WAN“-Anschluss** deines Freifunkrouters **(„1.“)**.<br>(**Nicht die gelben Ports** verwenden! Denn dann kann der FF-Router keine Verbindung zum Freifunknetz über das Internet aufbauen!)

<img src="http://jel.to/ff_pics/ff_an_fritz.jpg" title="Anschluss Freifunkrouter">

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
