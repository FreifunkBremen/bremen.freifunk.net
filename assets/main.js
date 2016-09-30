---
---
document.addEventListener("DOMContentLoaded", function() {
  // Make navigation categories clickable
  [].forEach.call(document.querySelectorAll("#mainnav > li > a"), function(elem) {
    elem.addEventListener("click", function(ev) {
      this.parentNode.parentNode.querySelector(".active").classList.remove("active");
      this.parentNode.classList.add("active");
    });
  });

  [].forEach.call(document.querySelectorAll("#navbutton, #blur"), function(elem) {
      elem.addEventListener("click", function(elem) {
        document.body.classList.toggle("navopen");
      });
  });

  // throttle the "scroll" event
  // from https://developer.mozilla.org/en-US/docs/Web/Events/scroll
  var throttle = function(type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function() {
      if (running) { return; }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  throttle("scroll", "throttledScroll");

  var last_scrollY = window.scrollY;
  // shrink the header on scrolling
  window.addEventListener("throttledScroll", function(ev) {
    var header = document.querySelector('#pageheader');
    var threshold_down = Math.max(
      header.clientHeight - document.querySelector('#mainnav li.active ul').offsetHeight,
      1
    );
    var threshold_up = Math.max(
      threshold_down - document.getElementById('mainnav').offsetHeight,
      1
    );

    if (window.scrollY >= threshold_down)
      header.classList.add('fixed');
    else if (window.scrollY < threshold_up)
      header.classList.remove('fixed');

    if (window.scrollY < last_scrollY || window.scrollY < threshold_up)
      header.classList.add('detail');
    else if (window.scrollY > last_scrollY)
      header.classList.remove('detail');

    last_scrollY = window.scrollY;
  });
  window.dispatchEvent(new CustomEvent("throttledScroll"));

  // calendar
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
});
