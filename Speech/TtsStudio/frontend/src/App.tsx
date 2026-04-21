import { useState } from 'react';
import {
  Container,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';

function App() {
  const [voice, setVoice] = useState('en-US');
  const [text, setText] = useState('');

  // connect with backend API to fetch available voices and play synthesized speech
  const handlePlay = async () => {
    console.log(`Playing with voice: ${voice}, text: ${text}`);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Stack spacing={3}>
        <Typography variant="h4">TtsStudio</Typography>

        {/* Voice Selection */}
        <FormControl fullWidth>
          <InputLabel>Voice</InputLabel>
          <Select
            value={voice}
            label="Voice"
            onChange={(e) => setVoice(e.target.value as string)}
          >
            <MenuItem value="en-US">English (US)</MenuItem>
            <MenuItem value="en-GB">English (UK)</MenuItem>
            <MenuItem value="en-AU">English (Australia)</MenuItem>
            <MenuItem value="zh-CN">Chinese (CN)</MenuItem>
          </Select>
        </FormControl>

        {/* Text Input */}
        <TextField
          label="Text to speak"
          multiline
          minRows={4}
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={handlePlay}
          disabled={!text.trim()}
        >
          Play
        </Button>
      </Stack>
    </Container>
  );
}

export default App;
