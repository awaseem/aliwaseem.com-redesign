import React from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs';
import { Router, Route } from 'react-enroute';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import reducer from '../reducer/main';
import App from '../container/App';
import Item from '../container/Portfolio/portfolioItem';
import Login from '../container/Admin/login';
import Admin from '../container/Admin/admin';
import NotFound from '../container/Error/404';
import { getSummary, getContact, getWork, getPortfolio } from '../actions/actions';

// const loggerMiddleware = createLogger();

// DEBUG: const middlewares = [thunkMiddleware, loggerMiddleware];

const middlewares = [thunkMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(reducer, Map());

function animate() {
  anime({
    targets: '#animation',
    duration: 2000,
    opacity: [0, 1],
    delay: 250,
  });
}

export function render(state) {
  ReactDOM.render(
    <Provider store={store}>
      <Router {...state}>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/item/:item" component={Item} />
        <Route path="/*" component={NotFound} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
  store.dispatch(getSummary());
  store.dispatch(getContact());
  store.dispatch(getWork());
  store.dispatch(getPortfolio());
  animate();
}

export function navigate(path) {
  // push the location to window history
  window.history.pushState(null, '', path);
  // scroll to top
  window.scrollTo(0, 0);
  render({
    location: path,
  });
}

window.addEventListener('popstate', () => {
  render({
    location: window.location.pathname,
  });
});
