---
layout: post
title:  Privates WLAN und Kanalanalyse mit der neuen Testing-Firmware
date:   2014-09-06 14:36:00 +0200
author: jplitza
---

Es war doch noch nicht die letzte Testing vor unserer ersten Stable, die ich [letzten Monat] veröffentlichte.

Grund dafür waren zwei Dinge: Zum einen wollten viele unbedingt die Funktion, auch ein privates WLAN auszustrahlen, möglichst bald benutzen können. Zum anderen wollten wir für die Diskussion darüber, welcher Kanal denn nun am sinnvollsten wäre, endlich mal handfeste Daten haben. Auch dies tut die neue Version, indem sie uns in leicht anonymisierter Form übermittelt, welche anderen WLAN-Stationen der Knoten auf welcher Frequenz sieht. Wer Datenschutzbedenken hat möge [unten](#details-zur-kanalanalyse) weiterlesen.

Außerdem haben wir etwas Feintuning an den WLAN-Einstellungen vorgenommen. So sind die Anforderungen an eine WLAN-Verbindung nun sehr viel geringer, damit sie fürs Mesh benutzt wird, und die Störung durch andere WLANs sollte reduziert werden. Konkret benutzen wir jetzt im 2.4 GHz-Band nur noch 20 MHz breite Kanäle statt zuvor 40 MHz, da die breiten Kanäle auch mehr Störungen erfahren, und haben die Multicast-Rate, die beeinflusst wann zwei Knoten sich verbinden, auf 6 MBit/s heruntergesetzt – das ist für die meisten Anwendungen (außer HD-Video-Streaming) immer noch genug.

Schließlich haben wir festgestellt, dass DHCP-Server und IPv6-Router, die an einem Knoten hängen, nicht ins restliche Netzwerk durchgelassen werden dürfen. Wir hatten vor Kurzem einen Fall, in dem ein angeblicher IPv6-Router dafür sorgte dass viele Seiten (z.B. auch Google) nicht mehr erreichbar waren, wenn der benutzte Client sich für diesen angeblichen IPv6-Router entschieden hat, der eigentlich gar keiner war. Diese Filterung ist also technisch notwendig, um den Betrieb des Dienstes "Internet" im Freifunk aufrecht zu erhalten. Wir bitten um Verständnis. Falls irgendwer ein ernsthaftes Interesse daran hat, einen DHCP-Server oder IPv6-Router im Freifunk zu betreiben und sich jetzt durch diese Filterung benachteiligt sieht, finden wir hoffentlich auf der [Mailingliste], auf einem Treffen oder im [IRC-Chat] eine Lösung.

All das ist jetzt in der [neuen Testing-Version unserer Firmware] enthalten. Mögen die Autoupdater fröhlich arbeiten! Hoffentlich ist es diesmal wirklich die letzte…

## Details zur Kanalanalyse

Ganz konkret senden die Knoten per Alfred (also so, wie sie auch bisher schon Statistiken zum Traffic oder verbundenen Clients gesendet haben) zu jeder Frequenz die gekürzten BSSIDs der anderen WLAN-APs die sie sehen, ignorieren dabei jedoch andere Freifunk-Knoten. Die BSSID ist eine 12-stellige Hexadezimalzahl, von der wir die ersten und letzten beiden Stellen abschneiden – zum Einen um APs die mehrere WLANs ausstrahlen zusammenzufassen, zum anderen um keine Rückschlüsse auf Hersteller o.Ä. ziehen zu können. Außerdem übermitteln wir ob von einem AP 40 MHz breite Kanäle genutzt werden, da in dem Fall effektiv auch der Kanal darüber oder darunter beeinflusst wird.

Ganz konkret sehen die Daten, die versendet werden, so aus:

```
"5260": ["96D77197+"],
"5180": ["651172E5+", "0E8F1635+"],
"5220": [],
"2437": ["1E58849F", "24FE64B7", "90A908EF", "0BBA8470", "0543189C", "1CF08464", "250695E5", "D9982A56-", "1C4A27B8", "265AAFBB-", "040E5692"],
"2442": ["9CA662DA-", "66B3EE61-"],
...
```

Vorne steht jeweils die Frequenz, dahinter eine Liste der gekürzten BSSIDs, ggf. mit + bzw. - falls der darüber bzw. darunter liegende Kanal auch betroffen ist. Wir übermitteln also insbesondere nicht die ESSIDs, also die Namen der WLANs in der Umgebung, sondern nur die für uns wichtigen Daten. Unser erster Ansatz, lediglich die Anzahl der APs auf jeder Frequenz zu übermitteln, erwies sich als zu sparsam, da wir damit APs, die von mehr als einem Knoten gesehen werden, doppelt gezählt hätten. Durch das übertragen der gekürzten BSSID können wir diese Dopplungen eliminieren.

[letzten Monat]: /blog/2014/08/08/Neue-Testing.html
[neuen Testing-Version unserer Firmware]: http://downloads.bremen.freifunk.net/firmware/testing/factory/
[Mailingliste]: mailto:liste@bremen.freifunk.net
[IRC-Chat]: irc://irc.hackint.org/#ffhb
