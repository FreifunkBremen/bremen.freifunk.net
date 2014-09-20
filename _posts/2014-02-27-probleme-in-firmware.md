---
layout: post
title:  Probleme mit der Firmware
date:   2014-02-27 09:37:00 +0200
author: jplitza
---
Beim Update von gestern Morgen (Nightly 20140226) ist leider ein Problem
aufgetreten: Alle Nodes die das Update gezogen haben sind jetzt im Configmode
und haben alle ihre Einstellungen vergessen (inklusive Passwort).

Um das Problem zu beheben, führt bitte folgende Schritte aus:

1. Verbindet euch per Kabel mit dem Router, um auf den Configmode zugreifen zu können
2. Ruft [die Configmode-Oberfläche](http://192.168.1.1/) im Browser auf
3. Klickt oben rechts auf „Expertmode“
4. Klickt auf „Firmware aktualisieren“
5. Ladet die für euren Router passende [Firmware] runter und ladet sie im Formular des Configmodes wieder hoch.
6. Aktualisiert die Firmware.
7. Geht wieder in den Configmode und konfiguriert den Router.

Falls ihr noch Fragen dazu habt, fragt ab besten über die [Mailingliste] nach Hilfe.

Die Angelegenheit ist ein gutes Beispiel dafür, warum das noch Nightlies sind und alles experimentell ist. Aber bald gibts hoffentlich ne stabile Version, die dann nicht mehr täglich geupdated wird und dabei potentiell kaputt geht! :-)

[Mailingliste]: mailto:liste@bremen.freifunk.net
[Firmware]: http://downloads.bremen.freifunk.net/firmware/nightly/
