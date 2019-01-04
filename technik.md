---
layout: default
title: Technik
category_id: 2
---
## Netzwerk

Das Freifunk-Netz besteht aus einer Kombination von klassischen WLANs, Ad-hoc WLANs (Mesh) und VPNs.

<img src="/images/diagram.png" style="float:right; margin-left: 10px;" alt="Erläuterndes Diagramm">

Das klassische WLAN ist das, worüber du und jeder andere sich einfach verbinden kann. Es bietet einen einfachen und schnellen Zugang zum Freifunk-Netz.

Das Ad-hoc WLAN verbindet die Router untereinander zum sogenannten Mesh. Wenn zwei Router nah genug beieinander stehen, um sich per WLAN erreichen zu können, bauen Sie eine Funkverbindung auf. So können sie und alle mit ihnen verbundenen Geräte unabhängig vom Internetanschluss der Betreiber miteinander kommunizieren. Hier verwenden wir [B.A.T.M.A.N. Advanced], ein Layer-2-Routingprotokoll, das schnell auf Topologieänderungen im Mesh reagieren kann.

Schließlich sind wegen der Entfernungen aber nicht alle Router per Funk verbunden. Deswegen gibt es außerdem sogenannte VPNs zu den von uns betriebenen VPN-Servern. Damit können die Router auch das allgemeine Internet als Verbindung untereinander nutzen. Auch hier kommt B.A.T.M.A.N. Advanced zum Einsatz, die VPNs selbst bauen wir mit Hilfe von [fastd] auf. Über die VPN-Server läuft auch deine Verbindung, wenn du über das Freifunk-Netz auf eine Seite im Internet zugreifst. Von dort wird sie nochmals umgeleitet, zum Beispiel über einen [Server des Verein freie Netze e.V.](http://wiki.freifunk.net/Vpn03), um auch unsere Identität nicht im Netz preiszugeben.

## Autoupdate

Die Freifunk-Router updaten sich automatisch, falls diese Einstellung nicht im Configmode deaktiviert wird. So können wir neue Versionen der Software, in der beispielsweise Sicherheitslücken geschlossen oder neue Features hinzugefügt wurden, automatisch auf den Routern aktualisieren.

Es gibt verschiedene „Update-Kanäle“:
<dl class="dl-horizontal">
    <dt><a href="http://downloads.bremen.freifunk.net/firmware/stable/">Stable</a></dt>
    <dd>Nur das Beste: Hier landet Software, die wir lange selbst gestestet haben. Ein Vier-Augen-Prinzip sichert gegen Fehler ab: Jedes Update muss von mindestens zwei unserer Entwickler begutachtet und signiert werden, bevor es auf den Geräten landet. Hier sind nur selten Updates zu erwarten.</dd>
    <dt><a href="http://downloads.bremen.freifunk.net/firmware/testing/">Testing</a></dt>
    <dd>Bevor ein Updatepaket als stabil deklariert wird, muss es erstmal getestet werden. Dazu ist dieser Kanal gedacht. Wer kein Problem damit hat, mit Pech mal seinen Router neu zu flashen oder per Hand neuzustarten, bekommt Updates hier früher als die anderen. Außerdem brauchen wir natürlich immer Tester!</dd>
    <dt><a href="http://downloads.bremen.freifunk.net/firmware/nightly/">Nightly</a></dt>
    <dd>In diesem Kanal testen wir brandneue Entwicklungen. Daher ist die Software oft noch nicht ausgereift und enthält massive Fehler. Dieser Kanal ist nur für Entwickler und Abenteuerfreudige zu empfehlen.</dd>
    <dt><a href="http://downloads.bremen.freifunk.net/firmware/babel/">Babel</a></dt>
    <dd>In diesem Update-Zweig wird momentan an einer alternativen Routing-Technik gearbeitet. Zur Zeit ist es nicht sinnvoll, diese Software im regulären Betrieb zu nutzen.</dd>
</dl>

[fastd]: https://projects.universe-factory.net/projects/fastd
[B.A.T.M.A.N. Advanced]: http://www.open-mesh.org/projects/batman-adv
