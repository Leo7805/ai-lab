# AI Lab — Personal AI Tools & Experiments

A lightweight, modular AI Lab for organizing small experimental projects in speech, vision, language, UI systems, and desktop tooling.  
Each folder contains an independent module with its own README and code, designed for quick testing and future reuse.

---

## ✅ Implemented Modules

### Speech
- [TtsBasic](./Speech/TtsBasic/) — Minimal text‑to‑speech example  

### DotnetLab
- [00-HelloMinimalApi](./DotnetLab/00-HelloMinimalApi/HelloMinimalApi/) — Pure .NET 10 Minimal API with zero boilerplate  
- [01-HelloMinimalApiWithSwagger](./DotnetLab/01-HelloMinimalApiWithSwagger/MinimalSwagger/) — Minimal API with Swagger/OpenAPI support via Swashbuckle.AspNetCore


---

## 📁 Modules Overview

```
ai-lab/
│
├─ Speech/                     # Speech-related modules (STT / TTS / Streaming)
│   ├─ SttBasic/               # Minimal speech-to-text example
│   ├─ SttRealtime/            # Real-time STT (WebSocket / streaming)
│   ├─ TtsBasic/               # Minimal text-to-speech example
│   ├─ TtsVoices/              # Voice listing, switching, and testing
│   └─ TtsStreaming/           # Streaming TTS (generate & play in chunks)
│
├─ Vision/                     # Vision modules (OCR / image processing)
│   ├─ OcrBasic/               # Basic OCR example
│   ├─ OcrScreenshot/          # Screenshot OCR (browser or desktop)
│   └─ OcrPdf/                 # PDF text/image extraction
│
├─ Translation/                # Translation & language utilities
│   ├─ AzureTranslation/       # Azure translation API examples
│   ├─ OpenAiTranslation/      # OpenAI-based translation / text processing
│   └─ BilingualDetection/     # English–Chinese mixed text detection
│
├─ Ui/                         # UI components and interaction modules
│   ├─ FloatingWindow/         # Floating window system (reading assistant UI)
│   ├─ SelectionPopup/         # Text selection popup (translate / TTS entry)
│   └─ DraggablePanel/         # Draggable tool panel / utility window
│
├─ Agents/                     # Agent / automation / workflow modules
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
