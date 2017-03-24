---
layout: post
title:  "neue Stable und Testing"
author: SimJoSt
date:   2017-03-24 21:12:17 +0100
---
Wir hängen mit dem Informieren über neue Firmware-Versionen mal wieder hinterher.  
Die am 13.02.2017 veröffentlichte [2016.2.3+bremen1](https://wiki.bremen.freifunk.net/Firmware/Changelog#freifunk-bremen-versionen_2016-2-3-bremen1), über die wir hier als letztes berichteten, wurde am 03.03.2017 auch für alle `stable`-Knoten freigegeben. Das Update lief vollständig und ohne große Zwischenfälle ab.

Am gleichen Tag veröffentlichten wir auch die Version [2016.2.3+bremen3](https://wiki.bremen.freifunk.net/Firmware/Changelog#freifunk-bremen-versionen_2016-2-3-bremen3) für die `testing`-Knoten.  
Die Neuerungen zur vorherigen Version waren:

- ein altes inzwischen ungenutztes Paket entfernt
- das Paket zur Auswahl des IPv6-Gateways wurde aktualisiert
- bei der Erst-Einrichtung eines Knotens ist nun
    - Mesh-VPN standardmäßig aktiviert   
      zur einfacheren und fehlerfreieren Einrichtung durch Anfänger
    - kein Bandbreitenlimit standardmäßig aktiv
    - die Standard-Vorgabe bei Aktivierung der Bandbreitenlimitierung nun mit zeitgemäßen Werten ausgestattet

Heute veröffentlichen wir "bereits" (3 Wochen später) die nächste Testing: [2016.2.4+bremen1](https://wiki.bremen.freifunk.net/Firmware/Changelog#freifunk-bremen-versionen_2016-2-4-bremen1).  
Die Änderungen dieses Mal:

- das Paket zur Auswahl des IPv6-Gateways wurde erneut aktualisiert
- VPN04 wurde entfernt  
  der Server wurde wegen Instabilität abgeschaltet
- altes Paket für die Übermittlung von Knoten-Daten an die Karte und Statistik entfernt  
  da inzwischen alle Infrastruktur auf die neue Software umgestellt wurde, wird dieses nicht mehr benötigt

Wie immer werden wir die Firmware als stabil deklarieren, wenn über gut zwei Wochen keine Fehler aufgetreten sind.  
Bis dahin, frohes Freifunken!

Für detaillierte Änderungen und Fehlerbehebungen lohnt sich wie immer ein Blick in unser [Firmware-Changelog](https://wiki.bremen.freifunk.net/Firmware/Changelog).
