// ===============================
// Speech-to-text (STT) - Speech recognition wrapper (Web Speech API)
// ===============================
class BrowserSpeechRecognizer {
  constructor({ lang = 'en' } = {}) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR)
      throw new Error('SpeechRecognition is not supported in this browser.');

    this.recognition = new SR();
    this.recognition.lang = lang;
    this.recognition.interimResults = false;
    this.recognition.continuous = false;
    this.recognition.maxAlternatives = 1; // Return only the top result
  }

  // Returns a Promise that resolves with { text, confidence }
  start() {
    return new Promise((resolve, reject) => {
      let finalText = '';

      this.recognition.onresult = (e) => {
        // const last = e.results.length - 1;
        // const text = e.results[last][0].transcript;
        // resolve(text);
        let interimText = '';

        for (let i = e.resultIndex; i < e.results.length; i++) {
          const transcript = e.results[i][0].transcript;

          if (e.results[i].isFinal) {
            finalText += transcript + ' ';
          } else {
            interimText = transcript;
          }
        }

        // Optional: if you want to display live text in UI,
        // you can expose finalText + interimText somewhere
      };

      this.recognition.onerror = (e) => reject(e.error);
      this.recognition.onend = () => {
        resolve(finalText.trim());
      };
      this.recognition.start();
    });
  }
}

// ===============================
// Text-to-Speech (TTS) Wrapper (Web Speech API)
// ===============================
class BrowserSpeechSynthesizer {
  constructor({ lang = 'en', rate = 1, pitch = 1, volume = 1 } = {}) {
    this.lang = lang;
    this.rate = rate;
    this.pitch = pitch;
    this.volume = volume;

    // Load voices asynchronously
    this.voices = [];
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices();
    };
  }

  speak(text) {
    return new Promise((resolve, reject) => {
      if (!('speechSynthesis' in window)) {
        reject('SpeechSynthesis is not supported in this browser.');
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = this.lang;
      utterance.rate = this.rate;
      utterance.pitch = this.pitch;
      utterance.volume = this.volume;

      // Choose voice
      const voice = this.voices.find((v) => v.lang.startsWith(this.lang));
      if (voice) utterance.voice = voice;

      utterance.onend = () => resolve();
      utterance.onerror = (e) => reject(e.error);

      window.speechSynthesis.speak(utterance);
    });
  }

  stop() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

// ===============================
// Application bootstrap
// ===============================
function main() {
  const statusEl = document.getElementById('status');
  const talkBtn = document.getElementById('talk-btn');
  const socket = io(); // socket.io client

  let recognizer = null; // Speech recognizer
  let synthesizer = new BrowserSpeechSynthesizer({ lang: 'en' });

  // Init STT
  try {
    recognizer = new BrowserSpeechRecognizer({ lang: 'en' });
  } catch (err) {
    statusEl.textContent =
      'SpeechRecognition is not supported in this browser.';
    talkBtn.disabled = true;
    return;
  }

  // Button click -> start STT
  talkBtn.addEventListener('click', async () => {
    statusEl.textContent = 'Listening...';

    // Convert speech to text
    try {
      const text = await recognizer.start();
      statusEl.textContent = `You said: ${text} \n`;
      socket.emit('chat message', text);
    } catch (err) {
      statusEl.textContent = `STT error: ${err}`;
    }
  });

  // Sever reply -> speak it
  socket.on('bot reply', async (replyText) => {
    statusEl.textContent += `Bot: ${replyText}`;
    await synthesizer.speak(replyText); // TTS
  });
}

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', main);
