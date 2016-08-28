import { render } from './history/history';

// Starting point of the app
const initalState = {
  location: window.location.pathname,
};

window.addEventListener('popstate', () => {
  render({
    location: window.location.pathname,
  });
});

render(initalState);
