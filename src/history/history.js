import React from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs';
import { Router, Route } from 'react-enroute';
import App from '../container/App';
import Item from '../container/Portfolio/portfolioItem';

function animate() {
  anime({
    duration: '1500',
    targets: '#animation',
    rotateY: [90, 0],
    easing: 'easeOutElastic',
  });
}

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
  animate();
  render({
    location: path,
  });
}

window.addEventListener('popstate', () => {
  render({
    location: window.location.pathname,
  });
});
