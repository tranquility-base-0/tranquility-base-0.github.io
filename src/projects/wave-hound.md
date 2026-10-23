---
layout: project.njk
title: wave-hound
image: proto1-clean_ed.jpg
imageAlt: Wave-hound prototype in a clear acrylic case, showing the internal circuit board and display.
github: https://github.com/tranquility-base-0/wavehound-esp32-wroom
---

Wavehound is a passive wireless and network field instrument built on the ESP32 platform, focused on observing and understanding wireless and network behavior. Designed as a packet-capture and clear-text analysis sniffer, it intercepts 802.11 traffic, parses L2/L3 protocols directly on the device, and surfaces the clear-text data hidden in ordinary network chatter—DNS, mDNS, DHCP, NetBIOS, ARP, and TLS metadata—alongside vendor identification via OUI resolution and a persistent list of notable finds. The system runs on commodity ESP32 hardware paired with a 3.5-inch ILI9488 touch display and a microSD card, allowing capture, parsing, classification, and display to happen entirely on-device. Wavehound is strictly observational: it listens to traffic already on the air and logs what it sees, without decrypting communications or interfering with the networks it observes. Operating modes include WIFI for live channel-hopping capture and device tracking, BLE for Bluetooth scanning, NETWORKS for access-point discovery, CHANNELS for activity metering, and PCAP for promiscuous packet capture to SD card. A distinctive countersurveillance feature, CHASE TAIL, detects devices that persist across changing RF environments—the classic signature of deliberate co-location tracking—by watching for device identities that keep reappearing across distinct environments.

For details, see the [github repository](https://github.com/tranquility-base-0/wavehound-esp32-wroom).
