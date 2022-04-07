import React, { useMemo } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const nameToIcon = {
  codeIcon: <CodeIcon />,
  githubIcon: <GitHubIcon />,
  linkedinIcon: <LinkedInIcon />,
  twitterIcon: <TwitterIcon />,
};

interface IIconsProps {
  name: 'codeIcon' | 'githubIcon' | 'linkedinIcon' | 'twitterIcon';
  size?: 'inherit' | 'large' | 'medium' | 'small';
}

const DEFAULT_SIZE = 'inherit';

const Icon = ({ name, size }: IIconsProps) =>
  useMemo(
    () => ({
      ...nameToIcon[name],
      props: {
        fontSize: size || DEFAULT_SIZE,
      },
    }),
    [name, size],
  );

export default Icon;
