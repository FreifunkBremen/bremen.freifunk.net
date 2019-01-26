---
layout: post
title:  Zukunft von Freifunk - Babel ?
author: genofire
date:   2019-02-03 17:55:00 +0200
---

Wie bereits zur Zeiten der Breminale erwähnt, forschen wir bereits an einer zukünftige Software und Protokollen des Netzwerkes.

Im [damaligen Post](/blog/2018/07/18/firmware-mesh-technik.html) wurden folgende zukünfige Anpassungen bereits erwähnt:
- Austausch des Meshprotokoll babel mit l3roam
- Wechsel von Ad-Hoc zu 11s
- Schwierigkeit bei einer "fläschendecken" Umstellung

Nun werden weitere Änderungen konkreter und sind bereits in einen Testnetzwerk umgesetzt:
- Wireguard
- IPv6-only



### VPN-Tunnel, Wireguard

### IPv6-only, das geht doch gar nicht
Kurz: Doch, nach gut 20 Jahren und daddurch das alle IPv4 Adressen vergeben wurden hat sich einiges in den letzten wenigen Jahren getan.

Eine "schöne" Implementierung vom veralteten IPv4 ist zu sehr Aufwendig und heutzutage mehr nicht unbedingt notwendig.

---
_Für Technik Interessierte:_

#### Geräte / Clients


