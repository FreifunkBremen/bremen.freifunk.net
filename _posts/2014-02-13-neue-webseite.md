---
layout: post
title:  Eine neue Freifunk Bremen Webseite
date:   2014-02-13 10:57:44 +0200
author: jplitza
---

Willkommen auf der neuen Freifunk-Webseite!

Auf dem letzten Treffen am Montag hielten wir ein Blog für eine gute Idee, da wir eine Möglichkeit suchten, Benutzer zu informieren ohne auf 140 Zeichen von Twitter limitiert zu sein.

Dieses Blog ist nun ein erster Versuch, unsere Anforderungen umzusetzen. Denn wir wollten nicht einfach ein Wordpress o.ä. aufsetzen, weil das von nur einer Person betrieben wird und mit Pech eines Tages samt Inhalt verschwindet. Stattdessen nutzt dieses Blog [jekyll], eine Ruby-Software die aus statischen Dateien eine Webseite zusammenstellt und einige Blogging-Funktionen mitliefert. Das hat den Vorteil, dass das Blog (wie fast alles in unserer Infrastruktur) einfach in einem git leben kann und somit von jedem geklont und selbst betrieben werden kann.

Und wenn wir eh schon ein git haben, was liegt näher als es bei [github] zu hosten? Damit müssen wir uns nicht um die Authentifizierung von Benutzern kümmern, sondern können einfach github-Accounts authorisieren, in das Blog-Repo zu schreiben. Github liefert uns auch gleich ein Webinterface, mit dem weniger Konsolen-freudige direkt online Posts schreiben können, sodass hoffentlich alle glücklich werden. Wir werden sehen, wie das läuft! :-)

Da jekyll aber noch mehr als nur Blogs kann, habe ich das zum Anlass genommen, gleich das gesamte Design der Webseite außenrum zu basteln. Somit ist dies jetzt die neue Webseite! Falls uns das Blog nicht gefällt halte ich das trotzdem zumindest für die Webseite für eine ganz gute Infrastruktur und Technik.

[jekyll]:    https://jekyllrb.com/
[github]:    https://github.com/
