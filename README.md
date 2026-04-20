# AI Lab — Personal AI Tools & Experiments

A lightweight, modular AI Lab for organizing small experimental projects in speech, vision, language, UI systems, and desktop tooling.  
Each folder contains an independent module with its own README and code, designed for quick testing and future reuse.

---

## ✅ Implemented Modules

### Speech

- [BrowserSpeechBasic](./Speech/BrowserSpeechBasic/) — Low-fidelity browser STT and TTS with the Web Speech API
- [TtsBasic](./Speech/TtsBasic/) — Minimal Azure text-to-speech example
- [TtsStudio](./Speech/TtsStudio/) — Text-to-speech studio API experiment

### DotnetLab

- [00-HelloMinimalApi](./DotnetLab/00-HelloMinimalApi/HelloMinimalApi/) — Pure .NET 10 Minimal API with zero boilerplate
- [01-HelloMinimalApiWithSwagger](./DotnetLab/01-HelloMinimalApiWithSwagger/MinimalSwagger/) — Minimal API with Swagger/OpenAPI support via Swashbuckle.AspNetCore

---

## 📁 Modules Overview

```
ai-lab/
│
├─ Speech/                     # Speech-related modules (STT / TTS / Streaming)
│   ├─ BrowserSpeechBasic/      # Implemented: browser-native low-fidelity STT + TTS
│   ├─ SttBasic/               # Planned: minimal speech-to-text example
│   ├─ SttRealtime/            # Planned: real-time STT (WebSocket / streaming)
│   ├─ TtsBasic/               # Implemented: minimal Azure text-to-speech example
│   ├─ TtsStudio/              # Implemented: text-to-speech studio API experiment
│   ├─ TtsVoices/              # Planned: voice listing, switching, and testing
│   └─ TtsStreaming/           # Planned: streaming TTS (generate & play in chunks)
│
├─ DotnetLab/                  # .NET API experiments
│   ├─ 00-HelloMinimalApi/     # Implemented: pure .NET Minimal API
│   └─ 01-HelloMinimalApiWithSwagger/
│                               # Implemented: Minimal API with Swagger/OpenAPI
│
├─ Vision/                     # Planned vision modules (OCR / image processing)
│   ├─ OcrBasic/               # Basic OCR example
│   ├─ OcrScreenshot/          # Screenshot OCR (browser or desktop)
│   └─ OcrPdf/                 # PDF text/image extraction
│
├─ Translation/                # Planned translation & language utilities
│   ├─ AzureTranslation/       # Azure translation API examples
│   ├─ OpenAiTranslation/      # OpenAI-based translation / text processing
│   └─ BilingualDetection/     # English–Chinese mixed text detection
│
├─ Ui/                         # Planned UI components and interaction modules
│   ├─ FloatingWindow/         # Floating window system (reading assistant UI)
│   ├─ SelectionPopup/         # Text selection popup (translate / TTS entry)
│   └─ DraggablePanel/         # Draggable tool panel / utility window
│
├─ Agents/                     # Planned agent / automation / workflow modules
│   ├─ CodeAgent/              # Code-related agent (explain, generate, fix)
│   ├─ BrowserAgent/           # Browser automation / DOM agent
│   └─ WorkflowAgent/          # Multi-step workflow agent
│
└─ README.md                   # Root-level overview (module index)

```

Each module includes:

- A focused experiment
- Minimal setup
- A dedicated README
- Reusable code for future projects

---

## 🎯 Purpose

This repository serves as a personal sandbox for exploring AI capabilities and building a reusable library of practical modules.

---

## 📄 Notes

- Modules are intentionally small and isolated
- No shared dependencies unless explicitly needed
- Designed for copy‑paste reuse in real applications
