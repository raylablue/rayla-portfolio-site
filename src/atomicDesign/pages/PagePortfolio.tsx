import React from 'react';
import { Grid } from '@mui/material';
import ProfilePic from '../atoms/ProfilePic/ProfilePic';
import SocialIcons from '../molecules/SocialIcons';

const PagePortfolio = () => (
  <Grid container spacing={2}>
    <Grid item xs={8} md={4}>
      <ProfilePic />
      <SocialIcons />
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
);

export default PagePortfolio;
