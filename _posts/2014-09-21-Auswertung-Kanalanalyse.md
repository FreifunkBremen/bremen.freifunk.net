---
layout: post
title:  Auswertung der Kanalanalyse
author: jplitza
date:   2014-09-21 15:03:00 +0200
---

Seit dem [letzten Update] haben unsere Freifunk-Knoten die Fähigkeit, die WLAN-Kanalnutzung in ihrer Umgebung aufzuzeichnen und zentral zu sammeln. Im Folgenden möchte ich kurz die Motivation, das genaue Vorgehen und den Versuch einer Auswertung dieser Daten darstellen.


### Motivation

Es heißt immer und überall "Das 2,4 GHz-Band ist voll, da ist egal welchen Kanal du nimmst". Damit wollte ich mich nicht zufrieden geben, und auch wenn die Wahl dann erstmal einfach auf Kanal 6 gefallen war, wollte ich da nochmal etwas genauer nachforschen. Mit inzwischen doch einer ansehnlichen Zahl an Knoten war das passende Sensor-Netzwerk schon da, es brauchte nur noch ein Konzept und passende Software.<!-- more -->

### Konzept

Während eine tatsächliche Messung der Nutzung des Spektrums natürlich am präzisesten wäre, birgt sie auch diverse Probleme. Sie ist stark zeitabhängig, da morgens vermutlich weniger los ist als abends, lässt sich nicht zu einem einzelnen Zeitpunkt messen sondern nur über einen Zeitraum hinweg und würde insgesamt eine riesige Menge an Daten verursachen. Ferner wäre es schwierig, zu berücksichtigen, wenn Router benachbart sind und dadurch der Spektrumsbelastung in dieser Umgebung doppeltes Gewicht verleihen würden.

Stattdessen entschieden wir uns, lediglich zu messen, wie viele Access Points in der Nähe der Freifunk-Knoten auf welchem Kanal funken. Um die doppelte Gewichtung durch benachbarte Knoten hierbei zu vermeiden, haben wir nicht nur die Zahlen übermittelt, sondern auch gekürzte BSSIDs (siehe den Post zum [letzten Update]).

Damit nehmen wir natürlich an, dass jedes WLAN gleich wahrscheinlich aktiv ist und tatsächlich Daten überträgt. Natürlich sind ein Großteil der WLANs relativ inaktiv und müssen nur ein paar Mal am Tag einige Webseiten ausliefern, während andere dauerhaft Streaming- und Peer-to-Peer-Traffic übertragen. Wir hatten aber keinen Grund zur Annahme, dass die Art der Nutzung vom Kanal abhängig ist.

### Erhebung

Zur Datenerhebung kam also auf den Knoten ein [kleines Paket] zum Einsatz, welches stündlich zu einer pro Knoten zufällig gewählten Uhrzeit nach WLANs in der Umgebung suchte. Diese wurden dann nach Nicht-Freifunk-WLANs gefiltert, mehrfache BSSIDs des selben APs wurden durch Abschneiden der BSSID zusammengefasst und dann per [Alfred] zum Server übertragen, zusammen mit der Information ob sekundäre Kanäle (HT40+/HT40-) genutzt wurden.

Da das Vorhandensein eines WLANs normalerweise kein zeitabhängiger Prozess ist (abgesehen von einigen WLANs, die nachts ausgeschaltet werden) und die zeitliche Komponente in den Daten somit keine Rolle spielt, haben wir diese Daten nicht über einen Zeitraum gespeichert, sondern lediglich zu einem zufälligen Zeitpunkt einen Schnappschuss erstellt.

### Auswertung

Die Daten dieses Schnappschusses mussten dann etwas bearbeitet werden, wozu ein [kleines Python-Skript] diente. Zunächst sollen mehrere benachbarte Knoten zusammen kein größeres Gewicht haben. Daher wurden Knoten, die das selbe Fremd-WLAN gesehen haben, [transitiv] zusammengefasst, sodass ihre Messungen quasi als die eines einzelnen, flächengrößeren/empfangsstärkeren Knotens gewertet wurden. Dadurch hat sich die Anzahl der Messungen von 91 auf 60 reduziert, was immer noch einen ausreichenden Stichprobenumfang darstellt.

Anschließend wurden für jede Messung – also für jeden (ggf. zusammengefassten) Knoten – vier Zahlen pro Kanal berechnet:

* Primärer Kanal: Anzahl APs, die diesen Kanal als primären Kanal nutzen
* Sekundärer Kanal: Anzahl APs, die diesen Kanal als sekundären Kanal mit HT40 nutzen
* Effektive Belastung: Anzahl APs, deren Frequenzband die Frequenz dieses Kanals enthält
* Effektive Beeinflussung: Anzahl APs, deren Frequenzband sich mit dem 22 MHz breiten Frequenzband um diesen Kanal überschneidet

<div style="float: right; text-align: right; max-width: 100%; overflow-x: hidden;" id="abb1">
    <div style="max-width: 100%; overflow-x: auto; overflow-y: hidden;">
        <a href="https://commons.wikimedia.org/wiki/File:2.4_GHz_Wi-Fi_channels_(802.11b,g_WLAN).svg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2.4_GHz_Wi-Fi_channels_%28802.11b%2Cg_WLAN%29.svg/640px-2.4_GHz_Wi-Fi_channels_%28802.11b%2Cg_WLAN%29.svg.png" style="margin: -10px 0 -5px 5px;">
        </a>
    </div>
    <b>Abb. 1</b>: WLAN-Kanäle im 2,4 GHz-Band und die von ihnen belegten Frequenzen.<br>
    <div class="small">
        <a title="Creative Commons Attribution-Share Alike 3.0" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>,
        by <a href="//commons.wikimedia.org/w/index.php?title=User:Gauthierm&amp;action=edit&amp;redlink=1" class="new" title="User:Gauthierm (page does not exist)">Michael Gauthier</a>
        via <a href="//commons.wikimedia.org/wiki/">Wikimedia Commons</a>.
    </div>
