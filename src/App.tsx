import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import themeDark from './styles/themeDark';
import themeLight from './styles/themeLight';
import PagePortfolio from './atomicDesign/pages/PagePortfolio';

const App = () => {
  const [light, setLight] = useState(false);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />

      <Box sx={{ flexGrow: 1, mx: 'auto', width: 800 }} px={4}>
        <Box mb={4}>
          <Button onClick={() => setLight((prev) => !prev)}>
            Toggle Theme
          </Button>
        </Box>
        <PagePortfolio />
      </Box>
    </ThemeProvider>
  );
};

export default App;
