import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import PagePortfolio from './atomicDesign/pages/PagePortfolio';
import NavBar from './atomicDesign/organisms/NavBar';

const raylaTheme = createTheme({
  palette: {
    primary: {
      main: '#544479',
    },
    info: {
      main: '#6845a8',
    },
  },
});
const App = () => (
  <ThemeProvider theme={raylaTheme}>
    <NavBar />
    <PagePortfolio />
  </ThemeProvider>
);

export default App;
