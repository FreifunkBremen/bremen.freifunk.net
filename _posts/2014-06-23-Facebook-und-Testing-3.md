---
layout: post
title:  Facebook und Testing 3
date:   2014-06-23 01:00:00
author: jplitza
---

Seit einigen Wochen haben wir eine [Facebook-Seite]. Auf der ist zwar noch nicht allzu viel Aktivität, aber zumindest sind wir zu finden und es werden neue Posts auf der Webseite verlinkt – genau wie auf [Twitter]!

Außerdem habe ich mich drangesetzt und mal die Änderungen an gluon seit der letzten Testing-Version angeschaut, um eine neue Version zu bauen. Die nach außen sichtbaren Änderungen sind eher weniger:

* Die ESSID des Meshs wurde von "batman.bremen.freifunk.net" zu "mesh.ffhb" geändert, da das weniger nach etwas aussieht, wozu man sich verbinden soll.
* Durch neue WLAN-Treiber und -Software tritt hoffentlich das [Signal-Abbruch-Problem] seltener auf, das sagen zumindest die Erfahrungen mit den Nightlies.
* Die vom Knoten übertragenen Statistik-Daten werden jetzt komprimiert und sparen so Bandbreite.
* Der TL-WR841v9 machte laut Berichten mit der zweiten Testing-Version Probleme, mit den Nightlies nicht mehr. Er sollte daher mit dieser Testing-Version auch problemlos funktionieren.
* Die Firewall blockt jetzt alles, was auf dem WAN-Port ankommt, außer SSH.

Außerdem wurde sehr viel Internes geändert, aber davon verschone ich euch mal. Wenn ihr das lest haben eure Knoten sich vermutlich eh schon aktualisiert. :-)

[Facebook-Seite]: https://www.facebook.com/FreifunkBremen
[Signal-Abbruch-Problem]: https://github.com/freifunk-gluon/gluon/issues/93
[Twitter]: https://twitter.com/FreifunkHB
