import React from 'react';
import Header from './Header/header';
import Portfolio from './Portfolio/portfolio';
import {
  FadeIn as Fade,
  Container,
  Row,
  Col,
} from 'jam-components';
import Summary from './Summary/summary';
import Contact from './Contact/contact';
import Work from './Work/work';
import '../styles/App.css';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col num="six">
            <Summary />
          </Col>
          <Col num="six">
            <Contact />
          </Col>
        </Row>
        <Work />
        <br />
        <Portfolio />
        <br />
      </Container>
    </div>
  );
}

export default App;
