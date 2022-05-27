import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function AppForm(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mt: 5, mb: 5, pr: 1, pl: 1 }}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}