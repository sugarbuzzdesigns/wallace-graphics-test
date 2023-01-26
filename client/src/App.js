import './App.css';
import React, { Fragment } from 'react';
import ListJob from './components/ListJob';
import Search from './components/Search'

function App() {
  return <Fragment>
    <div>
      <Search />
    </div>
    <div className="container">
      <ListJob />
    </div>
  </Fragment>;
}

export default App;
