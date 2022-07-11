import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Theme from '../atoms/Theme';

const logoTheme = createTheme({
  typography: {
    fontFamily: ['Source Code Pro', 'san-serif'].join(','),
  },
});

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <ThemeProvider theme={logoTheme}>
          <Typography variant="h2" sx={{ mr: 2 }}>
            Rayla.dev
          </Typography>
        </ThemeProvider>
        <Theme />
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
