---
layout: post
title:  "neue Firmware und Ausblick"
author: SimJoSt
date:   2016-10-11 20:57:48 +0200
---
Am 20.09.2016 veröffentlichten wir Firmware-Version [2016.1.6+bremen1](https://wiki.bremen.freifunk.net/Firmware/Changelog#freifunk-bremen-versionen_2016-1-6-bremen1) als Testing und am 07.10.2016 deklarierten wir sie als Stable. Änderungen sind deutlich verbesserter Empfang für die Geräte CPE 210/510 von TP-Link, eine Option im Konfigurationsmodus zum Abschalten der Verschlüsselung zu unseren Gateways/VPN-Servern für eine bessere Performance und Geschwindigkeit sowie die Unterstützung für Archer C7 Geräte, welche mit der neusten Hersteller-Firmware ausgeliefert wurden.  
Da bei dieser Version Images für die Archer C5/C7 Geräte fehlten, wurde diese Version erneut gebaut unter dem Namen [2016.1.6+bremen1.1](https://wiki.bremen.freifunk.net/Firmware/Changelog#freifunk-bremen-versionen_2016-1-6-bremen1-1). Diese wurde heute als Testing veröffentlicht und wird vermutlich rechtbald auf für Geräte auf dem Stable-Branch verfügbar sein.

Am 21.09.2016 wurde zudem Gluon [2016.2](https://wiki.bremen.freifunk.net/Firmware/Changelog#gluon-versionen_2016-2) fertiggestellt und wir haben bereits 2 Firmware-Versionen auf dieser Basis gebaut. Jedoch gibt es noch Probleme mit dem WLAN-Modul vieler Geräte, weshalb diese Version noch nicht über das Autoupdate an die Bremer Geräte verteilt wird. Wir erwarten jedoch, dass in naher Zukunft 2016.2.1 mit den entsprechenden Fehlerkorrekturen folgen wird.  
Mit diesem Major-Release erhalten einige Neuerungen und Fehlerkorrekturen Einzug:

- bessere Unterstützung für Archer C5/C7
- eine Menge neuer Geräte werden unterstützt
- verbesserter SSH-Server auf den Knoten
- mögliche Abschaltung eines veralteten WLAN-Standards, welcher zu massiven Geschwindigkeitseinbußen führen kann
- Fehler im Autoupdater behoben, wodurch wiederholte Neustarts verhindert werden sollen
