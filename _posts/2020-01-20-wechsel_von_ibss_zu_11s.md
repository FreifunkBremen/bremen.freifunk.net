---
layout: post
title:  "Wechsel von ibss zu 11s (2019.1+bremen1.1 als neue Testing-Version)"
author: genofire
date:   2020-01-20 18:00:00 +0200
---

Mit der aktuellen Testing 2019.1.1-bremen1 wollen wir auch eine Umstellung im WLAN-Meshen angehen.

Als die Bremer Freifunk Initiative zu existieren begann haben wir das WLAN-Meshing mittels IBSS-Standard umgesetzt.
Gleichzeitig wurde mit [802.11s](https://de.wikipedia.org/wiki/IEEE_802.11s) ein neuerer Standard für Meshing im WLAN entwickelt und ist über die letzten zehn Jahre in den meisten WLAN-Chips der Router implementiert worden.
Dies führt dazu, dass die Router-Modelle aktuell öfters 11s als ibss unterstützen.

Zusammengefasst bringt uns der Wechsel von IBSS auf 11s für die Zukunft weitere Router-Modelle (unter anderem ein paar AVM-Fritzboxen).
Zudem ist der Wechsel notwendig, da [Gluon](https://wiki.freifunk.net/Gluon), das verwendete Basis der Bremer Freifunk-Firmware, ebenfalls plant, kein IBSS mehr zu unterstützen.

Die **Umsetzung** ist relativ komplex und wird mit viel Testerei (voraussichtlich) am 05.03.2020 auf allen Routern nahezu gleichzeitig durchgeführt.
Um einige Tests vor der Beförderung zur Stable-Version durchführen zu können, veröffentlichen wir die Firmware zunächst als Testing-Version. 

Falls ihr die Firmware bereits jetzt ausprobieren wollt, ändert einfach die Domain im Config-Modus oder per SSH:
`uci set gluon.core.domain='ffhb_11s' && gluon-reconfigure && gluon-reload`.
Denkt bitte daran, dass ihr die Umstellung in euerem kompletten WLAN-Mesh macht, damit sich die Geräte untereinander wieder verbinden können.
Euer Feedback ist gern gesehen, entweder bei einem der nächsten Freifunk-Treffen oder per Mail.

Wir hoffen, dass die Testläufe gut gelingen und viele Erfahrungen gesammelt werden, die bei komplexen Mesh-Änderungen genutzt werden können.

Sobald das Update auf 11s eingespielt ist, beginnen die Vorbereitungen für eine noch weitreichendere Neuerung: 
Das Update von [B.A.T.M.A.N.](https://www.open-mesh.org/projects/open-mesh/wiki) IV zu B.A.T.M.A.N. V .
Dazu wird zunächst die Server-Infrastruktur aufgebaut und dann das Vorgehen beim aktuellen Update wiederholt.
