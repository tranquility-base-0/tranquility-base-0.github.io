---
layout: project.njk
title: ai-voicebot
github: https://github.com/tranquility-base-0/AIvoiceBot_python
---

AI Voice Bot is a small, experimental voice assistant that facilitates a seamless, real-time conversation loop between a user and a large language model. Its architecture follows a classic three-stage pipeline: speech-to-text turns the user's voice into text, a cloud-hosted LLM generates a response, and text-to-speech speaks the reply back through the device's audio output. The cycle repeats continuously, keeping the conversation active until the user's speech contains the word "goodbye." The assistant's personality and behavior are controlled by a customizable system prompt stored in a simple text file, enabling users to easily adjust the conversational style. As an experimental prototype, the project is intended for educational and exploratory purposes, not production. It requires API keys for its speech and language services, a working microphone, and standard audio processing tools. The project emphasizes privacy and cost transparency, reminding users to review the data policies of the third-party services involved.

The project is maintained in two separate repositories: one written in C++ for the ESP32-S3 microcontroller, and one written in Python for Linux machines.

For the C++ version (runs on the ESP32-S3 microcontroller), see the [github repository](https://github.com/tranquility-base-0/AIvoiceBot_ESP32S3.git).

For the Python version (runs on Linux machines), see the [github repository](https://github.com/tranquility-base-0/AIvoiceBot_python).
