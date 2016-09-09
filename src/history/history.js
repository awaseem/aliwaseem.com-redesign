import React from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs';
import { Router, Route } from 'react-enroute';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import reducer from '../reducer/main';
import App from '../container/App';
import Item from '../container/Portfolio/portfolioItem';
import { getSummary, getContact, getWork, getPortfolio } from '../actions/actions';

const loggerMiddleware = createLogger();

const middlewares = [thunkMiddleware, loggerMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(reducer, Map());

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
    <Provider store={store}>
      <Router {...state}>
        <Route path="/" component={App} />
        <Route path="/item" component={Item} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
  store.dispatch(getSummary());
  store.dispatch(getContact());
  store.dispatch(getWork());
  store.dispatch(getPortfolio());
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
