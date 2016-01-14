---
title:  LWLcom sponsert Server für Webdienste
author: SimJoSt
layout: post
date:   2016-01-14 15:58:00 +0100
---
Durch das Engagement von morpheus haben wir jetzt Zugriff auf einen, von
LWLcom gesponserten, Server. Die Idee ist, alle unsere zentralen Webdienste auf ihn zu migrieren.
Das betrifft:

- Website
- Download-Server
- Wiki
- Karte
- Ticketsystem
- gatemon

Es gibt ganz unterschiedliche Gründe dafür.  
Planetcyborg, welche viele der Dienste die wir nutzen hosten, wären nicht mehr von Freifunk verursachten Server-Problemen betroffen.  
Es kann einfacher ein Zugang für mehr Leute eingerichtet werden, wodurch hoffentlich eine geringere Latenz für das Fixen von Problemen erreicht wird.


In der nächsten Zeit sollen die [Ansible](http://www.ansible.com/)-Rollen in unserem begonnenen [Webdienste-Playbook](https://github.com/FreifunkBremen/ansible/blob/master/playbooks/webserver.yml) vervollständigt werden, um die Migration zu vereinfachen und ein schnelles Wiederaufsetzen bei Ausfall zu ermöglichen. Außerdem sind die Ansible-Rollen eine vollständige Dokumentation dieser Dienste.

Neben der VM für die Webdienste, läuft auch die VM für den BGP-Router auf dem Server.

Wer sich in Zukunft an der Einrichtung oder Administration des neuen Servers beteiligen möchte, ist eingeladen, sich mit den Ansible-Rollen vertraut zu machen, und sie zu testen und zu erweitern. Technische Details zu dem Server werden auf den Freifunktreffen besprochen werden.
