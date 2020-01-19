---
layout: post
title:  "Wechsel von ibss zu 11s (2019.1+bremen1.1 als neue testing Version)"
author: genofire
date:   2020-01-20 18:00:00 +0200
---

Mit der aktuellen Testing 2019.1.1-bremen1 wollen wir auch eine Umstellung im WLAN-Meshen angehen.

Wir haben mit Freifunk vor Jahren angefangen und damals das WLAN-Meshing mittels ibss umgesetzt.
Gleichzeitig wurde ein Standard für Meshing in WLAN entwickelt und ist über die letzten 10 Jahre in den meisten WLAN-Chips der Router implementiert.
Dies führt dazu das die Router-Modelle nun öfters 11s als ibss unterstützen.

Zusammengefasst bringt es uns für die Zukunft weitere Router-Modelle (unter anderem ein paar AVM-Fritzboxen).
Zudem ist es notwendig, da Gluon das verwendet Firmware-Framework ebenfalls plant, kein ibss mehr zu unterstützen.

Die **Umsetzung** ist relativ komplex und wird mit viel testen dann zum 05.03.2020 auf allen Routern nahezu gleichzeitig durchgeführt.
(Falls es bei dir nicht geklappt hat, komme doch gern zum 06.03.2020 zu unser Freifunk treffen.)
Dieses ist Teil der nun testing, welche rechtzeitig vorher hoffentlich zur stabil wird.

Falls ihr dies bereits jetzt ausprobieren wollt, ändert einfach die Domain im Config-Modus oder per SSH
`uci set gluon.core.domain='ffhb_11s' && gluon-reconfigure && gluon-reload`.
Doch denkt dran, dass ihr dies in euer komplettes WLAN-Mesh macht, damit sich die Geräte untereinander wieder verbinden.

Wir hoffen, dass dies gut gelingt und als Testlauf für das komplette Protokoll zum Meshen genutzt werden können.
Denn sobald wir passende Server Infrastruktur aufgebaut haben,
 wollen wir auf der gleichen Weise das ganze Protokoll zum Meshen (nicht nur WLAN-Mesh Verbindungen) von Batman IV zu Batman V updaten.
