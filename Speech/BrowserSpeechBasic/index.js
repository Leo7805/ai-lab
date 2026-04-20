import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config({ quiet: true }); // Load environment variables from .env file

const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = new Server(server); // Create a Socket.IO server

const PORT = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(new URL('./views/index.html', import.meta.url).pathname); // Serve the index.html file
});

// Socket.io logic
io.on('connection', (socket) => {
  console.log('Client connected!');

  socket.on('chat message', async (text) => {
    console.log('user: ', text);

    // Placeholder bot response. Browser STT/TTS stays on the client side.
    const reply = await getBotReply(text);

    socket.emit('bot reply', reply);
  });
});

async function getBotReply(text) {
  // Todo: NLP service
  return `What you say is "${text}"`;
}

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
