import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ContrastIcon from '@mui/icons-material/Contrast';
import themeLight from '../../styles/themeLight';
import themeDark from '../../styles/themeDark';

const Theme = () => {
  const [light, setLight] = useState(false);

  let textThemeColor;
  if (light) textThemeColor = themeLight.palette.text.primary;
  if (!light) textThemeColor = themeDark.palette.text.primary;

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />

      <Box sx={{ flexGrow: 1, mx: 'auto', width: 800 }} px={4}>
        <Box mb={4}>
          <Button
            style={{ color: textThemeColor }}
            startIcon={<ContrastIcon />}
            onClick={() => setLight((prev) => !prev)}
          >
            Toggle Theme
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Theme;
