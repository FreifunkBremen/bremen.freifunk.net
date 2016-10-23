---
layout: post
title:  "Rückblick auf die Breminale 2016"
author: anon6789 / jelto
date:   2016-08-09 23:00:00 +0200
---

Auch dieses Jahr hat Freifunk Bremen die Breminale mit freiem WLAN versorgt. Wer die [Berichterstattung vom letzten Jahr](http://bremen.freifunk.net/blog/2015/07/29/breminale-r%C3%BCckblick.html) gelesen hat oder uns vielleicht bei [Twitter](https://twitter.com/FreifunkHB) folgt, wartet wahrscheinlich schon sehnsüchtig auf den Rückblick für dieses Jahr. Natürlich wollen wir dieses Jahr ähnlich detailliert berichten und besonders darauf eingehen, was dieses Jahr anders gemacht wurde als letztes Jahr.

<a href="/blog/files/2016-08-09/title_image.jpg"><img src="/blog/files/2016-08-09/title_image.jpg" width="600px" alt=""></a>

Erst wurde es für uns drei Wochen vor Beginn der Breminale mit dem ersten Planung-Treffen. Auf diesem Treffen wurde über die technische Umsetzung, Finanzen, organisatorisches und die Verteilung der Aufgaben geredet. Zwei weitere Treffen folgten, bis wir uns in der Woche vor der Breminale das erste mal am Osterdeich getroffen haben. Zuerst wurde das gesamte Berminalegelände mit allen Stromkästen, Zelten und Ständen kartiert und in den Meshviewer eingepflegt. Die nächsten Tage folgte das Ausrollen der Glasfaser und anschließend der Kupferkabel. Mit den ersten Glasfaserverbindungen konnte das NOC-Team mit der Einrichtung beginnen. Im letzten Schritt wurden die Freifunk-Router verteilt und die Verkabelung optimiert.

Am Breminale-Mittwoch zählte das Netz 76 Freifunk-Router, 73 davon waren WDR3600 und drei WDR4300. im Vergleich zum [letzten Jahr](http://bremen.freifunk.net/blog/2015/07/29/breminale-r%C3%BCckblick.html) wurden von Anfang an deutlich mehr Router eingesetzt. 2015 arbeiteten lediglich 20 Freifunk-Router am ersten Tag im Netz. Das schlug sich natürlich auch in den Nutzerzahlen wieder. Währen letztes Jahr am Mittwoch maximal 500 Geräte das Breminale-Netz gleichzeitig genutzt haben, konnte dieses Jahr die Zahl auf 1300 fast verdreifacht werden. Unseren Rekord vom Breminale-Samstag im letzten Jahr mit über 3000 gleichzeitigen Nutzern konnten wir dieses Jahr jedoch nicht erreichen. Bei ca. 1700 Geräten war am Freitag der Höchstand erreicht. Insgesamt haben über 11000 Menschen das Breminale-Freifunk genutzt.

<a href="/blog/files/2016-08-09/clients1.png"><img src="/blog/files/2016-08-09/clients1.png" width="600px" alt="Clients auf der Breminale"></a>

Clientzahlen aus Grafana.

<a href="/blog/files/2016-08-09/meshviewer1.png"><img src="/blog/files/2016-08-09/meshviewer1.png" width="600px" alt="Breminale im Meshviewer"></a>

Die 76 Freifunk-Router über das Breminalegelände verteilt. Zusätzlich sind die gemappten Elemente eingeblendet.

## Das Netz im Detail
Grundsätzlich ähnelte das Breminale 2016 Netz dem des Vorjahres. Im Vergleich zu herkömmlichen Freifunk-Installationen sind jedoch starke Unterschiede zu erkennen. Herkömmliche Freifunk-Router versorgen normalerweise drei, vier oder vielleicht zehn Geräte gleichzeitig. Für die Versorgung mehrerer hundert Geräte eignet sich ein normaler Freifunk Router jedoch nurnoch bedingt. Diese Problematik haben wir bereits in einem [Blogeintrag zum Thema Performance](http://bremen.freifunk.net/blog/2016/02/16/performance-und-offloader.html) erläutert. Für die Breminale wurden zwar die selben Router genutzt, die auch sonst eingesetzt werden, aber die Firmware unterscheidet sich. Im Gegensatz zu herkömmlichen Freifunk-Routern wurde bei uns die Vernetzung über WLAN und VPN-Tunnel unterbunden. Stattdessen waren alle Router über Kabel miteinander und mit einem Gateway verbunden. So konnte ein deutlich größerer Durchsatz erreicht werden und die gesamte WLAN-Kapazität wurde für die Nutzer und Nutzerinnen freigehalten. Die Router wurden dabei auch über den internen Switch hintereinander gestöpselt und zusätzlich in kleineren Gruppen über Glasfaser direkt an das Backbone angeschlossen. Gegenüber dem letzen Jahr haben wir im Backbone deutlich mehr Glasfaser verlegt. Durch die Kombination von Kuperfkabeln und Glasfaser konnten über MSTP (Multiple Spanning Tree Protocoll) Redundanzen und so Ausfallsicherheit erreicht werden.

### Verteilung der Knoten
Im letzten Jahr wurden die Freifunk-Router überall hin verteilt. Einige Router wurden in Strom-Verteilerkästen untergebracht, einige ans Bühnengeländer gehängt und wiedrum andere unter Tresen in Essensständen gelegt. Der damit verbundene Aufwand beim Auf- und Abbau war enorm, die Netzabdeckung hingegen hervorragend. Deshalb haben wir uns dieses Jahr dafür entschieden, die Freifunk-Router physisch weniger zu separieren und mehr Router an einem Ort auf zu stellen. Durch dyanmische Anpassung der Kanäle und Signalstärken war es so möglich, mit akzeptabelen Aufwand trotzdem eine gute Netzabdeckung zu erreichen. Zusätzlich wurden die Router vermehrt außerhalb der Stromkästen in "Outdoor-Boxen" installiert. Zur weiteren Vereinfachung wurden alle Router einer Box über ein gemeinsames Netzteil versorgt. So war es uns möglich, ohne die Elektriker und Elektrikerinnen zu belasten, Änderungen am Netz vorzunehmen. Bei Routern innerhalb der Stromkästen wurde außerdem darauf geachtet, jeweils zwei Ethernet-Kabel aus dem Kasten heraus zu führen, um auch hier das Netz ohne öffnen der Stromkästen erweitern zu können.


<a href="/blog/files/2016-08-09/outdoorbox1.jpg"><img src="/blog/files/2016-08-09/outdoorbox1.jpg" width="600px" alt="Outdoorbox am Stromkasten"></a>

Outdoorbox am Stromkasten

<a href="/blog/files/2016-08-09/outdoorbox2.jpg"><img src="/blog/files/2016-08-09/outdoorbox2.jpg" width="600px" alt="Outdoorbox geoeffnet"></a>

Mehrere Router in einer Box


<a href="/blog/files/2016-08-09/stromkasten_mit_ethernet.jpg"><img src="/blog/files/2016-08-09/stromkasten_mit_ethernet.jpg" width="600px" alt="Stromkasten mit Rausgeführten Netzwerkkabeln"></a>

Stromkasten mit rausgeführten Netzwerkkabeln

### Organisatorisches
Im letzten Jahr gab es oft das Problem, dass die Kommunikation beim Auf- und Abbau und auch während der Breminale nicht optimal war. Für dieses Jahr wurde deshalb jeder Freifunker mit einem PMR-Handfunkgerät ausgestattet. Es hat sich gezeigt, dass Funkgeräte die Kommunikation wesentlich vereinfachen und viel Lauferei ersparen.

<a href="/blog/files/2016-08-09/pmr.jpg"><img src="/blog/files/2016-08-09/pmr.jpg" width="600px" alt="PMR-Funkgeräte im NOC"></a>

PMR-Funkgeräte in der Ladestation im NOC

Wie im [Rückblick vom letzten Jahr](http://bremen.freifunk.net/blog/2015/07/29/breminale-r%C3%BCckblick.html) zu lesen, waren wir mit der Resonanz am Freifunkstand vor Ort eher enttäuscht und es war schade um die Arbeit, die in den Aufbau und die Besetzung des Standes geflossen sind. Dieses Jahr wurde deshalb ein unspektakulärer Bauwagen gemietet, der Rückzugsort, Materiallager und NOC bildete. Es wurde zwar vereinzelt mit vorbeilaufenden Gästen über Freifunk gesprochen, aber deutlich weniger als im letzten Jahr. Die Werbung beschränkte sich auf unser Banner, kleine QR-Codes und natürlich das freie WLAN.

<a href="/blog/files/2016-08-09/bauwagen.jpg"><img src="/blog/files/2016-08-09/bauwagen.jpg" width="600px" alt="FreifunkerInnen vor unserem Bauwagen"></a>

FreifunkerInnen vor unserem Bauwagen

### Uplink und NOC
Genauso wie letztes Jahr wurde uns durch [LWLCom](https://www.lwlcom.com/) und mit Hilfe der [Digineo GmbH](https://www.digineo.de/) eine 1GBit-Glasfaserverbindung zur Verfügung gestellt. Die Glasfaser wurde vom Schacht um etwa 250m in unseren Bauwagen verlängert. Dort war sie mit einen MikroTik Cloud Core Router CCR1009-8G-1S-1S+ verbunden. Durch den Mikrotik Router wurde der IPv4 sowie IPv6 Uplink terminiert und das IPv4-NAT + IPv6-Routing übernommen. IPv4 und IPv6-Adressen für die Clients, sowie ein DNS-Server wurden auf einem kleinen Virtualisierungsserver bereitgestellt. Die Anbindung der verteilen TP-Link Switche (TL-SG2210P) per Glasfaser wurde mittels zweier Cisco 3750 mit jeweils 4 SFP-Ports realisiert.

Ein Blick auf die Auslastung unseres Uplinks zeigt eingehend 17.3Mbit/s und ausgehend 10.5Mbit/s nach der 95% Mittelung. Insgesamt sind über die Leitung 327GB Daten ins Netzwerk geflossen und 154GB verschickt worden. Im Vergleich zum letzten Jahr sind knapp 20% mehr Daten heruntergeladen und gleich viele Daten hochgeladen worden. Für die nächsten Jahre ist noch Luft nach oben!

<a href="/blog/files/2016-08-09/traffic1.png"><img src="/blog/files/2016-08-09/traffic1.png" width="600px" alt="Ein und ausgehender Netzwerkverkehr"></a>

Ein- und ausgehender Netzwerkverkehr über die Leitung von [LWLCom](https://www.lwlcom.com/).

Die gesamte Hardware sowie der 1Gbit-Uplink wurde uns von [LWLCom](https://www.lwlcom.com/) und der [Digineo GmbH](https://www.digineo.de/) sowie einzelnen Privatpersonen gesponsort. Wir möchten uns für diese Hilfe herzlich bedanken, ohne die Hardware und die Anbindung wäre ein solches Netz nicht realisierbar gewesen.

<a href="/blog/files/2016-08-09/noc1.jpg"><img src="/blog/files/2016-08-09/noc1.jpg" width="600px" alt="Blick ins NOC"></a>

Blick ins NOC während des Aufbaus

<a href="/blog/files/2016-08-09/noc2.jpg"><img src="/blog/files/2016-08-09/noc2.jpg" width="600px" alt="Blick ins NOC"></a>

Blick ins NOC während der Breminale

### WLAN und SSID
Bereits im letzten Jahr haben wir festgestellt, dass die Wahl der WLAN-Frequenzen eine entscheidene Rolle spielt und bestimmt, ob Geräte das Freifunk vernünftig nutzen können oder nicht. Analog zum letzten Jahr wurde versucht, dass Netz über möglichst alle verfügbaren Kanäle im 2.4GHz und 5GHz Band zu verteilen. So konnte erreicht werden, dass wenig Geräte sich gegenseitig durch Interferenzen/Kollisionen stören. Im veraltete 2.4GHz Band können lediglich drei Kanäle störungsfrei parallel genutzt werden, im 5GHz Band sind es knapp 6 mal so viele. Ziel war es dieses Jahr also möglichst viele Geräte über das störungsärmere 5GHz Band anzubinden. Im letzten Jahr hat sich gezeigt, dass 2.4GHz und 5GHz über die selbe SSID auf aktuellen Mobiltelefonen noch zu Problemen führt. Teilweise wurde das 2.4GHz-Netz bevorzugt. Deshalb wurde dieses Jahr über die SSID "bremen.freifunk.net" lediglich das 5GHz Netz ausgestrahl und über 2.4GHz die alternative SSID "freifunk.net". Zusätzlich wurde die Sendeleistung beim 2.4GHz Band stark reduziert.

Um die Benutzerfreundlichkeit weiter zu erhöhen wurde ein Mechanismus auf den Routern implementiert, der selbständig die SSID abschalten kann. Für den Fall, dass der Router seine Verbindung zum Gateway verloren hat, sollten die SSID "bremen.freifunk.net" und "freifunk.net" verschwinden und lediglich eine SSID mit der MAC-Adresse auftauchen. So konnte verhindet werden, das Gäste vergeblich versuchen, sich mit einem fehlerhaften Router zu verbinden. Um die Geschwindigkeit des WLANs weiter zu heben wurde ein [Pull Request](https://github.com/freifunk-gluon/gluon/pull/467/files) mit in unsere Gluon-Firmware eingebacken, der den langsamen 802.11b Standard entfernt. Mit diesem Patch werden zwar einige wenige Geräte aus dem Netz ausgeschlossen, im Gegenzug wird das Netz aber nicht mehr von einigen wenigen Geräten ausgebremst.
 
In einem letzten Schritt wurde ein rudimentärer WLAN-Controller in Software nachimplementiert. Teure Access-Points, die auf großen Veranstaltungen genutzt werden verfügen meist über eine zentrale Steuereinheit, die Sendeleistung anpasst, Kanalwahl vornimmt und Monitoring durchführt. Da unser Budget bei Freifunk professionelle Access-Points mit Controller nicht hergibt, wurden die Funktionen [Zellatmung](https://de.wikipedia.org/wiki/Zellatmung_(Mobilfunk)) und [bessere Roaming]() selbst erstellt. Für die Zellatmung wurde ein [OpenWRT Patch](https://github.com/bittorf/kalua/blob/master/openwrt-addons/etc/kalua/wifi#L1686) genutzt, der die Sendeleistung in Abhängigkeit der verbunden Geräte ändert. Ziel der Zellatmung ist es, die Access-Points gleichmäßig auszulasten indem die Gäste gleichmäßig auf die Router verteilt werden. Das Roaming wurde ebenfalls über einen [OpenWRT Patch](https://github.com/bittorf/kalua/blob/master/openwrt-addons/etc/kalua/wifi#L158) optimiert. Dieser Patch überwacht die Verbindungsqualität (Signal-Rausch-Abstand) zu verbundenen Geräten und beendet die Verbindung beim Überschreiten einer bestimmten Schwelle (in der Hoffnung, dass sich das Gerät zu einem näher gelegenen Router verbindet).

Im Vergleich zum letzten Jahr nutzten mit den oben genannten Änderung deutlich mehr Geräte das 5GHz-Netz. 2015 loggten sich am Samstag ca. 2000 Geräte 2.4GHz und nur knapp 1000 5GHz zeitgleich ein. Dieses Jahr verschob sich das Verhälltnis deutlich Richtung 5GHz: am Freitag waren es knapp 1350 5GHz Geräte und nur noch 250 2.4GHz, die paralell im Netz waren. Der Rekord von über 3000 gleichzeitig verbundenen Geräten konnte dieses Jahr zwar nicht erreicht werden, trotzdem wurde unser Uplink mehr genutzt und mehr Geräte haben sich über 5GHz verbunden.

### Monitoring
Bisher wurden Statistiken über die Freifunk Router über "ALFRED" eingesammelt und mit dem Meshviewer visualisiert. Der Aktualisierungsintervall von einer Minute und eine grundsätzliche Unschärfe haben dazu geführt, dass über einen anderen Weg die Statisiken agreggiert und aufbereitet werden. Über einen eigenen, in "go" geschriebenen [Respond Client](https://github.com/FreifunkBremen/respond-collector) werden die Statistiken der Router gesammelt, in einer InfluxDB gespeichert und die für den Meshviewer nötige JSON erzeugt. Über die JSON kann der bekannte Meshviewer zur Visualisierung des Netzes weiterhin genutzt werden. Zusätzlich wurde eine Grafana-Instanz aufgesetzt, die die Daten aus der InfluxDB visualisiert. Die angezeigten Parameter umfassten die Anzahl verbundener Geräte, die Anzahl aller jemals verbundenen Geräte, die Clients pro Router und Netz, der eingehenden und ausgehenden Netzwerkverkehr, die Systemlast und Sendeleistung der Router und den Signal-Rausch-Abstand sowie die Airtime. Zusätzlich wurde die Temperatur innen und außen von unseren NOC-Bauwagen mit aufgenommen.

Zur Ersteinrichtung der Access Points wurde der Respond Client um ein paar Informationen erweitert.
Hier konnten, ähnlich wie im letzten Jahr, Einstellungen wie Namen und Koordinaten hinterlegt werden, die dann per ansible auf die Knoten gespielt wurden.

Zusätzlich zu Grafana und dem Meshviewer wurde eine Observium-Instanz und ein Icinga genutzt um die Router und den Uplink zu überwachen. Über einen zentralisierten Syslog konnte schnell auf Probleme reagiert werden.


<a href="/blog/files/2016-08-09/dashboard-monitor.png"><img src="/blog/files/2016-08-09/dashboard-monitor.png" width="600px" alt="Grafana Dashboard"></a>

Grafana Dashboard

<a href="/blog/files/2016-08-09/dashboard-breminale.png"><img src="/blog/files/2016-08-09/dashboard-breminale-small.png" width="100px" alt="Grafana Dashboard"></a>

Komplettes Grafana Dashboard (klick zum Vergrößern)

### Sonstiges
Einer unserer Freifunker, der sonst auch professionelle WLAN installationen einrichtet hat sich den Spaß gemacht und die Signalstärke und Signalqualität des Netzes gemessen. Über ein Tablet mit GPS und WLAN-Antennen konnte so eine Karte der Signalstärke erstellt werden. Durch die einfachere Verteilung der Router war der Empfang nicht überall ausreichend und es sind auf der Karte graue Flecken zu sehen.

<a href="/blog/files/2016-08-09/signalrauschabstand.png"><img src="/blog/files/2016-08-09/signalrauschabstand.png" width="600px" alt="signalrauschabstand"></a>

Signalrauschabstand auf dem Breminalegelände (erzeugt mit Erahau Site Survey)

<a href="/blog/files/2016-08-09/signalstaerke.png"><img src="/blog/files/2016-08-09/signalstaerke.png" width="600px" alt="signalstaerke"></a>

Signalstaerkeauf dem Breminalegelände (erzeugt mit Erahau Site Survey)

Während des Aufbaus hat uns ein Kamerateam des Regionalsenders Buten un Binnen besucht. In der [Mediathek](http://www.ardmediathek.de/tv/buten-un-binnen-Regionalmagazin/buten-un-binnen-vom-10-Juli/Radio-Bremen-TV/Video?bcastId=967552&documentId=36480008) kann der Beitrag angesehen werden. Freifunk Bremen wird für einige Sekunden erwähnt.

## Fazit
Wir sind mit dem Verlauf der Breminale sehr zufrieden. Besonders der Auf- und Abbau ging besser von der Hand als letztes Jahr. Zusätzlich war es interessant für uns, unser Breminale-Setup weiter zu verbessern und neue Dinge auszuprobieren. 

Die lockere und leichte Zusammenarbeit mit dem [Veranstalter](http://www.sternkultur.de/) und unseren Partnern hat uns viel Arbeit abgenommen. Ohne diese und die vielen freiwilligen Helfer wäre das Projekt so in der Form nicht realisierbar gewesen. Daher vielen Dank vom gesamten Freifunk Bremen!

Ein typischer Breminale Tag vor dem Bauwagen und im NOC:

<a href="/blog/files/2016-08-09/wasfuer1life.jpg"><img src="/blog/files/2016-08-09/wasfuer1life.jpg" width="300px" alt=""></a>
<a href="/blog/files/2016-08-09/wasfuer1life2.jpg"><img src="/blog/files/2016-08-09/wasfuer1life2.jpg" width="300px" alt=""></a>
