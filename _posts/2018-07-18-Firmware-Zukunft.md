---
layout: post
title:  Zukunft der Firmware
author: Joda Stößer
date:   2018-07-18 19:57:58 +0200
---
Wir [schrieben über den Status Quo der Firmware](./firmware-status-quo.html) sowie [unsere aktuelle Mesh-Technik](./firmware-mesh-technik.html), nun wird es Zeit über die Zukunft der Firmware zu berichten.

#### LEDE und OpenWRT
Mitte 2017 [berichteten wir über Gluons Wechsel der Basis von OpenWRT zu LEDE](../../../2017/06/13/gluon-wechselt-softwarebasis.html) und am [23.02. dieses Jahres](../../../2018/02/23/neue-stable-2017-1-4-bremen2.html) veröffentlichen wir unsere erste Bremer Firmware mit dieser neuen Basis.
LEDE hat die ganze Entwicklungs-Community um Router-Firmware stark belebt und erfrischt, jedoch ist der neue Name deutlich weniger bekannt als OpenWRT. Aus diesem Grund hat man sich entschieden, alle Neuerungen an Software, Infrastruktur und Arbeitsweise der neuen Community wieder unter dem alten Namen zu führen.
Gluon wird in absehbarer Zeit diesen Wechsel auch vollziehen und die Arbeit daran hat bereits begonnen.

#### Gluon
Version `2017.1.8` ist die letzte Version mit der alten Jahreszahl und eine Version davon läuft bereits auf unseren Testing-Geräten.
Version `2018.1` ist bereits da und bringt einige lang überfällige Optimierungen:

- Mesh-Traffic über Kabel wird in `VXLAN`s abgekapselt
  dies beugt Fehlern vor und ermöglicht kompliziertere Netz-Topologien
- der Autoupdater wurde komplett in `C` neu geschrieben
  dieser verbraucht nun wesentlich weniger Platz
- verschiedene Mesh-Netze/"Domains" in einer Firmware
  einige Communities haben mehrere lokale Untergruppen und benötigen nun nicht mehr für jede eine eigene Firmware

Eine Bremer Version auf Basis von `2018.1` wird es wahrscheinlich nach der Breminale geben.

Die nachfolgende Version wird wieder auf OpenWRT, in der neuen Version `18.06`, basieren. Außerdem wird initialer und experimenteller Support für `babel` und `l3roamd` vorhanden sein.  
Auch soll ein Outdoor-Modus für 5 GHz Geräte hinzugefügt werden. Dadurch dürfen diese durch neue DFS-Unterstützung auch draußen genutzt werden. Mesh wird in diesem Modus nicht möglich sein.

Funktionen, die noch keinen Zeitrahmen haben, sind der mesh-independent Autoupdater, den wir in unserem letzten Blogpost erwähnten, sowie Verbesserungen am Datenaustauschprotokoll der Knoten und deren Netzwerk-Software.
Die Integration eines verbesserten Konfigurationssystems ist auch in Planung.

#### Band Steering
Ein Nachteil der Freifunk-Firmware gegenüber der Firmware einiger Hersteller, ist die fehlende Band Steering Funktion.
Sie sorgt dafür, dass Geräte die das meist schnellere 5 GHz WLAN-Netz unterstützen, dieses auch tatsächlich nutzen.
Je nach Umständen kann dies die Nutzererfahrung drastisch verbessern.
Einer unserer Bremer Freifunker, Martin aka `genofire`, arbeitet an einen freien Band Steering Implementierung.
Eine vorläufige Version werden wir, in Gluon intrigiert, ausgiebig auf der Breminale 2018 testen.

Außerdem entwickelt er ein Konzept für eine Funktion speziell für Freifunk: Knoten sollen untereinander Informationen zu den unterstützten Frequenzbändern der Clients im Mesh austauschen.
Damit wird beim Wechsel des Clients zum nächsten Knoten direkt das richtige Frequenzband verwendet.

In jedem Fall bleibt es spannend. Frohes Freifunken!

Für detaillierte Änderungen und Fehlerbehebungen an der Firmware lohnt sich wie immer ein Blick in unser [Firmware-Changelog](https://wiki.bremen.freifunk.net/Firmware/Changelog).
