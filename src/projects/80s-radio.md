---
layout: project.njk
title: 80s-radio
github: https://github.com/tranquility-base-0/only80sRadio
image: radio80-0003_ed.jpg
imageAlt: 80s radio prototype
image2: radio80sProto4_ed.png
imageAlt2: 80s radio prototype, board detail
image3: radio80sProto6_ed.png
imageAlt3: 80s radio prototype, wiring detail
---

only80sRadio is a hardware project built around an ESP32-S2 Mini microcontroller, designed to stream internet radio with a devotion to the glorious sounds of the 1980s. The device connects to Wi-Fi and plays audio through an I2S-compatible DAC or amplifier, utilizing the ESP8266Audio library to decode internet radio streams. The code is configured for SomaFM Underground 80s, a channel from the independent, listener-supported, commercial-free internet radio service SomaFM. While the project celebrates 80s music exclusively, the code can be edited to tune into other kinds of internet radio stations if for some reason that becomes necessary. You'll need an ESP32-S2 Mini board, a MAX98357A I2S amplifier, a 3W 4Ω speaker. Add in a rechargeable 3.7V Li-ion battery with a compatible charging/boost module and on/off switch to make it portable. Get creative with the enclosure. We fit our prototype in a gum container (see photos). Try and beat that.

For details, see the [github repository](https://github.com/tranquility-base-0/only80sRadio).
