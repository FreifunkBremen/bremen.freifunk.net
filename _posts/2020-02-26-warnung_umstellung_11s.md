---
layout: post
title:  "Achtung: 11s-Umstellung und die neue Stable-Version"
author: genofire
date:   2020-02-26 21:43:00 +0200
---

Mit der Firmware-Version 2019.1.1-bremen1 wollen wir jetzt die [angekündigte Umstellung beim WLAN-Mesh](/blog/2020/01/23/wechsel-von-ibss-zu-11s.html) durchführen.

Wie im vorigen Blogpost beschrieben, werden wir damit die WLAN-Mesh-Verbindungen zwischen allen Knoten vom IBSS-Protokoll auf das neue [802.11s](https://de.wikipedia.org/wiki/IEEE_802.11s)-Protokoll umstellen.
Die Änderung wird die Unterstützung einiger neuer Routermodelle (wie z.B. einige AVM-Fritzboxen) ermöglichen;
und sie ist außerdem nötig, weil die [Basis](https://wiki.freifunk.net/Gluon) unserer Bremer Freifunk-Firmware in absehbarer Zeit das IBSS-Protokoll nicht mehr unterstützen wird.

Die ganze Umstellung ist technisch komplex, aber wir haben uns ein Verfahren ausgedacht, welches dafür sorgt, dass die Umstellung problemlos und beinahe unbemerkt über die Bühne geht:  
Am **Stichtag 5. März 2020** werden alle Knoten im Netz gleichzeitig ihr Mesh-Protokoll von IBSS auf 11s umstellen.
Zumindest werden das alle Knoten tun, die mit der aktuellen Stable-Firmware [2019.1.1-bremen1](https://wiki.ffhb.de/Firmware/Changelog#freifunk-bremen-versionen_2019-1-1-bremen1) laufen. Das Update wird bereits vor der Installation komplett heruntergeladen, sodass sich keine Download-Abbrüche ergeben.

**Was ist also zu beachten?**
- Schaltet am besten den **Autoupdater** auf euren Knoten ein (z.B. auf `stable`). Dann wird euer Knoten bis zum 5.3.2020 automatisch das Update installieren und ist für die Umstellung bereit.
- oder stellt sicher, dass ihr eure Knoten bis zum 5.3.2020 auf die Version **2019.1.1-bremen1** aktualisiert habt
- denkt auch an "eingelagerte" Knoten, die nur gelegentlich angeschaltet werden: nehmt diese vor dem 5.3.2020 kurz (eine Stunde sollte genügen) in Betrieb, damit sie das Update installieren können.

Falls einzelne Knoten eures Mesh-Netzwerk zwischenzeitlich nicht erreichbar sind, kann es sein,
dass während der [Testphase](/blog/2020/01/23/wechsel-von-ibss-zu-11s.html) bereits Teile des Netzwerkes auf 11s umgestellt wurden.
Dafür gibt es folgende Lösungen:
- ihr wartet auf den Stichtag 5.3.2020; dann werden sich die restlichen Knoten ebenfalls auf 11s umstellen.
- ihr stellt die restlichen Geräte manuell (per Config-Modus oder SSH-Zugang) auf 11s um. Mehr dazu steht unter [2019.1+bremen1.1 als neue Testing](/blog/2020/01/23/wechsel-von-ibss-zu-11s.html).
- ihr stellt die betroffenen Geräte erstmal wieder auf IBSS zurück, bis am 5.3.2020 dann alle Geräte auf 11s wechseln.
    Dieser Weg ist allerdings nicht zu empfehlen und wird nur der Vollständigkeit erwähnt.

Übrigens: falls ein Knoten am 5.3. nicht eingeschaltet ist (oder offline ist), macht das nichts - solange der Knoten schon das Update auf die Version 2019.1.1-bremen1 bekommen hat; dann wird er sich beim nächsten Einschalten automatisch von IBSS auf 11s umstellen.

Was könnt ihr tun, wenn ihr nach dem 5.3. trotzdem noch einen Knoten habt, der eine zu alte Firmware hat?
In diesem Fall könnt ihr den Knoten immer noch per Kabel mit einem anderen Freifunk-Knoten (oder auch direkt mit dem Internet) verbinden, damit er sich das Update installiert.
Und auch ein komplett manuelles Upgrade (im Config-Modus oder per `autoupdater`-Befehl auf der Konsole) ist weiterhin möglich.

Wir hoffen auf eure Unterstützung und etwas Geduld bis zum **05.03.2020**.
Falls Ihr dann trotzdem noch Probleme habt, kommt doch gerne direkt zu unserem Freifunk-Treffen am 06.03.2020.
Hier werden wir auch noch ein Ré­su­mé für die ganze Umstellung ziehen und bewerten, ob wir zukünftige Umstellungen auch so durchführen wollen.

Denn sobald das Update auf 11s eingespielt ist, beginnen die Vorbereitungen für eine noch weitreichendere Neuerung:
das Update von [B.A.T.M.A.N.](https://www.open-mesh.org/projects/open-mesh/wiki) IV zu B.A.T.M.A.N. V.
Dazu wird zunächst die Server-Infrastruktur aufgebaut und dann das Vorgehen, wie bei der aktuellen 11s-Umstellung, wiederholt.

Euer Feedback ist daher ausdrücklich erwünscht, entweder bei einem der nächsten Freifunk-Treffen, per [Mail, bei Facebook, Twitter, Instagram oder im Chat](/kontakt.html).
