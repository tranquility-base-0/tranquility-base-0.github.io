---
layout: project.njk
title: mini-synth
github: https://github.com/tranquility-base-0/miniSynth
image: miniSynth_configA.jpeg
imageAlt: miniSynth prototype in the MAX98357A speaker-output configuration — a 4×4 button matrix, speaker cone, and hand-drawn heart on a paper note, assembled in a clear acrylic case on a wooden desk.
image2: miniSynth_configB.jpeg
imageAlt2: A second MAX98357A miniSynth build, with the speaker mounted on a cardboard faceplate drawn with a red heart, wiring secured with hot glue above the button matrix.
---

miniSynth is a compact, button-controlled synthesizer and tracker powered by the ESP32-S2 Mini, adapted from Roman Revzin's Crunch-E and extended with alternative hardware options and a PCM510x DAC audio output. The project supports two audio configurations that share the same synthesizer engine, button matrix, and embedded sample data. Option A uses a MAX98357A Class-D amplifier for a compact, self-contained speaker build; Option B uses a PCM510x I²S DAC with a 3.5 mm output for headphones, powered speakers, external audio equipment, or recording into a computer-based DAW. Both builds use the same 4×4 button keypad. The device is powered and programmed over USB, with a rechargeable 3.7V Li-ion/LiPo battery plus a charging and boost-converter module as the portable option. miniSynth builds on Crunch-E's original ESP32 synth/tracker concept; verify upstream licensing terms before redistributing the code or sample material.

For details, see the [github repository](https://github.com/tranquility-base-0/miniSynth).
