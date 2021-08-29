import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Page from './Components/Page/Page';
import Article from './Components/Article/Article';

const DEFAULT_PAGE_ID = 4267482;
const PAGES = [
  {
    title: 'Home',
    id: 4267482
  }, {
    title: 'News',
    id: 1646
  }, {
    title: 'Sport',
    id: 718
  }, {
    title: 'Kultur',
    id: 454
  }, {
    title: 'Meteo',
    id: 1500794
  }, {
    title: 'Kids',
    id: 18871169
  }, {
    title: 'Wissen',
    id: 630
  }
];

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedPage, setSelectedPage] = useState(DEFAULT_PAGE_ID);

  return (
    <div className="App">
      <Router>
        <Header
          pages={PAGES}
        />
        
        <div className='app__content'>
          <Switch>
            <Route path="/page/:id">
              <Page />
            </Route>
            <Route path="/article/:id">
              <Article />
            </Route>
            <Redirect to={`/page/${DEFAULT_PAGE_ID}`} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
