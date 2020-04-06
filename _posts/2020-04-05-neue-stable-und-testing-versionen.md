---
layout: post
title:  "Neue Stable- und Testing-Versionen"
author: Oliver
date:   2020-04-06 19:00:00 +0200
---
Nachdem die Testing-Firmware [2019.1.1+bremen3](https://wiki.bremen.freifunk.net/Firmware/Changelog#freifunk-bremen-versionen_2019-1-1-bremen3)
bereits seit einem Monat ohne sichtbare Probleme im Einsatz ist,
haben wir auf dem [Treffen am vergangenen Freitag](https://wiki.bremen.freifunk.net/Treffen/2020_04_03) beschlossen,
diese Version zur neuen Stable-Firmware zu befördern.

Mit dieser Version ist es jetzt wieder möglich, auf der Config-Seite ein Passwort für den SSH-Zugang zu setzen.

Außerdem zeigt die Config-Seite jetzt eine Karte von Bremen an, auf der man die Knotenposition auswählen kann.
Die Karte wird nur angezeigt, falls der Browser gerade Internetzugang hat (z.B. über ein anderes WLAN);
anderenfalls kann man immer noch wie bisher die Koordinaten als Text eingeben.
Auch das Koordinaten-Auswahl-Werkzeug auf der [Online-Karte](https://map.bremen.freifunk.net/)
(dort erreichbar über das Stecknadel-Symbol rechts oben) steht natürlich weiterhin zur Verfügung.

Die neue Stable-Version wird ab Dienstag automatisch auf allen Knoten im Bremer Freifunk-Netz installiert,
auf denen automatische Upgrades für die "stable"-Version aktiviert sind.
Wer das automatische Upgrade deaktiviert hat,
findet die Firmware für ein manuelles Upgrade auch auf [downloads.bremen.freifunk.net](https://downloads.bremen.freifunk.net/firmware/all/2019.1.1+bremen3/).


## Neue Testing-Firmware

Neben der neuen Stable-Version gibt es jetzt mit der [2019.1.2+bremen2](https://wiki.bremen.freifunk.net/Firmware/Changelog#freifunk-bremen-versionen_2019-1-2-bremen2)
auch schon wieder eine neue Testing-Version.
Diese wird seit Sonntag Nachmittag an alle Knoten verteilt, die automatische Upgrades für die "testing"-Version aktiviert haben.
Die Version enthält hauptsächlich ein Upgrade der darunterliegenden Software ([Gluon](https://wiki.freifunk.net/Gluon) und [OpenWRT](https://openwrt.org/)),
wodurch unter anderem zwei Sicherheitslücken (CVE-2020-7248 und CVE-2020-7982) geschlossen wurden.

Außerdem ist es ab dieser Version endlich möglich, Outdoor-Geräte mit 5GHz-WLAN offiziell und legal draußen zu verwenden.
Bislang war dies rechtlich problematisch, weil der von uns fürs 5GHz-Mesh verwendete Kanal (Kanal 44 auf 5,22 GHz)
in Deutschland nur zur Verwendung innerhalb von Gebäuden zugelassen ist.

Bei der Outdoor-Benutzung des 5GHz-Bands dürfen nur Kanäle verwendet werden,
die für den Außenbereich von der Bundesnetzagentur zugelassen sind.
Um Störungen des Wetterradars zu vermeiden, müssen diese Kanäle [DFS (Dynamic Frequency Selection)](https://de.wikipedia.org/wiki/Dynamic_Frequency_Selection) unterstützen.
Bei DFS horcht der Knoten nach Wetterradar-Signalen und schaltet bei Bedarf auf einen anderen Kanal um.
Dies führt dazu, dass Mesh-Verbindungen nicht konstant möglich sind.
Denn dabei müssen alle beteiligten Freifunk-Router auf dem gleichen Kanal funken.

Für Outdoor-Geräte mit 5GHz-WLAN gibt es deshalb jetzt auf der Config-Seite neue Optionen zur Outdoor-Installation,
mit denen man angeben kann, dass das Gerät draußen benutzt werden soll.
Wenn dies aktiviert ist, werden spezielle Outdoor-Kanäle für die Clients verwendet (Kanäle 100 bis 140),
DFS wird aktiviert, und Mesh-Verbindungen auf 5 GHz werden deaktiviert.
Das Gerät strahlt dann also auf dem 5GHz-Band nur noch ein Client-WLAN aus, aber kein Mesh-Signal.
Mesh-Verbindungen über 2.4 GHz sind aber weiterhin möglich.


## Feedback

Falls ihr Probleme mit der neuen Firmware bemerkt oder Fragen habt,
schreibt auf der [Mailingliste](https://lists.bremen.freifunk.net/mailman/listinfo/ff-bremen/),
kommt zum [Treffen](/kontakt.html#treffen),
oder tauscht euch im [Chat](https://webirc.hackint.org/#ircs://irc.hackint.org/#ffhb?nick=Gast_?) mit uns aus.
