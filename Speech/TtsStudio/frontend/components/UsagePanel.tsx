import { Box, Container, Stack, Typography } from '@mui/material';

export function UsagePanel() {
  const usage = {
    provider: 'Azure TTS',
    type: 'TTS',
    month: '2026-04',
    requestCount: 123,
    charCount: 8450,
    quota: 50000,
  };

  const remaining = usage.quota - usage.charCount;

  const rows = [
    ['Type', usage.type],
    ['Month', usage.month],
    ['Requests', usage.requestCount],
    ['Characters Used', usage.charCount],
    ['Quota', usage.quota],
    ['Remaining', remaining],
  ];

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Stack spacing={1}>
        {rows.map(([label, value]) => (
          <Box
            key={label}
            sx={{
              display: 'grid',
              gridTemplateColumns: '150px 1fr',
              columnGap: 2,
              alignItems: 'baseline',
            }}
          >
            <Typography
              sx={{
                textAlign: 'left',
                color: 'text.secondary',
                fontSize: '0.875rem',
              }}
            >
              {label}:
            </Typography>
            <Typography
              sx={{
                textAlign: 'left',
                fontWeight: 400,
                fontSize: '0.875rem',
                color: 'text.primary',
              }}
            >
              {value}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
