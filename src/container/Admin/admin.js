import React from 'react';
import {
  Row,
  Col,
  Container,
  H1,
} from 'jam-components';
import SummaryEdit from './summaryEdit';
import ContactEdit from './contactEdit';
import WorkEdit from './WorkEdit';
import PortfolioEdit from './portfolioEdit';

function Admin() {
  return (
    <Container>
      <H1 align="center">Edit you're site!</H1>
      <Row>
        <Col num="six">
          <SummaryEdit />
        </Col>
        <Col num="six">
          <ContactEdit />
        </Col>
      </Row>
      <br />
      <Row>
        <Col num="six">
          <WorkEdit />
        </Col>
        <Col num="six">
          <PortfolioEdit />
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
