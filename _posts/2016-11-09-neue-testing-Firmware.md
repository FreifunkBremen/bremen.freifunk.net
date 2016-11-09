---
layout: post
title:  "neue testing Firmware"
author: SimJoSt
date:   2016-11-09 18:58:51 +0200
---
Seit gestern Abend steht unsere neue Firmware 2016.2.1+bremen1 allen Freifunk Bremen Knoten auf dem Testing Channel zur Verfügung. Zum Zeitpunkt der Veröffentlichung dieses Posts, sollten die meisten Geräte bereits upgedated haben.

Dies ist die erste Freifunk Bremen Firmware auf Basis von Gluon 2016.2.x, da beim initialen Release dieser Major-Version von Gluon noch einige WLAN-Probleme auftraten. Dank der unermüdlichen Arbeit vieler Freiwilliger wurden die betroffenen Änderungen identifiziert und rückgängig gemacht, während gleichzeitig die Verbesserungen beibehalten werden konnten. Danke dafür!

Dies sind alle Änderungen, welche mit der neuen Firmware Einzug in das Bremer Netz halten:

- spezifische Freifunk Bremen Änderungen seit der letzten Stable
    - Abschaltung eines veralteten WLAN-Standards, welcher zu massiven Geschwindigkeitseinbußen führen kann
    - IPv6-Gateways werden nicht mehr zufällig vom Client ausgewählt, sondern das optimale wird vom Knoten zugeteilt (wie bei IPv4)
    - OpenWrt-Pakete sind jetzt von allen Knoten erreichbar, nicht nur von solchen mit einem direkten Anschluss ans Internet
    - das Feld "Höhe" wird im Konfigurationsmodus nicht mehr angezeigt
- Änderungen eingeführt mit Gluon 2016.2
    - Unterstützung für eine Menge neuer Geräte
    - Archer unterstützen nun Meshing auf 5 Ghz
    - Fehler im Autoupdater behoben, wodurch wiederholte Neustarts verhindert werden sollen
    - verbesserter SSH-Server auf den Knoten

Für detaillierte Änderungen und Fehlerbehebungen lohnt sich wie immer, ein Blick in unser [Firmware-Changelog](https://wiki.bremen.freifunk.net/Firmware/Changelog).
