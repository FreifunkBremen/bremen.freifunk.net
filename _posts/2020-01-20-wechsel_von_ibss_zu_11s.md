---
layout: post
title:  "Wechsel von ibss zu 11s (2019.1+bremen1.1 als neue Testing-Version)"
author: genofire
date:   2020-01-20 18:00:00 +0200
---

Mit der aktuellen Testing 2019.1.1-bremen1 wollen wir auch eine Umstellung im WLAN-Meshen angehen.

Wir haben mit Freifunk vor Jahren angefangen und damals das WLAN-Meshing mittels ibss umgesetzt.
Gleichzeitig wurde mit [802.11s](https://de.wikipedia.org/wiki/IEEE_802.11s) ein Standard für Meshing im WLAN entwickelt und ist über die letzten zehn Jahre in den meisten WLAN-Chips der Router implementiert worden.
Dies führt dazu, dass die Router-Modelle nun öfters 11s als ibss unterstützen.

Zusammengefasst bringt uns der Wechsel von IBSS auf 11s für die Zukunft weitere Router-Modelle (unter anderem ein paar AVM-Fritzboxen).
Zudem ist der Wechsel notwendig, da [Gluon](https://wiki.freifunk.net/Gluon), das verwendete Firmware-Framework, ebenfalls plant, kein ibss mehr zu unterstützen.

Die **Umsetzung** ist relativ komplex und wird mit viel Testerei dann zum 05.03.2020 auf allen Routern nahezu gleichzeitig durchgeführt.
Dieses ist Teil der neuesten Testing-Firmware, welche hoffentlich rechtzeitig vorher zur Stable-Version wird.

Falls ihr dies bereits jetzt ausprobieren wollt, ändert einfach die Domain im Config-Modus oder per SSH
`uci set gluon.core.domain='ffhb_11s' && gluon-reconfigure && gluon-reload`.
Doch denkt dran, dass ihr dies in euerem kompletten WLAN-Mesh macht, damit sich die Geräte untereinander wieder verbinden.

Wir hoffen, dass dies gut gelingt und als Testlauf für komplexe Mesh-Änderungen genutzt werden kann.
Denn sobald wir passende Server-Infrastruktur aufgebaut haben,
 wollen wir auf die gleiche Weise das ganze Protokoll zum Meshen (nicht nur für WLAN-Mesh-Verbindungen) von [B.A.T.M.A.N.](https://www.open-mesh.org/projects/open-mesh/wiki) IV zu B.A.T.M.A.N. V updaten.
