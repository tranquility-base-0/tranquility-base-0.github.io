---
layout: project.njk
title: wave-hound
image: proto1-clean_ed.jpg
imageAlt: Wave-hound prototype in a clear acrylic case, showing the internal circuit board and display.
github: https://github.com/tranquility-base-0/wavehound-esp32-wroom
---

Wavehound is a passive Wi-Fi and Bluetooth Low Energy (BLE) scanner for network diagnostics, authorized security reconnaissance, and defensive RF situational awareness. Built around the ESP32-C5, it supports 2.4GHz and 5GHz Wi-Fi scanning, tracking device metadata, signal strength, traffic volume, and burstiness through real-time visualizations and sortable device lists. PCAP mode captures packet metadata and cleartext payloads while flagging suspicious activity, including deauthentication floods, ARP/TCP scans, and evil twin attacks. NETWORKS and CHANNELS modes help identify busy access points and congested or unusual channel activity. BLE mode detects nearby devices and displays advertising metadata and cleartext payloads. FOXHUNT uses real-time signal strength to help locate transmitting devices. CHASE TAIL mode monitors Wi-Fi and BLE device persistence across changing RF environments, alerting the user to devices that may be following them.

For details, see the [github repository](https://github.com/tranquility-base-0/wavehound-esp32-wroom).
