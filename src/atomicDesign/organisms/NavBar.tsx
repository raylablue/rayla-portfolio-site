import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Theme from '../atoms/Theme';

const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography color="secondary">Rayla.dev</Typography>
      <Theme />
    </Toolbar>
  </AppBar>
);

export default NavBar;
