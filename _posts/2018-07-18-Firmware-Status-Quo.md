---
layout: post
title:  Status Quo der Firmware
author: Joda Stößer
date:   2018-07-18 15:57:58 +0200
---
Der [letzte Firmware-Post](../../02/23/neue-stable-2017-1-4-bremen2.html) ist zwar schon einige Zeit her, trotzdem stand die Entwicklung nicht still. Hier ein kurzer Überblick über den Fortschritt der letzten Monate inklusive Änderungen in den einzelnen Versionen und ihren Veröffentlichungen auf Testing und Stable:

###### 2017.1.5+bremen2
Die `testing`-Firmware, die wir in unserem letzten Post erwähnten, wurde am 09.04.2018 als `stable` freigegeben. Die Änderungen waren wie folgt:

- neue Geräte-Unterstützung
    - TP-Link TL-WR1043N v5
    - Ubiquiti EdgeRouter-X
    - Ubiquiti EdgeRouter-X SFP
- einige Fehlerbehebungen
- Aktivierung des Knoten-lokalen DNS-Caches

###### 2017.1.6+bremen1
Veröffentlicht für `testing`-Geräte am 28.04.2018, brachte diese Version ausschließlich Fehlerbehebungen. Ungewollte Geräte-Neustarts beim Neustarten eines Gateways wurden behoben und interne Netzkomponenten wurden verbessert.
Der zuvor aktivierte DNS-Cache wurde wegen einiger Probleme wieder deaktiviert.

###### 2017.1.7+bremen2
Unsere aktuelle `stable`-Version.  
Auch diese Version bringt ausschließlich Fehlerbehebungen. Zum Beispiel wurde ein Problem mit dem Booten von Ubiquiti-Geräten behoben.  
Veröffentlicht wurde sie für `testing` am 31.05.2018 und für `stable` am 18.06.2018.

###### 2017.1.8+bremen1
Dies ist unsere aktuelle `testing`-Firmware. Sie wurde am 18.06.2018 veröffentlicht.  
- folgende Geräte werden neu unterstützt:
    - GL.iNet GL-AR750
    - TP-Link Archer C7 v4
    - TP-LINK TL-WR940N v6
    - Ubiquiti UniFi AC Mesh
Außerdem gab es folgende Änderungen:
- verschiedene Batman-Probleme behoben, die zu viel Datenverkehr und hoher Last führen konnten
- die Beschreibung des Kontaktinformations-Feldes im Konfigurationsmodus wurde um einen DSGVO-Passus erweitert

Dies ist die letzte Version der Gluon 2017.x Reihe. Version `2018.1` steht in den Startlöchern.

Für detaillierte Änderungen und Fehlerbehebungen lohnt sich wie immer ein Blick in unser [Firmware-Changelog](https://wiki.bremen.freifunk.net/Firmware/Changelog).
