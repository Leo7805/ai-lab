# Browser Speech Basic

A low-fidelity browser speech module for quick Speech-to-Text and Text-to-Speech experiments.

The browser handles both directions through the Web Speech API:

- STT: `SpeechRecognition` / `webkitSpeechRecognition`
- TTS: `speechSynthesis` / `SpeechSynthesisUtterance`

The Node.js backend only serves the page and echoes a placeholder bot response through Socket.IO. It does not call a cloud speech provider or generate audio files.

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- Web Speech API
- Socket.IO Client

### Backend

- Node.js
- Express
- Socket.IO
- dotenv

## Dependencies

- `express`: backend web framework
- `socket.io`: real-time browser/server messaging
- `dotenv`: loads environment variables such as `PORT`
- `tsx`: runs the development server with file watching

## Project Structure

```text
index.js              Express + Socket.IO backend entry point
views/index.html      Frontend page
public/js/script.js   Browser STT, TTS, and Socket.IO client logic
public/css/style.css  Page styles
.env.example          Example environment variables
```

## Local Setup

Install dependencies:

```bash
npm install
```

Run in development mode:

```bash
npm run dev
```

Run normally:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

To change the port, create a `.env` file:

```env
PORT=3000
```

## Browser Requirements

Speech recognition and speech synthesis depend on browser support. Chrome or another browser that supports `SpeechRecognition` / `webkitSpeechRecognition` and `speechSynthesis` is recommended.

This module is intentionally a browser-native, low-fidelity baseline. Use `../TtsBasic` for the provider-backed Text-to-Speech module.
