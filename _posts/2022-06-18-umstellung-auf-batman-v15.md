---
layout: post
title:  "Achtung: Umstellung auf B.A.T.M.A.N v15"
author: Oliver
date:   2022-06-20 19:07:00 +0200
---

**Zusammenfassung:** bitte aktiviert automatische Updates auf euren Freifunk-Knoten, damit die neue Firmware-Version
[2019.1.3+bremen8](https://wiki.bremen.freifunk.net/Firmware/Changelog.md#2019-1-3-bremen8) installiert wird,
und damit die Umstellung auf B.A.T.M.A.N v15 am **1. Juli 2022** bei euch klappt.

## Worum geht es?
Wie schon [vor ein paar Tagen erwähnt](/blog/2022/06/13/neue-testing-batman-v15.html), werden wir nun tatsächlich die B.A.T.M.A.N-Mesh-Verbindungen
zwischen allen Knoten und zu den VPN-Servern von B.A.T.M.A.N v13 auf v15 [^1] umstellen.

Das wird es uns ermöglichen, in Zukunft die [Basis](https://wiki.freifunk.net/Gluon) unserer Firmware auf einen neuen Stand zu bringen,
damit wir endlich neue Geräte unterstützen können.

Freifunk-Knoten, die das v13-Netz benutzen, können leider nicht mit Knoten meshen, die das v15-Netz benutzen.
Deshalb wollen wir (möglichst) alle Knoten gleichzeitig umstellen.

Die B.A.T.M.A.N-Umstellung ist also eine umfangreiche Aktion, die unser gesamtes Freifunk-Netz betrifft.
Wir werden hier wieder das gleiche Verfahren anwenden, das wir schon bei der letzten großen Umstellung erfolgreich benutzt haben:
zu einem vorher festgelegten Zeitpunkt werden alle Knoten automatisch auf das neue Netz umschalten.
Als Umschaltzeitpunkt haben wir **Freitag, den 1. Juli 2022** morgens um 2 Uhr festgelegt.
Dieser Zeitpunkt ist ist in der brandneuen Firmware [2019.1.3+bremen8](https://wiki.bremen.freifunk.net/Firmware/Changelog.md#2019-1-3-bremen8) eingetragen.
Damit sich eure Knoten also automatisch umstellen, muss diese neue Firmware vor dem 1.7.2022 auf euren Knoten installiert sein.

Die neue Firmware wird ab heute Nacht an alle Knoten verteilt, die automatische Updates für die Stable-Version aktiviert haben
(an die Testing-Knoten wurde die Firmware bereits letzte Nacht verteilt).


## Was ist also zu beachten?

- Schaltet am besten den Autoupdater auf euren Knoten ein (z.B. auf Stable). Dann wird euer Knoten bis zum 1.7.2022 automatisch das Update installieren und ist für die Umstellung bereit.
- oder stellt sicher, dass ihr eure Knoten bis zum 1.7.2022 auf die Version 2019.1.3+bremen8 aktualisiert habt.
- denkt auch an "eingelagerte" Knoten, die nur gelegentlich angeschaltet werden: nehmt diese vor dem 1.7.2022 kurz (eine Stunde sollte genügen) in Betrieb, damit sie das Update installieren können.

## Vorzeitige automatische Umstellung

Falls einzelne Knoten eures Mesh-Netzwerks zwischenzeitlich nicht erreichbar sind, kann es sein, dass diese Geräte sich schon vorher automatisch umgestellt haben.
Sowas kann passieren, wenn ein Knoten für mehr als 24 Stunden keinen Internet-Zugriff hat –
denn in so einem Fall stellt sich der Knoten ebenfalls automatisch um.
Das ist für die Fälle gedacht, wo das Gerät keine aktuelle Uhrzeit aus dem Internet mehr beziehen kann.

Dafür gibt es folgende Lösungen:

- falls ihr sowieso nur einen Knoten habt, müsst ihr gar nichts machen. Ihr benutzt dann schon das neue v15-Netz, und euer Freifunk-Knoten sollte weiterhin normal funktionieren.
- ihr wartet auf den Stichtag 1.7.2022; dann werden sich die restlichen Knoten bei euch ebenfalls auf das neue v15-Netz umstellen.
- ihr stellt die restlichen Geräte manuell (per Config-Modus oder SSH-Zugang) auf das v15-Netz um. Mehr dazu steht auf einer eigene [Wiki-Seite](https://wiki.bremen.freifunk.net/Anleitungen/BATMAN%20v15%20Umstieg.md#wechsel-per-weboberfl%C3%A4che).
- ihr stellt die betroffenen Geräte erstmal wieder manuell [auf das v13-Netz zurück](https://wiki.bremen.freifunk.net/Anleitungen/BATMAN%20v15%20Umstieg.md#wechsel-per-weboberfl%C3%A4che), bis am 1.7.2020 dann alle Geräte auf v15 wechseln. Dieser Weg ist allerdings nicht zu empfehlen und wird nur der Vollständigkeit erwähnt.


Übrigens: falls ein Knoten am 1.7. nicht eingeschaltet ist (oder offline ist), macht das nichts,
solange der Knoten schon das Update auf die Version 2019.1.3+bremen8 bekommen hat.
Dann wird er sich beim nächsten Einschalten automatisch von v13 auf v15 umstellen.

Was könnt ihr tun, wenn ihr nach dem 1.7. trotzdem noch einen Knoten habt, der eine zu alte Firmware hat?
In diesem Fall solltet ihr den Knoten direkt mit dem Internet verbinden,
damit er eine VPN-Vebindung zu einem der alten Server aufbaut und ein Update durchführen kann.
Alternativ ist auch ein komplett manuelles Upgrade (im Config-Modus, oder per `sysupgrade`-Befehl auf der Konsole) möglich.

Nach dem 1.7.2022 werden wir noch einen alten VPN-Server einige Monate weiterlaufen lassen, damit Nachzügler ebenfalls auf das neue Netz umstellen können.
Es wird dann noch ein Blogpost geben, sobald der letzte alte Server ebenfalls abgeschaltet wird.

Wir hoffen nun auf eure Unterstützung und etwas Geduld bis zum 1.7.2022.
Falls Ihr dann trotzdem noch Probleme habt, kommt doch gerne direkt zu unserem Freifunk-Treffen, das am Umstellungstag abends stattfinden wird.
Hier werden wir auch noch ein Resümee für die ganze Umstellung ziehen.

Euer Feedback ist daher ausdrücklich erwünscht,
entweder bei einem der nächsten [Freifunk-Treffen](/kontakt.html#treffen),
per [Mail](https://lists.freifunk.net/mailman/listinfo/bremen-freifunk.net),
im [Chat](https://webirc.hackint.org/#ircs://irc.hackint.org/#ffhb?nick=Gast_?),
oder über einen der [anderen Kontaktwege](/kontakt.html).

# Fußnoten

[^1]: Die neue B.A.T.M.A.N-Version heisst mit vollem Namen "2018.1-4 compat15 mit B.A.T.M.A.N. IV". Das haben wir intern mit "B.A.T.M.A.N v15" abgekürzt.  
    Die alte Version, die wir bisher benutzt haben, heisst "2013.4.0 compat14 mit B.A.T.M.A.N. IV".
    Das haben wir intern mit "B.A.T.M.A.N v13" abgekürzt. Die interne Nummerierung haben wir da leider etwas unglücklich gewählt.
