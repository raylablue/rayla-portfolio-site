import React from 'react';
import { Box } from '@mui/material';

const ProfilePic = () => (
  <Box>
    {/* eslint-disable-next-line global-require */}
    <img alt="Ray Blue" src={require('../../assets/Ray.jpeg')} />
  </Box>
);

export default ProfilePic;
