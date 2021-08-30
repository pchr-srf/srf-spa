import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Collection from '../Collection/Collection';
import Spinner from '../Spinner/Spinner';
import './Page.scss';

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        `https://www.srf.ch/landingpage/${id}/json`, {
          mode: 'no-cors'
        }
      );
 
      setLoading(false);
      setData(result.data);
    };
 
    fetchData();
  }, [id]);


  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='page'>
      {data.collections && (
        <ul className='page__collections'>
          {data.collections.map(collection => (
            <li key={collection.urn}>
              <Collection
                teasers={collection.teasers}
                title={collection.title}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
