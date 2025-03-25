document.addEventListener("DOMContentLoaded", function() {
  var
    firmware_base_url = 'https://downloads.bremen.freifunk.net/firmware/',
    branch = 'stable',
    vendors = {
      "8devices": "8devices",
      "a5": "A5",
      "aerohive": "Aerohive",
      "alfa-network": "ALFA Network",
      "allnet": "Allnet",
      "aruba": "Aruba Networks",
      "asus": "ASUS",
      "avm": "AVM",
      "buffalo": "Buffalo",
      "cudy": "Cudy",
      "devolo": "Devolo",
      "d-link": "D-Link",
      "engenius": "EnGenius",
      "enterasys": "Enterasys Networks",
      "gl": "GL Innovations",
      "joy-it": "Joy-IT",
      "lemaker": "LeMaker",
      "linksys": "Linksys",
      "meraki": "Cisco Meraki",
      "netgear": "Netgear",
      "nexx": "Nexx",
      "ocedo": "OCEDO",
      "onion": "Onion",
      "openmesh": "OpenMesh",
      "plasma-cloud": "Plasma Cloud",
      "raspberry": "Raspberry",
      "tp-link": "TP-LINK",
      "ubiquiti": "Ubiquiti",
      "ubnt": "Ubiquiti",
      "vocore": "VoCore",
      "wd": "Western Digital",
      "x86": "PC",
      "xiaomi": "Xiaomi",
      "zbt": "ZBT",
      "zyxel": "ZyXEL",

    },
    blogpost_4_32 = "/blog/2020/07/21/zukunft-841.html",
    no_factory = ["avm", "8devices", "meraki", "unifi-ac", "gl-ar150", "allnet", "wzr-600dhp"],
    no_factory_deprecated = ["tl-wr841", "alfa-network", "dap-1330", "dir-615", "dir-825"],
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
        has_factory = true,
        is_deprecated = false;
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
      no_factory_deprecated.forEach(function(pattern) {
        if (model.file.indexOf(pattern) != -1)
          is_deprecated = true;
      });
      if (has_factory)
        container.querySelector('.factory a').href =
          firmware_base_url + branch + '/factory/' +
          model.file.replace('-sysupgrade', '').replace(/(-wndr.*)\.(tar|bin)$/, "$1.img");
      else {
        tmpl.querySelector('.factory').remove();
        container.querySelector('.update a').textContent +=' / Erstinstallation';
      }
      if(is_deprecated) {
        container.querySelector('.factory a').href = blogpost_4_32;
        container.querySelector('.factory a').textContent ='Gerät veraltet';
        
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
