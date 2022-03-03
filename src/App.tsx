import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import themeDark from './styles/themeDark';
import themeLight from './styles/themeLight';
import ProfilePic from './atomicDesign/atoms/ProfilePic';

const App = () => {
  const [light, setLight] = useState(false);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button
        onClick={() => setLight((prev) => !prev)}
      >
        Toggle Theme
      </Button>
      <ProfilePic />
    </ThemeProvider>
  );
};

export default App;
