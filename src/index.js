import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-enroute';
import App from './container/App';
import Item from './container/Portfolio/portfolioItem';

const initalState = {
  location: window.location.pathname,
};

ReactDOM.render(
  <Router {...initalState}>
    <Route path="/" component={App} />
    <Route path="/item" component={Item} />
  </Router>,
  document.getElementById('root')
);
