---
layout: post
title:  Zukunft von Freifunk - das Babel-Netzwerk
author: genofire
date:   2019-02-03 17:55:00 +0200
---

Wie bereits zur Zeit der Breminale erwähnt, forschen wir bereits an einer zukünftigen Software und Protokoll und Struktur des Netzwerkes.

Im [Blogpost von damals](/blog/2018/07/18/firmware-mesh-technik.html) wurden folgende zukünftige Anpassungen bereits erwähnt:
- Austausch des Meshprotokolls babel mit l3roam
- Wechsel von Ad-Hoc zu 11s
- Schwierigkeiten bei einer "flächendeckend" Umstellung

Nun werden weitere Änderungen konkreter und sind bereits in einem Testnetzwerk umgesetzt:
- Wireguard
- IPv6-only


### VPN-Tunnel nun mit Wireguard
Momentan strauchelt noch etwas die neu VPN-Tunnel Software.
Die wir als Ersatz für fastd verwenden wollen, welche in Batman Netz verwendet wird.

Für den Austausch gibt es die folgenden zwei Gründe:
1. Wireguard ist ein Layer3-VPN-Tunnel, dadurch wird der mit Babel unnötige Layer2 von Fastd abgeschaltet
2. Wireguard läuft als Kernelmodule, wird also Teil des Betriebssystems von der Firmware/Gluon/OpenWRT. Somit wird die CPU weniger belastet, da weniger sogenannte Kontextwechsel zwischen ausgeführten (userspaces) Programm notwendig sind. (Wie es bei mit dem Programm fastd notwendig war.)

### IPv6-only (das geht doch noch gar nicht?)
Kurz: Doch, nach gut 20 Jahren und dadurch das alle IPv4 Adressen vergeben wurden hat sich einiges in den letzten wenigen Jahren getan.

Eine "schöne" Implementierung vom veralteten IPv4 ist zu aufwendig und heutzutage nicht mehr unbedingt notwendig. Daher wird das Babelnetz selbst ein IPv6-only Netzwerk werden, mit der Möglichkeit durch Übersetzung an unseren VPNs/Gateways immer noch IPv4-only Dienste im Internet zu erreichen.

#### Ausführliche Erläuterung (für Technik Interessierte)

##### Geräte / Clients

