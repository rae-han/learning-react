// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import axios from "axios";
import styled from 'styled-components'
import NewsItem from './NewsItem'
import usePromise from '../lib/usePromise'

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [apiKey] = useState('d0504ad1721e4ce1aeb550102a388565');
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     setLoading(true);

  //     try {
  //       let query = category === 'all' ? '' : `&category=${category}`

  //       let config = {
  //         method: 'get',
  //         url: `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKEy=${apiKey}`
  //       }

  //       const response = await axios(config)

  //       setArticles(response.data.articles)
  //     } catch (e) {
  //       console.log(e)
  //     }
 
  //     setLoading(false)
  //   };

  //   fetchData();
  // }, [apiKey, category]);

  const [loading, response, error] = usePromise(()=>{
    const query = category === 'all' ? '' : `&category=${category}`;

    return axios({
      method: 'get',
      url: `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKEy=${apiKey}`
    })
  }, [apiKey, category])
  console.log(response)

  if(loading) {
    return <NewsListBlock>대기중...</NewsListBlock>
  }
  // if(!articles) {
  //   return null
  // }
  if(!response) {
    return null;
  }
  if(error) {
    return <NewsListBlock>에러발생!</NewsListBlock>
  }

  const { articles } = response.data;
  console.log(articles)
  return (
    <NewsListBlock>
      { articles.map(article => (
        <NewsItem key={article.url} article={article}></NewsItem>
      )) }
    </NewsListBlock>
  );
};

export default NewsList;
 