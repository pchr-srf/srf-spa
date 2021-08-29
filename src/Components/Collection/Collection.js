import React from 'react';
import Teaser from '../Teaser/Teaser';
import './Collection.scss';

const Collection = ({
  title,
  teasers = []
}) => {
  
  return (
    <div className='collection'>
      {title && (
        <h2 className='collection__title'>{title}</h2>
      )}
      <ul className='collection__teaser-list'>
        {teasers.filter(teaser => teaser.contentId && teaser.title).map(teaser => (
          <li className='collection__teaser' key={teaser.urn}>
            <Teaser
              id={teaser.contentId}
              link={teaser.link}
              title={teaser.title}
              kicker={teaser.kicker}
              lead={teaser.shortLead}
              src={teaser?.image?.variations['320ws']}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collection;
