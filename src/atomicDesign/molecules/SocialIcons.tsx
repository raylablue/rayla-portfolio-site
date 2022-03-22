import React from 'react';
import { Link } from '@mui/material';
import Icon from '../atoms/Icon';

const SocialIcons = () => (
  <div>
    <Link
      color="secondary"
      target="_blank"
      href="https://github.com/raylablue"
    >
      <Icon size="large" name="githubIcon" />
      test
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
  </div>
);

export default SocialIcons;
