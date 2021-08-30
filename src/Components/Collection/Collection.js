import React from 'react';
import Teaser from '../Teaser/Teaser';
import './Collection.scss';

const Collection = ({
  title,
  teasers = []
}) => {

  const usefulTeasers = teasers.filter(teaser => teaser.contentId && teaser.title);

  // this SPA only renders some teasers, no special cases like static items
  if (usefulTeasers.length === 0) {
    return null;
  }
  
  return (
    <div className='collection'>
      {title && (
        <h2 className='collection__title'>{title}</h2>
      )}
      <ul className='collection__teaser-list'>
        {usefulTeasers.map(teaser => (
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
