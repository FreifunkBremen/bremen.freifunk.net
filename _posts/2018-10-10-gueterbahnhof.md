---
layout: post
title:  Freifunk am Güterbahnhof
author: Yannik
date:   2018-10-09 20:42:00 +0200
---


## Vorgeschichte
Alles begann vor etwa zwei Jahren, als die Querlenker (Wagenplatz hinter dem Güterbahnhof) uns eine Mail schickten und nach den Möglichkeiten fragten, wie man am besten Internet auf den Platz bekommt.
Kontakt zum Verein23 im Künstlerhaus sollte aufgebaut werden, um dann eine Richtfunkstrecke vom Künstlerhaus zum Wagenplatz in Betrieb zu nehmen.
Dann passierte etwa ein Jahr lang nichts.
Als nächstes nahm der Verein23 selbst Kontakt zu uns auf, um sich über die Möglichkeiten beraten zu lassen.

Nach ein paar Besprechungen stand der Plan: eine Richtfunk-Verbindung zum Schlachthof sollte aufgebaut werden, um die begrenzte Bandbreite im Künstlerhaus nicht zu schmälern (und die neue Verbindung bringt uns der Utopie des stadtweiten WLAN-Netzes auch näher).
Vom Dach des Künstlerhauses sollte einerseits Richtfunk zu den Querlenkern in Betrieb gehen, andererseits auch die Ateliers in den langen Hallen (Richtung Hauptbahnhof) angebunden werden.


## Aufbau
Der Aufbau der Hardware auf dem Dach lief relativ problemlos, die Verbindung zum Schlachthof läuft über ein Paar Ubiquiti Nanobeam (5GHz, bis zu 450 MBit/s).
Zwei CPEs wurden direkt mit installiert, eine Richtung Querlenker, die andere entgegengesetzt in Richtung Ateliers.
<img src="/blog/files/2018-10-10/aussicht.jpg" width="450" height="600">

Zunächst hat ein TPlink WDR4900 für das Meshing gesorgt, mittlerweile wurde er durch einen Archer C7 ersetzt.
An zwei Stellen auf den langen Hallen (in denen aktuell uA Künstler ihre Ateliers und/oder Werkstätten haben) haben wir jeweils eine CPE 210 an einem selbstgebauten Pfosten mit Betonfuß befestigt, an denen hängen wiederum Archer zum Weiterverteilen und für WLAN.

## Aktuelles
In der Planung ist der Ausbau des Kabelnetzes, am Besten bis zu den Richtfunk-Standorten auf den Hallen.
Dadurch würde man eine Redundanz erreichen. 
Die WLAN-Abdeckung des Innenhofs ist ebenfalls in Planung. 

## Zukunftsvision
Der  Traum eines stadtweiten Mesh-Netzwerks liegt zwar noch in (vmtl) ferner Zukunft, aber durch diesen recht zentralen Richtfunkstandort kommen wir dem Ziel näher, das sollten wir noch für weitere Verbindungen nutzen.

## Verteiler / Mitmachen
Anfang September bildete sich ein Arbeitskreis/-Gruppe, die den Ausbau plant und vornimmt. 
Die Gruppe ist ein gemischter Haufen aus Freifunkern und Künstlern, beteiligt euch gerne!
Es wurde sogar eine Mailingliste zur Kommunikation eingerichtet: [https://mailman.zfn.uni-bremen.de/cgi-bin/mailman/listinfo/agffgb](https://mailman.zfn.uni-bremen.de/cgi-bin/mailman/listinfo/agffgb)
