import React, { useMemo } from 'react';
import CodeIcon from '@mui/icons-material/Code';

const nameToIcon = {
  codeIcon: <CodeIcon />,
};

interface IIconsProps {
  name: 'codeIcon';
}

const Icons = ({ name }: IIconsProps) => {
  const printIcon = useMemo(() => nameToIcon[name], [name]);

  return (
    <div>{printIcon}</div>
  );
};

export default Icons;