In [Android](https://android.stackexchange.com/questions/176111/can-android-be-used-in-ipv6-only-networks-what-level-of-ipv4-faking-is-necessar) ist dies nicht genau festzumachen. Fakt ist mit Android 4.x ging es noch nicht und mit Android 6 sollte es kein Probleme mehr geben.
[Apple](https://developer.apple.com/support/ipv6/) geht dort bereits um einiges weiter, seit Mitte 2016 müssen alle App bereits IPv6-only Netzwerk unterstützen.

Selbst wenn sämtliche Geräte auf der Welt inzwischen IPv6 unterstützen, bedeutet es noch lange nicht, das überall auf der Welt IPv6 auch eingesetzt wird.

**Fazit:**
Für die Nutzer des Freifunks, kann es mit älteren Clients zu Problemen kommen.
Dabei stellt sich die Frage, ab wann es ist vertretbar, das die Geräte ohne IPv6(only) unterstützen nicht mehr im Freifunk.

_Für mich ist die Antwort einfach: Sofort, da so veraltete Clients/Geräte ein erhäbliches Sicherheitsrisiko darstellen, da Sie neben normalen Updates auch keine Sicherheits-Updates erhalten hab. (Diese wären in ein IPv4 Netzwerk leichter aufzuspüren und zu hacken.)
Doch habt keine Angst, bis das zukunftige Netz fertig ist und es "flächendecken" ausgerollt wird, wird noch einige Zeit vergehen_

#### ISP (Internetanbieter)

Auf wer einen Seite gibt es aus historischen Gründen noch viele veraltete Anschlüsse, die ein solches Netzwerk nicht zur Verfügung stellen.
(Wie es in den folgenen "live" Statistiken durch die Aufrufe bei den großen Hostern zu sehen ist.)

<center>
  <img src="https://www.vyncke.org/ipv6status/plotpenetration.php?country=ww" alt="Weltweit" style="width:40%;" />
  <img src="https://www.vyncke.org/ipv6status/plotpenetration.php?country=de" alt="In Deutschland" style="width:40%;" />
</center>

Dabei kann Freifunk auch eine Lösung sein, die Inkompetenz von ISP nach über zwei Jahrzehnten aufzuhohlen.
(In dem Zuge nachträglich Happy Birthday 23 Jahre [RFC1883](https://tools.ietf.org/html/rfc1883) - 20 Jahre [RFC2460](https://tools.ietf.org/html/rfc2460) und nun entgültig als Ersatz von IPv4 [RFC8200](https://tools.ietf.org/html/rfc8200).)

**Fazit:**
Im Freifunk Bremen funktioniert IPv6 schon bevor ich vor über fünf Jahren dazugestoßen bin.

#### Dienste im Internet

Auf der anderen Seite, gibt es viele Dienste die immer noch nicht per IPv6 erreichbar sind, schaut doch mal bei [ipv6.watch](https://ipv6.watch) vorbei und erinnert eure Lieblingsdienst daran.

Diese zu verlieren ist momentan ein zu großer Verlust, den wir nicht eingehen wollen. Dafür gibt es neben der Weiterbetreibung von IPv4 im gesamten Netz eine Alternative.
Indem ein mindestens /96 reserviert wird, um die kleineren IPv4-Adresse in einer IPv6-Adresse zu "stecken", können so Pakete transportiert werden und z.B. von einem unsere Gateways/VPN-Servern wieder in ein IPv4 Adresse übersetzt werden.

Beispiel: Wenn man die IPv4-Adresse `8.8.8.8`. Im Gateway ist nun das reseviert IPv6 Subnetz `64:ff9b::/96`
nun "steckt" man in dieses Subnetz die IPv4-Adresse, was `64:ff9b::140.82.118.3` ergibt. Dies reicht oftmans schon, doch wenn man nun noch die offizielle IPv6 Schreibweise verwendet erhält man `64:ff9b::8c52:7603`.

---
_Für Profis:_

Hierzu gibt es mehrere Möglichkeiten, wie man erreicht das ein Geräte diese Übersetzung vornimmt (abgesehen vom Gateway).

**DNS64** man manipuliert die nicht vorhandenen IPv6 DNS-Einträge so, dass es solche gibt.

Beispiel: `github.com` hat keine offiziellen IPv6 DNS Eintrag, sondern nur den für IPv4 z.b. `140.82.118.3`. Mit dem reseviert IPv6 Subnetz `64:ff9b::/96` ergibt sich `64:ff9b::8c52:7603`. Wenn man nun ein DNS64 Server Anfragt, erhält man genau diese IPv6-Adresse, da es ansonsten keine IPv6 (AAAA) DNS Eintrag vorhanden ist.

Nachteil ist, das man dabei die DNSSEC Kette zerstört ist und der Client nicht mehr verifizieren kann, ob DNS Einträge manipuliert wurden.
(Anmerkung: Momentan ist DNSSEC nicht weit verbreitet und bekommt eine zentralisierte/böse Konkurenz von )


**464XLAT** ist eine Technik, indem eine IPv4 Paket in ein IPv6 Paket und dann wieder in ein IPv4 Paket verwandelt wird. Die zweite Umwandlung von ein IPv6 zu ein IPv4 Paket kann weiterhin unser VPN-Server vornehmen, diese wird p(rovider)lat genannt. Die Schwierigkeit besteht im der ersten Umwandlung, welche c(ustomer)lat genannt wird.
Dabei gibt es allein zwei Orte, wo dies Möglich ist.
- **Im Access Point / Node / Knoten** hierbei wäre noch viel Entwicklungaufwand in unsere Software für die Knoten notwendig, sodass es beim Wechsel zwischen Knoten nicht zum "aufhängen" der Clients führt.

- **Im Client** dabei muss man sich sicher sein, das alle Clients dies unterstützen und die Notwendigkeit erkennen ([Android](https://sites.google.com/site/tmoipv6/464xlat) hat dies schon bereits vor Jahren erfolgreich erprobt)

Wie dabei das passende IPv6 Subnetz erkennt wird ist das nächsten Problem.
Im Access Point / Node / Knoten kann diese mit in der Software hinterlegt werden, allerdings nicht bei den Clients.

Dieses Problem wurde bis heute nicht bei der IETF komplett gelöst,
- es gibt einmal das Standard Subnet `64:ff9b::/96`.
- Eine weitere Möglichkeiten ist die Domain `ipv4only.arpa` einmal die DNS64 IPv6 Addressen zu erfragen und dann das Subnetz herauszurechnen ([sogenanntes Discovery](https://tools.ietf.org/html/draft-ietf-behave-nat64-discovery-heuristic-17)).
- Die mir als letztes bekannte Möglichkeit ist, per Route Advertisment ([den Perf64 Eintrag](https://tools.ietf.org/html/draft-pref64folks-6man-ra-pref64-02)) - ähnlich der "IP-Adressvergabe" bei IPv6.

**Fazit:** Insgesamt ist dies Feld sehr Konfus und mit Wahrscheinlichkeit nicht vollständig. Dennoch betreibt die Telekom US seit Jahren sehr erfolgreich ein 464xlat mit noch weiteren (hier nicht erwähnten) Annehmlichkeiten.

---
_Für "Alle":_

## Aktueller Stand
Für die "Profi"-Leser ganz Kurz:
Es findet ein aktuell im Testnetz ein NAT64/DNS64 statt, sodass auf Clientseite ein 464xlat mit dem Standard Subnet `64:ff9b::/96` und den Discovery mit `ipv4only.arpa` möglich ist.

Dieses Netzwerk ist bereits auf der Freifunk-Karte zu sehen. dieses wir von [VPN04](https://map.bremen.freifunk.net/#!/map/4e3ce46883fb) und seinen Knoten zur Verfügung gestellt.

### "Test"
Dieses Netz wurde erst sporadisch getestet, mit  einen  "Digineo"-Router / ZBT-WG3526 (32M) und meinen Linux-Notebook im anderen Zimmer.


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

#### Verfügbarkeit
Manuell wurden die Website duckduckgo.com, github.com und viele andere aufgerufen.

Des Weitere den mirror test von [test-ipv6.com](http://test-ipv6.com/mirrors.html), welcher erst IPv4 und dann IPv6 überprüft:

![ipv6-mirror Tabelle](/blog/files/babel-update/test-mirrors.png)
