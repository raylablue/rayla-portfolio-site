import React from 'react';
import { Box, Link } from '@mui/material';
import Icon from '../atoms/Icon';

const SocialIcons = () => (
  <Box>
    <Link target="_blank" href="https://github.com/raylablue">
      <Icon size="large" name="githubIcon" />
    </Link>
    <br />
    <Link
      target="_blank"
      href="https://www.linkedin.com/in/rayla-ray-blue-99b70223/"
    >
      <Icon size="large" name="linkedinIcon" />
    </Link>
    <br />
    <Link target="_blank" href="https://twitter.com/RaylaDev">
      <Icon size="large" name="twitterIcon" />
    </Link>
  </Box>
);

export default SocialIcons;
