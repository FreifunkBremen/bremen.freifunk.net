---
layout: post
title:  Mesh-Technik der Firmware
author: Joda Stößer
date:   2018-07-18 17:57:58 +0200
---
Wir [schrieben über den Status Quo der Firmware](./firmware-status-quo.html), hier wollen wir kurz auf die dahinter liegende Mesh-Technik eingehen.

Aktuell basiert das Bremer Freifunk Netz auf dem Mesh-Protokoll `b.a.t.m.a.n` und nutzt für Kommunikation zwischen den Knoten die `Ad-hoc` oder `IBSS`-Technik. Beide waren als sie bei uns eingeführt wurden, aus unserer Sicht die besten Optionen zu der Zeit.

###### `b.a.t.m.a.n`
Dieses Mesh-Protokoll baut ein Layer2-Netzwerk auf. Dies bedeutet, alle Geräte im Bremer Freifunk Netz sind so mit einander verbunden, als würden sie alle an dem gleichen Netzwerkswitch hängen.  
Dies hat den Vorteil, dass die eigenen Geräte ihre IP-Adressen behalten, wenn sie sich mit einem anderen Freifunk-Gerät verbinden. Dadurch werden Verbindungen zu Servern und Diensten nicht unterbrochen. Das inkludiert zum Beispiel SSH, andere Fernwartungssoftware und manchmal auch Videos. Davon profitieren vor allem Fußgänger die sich durch ihre Bewegung ständig mit einem neuen Freifunk-Gerät verbinden.

Jedoch war `b.a.t.m.a.n` nie für große Mengen an Geräten und Knoten ausgelegt. Um seine Funktion aufrecht zu erhalten, muss jedes Gerät mit allen anderen Geräten im Netzwerk dauerhaft Informationen austauschen. Dies sorgt für ein erhebliches Grundrauschen, verringert die nutzbare Bandbreite sowie Geschwindigkeit im Freifunk und macht besonders an sehr langsamen Anschlüssen Probleme.  
Auch sind einige der internen Metriken zum Unterscheiden einer guten, stabilen und durchsatzstarken Verbindung von einer instabilen nicht genügend.

###### `Ad-hoc`/`IBSS`
Typischerweise gibt es bei der WLAN-Nutzung eine Station, den Router, und einen Client, das Nutzgerät. Der Client wählt sich bei der Station ein und eine Verbindung kommt zu Stande.  
Zwischen Freifunk-Knoten ist dies jedoch unbrauchbar. Alle Geräte sind gleichbereichtig, keiner ist Station, keiner Client. Dafür gibt es die `Ad-hoc`/`IBSS`-Technik. Diese ermöglicht zwei Computern sich trotz Gleichberechtigung miteinander zu verbinden.

Jedoch unterstützen nicht alle Geräte diese Technik wenn sie gleichzeitig auch ein Stations-Netz ausstrahlen. Manche Geräte unterstützen sie sogar komplett nicht.


##### Zukunft
Schon seit einigen Jahren wird in der `Gluon`-Gemeinschaft an Nachfolgetechnologien gearbeitet, jedoch haben sie erst kürzlich einen benutzbaren Zustand erreicht.  
Als Mesh-Protokoll geht es um `babel` in Zusammenspiel mit `l3roamd` und als Verbindungstechnik `11s`.

###### `babel`
Als eines der jüngeren Mesh-Protokolle, baut `babel` ein Layer3 Netz auf. Im Gegensatz zu `b.a.t.m.a.n` benötigt es massiv weniger Hintergrundkommunikation mit den anderen Knoten des Netzes. Das deutlich geringere Grundrauschen verbesserte die Performance im ganzen Netz.  
Auch die gewählten Routen und Wege für Pakete durch das Netz, sollen besser sein. Darüber gibt es aber jedoch keine eindeutigen Studien, vor allem nicht mit größeren Netzen.

##### `l3roamd`
Damit auch beim Einsatz von `babel`, Geräte, welche sich von einem Freifunk-Knoten zum nächsten bewegen, ihre IP-Adresse behalten können und somit keine Verbindungsabbrüche erfahren, muss eine zusätzliche Software eingesetzt werden: `l3roamd`  
Wie der Name schon sagt, sorgt diese dafür, dass Geräte auch im Layer3-Netz "roamen", sich also frei bewegen können, und von neuen Freifunk-Knoten wiedererkannt werden.  
Die Kommunikation zwischen den Freifunk-Knoten für diese Funktion, wird erneut für etwas Grundrauschen sorgen, jedoch sind wir der Hoffnung, dass sich dies in Grenzen halten wird.

###### `11s`
Eigentlich `802.11s` genannt, ist `11s` ein WLAN-Standard welcher speziell für Mesh-Netzwerke geschaffen wurde und aus zwei Teilen besteht:

1. einem Mesh-Protokoll
2. einer Kommunikationstechnik

Da wir unsere eigenen Mesh-Protokolle einsetzen, interessiert uns der erste Punkt nicht. Die Kommunikationstechnik hat jedoch immense Vorteile für uns.  
Deutlich mehr Geräte unterstützen `11s` im Gegensatz zu `Ad-hoc`/`IBSS` und ermöglichen das gleichzeitige Ausstrahlen eines Stations-Netzes auf vorher komplett inkompatiblen Geräten.

##### der Wechsel
Ein Wechsel von so tiefgreifender Technik ist nicht einfach umzusetzen. Nicht jeder Freifunk-Knoten hat eine direkte Verbindung zum Internet, um sich das nötige Update zu laden.  
Geräte die nur über das Mesh-Netzwerk ins Internet kommen, könnten durch ein Update eines benachbarten Knotens vom Rest des Netzes abgeschnitten werden, da sie die neue Technik nicht unterstützen.

Um allen Betreibern im Bremer Freifunk Netz einen entspannten Wechsel zu bieten, haben wir uns für die Weiterentwicklung des aktuellen Autoupdaters eingesetzt und Vorschläge eingereicht.  
Damit kann ein Knoten, der keinen Internetzugang hat und vom Rest des Meshes abgeschnitten wurde, über ein offenes WLAN in seiner Umgebung sich das neue Update laden. Das wäre typischerweise das WLAN eines anderen Freifunk-Routers, kann aber auch jedes andere beliebige freie Netzwerk sein.

Wir hoffen diese Version des Autoupdaters noch dieses Jahr auf unsere Geräte spielen zu können, müssen aber noch abwarten.  
In der Zwischenzeit werden wir die Technologien intern und auf der Breminale 2018 als Team testen und verbessern.


Für detaillierte und aktuelle Änderungen an der Firmware lohnt sich wie immer ein Blick in unser [Firmware-Changelog](https://wiki.bremen.freifunk.net/Firmware/Changelog).
