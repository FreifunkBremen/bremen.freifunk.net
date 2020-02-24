---
layout: post
title:  "Warnung auf Ausfälle während der Netzwerkumstellung zu 11s (2019.1+bremen1.1 als neue Stabil-Version)"
author: genofire
date:   2020-02-26 21:43:00 +0200
---

Mit der aktuellen Stabil 2019.1.1-bremen1 wollen wir auch eine Umstellung im WLAN-Meshen angehen.

Als die Bremer Freifunk Initiative zu existieren begann, haben wir das WLAN-Meshing mittels IBSS-Standard umgesetzt.
Gleichzeitig wurde mit [802.11s](https://de.wikipedia.org/wiki/IEEE_802.11s) ein neuerer Standard für Meshing im WLAN entwickelt und ist über die letzten zehn Jahre in den meisten WLAN-Chips der Router implementiert worden.
Dies führt dazu, dass die neueren Router-Modelle 11s öfter als IBSS unterstützen.

Zusammengefasst bringt uns der Wechsel von IBSS auf 11s für die Zukunft weitere Router-Modelle (unter anderem ein paar AVM-Fritzboxen).
Zudem ist der Wechsel notwendig, da [Gluon](https://wiki.freifunk.net/Gluon), die verwendete Basis der Bremer Freifunk-Firmware, ebenfalls plant, kein IBSS mehr zu unterstützen.

Die Umsetzung ist relativ komplex und ist dennoch Notwendig für das Fortbestehen des Bremen Freifunk Netzwerkes.

Die **Risiken** sind in der Zeit von Heute bis zum 05.03.2020 das Teile des Netzwerkes nicht richtig Funktionieren.
Doch damit dies gelingt, bitte Wir euch als Betreiber eines Freifunkknoten/-Router ein paar Sachen zu beachten:
- stellt eure Router vor dem **05.03.2020** auf (`2019.1+bremen1.1`) um, dies ist wichtig,
  da sich die Knoten ansonsten nicht mehr miteinenander verbinden
	- am Besten wäre es, wenn ihr euren **Autoupdater** mindestens auf `stabil` stellt,
	 dann müsst ihr in Zukunft so etwas nicht bedenken
	- denkt auch an eingelagerten Knoten, diese kurzzeitig in Betrieb zu nehemen, damit auch diese das Update bekommen.
- falls teile eurer Mesh-Netzwerk zwischenzeitlich nicht erreichbar ist/war, kann es sein,
  das bereits Teile des Netzwerkes auf 11s umgestellt wurde - dafür gibt es folgende Lösungen
	- man wartet auf den Stichtag 05.03.2020 - bei dem die restlichen Knoten ebenfalls auf 11s umstellen
	- man stellt die restlichen sie manuelle per Config-Modus oder SSH auf 11s um (mehr dazu siehe [2019.1+bremen1.1 als neue Testing](/blog/2020/01/23/wechsel-von-ibss-zu-11s.html))
	- man stellt den Betroffenen Router wieder auf ibss, natürlich solange es noch vor dem 05.03.2020 ist (dies Allerdings generell nicht zu empfehlen und nur zur Vollständigkeit erwähnt wurden)

Wir hoffen auf eure Unterstützung und etwas Geduld bis zum **05.03.2020**, falls Ihr dann immer noch Probleme habt, kommt doch gerne direkt zu unser Freifunk-Treffen am 06.03.2020.
Hier werden wir auch noch ein Resüme ziehen und die gesamte Umstellung bewerten, ob wir weiter Umstellung so machen können.

Denn sobald das Update auf 11s eingespielt ist, beginnen die Vorbereitungen für eine noch weitreichendere Neuerung: 
das Update von [B.A.T.M.A.N.](https://www.open-mesh.org/projects/open-mesh/wiki) IV zu B.A.T.M.A.N. V .
Dazu wird zunächst die Server-Infrastruktur aufgebaut und dann das Vorgehen, wie bei der aktuellen 11s Umstellung, wiederholt.

Euer Feedback ist daher ausdrücklich erwünscht, entweder bei einem der nächsten Freifunk-Treffen, per Mail, bei Facebook, Twitter, Instagram oder im Chat.
