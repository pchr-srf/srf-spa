import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import Image from '../Image/Image';
import './Article.scss';

const Article = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        `https://www.srf.ch/article/${id}/json`, {
          mode: 'no-cors'
        }
      );
 
      console.log(result.data);
      setData(result.data);
      setLoading(false);
    };
 
    fetchData();
  }, [id]);

  const renderStuff = (element) => {
    
    switch (element.type) {
    case 'paragraph':
      return <p>{element.children[0].text}</p>;
    case 'image':
      return <Image
        urn={element.image}
        legend={element.legend}
        alt={element.alttext}
        source={element.source}
      />;
    default:
      break;
    }
  };


  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="article">
      <p>{data.info.kicker}</p>
      <h1>{data.info.title}</h1>
      <h2>{data.info.headling}</h2>
      <p>{data.info.lead}</p>

      <div className='article__content'>
        {data.content.text.map(renderStuff)}
      </div>
    </div>
  );
};

export default Article;
