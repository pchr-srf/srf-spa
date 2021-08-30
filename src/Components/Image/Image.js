import React from 'react';
import './Image.scss';

const Image = ({
  urn,
  legend,
  alt,
  source
}) => (
  <div className='image'>
    <img
      src={`https://www.srf.ch/static/cms/images/1280w/${urn.split(':').reverse()[0]}.jpg`}
      alt={alt}
    />
    <div className='image__description'>
      <p className='image__legend'>{legend}</p>
      <p className='image__source'>{source}</p>
    </div>
  </div>
);

export default Image;
