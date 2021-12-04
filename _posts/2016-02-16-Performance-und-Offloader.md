---
layout: post
title:  Performance und Offloader im Freifunk
author: anon6789
date:   2016-02-16 20:00:00 +0200
---

Uns wurde nun schon öfter die Frage gestellt, wie Freifunk 'schneller gemacht werden könne'. Aber was bedeutet 'schnell' oder 'langsam'?  
Wir Freifunker und Freifunkerinnen versuchen natürlich immer, das letzte aus unserem Netz heraus zu holen (zumindes wenn gerade jemand Zeit dafür hat). 
Trotzdem kann zum Beispiel die Latenz (Ping) sehr hoch sein, die Download- und Upload-Bandbreite niedrig oder die Adressvergabe unzuverlässig. 
Dieser Blogeintrag soll Erfahrungswerte weitergeben, die im täglichen Kampf gegen langsames Freifunk helfen. Besonders bei der Versorgung vieler Menschen, wie zum Beispiel auf der [Breminale](/blog/2015/07/29/breminale-r%C3%BCckblick.html) oder in Flüchtlingsunterkünften, konnten wir viel Erfahrung sammeln. 

Aber eins vorweg: Freifunk Bremen ist schnell, sehr schnell!

### Offloader

Das größte Problem bei langsamen Freifunk sind schwachbrüstige Freifunk-Router. 
Die Hauptaufgabe des Freifunk-Routers ist der verschlüsselte Tunnel zu unseren Freifunk-Gateways.
Für jedes Paket, dass der Router versendet und empfängt muss also zuvor eine mathematische Aufgabe (Verschlüsselung) gelöst werden.
Das Einstiegsmodell für rund 20€ verfügt jedoch über einen schwachen Prozessor und wenig Speicher.
Die Grundidee ist nun, den rechenintensiven Verschlüsselungs-Teil auf ein dediziertes Gerät auszulagern, dem sog. 'Offloader'.
Dadurch kann der normale Freifunkrouter entlastet und der Datendurchsatz erhöht werden.

