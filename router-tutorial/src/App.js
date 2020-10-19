import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr/>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      {/* <Route path="/about" component={About} />
        <Route path="/info" component={About} /> */}
    </div>
  );
}

export default App;
