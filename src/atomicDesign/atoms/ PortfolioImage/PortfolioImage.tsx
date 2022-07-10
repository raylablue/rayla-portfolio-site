import React from 'react';
import './PortfolioImage.css';
import { Box } from '@mui/material';

interface IPortfolioImageProps {
  src: string;
  alt: string;
}

const PortfolioImage = ({ src, alt }: IPortfolioImageProps) => (
  <Box className="container">
    <img alt={alt} src={src} className="image" />
  </Box>
);

export default PortfolioImage;
