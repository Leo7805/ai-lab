import dotenv from 'dotenv';
import sdk from 'microsoft-cognitiveservices-speech-sdk';
import fs from 'fs'; // File System

dotenv.config({ quiet: true });
const key = process.env.AZURE_SPEECH_KEY;
const region = process.env.AZURE_SPEECH_REGION;
const voice = process.env.AZURE_SPEECH_VOICE || 'en-AU-NatashaNeural';

const text = 'Hello, this is a Azure speech synthesis test.';
const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
speechConfig.speechSynthesisVoiceName = voice;

// Output to file
const audioConfig = sdk.AudioConfig.fromAudioFileOutput('output/output.wav');
const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

synthesizer.speakTextAsync(
  text,
  (result) => {
    if (result.reason == sdk.ResultReason.SynthesizingAudioCompleted) {
      console.log('Synthesization completed, save to "output.wav"');
    } else {
      console.error('Synthesization Error:', result.errorDetails);
    }
    synthesizer.close();
  },
  (err) => {
    console.log('Error: ', err);
    synthesizer.close();
  }
);
