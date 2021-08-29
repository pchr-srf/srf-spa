import React from 'react';
import { Link } from 'react-router-dom';
import './Teaser.scss';

const Teaser = ({
  id,
  title,
  kicker,
  lead,
  src
}) => {
  
  return (
    <Link to={`/article/${id}`} className='teaser'>
      {src && (
        <div className='teaser__image-wrapper'>
          <img className='teaser__image' src={src} loading='lazy' />
        </div>
      )}
      <div className='teaser__text'>
        {kicker && (<p className='teaser__kicker'>{kicker}</p>)}
        {title && (<h3 className='teaser__title'>{title}</h3>)}
        {lead && (<p className='teaser__lead'>{lead}</p>)}
      </div>
    </Link>
  );
};

export default Teaser;
