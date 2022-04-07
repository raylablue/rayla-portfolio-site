import React from 'react';
import { Grid } from '@mui/material';
import ProfilePic from '../atoms/ProfilePic/ProfilePic';
import SocialIcons from '../molecules/SocialIcons';
import PortfolioItems from '../molecules/PortfolioItems';

const PagePortfolio = () => (
  <Grid container justifyContent="center" alignItems="center">
    <Grid item md={8} xs={12}>
      <ProfilePic style={{ margin: '0 auto' }} />

      <SocialIcons />
    </Grid>

    <Grid item md={4} xs={12}>
      <PortfolioItems />
    </Grid>
  </Grid>
);

export default PagePortfolio;
