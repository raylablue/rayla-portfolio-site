import React from 'react';
import { Box, Link } from '@mui/material';
import Icon from '../atoms/Icon';
import './SocialIcons.css';

const SocialIcons = () => (
  <Box className="m-social_icons">
    <Link
      target="_blank"
      href="https://github.com/raylablue"
      className="m-social_icons__link"
    >
      <Icon size="large" name="githubIcon" />
    </Link>
    <Link
      target="_blank"
      href="https://www.linkedin.com/in/rayla-ray-blue-99b70223/"
      className="m-social_icons__link"
    >
      <Icon size="large" name="linkedinIcon" />
    </Link>
    <Link
      target="_blank"
      href="https://twitter.com/RaylaDev"
      className="m-social_icons__link"
    >
      <Icon size="large" name="twitterIcon" />
    </Link>
  </Box>
);

export default SocialIcons;
