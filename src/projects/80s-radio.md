---
layout: project.njk
title: 80s-radio
github: https://github.com/tranquility-base-0/only80sRadio
---

only80sRadio is a hardware project built around an ESP32-S2 Mini microcontroller, designed to stream internet radio with a devotion to the glorious sounds of the 1980s. The device connects to Wi-Fi and plays audio through an I2S-compatible DAC or amplifier, utilizing the ESP8266Audio library to decode internet radio streams. The prototype is currently configured for SomaFM Underground 80s, a channel from the independent, listener-supported, commercial-free internet radio service SomaFM. While the project celebrates 80s music exclusively, it can be reconfigured to tune into any other station on SomaFM for those interested in exploring different genres. The hardware setup features a LOLIN/WEMOS ESP32-S2 Mini board, a MAX98357A I2S amplifier, a 3W 4Ω speaker, and a rechargeable 3.7V Li-ion battery with a compatible charging/boost module. The sketch is implemented in the Arduino IDE using the ESP32 Arduino core, requiring users to configure their local Wi-Fi credentials before compiling. As a basic prototype, the current firmware does not yet implement Wi-Fi connection timeouts, automatic reconnection, robust stream recovery, or comprehensive audio-startup error handling. The project emphasizes supporting independent radio and artists, highlighting that great music runs on community support.

For details, see the [github repository](https://github.com/tranquility-base-0/only80sRadio).
