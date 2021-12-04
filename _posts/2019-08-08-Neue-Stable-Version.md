---
layout: post
title:  "Endlich eine neue Stable-Version"
author: oliver
date:   2019-08-08 20:42:27 +0200
---

Es hat lange gedauert, aber nun gibt es endlich wieder eine neue Stable-Firmware.
Beim Freifunk-Treffen wurde beschlossen,
dass die derzeitige Testing-Firmware [2018.2.1+bremen1](https://wiki.bremen.freifunk.net/Firmware/Changelog#freifunk-bremen-versionen_2018-2-1-bremen1) lange genug im Test war
und somit endlich im ganzen Bremer Netz verwendet werden soll.

Gegen die breite Veröffentlichtung dieser Version hatte zuletzt nur noch gesprochen,
dass einige Geräte wie z.B. der Archer C7 damit keine Mesh-Verbindungen im 5 GHz-Band aufbauen können.
Im Laufe der [Problemanalyse](https://github.com/freifunk-gluon/gluon/issues/1584) hat sich dann aber herausgestellt,
dass dieses Problem schon in der derzeitigen Stable-Version (der altehrwürdigen 2017.1.8+bremen1) vorhanden war,
so dass ein Upgrade zumindest keine existierenden Mesh-Verbindungen unterbrechen dürfte.

## Neuerungen

Seit der [letzten Stable-Version](https://wiki.bremen.freifunk.net/Firmware/Changelog#freifunk-bremen-versionen_2017-1-8-bremen1) ist schon fast ein ganzes Jahr vergangen,
in dem die Entwickler von OpenWRT, LEDE, Gluon und anderen Projekten viel getan haben.
Neben etlichen Verbesserungen am Unterbau dürfte die Unterstützung für diverse neue Geräte die merklichste Änderung sein:
TP-Link Archer C7 v5 und CPE210 v2, AVM Fritz!Box 4020 und Fritz!WLAN Repeater 300E und 450E,
sowie Ubiquiti UniFi AC Mesh Pro sind nur einige der neu unterstützten Geräte.

Zu den Änderungen am Unterbau gehört unter anderem der Wechsel von LEDE zurück zu OpenWRT (nachdem diese beiden Projekte wieder zusammengeführt wurden) sowie viele Fehlerbehebungen.
Eine detailliertere Liste der Änderungen findet ihr wie immer im [Changelog](https://wiki.bremen.freifunk.net/Firmware/Changelog).

Das Upgrade wird in den kommenden sieben Tagen (ab Freitag früh) automatisch auf alle Knoten im Bremer Freifunk-Netz verteilt,
auf denen automatische Upgrades für die Stable-Version aktiviert sind.
Das sind etwa 90% aller Knoten.
Wer das automatische Upgrade ausgeschaltet hat, findet die Firmware für ein manuelles Upgrade auch auf [downloads.bremen.freifunk.net](https://downloads.bremen.freifunk.net/firmware/all/2018.2.1+bremen1/).

## Feedback

Falls ihr Probleme mit der neuen Firmware bemerkt oder Fragen habt,
dann schreibt auf der [Mailingliste](https://lists.bremen.freifunk.net/mailman/listinfo/ff-bremen/),
oder kommt zum [Treffen](/kontakt.html#treffen),
oder tauscht euch im [Chat](https://webirc.hackint.org/#ircs://irc.hackint.org/#ffhb?nick=Gast_?) aus.
