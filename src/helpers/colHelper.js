import React from 'react';
import {
  P,
  Row,
  Col,
  H5,
  Emp,
  Button,
} from 'jam-components';

function createWorkItem(company = '', position = '', timeline = '', url = '') {
  return (
    <Col num="six">
      <H5>{company}</H5>
      <P>{position}</P>
      <P><Emp>{timeline}</Emp></P>
      <Button click={() => window.open(url)} color="blue">About</Button>
    </Col>
  );
}

export function createWorkRows(workItems = []) {
  // Transform all items to JSX
  const workItemsJsx = workItems.map(
    (item) => createWorkItem(item.company, item.position, item.timeline, item.url)
  );
  const rows = [];
  while (workItemsJsx.length !== 0) {
    const first = workItemsJsx.pop();
    const second = workItemsJsx.pop();
    rows.push(
      <Row>
        {first}
        {second}
      </Row>
    );
  }
  return rows;
}
