import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Button, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import themeDark from './styles/themeDark';
import themeLight from './styles/themeLight';
import ProfilePic from './atomicDesign/atoms/ProfilePic/ProfilePic';

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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={4}>
            <ProfilePic />
            <div>this will be icons to social accounts</div>
            <div>this will be a link to my resume</div>
          </Grid>

          <Grid item md={6}>
            <div>
              this will be a list of my portfolio items
              <div>Portfolio Item 1</div>
              <div>Portfolio Item 2</div>
              <div>Portfolio Item 3</div>
            </div>
          </Grid>

        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
