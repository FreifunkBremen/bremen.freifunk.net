---
---
document.addEventListener("DOMContentLoaded", function() {
  var
    firmware_base_url = 'https://downloads.bremen.freifunk.net/firmware/',
    branch = 'stable',
    vendors = {
      "tp-link": "TP-LINK",
      "ubiquiti": "Ubiquiti",
      "ubnt": "Ubiquiti",
      "d-link": "D-Link",
      "linksys": "Linksys",
      "buffalo": "Buffalo",
      "netgear": "Netgear",
      "allnet": "Allnet",
      "gl": "GL Innovations",
      "wd": "Western Digital",
      "onion": "Onion",
      "openmesh": "OpenMesh",
      "alfa-network": "ALFA Network",
      "meraki": "Cisco Meraki",
      "8devices": "8devices",
      "raspberry": "Raspberry",
      "x86": "PC",
      "avm": "AVM",
      "zbt": "ZBT",
      "zyxel": "ZyXEL",
      "asus": "ASUS",
      "a5": "A5",
      "aerohive": "Aerohive",
      "lemaker": "LeMaker",
      "nexx": "Nexx",
      "ocedo": "OCEDO",
      "vocore": "VoCore",
    },
    no_factory = ["avm", "8devices", "meraki", "unifi-ac", "gl-ar150", "allnet", "wzr-600dhp"],
    xhr = window.XMLHttpRequest? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'),
    searchbox = document.getElementById('model-search');

  xhr.open('GET', firmware_base_url + branch + '/sysupgrade/' + branch + '.manifest');
  xhr.onreadystatechange = function() {
    if (xhr.readyState <= 3 || xhr.status != 200)
      return;
    var models = [],
      lines = xhr.responseText.split("\n");
    lines.sort();
    lines.forEach(function(line) {
      var lineparts = line.split(" "),
        model = lineparts[0],
        version = lineparts[1], // not used
        hash = lineparts[2], // not used
        size = lineparts[3], // not used
        filename = lineparts[4];
      if (lineparts.length != 5)
        return;
      var vendorFound = false;
      for (vendor in vendors) {
        if (model.indexOf(vendor) == 0) {
          vendorFound = true;
          var name = new Array(),
            model = model.substr(vendor.length + 1);
          model.split('-').forEach(function(part) {
            if (part.match(/^v[\d\.]+$/))
              name.push(part);
            else if (part == "unifi")
              name.push("UniFi");
            else if (part.match(/\d/) || part.length <= 3)
              name.push(part.toUpperCase());
            else
              name.push(part[0].toUpperCase() + part.substr(1));
          });

          name = name.join(" ").replace('N ND ', 'N/ND ');

          if (models.length == 0 || models[models.length-1].file != filename)
            models.push({
              vendor: vendor,
              model: name,
              id: model,
              file: filename,
              // not used:
              size: size,
              hash: hash,
              version: version,
            });
          break;
        }
      }
      if (!vendorFound) {
        console.log("unknown vendor used by firmware image \"" + model + "\"")
      }
    });
    var model_div = document.querySelector('#models');
    var model_template = document.getElementById('model-template').content;
    models.forEach(function(model) {
      var tmpl = document.importNode(model_template, true),
        container = tmpl.querySelector('.model'),
        has_factory = true;
      container.style.backgroundImage = "url('/images/routers/" + model.vendor + "-" + model.id + ".svg')";
      container.dataset.searchterms =
        vendors[model.vendor].toLowerCase().replace(/[^a-z0-9]/g, '')
        + " " +
        model.model.toLowerCase().replace(/[^a-z0-9]/g, '');
      container.querySelector('.name').textContent = vendors[model.vendor] + " " + model.model;
      container.querySelector('.update a').href = firmware_base_url + branch + '/sysupgrade/' + model.file;
      no_factory.forEach(function(pattern) {
        if (model.file.indexOf(pattern) != -1)
          has_factory = false;
      });
      if (has_factory)
        container.querySelector('.factory a').href =
          firmware_base_url + branch + '/factory/' +
          model.file.replace('-sysupgrade', '').replace(/(-wndr.*)\.(tar|bin)$/, "$1.img");
      else {
        tmpl.querySelector('.factory').remove();
        container.querySelector('.update a').textContent +=' / Erstinstallation';
      }
      model_div.appendChild(tmpl);
    });
  }
  xhr.send();

  searchbox.addEventListener("input", function(ev) {
    var searchterm = this.value.toLowerCase();
    var searchbox = document.getElementById('model-search');
    if (searchterm.replace(' ', '').length < 3) {
      searchbox.setCustomValidity('');
      return;
    }
    var searchterms = searchterm.split(' ');
    var any = false;
    [].forEach.call(document.querySelectorAll('#models .model'), function(a) {
      var show = true;
      searchterms.forEach(function(searchterm) {
        if (a.dataset.searchterms.indexOf(searchterm.replace(/[^a-z0-9]/g, '')) == -1)
          show = false;
      });
      any |= show;
      a.style.display = show? "block" : "";
    });
    searchbox.setCustomValidity(any? "" : "Keine Modelle gefunden!");
  });
  searchbox.value = "";
  searchbox.focus();

  document.getElementById('show-all').addEventListener("click", function(ev) {
    [].forEach.call(document.querySelectorAll('#models .model'), function(a) {
      a.style.display = "block";
    });
  });
});

// vim: syntax=javascript sw=2 ts=2 sts=2 et
