---
layout: post
title:  "Neue stabile Version 2023.1.1+bremen1"
author: Oliver
date:   2025-06-20 21:35:00 +0200
---

Es gibt endlich eine neue stabile Freifunk-Firmware!
Wir machen den großen Sprung von der derzeitigen [2021.1.2+bremen1](https://wiki.bremen.freifunk.net/Firmware/Changelog.md#2021-1-2-bremen1)
auf Version [2023.1.1+bremen1](https://wiki.bremen.freifunk.net/Firmware/Changelog.md#2023-1-1-bremen1).
Die neue Version ist inzwischen [seit über einem Jahr](/blog/2024/01/20/neue-testing.html) als Testing im Einsatz, und es sind keine Probleme aufgefallen;
also ist es höchste Zeit, diese Version breit auszurollen.

Die Version enthält hauptsächlich ein Upgrade der darunterliegenden
Software ([Gluon](https://wiki.freifunk.net/Gluon) und [OpenWRT](https://openwrt.org)).
Hierdurch werden [viele neue Geräte](https://gluon.readthedocs.io/en/v2023.1.1/user/supported_devices.html) unterstützt.

Des Weiteren ist es nun möglich, viel genauer [Rollen](https://github.com/freifunk-gluon/gluon/pull/2688) (Uplink, Mesh und Client)
auf den Interfaces (z.B. WAN und LAN) zu verteilen.
Zudem wird [DNS-Caching](https://gluon.readthedocs.io/en/v2023.1.1/features/dns-cache.html#dns-caching) auf den Routern wieder unterstützt

Allerdings fällt mit dieser Version auch die Unterstützung für Geräte mit wenig RAM und Flash weg, wie [angekündigt](/blog/2023/09/09/release-2021.html).

Die älteren Geräten, die von dieser Firmware nicht mehr unterstützt werden, werden (derzeit) weiterhin vollwertig am Freifunk-Netz teilnehmen.
Sie bekommen halt nur keine Firmware-Upgrades mehr, sondern sie können maximal die Version 2021.1.2+bremen1 benutzen.<br>
In der Zukunft kann es sein, dass diese Geräte dadurch auch von Verbesserungen des Netzes abgeschnitten sind; das ist aber im Moment noch nicht klar.

Die neue Stable-Firmware wird ab Sonntag auf allen Knoten im Bremer Freifunk-Netz installiert,
auf denen automatische Upgrades für die "stable"-Version aktiviert sind, und die hinreichend neu sind.
Wer das automatische Upgrade deaktiviert hat, findet die Firmware für ein manuelles Upgrade
auch auf [downloads.bremen.freifunk.net](http://downloads.bremen.freifunk.net/firmware/all/2023.1.1+bremen1/).

## Feedback

Falls ihr Probleme mit der neuen Firmware bemerkt oder Fragen habt,
schreibt auf der [Mailingliste](https://lists.bremen.freifunk.net/mailman/listinfo/ff-bremen/),
kommt zum [Treffen](/kontakt.html#treffen),
oder tauscht euch im [Chat](https://webirc.hackint.org/#ircs://irc.hackint.org/#ffhb?nick=Gast_?) mit uns aus.
