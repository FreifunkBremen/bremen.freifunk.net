---
---
document.addEventListener("DOMContentLoaded", function() {
  // Make navigation categories clickable
  [].forEach.call(document.querySelectorAll("#mainnav > li a"), function(elem) {
    elem.addEventListener("click", function(ev) {
      this.parentNode.parentNode.querySelector(".active").classList.remove("active");
      this.parentNode.classList.add("active");
    });
  });

  [].forEach.call(document.querySelectorAll("#navbutton, #blur"), function(elem) {
      elem.addEventListener("click", function(elem) {
        document.documentElement.classList.toggle("navopen");
      });
  });
});
