---
layout: post
title:  Ein Ende der WLAN-Probleme? Neue Version der Firmware
date:   2014-08-08 19:34:00 +0200
author: jplitza
---

Nachdem es im Juli sehr still war um die Firmware-Entwicklung gibt es jetzt endlich eine [neue Version der Knoten-Software](http://downloads.bremen.freifunk.net/firmware/testing/). Und die gute Nachricht: Es sieht so aus als seien endlich die Stabilitätsprobleme der WLAN-Verbindung zuverlässig behoben!

Damit ist dies hoffentlich die letzte Testing-Version vor unserer ersten wirklich stabilen Software. Wird ja langsam auch Zeit. Sie überwacht sicherheitshalber noch, ob der Fehler auftritt, falls der Fehler einige Wochen nicht auftritt kann das aber auch wieder rausfliegen für die stabile Version.

Ansonsten fallen die Änderungen bescheiden aus. Der Autoupdater verwendet jetzt einen anderen Algorithmus, der sicherstellt dass nach einer gewissen Anzahl an Tagen wirklich alle Knoten sich aktualisiert haben, und ist jetzt standardmäßig immer an (die Option von der Einrichtungsseite ist ins Expertenmenü gewandert, da nur Experten das Autoupdate ausmachen sollten). Außerdem wird der Linksys WRT160NL jetzt unterstützt. Was sich sonst noch geändert hat steht in den [Release Notes].

Vielen Dank an dieser Stelle an die Lübecker für die ständige Weiterentwicklung der Software!

Wie immer, wenn ihr Probleme mit der neuen Version habt meldet euch bitte auf der [Mailingliste].

*Update*: Es stellte sich heraus, dass die neue Version Probleme mit statischer Konfiguration der DNS-Server im LAN hatte. Daher waren noch einige neue Versionen nötig, um nicht alle derart konfigurierten Nodes vom Netz zu trennen. Inzwischen sollte das Update aber gefahrlos möglich sein und wird auch automatisch ausgeführt.

[Release Notes]: http://gluon.readthedocs.org/en/latest/releases/v2014.3.html
[Mailingliste]: mailto:liste@bremen.freifunk.net
