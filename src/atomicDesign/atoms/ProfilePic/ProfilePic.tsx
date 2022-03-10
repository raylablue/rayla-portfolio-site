import React from 'react';
import { Box } from '@mui/material';
import './ProfilePic.css';

const ProfilePic = () => (
  <Box>
    {/* eslint-disable-next-line global-require */}
    <img alt="Ray Blue" src={require('../../../assets/Ray.jpeg')} className="photo" />
  </Box>
);

export default ProfilePic;
