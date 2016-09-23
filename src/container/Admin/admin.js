import React from 'react';
import {
  Row,
  Col,
  Container,
  H1,
} from 'jam-components';
import SummaryEdit from './summaryEdit';
import ContactEdit from './contactEdit';
import WorkEdit from './workEdit';

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
      <Row>
        <Col num="twelve">
          <WorkEdit />
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