Als Offloader eignen sich also alle Geräte mit mehr CPU Leistung. 
Im einfachsten Fall können die größeren TP-Link Modelle, wie der WDR3600 oder der WDR4300 genutzt werden.
Ein [Benchmark](https://web.archive.org/web/20190219002231/https://projects.universe-factory.net/projects/fastd/wiki/Benchmarks) vergleicht die vier bekanntesten Router zusammen mit verschiedenen Verschlüsselungsmethoden (dazu später mehr).
Es zeigt sich, dass eine hochwertigerer Router oft 50% bis 100% mehr Durchsatz durch den verschlüsselten Tunnel bedeuten.

Wenn jedoch mehr als 30 bis 40 Mbit/s gefordert sind, ist mehr Hardware als ein WDR nötig. In den meisten Fällen wird zu stromsparenden kleinen x86-Rechnern gegriffen.
Das sind normale PCs, die jeder bei sich unter dem Schreibtisch stehen hat (nur meist kleiner). Für diese bieten wir auch eine spezielle x86  [Firmware](https://downloads.bremen.freifunk.net/firmware/stable/factory/) an. 
Es kann also theoretisch jeder Computer mit beliebig vielen Netzwerkkarten und nicht all zu exotischer Hardware als Freifunk-Router genutzt werden. 
Das entscheidene Kriterium ist neben Rechenleistung dann schnell Strom- und Platzverbrauch.

In vielen Communitys erfreut sich der Fujitsu Siemens Futro S550 großer Beliebtheit.
Dieser Computer wurde ursprünglich als stromsparender Think-Client entworfen aber eignet sich auch wunderbar als Freifunk-Offloader.
In unserem Wiki befindet sich mittlerweile eine [Anleitung](https://wiki.bremen.freifunk.net/Anleitungen/Offloader/Offloader-Futro.md), die vom offiziellen [Freifunk Forum](https://forum.freifunk.net/t/f-a-q-zum-offloader-fujitsu-siemens-futro-s550/8294) noch weiter ergänzt wird. 
Der Futro lässt sich mit einer zusätzlichen Netzwerkkarte (oder VLANs) mit wenigen Handgriffen als leistungsstarker Freifunk-Offloader nutzen.
Beim Einrichten weiterer Futros oder anderer Offloader helfen wir natürlich auf der [Mailingliste](/kontakt.html) oder auf [Treffen](https://wiki.bremen.freifunk.net/Home#infos-zu-unseren-treffen) gerne!

<img src="/blog/files/2016-02-16/offloader_dual_nic.jpg" title="Offloader Futro" />

Der Futro Offloader mit einem zweiten Freifunk-Router

Um die Grenzen unseres Netzes und des Offloaders heraus zu finden, wurde eine Benchmark-Reihe mit dem Offloader in Kombination mit verschiedenen Gateways durchgeführt.

<img src="/blog/files/2016-02-16/benchmark_offloader_down.png" title="Downloadspeed Offloader" />
Downloadgeschwindigkeit über den Offloader je Gateway (VDSL50 Anschluss)

<img src="/blog/files/2016-02-16/benchmark_offloader_up.png" title="Uploadspeed Offloader" />
Uploadgeschwindigkeit über den Offloader je Gateway (VDSL50 Anschluss)

Es zeigt sich, dass der Offloader den VDSL50 Anschluss voll auslasten kann. Das Surfen im Internet fühlt sich hinter dem Offloader an wie am normalen DSL-Anschluss, ohne Freifunk dazwischen.
Ein Vergleich oder Ranking der verschiedenen Gateways lässt sich aus der Messreihe jedoch nur schwer herstellen.
Die Gateways werden alle unterschiedlich stark genutzt und es ist zudem providerabhängig, wie gut die Verbindung ist.


### Verschlüsselungsmethoden
Wie oben bereits beschrieben, kann der Tunnel zum Gateway mit verschiedenen Verschlüsselungsmethoden betrieben werden.
Auf den Gateways werden momentan salsa2012+umac,salsa2012+gmac und null unterstützt.
Die Methode 'null' bildet dabei eine besondere Rolle und bedeutet keine Verschlüsselung. 
Bei der 'null'-Methode werden die Daten zwischen dem Freifunk-Router und unseren Gateways im Klartext übertragen und können von jedem mitgelesen werden (sofern nicht auf Anwendungsebene verschlüsselt).
Es ist vorstellbar, dass Internet Service Provider in diese Datenpakete, unter dem Vorwand von Urheberrechtsverletzungen oder Terrorismusbekämpfung, hineinschauen.
Wir empfehlen also nicht, die Verschlüsselung 'null' zu wählen, trotzdem sorgt diese für einen deutlich besseren Datendurchsatz.

### Frequenzen
Es hat sich gezeigt, dass Freifunk im 5GHz Netz grundsätzlich mehr Spaß macht als im alten 2.4GHz Netz.
Im alten Band stehen nur 3 Kanäle zur Verfügung, die sich gegenseitig nicht stören. 
Es ist davon auszugehen, dass in einer dicht besiedelten Stadt wie Bremen, mindestens ein Nachbar einen interferierenden Kanal nutzt und so die verfügbare Bandbreite schmältert.
Der Effekt wird bei Mesh-Verbindungen zusätzlich spürbar, da der gesamte Traffic mindestens doppelt auf dem selben Kanal durch die Luft geschickt wird.
Wir empfehlen daher, falls möglich, 5GHz Geräte zu nutzen, bei denen eine höhere Anzahl an Frequenzen zur Verfügung steht.

### Netzwerk und ISPs
Ein letztes Kriterium, das sich auf die Performance im Freifunk auswirken kann, sind die Internet Service Provider des heimischen Anschlusses.
Verbindet sich beispielsweise ein Freifunk-Router von einem VDSL-Anschluss mit VPN01 und ein Router von einem Kabelanschluss aus, nehmen die Pakete nicht die selbe Route durchs Internet.
Aufgrund unternehmenspolitischer Entscheidungen gibt es zwischen den Internet Service Providern starke Unterschiede, wie Datenpakete behandelt und geroutet werden.
Die deutsche Telekom lässt sich beispielsweise durch das [double paid traffic](https://wiki.hetzner.de/index.php/Double_Paid_Traffic)-Modell den Datenverkehr doppelt vergolden. Wird das Geld nicht gezahlt, so leidet die Verbindung.
Es empfielt sich also auf der [Statusseite](http://10.196.0.127) des Routers nachzusehen, mit welchem VPN-Gateway der Router gerade verbunden ist.
Treten die Geschwindigkeitsprobleme immer nur mit einem Gateway auf, kann auf eines der anderen 5 ausgewichen werden.

Wir erörtern momentan die Möglichkeit, die Wahl des VPN-Gateways so weit zu optimieren, dass die Freifunk-Router immer mit dem günstigsten VPN-Gateway verbunden werden.
Dies brauch aber noch einige Zeit.

### Abschließende Worte
Grundsätzlich sollte beachtet werden, dass der Schwerpunkt von Freifunk nicht die Internetanbindung ist. 
Wir möchten ein dezentrales, unabhängiges Netzwerk aufbauen, über das jeder und jede frei kommunizieren kann.
Wer eine hochperformante und immer verfügbare Hotspot-Lösung sucht, muss sich nach komerziellen Anbietern umschauen.
Wir betreiben das Netzwerk ehrenamtlich und nach bestem Wissen, mit höchst möglichen Ansprüchen an Verfügbarkeit und Geschwindigkeit.

Außerdem möchten wir darauf hinweisen, dass Offloader unsere Gateways stark belasten können und somit hohe Kosten verursachen. Theoretisch ist es möglich, mit 5 Kabelanschlüssen die Bandbreite eines gesamten VPN-Gateways zu blockieren. Wir möchten also daran appelieren, Offloader und unser Netz angemessen zu nutzen bzw. sich bei Freifunk Bremen entsprechend einzubringen. Falls du wirklich mehr Bandbreite benötigs spreche uns am besten auf einem [Treffen](/kontakt.html) oder per [Mail](/kontakt.html) an, wir finden da eine Lösung!