</div>
Ein Beispiel hierzu, dass durch [Abb. 1](#abb1) hoffentlich noch verdeutlicht wird:

> Ein AP, der Kanal 6 als primären Kanal nutzt und keinen sekundären Kanal hat, benutzt 20 MHz (OFDM) bzw. 22 MHz (DSSS) rund herum um den Kanal 6 bzw. die Frequenz 2437 MHz, also insgesamt die Frequenzen von 2426 MHz bis 2448 MHz. In diesem Intervall liegen die Kanäle 4-8, sodass dieser AP bei den Kanälen 4-8 jeweils einmal zur effektiven Belastung zählt.

> Ein anderer AP, der als primären Kanal den Kanal 10 (Frequenz 2457 MHz) benutzt, wäre hiervon aber auch noch betroffen, denn er benötigt das Frequenzspektrum von 2446 MHz bis 2468 MHz, überschneidet sich also mit dem ersten AP im Bereich von 2446 MHz bis 2448 MHz. Analoges gilt für einen weiteren AP, der auf Kanal 2 funkt, und natürlich auch für alle auf Kanälen dazwischen.

> Daher muss ein AP, der Kanal 6 als primären Kanal benutzt, bei den Kanälen 2-10 zur effektiven Beeinflussung beitragen.

Für diese vier Datenreihen wurde dann jeweils das arithmetische Mittel gebildet, um die durchschnittliche Anzahl entsprechender APs pro (zusammengefasstem) Knoten zu erhalten, siehe [Abb. 2](#abb2).

<div style="max-width: 100%; overflow-x: clip; clear: right;" id="abb2">
    <div style="text-align: center; overflow-x: auto; max-width: 100%;">
        <svg width="960" height="500">
            <image xlink:href="/blog/files/2014-09-21/channelsurvey.svg" src="/blog/files/2014-09-21/channelsurvey.png" width="960" height="500" />
        </svg>
    </div>
    <p style="max-width: 960px; margin: 0 auto;">
        <b>Abb. 2</b>: Pro Kanal wird je Datenreihe das arithmetische Mittel über alle Stichproben/Messungen dargestellt. Für die relevanteste Datenreihe, nämlich die effektive Belastung, ist zudem der Standardfehler in Form von Fehlerbalken dargestellt.
    </p>
</div>

### Ergebnis

Erstaunlicherweise halten sich ein Großteil der APs tatsächlich an die Empfehlung, die Kanäle 1, 6 oder 11 zu benutzen, da diese überschneidungsfrei nutzbar sind. Und wie erwartet wäre Kanal 13 jener mit signifikant niedrigerer durchschnittlicher Anzahl anderer APs als alle anderen Kanäle. Da aber sowohl Kanal 13 als auch 12 nicht in den USA erlaubt sind und viele Geräte und Treiber aus den USA kommen, herrscht die Befürchtung vor, ein Umstieg auf Kanal 13 könnte viele oder wenigstens einige Nutzer aussperren.

Unser aktueller Kanal 6 ist zwar besser als die benachbarten Kanäle, aber von den drei empfohlenen Kanälen der schlechteste. Während Kanal 1 zwar in der Grafik die niedrigste Beeinflussung aufweist, haben wir uns dennoch für Kanal 11 entschieden, welcher ebenfalls eine Verbesserung zu Kanal 6 darstellen wird. Wie genau der Umstieg laufen wird, ist noch unklar und wird in den kommenden Wochen geklärt.

### Diverses

#### 5 GHz
Während auch Daten für 5 GHz erhoben wurden, ist der Stichprobenumfang hier erheblich geringer. Außerdem ist das 5 GHz-Band quasi leer, sodass eine willkürliche Kanalwahl hier wirklich so gut ist wie jede andere. Da das 5 GHz-Band erst in neueren Geräten unterstützt wird und diese meistens in der Werkseinstellung automatische Kanalwahl verwenden, weichen notfalls die anderen aus.

#### HT40
Der 802.11n-Standard schreibt eigentlich vor, dass die Benutzung von 40 MHz breiten Kanälen zu unterlassen ist, falls die benachbarten Kanäle "voll" sind<sup>[citation needed]</sup>. Da das offenbar der Fall ist – auf jedem Kanal sind im Schnitt mehrere APs zu sehen – dürfte eigentlich niemand tatsächlich 40 MHz breite Kanäle benutzen. Leider bieten fast alle Geräte die Möglichkeit, diese Vorgabe zu überschreiben, sodass man sich darauf nicht verlassen kann.

#### Rohdaten
Die gesammelten [Rohdaten][] (ohne die Information, von welchem Knoten welche Messungen kommen) stehen natürlich jedem, der eine andere Auswertung versuchen möchte, zur Verfügung.

[transitiv]: https://de.wikipedia.org/wiki/Transitive_Relation
[kleines Python-Skript]: https://gist.github.com/jplitza/f29d9151c94f520fc4bc#file-channelsurvey-py
[letzten Update]: /blog/2014/09/06/Neue-Testing-Channel-Survey.html
[kleines Paket]: https://github.com/FreifunkBremen/ffhb-packages/tree/master/ffhb/gluon-channel-survey
[Alfred]: http://www.open-mesh.org/projects/open-mesh/wiki/Alfred
[Rohdaten]: https://gist.github.com/jplitza/f29d9151c94f520fc4bc#file-channelsurvey-json
