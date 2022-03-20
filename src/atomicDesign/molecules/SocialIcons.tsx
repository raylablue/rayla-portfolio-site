import React from 'react';
import { Link } from '@mui/material';
import Icons from '../atoms/Icons';

const SocialIcons = () => (
  <div>
    <Link
      target="_blank"
      href="https://github.com/raylablue"
    >
      <Icons name="githubIcon" />
    </Link>
    <br />
    <Link
      target="_blank"
      href="https://www.linkedin.com/in/rayla-ray-blue-99b70223/"
    >
      LinkedIn Link
    </Link>
    <br />
    <Link
      target="_blank"
      href="https://twitter.com/RaylaDev"
    >
      Twitter Link
    </Link>
  </div>
);

export default SocialIcons;
