# Webseite von bremen.freifunk.net #

Dies ist der Inhalt von https://bremen.freifunk.net. Die Seite wird mit [Jekyll](http://jekyllrb.com) gepflegt. Seiteninhalte werden in [Markdown](http://markdown.de/syntax/) geschrieben und dann von Jekyll automatisch in HTML umgewandelt.

## Bilder einbinden
Bilder für Blogposts sollten unter blog/files/ eingecheckt werden; Bilder für andere Teile der Seite sollten unter images/ eingecheckt werden.

Die Bilder sollten vor dem Einchecken vorbereitet werden:
- Bild z.B. auf FullHD-Auflösung (1920 Pixel breit) runterskalieren
- JPEG-Qualität auf 95% setzen
- Metadaten entfernen (unter Linux: `exiftool -all= <Bilddatei>`)

Um Bilder in Blogposts einzubinden, sollte das `image`-Jekyll-Tag verwendet werden, ungefähr so:
```
{% image 800xAUTO blog/files/2018-11-22/einbild.jpg width="400" alt="Eine Beschreibung des Bildes" %}
```

Damit wird das Bild mittels [jekyll-image-tag](https://github.com/robwierzbowski/jekyll-image-tag) auf die angegebene Größe skaliert, was die Ladezeit reduziert. Im Beispiel wird das Bild auf 800 Pixel Breite und die dazu passende Höhe skaliert, und wird dann mit 400 Pixeln Breite dargestellt. Die Verdoppelung der Größe ist sinnvoll, um das Bild auch auf High-DPI-Bildschirmen und beim Zoomen scharf anzuzeigen.

Für Bilder, die anhand der Höhe (statt Breite) skaliert werden sollen, würde das `ìmage`-Tag so aussehen:
```
{% image AUTOx800 blog/files/2018-11-22/einbild.jpg style="max-height:400px" alt="Eine Beschreibung des Bildes" %}
```
Die `max-height`-Angabe sorgt dafür, dass das Bild korrekt angezeigt wird, auch wenn es von der Breite nicht mehr auf den Bildschirm passt.


## Lokale Kopie ##

Mit diesen Schritten kann man die Freifunk-Webseite auf dem eigenen Rechner ansehen und testen:

* Bundler installieren (z.B. `gem install bundler`)
* Repository auschecken (inkl. Untermodulen): `git clone --recursive https://github.com/FreifunkBremen/bremen.freifunk.net`
* In das ausgecheckte Verzeichnis wechseln: `cd bremen.freifunk.net`
* Benötigte Software (z.B. Jekyll) installieren: `bundle install`
* Jekyll starten: `bundle exec jekyll serve`

Die Seite kann jetzt unter http://127.0.0.1:4000/ aufgerufen werden.
