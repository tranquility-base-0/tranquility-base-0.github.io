---
layout: project.njk
title: ai-voicebot
github: https://github.com/tranquility-base-0/AIvoiceBot_python
---

AI Voice Bot is a small, experimental voice assistant built in Python that facilitates a seamless, real-time conversation loop between a user and a large language model. The system captures microphone audio and streams it to Deepgram for high-accuracy speech-to-text recognition. The recognized text is then processed by Groq using LangChain and a Llama 3 70B model, generating a response that is subsequently sent to Deepgram Aura Luna for text-to-speech synthesis. The generated audio is streamed and played back through ffplay, allowing the user to hear the assistant's reply instantly. This cycle repeats continuously, keeping the conversation active until the user's speech contains the word "goodbye." The assistant's personality and behavior are controlled by a customizable system prompt stored in a simple text file, enabling users to easily adjust the conversational style. As an experimental prototype, the project leverages a legacy dependency stack from 2024 and is intended for educational and exploratory purposes rather than production environments. It requires API keys for both Groq and Deepgram, a working microphone, and standard audio processing tools. The project emphasizes privacy and cost transparency, reminding users to review the data policies of the third-party services involved.

For the python version (runs on computers), see the [github repository](https://github.com/tranquility-base-0/AIvoiceBot_python).

For the C++ version (runs on the ESP32-S3 microcontroller), see the [github repository](https://github.com/tranquility-base-0/AIvoiceBot_ESP32S3.git).
