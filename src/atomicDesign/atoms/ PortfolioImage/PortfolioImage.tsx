import React from 'react';
import './PortfolioImage.css';

interface IPortfolioImageProps {
  src: string;
  alt: string;
}

const PortfolioImage = ({ src, alt }: IPortfolioImageProps) => (
  <div className="container">
    <img alt={alt} src={src} className="image" />
  </div>
);

export default PortfolioImage;
