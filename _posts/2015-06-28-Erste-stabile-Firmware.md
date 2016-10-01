---
layout: post
title:  "Geschafft: Unsere erste stabile Firmware"
author: jplitza
date:   2015-06-28 14:24:00 +0200
---
Anderthalb Jahre hat es seit unserem ersten Treffen gedauert, bis wir nun endlich die erste Firmware-Version als "stabil" bezeichnen. In den vergangenen sieben Tagen haben sich alle Knoten, die automatische Updates aktiviert haben, auf diese als "2014.4+bremen0" bezeichnete Version aktualisiert. Nachprüfen kann das jeder selbst im [Meshviewer], in dem unter "Statistiken" nicht nur zu sehen ist, dass fast alle Knoten diese Version benutzen, sondern auch jeder einzelne Knoten preisgibt, mit welcher Version er läuft.

[Meshviewer]: http://bremen.freifunk.net/meshviewer/

### Aus Testing wird Stable
Auf dem letzten Treffen haben wir beschlossen, dass alle Knoten, die bisher dem Update-Pfad "Testing" gefolgt sind, nun automatisch auf "Stable" umschwenken sollten. Diese Entscheidung erschien uns logisch, da vermutlich die meisten nur deshalb "Testing" genommen haben, weil es noch kein "Stable" gab.

Wer also tatsächlich etwas früher neue Funktionen und Versionen auf seinen Knoten haben möchte und dafür bereit ist, ggf. selbst Hand anzulegen wenn nach einem fehlgeschlagenen Update der Knoten nicht mehr funktioniert, der muss im [Config-Mode] manuell den Update-Pfad zurück auf "Testing" stellen.

[Config-Mode]: http://bremen.freifunk.net/faq.html#wie-kann-ich-meine-knoteneinstellungen-ndern

### Keine Nightlies mehr
Gleichzeitig haben wir beschlossen, den "Nightly" Update-Pfad, also die nächtlich automatisch gebauten Firmwares, vorläufig einzustellen. Da niemand aus Bremen momentan aktiv an der Firmware entwickelt, besteht kein Bedarf an tagesaktuellen Versionen. Stattdessen sollen die von den Entwicklern als stabil bezeichneten Versionen in Zukunft schneller bei uns als Testing-Versionen verfügbar sein und dann nach einigen Wochen Testen auch schneller zu Stable-Versionen werden.

### Neue Testing in den nächsten Tagen
In den kommenden Tagen soll dann auch gleich eine neue Testing-Version erscheinen, die insbesondere eine Reihe neuer Geräte unterstützen wird, unter anderem den WDR4900 von TP-Link. Außerdem kann man dann mehrere Knoten an den LAN-Anschlüssen (bei TP-Link die gelben) per Kabel verbinden, wenn man im [Config-Mode] die entsprechende Option aktiviert ("Mesh-on-LAN").

### Versionsschema
Außerdem haben wir das Schema der Versionsnummern umgestellt. Das bisherige, traditionelle Schema à la "0.7~testing1" ist eigentlich wenig aussagekräftig. Wie viele wissen, basiert unsere Firmware auf dem hauptsächlich von den [Lübecker Freifunkern](http://luebeck.freifunk.net/) entwickelten [gluon](http://gluon.readthedocs.org/), welches Versionsnummern wie "2014.4" verwendet. Daher heißt die erste Stable nun "2014.4+bremen0", damit man bereits aus der Versionsnummer erkennt, von welcher Community die Rede ist. Die "0" hinten wird hochgezählt, falls wir auf Basis von gluon 2014.4 noch weitere Versionen rausbringen (z.B. mit anderen lokalen Einstellungen wie mehr VPN-Gateways oder Firmware-Mirrors). Die neue Testing wird die Versionsnummer "2015.1.1+bremen1~testing" haben: Das "~testing" sorgt dafür, dass diese Versionsnummer für niedriger gehalten wird als "2015.1.1+bremen1" ohne das "~testing", sodass bei Veröffentlichung der stabilen Version auch die Testing-Knoten darauf updaten können.

### Warum erst jetzt?
Unter dem Hintergrund, dass von gluon bereits viele Versionen mit Namen versehen und veröffentlicht wurden, stellt sich einigen vermutlich die Frage, warum wir erst jetzt eine stabile Version in Bremen haben.

Dies liegt unter anderem daran, dass wir anfangs ein sehr konservatives Verständnis von "stabil" hatten: Wenn von den damals nur wenigen zig Knoten ein einziger ein Problem hatte, reichte das unter Umständen schon um die Firmware als "nicht stabil genug" zu klassifizieren. Tatsächlich hatten frühe Versionen von gluon teilweise Stabilitätsprobleme, sodass wir die Software noch nicht als stabil "vermarkten" wollten.

Außerdem stand lange Zeit noch die Frage des [Kanalwechsel]s im Raum: Sollten wir im 2,4GHz-Spektrum von Kanal 6 abrücken oder da bleiben? Nach Diskussionen mit anderen Communities wurde uns häufig geraten, bei Kanal 6 zu bleiben. Ferner hatten unsere Ausweichkanäle 1 und 11 unerwartete technische Nachteile, sodass wir das Projekt Kanalwechsel kürzlich verwarfen.

Schließlich braucht es natürlich auch etwas Zeit, die Firmware zu bauen und fertig zur Veröffentlichung zu machen. Die hatte lange Zeit einfach niemand bzw. die Situation mit der Testing-Firmware war nicht so schlecht, dass die Zeit nicht besser eingesetzt werden konnte.

[Kanalwechsel]: /blog/2014/09/21/Auswertung-Kanalanalyse.html

### Firmware-Workshop
Um zumindest den Kreis der Personen die in der Lage wären, eine Firmware zu bauen und zu veröffentlichen, zu vergrößern, wollen wir demnächst einen "Firmware-Workshop" veranstalten. Ähnlich dem kürzlichen "Backbone-Treffen" (das übrigens auch eine Neuauflage erfahren soll) ist der Plan, allen Interessenten einen Einblick in die Struktur der Firmware und darein, wie man sie bearbeitet, baut und veröffentlicht, zu geben. Ein Termin steht leider noch nicht fest. Sowieso empfehlen wir aber allen, die sich für dieses und andere Freifunk-Themen verstärkt interessieren und dort mitreden möchten unsere [Mailingliste] zu abonnieren und die Protokolle der Treffen im [Wiki] zu lesen, falls sie es selbst nicht geschafft haben vorbei zu kommen. Denn Freifunk ist ja kein schlüsselfertiger Dienst, sondern soll zur Beschäftigung mit der Thematik offener Netzwerke anregen – technisch, organisatorisch und sozial.

[Mailingliste]: https://lists.ffhb.de/mailman/listinfo/ff-bremen/
[Wiki]: http://wiki.bremen.freifunk.net

### Probleme?
Wie immer gilt: Wenn euch durch das Update Probleme mit euren Knoten auffallen, [meldet euch bitte bei uns](/kontakt.html)!
