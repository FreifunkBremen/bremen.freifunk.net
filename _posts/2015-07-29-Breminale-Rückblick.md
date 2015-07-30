---
layout: post
title:  "Rückblick auf die Breminale"
author: anon6789
date:   2015-07-29 23:00:00 +0200
---
Langsam kehrt der Alltag bei uns wieder ein und wir blicken zurück auf sehr erfolgreiche, anstrengende aber auch spaßige zwei Wochen. Da wir nun alle Router, Kabel und Antennen wieder beisammen und die Schuhe wieder sauber haben, wollen wir einen Rückblick auf die Breminale werfen.

Nachdem wir bereits eine Woche vor der Breminale mit dem [Aufbau](http://bremen.freifunk.net/blog/2015/07/13/Breminale-Vorbereitungen.html) begonnen haben, buchten sich am Mittwoch (15.07.15) die ersten richtigen Gäste in unser WLAN-Netz ein. Zu unserem Glück war das Wetter an diesem Tag nicht sehr einladend, sodass wir uns in Ruhe mit dem Netzwerk vertraut machen konnten. Mittwoch ging es gemütlich mit maximal 500 Clients gleichzeigtig los. Donnerstag und Freitag stieg der Wert auf 800 respektive 1400 Clients. Am Samstag erreichten wir unseren Rekord mit knapp 3250 Clients, die gleichzeitig online waren. Damit waren wir kurzzeitig eine der größten Freifunk Communities Deutschlands, vor [Hamburg](https://hamburg.freifunk.net/) und [Paderborn](https://paderborn.freifunk.net/) ;)

<a href="http://jel.to/ff_pics/breminale/monitoring-global-nodes-clients.jpg"><img src="http://jel.to/ff_pics/breminale/monitoring-global-nodes-clients.jpg" width="600px"
alt="breminale_statistik"></a>

Client- und Knotenzahl während der Breminale (Screenshots aus Monitoring-Anwendung)

Wie in der Statistik zu sehen, wurden das Netz bis Samstag kontinuierlich erweitert. Es wurden immer neue Freifunk-Router an kritischen Stellen (z.B. Deichgraf-Zelt) dazugesteckt, um die Netzabdeckung zu verbessern. Wir versuchten auch auf die Rückmeldung der Nutzer, z.B. bei [Twitter](https://twitter.com/freifunkhb) oder bei uns am Stand, zu reagieren und installierten entsprechend Router.

<a href="http://jel.to/ff_pics/breminale/graph.png"><img src="http://jel.to/ff_pics/breminale/graph.png" width="600px" alt="breminale_graph"></a>

Die Knoten der Breminale stechen im Graph leicht hervor ;)


### Uplink
Unsere Glasfaser zu [LWLCOM](https://www.lwlcom.com/) hat sich während der Breminale ziemlich gelangweilt. An den Abenden zeichnete sich eine Nutzung von ca. 15MBit/s eingehend und rund 10MBit/s ausgehend ab (siehe unten). Auf dem Papier hätten wir die Breminale also auch mit einem VDSL-Anschluss versorgen können. In der Praxis hat uns der Gigabit-Uplink jedoch geholfen, Nutzungsspitzen schnell und vor allem Verzögerungsfrei bearbeiten zu können (der Ping war dank der direkten Anbindung auch besser). Überraschend ist jedoch der relativ hohe Upload: es wurden insgesamt 274GB Daten heruntergeladen und knapp die hälfte, also 147GB hochgeladen. Hier haben höchstwahrscheinlich die Synchronisationsdienste in die Wolke und Messanger einen guten Beitrag geleistet ;)

<a href="http://jel.to/ff_pics/breminale/breminale_traffic.png"><img src="http://jel.to/ff_pics/breminale/breminale_traffic.png" width="600px" alt="breminale_uplink_stats"></a>

Traffic auf unserer Glasfaser (Screenshot Monitoring LWLCOM).

### Eingesetzte Hardware
Für die Breminale haben wir vor allem Dual-Band Geräte von TP-Link eingesetzt, sprich den WDR4300 und die kleinen Geschwister WDR3600 und WDR3500. Die Wahl fiel auf diese Geräte, da sie zum einen von unserer [Freifunk Firmware](http://downloads.bremen.freifunk.net/firmware/) unterstützt werden und zum anderen sowohl das alte 2.4 GHz-Band, sowie das neue 5GHz Band bedienen können. Durch das 5GHz-Band standen uns weitere Kanäle zu Verfügung, auf denen wir die Clients mit Daten versorgen konnten. Besonders in stark frequentierten Orten zeigten sich die Stärken des 5GHz Netzes. Dazu mehr beim Thema 'Kanalwahl'.

Weitere Geräte waren eine Hand voll CPE210 von TP-Link und ein Pärchen Ubiquiti Nano Beams. Die CPE210 sind vergleichbar mit den NanoStations von Ubiquiti und wir konnten auf der Breminale erste Erfahrungen damit sammeln. Die integrierte Antenne decken nur einen bestimmten Bereich ab (65°), was wir uns auf dem Schiff [MS Treue]() zu Nutze gemacht haben. Hier haben wir mit zwei CPE210 einmal das gesamte Oberdeck und den angrenzenden Anleger abgedeckt und dabei nur eine einzige Steckdose belegt (POE-pass-through). Über eine Richtfunkverbindung mit den Nano Beams haben wir das Schiff an das übrige Netzwerk angeschlossen. Wegen der etwas größeren Distanz (ca. 300m) und dem beweglichen Anleger war die Anbindung über Richtfunk einfacher und billiger, verglichen mit einer weiteren Glasfaserstrecke. Über die Richtfunkverbindung wurde sogar am ersten Abend ein Konzert vom Schiff live ins Internet übertragen!

<a href="http://jel.to/ff_pics/breminale/map.png"><img src="http://jel.to/ff_pics/breminale/map.png" width="600px" alt="breminale_karte"></a>

Screenshot Meshviewer vom Donnrestag Abend.

Unser Core-Router war ein Edge Router Lite von Ubiquiti. Dieser war vor allem für die DHCP vergabe und IPv4 NAT zuständig. Über diesen Router lief auch der GRE-Tunnel zu unseren anderen VPN-Gateways, sodass von der Breminale auch auf das restliche Freifunk Bremen-Netz zugegriffen werden konnte. Interessierte schaune sich am besten die [Config](https://raw.githubusercontent.com/FreifunkBremenEvents/Breminale2015-Daten/master/edgerouter.config) des Routers an. Außerdem wurden mehrere GBit-Medienconverter und ein HP Switch (HP 1920-8G) mit SFP-Ports genutzt, um weiter entfernte Verbindungen und den Uplink ins Rechenzentrum herzustellen. Es war angedacht, eine redundante Verkabelung mittels des Spanning Tree Protocols aufzubauen (auch mit Richtfunk vom PoP zu unserem Stand). Mangels Zeit und Interesse wurde dies jedoch nicht umgesetzt.

### Firmware
Auf den Routern lief während der Breminale eine leicht modifizierte Firmware. Die wesentlichen Unterschiede gegenüber unserer herkömmlichen Firmware waren die Konfiguation der LAN- und WAN-Ports sowie das Meshing. Sowohl die LAN- als auch der WAN-Port wurden geswitcht und mit mehreren VLANs angesprochen. So war es möglich, die Router beliebig über die Ports mit Kabeln zu verbinden. Ein Beispiel dieser Verkabelung kan man unten sehen. Am Samtagabend wurde beispielsweise aufgrund von Überlastung an dem schon vorhandenen Router ein weiterer dazu gesteckt:

<a href="http://jel.to/ff_pics/breminale/verkabelung.jpg"><img src="http://jel.to/ff_pics/breminale/verkabelung_thumb.jpg" width="600px" alt="breminale_verkabelung_router"></a>

Erweiterung des Netzes durch zusätzlichen Router.

Das Meshing wurde rein auf Kabel beschränkt, um möglichst viel Air-Time für die eigentlichen Clients frei zu halten. Auch bei über 10 Hops war der Durchsatz am anderen Ende noch sehr performant (über WLAN knapp 100MBit/s Up- und Download bzw. mehrere Hundert MBit/s über Kabel, je nach aktueller Auslastung). Unsere viele Arbeit ([Benchmarks](http://wiki.bremen.freifunk.net/Events/Breminale/Netzwerk-und-LeistungsTests), Diskussionen usw.) im Vorfeld hat sich also bezahlt gemacht.

Um die Knoten bessere administrieren zu können, wurde die Breminale-Firmware mit einem SSH-Schlüssel und einem extra Management-WLAN ausgestattet. Auf ein Webinterface für jeden individuellen Router wurde komplett verzichtet.

### Automatisierung
Wir mussten während des Betriebs des Netzwerkes natürlich noch an einigen Stellschrauben der Breminale-Firmware drehen. Ein großer Posten war beispielsweise die Kanalwahl (siehe Abschnitt Kanalwahl). Um sich nicht manuell auf jeden der 62 Knoten einzeln verbinden zu müssen haben wir möglichst viel Arbeit über Ansible automatisiert. Wer sich für die einzelnen Automatisierung im Detail interessiert, wirft am besten einen Blick in das [Repository](https://github.com/FreifunkBremenEvents/ansible/tree/master/), in dem wir die Scripte gesammelt haben. Aufgrund der sehr positiven Erfahrung mit Ansible planen wir auch unsere VPN-Gateways in Zukunft mit Ansible aufzusetzen.

### Monitoring
Einer unserer Freifunker hat im Vorfeld eine dynamische Monitoring-Lösung entwickelt, mit der die Knoten und deren Statistiken überwacht werden können. Der traditionelle Ansatz über ALFRED und die Statistik-Seite war für unser Vorhaben zu träge und unzuverlässig. Die Anwendung basiert auf node.js und ermöglicht so ein permanentes Aktualisieren der Daten (inklusive grünem Haken und rotem Kreuz bei Wegfall des Knotens). Die gesamte Anwendung findet sich im [Github-Repository](https://github.com/FreifunkBremenEvents/monitorMap) von Genofire/Freifunk Bremen Events. Nachdem die Anwendung im Laufe der Breminale permanent erweitert wurde, haben wir sie oft und gerne genutzt. 

<a href="http://jel.to/ff_pics/breminale/monitoring.png"><img src="http://jel.to/ff_pics/breminale/monitoring.png" width="600px" alt="breminale_monitoring_screenshot"></a>

Screenshot Monitoring-Anwendung, Listenansicht.

<a href="http://jel.to/ff_pics/breminale/monitoring_mobil.jpg"><img src="http://jel.to/ff_pics/breminale/monitoring_mobil.jpg" width="400px" alt="breminale_monitoring_mobil_screenshot"></a> 

Screenshot Monitoring-Anwendung, Globalansicht mobil.

Weitere Features der Anwendung waren z.B. das Kartieren und Benennen der Router (ganz wichtig um sie wieder zu finden!) und das Einstellen des Kanals. Über ein entsprechendes Ansible-Script wurden die eingestellten Daten aus der Anwendung dann auf die Knoten gespielt.

### Kanalwahl
Grundsätzlich wurde jeder Knoten sowohl auf dem 2.4GHz- als auch auf dem 5GHz-Band mit einem zufälligen Kanal ausgeliefert. Hätten wir auf jedem Knoten den gleichen Kanal genutzt, wie bei der Standard-Firmware, wäre Wertvolle WLAN-Bandbreite aufgrund massiver Kollisionen verloren gegangen. Im großen Deichgraf-Zelt hingen beispielsweise 
6 Knoten an der Bühne. Ohne eine intelligente Kanalwahl hätten wir genau so gut einen einzelnen Knoten dort hin hängen können. Wir sind also ab und zu über die Breminale gelaufen, ausgerüstet mit einem Wifi-Analyser, um die Kanalwahl weiter zu optimieren. Aufgrund der wenigen überlappungsfreien Kanäle im 2.4GHz-Band wurde die Sendeleistung gegenüber dem 5GHz-Band stark verringert. Letzer Stand waren 0dB im 2.4Ghz Band und 15dB im 5Ghz-Band.

<a href="http://jel.to/ff_pics/breminale/monitoring-global-clients24-50.jpg"><img src="http://jel.to/ff_pics/breminale/monitoring-global-clients24-50.jpg" width="600px" alt="breminale_clients245"></a>

Clients im 2.4Ghz und 5GHz Netz (Screenshot Monitoring Anwendung).

Leider nutzten besonders am Wochenende noch viele Geräte das alte 2.4GHz Band. Auf ein 5GHz-Gerät kamen circa zwei 2.4GHz-Geräte. Mittwoch, Donnerstag und Freitag war das Verhälltnis zwischen 2.4 und 5Ghz fast ausgewogen.

### Unser Stand
Nach vielen Schritten und Regen haben wir die 5 Quadratmeter unseres Unterstandes inklusive Sitzmöglichkeiten zu Schätzen gelernt. Hier konnten wir uns zurückziehen aber auch interessierten Menschen ein bisschen was zu Freifunk erzählen. Ein Freifunk-Banner und eine Router-Ausstellung von einem unserer Freifunker sollten die Aufmerksamkeit der vorbeilaufenden Menschen auf sich ziehen. Die Resonanz am Stand war jedoch überschaubar und viele verwechselten uns mit einem Infostand für die Breminale. Beim nächsten Mal könnte man versuchen, den Stand noch etwas einladender zu gestalten. Das Grundsätzliche Interesse bzw. Desinteresse des Publikums wird sich aber bis dahin nicht groß ändern.

<a href="http://jel.to/ff_pics/breminale/stand_1.jpg"><img src="http://jel.to/ff_pics/breminale/stand_1_thumb.jpg" width="600px" alt="Stand1"></a>

Unser Stand mit einigen Freifunkern.

<a href="http://jel.to/ff_pics/breminale/stand_2.jpg"><img src="http://jel.to/ff_pics/breminale/stand_2_thumb.jpg" width="600px"alt="Stand1"></a>

Routerausstellung aufgebaut.

### Radio
Wer das gesprochene Wort vorzieht kann nebenbei auch unseren [Radiobeitrag](https://raw.githubusercontent.com/FreifunkBremenEvents/Breminale2015-Daten/master/Radio/nordwestradio-freifunk-auf-der-breminale_2015_07_16.mp3) vom Nordwest-Radio anhören, welcher auf der Breminale aufgenommen wurde. Neben der Sendung im Nordwestradio haben wir außerdem einen etwas längeren Beitrag in Bremen 4 "Gefühlsecht" aufgenommen.

<audio controls>
  <source src="https://raw.githubusercontent.com/FreifunkBremenEvents/Breminale2015-Daten/master/Radio/nordwestradio-freifunk-auf-der-breminale_2015_07_16.mp3" type="audio/mpeg">
</audio>

### Portalseite
Für die Breminale wurde extra von einem unserer Freifunker eine dedizierte Website gebastelt, die Besuchern eine Übersicht an wichtigen Informationen anbieten sollte. Zentral war der Facebook-Feed, über den z.B. Unwetterwarnungen gesendet werden sollten. Im Laufe der Veranstaltung haben wir festgestellt, dass die Seite wenig genutzt wurde und wir uns die Arbeit hätten sparen können.

(Screenshots folgen)

### Probleme
Grundsätzlich sind wir mit dem Ablauf des Projektes zufrieden. Wir haben uns jedoch fürs nächste mal einige 'Optimierungen' überlegt. Ein Punkt, der uns bereits beim Aufbau leicht behindert hat, war die Mitnutzung der großen Stromkästen. Einerseits war dies eine billige und sichere Variante, unser Netz auf zu bauen. Andererseits mussten wir jedes mal einen Elektriker bzw. eine Elektrikerin beauftragen, uns einenen Kasten zu öffen (wofür wir natürlich Verständnis haben). Wir überlegen uns ein Konzept, bei dem wir einen extra wasser- und vandalismussicheren Kasten neben den Stromkasten platzieren, sodass wir Jederzeit an den Router können. An zwei Stellen kamen diese Kästen bereits zum Einsatz und haben sich als Praktisch erwiesen. Falls eine(r) der nicht anwesenden FreifunkerInnen auf wasserfeste Kästen bzw. Gehäuse in größerer Stückzahl (<20) Zugriff hat, möge er oder sie uns gern Bescheid geben;)

<a href="http://jel.to/ff_pics/breminale/kasten_proto.jpg"><img src="http://jel.to/ff_pics/breminale/kasten_proto_thumb.jpg" width="600px" alt="breminale_kasten_proto"></a>

Eine der eingesetztes Kisten als Alternative zur Montage im Stromkasten.

<a href="http://jel.to/ff_pics/breminale/roueter_im_kasten.jpg"><img src="http://jel.to/ff_pics/breminale/roueter_im_kasten_thumb.jpg" width="600px" alt="Router im Stromkasten"></a>

Router im Stromkasten.

Ein weiterer Punkt, der sich aber nur bedingt verbessern lässt, war das viele Wasser. Neben leichtem Hochwasser, welches nur die Wege und nicht unsere Hardware in Mitleidenschaft gezogen hat, war der Regen besonders hemmungslos. In den nicht komplett wasserfesten Gebäuden der Breminale sind uns leider einige Netzteile und Mehrfachsteckdosen, sowie ein Router nass geworden. Diese konnten wir, nachdem auch der FI-Schutz wieder drin war, ersetzen. Besonders über Nacht griff an einigen Stellen gern mal der FI-Schutz, sodass teilweise unser halbes Netz am nächsten Morgen nicht zu erreichen war. 

Wie im Bereich Kanalwahl schon angedeutet war die Zahl der 2.4GHz-Clients in unseren Augen zu hoch und die Luft in diesem Band dicht. Für die Zukunft werden wir uns also überlegen, wie wir noch mehr Geräte auf das 5GHz-Band bekommen können. Es zeigte sich nämlich, das selbst im größten Zelt am Samstag Abend im 5GHz-Band noch brauchbare Geschwindigeit möglich war, im 2.4GHz Band war das nicht der Fall.

Auf der ToDo-Liste für die nächsten Veranstaltungen stehen noch die Punkte Kartierung und Abbau. Denn nichts ist schlimmer, als einen Knoten zu suchen, von dem lediglich die MAC-Adresse bekannt ist. Für die Zukunft wollen wir die neu aufgestellten Router also gleich in eine entsprechende Datenbank eintragen, um sie vor allem beim Abbau leichter wieder zu finden. Wenn wir uns beim Abbau dann auch alle an die Absprachen halten, klappt es das nächstes mal auch in einem Rutsch ;)

Die Stand-Problematik wird sich unserer Meinung nach auch relativieren. Bei kommenden Veranstaltungen können wir auf Erfahrungen der Breminale zurückgreifen, sodass auch Zeit für kreative Spielereien übrig bleiben wird.

### Fazit
Wir sind mit dem Verlauf der Breminale sehr zufrieden. Wir haben sowohl vom Veranstalter als auch von den NutzerInnen viel positive Rückmeldung bekommen. Die Woche war zwar sehr lang und anstregend, aber es hat auch viel Spaß gemacht und jeder einzelne konnte sicher noch etwas lernen. 

Wir möchten uns nochmal bei jedem einzelnen Freifunker bzw. Freifunkerin für die kräftige Mithilfe bedanken. Jeder und jede von euch hat dazu beigetragen, dass das Projekt so toll gelaufen ist. Außerdem möchten wir uns bei den übrigen Unterstützern und Sponsoren bedanken, zu nennen wäre da die [Sternkultur](
http://www.sternkultur.de/), die [Bremische Landesmedienanstalt](http://www.bremische-landesmedienanstalt.de/), die [Wirtschaftsförderung Bremen](https://www.wfb-bremen.de/de/wfb-wirtschaftsfoerderung-bremen), [LWLCOM](https://www.lwlcom.com/) und [Digineo](http://www.digineo.de/).


<a href="http://jel.to/ff_pics/breminale/lwl_rad.jpg"><img src="http://jel.to/ff_pics/breminale/lwl_rad_thumb.jpg" width="300px" alt="breminale_lwlrad"></a>

Wer es noch nicht auf [Twitter](https://twitter.com/freifunkhb) gesehen hat: Unsere Internetverbindung auf der Breminale war so stabil, dass sogar angeschlossene Räder sicher sind! 
