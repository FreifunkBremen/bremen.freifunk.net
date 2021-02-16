---
layout: post
title:  "B.A.T.M.A.N-Wechsel für Testing-Nutzer"
author: Louis
date:   2021-02-07 13:32:14 +0200
---

__Dieser Artikel richtet sich an Nutzer der Testing-Firmware__ [2019.1.2+bremen4](https://wiki.bremen.freifunk.net/Firmware/Changelog#2019-1-2-bremen4), die helfen wollen, das Bremer Freifunk-Netz schneller zu machen.

## Hintergrund
Eine Website zu öffnen ist für uns meist nur einen Klick entfernt. Technisch gesehen, sind es dutzende kleine Schritte. Damit die Website durch das Freifunk-Netz zu dir geschickt werden kann, muss der Weg über verschiedene Netzwerkgeräte wie Router und Server zu deinem Endgerät bekannt sein. Es muss eine Route existieren. Um dieses "Routing" kümmert sich im Bremer Freifunk-Netz momentan [B.A.T.M.A.N](https://www.open-mesh.org/projects/open-mesh/wiki) in der Version 13. Die ist nicht mehr ganz taufrisch.

Um unter anderem eine Vielzahl neuer Geräte zu unterstützen, wollen wir auf Gluon 2020 wechseln. [Gluon](https://wiki.freifunk.net/Gluon) ist die Grundlage unserer Bremer Freifunk-Firmware.
Da diese aber B.A.T.M.A.N v13 nicht mehr unterstützt, müssen wir vorher einen Wechsel auf B.A.T.M.A.N in der Version 15 vollziehen.

## Der Wechsel
Wir wollen sicherstellen, dass B.A.T.M.A.N v15 bei uns fehlerfrei funktioniert. Deshalb bitten wir dich, deine Testing-Router auf die neue B.A.T.M.A.N-Version umzustellen.
Es gibt bereits einen eigenen VPN-Server für B.A.T.M.A.N v15. Du musst in deinem Testing-Router nur die entsprechende "Domain" einstellen, damit dieser Server verwendet wird.
Wie das geht, erklären wir dir unten.

__Hinweis__
- Remote first.
Beginne mit Änderungen am entfernten Gerät.
- B.A.T.M.A.N v15 und v13 sind nicht kompatibel. Sie meshen nicht. Stelle bitte sicher, dass alle Router, die per Kabel oder WLAN mit deinem Router meshen, die gleiche Domain ausgewählt haben.
- Stelle sicher, dass der Port UDP 5000**1** freigegeben ist. Bisher haben wir Port 50000 genutzt.

### Wechsel per Weboberfläche

1. Aktiviere den [Konfigurationsmodus](https://bremen.freifunk.net/anleitungen.html#konfigurationsmodus). Halte dazu den Reset-Knopf etwa 10 Sekunden gedrückt, bis alle Lämpchen kurz aufblinken.
2. Öffne die Seite _http://192.168.1.1/_. Dein Computer muss dazu per LAN-Kabel mit dem Router verbunden sein.
3. Wähle im Feld _Domain_ die Zeile _Freifunk Bremen neu (mit Batman v15 - Testnetz)_ aus.
4. Drücke _Speichern und Neustarten_.

### Wechsel per SSH
    uci set gluon.core.domain='ffhb_batv15' && gluon-reconfigure && gluon-reload &&  uci commit

## Hilfe und Rückmeldung
Wenn ihr Fragen habt oder eine Rückmeldung geben wollt, dann kommt in den [Chat](https://webirc.hackint.org/#ircs://irc.hackint.org/#ffhb?nick=Gast_?),
schreibt auf der [Mailingliste](https://lists.bremen.freifunk.net/mailman/listinfo/ff-bremen/),
oder kommt zum (online) [Treffen](/kontakt.html#treffen)!

## Ausblick
Sobald das neue B.A.T.M.A.N-System ausreichend getestet ist, werden wir die Umstellung des ganzen Bremer Freifunk-Netzes angehen. Das soll so ähnlich ablaufen wie die [Umstellung der Funk-Mesh-Technik auf 11s](https://bremen.freifunk.net/blog/2020/01/23/wechsel-von-ibss-zu-11s.html). Wann und wie das genau abläuft, erfährst du später in einem weiteren Blogpost.
