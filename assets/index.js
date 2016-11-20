---
---
document.addEventListener("DOMContentLoaded", function() {
  function pad(n) {
    return (n < 10? '0' : '') + n;
  }
  function fmtdate(d) {
    return ["", "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"][d.getDay()] + '., ' +
      d.getDate() + '. ' +
      ["", "Jan.", "Feb.", "März", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."][d.getMonth()];
  }
  function fmttime(d) {
    return d.getHours() + ':' + pad(d.getMinutes());
  }
  function fmtdatetime(d) {
    return fmtdate(d) + ' ' + fmttime(d);
  }

  // calendar
  (function() {
    function merge(a, b) {
      var ret = {};

      for (var prop in a)
        if (a.hasOwnProperty(prop))
          ret[prop] = a[prop];
      for (var prop in b)
        if (b.hasOwnProperty(prop))
          ret[prop] = b[prop];

      return ret;
    }
    var
      urlregexp = /\b(?:https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]|\n/gim,
      xhr = window.XMLHttpRequest? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', '/api/calendar.json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState <= 3 || xhr.status != 200)
        return;

      var
        events = JSON.parse(xhr.responseText),
        events_elem = document.querySelector('#termine>div'),
        event_template = document.querySelector('#event-template').content;

      events.sort(function(a, b) {
        if (a.dtstart < b.dtstart)
          return -1;
        if (a.dtstart > b.dtstart)
          return 1;
        return 0;
      });

      events.forEach(function(ev) {
        var i, a, tmpl = document.importNode(event_template, true);
        function tqs(selector) {
          return tmpl.querySelector(selector);
        }
        var
          title = tqs('.title'),
          starttime = tqs('.starttime'),
          endtime = tqs('.endtime'),
          loc = tqs('.location'),
          description = tqs('.description'),
          dtstart = new Date(ev.dtstart * 1000),
          dtend = new Date(ev.dtend * 1000);

        if (ev.allday) {
          dtstart.setHours(0, 0, 0, 0);
          dtend.setHours(0, 0, 0, -1);
        }

        var days = (new Date(dtend.getTime()).setHours(0, 0, 0, 0) -
          new Date(dtstart.getTime()).setHours(0, 0, 0, 0)) / 86400000;

        title.textContent = ev.summary;
        starttime.textContent = (ev.allday? fmtdate : fmtdatetime)(dtstart)
          + ((!ev.allday && days)? " Uhr" : "");
        starttime.dateTime = dtstart.toISOString();
        if (ev.allday && !days) {
          endtime.previousSibling.remove();
          endtime.remove();
        } else {
          endtime.textContent =
            (days? (ev.allday? fmtdate : fmtdatetime) : fmttime)(dtend)
            + (!(days && ev.allday)? " Uhr" : "");
          endtime.dateTime = dtend.toISOString();
          if (days) {
            endtime.previousSibling.textContent = ' bis ';
          }
        }
        if (ev.location && ev.location != "") {
          a = document.createElement('a');
          a.href = 'https://www.openstreetmap.org/search?query=' +
            encodeURIComponent(ev.location +
              (ev.location.match(/, (\d+ )?[a-zA-Z ]+$/)? "" : ", Bremen"));
          a.textContent = ev.location;
          loc.appendChild(a);
        } else {
          loc.previousSibling.remove();
          loc.remove();
        }
        if (ev.description && ev.description != "") {
          var
            desc_texts = ev.description.split(urlregexp),
            desc_links = ev.description.match(urlregexp);
          for (i = 0; i < desc_texts.length; i++) {
            description.appendChild(document.createTextNode(desc_texts[i]));
            if (desc_links && i < desc_links.length) {
              if (desc_links[i] == '\n') {
                a = document.createElement('br');
              } else {
                a = document.createElement('a');
                a.href = desc_links[i];
                a.textContent = '[Link]';
              }
              description.appendChild(a);
            }
          }
        } else {
          description.previousSibling.remove();
          description.remove();
        }
        events_elem.appendChild(tmpl);
      });
    };
    xhr.send();
  })();

  // Twitter
  (function() {
    var xhr = window.XMLHttpRequest? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', '/api/tweets.json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState <= 3 || xhr.status != 200)
        return;
      var
        tweets = JSON.parse(xhr.responseText),
        tweets_elem = document.querySelector('#tweets'),
        tweet_template = document.querySelector('#tweet-template').content;

      tweets.forEach(function(tweet) {
        var
          tmpl = document.importNode(tweet_template, true),
          timestamp = tmpl.querySelector('time'),
          date = new Date(tweet.timestamp*1000);
        timestamp.textContent = fmtdatetime(date);
        timestamp.dateTime = date.toISOString();
        tmpl.querySelector('.content').innerHTML = tweet.html;
        tmpl.querySelector('a.link').href = 'https://twitter.com/FreifunkHB/status/' + tweet.id;
        if (tweet.media) {
          tweet.media.forEach(function(media) {
            var
              a = document.createElement('a'),
              img = document.createElement('img');
            img.src = media.thumb;
            a.href = media.url;
            a.appendChild(img);
            tmpl.querySelector('.media').appendChild(a);
          });
        }
        tweets_elem.appendChild(tmpl);
      });
    };
    xhr.send();
  })();

  // Statistics
  (function() {
    var xhr = window.XMLHttpRequest? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'),
      query = 'SELECT last("clients.total") AS "clients", last("nodes") AS "nodes" FROM "global"';
    xhr.open('GET', 'https://grafana.bremen.freifunk.net/api/datasources/proxy/1/query?db=ffhb-nodes&q=' + encodeURIComponent(query) + '&u=public&p=public');
    xhr.onreadystatechange = function() {
      if (xhr.readyState <= 3 || xhr.status != 200)
        return;
      var values = JSON.parse(xhr.responseText).results[0].series[0].values[0],
        clients = values[1],
        nodes = values[2],
        btn = document.querySelector('#karte .btn'),
        container = document.createElement('span');
      container.id = 'stats';
      container.textContent = nodes + ' Knoten, ' + clients + ' Nutzer';
      btn.appendChild(container);
    };
    xhr.send();
  })();
});

// vim: syntax=javascript sw=2 ts=2 sts=2 et
