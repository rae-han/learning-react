import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewPage = ({ match }) => {
  const category = match.params.category || 'all';
  console.log(match.params)

  return (
    <>
      <Categories></Categories> 
      <NewsList category={category}></NewsList>
    </>
  );
};

export default NewPage;