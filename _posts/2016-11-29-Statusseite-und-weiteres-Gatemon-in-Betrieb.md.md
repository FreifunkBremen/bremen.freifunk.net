---
layout: post
title:  "Statusseite und weiteres Gatemon in Betrieb"
author: SimJoSt
date:   2016-11-29 17:59:24 +0100
---
Über den Lauf des Jahres haben wir ein System aufgebaut, welches die Funktion der Gateways (Server) von Freifunk Bremen regelmäßig testet. Die Ergebnisse dieser Tests werden auf unserer [Statusseite](https://status.ffhb.de/) angezeigt, welche wir bis jetzt nur intern genutzt haben.

![Statusseite wenn alle Tests erfolgreich durchgelaufen sind](/blog/files/2016-11-29/statusseite.png)

Es wird nicht die generelle Erreichbarkeit der Server getestet, sondern die Funktionen, welche von Clients, also Handys und Laptops, genutzt werden. Getestet wird die Verteilung von IP-Adressen, die Erreichbarkeit von Zeit(NTP)- und DNS-Server sowie der generell Uplink über IPv4- und IPv6.  
Dafür werden kleine, meist recht leistungsarme, Geräte an verschiedenen Knoten hinter unterschiedlichen Internetanschlüssen und -anbietern betrieben, welche regelmäßig eine Reihe von Tests fahren und die Ergebnisse zurückmelden. Die genutzte Software nennt sich [Gatemon](https://github.com/FreifunkBremen/gatemon) und ist eine Eigenentwicklung.

Jeder kann relativ leicht ein solches Gerät bei sich installieren. Ein RaspberryPi oder etwas ähnliches ist ausreichend.  
Wir ermitteln gerade, ob wir eine Reihe von ausgemusterten ThinClients dafür zweckentfremden können, um für Interessierte ein paar Geräte kostenlos anzubieten.
