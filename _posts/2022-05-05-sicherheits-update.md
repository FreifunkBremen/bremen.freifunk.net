---
layout: post
title:  "Sicherheitsupdate für alle Freifunk-Router"
author: Oliver
date:   2022-05-06 19:22:00 +0200
---

In der Gluon-Software, die wir als Firmware für Freifunk-Router im Bremer Netz verwenden, wurde eine [kritische Sicherheitslücke](https://github.com/freifunk-gluon/gluon/security/advisories/GHSA-xqhj-fmc7-f8mv) entdeckt.
Durch diese Lücke könnten Angreifer unter bestimmten Umständen eine eigene Firmware auf die Freifunk-Knoten aufspielen, und könnten die Geräte dadurch übernehmen.

Wir haben deshalb gestern Abend kurzfristig eine neue Version der Firmware veröffentlicht (Version [2019.1.3+bremen3](https://wiki.bremen.freifunk.net/Firmware/Changelog.md#2019-1-3-bremen3)) und gleich für alle Stable- und Testing-Geräte bereitgestellt.
Die Firmware sollte inzwischen auf allen Knoten aufgespielt sein, die automatische Updates aktiviert haben.

Die Lücke selbst ist in dem Auto-Updater (genauer: in dem Teil vom Auto-Updater, der neue Updates auf Korrektheit überprüft).
Falls ihr automatische Updates deaktiviert habt, seid ihr deshalb erst einmal nicht von der Lücke betroffen.
Ihr solltet dann aber trotzdem bald das Update von Hand einspielen.

Die Sicherheitslücke wird unter der Bezeichnung "CVE-2022-24884" geführt.
Es gibt dazu auch eine [offizielle Veröffentlichung](https://github.com/freifunk-gluon/gluon/security/advisories/GHSA-xqhj-fmc7-f8mv), und einen [Forenbeitrag](https://forum.freifunk.net/t/security-critical-vulnerability-in-gluon-bugfix-release-on-thursday-2022-05-05/23329) mit weiteren Informationen für Interessierte.

Wir möchten uns an dieser Stelle auch bei den [Gluon](https://github.com/freifunk-gluon/gluon)-Entwicklern bedanken, die seit Jahren fleißig die Firmware weiterentwickeln,
und die auch in diesem Fall das Sicherheitsupdate schnell und professionell veröffentlicht haben.

Wenn ihr mehr zu diesem Update wissen wollt, dann kommt in den [Chat](https://webirc.hackint.org/#ircs://irc.hackint.org/#ffhb?nick=Gast_?),
schreibt auf der [Mailingliste](https://lists.bremen.freifunk.net/mailman/listinfo/ff-bremen/),
oder kommt zum [Treffen](/kontakt.html#treffen)!
