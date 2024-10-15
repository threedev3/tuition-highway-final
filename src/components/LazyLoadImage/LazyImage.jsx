import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ src, alt, width, height, className, onClick }) => (
  <LazyLoadImage
    src={src}
    alt={alt}
    effect="blur"
    width={width}
    height={height}
    className={className}
    onClick={onClick}
  />
);

export default LazyImage;
