---
layout: post
title:  neue 2016er Firmwares, Archer-Support und neue Ports
author: SimJoSt
date:   2016-05-28 18:02:11 +0100
---
Lang ist es her, dass wir über neue Firmware berichtet haben. Dabei ist seit Version 2015.1.2+bremen2 einiges passiert.  
Auf dem Testing-Branch wurden in den vergangen Monaten die folgenden Firmwares released:

- 2016.1+bremen1 (18.02.2016)
- 2016.1.2+bremen1 (19.03.2016)
- 2016.1.4+bremen2 (06.05.2016)
- 2016.1.5+bremen1 (26.05.2016)

Version 2016.1.4+bremen2 ist am 24.05.2016 auch auf dem Stable-Branch veröffentlicht worden und wird bis zum 31.05.2016 vollständig ausgerollt sein. Wir erwarten, dass 2016.1.5+bremen1 bald folgen wird.

Zwei wichtige Änderungen wurden mit den neuen Firmwares eingeführt:

- TP-LINK Archer C5/C7 Unterstützung  
  diese Geräte ersetzen die nicht mehr erhältlichen TP-LINK WDR3600/4300/4900 als stärkere Indoor-Geräte  
  Hinweis: auf dem 5 Ghz Frequenzband ist kein Mesh möglich
- UDP-Port 10000 wurde zu 50000 geändert  
  im Rahmen der Unterstützung von eingehenden IPv6-VPN-Tunnel auf den Servern, wurde der Port geändert  
  bei manchen vorgelagerten Modems/Routern (z.B. FritzBox) muss eventuell eine Portfreigabe eingerichtet werden; wer dies bereits getan hat, muss mit der neuen Firmware diese Freigabe auf den neuen Port ändern

Außerdem wurden auf dem [Treffen vom 06.05.2016](http://wiki.bremen.freifunk.net/Treffen/2016_05_06#protokoll_firmware) die [Anforderungen zum Releasen von Firmware](http://wiki.bremen.freifunk.net/Anleitungen/Firmware-herausbringen#firmware-testen) allgemein, vor allem für den Testing-Branch, drastisch reduziert.

Weitere Änderungen seit Version 2015.1.2+bremen2 sind:

- VPN05 hinzugefügt
- MTU geändert
- TP-LINK WR841N/ND v10 und v11 Unterstützung

Alle Änderungen und Details finden sich natürlich wie immer in unserem [Changelog](http://wiki.bremen.freifunk.net/Firmware/Changelog)
