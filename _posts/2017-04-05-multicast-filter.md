---
layout: post
title:  "Multicast-Filter"
author: SimJoSt
date:   2017-04-05 19:14:17 +0100
---
Mit der Firmware [2016.2.3+bremen1](https://wiki.bremen.freifunk.net/Firmware/Changelog#freifunk-bremen-versionen_2016-2-3-bremen1) wurde ein sogenannter **"Multicast-Filter"** eingeführt, welcher beim Blogpost zu der Firmwareversion beiläufig erwähnt wurde. Da die Einführung desselben weitreichende Änderungen für und Auswirkungen auf das Freifunk Bremen Netz hat, ist ein extra Blogeintrag zu dem Thema sinnvoll.  
*(Multicast-Traffic ist Datenverkehr, welcher an eine Mehrzahl an Geräten gleichzeitig gesendet wird.)*

Wie manchen bereits bekannt ist, gibt es in Mesh-Netzwerken wie dem Freifunk Bremen Netz ein sogenanntes "Grundrauschen". Dies bezeichnet Datenverkehr, welcher dauerhaft im Hintergrund abläuft, ohne dass Nutzer überhaupt verbunden sind. Damit das Freifunk Netz funktioniert, müssen sich alle Freifunk-Knoten (WLAN-Router) untereinander austauschen, um Verbindungsqualität und Verknüpfungen untereinander voneinander zu wissen, damit der beste Weg für das Versenden eines Datenpakets ermittelt werden kann.  
Darunter fällt außerdem das Abfragen von Updates und die Rückmeldung von Statistiken an unsere Server und die Karte.

Das Grundrauschen wächst zusätzlich, wenn Nutzer Ihre Geräte mit Freifunk verbinden.  
Geräte suchen das Netz nach Datei-, Drucker-, Fernseher- und Musikanlagenfreigaben ab, während andere ihre Freigaben ankündigen. Die Informationen über diese Freigaben werden als Multicast-Verkehr übertragen.

Da diese Anfragen durch das ganze Netz gehen, sind alle Knoten von jeder einzelnen Anfrage betroffen.

Dass Multicast-Traffic bei WLAN-Übertragungen immer mit der niedrigst-möglichen Geschwindigkeit gesendet werden muss, um sicherzugehen, dass alle Geräte die Datenpakete erhalten, verstärkt den ausbremsenden Effekt zusätzlich.  
Weiterhin belastet der dauerhafte Datenverkehr die Prozessoren der Freifunk-Knoten und Server und bremst so das ganze Netz aus.

Der für Bremen neue Multicast-Filter filtert all diese Dinge, bis auf die Pakete welche zur korrekten Funktion des Netzes nötig sind. Der Filter wird durch das Gluon-Pakte [`gluon-ebtables-filter-multicast`](https://gluon.readthedocs.io/en/v2016.2.4/package/gluon-ebtables-filter-multicast.html?highlight=multicast) umgesetzt. In dessen Dokumentation findet man weitere, kompakte Informationen.

Der für den Nutzer bemerkbare Effekt ist ein deutlich performanteres Bremer Freifunk Netz, gerade auf kleinen Geräte und an schmalen Internetanschlüssen. Zusätzlich sind an Freifunk-Knoten angeschlossene Netzwerkgeräte nun nur noch an diesem spezifischen Knoten zu finden, nutz- und steuerbar.  
Man könnte auf einer Feier mal Geräte wie Drucker, Fernseher und Musikanlagen allen Gästen am lokalen Freifunk-Knoten zur Verfügung stellen und gucken was passiert ;-)

Weiterhin frohes Freifunkfunken!
