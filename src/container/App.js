import React from 'react';
import Header from './Header/header';
import Portfolio from './Portfolio/portfolio';
import { FadeIn as Fade } from 'jam-components';
import '../styles/App.css';

function App() {
  return (
    <Fade autoplay>
      <Header />
      <Portfolio />
    </Fade>
  );
}

export default App;
