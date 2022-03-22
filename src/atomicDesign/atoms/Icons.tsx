import React, { useMemo } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

const nameToIcon = {
  codeIcon: <CodeIcon />,
  githubIcon: <GitHubIcon />,
};

interface IIconsProps {
  name: 'codeIcon' | 'githubIcon';
}

const Icons = ({ name }: IIconsProps) => {
  const printIcon = useMemo(() => nameToIcon[name], [name]);

  return <div>{printIcon}</div>;
};

export default Icons;
