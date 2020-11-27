import React, { useState, useCallback } from "react";
// import Categories from './components/Categories'
// import NewsList from './components/NewsList'
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewPage'

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), [])

  return (
    <>
      {/* <Categories category={category} onSelect={onSelect}></Categories> */}
      {/* <NewsList category={category}></NewsList> */}
      <Route path="/:category?" component={NewsPage}></Route>
    </>
  )
}

export default App;

// d0504ad1721e4ce1aeb550102a388565
   