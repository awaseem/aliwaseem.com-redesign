import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-enroute';
import App from '../container/App';
import Item from '../container/Portfolio/portfolioItem';

export function render(state) {
  ReactDOM.render(
    <Router {...state}>
      <Route path="/" component={App} />
      <Route path="/item" component={Item} />
    </Router>,
    document.getElementById('root')
  );
}

export function navigate(path) {
  // push the location to window history
  window.history.pushState(null, '', '/item');
  // scroll to top
  window.scrollTo(0, 0);
  // render state
  render({
    location: path,
  });
}

window.addEventListener('popstate', () => {
  render({
    location: window.location.pathname,
  });
});