In [Android](https://android.stackexchange.com/questions/176111/can-android-be-used-in-ipv6-only-networks-what-level-of-ipv4-faking-is-necessar) ist dies nicht genau festzumachen. Fakt ist mit Android 4.0 ging es noch nicht und mit Android 5 sollte es keine Probleme mehr geben.
[Apple](https://developer.apple.com/support/ipv6/) geht dort bereits um einiges weiter, seit Mitte 2016 müssen alle App bereits IPv6-only Netzwerk unterstützen.

Selbst wenn sämtliche Geräte auf der Welt inzwischen IPv6 unterstützen, bedeutet es noch lange nicht, das überall auf der Welt IPv6 auch eingesetzt wird.

**Fazit:**
Für die Nutzer des Freifunks, kann es mit älteren Clients zu Problemen kommen.
Dabei stellt sich die Frage, ab wann es ist vertretbar, das die Geräte ohne IPv6(only) unterstützen nicht mehr im Freifunk betrieben werden können.

_Für mich ist die Antwort einfach: sofort. Da so veraltete Clients/Geräte ein erhebliches Sicherheitsrisiko darstellen, da sie neben normalen Updates auch keine Sicherheitsupdates erhalten haben. (Geräte sind in einem öffentlichen IPv4 Netzwerk wie Freifunk leichter aufzuspüren und mit bekannten Sicherheitslücken auch zu hacken.)
Doch habt keine Angst, bis das zukünftige Netz fertig ist und es "flächendeckend" ausgerollt wird, dauert es noch eine ganze Weile._

##### ISP (Internetanbieter)

Auf der einen Seite gibt es aus historischen Gründen noch viele veraltete Anschlüsse, die ein solches Netzwerk nicht zur Verfügung stellen.
(Wie es in den folgenden "live" Statistiken durch die Aufrufe bei den großen Hostern zu sehen ist.)

<center>
  <img src="https://www.vyncke.org/ipv6status/plotpenetration.php?country=ww" alt="Weltweit" style="width:40%;" />
  <img src="https://www.vyncke.org/ipv6status/plotpenetration.php?country=de" alt="In Deutschland" style="width:40%;" />
</center>

Dabei kann Freifunk auch eine Lösung sein, die Inkompetenz von ISP nach über zwei Jahrzehnten aufzuholen.
(In dem Zuge nachträglich Happy Birthday 23 Jahre [RFC1883](https://tools.ietf.org/html/rfc1883) - 20 Jahre [RFC2460](https://tools.ietf.org/html/rfc2460) und nun endgültig als Ersatz von IPv4 [RFC8200](https://tools.ietf.org/html/rfc8200).)

**Fazit:**
Im Freifunk Bremen funktioniert IPv6 schon bevor ich, vor über fünf Jahren, dazugestoßen bin.

##### Dienste im Internet

Auf der anderen Seite, gibt es viele Dienste, die immer noch nicht per IPv6 erreichbar sind, schaut doch mal bei [ipv6.watch](https://ipv6.watch) vorbei und erinnert Eure Lieblingsdienst daran.

Diese zu verlieren ist momentan ein zu großer Verlust, den wir nicht eingehen wollen. Dafür gibt es neben der Weiterbetreibung von IPv4 im gesamten Netz die alternative NAT64.
Indem ein IPv6 Subnet von /96 reserviert wird, um die kleineren IPv4-Adressen in einer IPv6-Adresse zu "stecken", können so Pakete in ein IPv6-only Netz transportiert werden und z.B. von einem unsere Gateways/VPN-Servern wieder in ein IPv4 Adresse übersetzt werden.

Beispiel: Wenn man die IPv4-Adresse `8.8.8.8` und im Gateway nun das IPv6 Subnetz `64:ff9b::/96` reserviert ist, "steckt" man in dieses Subnetz die IPv4-Adresse, was `64:ff9b::8.8.8.8` ergibt. Dies reicht oftmals schon, doch wenn man nun noch die offizielle IPv6 Schreibweise verwendet, erhält man `64:ff9b::808:808`.

###### Technische Umsetzung um IPv4-only Dienste zu erreichen (für Profis)

Hierzu gibt es mehrere Möglichkeiten, wie man erreicht das ein Gerät diese Übersetzung vornimmt (abgesehen vom Gegenstück NAT64 am Gateway).

**DNS64** manipuliert die nicht vorhandenen IPv6 DNS-Einträge, so dass die passende NAT64-IPv6-Adresse enthält.

Beispiel: `github.com` hat keine offiziellen IPv6 DNS Eintrag, sondern nur den für IPv4 z.B. `140.82.118.3`. Mit dem reserviert IPv6 Subnetz `64:ff9b::/96` ergibt sich `64:ff9b::8c52:7603`. Wenn man nun ein DNS64 Server anfragt, erhält man genau diese IPv6-Adresse, da es ansonsten keine IPv6 (AAAA) DNS Eintrag vorhanden ist.

Nachteil ist, dass dabei möglicherweise die DNSSEC-Kette bei IPv4only Diensten zerstört wird und der Client nicht mehr verifizieren kann, ob DNS Einträge manipuliert wurden.
[Diese Webseite](https://dnssec.vs.uni-due.de/) zur Verifikation funktioniert ohne Probleme in unserem Babel-Testnetz, da sie IPv6 unterstützen.

(Anmerkung: Momentan ist DNSSEC nicht weit verbreitet und bekommt Konkurrenz von DNS over TLS. In einigen Browser sind mit vorinstallierten DNSoverTLS-Servern von Cloudflare oder Google ausgestattet. Für die Privatsphäre gibt es hier eine Liste von [alternativ Servern](https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Test+Servers).)

_Meine Meinung ist, dass die Wahrscheinlichkeit gering ist, dass bei einem Dienst im Internet DNSSEC bereits implementiert wurde, aber noch kein IPv6_


**464XLAT** ist eine Technik, indem eine IPv4 Paket in ein IPv6 Paket und dann wieder in ein IPv4 Paket verwandelt wird. Die zweite Umwandlung von einem IPv6 zu ein IPv4 Paket kann weiterhin unser VPN-Server vornehmen, diese wird p(rovider)lat genannt. Die Schwierigkeit besteht in der ersten Umwandlung, welche c(ustomer)lat genannt wird.
Dabei gibt es allein zwei Orte, wo dies möglich ist.

- **Im Access Point / Node / Knoten** hierbei wäre noch viel Entwicklungsaufwand in unsere Software für die Knoten notwendig, sodass beim Wechseln zwischen den Knoten nicht zum "aufhängen" der Clients führt.

- **Im Client** dabei muss man sich sicher sein, das alle Clients dies Unterstützen und die Notwendigkeit erkennen ([Android](https://sites.google.com/site/tmoipv6/464xlat) hat dies schon bereits vor Jahren erfolgreich erprobt)

Wie dabei das passende IPv6 Subnetz erkannt wird, ist bei dieser Technik das nächste Problem.
Im Access Point / Node / Knoten kann diese mit in der Software hinterlegt werden, allerdings nicht bei den Clients.

Hierfür gibt es verschiedene Lösungen,
- einmal das Standard Subnet `64:ff9b::/96`.
- Eine weitere Möglichkeit ist die Domain `ipv4only.arpa` einmal beim DNS64-Server die IPv6-Adresse zu erfragen und dann das Subnetz herauszurechnen ([sogenanntes Discovery](https://datatracker.ietf.org/doc/html/rfc7050)).
- Eine Weitere zukünftige Möglichkeit ist, per Route Advertisment ([den Perf64 Eintrag](https://tools.ietf.org/html/draft-pref64folks-6man-ra-pref64-02)) - ähnlich der "IP-Adressvergabe" bei IPv6.

**Fazit:** Insgesamt ist dies Feld etwas konfus und weltweit ist eine solche Lösung noch nicht oft im Einsatz. Dennoch betreibt die [Telekom US](https://www.internetsociety.org/resources/deploy360/2014/case-study-t-mobile-us-goes-ipv6-only-using-464xlat/) seit 2013 sehr erfolgreich ein 464XLAT.

(P.S: ein super Talk über die Einführung von 464XLAT auf der nanog 2014 gibt es [hier](https://www.youtube.com/watch?v=Xl-hIyZSAmA))

## Aktueller Stand (für "Alle")
Für die nun "Profis" ganz kurz:
Es findet ein aktuell im Testnetz ein NAT64/DNS64 statt, sodass auf Clientseite ein 464XLAT mit dem Standard Subnet `64:ff9b::/96` und den Discovery mit `ipv4only.arpa` möglich ist. (Letzteres kann man in Android an der eigenen IPv4-Adresse erkenne, wenn diese `192.0.0.x` lautet)

Dieses Netzwerk ist bereits auf der Freifunk-Karte zu sehen. Dieses wir von [VPN04](https://map.bremen.freifunk.net/#!/map/4e3ce46883fb) und seinen Knoten zur Verfügung gestellt.

### "Test"
Dieses Netz wurde erst sporadisch getestet, mit  einem  "Digineo"-Router / ZBT-WG3526 (32M) und meinen Linux-Notebook im anderen Zimmer.


#### Geschwindigkeiten
**iperf3 zu (ip4/ipv6).speedtest.sum7.eu**
: TCP / 10sec

| avg          | Download  | Upload    |
|--------------|-----------|-----------|
| NAT64 / IPv4 | 24.7 Mb/s | 5.93 Mb/s |
| IPv6         | 40.6 Mb/s | 5.89 Mb/s |

| max          | Download  | Upload    |
|--------------|-----------|-----------|
| NAT64 / IPv4 | 34.4 Mb/s | 9.78 Mb/s |
| IPv6         | 79.3 Mb/s | 8.88 Mb/s |

**Website zu [speedtest.plutex.de](https://speedtest.plutex.de)** :

| avg          | Download   | Upload    |
|--------------|------------|-----------|
| NAT64 / IPv4 | 27.60 Mb/s | 5.78 Mb/s |
| IPv6         | 54.56 Mb/s | 5.62 Mb/s |

#### Verfügbarkeit der Dienste im Internet
Manuell wurden die Website duckduckgo.com, github.com und viele andere aufgerufen.

Des Weitere den Mirror-Test von [test-ipv6.com](http://test-ipv6.com/mirrors.html), welcher erst IPv4 und dann IPv6 überprüft:

![ipv6-mirror Tabelle](/blog/files/babel-update/test-mirrors.png)
