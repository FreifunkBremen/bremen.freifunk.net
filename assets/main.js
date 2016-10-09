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

  // swipe in menu from the left
  (function() {
    var startY, startTime, startX = 50, endX = 150, distY = 100, max_time = 200;
    window.addEventListener('touchstart', function(ev) {
      if (window.innerWidth >= 720)
        return;
      var touch = ev.changedTouches[0];
      if (touch.clientX > startX)
        return;
      startY = touch.clientY;
      startTime = new Date().getTime();
    });
    window.addEventListener('touchmove', function(ev) {
      if (!startY)
        return;
      var touch = ev.changedTouches[0];
      var failed = Math.abs(startY - touch.clientY) > distY || new Date().getTime() - startTime > max_time;
      var finished = touch.clientX > endX;
      if (!failed && finished) {
        document.body.classList.add("navopen");
        ev.preventDefault();
      }
      if (failed || finished) {
        startY = undefined;
        startTime = undefined;
        return;
      }
      ev.preventDefault();
    });
  })();
});

// vim: syntax=javascript sw=2 ts=2 sts=2 et
