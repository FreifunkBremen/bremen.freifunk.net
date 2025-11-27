---
layout: post
title:  "Neue Testing-Version für das B.A.T.M.A.N-Upgrade"
author: Oliver
date:   2022-06-13 22:36:00 +0200
---


Zusammenfassung: wir wollen endlich die Umstellung auf B.A.T.M.A.N v15 durchführen; deshalb gibt es jetzt eine neue [Testing-Firmware](https://wiki.bremen.freifunk.net/Firmware/Changelog#2019-1-3-bremen7), mit der wir alle [das neue Netz testen können](https://wiki.bremen.freifunk.net/Anleitungen/BATMAN%20v15%20Umstieg.md).

## Details
Schon seit langem wollen wir das Bremer Freifunk-Netz auf einen neuen Mesh-Standard umstellen: B.A.T.M.A.N "v15", wie wir das intern nennen [^1].
Diese Umstellung wird es uns in Zukunft ermöglichen, endlich wieder neuere Versionen der [Gluon-Firmware](https://wiki.freifunk.net/Gluon) zu verwenden, auf der unsere Bremer Firmware aufbaut;
und damit steht auch endlich Unterstützung für neue Geräte in Aussicht.

Die Umstellung auf die neue B.A.T.M.A.N-Version betrifft allerdings das ganze Netz: alle Freifunk-Knoten und auch die VPN-Server müssen auf die neue Version umgestellt werden, damit noch alle Geräte miteinander sprechen können.
Wir haben deshalb jetzt erstmal zwei neue VPN-Server ([vpn07](https://map.bremen.freifunk.net/#!/de/map/525400d54578) und [vpn08](https://map.bremen.freifunk.net/#!/de/map/5254007e5440)) eingerichtet, die den neuen B.A.T.M.A.N-Standard verwenden.

Außerdem gibt es eine neue Version unserer Firmware, damit wir alle die neue B.A.T.M.A.N-Version testen können.
Die neue Firmware-Version [2019.1.3+bremen7](https://wiki.bremen.freifunk.net/Firmware/Changelog#2019-1-3-bremen7) wird heute Nacht auf alle Testing-Knoten verteilt werden, die automatische Updates aktiviert haben.

Nach dem Update sollte euer Testing-Knoten weiter im bisherigen Freifunk-Netz sein und normal funktionieren.
Ihr könnt dann aber in den [Config-Modus](/anleitungen.html#konfigurationsmodus) gehen und dort in einem neuen "Domain"-Feld auswählen,
ob ihr weiterhin das bisherige Netz nutzen wollt ("Freifunk Bremen - Normales Netz"),
oder ob ihr in das neue experimentelle B.A.T.M.A.N-v15-Netz wechseln wollt ("Freifunk Bremen - Experimentelles Netz (mit Batman v15)").
Und ihr könnt die Umstellung auch per SSH machen, ohne in den Config-Modus zu wechseln.
Die Details zu dem ganzen Umstell-Vorgang stehen auf einer eigenen [Wiki-Seite](https://wiki.bremen.freifunk.net/Anleitungen/BATMAN%20v15%20Umstieg.md).

Im Moment sind keine kritischen Probleme mit dem v15-Netz bekannt.
Die bisher bekannten offenen Punkte sind auf [einer separaten Wiki-Seite](https://wiki.bremen.freifunk.net/Erfahrungsberichte/Batman v15 Probleme.md) aufgelistet.
Es spricht also nichts dagegen, Testing-Knoten auf das neue Netz umzustellen.

**Bei der Umstellung solltet ihr beachten, dass Knoten nicht miteinander meshen können, wenn sie verschiedene B.A.T.M.A.N-Versionen verwenden.**
Falls ihr also mehrere Knoten habt, solltet ihr die alle umstellen!
Und ihr solltet zuerst die Knoten umstellen, die am "weitesten hinten" sind, also die nur über andere Knoten an die VPN-Server und damit ins Internet kommen.
Sonst wird es unter Umständen aufwändig, solche Knoten später noch zu erreichen [^offlineSSID].


## Umstellung des ganzen Netzes

Noch sind wir in der Testphase; aber wir möchten noch innerhalb der nächsten vier Wochen das ganze Bremer Freifunk-Netz tatsächlich auf B.A.T.M.A.N v15 umstellen.
Deshalb sind diese Tests wichtig, damit wir vorher Probleme finden und beheben können.

Die tatsächliche Umstellung wird dann so ablaufen, wie das schon bei der [Umstellung auf den 11s-Standard](/blog/2020/02/25/warnung-umstellung-11s.html) passiert ist:
es wird eine Stable-Firmware veröffentlicht, die zu einem bestimmten festen Zeitpunkt auf allen Knoten automatisch das Netz von B.A.T.M.A.N v13 auf v15 wechselt.

Dazu wird es aber noch eine separate Ankündigung geben.


## Hilfe und Feedback

Wenn ihr mehr zu dem Update oder der Umstellung wissen wollt, oder wenn ihr Feedback habt,
dann kommt in den [Chat](https://webirc.hackint.org/#ircs://irc.hackint.org/#ffhb?nick=Gast_?),
schreibt auf der [Mailingliste](https://lists.freifunk.net/mailman/listinfo/bremen-freifunk.net),
oder kommt zum [Treffen](/kontakt.html#treffen)!



# Fußnoten

[^1]: Die neue B.A.T.M.A.N-Version heisst mit vollem Namen "2018.1-4 compat15 mit B.A.T.M.A.N. IV". Das haben wir intern mit "B.A.T.M.A.N v15" abgekürzt.  
    Die alte Version, die wir bisher benutzt haben, heisst "2013.4.0 compat14 mit B.A.T.M.A.N. IV".
    Das haben wir intern mit "B.A.T.M.A.N v13" abgekürzt. Die interne Nummerierung haben wir da leider etwas unglücklich gewählt.

[^offlineSSID]: Falls ein Knoten die VPN-Server nicht mehr erreichen kann, wird er nach einiger Zeit automatisch eine ["Offline-SSID"](/blog/2020/09/04/neue-testing-2019-1-2-bremen3.html) ausstrahlen, mit der ihr euch per WLAN verbinden könnt.
    Darüber könnt ihr den Knoten dann per SSH erreichen und auf die neue B.A.T.M.A.N-Version umstellen.
