---
layout: post
title:  "Großprojekt Breminale"
author: anon6789
date:   2015-07-13 18:00:00 +0200
---
Die letzten Tage waren viele unserer Freifunker am Osterdeich unterwegs. Dort laufen gerade die Vorbereitungen für die diesjährige Breminale auf Hochturen. Für uns und die VeranstalterInnen der Breminale stellt Freifunk auf der Breminale ein Pilotprojekt da. Die Versorgung mehrerer Tausend Nutzer und Nutzerinnen gleichzeitig bedeutet für uns, dass die verbundenen Geräte schnell um den Faktor 10 steigen, verglichen zum bisherigen Tagesgeschäft.

<a href="/blog/files/2015-07-12/ff_breminale_poster.jpg"><img src="/blog/files/2015-07-12/ff_breminale_poster_thumb.jpg" alt="freifunk_aufm_osterdeich"></a>

Erst im April konkretisierten sich die Pläne für das Projekt bei uns. Ab diesem Zeitpunkt folgten regelmäßige Treffen, bei denen sowohl organisatorische als auch technische Fragen geklärt wurden. Zentral waren die Fragen des Uplinks, also die Verbindung zum Internet und die der Finanzierung. Außerdem musste festgelegt werden, was für eine Topologie auf der Breminale eingesetzt werden sollte, also z.B. Sternverkabelung, Verbindung über WLAN oder etwa eine Ringverkabelung.

Besonders bei der Frage des Uplinks und der Finanzierung haben wir sehr viel Unterstützung bekommen. Internetzugang beziehen wir während der Breminale über [LWLCOM](https://www.lwlcom.com/) durch eine großzügig dimensionierte 1GBit-Glasfaserverbindung. An dieser Stelle dafür noch einmal ein großes Dankeschön!

Neben Geld von der Bremischen Landesmedienanstalt, mit dem wir vor allem kilometerweise Kabel gekauft haben, wurden wir auch mit Hardwareleihgaben unterstützt. Der Dank gilt hier allen Freifunkern und der Firma [Digineo](http://www.digineo.de/) für die üppigen Hardwarespenden!

### Aufbau

Für uns ging der eigentliche Aufbau schon am Donnerstag (09.07.15) mit dem Verlegen der Cat.7 Netzwerkkabel los. Überall, wo bereits Strom- bzw. Wasserkabel lagen, wurden unsere Netzwerkkabel dazugelegt.

Am Freitag (10.07.15) waren einige von uns vor Ort um beim Aufbau der [Dreimeterbretter](http://www.dreimeterbretter.de/dreimeter_4.html) zu helfen. Diese bieten uns freundlicherweise Platz für einen Stand und im Gegenzug schwingen wir den Zimmermannshammer. Währen der Breminale findet ihr uns also auch dort.

Auch unser Internetzugang wurde am Freitag in den Betrieb genommen, nachdem wir uns mit den Eigenarten von Glasfasernetzwerken vertraut gemacht haben. Außerdem wurden die ersten zwei Freifunk-Knoten installiert, um das gesamte Orga-Team am Breminaletag -5 bereits mit Internet zu versorgen.


<a href="/blog/files/2015-07-12/ff_breminale_map.png"><img src="/blog/files/2015-07-12/ff_breminale_map.png" alt="freifunk_aufm_osterdeich"></a>
<a href="/blog/files/2015-07-12/ff_breminale_dreimeterbretter.jpg"><img src="/blog/files/2015-07-12/ff_breminale_dreimeterbretter_thumb.jpg" alt="dreimeterbretter"></a>
<a href="/blog/files/2015-07-12/ff_breminale_schacht.jpg"><img src="/blog/files/2015-07-12/ff_breminale_schacht_thumb.jpg" alt="glasfaser"></a>
<a href="/blog/files/2015-07-12/ff_breminale_baum.jpg"><img src="/blog/files/2015-07-12/ff_breminale_baum_thumb.jpg" alt="freifunk_fuer_orga"></a>


Weiter ging es Samstag (11.07.15) mit dem Auflegen der Netzwerkkabel und Anschließen der ersten Freifunk-Knoten. Die Knoten sind so konfiguriert, dass die Netzwerkkabel beliebig angeschlossen werden können und alle Pakete über den internen Switch mit hoher Datenrate weitergeleitet werden. So ist es uns möglich, während des Betriebs nach belieben zusätzliche Knoten an einzelnen Abschnitten dazuzustecken. Wir verzichten also weitestgehend auf meshen über WLAN. Wir gehen davon aus, dass das traditionelle Mesh-on-WLAN für eine derart hohe Nutzerzahl einfach zu unperformant ist (Beschränkung auf ein Kanal, Halbieren der Datenrate pro Hop usw.).

In jeden Stromverteiler wurde jeweils eine Doppel-Netzwerkdose aufgelegt und ein Router installiert. Pro Stromkasten führt mindestens ein Netzerkabel hinein und ein hinaus. Der Knoten fungiert dabei primär als Repeater des Ethernetsignals um die maximale Distanz von 100m Kabelverbindung zu überbrücken. Sekundär spielen die Knoten natürlich auch Access Point und stellen das Freifunk-WLAN zur Verfügung. Sobald die Stände aufgebaut sind, werden wir aus den Stromkästen Kabel zu zusätzlichen Knoten abzweigen, um den Bereich besser auszuleuchten.

<a href="/blog/files/2015-07-12/ff_breminale_verkabelung1.jpg"><img src="/blog/files/2015-07-12/ff_breminale_verkabelung1_thumb.jpg" alt="Verkabelung_nahaufnahme"></a>
<a href="/blog/files/2015-07-12/ff_breminale_verkabelung.jpg"><img src="/blog/files/2015-07-12/ff_breminale_verkabelung_thumb.jpg" alt="Verkabelung_nahaufnahme"></a>

### Ausblicke

Wir sind alle sehr gespannt auf kommenden Mittwoch und den Beginn der Breminale. Wird unser System, in dass wir schon so viel Planung und Arbeit investiert haben, den großen Nutzerzahlen standhalten? Wir planen schon während der Veranstaltung diverse Tests und Messungen durchzuführen, um die Stärken und Schwächen des Aufbaus ausfindig zu machen. Es ist auch geplant, einen Bereich mit herkömmlicher Freifunk-Firmware auszuleuchten. Wir möchten so herausfinden, ob unsere Bedenken bezüglich Mesh-on-WLAN begründet sind. 

Also kommt uns auf unserer Spielwiese "Breminale" besuchen, tobt euch aus und genießt das freie Netzwerk!
